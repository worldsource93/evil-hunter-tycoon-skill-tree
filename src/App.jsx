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
      { id: '', name: '', highlights: [] },
      ],
      sorcerer: [
        { id: 'none', job: '', name: '선택안함', highlights: [] },
        { id: 'sr-1', job: 'manalord', name: '이그컨저마로(파밍)', highlights: ['피뢰침', '전체공격력', '코멧 클러스터', '치명타 피해량', '하이 퍼밀리어', '라이트닝 오브'] },
        { id: 'sr-2', job: 'manalord', name: '이그컨저마로(콜로)', highlights: ['피뢰침', '전체공격력', '코멧 클러스터', '받는 피해', '하이 퍼밀리어', '라이트닝 오브'] },
        { id: 'sr-3', job: 'manalord', name: '이그일루마로(콜로)', highlights: ['피뢰침', '전체공격력', '코멧 클러스터', '받는 피해', '공포의 지배자', '오버차지'] },
        { id: 'sr-4', job: 'oppositer', name: '닼메컨저마로(월보)', highlights: ['피뢰침', '전체공격력', '상급 저주', '치명타 피해량', '하이 퍼밀리어', '라이트닝 오브'] },
        { id: 'sr-5', job: 'oppositer', name: '닼메닼로마로(월보)', highlights: ['피뢰침', '전체공격력', '상급 저주', '치명타 피해량', '다크 프로텍션', '라이트닝 오브'] },
        { id: 'sr-6', job: 'oppositer', name: '앜메닼로오포(파밍)', highlights: ['아이스 쉴드', '전체공격력', '매서운 눈보라', '받는 피해', '다크 프로텍션', '포스 퓨전'] },
      ],
      berserker: [
        { id: 'none', job: '', name: '선택안함', highlights: [] },
        { id: 'bk-1', job: 'swordemperor', name: '듀얼소세소엠(월보)', highlights: ['숙련된 검술', '전체공격력', '블레이드 댄스', '치명타 피해량', '상처악화', '쐐기검'] },
        { id: 'bk-2', job: 'swordemperor', name: '데코디트소엠(월보)', highlights: ['금지된 마검술', '전체공격력', '데스 아머', '치명타 피해량', '묵직한 회오리', '쐐기검'] },
        { id: 'bk-3', job: 'swordemperor', name: '듀얼바바소엠(월보)', highlights: ['숙련된 검술', '전체공격력', '블레이드 댄스', '치명타 피해량', '무한한 함성', '쐐기검'] },
        { id: 'bk-4', job: 'battlecommander', name: '듀얼소세배커(콜로)', highlights: ['숙련된 검술', '전체공격력', '블레이드 댄스', '받는 피해', '상처악화', '불굴의 지휘관'] },
        { id: 'bk-5', job: 'battlecommander', name: '데코디트배커(월보)', highlights: ['금지된 마검술', '전체공격력', '데스 아머', '치명타 피해량', '묵직한 회오리', '용맹한 지휘관'] },
    ],
    ranger: [
        { id: 'none', job: '', name: '선택 안함', highlights: [] },
        { id: 'rg-1', job: 'deadeye', name: '스나아케데아(월보)', highlights: ['트리플 애로우', '전체공격력', '정밀 사격', '치명타 피해량', '차원 화살', '끈질긴 복수'] },
        { id: 'rg-2', job: 'deadeye', name: '서몬아케데아(월보)', highlights: ['트리플 애로우', '전체공격력', '엘더 피닉스', '치명타 피해량', '차원 화살', '끈질긴 복수'] },
        { id: 'rg-3', job: 'starshooter', name: '호크민스스슈(콜로,파밍)', highlights: ['영체화', '전체공격력', '데들리 레인', '받는 피해', '수호의 찬가', '쇠약의 별'] },
        { id: 'rg-4', job: 'starshooter', name: '호크스카스슈(파밍)', highlights: ['트리플 애로우', '전체공격력', '데들리 레인', '치명타 피해량', '수호의 찬가', '쇠약의 별'] },
      ],
      paladin: [
        { id: 'none', job: '', name: '선택 안함', highlights: [] },
        { id: 'pd-1', job: 'holyknight', name: '크루익큐홀나(콜로)', highlights: ['징벌의 빛', '전체공격력', '위기모면', '받는 피해', '영혼약탈자', '신성폭발'] },
        { id: 'pd-2', job: 'holyknight', name: '실버익큐홀나(월보)', highlights: ['징벌의 빛', '전체공격력', '괴물학살자', '치명타 피해량', '영혼약탈자', '신성폭발'] },
        { id: 'pd-3', job: 'holyknight', name: '다크익큐홀나(파밍)', highlights: ['징벌의 빛', '전체공격력', '어둠불꽃', '치명타 피해량', '영혼약탈자', '신성폭발'] },
        { id: 'pd-4', job: 'highpriest', name: '크루가뎐하프(콜로)', highlights: ['눈부신 빛', '체력', '위기모면', '받는 피해', '강철태세', '생명의 빛'] },
        { id: 'pd-5', job: 'highpriest', name: '다크익큐하프(월보)', highlights: ['징벌의 빛', '전체공격력', '어둠불꽃', '치명타 피해량', '영혼약탈자', '성화의 빛'] },
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

    const routes = RECOMMENDED_ROUTES[selectedClass].filter(d => d.job === selectedJob || d.job === '') || [];
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
          <div>
            <img className="hits" alt="Hits" src="https://hits.sh/github.com/worldsource93.svg?view=today-total"></img>
          </div>
            {/* 우측 상단 직업 버튼 */}
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