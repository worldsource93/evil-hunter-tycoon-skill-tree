// data/berserker.js

export const berserkerData = {
    swordemperor: {
        name: '소드엠페러 영웅 스킬 트리',
        main: { name: '블레이드 피니쉬', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfMTY1/MDAxNzMxNjM3MDkwODMw.vTp12GTVUfUDK87ZrplmW_60EA6S53NPisuhR0Il794g.yd21mgLHZ3kDILlfGmPO7AJ6-2yng8UBKmojVDkGvhwg.PNG/skill_h1_09.png', desc: '하늘에서 검을 소환해 적을 공격한다.', stats: '자신의 초당공격력의 3500~8000% 데미지로 단일 공격' },
        tier1: [
            { name: '숙련된 검술', job: 'common', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfMTU4/MDAxNzMxNjM3MDk5MTU4.4l-KKOVNy-ts1H2CumZ60dn9DavQcWiZt2WHiqZRZEIg.X-5jseJlwH27Mt-_kJ-fmZQlx0aU7k0fCDCwsh2M8lsg.PNG/job_trait_h1_s1_01.png', desc: '숙련된 검술로 퓨리 시전시 일반공격력이 증가한다.', stats: '퓨리 시전시 일반공격 데미지 증가량이 추가로 10~100% 증가(PVP에서 증가량 70% 감폭)' },
            { name: '금지된 마검술', job: 'common', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfMjMz/MDAxNzMxNjM3MTE0NzM3.N79zKCVKuYxQGIPPEHOp1gh08fm_wqEICRihvylQ4OIg.Qlb2efXblfNtj4T5zvdlJC2iB9GuxbPSXefg6g9y2_Ig.PNG/job_trait_h1_s1_02.png', desc: '금지된 마검술로 퓨리 시전시 초당공격력을 증폭시킨다.', stats: '퓨리 시전시 일반공격 피해를 상승시키지 않는 대신 초당공격력을 5~50% 증폭' },
            { name: '철갑전차', job: 'common', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfNTkg/MDAxNzMxNjM3MTIzMDgz.LW-JXTghA_NO8MO7Yc0kxNMXX3bohxWm3Od70r2v-Xgg.emJp-kjQuAbX6wGeIa74_e5B9vzlQdsrPz5Q9G__D3cg.PNG/job_trait_h1_s1_03.png', desc: '워크라이 시전시 자신의 방어를 단단히 한다.', stats: '워크라이 지속시간 중 시전자의 받는 피해 11~20% 감소' }
        ],
        tier2: [
            { name: '전체공격력', job: 'common', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfMjA3/MDAxNzMxNjM3MjA5NDMy.912dGWxt0GOrRb6E7ksGp-RN-sMBFDHha90VYJtBw7wg.DNuCltuo3LM1erMXHQs9PGbvA30zAhiufbJosXVmnyEg.PNG/job_trait_all_01.png', desc: '전체 공격력이 증가한다.', stats: '전체 공격력 23~50% 증가' },
            { name: '체력', job: 'common', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfMTcz/MDAxNzMxNjM3MjAyNjcz.uw3q8tiKFK1aATKacj5BAUDp2oNL2rnHX5u1tvbL7oQg.rBPp0tD-SzWgz3krV-DeQVVPjhh3_nJjqJv33YXPLEIg.PNG/job_trait_all_02.png', desc: '체력이 증가한다.', stats: '체력 23~50% 증가' }
        ],
        tier3: [
            { name: '블레이드 댄스', job: '2-1', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfMjM5/MDAxNzMxNjM3MTM1NTIw.BCYO8_tBL9wmNDx9wf3iRAdLmWHGa3Pdjuz9zI-9IrUg.XmKTM3kkrhHxafr9k_fNw4-JvLujGuAqna15bo_ZYWgg.PNG/job_trait_h1_s2_01.png', desc: '일반 공격중에 현란한 쌍검술로 적을 난도질 한다.', stats: '듀얼웨폰 습득시 일반공격 중 6~15% 확률로 블레이드 댄스 발동.블레이드 댄스 발동시 일반공격 피해 5회 부여(PVP에서 스킬공격력 50% 감폭)' },
            { name: '데스 아머', job: '2-2', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfNTcg/MDAxNzMxNjM3MTQxNzU0.myfuc8DLgzqma21-UNizmX_M0xul7ldc7uY23FHv-h4g.77IH0v9_15ng0XVAbMTLrpjffd0mxSaARBu2sGn1PYUg.PNG/job_trait_h1_s2_02.png', desc: '데스코일의 기운을 몸에 둘러 보호막을 생성한다.', stats: '데스코일 적중시 5초간 시전자 최대체력의 11.5~25% 보호막 생성' },
            { name: '집중타격', job: '2-3', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfOTUg/MDAxNzMxNjM3MTQ3MDU0.R_MZsq0Ig_8Ji3XstJl0dZ2FEbU4-AFFqRPeZr1nXokg.gWqh0VcLnb5Ck13W8j-0k3VxdDm4gBYR-2iDIrWuVmIg.PNG/job_trait_h1_s2_03.png', desc: '펄버라이즈의 파동을 압축하여 공격한다.', stats: '펄버라이즈의 타격 범위 50% 감소. 스킬공격력 5~50% 증폭' }
        ],
        tier4: [
            { name: '치명타 피해량', job: 'common', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfMTYw/MDAxNzMxNjM3MTk1ODkw.e6rVzINNDaXJ5_aYXiddcL0anP-HfDLDtcJGFZNdCs4g.7hMhzzYR4W0qdJDqb11n_kxVHppXhk-FnPmb5pobnCgg.PNG/job_trait_all_03.png', desc: '치명타 피해량이 증가한다.', stats: '치명타 피해량 13~40% 증가' },
            { name: '받는 피해', job: 'common', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfNzIg/MDAxNzMxNjM3MTg4NzA2.vI1bT7uW4EplQdonaBK1x19VSDAQWAo5vuVgEjiC0XMg.Bg7xSqpzJl9jJTRj0njQOI6tzuNPPHPqr0Ijg4FeXNMg.PNG/job_trait_all_04.png', desc: '받는 피해가 감소된다.', stats: '받는 피해 6~15% 감소' }
        ],
        tier5: [
            { name: '무한한 함성', job: '3-1', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfMjYw/MDAxNzMxNjM3MTcwNDI3.z_t7vKpgOkZZFvh5CZXmr53-_x3qJeT_e1VT04OBtPIg.L4xyl1GaZ5V84KWCNIPycWfaZeMTTpGWTBAc1rMusUog.PNG/job_trait_h1_s3_01.png', desc: '배틀샤우트에 내공을 담아 지속시간을 증가시킨다.', stats: '배틀샤우트 지속시간 6~15초 증가' },
            { name: '상처악화', job: '3-2', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfMTAx/MDAxNzMxNjM3MTYzNDgy.sNwa0FscswQNnrjyCdellbwM5IOIuX2N0DIGfrZv2Jcg.4LQjf10UON5K3knEARXUR_WobWPytDfG1Dog4r5luSEg.PNG/job_trait_h1_s3_02.png', desc: '오라블레이드가 쉽게 치유되지 않는 상처를 남긴다.', stats: '오라블레이드의 방어 및 회피 무시 일격 적중시 1초간 상처악화 디버프 적용. 상처악화 디버프는 대상에게 적용되는 체력회복효과와 보호막의 피해흡수량을 15~60% 감폭' },
            { name: '묵직한 회오리', job: '3-3', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfNjEg/MDAxNzMxNjM3MTc3MDEz.mH-i-IOCtpTGqxWMFCOq0EC5Yxf2uG0ZAafh7fKVIusg.qEnD7F1MTYKlyrhif3mf3opV7VQEhFjnsdy8mjo5tpQg.PNG/job_trait_h1_s3_03.png', desc: '싸이클론이 더 강력하게 회전한다.', stats: '싸이클론 스킬공격력 14~50% 증폭' }
        ],
        tier6: [
            { name: '학살의 검', job: 'common', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfMTU0/MDAxNzMxNjY0MDMwNTk5.wEJ_v0xeyxw-HTcDO0i9vaj-zP20mOs9dgkdtIE1Jngg.hYnrbH5EwGjCKnkffilRE9FwDJ-yVNWtD-kwMpAgKmMg.PNG/job_trait_h1_s4_01.png', desc: '블레이드 피니쉬가 여러명의 적을 공격한다.', stats: '블레이드 피니쉬 스킬공격력 70~25% 감폭. 범위 내 여러명을 공격하는 광역 스킬로 변경' },
            { name: '쐐기검', job: 'common', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfNCAg/MDAxNzMxNjY0MDM2OTAx.b0jxcSigy-fbb8XvroViSR2Aoyh-1HNH0emNyhKWDuwg.9pdXejWiCXiFNooCvZ1oy-orbWDXXHBf5Q9wU6ROI0Eg.PNG/job_trait_h1_s4_02.png', desc: '블레이드 피니쉬가 일반공격 중에 발동된다.', stats: '블레이드 피니쉬 스킬공격력 90% 감폭. 일반공격시 16~25% 확률로 발동되는 스킬로 변경' }
        ]
    },
    battlecommander: {
        name: '배틀커맨더 영웅 스킬 트리',
        main: { name: '지휘의 함성', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfNjIg/MDAxNzMxNjY0MjA4NDk1.KjfAZbFDLbykJyeo73o9TkpeWA5CcGvprKFo5NNG0fkg.Ge6itYXUMFoqy49hoI8Co9NK9oIddKVTsO4_fJpO86cg.PNG/skill_h1_10.png', desc: '함성을 크게 내질러 아군의 사기를 진작시킨다.', stats: '주변 아군의 치명타 피해량을 30초 동안 13~40% 증가' },
        tier1: [
            { name: '숙련된 검술', job: 'common', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfMTU4/MDAxNzMxNjM3MDk5MTU4.4l-KKOVNy-ts1H2CumZ60dn9DavQcWiZt2WHiqZRZEIg.X-5jseJlwH27Mt-_kJ-fmZQlx0aU7k0fCDCwsh2M8lsg.PNG/job_trait_h1_s1_01.png', desc: '숙련된 검술로 퓨리 시전시 일반공격력이 증가한다.', stats: '퓨리 시전시 일반공격 데미지 증가량이 추가로 10~100% 증가(PVP에서 증가량 70% 감폭)' },
            { name: '금지된 마검술', job: 'common', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfMjMz/MDAxNzMxNjM3MTE0NzM3.N79zKCVKuYxQGIPPEHOp1gh08fm_wqEICRihvylQ4OIg.Qlb2efXblfNtj4T5zvdlJC2iB9GuxbPSXefg6g9y2_Ig.PNG/job_trait_h1_s1_02.png', desc: '금지된 마검술로 퓨리 시전시 초당공격력을 증폭시킨다.', stats: '퓨리 시전시 일반공격 피해를 상승시키지 않는 대신 초당공격력을 5~50% 증폭' },
            { name: '철갑전차', job: 'common', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfNTkg/MDAxNzMxNjM3MTIzMDgz.LW-JXTghA_NO8MO7Yc0kxNMXX3bohxWm3Od70r2v-Xgg.emJp-kjQuAbX6wGeIa74_e5B9vzlQdsrPz5Q9G__D3cg.PNG/job_trait_h1_s1_03.png', desc: '워크라이 시전시 자신의 방어를 단단히 한다.', stats: '워크라이 지속시간 중 시전자의 받는 피해 11~20% 감소' }
        ],
        tier2: [
            { name: '전체공격력', job: 'common', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfMjA3/MDAxNzMxNjM3MjA5NDMy.912dGWxt0GOrRb6E7ksGp-RN-sMBFDHha90VYJtBw7wg.DNuCltuo3LM1erMXHQs9PGbvA30zAhiufbJosXVmnyEg.PNG/job_trait_all_01.png', desc: '전체 공격력이 증가한다.', stats: '전체 공격력 23~50% 증가' },
            { name: '체력', job: 'common', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfMTcz/MDAxNzMxNjM3MjAyNjcz.uw3q8tiKFK1aATKacj5BAUDp2oNL2rnHX5u1tvbL7oQg.rBPp0tD-SzWgz3krV-DeQVVPjhh3_nJjqJv33YXPLEIg.PNG/job_trait_all_02.png', desc: '체력이 증가한다.', stats: '체력 23~50% 증가' }
        ],
        tier3: [
            { name: '블레이드 댄스', job: '2-1', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfMjM5/MDAxNzMxNjM3MTM1NTIw.BCYO8_tBL9wmNDx9wf3iRAdLmWHGa3Pdjuz9zI-9IrUg.XmKTM3kkrhHxafr9k_fNw4-JvLujGuAqna15bo_ZYWgg.PNG/job_trait_h1_s2_01.png', desc: '일반 공격중에 현란한 쌍검술로 적을 난도질 한다.', stats: '듀얼웨폰 습득시 일반공격 중 6~15% 확률로 블레이드 댄스 발동.블레이드 댄스 발동시 일반공격 피해 5회 부여(PVP에서 스킬공격력 50% 감폭)' },
            { name: '데스 아머', job: '2-2', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfNTcg/MDAxNzMxNjM3MTQxNzU0.myfuc8DLgzqma21-UNizmX_M0xul7ldc7uY23FHv-h4g.77IH0v9_15ng0XVAbMTLrpjffd0mxSaARBu2sGn1PYUg.PNG/job_trait_h1_s2_02.png', desc: '데스코일의 기운을 몸에 둘러 보호막을 생성한다.', stats: '데스코일 적중시 5초간 시전자 최대체력의 11.5~25% 보호막 생성' },
            { name: '집중타격', job: '2-3', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfOTUg/MDAxNzMxNjM3MTQ3MDU0.R_MZsq0Ig_8Ji3XstJl0dZ2FEbU4-AFFqRPeZr1nXokg.gWqh0VcLnb5Ck13W8j-0k3VxdDm4gBYR-2iDIrWuVmIg.PNG/job_trait_h1_s2_03.png', desc: '펄버라이즈의 파동을 압축하여 공격한다.', stats: '펄버라이즈의 타격 범위 50% 감소. 스킬공격력 5~50% 증폭' }
        ],
        tier4: [
            { name: '치명타 피해량', job: 'common', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfMTYw/MDAxNzMxNjM3MTk1ODkw.e6rVzINNDaXJ5_aYXiddcL0anP-HfDLDtcJGFZNdCs4g.7hMhzzYR4W0qdJDqb11n_kxVHppXhk-FnPmb5pobnCgg.PNG/job_trait_all_03.png', desc: '치명타 피해량이 증가한다.', stats: '치명타 피해량 13~40% 증가' },
            { name: '받는 피해', job: 'common', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfNzIg/MDAxNzMxNjM3MTg4NzA2.vI1bT7uW4EplQdonaBK1x19VSDAQWAo5vuVgEjiC0XMg.Bg7xSqpzJl9jJTRj0njQOI6tzuNPPHPqr0Ijg4FeXNMg.PNG/job_trait_all_04.png', desc: '받는 피해가 감소된다.', stats: '받는 피해 6~15% 감소' }
        ],
        tier5: [
            { name: '무한한 함성', job: '3-1', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfMjYw/MDAxNzMxNjM3MTcwNDI3.z_t7vKpgOkZZFvh5CZXmr53-_x3qJeT_e1VT04OBtPIg.L4xyl1GaZ5V84KWCNIPycWfaZeMTTpGWTBAc1rMusUog.PNG/job_trait_h1_s3_01.png', desc: '배틀샤우트에 내공을 담아 지속시간을 증가시킨다.', stats: '배틀샤우트 지속시간 6~15초 증가' },
            { name: '상처악화', job: '3-2', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfMTAx/MDAxNzMxNjM3MTYzNDgy.sNwa0FscswQNnrjyCdellbwM5IOIuX2N0DIGfrZv2Jcg.4LQjf10UON5K3knEARXUR_WobWPytDfG1Dog4r5luSEg.PNG/job_trait_h1_s3_02.png', desc: '오라블레이드가 쉽게 치유되지 않는 상처를 남긴다.', stats: '오라블레이드의 방어 및 회피 무시 일격 적중시 1초간 상처악화 디버프 적용. 상처악화 디버프는 대상에게 적용되는 체력회복효과와 보호막의 피해흡수량을 15~60% 감폭' },
            { name: '묵직한 회오리', job: '3-3', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfNjEg/MDAxNzMxNjM3MTc3MDEz.mH-i-IOCtpTGqxWMFCOq0EC5Yxf2uG0ZAafh7fKVIusg.qEnD7F1MTYKlyrhif3mf3opV7VQEhFjnsdy8mjo5tpQg.PNG/job_trait_h1_s3_03.png', desc: '싸이클론이 더 강력하게 회전한다.', stats: '싸이클론 스킬공격력 14~50% 증폭' }
        ],
        tier6: [
            { name: '용맹한 지휘관', job: 'common', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfMjkz/MDAxNzMxNjY0MTg1MTcz.OpHJl6xnJvXdnIVLnEQJ2aMzloovEHM2bhKAdfLiWWgg.LCPRI8r--jZ37P4HgMpWC--xBvgV8AGZypHOPQIXzxwg.PNG/job_trait_h1_s4_03.png', desc: '지휘의 함성이 아군을 용맹히 전투에 임하게 한다.', stats: '지휘의 함성이 주변 아군에게 30초간 용맹 적용. 용맹은 아군 치명타 피해량을 13~40% 증가' },
            { name: '불굴의 지휘관', job: 'common', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfNjcg/MDAxNzMxNjY0MTkwMTQ1.noW7AB4pFDLITiBuuMGSAXKQ7iuqDT6E1n7E_zQMPAEg.bR9cD6N6hMzX1H2NoXO8qdvtV4MoOUHrNCOAoPyNsTQg.PNG/job_trait_h1_s4_04.png', desc: '지휘의 함성이 지휘관의 육체와 정신을 강화한다.', stats: '지휘의 함성 효과를 받는 동안 자신에게 행동불가 상태이상 면역 및 받는피해 11~20% 감소 효과 부여' }
        ]
    }
};