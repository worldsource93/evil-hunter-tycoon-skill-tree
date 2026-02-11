import { useState } from 'react'
import './App.css'
import { darkknightData } from './data/darkknight'
import { sorcererData } from './data/sorcerer'
import { berserkerData } from './data/berserker'
import { rangerData } from './data/ranger'
import { paladinData } from './data/paladin'
import { JOB_CONFIG } from './data/jobConfig'

// 스킬트리 데이터 통합
const SKILL_TREES = {
    berserker: berserkerData,
    sorcerer: sorcererData,
    ranger: rangerData,
    paladin: paladinData,
    darkknight: darkknightData,
};

// 추천 루트 데이터
const RECOMMENDED_ROUTES = {
    darkknight: [
        { id: 'none', name: '선택 안함', highlights: [] },
    ],
    sorcerer: [
        { id: 'none', name: '선택 안함', highlights: [] },
    ],
    berserker: [
        { id: 'none', name: '선택 안함', highlights: [] },
    ],
    ranger: [
        { id: 'none', name: '선택 안함', highlights: [] },
    ],
    paladin: [
        { id: 'none', name: '선택 안함', highlights: [] },
    ]
};

// 스킬 아이콘 컴포넌트
function SkillIcon({ src }) {
    if (!src) return null;
    return (
        <img 
            src={src} 
            alt="" 
            className="skill-icon" 
            referrerPolicy="no-referrer"
        />
    );
}

// 스킬 카드 컴포넌트
function SkillCard({ skill, highlighted }) {
    return (
        <div className={`skill-card ${highlighted ? 'highlighted' : ''}`}>
            <div className="skill-card-header">
                <SkillIcon src={skill.icon} />
                <span className="skill-card-name">{skill.name}</span>
            </div>
            <div className="skill-card-desc">
                {skill.desc}<br/>
                <span className="skill-stat">{skill.stats}</span>
            </div>
        </div>
    );
}

// 분기 렌더링 컴포넌트
function BranchRow({ skills, highlights, selected2nd, selected3rd }) {
    const filtered = skills.filter(skill => {
        if (!skill.job || skill.job === 'common') return true;
        if (selected2nd !== 'all' && skill.job.startsWith('2-') && skill.job !== selected2nd) return false;
        if (selected3rd !== 'all' && skill.job.startsWith('3-') && skill.job !== selected3rd) return false;
        return true;
    });
    
    const count = filtered.length;
    if (count === 0) return null;
    
    return (
        <div className={`branch-container branch-${count}`}>
            {filtered.map((skill, idx) => (
                <div className="branch-item" key={idx}>
                    <SkillCard skill={skill} highlighted={highlights.includes(skill.name)} />
                </div>
            ))}
        </div>
    );
}

function App() {
    const [selectedClass, setSelectedClass] = useState('berserker');
    const [selectedJob, setSelectedJob] = useState('swordemperor');
    const [selected2nd, setSelected2nd] = useState('all');
    const [selected3rd, setSelected3rd] = useState('all');
    const [selectedRoute, setSelectedRoute] = useState('none');

    const routes = RECOMMENDED_ROUTES[selectedClass] || [];
    const currentRoute = routes.find(r => r.id === selectedRoute);
    const highlights = currentRoute?.highlights || [];

    const classConfig = JOB_CONFIG[selectedClass];
    const classJobs = classConfig?.jobs4th || [];
    const treeData = SKILL_TREES[selectedClass]?.[selectedJob];

    const handleClassChange = (classKey) => {
        setSelectedClass(classKey);
        setSelectedJob(JOB_CONFIG[classKey].jobs4th[0]);
        setSelected2nd('all');
        setSelected3rd('all');
        setSelectedRoute('none');
    };

    return (
        <div className="app">
            {/* 우측 상단 직업 버튼 */}
            <img className="hits" alt="Hits" src="https://hits.sh/github.com/worldsource93.svg?view=today-total"></img>
            <div className="class-tabs">
                {Object.entries(JOB_CONFIG).map(([key, data]) => (
                    <button
                        key={key}
                        className={`class-tab ${selectedClass === key ? 'active' : ''}`}
                        onClick={() => handleClassChange(key)}
                    >
                        {data.name}
                    </button>
                ))}
            </div>

            {/* 2차 전직 선택 */}
            <div className="job-selector">
                <label>2차 전직:</label>
                <select value={selected2nd} onChange={(e) => setSelected2nd(e.target.value)}>
                    <option value="all">전체</option>
                    {classConfig?.jobs2nd.map(job => (
                        <option key={job.id} value={job.id}>{job.name} ({job.skill})</option>
                    ))}
                </select>
            </div>

            {/* 3차 전직 선택 */}
            <div className="job-selector">
                <label>3차 전직:</label>
                <select value={selected3rd} onChange={(e) => setSelected3rd(e.target.value)}>
                    <option value="all">전체</option>
                    {classConfig?.jobs3rd.map(job => (
                        <option key={job.id} value={job.id}>{job.name} ({job.skill})</option>
                    ))}
                </select>
            </div>

            {/* 4차 전직 선택 */}
            <div className="job-selector">
                <label>4차 전직:</label>
                <select 
                    value={selectedJob} 
                    onChange={(e) => setSelectedJob(e.target.value)}
                >
                    {classJobs.map(job => (
                        <option key={job} value={job}>
                            {SKILL_TREES[selectedClass]?.[job]?.name?.replace(' 영웅 스킬 트리', '') || job}
                        </option>
                    ))}
                </select>
            </div>

            {/* 추천 루트 드롭박스 */}
            <div className="route-selector">
                <label>추천 루트:</label>
                <select 
                    value={selectedRoute} 
                    onChange={(e) => setSelectedRoute(e.target.value)}
                >
                    {routes.map(route => (
                        <option key={route.id} value={route.id}>{route.name}</option>
                    ))}
                </select>
            </div>

            {/* 스킬트리 */}
            {treeData ? (
                <div className="skill-tree">
                    <div className="tree-header">{treeData.name}</div>
                    
                    {/* 메인 스킬 */}
                    <div className="tree-level">
                        <div className="vertical-line"></div>
                        <div className="center-node">
                            <div className={`skill-node ${highlights.includes(treeData.main.name) ? 'highlighted' : ''}`}>
                                <SkillIcon src={treeData.main.icon} />
                                <span className="skill-name">{treeData.main.name}</span>
                            </div>
                            <div className="skill-desc-box">
                                {treeData.main.desc}<br/>
                                <span className="skill-stat">{treeData.main.stats}</span>
                            </div>
                        </div>
                    </div>

                    {/* 1티어 */}
                    <div className="tree-level">
                        <div className="vertical-line"></div>
                        <BranchRow skills={treeData.tier1} highlights={highlights} selected2nd={selected2nd} selected3rd={selected3rd} />
                    </div>

                    {/* 2티어 */}
                    <div className="tree-level">
                        <div className="vertical-line"></div>
                        <BranchRow skills={treeData.tier2} highlights={highlights} selected2nd={selected2nd} selected3rd={selected3rd} />
                    </div>

                    {/* 3티어 */}
                    <div className="tree-level">
                        <div className="vertical-line"></div>
                        <BranchRow skills={treeData.tier3} highlights={highlights} selected2nd={selected2nd} selected3rd={selected3rd} />
                    </div>

                    {/* 4티어 */}
                    <div className="tree-level">
                        <div className="vertical-line"></div>
                        <BranchRow skills={treeData.tier4} highlights={highlights} selected2nd={selected2nd} selected3rd={selected3rd} />
                    </div>

                    {/* 5티어 */}
                    <div className="tree-level">
                        <div className="vertical-line"></div>
                        <BranchRow skills={treeData.tier5} highlights={highlights} selected2nd={selected2nd} selected3rd={selected3rd} />
                    </div>

                    {/* 6티어 */}
                    <div className="tree-level">
                        <div className="vertical-line"></div>
                        <BranchRow skills={treeData.tier6} highlights={highlights} selected2nd={selected2nd} selected3rd={selected3rd} />
                        <div style={{height: '20px'}}></div>
                    </div>
                </div>
            ) : (
                <div className="skill-tree">
                    <div className="tree-header">{JOB_CONFIG[selectedClass]?.name} 스킬 트리</div>
                    <div className="empty-state">
                        스킬트리 데이터 준비 중입니다.
                    </div>
                </div>
            )}
        </div>    
    )
}

export default App