// data/ranger.js

export const rangerData = {
    deadeye: {
        name: '데드아이 영웅 스킬 트리',
        main: { name: '벤젠스', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfMjU3/MDAxNzMxNjY0NzI0NTcx.smKrKa9zJBNYFFgij1UNBWWTEnG94G13pgFiG5Adr2gg.mfH-w8MXbv2LF9zx2iPWd19ANNDrAzvZeQhhjlT9tXQg.PNG/skill_h3_09.png', desc: '특별한 화살을 사용하는 복수의 화신으로 변신한다.', stats: '10초동안 일반공격시 100% 확률로 복수의 화살을 시전. 복수의 화살은 자신의 초당공격력의 290~650% 데미지로 단일 공격 (PVP에서 스킬공격력 60% 감폭)' },
        tier1: [
            { name: '트리플 애로우', job: 'common', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfMjYz/MDAxNzMxNjY0NzMyMDIz.6QKZUS4RyEX9Q4csGs0xctHJUIhQKn9V0BX3y_6M5u4g.wekOwtCXtc6s2IaiiU1Fr1W3xD1QaUeFV23kKNXP4AEg.PNG/job_trait_h3_s1_01.png', desc: '멀티샷을 3발의 화살로 응축하여 쏘아낸다.', stats: '멀티샷 스킬공격력 7~25% 증폭. 멀티샷 스킬의 총 피해량을 3발의 화살에 나눠 적용.' },
            { name: '신속한 재장전', job: 'common', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfMjU3/MDAxNzMxNjY0NzM4Njgy.EcgBeEjvDxRHqzoeE24j_jADDuPq3pbuRFMSxt57Wxsg.PFGwQZCrM6yRbovaApD0HPLJZcZv9IRFCISQYryQSV0g.PNG/job_trait_h3_s1_02.png', desc: '확률에 따라 멀티샷을 재시전한다.', stats: '멀티샷 시전시 15~33% 확률로 재시전' },
            { name: '영체화', job: 'common', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfMTkx/MDAxNzMxNjY0NzQ2MjMw.w71OGJBz7UAEqzS2JKKIpRLS3N1Q64Zndgl1TWXiUSYg.gFPbGfATs2Po9t6qVb3EgsnNUZMSb2L7OYVXzdNBCicg.PNG/job_trait_h3_s1_03.png', desc: '닷지 지속시간동안 받는 피해 1~10% 감소', stats: '닷지 지속시간동안 받는 피해 1~10% 감소' }
        ],
        tier2: [
            { name: '전체공격력', job: 'common', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfMjA3/MDAxNzMxNjM3MjA5NDMy.912dGWxt0GOrRb6E7ksGp-RN-sMBFDHha90VYJtBw7wg.DNuCltuo3LM1erMXHQs9PGbvA30zAhiufbJosXVmnyEg.PNG/job_trait_all_01.png', desc: '전체 공격력이 증가한다.', stats: '전체 공격력 23~50% 증가' },
            { name: '체력', job: 'common', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfMTcz/MDAxNzMxNjM3MjAyNjcz.uw3q8tiKFK1aATKacj5BAUDp2oNL2rnHX5u1tvbL7oQg.rBPp0tD-SzWgz3krV-DeQVVPjhh3_nJjqJv33YXPLEIg.PNG/job_trait_all_02.png', desc: '체력이 증가한다.', stats: '체력 23~50% 증가' }
        ],
        tier3: [
            { name: '데들리 레인', job: '2-1', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfMjEy/MDAxNzMxNjY0NzU1NzY5.1FMrhDWekIdsmzwB8g1gz8ZkBOIE4dYD7reKiTkpjFQg.uDJAtehwvydbYGCiFXai2DLGh0T5gGLUoylI5KP7lE4g.PNG/job_trait_h3_s2_01.png', desc: '치명적인 화살을 사용해 레인폴을 강화한다.', stats: '레인폴 스킬의 치명타 피해량 26~80% 증가' },
            { name: '정밀 사격', job: '2-2', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfMjkx/MDAxNzMxNjY0NzYyNzcx.b53va98NeLm6LQopUPjGWXB4xr32EutWqDNCy-klQ6Qg.eRgH1wy4EaRF9ZU80rGyHyZI6o8hauKcG74SAePPi5cg.PNG/job_trait_h3_s2_02.png', desc: '더욱 정밀한 사격을 통해 스나이핑을 강화한다.', stats: '스나이핑 스킬공격력 13~40% 증폭' },
            { name: '엘더 피닉스', job: '2-3', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfMTAw/MDAxNzMxNjY0NzcwMDA5.dHLPiX9SEPVHWcE714BYTKAokPv1kYtZ-L5LQvJ5syQg.JYUEqvDiac8NukMEcf-sEN0l0OqLn0hjQM-XGWy0nAkg.PNG/job_trait_h3_s2_03.png', desc: '피닉스가 엘더 피닉스로 진화하여 더 강력해진다.', stats: '서몬피닉스 스킬공격력 55~100% 증폭' }
        ],

        tier4: [
            { name: '치명타 피해량', job: 'common', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfMTYw/MDAxNzMxNjM3MTk1ODkw.e6rVzINNDaXJ5_aYXiddcL0anP-HfDLDtcJGFZNdCs4g.7hMhzzYR4W0qdJDqb11n_kxVHppXhk-FnPmb5pobnCgg.PNG/job_trait_all_03.png', desc: '치명타 피해량이 증가한다.', stats: '치명타 피해량 13~40% 증가' },
            { name: '받는 피해', job: 'common', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfNzIg/MDAxNzMxNjM3MTg4NzA2.vI1bT7uW4EplQdonaBK1x19VSDAQWAo5vuVgEjiC0XMg.Bg7xSqpzJl9jJTRj0njQOI6tzuNPPHPqr0Ijg4FeXNMg.PNG/job_trait_all_04.png', desc: '받는 피해가 감소된다.', stats: '받는 피해 6~15% 감소' }
        ],
        tier5: [
            { name: '수호의 찬가', job: '3-1', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfNzkg/MDAxNzMxNjY0NzgyMTE2.NNhVBMzC1G6cK9cWuYRby6pW8dGjufyC5zpsq6moqAMg.VjcceVa1YFw55bq3UL4tjRT62orWOyXnWXHrD7TJb0gg.PNG/job_trait_h3_s3_01.png', desc: '송오브피스의 체력회복량을 증가시킨다.', stats: '송오브피스의 체력 회복량 0.5~5% 증가' },
            { name: '신경독', job: '3-2', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfMjU5/MDAxNzMxNjY0Nzg4MDQy.jF9DTWpSyd1KaDO1aNjnjNT5vsI5vMPAE27xQUcYWlkg.ngiLZXvXC3jhwDFfVxRO3HsLUbnF9yyGEHc7csokvRgg.PNG/job_trait_h3_s3_02.png', desc: '신경독을 첨가한 독 폭탄을 사용해 포이즌봄을 강화한다.', stats: '포이즌봄 스킬공격력 7.5~30% 증폭. 회피력 감소량 5% 증가' },
            { name: '차원 화살', job: '3-3', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfNzEg/MDAxNzMxNjY0Nzk2MDI4.NKTeC6V9wfG-fGzfCXpTpjfKAeB2VRXMrZG27CsvJEQg.woprLLHCb9SOMuccPbAQR33qU8Ah2HZ9G5O7uSKc73Eg.PNG/job_trait_h3_s3_03.png', desc: '미스틱애로우에 차원의 힘을 담아낸다.', stats: '미스틱애로우의 방어 및 회피 무시 일격 발동시 일반 공격력과 멀티샷 스킬공격력 14~50% 증폭' }
        ],
        tier6: [
            { name: '끈질긴 복수', job: 'common', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfMTQx/MDAxNzMxNjY0ODA4MzM1.BnNUWoq1Ryj7SC9rTUqYdJewNE6aqyC6hJXpyOzDNU4g.5C7vuSovLkfA9mHvtTuai6uGKfCdpWew7qEfUJNRL8cg.PNG/job_trait_h3_s4_01.png', desc: '더 오랫동안 복수의 화신 상태를 유지한다.', stats: '벤젠스 지속시간 1~10초 증가' },
            { name: '평정심', job: 'common', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfMjY3/MDAxNzMxNjY0ODY0NTcw.KwTv02wyQu0U_Z64o0SJP1x5LilZGa1WkaVJNYqN1Ogg.dag3ROjnNhNdaI-AU11uSJC_Fs-W6kkHp8uEdxtZ0ccg.PNG/job_trait_h3_s4_02.png', desc: '마음을 다스려 변신하지 않고 복수의 화살을 시전한다.', stats: '벤젠스 스킬을 사용할 수 없지만 멀티샷 시전시 스킬공격력이 120~300% 증폭된 복수의 화살을 시전' }
        ]
    },
    starshooter: {
        name: '스타슈터 영웅 스킬 트리',
        main: { name: '폴링스타', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfMjIx/MDAxNzMxNjY0ODkxODkz.krNpTMzV7V0Z77wtf-X__3viYWWl2OPIYZ0L5E-WDegg.DDXX36jrvfXkR_THFUqsDupjwVlx8BbqRSxPVd50uN8g.PNG/skill_h3_10.png', desc: '하늘에서 별의 세례를 내려 적들을 공격한다.', stats: '7초동안 초당공격력의 240~600% 데미지로 1초마다 광역공격. (PVP에서 스킬공격력 60% 감폭)' },
        tier1: [
            { name: '트리플 애로우', job: 'common', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfMjYz/MDAxNzMxNjY0NzMyMDIz.6QKZUS4RyEX9Q4csGs0xctHJUIhQKn9V0BX3y_6M5u4g.wekOwtCXtc6s2IaiiU1Fr1W3xD1QaUeFV23kKNXP4AEg.PNG/job_trait_h3_s1_01.png', desc: '멀티샷을 3발의 화살로 응축하여 쏘아낸다.', stats: '멀티샷 스킬공격력 7~25% 증폭. 멀티샷 스킬의 총 피해량을 3발의 화살에 나눠 적용.' },
            { name: '신속한 재장전', job: 'common', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfMjU3/MDAxNzMxNjY0NzM4Njgy.EcgBeEjvDxRHqzoeE24j_jADDuPq3pbuRFMSxt57Wxsg.PFGwQZCrM6yRbovaApD0HPLJZcZv9IRFCISQYryQSV0g.PNG/job_trait_h3_s1_02.png', desc: '확률에 따라 멀티샷을 재시전한다.', stats: '멀티샷 시전시 15~33% 확률로 재시전' },
            { name: '영체화', job: 'common', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfMTkx/MDAxNzMxNjY0NzQ2MjMw.w71OGJBz7UAEqzS2JKKIpRLS3N1Q64Zndgl1TWXiUSYg.gFPbGfATs2Po9t6qVb3EgsnNUZMSb2L7OYVXzdNBCicg.PNG/job_trait_h3_s1_03.png', desc: '닷지 지속시간동안 받는 피해 1~10% 감소', stats: '닷지 지속시간동안 받는 피해 1~10% 감소' }
        ],
        tier2: [
            { name: '전체공격력', job: 'common', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfMjA3/MDAxNzMxNjM3MjA5NDMy.912dGWxt0GOrRb6E7ksGp-RN-sMBFDHha90VYJtBw7wg.DNuCltuo3LM1erMXHQs9PGbvA30zAhiufbJosXVmnyEg.PNG/job_trait_all_01.png', desc: '전체 공격력이 증가한다.', stats: '전체 공격력 23~50% 증가' },
            { name: '체력', job: 'common', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfMTcz/MDAxNzMxNjM3MjAyNjcz.uw3q8tiKFK1aATKacj5BAUDp2oNL2rnHX5u1tvbL7oQg.rBPp0tD-SzWgz3krV-DeQVVPjhh3_nJjqJv33YXPLEIg.PNG/job_trait_all_02.png', desc: '체력이 증가한다.', stats: '체력 23~50% 증가' }
        ],
        tier3: [
            { name: '데들리 레인', job: '2-1', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfMjEy/MDAxNzMxNjY0NzU1NzY5.1FMrhDWekIdsmzwB8g1gz8ZkBOIE4dYD7reKiTkpjFQg.uDJAtehwvydbYGCiFXai2DLGh0T5gGLUoylI5KP7lE4g.PNG/job_trait_h3_s2_01.png', desc: '치명적인 화살을 사용해 레인폴을 강화한다.', stats: '레인폴 스킬의 치명타 피해량 26~80% 증가' },
            { name: '정밀 사격', job: '2-2', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfMjkx/MDAxNzMxNjY0NzYyNzcx.b53va98NeLm6LQopUPjGWXB4xr32EutWqDNCy-klQ6Qg.eRgH1wy4EaRF9ZU80rGyHyZI6o8hauKcG74SAePPi5cg.PNG/job_trait_h3_s2_02.png', desc: '더욱 정밀한 사격을 통해 스나이핑을 강화한다.', stats: '스나이핑 스킬공격력 13~40% 증폭' },
            { name: '엘더 피닉스', job: '2-3', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfMTAw/MDAxNzMxNjY0NzcwMDA5.dHLPiX9SEPVHWcE714BYTKAokPv1kYtZ-L5LQvJ5syQg.JYUEqvDiac8NukMEcf-sEN0l0OqLn0hjQM-XGWy0nAkg.PNG/job_trait_h3_s2_03.png', desc: '피닉스가 엘더 피닉스로 진화하여 더 강력해진다.', stats: '서몬피닉스 스킬공격력 55~100% 증폭' }
        ],

        tier4: [
            { name: '치명타 피해량', job: 'common', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfMTYw/MDAxNzMxNjM3MTk1ODkw.e6rVzINNDaXJ5_aYXiddcL0anP-HfDLDtcJGFZNdCs4g.7hMhzzYR4W0qdJDqb11n_kxVHppXhk-FnPmb5pobnCgg.PNG/job_trait_all_03.png', desc: '치명타 피해량이 증가한다.', stats: '치명타 피해량 13~40% 증가' },
            { name: '받는 피해', job: 'common', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfNzIg/MDAxNzMxNjM3MTg4NzA2.vI1bT7uW4EplQdonaBK1x19VSDAQWAo5vuVgEjiC0XMg.Bg7xSqpzJl9jJTRj0njQOI6tzuNPPHPqr0Ijg4FeXNMg.PNG/job_trait_all_04.png', desc: '받는 피해가 감소된다.', stats: '받는 피해 6~15% 감소' }
        ],
        tier5: [
            { name: '수호의 찬가', job: '3-1', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfNzkg/MDAxNzMxNjY0NzgyMTE2.NNhVBMzC1G6cK9cWuYRby6pW8dGjufyC5zpsq6moqAMg.VjcceVa1YFw55bq3UL4tjRT62orWOyXnWXHrD7TJb0gg.PNG/job_trait_h3_s3_01.png', desc: '송오브피스의 체력회복량을 증가시킨다.', stats: '송오브피스의 체력 회복량 0.5~5% 증가' },
            { name: '신경독', job: '3-2', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfMjU5/MDAxNzMxNjY0Nzg4MDQy.jF9DTWpSyd1KaDO1aNjnjNT5vsI5vMPAE27xQUcYWlkg.ngiLZXvXC3jhwDFfVxRO3HsLUbnF9yyGEHc7csokvRgg.PNG/job_trait_h3_s3_02.png', desc: '신경독을 첨가한 독 폭탄을 사용해 포이즌봄을 강화한다.', stats: '포이즌봄 스킬공격력 7.5~30% 증폭. 회피력 감소량 5% 증가' },
            { name: '차원 화살', job: '3-3', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfNzEg/MDAxNzMxNjY0Nzk2MDI4.NKTeC6V9wfG-fGzfCXpTpjfKAeB2VRXMrZG27CsvJEQg.woprLLHCb9SOMuccPbAQR33qU8Ah2HZ9G5O7uSKc73Eg.PNG/job_trait_h3_s3_03.png', desc: '미스틱애로우에 차원의 힘을 담아낸다.', stats: '미스틱애로우의 방어 및 회피 무시 일격 발동시 일반 공격력과 멀티샷 스킬공격력 14~50% 증폭' }
        ],
        tier6: [
            { name: '스타러시', job: 'common', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfMjU3/MDAxNzMxNjY1MDEwNTky.J0trVewG-Q7GAYHiUbb0sV4EeBuwtgYxzAtn-CuSlIQg.pEU6gRBbCcWAXQKgdV1xiC4UZFNAf16XC7Ga1Vd7HlYg.PNG/job_trait_h3_s4_03.png', desc: '폴링스타를 강화하고 공격주기를 단축한다.', stats: '폴링스타 스킬공격력 6~15% 증폭. 공격 주기가 0.7초로 감소' },
            { name: '쇠약의 별', job: 'common', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfMjc4/MDAxNzMxNjY1MDE3MTkx.4EyjRyyxkknAyss4Xno9Y4i1bV0yAE6X5uel82onCdUg.KlQXe5EElKKC_DsqWreIwMAnPBipjaDxGPe6mVgHnf4g.PNG/job_trait_h3_s4_04.png', desc: '폴링스타를 강화하고 범위 내 적을 약화시킨다.', stats: '폴링스타 스킬공격력 7~25% 증폭. 범위 내 적의 공격력을 6~15% 감폭' }
        ]
    }
};