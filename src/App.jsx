import { useState } from 'react'
import './App.css'
import { darkknightData } from './data/darkknight'
import { sorcererData } from './data/sorcerer'
import { berserkerData } from './data/berserker'
import { rangerData } from './data/ranger'
import { paladinData } from './data/paladin'

// 직업 데이터
const CLASS_DATA = {
  berserker: { name: '버서커', jobs: ['swordemperor', 'battlecommander'] },
  paladin: { name: '팔라딘', jobs: ['holyknight', 'highpriest'] },
  ranger: { name: '레인져', jobs: ['deadeye', 'starshooter'] },
  sorcerer: { name: '소서러', jobs: ['manalord', 'oppositer'] },
  darkknight: { name: '다크나이트', jobs: ['overlord', 'deathbringer'] },
};

// 스킬트리 데이터 통합
const SKILL_TREES = {
    darkknight: darkknightData,
    sorcerer: sorcererData,
    berserker: berserkerData,
    ranger: rangerData,
    paladin: paladinData
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
function BranchRow({ skills, count, highlights }) {
    return (
        <div className={`branch-container branch-${count}`}>
            {skills.map((skill, idx) => (
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
    const [selectedRoute, setSelectedRoute] = useState('none');

    const routes = RECOMMENDED_ROUTES[selectedClass] || [];
    const currentRoute = routes.find(r => r.id === selectedRoute);
    const highlights = currentRoute?.highlights || [];

    const classJobs = CLASS_DATA[selectedClass]?.jobs || [];
    const treeData = SKILL_TREES[selectedClass]?.[selectedJob];

    const handleClassChange = (classKey) => {
        setSelectedClass(classKey);
        setSelectedJob(CLASS_DATA[classKey].jobs[0]);
        setSelectedRoute('none');
    };

    return (
        <div className="app">
            {/* 우측 상단 직업 버튼 */}
            <div className="class-tabs">
                {Object.entries(CLASS_DATA).map(([key, data]) => (
                    <button
                        key={key}
                        className={`class-tab ${selectedClass === key ? 'active' : ''}`}
                        onClick={() => handleClassChange(key)}
                    >
                        {data.name}
                    </button>
                ))}
            </div>

            {/* 전직 선택 */}
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

                    {/* 1티어 - 3분기 */}
                    <div className="tree-level">
                        <div className="vertical-line"></div>
                        <BranchRow skills={treeData.tier1} count={3} highlights={highlights} />
                    </div>

                    {/* 2티어 - 2분기 */}
                    <div className="tree-level">
                        <div className="vertical-line"></div>
                        <BranchRow skills={treeData.tier2} count={2} highlights={highlights} />
                    </div>

                    {/* 3티어 - 3분기 */}
                    <div className="tree-level">
                        <div className="vertical-line"></div>
                        <BranchRow skills={treeData.tier3} count={3} highlights={highlights} />
                    </div>

                    {/* 4티어 - 2분기 */}
                    <div className="tree-level">
                        <div className="vertical-line"></div>
                        <BranchRow skills={treeData.tier4} count={2} highlights={highlights} />
                    </div>

                    {/* 5티어 - 3분기 */}
                    <div className="tree-level">
                        <div className="vertical-line"></div>
                        <BranchRow skills={treeData.tier5} count={3} highlights={highlights} />
                    </div>

                    {/* 6티어 - 2분기 */}
                    <div className="tree-level">
                        <div className="vertical-line"></div>
                        <BranchRow skills={treeData.tier6} count={2} highlights={highlights} />
                        <div style={{height: '20px'}}></div>
                    </div>
                </div>
            ) : (
                <div className="skill-tree">
                    <div className="tree-header">{CLASS_DATA[selectedClass]?.name} 스킬 트리</div>
                    <div className="empty-state">
                        스킬트리 데이터 준비 중입니다.
                    </div>
                </div>
            )}
        </div>    
    )
}

export default App