// data/berserker.js
const IMG = 'https://cafeptthumb-phinf.pstatic.net/';

export const berserkerData = {
    swordemperor: {
        name: '소드엠페러 영웅 스킬 트리',
        main: { name: '블레이드 피니쉬', icon: IMG + 'MjAyNDExMTVfMTY1/MDAxNzMxNjM3MDkwODMw.vTp12GTVUfUDK87ZrplmW_60EA6S53NPisuhR0Il794g.yd21mgLHZ3kDILlfGmPO7AJ6-2yng8UBKmojVDkGvhwg.PNG/skill_h1_09.png', desc: '강력한 검격으로 적을 마무리한다.', stats: '초당공격력의 100~300% 데미지로 전방 적 공격. 체력이 30% 이하인 적에게 50% 추가 피해 (재사용 대기시간 20초)' },
        tier1: [
            { name: '숙련된 검술', icon: IMG + 'MjAyNDExMTVfMjMx/MDAxNzMxNjY0MDYwNDYx.atktD2O8WX8qDdN2TtOZfzFe3h1mJat63o0z0eKidzMg.UhUiAmBnSkew0xTS5U8ExhdOSJOC20cbT9TULEhz6tsg.PNG/job_trait_h1_s1_01.png', desc: '기본 공격이 더욱 강력해진다.', stats: '기본 공격 피해량 6.5~20% 증가' },
            { name: '금지된 마검술', icon: IMG + 'MjAyNDExMTVfMjM2/MDAxNzMxNjY0MDY4MDgy.2yqTs5LYPdBWM1UC71Ieygft15kbQ6J6HfGYIrXPjIcg.jcDj0PPv9Dw9rHZpFiK8JefGCRvhJ27RtK3u1qh2NsIg.PNG/job_trait_h1_s1_02.png', desc: '데스 코일이 더욱 강력해진다.', stats: '데스 코일 스킬공격력 6.5~20% 증폭' },
            { name: '철갑전차', icon: IMG + 'MjAyNDExMTVfMTYg/MDAxNzMxNjY0MDkzOTc1.CnpFG_IWa697IuJ17B7SUwLpiJ10bUifSAgk7fpQveUg.Hy0Jb6CIvZq5sw57p6Lr_8HzKIse6p3L2Q_-OK3dsz8g.PNG/job_trait_h1_s2_02.png', desc: '펄버라이즈가 더욱 강력해진다.', stats: '펄버라이즈 스킬공격력 6.5~20% 증폭' }
        ],
        tier2: [
            { name: '전체 공격력', icon: IMG + 'MjAyNDExMTVfMTcg/MDAxNzMxNjY1MDU5MTY3.RuWEVQULGIT0A5z-7CZ917R3Z3ukiCT304UqQ-8r21kg.l3wOeUauaL15NxhW5iOEMPrXP436ZV1mOOewGiGnNtIg.PNG/job_trait_all_01.png', desc: '전체 공격력이 증가한다.', stats: '전체 공격력 23~50% 증가' },
            { name: '체력', icon: IMG + 'MjAyNDExMTVfMTIy/MDAxNzMxNjY1MTk3MjA2.Gh4bXbaCiK4dNdE1Db2Ro6UZfkazyGloKonEVMf1wQUg.mzoKTovmqPuI_aWYixU51dvpfx3QWvjPS-2XUn7JfOog.PNG/job_trait_all_02.png', desc: '체력이 증가한다.', stats: '체력 23~50% 증가' }
        ],
        tier3: [
            { name: '블레이드 댄스', icon: IMG + 'MjAyNDExMTVfMTUw/MDAxNzMxNjY0MzM3MDg3.h8Q5gzZ1_1Zzmfeqt3IoSY80zIhH9cKFiM_eoUvpg7Ig.mdjYeRze-y0Mimmc2qMXgIKQ1G3FyeKQXbW2ZVwLmQkg.PNG/job_trait_h2_s2_01.png', desc: '듀얼 웨폰이 더욱 강력해진다.', stats: '듀얼 웨폰 스킬공격력 6.5~20% 증폭' },
            { name: '데스 아머', icon: IMG + 'MjAyNDExMTVfMjYw/MDAxNzMxNjY0MzUxNjI3.ms9MQrFVdGn80S3SvZN2w0qbkmScrFwvvtNchXtHlZAg.9VZ9ve3g-VbPYyO3dEfHlKGLxNlHkXanpcaYOnaEdfgg.PNG/job_trait_h2_s2_03.png', desc: '데스 코일 시전시 보호막을 생성한다.', stats: '데스 코일 시전시 시전자 최대체력의 3~10% 보호막 생성' },
            { name: '집중타격', icon: IMG + 'MjAyNDExMTVfMjY5/MDAxNzMxNjY0MzY0NTE0.vbfyvheoj8wdPtp7-MtSOnacgjbNV3GrCHg31EQYy_8g.-4TMo-dzTyVPa_PDDlh7ieZuzCGLvXnBcOoP2Rd9gJgg.PNG/job_trait_h2_s3_01.png', desc: '펄버라이즈가 적중한 적에게 추가 피해를 입힌다.', stats: '펄버라이즈 적중시 3초간 적에게 5~15% 추가 피해' }
        ],
        tier4: [
            { name: '치명타 피해량', icon: IMG + 'MjAyNDExMTVfMjY1/MDAxNzMxNjY1MjAyMTQ0.4rNVYzcNs0saZUN-k9wiNk3cRtVy-Iz4C9tIG3zBLPog.UK85k5op11o0WoHUYBEFwalAZHc6LVoU_F-LsdzgSZAg.PNG/job_trait_all_03.png', desc: '치명타 피해량이 증가한다.', stats: '치명타 피해량 13~40% 증가' },
            { name: '받는 피해 감소', icon: IMG + 'MjAyNDExMTVfMjI2/MDAxNzMxNjY1MjA3NTI1.OkruFLhA64l9NduOuDxXkSolEWex8aoI3fWqgFdeQDEg.kl3M4lTAsaXmUrvDdCA5pWQg_1DB1JmN-Sy_QrlE1b8g.PNG/job_trait_all_04.png', desc: '받는 피해가 감소된다.', stats: '받는 피해 6~15% 감소' }
        ],
        tier5: [
            { name: '무한한 함성', icon: IMG + 'MjAyNDExMTVfMjA5/MDAxNzMxNjY0OTA4NDI5.HgajWM1XXuuNXOgMoAjZoKc25emvn_UbhLadZhKYZT8g.50hClmdcbCQSg7P-04Ia6a9jq4xNcIGF0QKwELVX9xQg.PNG/job_trait_h3_s1_01.png', desc: '배틀 샤우트의 지속 시간이 증가한다.', stats: '배틀 샤우트 지속 시간 3~10초 증가' },
            { name: '상처악화', icon: IMG + 'MjAyNDExMTVfMjEy/MDAxNzMxNjY0NzU1NzY5.1FMrhDWekIdsmzwB8g1gz8ZkBOIE4dYD7reKiTkpjFQg.uDJAtehwvydbYGCiFXai2DLGh0T5gGLUoylI5KP7lE4g.PNG/job_trait_h3_s2_01.png', desc: '오라 블레이드가 상처를 악화시킨다.', stats: '오라 블레이드 적중시 5초간 적에게 출혈 부여' },
            { name: '묵직한 회오리', icon: IMG + 'MjAyNDExMTVfMjQ1/MDAxNzMxNjY1MDAxNTc3.A_iM7Xiwe6YlrGbA3oIvl_jDvyDw3yMpSCxGftaatL8g.iIDZrdT7bbiEmuW6lOw1tAxlMETeNF6nZdmGkHZXBLUg.PNG/job_trait_h3_s3_03.png', desc: '사이클론이 더욱 강력해진다.', stats: '사이클론 스킬공격력 14~50% 증폭' }
        ],
        tier6: [
            { name: '학살의 검', icon: IMG + 'MjAyNDExMTVfMTE3/MDAxNzMxNjY1Mzg2ODUy.nRJiz37_RZTUYlr1bpivolRgWE2wqSClsE9Cd9PaOO4g.cx0a5n_7UWk2AI-pxfsa2UbEUjGMSXjJ28GgGi9ev1Yg.PNG/job_trait_all_02.png', desc: '블레이드 피니쉬가 더욱 강력해진다.', stats: '블레이드 피니쉬 스킬공격력 16~70% 증폭' },
            { name: '쐐기검', icon: IMG + 'MjAyNDExMTVfMTE5/MDAxNzMxNjY1MzY2NjQx.9XwWlXtHdv2-Se2QPnR_ihFjyq3J40mkTx7R2WDAbpwg.fuu3PvzFCSNR3QFlQ0Xbi6kFgFMKcsvx2_bqAzFRxCgg.PNG/job_trait_h4_s4_03.png', desc: '블레이드 피니쉬 적중시 적을 속박한다.', stats: '블레이드 피니쉬 적중시 2~5초간 적 속박' }
        ]
    },
    battlecommander: {
        name: '배틀커맨더 영웅 스킬 트리',
        main: { name: '지휘의 함성', icon: IMG + 'MjAyNDExMTVfMjU5/MDAxNzMxNjY0Nzg4MDQy.jF9DTWpSyd1KaDO1aNjnjNT5vsI5vMPAE27xQUcYWlkg.ngiLZXvXC3jhwDFfVxRO3HsLUbnF9yyGEHc7csokvRgg.PNG/job_trait_h3_s3_02.png', desc: '전장의 함성으로 아군을 고무시킨다.', stats: '10초간 주변 아군의 공격력 10~30% 증가 (재사용 대기시간 30초)' },
        tier1: [
            { name: '숙련된 검술', icon: IMG + 'MjAyNDExMTVfMjMx/MDAxNzMxNjY0MDYwNDYx.atktD2O8WX8qDdN2TtOZfzFe3h1mJat63o0z0eKidzMg.UhUiAmBnSkew0xTS5U8ExhdOSJOC20cbT9TULEhz6tsg.PNG/job_trait_h1_s1_01.png', desc: '기본 공격이 더욱 강력해진다.', stats: '기본 공격 피해량 6.5~20% 증가' },
            { name: '금지된 마검술', icon: IMG + 'MjAyNDExMTVfMjM2/MDAxNzMxNjY0MDY4MDgy.2yqTs5LYPdBWM1UC71Ieygft15kbQ6J6HfGYIrXPjIcg.jcDj0PPv9Dw9rHZpFiK8JefGCRvhJ27RtK3u1qh2NsIg.PNG/job_trait_h1_s1_02.png', desc: '데스 코일이 더욱 강력해진다.', stats: '데스 코일 스킬공격력 6.5~20% 증폭' },
            { name: '철갑전차', icon: IMG + 'MjAyNDExMTVfMTYg/MDAxNzMxNjY0MDkzOTc1.CnpFG_IWa697IuJ17B7SUwLpiJ10bUifSAgk7fpQveUg.Hy0Jb6CIvZq5sw57p6Lr_8HzKIse6p3L2Q_-OK3dsz8g.PNG/job_trait_h1_s2_02.png', desc: '펄버라이즈가 더욱 강력해진다.', stats: '펄버라이즈 스킬공격력 6.5~20% 증폭' }
        ],
        tier2: [
            { name: '전체 공격력', icon: IMG + 'MjAyNDExMTVfMTcg/MDAxNzMxNjY1MDU5MTY3.RuWEVQULGIT0A5z-7CZ917R3Z3ukiCT304UqQ-8r21kg.l3wOeUauaL15NxhW5iOEMPrXP436ZV1mOOewGiGnNtIg.PNG/job_trait_all_01.png', desc: '전체 공격력이 증가한다.', stats: '전체 공격력 23~50% 증가' },
            { name: '체력', icon: IMG + 'MjAyNDExMTVfMTIy/MDAxNzMxNjY1MTk3MjA2.Gh4bXbaCiK4dNdE1Db2Ro6UZfkazyGloKonEVMf1wQUg.mzoKTovmqPuI_aWYixU51dvpfx3QWvjPS-2XUn7JfOog.PNG/job_trait_all_02.png', desc: '체력이 증가한다.', stats: '체력 23~50% 증가' }
        ],
        tier3: [
            { name: '블레이드 댄스', icon: IMG + 'MjAyNDExMTVfMTUw/MDAxNzMxNjY0MzM3MDg3.h8Q5gzZ1_1Zzmfeqt3IoSY80zIhH9cKFiM_eoUvpg7Ig.mdjYeRze-y0Mimmc2qMXgIKQ1G3FyeKQXbW2ZVwLmQkg.PNG/job_trait_h2_s2_01.png', desc: '듀얼 웨폰이 더욱 강력해진다.', stats: '듀얼 웨폰 스킬공격력 6.5~20% 증폭' },
            { name: '데스 아머', icon: IMG + 'MjAyNDExMTVfMjYw/MDAxNzMxNjY0MzUxNjI3.ms9MQrFVdGn80S3SvZN2w0qbkmScrFwvvtNchXtHlZAg.9VZ9ve3g-VbPYyO3dEfHlKGLxNlHkXanpcaYOnaEdfgg.PNG/job_trait_h2_s2_03.png', desc: '데스 코일 시전시 보호막을 생성한다.', stats: '데스 코일 시전시 시전자 최대체력의 3~10% 보호막 생성' },
            { name: '집중타격', icon: IMG + 'MjAyNDExMTVfMjY5/MDAxNzMxNjY0MzY0NTE0.vbfyvheoj8wdPtp7-MtSOnacgjbNV3GrCHg31EQYy_8g.-4TMo-dzTyVPa_PDDlh7ieZuzCGLvXnBcOoP2Rd9gJgg.PNG/job_trait_h2_s3_01.png', desc: '펄버라이즈가 적중한 적에게 추가 피해를 입힌다.', stats: '펄버라이즈 적중시 3초간 적에게 5~15% 추가 피해' }
        ],
        tier4: [
            { name: '치명타 피해량', icon: IMG + 'MjAyNDExMTVfMjY1/MDAxNzMxNjY1MjAyMTQ0.4rNVYzcNs0saZUN-k9wiNk3cRtVy-Iz4C9tIG3zBLPog.UK85k5op11o0WoHUYBEFwalAZHc6LVoU_F-LsdzgSZAg.PNG/job_trait_all_03.png', desc: '치명타 피해량이 증가한다.', stats: '치명타 피해량 13~40% 증가' },
            { name: '받는 피해 감소', icon: IMG + 'MjAyNDExMTVfMjI2/MDAxNzMxNjY1MjA3NTI1.OkruFLhA64l9NduOuDxXkSolEWex8aoI3fWqgFdeQDEg.kl3M4lTAsaXmUrvDdCA5pWQg_1DB1JmN-Sy_QrlE1b8g.PNG/job_trait_all_04.png', desc: '받는 피해가 감소된다.', stats: '받는 피해 6~15% 감소' }
        ],
        tier5: [
            { name: '무한한 함성', icon: IMG + 'MjAyNDExMTVfMjA5/MDAxNzMxNjY0OTA4NDI5.HgajWM1XXuuNXOgMoAjZoKc25emvn_UbhLadZhKYZT8g.50hClmdcbCQSg7P-04Ia6a9jq4xNcIGF0QKwELVX9xQg.PNG/job_trait_h3_s1_01.png', desc: '배틀 샤우트의 지속 시간이 증가한다.', stats: '배틀 샤우트 지속 시간 3~10초 증가' },
            { name: '상처악화', icon: IMG + 'MjAyNDExMTVfMjEy/MDAxNzMxNjY0NzU1NzY5.1FMrhDWekIdsmzwB8g1gz8ZkBOIE4dYD7reKiTkpjFQg.uDJAtehwvydbYGCiFXai2DLGh0T5gGLUoylI5KP7lE4g.PNG/job_trait_h3_s2_01.png', desc: '오라 블레이드가 상처를 악화시킨다.', stats: '오라 블레이드 적중시 5초간 적에게 출혈 부여' },
            { name: '묵직한 회오리', icon: IMG + 'MjAyNDExMTVfMjQ1/MDAxNzMxNjY1MDAxNTc3.A_iM7Xiwe6YlrGbA3oIvl_jDvyDw3yMpSCxGftaatL8g.iIDZrdT7bbiEmuW6lOw1tAxlMETeNF6nZdmGkHZXBLUg.PNG/job_trait_h3_s3_03.png', desc: '사이클론이 더욱 강력해진다.', stats: '사이클론 스킬공격력 14~50% 증폭' }
        ],
        tier6: [
            { name: '고무적인 외침', icon: IMG + 'MjAyNDExMTVfMSAg/MDAxNzMxNjY1MTYzOTUw.466zTmYo_NB0AxuNq3N6wY3WXsnLnDUk-cXwKp7niVEg.1xxsYPwvwMMugum3LZfOH2tgMjQ8H60TSn_2IVMkN7cg.PNG/job_trait_h4_s3_02.png', desc: '지휘의 함성이 더욱 강력해진다.', stats: '지휘의 함성 공격력 증가 효과 5~20% 추가 증가' },
            { name: '전투 지속', icon: IMG + 'MjAyNDExMTVfMTI1/MDAxNzMxNjY1MTg0MzU3.OUmXkPbpyFJ0AvJOXYuNEju5EUTDS25dGx2krUfFTFgg.YstVUoqGcxY2p1GtIqKLcNU9TYWSSAAyA4QBiirQF70g.PNG/job_trait_h4_s4_02.png', desc: '지휘의 함성 시전시 아군의 받는 피해를 감소시킨다.', stats: '지휘의 함성 시전시 10초간 아군 받는 피해 10~30% 감소' }
        ]
    }
};