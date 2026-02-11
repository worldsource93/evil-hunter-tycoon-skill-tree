// data/jobConfig.js

export const JOB_CONFIG = {
    berserker: {
        name: '버서커',
        jobs2nd: [
            { id: '2-1', name: '듀얼리스트', skill: '듀얼웨폰' },
            { id: '2-2', name: '슬레이어', skill: '데스코일' },
            { id: '2-3', name: '워리어', skill: '펄버라이즈' }
        ],
        jobs3rd: [
            { id: '3-1', name: '바바리안', skill: '배틀샤우트' },
            { id: '3-2', name: '소드세인트', skill: '오라블레이드' },
            { id: '3-3', name: '디스트로이어', skill: '싸이클론' }
        ],
        jobs4th: ['swordemperor', 'battlecommander']
    },
    sorcerer: {
        name: '소서러',
        jobs2nd: [
            { id: '2-1', name: '아크메이지', skill: '블리자드' },
            { id: '2-2', name: '다크메이지', skill: '스톤커즈' },
            { id: '2-3', name: '이그니스', skill: '메테오' }
        ],
        jobs3rd: [
            { id: '3-1', name: '컨저러', skill: '서몬퍼밀리어' },
            { id: '3-2', name: '다크로드', skill: '폴리모프' },
            { id: '3-3', name: '일루셔니스트', skill: '나이트메어' }
        ],
        jobs4th: ['manalord', 'oppositer']
    },
    ranger: {
        name: '레인져',
        jobs2nd: [
            { id: '2-1', name: '호크아이', skill: '레인폴' },
            { id: '2-2', name: '스나이퍼', skill: '스나이핑' },
            { id: '2-3', name: '서모닉아쳐', skill: '서몬피닉스' }
        ],
        jobs3rd: [
            { id: '3-1', name: '민스트럴', skill: '송오브피스' },
            { id: '3-2', name: '스카우트', skill: '포이즌봄' },
            { id: '3-3', name: '아케인아처', skill: '미스틱애로우' }
        ],
        jobs4th: ['deadeye', 'starshooter']
    },
    paladin: {
        name: '팔라딘',
        jobs2nd: [
            { id: '2-1', name: '크루세이더', skill: '블레싱' },
            { id: '2-2', name: '템플러', skill: '실버웨폰' },
            { id: '2-3', name: '다크팔라딘', skill: '다크웨폰' }
        ],
        jobs3rd: [
            { id: '3-1', name: '가디언', skill: '디펜스오라' },
            { id: '3-2', name: '인퀴지터', skill: '핸즈오브갓' },
            { id: '3-3', name: '익스큐터', skill: '익스큐션' }
        ],
        jobs4th: ['holyknight', 'highpriest']
    },
    darkknight: {
        name: '다크나이트',
        jobs2nd: [
            { id: '2-1', name: '둠라이더', skill: '에퀴테이션' },
            { id: '2-2', name: '쉐도우렌서', skill: '쉐도우 스트라이크' },
            { id: '2-3', name: '랜스마스터', skill: '스핀 스플래시' }
        ],
        jobs3rd: [
            { id: '3-1', name: '드래곤나이트', skill: '드래곤 브레스' },
            { id: '3-2', name: '다크로드', skill: '쉐이드 자벨린' },
            { id: '3-3', name: '피어싱나이트', skill: '피어싱 쓰러스트' }
        ],
        jobs4th: ['overlord', 'deathbringer']
    },
};