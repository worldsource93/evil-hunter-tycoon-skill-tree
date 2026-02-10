// data/paladin.js
const IMG = 'https://cafeptthumb-phinf.pstatic.net/';

export const paladinData = {
    holyknight: {
        name: '홀리나이트 영웅 스킬 트리',
        main: { name: '디바인 저지먼트', icon: IMG + 'MjAyNDExMTVfMjY4/MDAxNzMxNjY0MTMyOTcz.YoUi5ozgXWo6GnG3LfPeY0weYM_U2tuf1C1TOwahCfEg.7Cj9uPrGajxWCpQiwlvKxkl4E6apVoIXKTzF58FdE9Eg.PNG/job_trait_all_03.png', desc: '신성한 빛으로 적을 심판한다.', stats: '초당공격력의 120~350% 데미지로 광역공격. 언데드에게 50% 추가 피해 (재사용 대기시간 25초)' },
        tier1: [
            { name: '신성한 일격', icon: IMG + 'MjAyNDExMTVfMjMx/MDAxNzMxNjY0MDYwNDYx.atktD2O8WX8qDdN2TtOZfzFe3h1mJat63o0z0eKidzMg.UhUiAmBnSkew0xTS5U8ExhdOSJOC20cbT9TULEhz6tsg.PNG/job_trait_h1_s1_01.png', desc: '홀리 스트라이크가 더욱 강력해진다.', stats: '홀리 스트라이크 스킬공격력 6.5~20% 증폭' },
            { name: '축복의 빛', icon: IMG + 'MjAyNDExMTVfMjM2/MDAxNzMxNjY0MDY4MDgy.2yqTs5LYPdBWM1UC71Ieygft15kbQ6J6HfGYIrXPjIcg.jcDj0PPv9Dw9rHZpFiK8JefGCRvhJ27RtK3u1qh2NsIg.PNG/job_trait_h1_s1_02.png', desc: '블레싱의 효과가 증가한다.', stats: '블레싱 효과 6.5~20% 증가' },
            { name: '수호의 방패', icon: IMG + 'MjAyNDExMTVfMTYg/MDAxNzMxNjY0MDkzOTc1.CnpFG_IWa697IuJ17B7SUwLpiJ10bUifSAgk7fpQveUg.Hy0Jb6CIvZq5sw57p6Lr_8HzKIse6p3L2Q_-OK3dsz8g.PNG/job_trait_h1_s2_02.png', desc: '실드 블록의 방어력이 증가한다.', stats: '실드 블록 방어력 6.5~20% 증가' }
        ],
        tier2: [
            { name: '전체 공격력', icon: IMG + 'MjAyNDExMTVfMTcg/MDAxNzMxNjY1MDU5MTY3.RuWEVQULGIT0A5z-7CZ917R3Z3ukiCT304UqQ-8r21kg.l3wOeUauaL15NxhW5iOEMPrXP436ZV1mOOewGiGnNtIg.PNG/job_trait_all_01.png', desc: '전체 공격력이 증가한다.', stats: '전체 공격력 23~50% 증가' },
            { name: '체력', icon: IMG + 'MjAyNDExMTVfMTIy/MDAxNzMxNjY1MTk3MjA2.Gh4bXbaCiK4dNdE1Db2Ro6UZfkazyGloKonEVMf1wQUg.mzoKTovmqPuI_aWYixU51dvpfx3QWvjPS-2XUn7JfOog.PNG/job_trait_all_02.png', desc: '체력이 증가한다.', stats: '체력 23~50% 증가' }
        ],
        tier3: [
            { name: '신성 폭발', icon: IMG + 'MjAyNDExMTVfMTUw/MDAxNzMxNjY0MzM3MDg3.h8Q5gzZ1_1Zzmfeqt3IoSY80zIhH9cKFiM_eoUvpg7Ig.mdjYeRze-y0Mimmc2qMXgIKQ1G3FyeKQXbW2ZVwLmQkg.PNG/job_trait_h2_s2_01.png', desc: '홀리 익스플로전이 더욱 강력해진다.', stats: '홀리 익스플로전 스킬공격력 6.5~20% 증폭' },
            { name: '신성 보호막', icon: IMG + 'MjAyNDExMTVfMjYw/MDAxNzMxNjY0MzUxNjI3.ms9MQrFVdGn80S3SvZN2w0qbkmScrFwvvtNchXtHlZAg.9VZ9ve3g-VbPYyO3dEfHlKGLxNlHkXanpcaYOnaEdfgg.PNG/job_trait_h2_s2_03.png', desc: '디바인 실드의 보호막량이 증가한다.', stats: '디바인 실드 보호막량 6.5~20% 증가' },
            { name: '정화의 빛', icon: IMG + 'MjAyNDExMTVfMjY5/MDAxNzMxNjY0MzY0NTE0.vbfyvheoj8wdPtp7-MtSOnacgjbNV3GrCHg31EQYy_8g.-4TMo-dzTyVPa_PDDlh7ieZuzCGLvXnBcOoP2Rd9gJgg.PNG/job_trait_h2_s3_01.png', desc: '퓨리파이가 더욱 많은 디버프를 해제한다.', stats: '퓨리파이 해제 가능 디버프 1~3개 증가' }
        ],
        tier4: [
            { name: '치명타 피해량', icon: IMG + 'MjAyNDExMTVfMjY1/MDAxNzMxNjY1MjAyMTQ0.4rNVYzcNs0saZUN-k9wiNk3cRtVy-Iz4C9tIG3zBLPog.UK85k5op11o0WoHUYBEFwalAZHc6LVoU_F-LsdzgSZAg.PNG/job_trait_all_03.png', desc: '치명타 피해량이 증가한다.', stats: '치명타 피해량 13~40% 증가' },
            { name: '받는 피해 감소', icon: IMG + 'MjAyNDExMTVfMjI2/MDAxNzMxNjY1MjA3NTI1.OkruFLhA64l9NduOuDxXkSolEWex8aoI3fWqgFdeQDEg.kl3M4lTAsaXmUrvDdCA5pWQg_1DB1JmN-Sy_QrlE1b8g.PNG/job_trait_all_04.png', desc: '받는 피해가 감소된다.', stats: '받는 피해 6~15% 감소' }
        ],
        tier5: [
            { name: '천상의 심판', icon: IMG + 'MjAyNDExMTVfMjA5/MDAxNzMxNjY0OTA4NDI5.HgajWM1XXuuNXOgMoAjZoKc25emvn_UbhLadZhKYZT8g.50hClmdcbCQSg7P-04Ia6a9jq4xNcIGF0QKwELVX9xQg.PNG/job_trait_h3_s1_01.png', desc: '디바인 저지먼트의 피해량이 증가한다.', stats: '디바인 저지먼트 스킬공격력 14~50% 증폭' },
            { name: '성스러운 회복', icon: IMG + 'MjAyNDExMTVfMjEy/MDAxNzMxNjY0NzU1NzY5.1FMrhDWekIdsmzwB8g1gz8ZkBOIE4dYD7reKiTkpjFQg.uDJAtehwvydbYGCiFXai2DLGh0T5gGLUoylI5KP7lE4g.PNG/job_trait_h3_s2_01.png', desc: '힐링 프레이어의 치유량이 증가한다.', stats: '힐링 프레이어 치유량 14~50% 증가' },
            { name: '영원한 수호', icon: IMG + 'MjAyNDExMTVfMjQ1/MDAxNzMxNjY1MDAxNTc3.A_iM7Xiwe6YlrGbA3oIvl_jDvyDw3yMpSCxGftaatL8g.iIDZrdT7bbiEmuW6lOw1tAxlMETeNF6nZdmGkHZXBLUg.PNG/job_trait_h3_s3_03.png', desc: '프로텍션의 지속 시간이 증가한다.', stats: '프로텍션 지속 시간 3~10초 증가' }
        ],
        tier6: [
            { name: '신의 분노', icon: IMG + 'MjAyNDExMTVfMTE3/MDAxNzMxNjY1Mzg2ODUy.nRJiz37_RZTUYlr1bpivolRgWE2wqSClsE9Cd9PaOO4g.cx0a5n_7UWk2AI-pxfsa2UbEUjGMSXjJ28GgGi9ev1Yg.PNG/job_trait_all_02.png', desc: '디바인 저지먼트가 적을 기절시킨다.', stats: '디바인 저지먼트 적중시 1~3초간 기절' },
            { name: '신성 연쇄', icon: IMG + 'MjAyNDExMTVfMTE5/MDAxNzMxNjY1MzY2NjQx.9XwWlXtHdv2-Se2QPnR_ihFjyq3J40mkTx7R2WDAbpwg.fuu3PvzFCSNR3QFlQ0Xbi6kFgFMKcsvx2_bqAzFRxCgg.PNG/job_trait_h4_s4_03.png', desc: '디바인 저지먼트가 주변 적에게 연쇄된다.', stats: '디바인 저지먼트 연쇄 대상 1~3명 추가' }
        ]
    },
    highpriest: {
        name: '하이프리스트 영웅 스킬 트리',
        main: { name: '성역', icon: IMG + 'MjAyNDExMTVfMjY4/MDAxNzMxNjY0MTMyOTcz.YoUi5ozgXWo6GnG3LfPeY0weYM_U2tuf1C1TOwahCfEg.7Cj9uPrGajxWCpQiwlvKxkl4E6apVoIXKTzF58FdE9Eg.PNG/job_trait_all_03.png', desc: '신성한 영역을 생성하여 아군을 보호한다.', stats: '10초간 영역 내 아군 받는 피해 20~50% 감소 및 초당 최대체력의 2~5% 회복 (재사용 대기시간 30초)' },
        tier1: [
            { name: '신성한 일격', icon: IMG + 'MjAyNDExMTVfMjMx/MDAxNzMxNjY0MDYwNDYx.atktD2O8WX8qDdN2TtOZfzFe3h1mJat63o0z0eKidzMg.UhUiAmBnSkew0xTS5U8ExhdOSJOC20cbT9TULEhz6tsg.PNG/job_trait_h1_s1_01.png', desc: '홀리 스트라이크가 더욱 강력해진다.', stats: '홀리 스트라이크 스킬공격력 6.5~20% 증폭' },
            { name: '축복의 빛', icon: IMG + 'MjAyNDExMTVfMjM2/MDAxNzMxNjY0MDY4MDgy.2yqTs5LYPdBWM1UC71Ieygft15kbQ6J6HfGYIrXPjIcg.jcDj0PPv9Dw9rHZpFiK8JefGCRvhJ27RtK3u1qh2NsIg.PNG/job_trait_h1_s1_02.png', desc: '블레싱의 효과가 증가한다.', stats: '블레싱 효과 6.5~20% 증가' },
            { name: '수호의 방패', icon: IMG + 'MjAyNDExMTVfMTYg/MDAxNzMxNjY0MDkzOTc1.CnpFG_IWa697IuJ17B7SUwLpiJ10bUifSAgk7fpQveUg.Hy0Jb6CIvZq5sw57p6Lr_8HzKIse6p3L2Q_-OK3dsz8g.PNG/job_trait_h1_s2_02.png', desc: '실드 블록의 방어력이 증가한다.', stats: '실드 블록 방어력 6.5~20% 증가' }
        ],
        tier2: [
            { name: '전체 공격력', icon: IMG + 'MjAyNDExMTVfMTcg/MDAxNzMxNjY1MDU5MTY3.RuWEVQULGIT0A5z-7CZ917R3Z3ukiCT304UqQ-8r21kg.l3wOeUauaL15NxhW5iOEMPrXP436ZV1mOOewGiGnNtIg.PNG/job_trait_all_01.png', desc: '전체 공격력이 증가한다.', stats: '전체 공격력 23~50% 증가' },
            { name: '체력', icon: IMG + 'MjAyNDExMTVfMTIy/MDAxNzMxNjY1MTk3MjA2.Gh4bXbaCiK4dNdE1Db2Ro6UZfkazyGloKonEVMf1wQUg.mzoKTovmqPuI_aWYixU51dvpfx3QWvjPS-2XUn7JfOog.PNG/job_trait_all_02.png', desc: '체력이 증가한다.', stats: '체력 23~50% 증가' }
        ],
        tier3: [
            { name: '신성 폭발', icon: IMG + 'MjAyNDExMTVfMTUw/MDAxNzMxNjY0MzM3MDg3.h8Q5gzZ1_1Zzmfeqt3IoSY80zIhH9cKFiM_eoUvpg7Ig.mdjYeRze-y0Mimmc2qMXgIKQ1G3FyeKQXbW2ZVwLmQkg.PNG/job_trait_h2_s2_01.png', desc: '홀리 익스플로전이 더욱 강력해진다.', stats: '홀리 익스플로전 스킬공격력 6.5~20% 증폭' },
            { name: '신성 보호막', icon: IMG + 'MjAyNDExMTVfMjYw/MDAxNzMxNjY0MzUxNjI3.ms9MQrFVdGn80S3SvZN2w0qbkmScrFwvvtNchXtHlZAg.9VZ9ve3g-VbPYyO3dEfHlKGLxNlHkXanpcaYOnaEdfgg.PNG/job_trait_h2_s2_03.png', desc: '디바인 실드의 보호막량이 증가한다.', stats: '디바인 실드 보호막량 6.5~20% 증가' },
            { name: '정화의 빛', icon: IMG + 'MjAyNDExMTVfMjY5/MDAxNzMxNjY0MzY0NTE0.vbfyvheoj8wdPtp7-MtSOnacgjbNV3GrCHg31EQYy_8g.-4TMo-dzTyVPa_PDDlh7ieZuzCGLvXnBcOoP2Rd9gJgg.PNG/job_trait_h2_s3_01.png', desc: '퓨리파이가 더욱 많은 디버프를 해제한다.', stats: '퓨리파이 해제 가능 디버프 1~3개 증가' }
        ],
        tier4: [
            { name: '치명타 피해량', icon: IMG + 'MjAyNDExMTVfMjY1/MDAxNzMxNjY1MjAyMTQ0.4rNVYzcNs0saZUN-k9wiNk3cRtVy-Iz4C9tIG3zBLPog.UK85k5op11o0WoHUYBEFwalAZHc6LVoU_F-LsdzgSZAg.PNG/job_trait_all_03.png', desc: '치명타 피해량이 증가한다.', stats: '치명타 피해량 13~40% 증가' },
            { name: '받는 피해 감소', icon: IMG + 'MjAyNDExMTVfMjI2/MDAxNzMxNjY1MjA3NTI1.OkruFLhA64l9NduOuDxXkSolEWex8aoI3fWqgFdeQDEg.kl3M4lTAsaXmUrvDdCA5pWQg_1DB1JmN-Sy_QrlE1b8g.PNG/job_trait_all_04.png', desc: '받는 피해가 감소된다.', stats: '받는 피해 6~15% 감소' }
        ],
        tier5: [
            { name: '확장된 성역', icon: IMG + 'MjAyNDExMTVfMjA5/MDAxNzMxNjY0OTA4NDI5.HgajWM1XXuuNXOgMoAjZoKc25emvn_UbhLadZhKYZT8g.50hClmdcbCQSg7P-04Ia6a9jq4xNcIGF0QKwELVX9xQg.PNG/job_trait_h3_s1_01.png', desc: '성역의 범위가 증가한다.', stats: '성역 범위 30~100% 증가' },
            { name: '성스러운 회복', icon: IMG + 'MjAyNDExMTVfMjEy/MDAxNzMxNjY0NzU1NzY5.1FMrhDWekIdsmzwB8g1gz8ZkBOIE4dYD7reKiTkpjFQg.uDJAtehwvydbYGCiFXai2DLGh0T5gGLUoylI5KP7lE4g.PNG/job_trait_h3_s2_01.png', desc: '힐링 프레이어의 치유량이 증가한다.', stats: '힐링 프레이어 치유량 14~50% 증가' },
            { name: '영원한 수호', icon: IMG + 'MjAyNDExMTVfMjQ1/MDAxNzMxNjY1MDAxNTc3.A_iM7Xiwe6YlrGbA3oIvl_jDvyDw3yMpSCxGftaatL8g.iIDZrdT7bbiEmuW6lOw1tAxlMETeNF6nZdmGkHZXBLUg.PNG/job_trait_h3_s3_03.png', desc: '프로텍션의 지속 시간이 증가한다.', stats: '프로텍션 지속 시간 3~10초 증가' }
        ],
        tier6: [
            { name: '축복의 성역', icon: IMG + 'MjAyNDExMTVfMSAg/MDAxNzMxNjY1MTYzOTUw.466zTmYo_NB0AxuNq3N6wY3WXsnLnDUk-cXwKp7niVEg.1xxsYPwvwMMugum3LZfOH2tgMjQ8H60TSn_2IVMkN7cg.PNG/job_trait_h4_s3_02.png', desc: '성역이 아군의 공격력도 증가시킨다.', stats: '성역 내 아군 공격력 10~30% 증가' },
            { name: '불멸의 의지', icon: IMG + 'MjAyNDExMTVfMTI1/MDAxNzMxNjY1MTg0MzU3.OUmXkPbpyFJ0AvJOXYuNEju5EUTDS25dGx2krUfFTFgg.YstVUoqGcxY2p1GtIqKLcNU9TYWSSAAyA4QBiirQF70g.PNG/job_trait_h4_s4_02.png', desc: '성역 내 아군이 치명적 피해를 받을 시 1회 생존한다.', stats: '성역 내 아군 치명적 피해시 1회 생존 (체력 10~30% 회복)' }
        ]
    }
};