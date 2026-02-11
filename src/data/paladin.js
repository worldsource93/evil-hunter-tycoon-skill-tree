// data/paladin.js

export const paladinData = {
    holyknight: {
        name: '홀리나이트 영웅 스킬 트리',
        main: { name: '징벌의 증표', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfMjk1/MDAxNzMxNjY0Mjc4NjUw.vzmY14qC7cHO4DIgvC7V2DPzkHMK26mIQrdkZDeMzN0g.atwUuaQSXfi6nk3cnSN19nCiy18sgFPTIgRHM1N9MnIg.PNG/skill_h2_09.png', desc: '일반 공격시 징벌의 증표를 생성하여 자신을 강화한다.', stats: '일반 공격시 16~25% 확률로 징벌의 증표 획득. 징표는 30초간 지속되며 1개당 자신의 공격력 2% 증폭. 징벌의 증표는 최대 5개까지 보유' },
        tier1: [
            { name: '징벌의 빛', job: 'common', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfMjQ2/MDAxNzMxNjY0MzAzODYy.2-5EyaaZ_wleSXP-GDeO6cbbgwEyBNDki2LcMdt-L_cg.jD3DE5n28eDO2fcADFcVSd_9euqJwZfEYawGL6nReisg.PNG/job_trait_h2_s1_01.png', desc: '홀리라이트가 강력해지고 징벌의 증표를 생성한다.', stats: '홀리라이트의 스킬공격력 12~30% 증폭. 징벌의 증표 스킬을 습득한 경우 홀리라이트 시전시 징벌의 증표 2개 생성' },
            { name: '눈부신 빛', job: 'common', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfMTE0/MDAxNzMxNjY0MzEwMDAz.Jx0nv8ucCrMi85p_8-_P3T4Sc-3K8HsnD077UTuXlP8g.VsZ4FD_Rq0iJw3vFEfz7444hij5iqS1J6BtTWtYtlK4g.PNG/job_trait_h2_s1_02.png', desc: '홀리라이트가 적을 일시적으로 실명시킨다.', stats: '홀리라이트 시전시 적에게 눈부심 효과를 적용하여 3초동안 일반공격 적중률 23~50% 감소' },
            { name: '홀리 배리어', job: 'common', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfMTQ3/MDAxNzMxNjY0MzE1NDcz.mFrilhwdU80WgzKafLPYiiJtsyLwsfMAq075DUXrjjcg.P_p_olHqg6TgukZM1Qn6EgLwn1LyXjnlK5pkwsTkleQg.PNG/job_trait_h2_s1_03.png', desc: '배리어에서 신성한 힘이 흘러나와 주변 적을 공격한다.', stats: '배리어 지속중에 1초마다 초당공격력의 66~120% 데미지로 주변 적 공격' }
        ],
        tier2: [
            { name: '전체공격력', job: 'common', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfMjA3/MDAxNzMxNjM3MjA5NDMy.912dGWxt0GOrRb6E7ksGp-RN-sMBFDHha90VYJtBw7wg.DNuCltuo3LM1erMXHQs9PGbvA30zAhiufbJosXVmnyEg.PNG/job_trait_all_01.png', desc: '전체 공격력이 증가한다.', stats: '전체 공격력 23~50% 증가' },
            { name: '체력', job: 'common', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfMTcz/MDAxNzMxNjM3MjAyNjcz.uw3q8tiKFK1aATKacj5BAUDp2oNL2rnHX5u1tvbL7oQg.rBPp0tD-SzWgz3krV-DeQVVPjhh3_nJjqJv33YXPLEIg.PNG/job_trait_all_02.png', desc: '체력이 증가한다.', stats: '체력 23~50% 증가' }
        ],
        tier3: [
            { name: '위기모면', job: '2-1', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfMTUw/MDAxNzMxNjY0MzM3MDg3.h8Q5gzZ1_1Zzmfeqt3IoSY80zIhH9cKFiM_eoUvpg7Ig.mdjYeRze-y0Mimmc2qMXgIKQ1G3FyeKQXbW2ZVwLmQkg.PNG/job_trait_h2_s2_01.png', desc: '블레싱의 신성한 힘이 받는 피해를 감소시킨다.', stats: '블레싱 지속시간동안 시전자의 받는 피해 16~25% 감소' },
            { name: '괴물학살자', job: '2-2', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfMzYg/MDAxNzMxNjY0MzQ1NDE4.Wew9nDAjB1pBxwPSWspCwFwTzaNpBQHxQU7DaTMwng4g.D7UPZTs4DupLnE9nSj4CsAUQm1rz8nILm8jB6Opib4wg.PNG/job_trait_h2_s2_02.png', desc: '실버웨폰의 빛의 힘이 더 강력해진다.', stats: '실버웨폰 습득시 몬스터에게 주는 피해 11~20% 증가, 악마류 및 언데드류 14~50% 데미지 증가' },
            { name: '어둠불꽃', job: '2-3', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfMjYg/MDAxNzMxNjY0MzUxNjI3.ms9MQrFVdGn80S3SvZN2w0qbkmScrFwvvtNchXtHlZAg.9VZ9ve3g-VbPYyO3dEfHlKGLxNlHkXanpcaYOnaEdfgg.PNG/job_trait_h2_s2_03.png', desc: '다크웨폰의 어둠의 힘이 더 강력해진다.', stats: '다크웨폰 습득시 홀리라이트 스킬공격력 14~50% 증폭. 받는 피해 증가 효과 지속시간 4초 증가' }
        ],
        tier4: [
            { name: '치명타 피해량', job: 'common', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfMTYw/MDAxNzMxNjM3MTk1ODkw.e6rVzINNDaXJ5_aYXiddcL0anP-HfDLDtcJGFZNdCs4g.7hMhzzYR4W0qdJDqb11n_kxVHppXhk-FnPmb5pobnCgg.PNG/job_trait_all_03.png', desc: '치명타 피해량이 증가한다.', stats: '치명타 피해량 13~40% 증가' },
            { name: '받는 피해', job: 'common', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfNzIg/MDAxNzMxNjM3MTg4NzA2.vI1bT7uW4EplQdonaBK1x19VSDAQWAo5vuVgEjiC0XMg.Bg7xSqpzJl9jJTRj0njQOI6tzuNPPHPqr0Ijg4FeXNMg.PNG/job_trait_all_04.png', desc: '받는 피해가 감소된다.', stats: '받는 피해 6~15% 감소' }
        ],
        tier5: [
            { name: '강철태세', job: '3-1', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfMjY5/MDAxNzMxNjY0MzY0NTE0.vbfyvheoj8wdPtp7-MtSOnacgjbNV3GrCHg31EQYy_8g.-4TMo-dzTyVPa_PDDlh7ieZuzCGLvXnBcOoP2Rd9gJgg.PNG/job_trait_h2_s3_01.png', desc: '디펜스오라가 시전자를 더욱 단단하게 한다.', stats: '디펜스오라 시전시 시전자 자신에게 강철 태세 부여. 강철 태세는 받는 피해를 12~30% 감소시키고 3초마다 주변 적을 도발. 강철 태세는 시전자의 디펜스오라 지속시간동안 유지.' },
            { name: '레이지 피스트', job: '3-2', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfMTY2/MDAxNzMxNjY0MzcwODkz.bpdRDCK510Rq76rc0HYmJRgcf5b-vtd4dyWvcq6uMxYg.mVt-Qs7S6d2njDO3Q4Md2xRHeM4tOyFLf0q2JieKfSQg.PNG/job_trait_h2_s3_02.png', desc: '핸즈오브갓이 때때로 분노의 주먹을 떨어뜨린다.', stats: '핸즈오브갓 스킬 효과 중 방어력 및 회피 무시 공격의 스킬공격력 55~100% 증폭' },
            { name: '영혼약탈자', job: '3-3', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfMjM4/MDAxNzMxNjY0Mzc2OTA0.Gk_WmTvR8vnPwpDbDcDNCg2-jQmZ6d1kuWAL4KLUNvEg.3A4maN2VhUQ6hmsLTaAFwoQ2Op3HOJ3cNRnbauDHOPAg.PNG/job_trait_h2_s3_03.png', desc: '익스큐션 스킬이 적의 영혼에 더 강력한 피해를 입힌다.', stats: '익스큐션 스킬 효과 중 방어력 및 회피 무시 공격의 스킬공격력 23~50% 증폭' }
        ],
        tier6: [
            { name: '신성폭발', job: 'common', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfOTYg/MDAxNzMxNjY0Mzg0MTQw.WulEAzlkZdZmm0qEoJQHxGaJRVs76oAFi5CBDabW2Owg.prt2WLggaIw_0wWaAf9oCJVEiQ9rZpXnFLviFlYwBxsg.PNG/job_trait_h2_s4_01.png', desc: '징벌의 증표가 5개 모일시 폭발해 주변 적을 공격한다.', stats: '징벌의 증표 5개 도달시 신성폭발을 일으켜 초당공격력의 920~2000% 데미지로 주변 적 광역공격. 신성폭발시 증표 5개 소모 (PVP에서 스킬공격력 60% 감폭)' },
            { name: '쇄도하는 징벌', job: 'common', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfMzgg/MDAxNzMxNjY0Mzg5NDEx.ZX93oWfRN2kVZRKujiodqrS2wMEeq4fyyzBrA_PCZ-Ag.8Of5hZYE38Qoy0SkNqjGZ-Sk-OdoA9XI8DDFqaJVnv0g.PNG/job_trait_h2_s4_02.png', desc: '징벌의 증표가 빛의 힘을 더 많이 저장한다.', stats: '징벌의 증표가 5개 유지되는 동안 치명타 피해량 13~40% 증가' }
        ]
    },
    highpriest: {
        name: '하이프리스트 영웅 스킬 트리',
        main: { name: '빛의 은총', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfMTky/MDAxNzMxNjY0NTkwMjI2.fqTNPeDua_QBy_IE3MOVi-rCrEPZsUxtGZSQ3ontncwg.cEdPxKSV4RS_Gb6v0o6XThMxggEtBDblrQdtybTQW2Qg.PNG/skill_h2_10.png', desc: '주변 아군에게 빛의 은총을 내려 보호한다.', stats: '주변 아군에게 아군 최대체력의 6~15% 보호막 부여. 보호막은 최대 5초동안 지속' },
        tier1: [
            { name: '징벌의 빛', job: 'common', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfMjQ2/MDAxNzMxNjY0MzAzODYy.2-5EyaaZ_wleSXP-GDeO6cbbgwEyBNDki2LcMdt-L_cg.jD3DE5n28eDO2fcADFcVSd_9euqJwZfEYawGL6nReisg.PNG/job_trait_h2_s1_01.png', desc: '홀리라이트가 강력해지고 징벌의 증표를 생성한다.', stats: '홀리라이트의 스킬공격력 12~30% 증폭. 징벌의 증표 스킬을 습득한 경우 홀리라이트 시전시 징벌의 증표 2개 생성' },
            { name: '눈부신 빛', job: 'common', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfMTE0/MDAxNzMxNjY0MzEwMDAz.Jx0nv8ucCrMi85p_8-_P3T4Sc-3K8HsnD077UTuXlP8g.VsZ4FD_Rq0iJw3vFEfz7444hij5iqS1J6BtTWtYtlK4g.PNG/job_trait_h2_s1_02.png', desc: '홀리라이트가 적을 일시적으로 실명시킨다.', stats: '홀리라이트 시전시 적에게 눈부심 효과를 적용하여 3초동안 일반공격 적중률 23~50% 감소' },
            { name: '홀리 배리어', job: 'common', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfMTQ3/MDAxNzMxNjY0MzE1NDcz.mFrilhwdU80WgzKafLPYiiJtsyLwsfMAq075DUXrjjcg.P_p_olHqg6TgukZM1Qn6EgLwn1LyXjnlK5pkwsTkleQg.PNG/job_trait_h2_s1_03.png', desc: '배리어에서 신성한 힘이 흘러나와 주변 적을 공격한다.', stats: '배리어 지속중에 1초마다 초당공격력의 66~120% 데미지로 주변 적 공격' }
        ],
        tier2: [
            { name: '전체공격력', job: 'common', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfMjA3/MDAxNzMxNjM3MjA5NDMy.912dGWxt0GOrRb6E7ksGp-RN-sMBFDHha90VYJtBw7wg.DNuCltuo3LM1erMXHQs9PGbvA30zAhiufbJosXVmnyEg.PNG/job_trait_all_01.png', desc: '전체 공격력이 증가한다.', stats: '전체 공격력 23~50% 증가' },
            { name: '체력', job: 'common', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfMTcz/MDAxNzMxNjM3MjAyNjcz.uw3q8tiKFK1aATKacj5BAUDp2oNL2rnHX5u1tvbL7oQg.rBPp0tD-SzWgz3krV-DeQVVPjhh3_nJjqJv33YXPLEIg.PNG/job_trait_all_02.png', desc: '체력이 증가한다.', stats: '체력 23~50% 증가' }
        ],
        tier3: [
            { name: '위기모면', job: '2-1', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfMTUw/MDAxNzMxNjY0MzM3MDg3.h8Q5gzZ1_1Zzmfeqt3IoSY80zIhH9cKFiM_eoUvpg7Ig.mdjYeRze-y0Mimmc2qMXgIKQ1G3FyeKQXbW2ZVwLmQkg.PNG/job_trait_h2_s2_01.png', desc: '블레싱의 신성한 힘이 받는 피해를 감소시킨다.', stats: '블레싱 지속시간동안 시전자의 받는 피해 16~25% 감소' },
            { name: '괴물학살자', job: '2-2', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfMzYg/MDAxNzMxNjY0MzQ1NDE4.Wew9nDAjB1pBxwPSWspCwFwTzaNpBQHxQU7DaTMwng4g.D7UPZTs4DupLnE9nSj4CsAUQm1rz8nILm8jB6Opib4wg.PNG/job_trait_h2_s2_02.png', desc: '실버웨폰의 빛의 힘이 더 강력해진다.', stats: '실버웨폰 습득시 몬스터에게 주는 피해 11~20% 증가, 악마류 및 언데드류 14~50% 데미지 증가' },
            { name: '어둠불꽃', job: '2-3', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfMjYg/MDAxNzMxNjY0MzUxNjI3.ms9MQrFVdGn80S3SvZN2w0qbkmScrFwvvtNchXtHlZAg.9VZ9ve3g-VbPYyO3dEfHlKGLxNlHkXanpcaYOnaEdfgg.PNG/job_trait_h2_s2_03.png', desc: '다크웨폰의 어둠의 힘이 더 강력해진다.', stats: '다크웨폰 습득시 홀리라이트 스킬공격력 14~50% 증폭. 받는 피해 증가 효과 지속시간 4초 증가' }
        ],
        tier4: [
            { name: '치명타 피해량', job: 'common', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfMTYw/MDAxNzMxNjM3MTk1ODkw.e6rVzINNDaXJ5_aYXiddcL0anP-HfDLDtcJGFZNdCs4g.7hMhzzYR4W0qdJDqb11n_kxVHppXhk-FnPmb5pobnCgg.PNG/job_trait_all_03.png', desc: '치명타 피해량이 증가한다.', stats: '치명타 피해량 13~40% 증가' },
            { name: '받는 피해', job: 'common', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfNzIg/MDAxNzMxNjM3MTg4NzA2.vI1bT7uW4EplQdonaBK1x19VSDAQWAo5vuVgEjiC0XMg.Bg7xSqpzJl9jJTRj0njQOI6tzuNPPHPqr0Ijg4FeXNMg.PNG/job_trait_all_04.png', desc: '받는 피해가 감소된다.', stats: '받는 피해 6~15% 감소' }
        ],
        tier5: [
            { name: '강철태세', job: '3-1', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfMjY5/MDAxNzMxNjY0MzY0NTE0.vbfyvheoj8wdPtp7-MtSOnacgjbNV3GrCHg31EQYy_8g.-4TMo-dzTyVPa_PDDlh7ieZuzCGLvXnBcOoP2Rd9gJgg.PNG/job_trait_h2_s3_01.png', desc: '디펜스오라가 시전자를 더욱 단단하게 한다.', stats: '디펜스오라 시전시 시전자 자신에게 강철 태세 부여. 강철 태세는 받는 피해를 12~30% 감소시키고 3초마다 주변 적을 도발. 강철 태세는 시전자의 디펜스오라 지속시간동안 유지.' },
            { name: '레이지 피스트', job: '3-2', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfMTY2/MDAxNzMxNjY0MzcwODkz.bpdRDCK510Rq76rc0HYmJRgcf5b-vtd4dyWvcq6uMxYg.mVt-Qs7S6d2njDO3Q4Md2xRHeM4tOyFLf0q2JieKfSQg.PNG/job_trait_h2_s3_02.png', desc: '핸즈오브갓이 때때로 분노의 주먹을 떨어뜨린다.', stats: '핸즈오브갓 스킬 효과 중 방어력 및 회피 무시 공격의 스킬공격력 55~100% 증폭' },
            { name: '영혼약탈자', job: '3-3', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfMjM4/MDAxNzMxNjY0Mzc2OTA0.Gk_WmTvR8vnPwpDbDcDNCg2-jQmZ6d1kuWAL4KLUNvEg.3A4maN2VhUQ6hmsLTaAFwoQ2Op3HOJ3cNRnbauDHOPAg.PNG/job_trait_h2_s3_03.png', desc: '익스큐션 스킬이 적의 영혼에 더 강력한 피해를 입힌다.', stats: '익스큐션 스킬 효과 중 방어력 및 회피 무시 공격의 스킬공격력 23~50% 증폭' }
        ],
        tier6: [
            { name: '성화의 빛', job: 'common', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfODIg/MDAxNzMxNjY0NTIzMzE2.LF963M_qUpwV9XS_0xdrN5M0renW8hFpGAMGrWKY0r8g.qaUuIQKszzkZe97env5DDer5ZyKmSwVHd3lYW95HeScg.PNG/job_trait_h2_s4_04.png', desc: '빛의 은총이 아군의 공격력을 증가시키는 성화의 빛을 부여한다.', stats: '빛의 은총 시전시 주변 아군에게 성화의 빛 부여. 성화의 빛은 10초동안 아군 공격력을 5.5~10% 증폭.' },
            { name: '생명의 빛', job: 'common', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfMTM1/MDAxNzMxNjY0NTMzNDg4.PydBSB9_HjKCs_A1LMso9BGTOYXzDM_nzIyxcPGdrv0g.2yg3UnRODRI5etUoa3FPADCYnlDGsXVnZG-HuWnMsFwg.PNG/job_trait_h2_s4_03.png', desc: '빛의 은총이 아군의 체력을 회복시키는 생명의 빛을 부여한다.', stats: '빛의 은총 시전시 주변 아군에게 생명의 빛 부여. 생명의 빛은 10초동안 아군 최대체력의 6~15% 보호막을 부여하고 매초 아군 최대체력의 2% 회복' }
        ]
    }
};