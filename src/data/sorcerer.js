// data/sorcerer.js

export const sorcererData = {
    manalord: {
        name: '마나로드 영웅 스킬 트리',
        main: { name: '마나차지', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfMTAx/MDAxNzMxNjY1MTA4Njgx.sUHM1kF_d5KROZlJae_uXmBliSfYhQbrK5XzwW2gHHIg.dAZ8OSdhR5w9R431oSnA_G6eTLQljYZFaUbRLxB4HkUg.PNG/40.png', desc: '마나 오브를 획득하여 스킬을 강화한다.', stats: '헌터가 직접 썬더볼트 시전시 마나 오브 1개 획득. 마나 오브는 30초동안 지속되며 최대 5개까지 보유. 오브 스킬 시전시 마나 오브를 1개 소모하여 스킬공격력 14~50% 증폭 퍼밀리어가 시전한 오브 스킬에도 마나차지 효과 적용 (PVP에서 증폭량 50% 감폭, 오브 스킬 : 블리자드, 스톤커즈, 메테오, 나이트메어)' },
        tier1: [
            { name: '치명적인 번개', job: 'common', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfNjYg/MDAxNzMxNjY1MTE2NjE0.21LYPsao2pukgbGu2jEQriHrePZxIbe1wZvVcY6k_nYg.H1mBu7Dgmm3cCIiKmp1EtcEV-AuMdCqSqEE3OHA6Clkg.PNG/job_trait_h4_s1_01.png', desc: '번개의 힘을 일부 흡수해 치명타 확률이 증가한다.', stats: '썬더볼트 시전시 자신에게 12초동안 치명타 확률 5.5~10% 증가 버프 부여' },
            { name: '피뢰침', job: 'common', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfNyAg/MDAxNzMxNjY1MTIxMjMy.nUJ5SGHOlRV3gTdkXNuCrb0eqp56z7wXsa5MMc-qipEg.s_a1DSS5a2dLy3v_RhHJch368hyg8WT_54MOCLN6_YYg.PNG/job_trait_h4_s1_02.png', desc: '썬더볼트를 강화하고 적의 주변에 소환한다.', stats: '썬더볼트가 공격중인 대상을 중심으로 시전. 스킬공격력 3.7~10% 증폭' },
            { name: '아이스 쉴드', job: 'common', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfODUg/MDAxNzMxNjY1MTI2NDM3.gLBPrA4OC8B-3X8jyExKSD60eUxNrDPR_U44WJXiRWAg.6quVUu35zGjw3sXlU_WDLIJVOKzAzblKIi9PgExDWrgg.PNG/job_trait_h4_s1_03.png', desc: '얼음으로 된 보호막을 생성해 자신을 방어한다.', stats: '아이스아머 시전시 시전자 최대체력의 11.5~25% 보호막 생성. 보호막은 아이스아머 지속시간동안 유지' }
        ],
        tier2: [
            { name: '전체공격력', job: 'common', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfMjA3/MDAxNzMxNjM3MjA5NDMy.912dGWxt0GOrRb6E7ksGp-RN-sMBFDHha90VYJtBw7wg.DNuCltuo3LM1erMXHQs9PGbvA30zAhiufbJosXVmnyEg.PNG/job_trait_all_01.png', desc: '전체 공격력이 증가한다.', stats: '전체 공격력 23~50% 증가' },
            { name: '체력', job: 'common', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfMTcz/MDAxNzMxNjM3MjAyNjcz.uw3q8tiKFK1aATKacj5BAUDp2oNL2rnHX5u1tvbL7oQg.rBPp0tD-SzWgz3krV-DeQVVPjhh3_nJjqJv33YXPLEIg.PNG/job_trait_all_02.png', desc: '체력이 증가한다.', stats: '체력 23~50% 증가' }
        ],
        tier3: [
            { name: '매서운 눈보라', job: '2-1', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfMTEz/MDAxNzMxNjY1MTM1OTU1.lN6DPAqqOasGHlN83wCrVFyixkuJPdq_6tG48XO-N7Ig.wLCB1rw18Ae4ikApfzVlQmF5foxMz_V3PBi7jTvPlT0g.PNG/job_trait_h4_s2_01.png', desc: '확률에 따라 더 강력한 눈보라를 소환한다.', stats: '블리자드 시전시 24~60% 확률로 3회 추가 광역공격' },
            { name: '상급 저주', job: '2-2', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfMjE0/MDAxNzMxNjY1MTQyNjUz.OTMJPnzA9UQxU07wZ_rEywtBwRERaRVFVnrVw2kHYEQg.s-vdDtYExkQRVSyJ3we61sYX65BeD90X05hqFaEvvcEg.PNG/job_trait_h4_s2_02.png', desc: '더 강력한 상급 석화 저주를 사용한다.', stats: '스톤커즈 스킬공격력 12~30% 증폭. 석화 지속시간 2초 증가 ' },
            { name: '코멧 클러스터', job: '2-3', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfMjgw/MDAxNzMxNjY1MTQ4NDgz.BMPD08EdhNnVp8IOu9hPEzKU6ptwKauaud5rQxZlxvcg.p2YPJ2IZqPyMLhP6299h_1xQRRegMbVEXOt3pyXoz18g.PNG/job_trait_h4_s2_03.png', desc: '메테오 소환시 작은 운석 3개를 추가로 소환한다.', stats: '메테오 시전시 초당 공격력의 110~200% 데미지로 3회 광역공격 추가' }
        ],
        tier4: [
            { name: '치명타 피해량', job: 'common', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfMTYw/MDAxNzMxNjM3MTk1ODkw.e6rVzINNDaXJ5_aYXiddcL0anP-HfDLDtcJGFZNdCs4g.7hMhzzYR4W0qdJDqb11n_kxVHppXhk-FnPmb5pobnCgg.PNG/job_trait_all_03.png', desc: '치명타 피해량이 증가한다.', stats: '치명타 피해량 13~40% 증가' },
            { name: '받는 피해', job: 'common', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfNzIg/MDAxNzMxNjM3MTg4NzA2.vI1bT7uW4EplQdonaBK1x19VSDAQWAo5vuVgEjiC0XMg.Bg7xSqpzJl9jJTRj0njQOI6tzuNPPHPqr0Ijg4FeXNMg.PNG/job_trait_all_04.png', desc: '받는 피해가 감소된다.', stats: '받는 피해 6~15% 감소' }
        ],
        tier5: [
            { name: '하이 퍼밀리어', job: '3-1', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfMTQ2/MDAxNzMxNjY1MTU5NTUz.hlDHzTO-Lswr4UYPAIGQGbeqe-CiFA1mcNxsvIqCMvog.-mcvhz4q4lI4LKvgJanXFvyZSQGznUtANYG5lIa4vUMg.PNG/job_trait_h4_s3_01.png', desc: '서몬퍼밀리어의 능력을 강화시킨다.', stats: '서몬퍼밀리어의 재시전 스킬공격력 5.5~10% 증가' },
            { name: '다크 프로텍션', job: '3-2', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfMSAg/MDAxNzMxNjY1MTYzOTUw.466zTmYo_NB0AxuNq3N6wY3WXsnLnDUk-cXwKp7niVEg.1xxsYPwvwMMugum3LZfOH2tgMjQ8H60TSn_2IVMkN7cg.PNG/job_trait_h4_s3_02.png', desc: '어둠의 기운을 방어에 집중해 받는피해를 감소시킨다.', stats: '폴리모프 습득시 상시 받는피해 7~25% 감소' },
            { name: '공포의 지배자', job: '3-3', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfNTkg/MDAxNzMxNjY1MTY4OTAy.MuRyOMAfQYfV3JQ6cHoY3mRrAh8fkzWOffWzGf_y5tEg.jyTEv_sD75jKFIvM2RBBhTsP1xlTwxGN2SWVsqmQGbkg.PNG/job_trait_h4_s3_03.png', desc: '패닉에 빠진 적의 마력을 흡수해 자신을 강화한다.', stats: '나이트메어 시전시 15초간 시전자의 공격력 7~25% 증폭' }
        ],
        tier6: [
            { name: '오버차지', job: 'common', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfNDYg/MDAxNzMxNjY1MTc4MDk4.RmpnKQovJLXXWw_3OzQ20U-tTbTYk47XsmQinTopsc0g.eyHwkjfzqTRVNB8GwmypANaFt8MkR0uwsUf-nI5jttQg.PNG/job_trait_h4_s4_01.png', desc: '마나 오브를 추가로 획득하고 더 많이 소모한다.', stats: '썬더볼트 시전시 55~100% 확률로 마나 오브 1~4개 추가 획득. 마나 오브 소모 스킬 시전시 마나 오브를 최대 2개까지 소모하여 스킬공격력 증폭 가능' },
            { name: '라이트닝 오브', job: 'common', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfMTI1/MDAxNzMxNjY1MTg0MzU3.OUmXkPbpyFJ0AvJOXYuNEju5EUTDS25dGx2krUfFTFgg.YstVUoqGcxY2p1GtIqKLcNU9TYWSSAAyA4QBiirQF70g.PNG/job_trait_h4_s4_02.png', desc: '마나 오브를 라이트닝 오브로 전환한다.', stats: '마나 오브 소모 효과가 사라지는 대신 지니고 있는 라이트닝 오브 1개당 썬더볼트 스킬공격력 1~10% 증폭.' }
        ]
    },
    oppositer: {
        name: '오포지터 영웅 스킬 트리',
        main: { name: '엘리멘탈 포스', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfMjky/MDAxNzMxNjY1MjUzNDkz.LD3YUAcYKodQ4rAutDXlDWDlzb9F6Ze52bIcccybKs8g.kQk1B1cj49QidWCkQjdn8h7ruS0ctGNdSzBBpkCl7CYg.PNG/skill_h4_10.png', desc: '일반공격시 화염 또는 얼음의 힘을 사용해 적을 공격한다.', stats: '일반공격시 25% 확률로 엘리멘탈 포스를 시전하여 초당 공격력의 180~450% 데미지로 화염 단일 공격 또는 초당공격력의 83~200% 데미지로 냉기 광역 공격. (PVP에서 스킬공격력 60% 감폭)' },
        tier1: [
            { name: '치명적인 번개', job: 'common', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfNjYg/MDAxNzMxNjY1MTE2NjE0.21LYPsao2pukgbGu2jEQriHrePZxIbe1wZvVcY6k_nYg.H1mBu7Dgmm3cCIiKmp1EtcEV-AuMdCqSqEE3OHA6Clkg.PNG/job_trait_h4_s1_01.png', desc: '번개의 힘을 일부 흡수해 치명타 확률이 증가한다.', stats: '썬더볼트 시전시 자신에게 12초동안 치명타 확률 5.5~10% 증가 버프 부여' },
            { name: '피뢰침', job: 'common', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfNyAg/MDAxNzMxNjY1MTIxMjMy.nUJ5SGHOlRV3gTdkXNuCrb0eqp56z7wXsa5MMc-qipEg.s_a1DSS5a2dLy3v_RhHJch368hyg8WT_54MOCLN6_YYg.PNG/job_trait_h4_s1_02.png', desc: '썬더볼트를 강화하고 적의 주변에 소환한다.', stats: '썬더볼트가 공격중인 대상을 중심으로 시전. 스킬공격력 3.7~10% 증폭' },
            { name: '아이스 쉴드', job: 'common', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfODUg/MDAxNzMxNjY1MTI2NDM3.gLBPrA4OC8B-3X8jyExKSD60eUxNrDPR_U44WJXiRWAg.6quVUu35zGjw3sXlU_WDLIJVOKzAzblKIi9PgExDWrgg.PNG/job_trait_h4_s1_03.png', desc: '얼음으로 된 보호막을 생성해 자신을 방어한다.', stats: '아이스아머 시전시 시전자 최대체력의 11.5~25% 보호막 생성. 보호막은 아이스아머 지속시간동안 유지' }
        ],
        tier2: [
            { name: '전체공격력', job: 'common', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfMjA3/MDAxNzMxNjM3MjA5NDMy.912dGWxt0GOrRb6E7ksGp-RN-sMBFDHha90VYJtBw7wg.DNuCltuo3LM1erMXHQs9PGbvA30zAhiufbJosXVmnyEg.PNG/job_trait_all_01.png', desc: '전체 공격력이 증가한다.', stats: '전체 공격력 23~50% 증가' },
            { name: '체력', job: 'common', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfMTcz/MDAxNzMxNjM3MjAyNjcz.uw3q8tiKFK1aATKacj5BAUDp2oNL2rnHX5u1tvbL7oQg.rBPp0tD-SzWgz3krV-DeQVVPjhh3_nJjqJv33YXPLEIg.PNG/job_trait_all_02.png', desc: '체력이 증가한다.', stats: '체력 23~50% 증가' }
        ],
        tier3: [
            { name: '매서운 눈보라', job: '2-1', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfMTEz/MDAxNzMxNjY1MTM1OTU1.lN6DPAqqOasGHlN83wCrVFyixkuJPdq_6tG48XO-N7Ig.wLCB1rw18Ae4ikApfzVlQmF5foxMz_V3PBi7jTvPlT0g.PNG/job_trait_h4_s2_01.png', desc: '확률에 따라 더 강력한 눈보라를 소환한다.', stats: '블리자드 시전시 24~60% 확률로 3회 추가 광역공격' },
            { name: '상급 저주', job: '2-2', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfMjE0/MDAxNzMxNjY1MTQyNjUz.OTMJPnzA9UQxU07wZ_rEywtBwRERaRVFVnrVw2kHYEQg.s-vdDtYExkQRVSyJ3we61sYX65BeD90X05hqFaEvvcEg.PNG/job_trait_h4_s2_02.png', desc: '더 강력한 상급 석화 저주를 사용한다.', stats: '스톤커즈 스킬공격력 12~30% 증폭. 석화 지속시간 2초 증가 ' },
            { name: '코멧 클러스터', job: '2-3', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfMjgw/MDAxNzMxNjY1MTQ4NDgz.BMPD08EdhNnVp8IOu9hPEzKU6ptwKauaud5rQxZlxvcg.p2YPJ2IZqPyMLhP6299h_1xQRRegMbVEXOt3pyXoz18g.PNG/job_trait_h4_s2_03.png', desc: '메테오 소환시 작은 운석 3개를 추가로 소환한다.', stats: '메테오 시전시 초당 공격력의 110~200% 데미지로 3회 광역공격 추가' }
        ],
        tier4: [
            { name: '치명타 피해량', job: 'common', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfMTYw/MDAxNzMxNjM3MTk1ODkw.e6rVzINNDaXJ5_aYXiddcL0anP-HfDLDtcJGFZNdCs4g.7hMhzzYR4W0qdJDqb11n_kxVHppXhk-FnPmb5pobnCgg.PNG/job_trait_all_03.png', desc: '치명타 피해량이 증가한다.', stats: '치명타 피해량 13~40% 증가' },
            { name: '받는 피해', job: 'common', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfNzIg/MDAxNzMxNjM3MTg4NzA2.vI1bT7uW4EplQdonaBK1x19VSDAQWAo5vuVgEjiC0XMg.Bg7xSqpzJl9jJTRj0njQOI6tzuNPPHPqr0Ijg4FeXNMg.PNG/job_trait_all_04.png', desc: '받는 피해가 감소된다.', stats: '받는 피해 6~15% 감소' }
        ],
        tier5: [
            { name: '하이 퍼밀리어', job: '3-1', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfMTQ2/MDAxNzMxNjY1MTU5NTUz.hlDHzTO-Lswr4UYPAIGQGbeqe-CiFA1mcNxsvIqCMvog.-mcvhz4q4lI4LKvgJanXFvyZSQGznUtANYG5lIa4vUMg.PNG/job_trait_h4_s3_01.png', desc: '서몬퍼밀리어의 능력을 강화시킨다.', stats: '서몬퍼밀리어의 재시전 스킬공격력 5.5~10% 증가' },
            { name: '다크 프로텍션', job: '3-2', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfMSAg/MDAxNzMxNjY1MTYzOTUw.466zTmYo_NB0AxuNq3N6wY3WXsnLnDUk-cXwKp7niVEg.1xxsYPwvwMMugum3LZfOH2tgMjQ8H60TSn_2IVMkN7cg.PNG/job_trait_h4_s3_02.png', desc: '어둠의 기운을 방어에 집중해 받는피해를 감소시킨다.', stats: '폴리모프 습득시 상시 받는피해 7~25% 감소' },
            { name: '공포의 지배자', job: '3-3', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfNTkg/MDAxNzMxNjY1MTY4OTAy.MuRyOMAfQYfV3JQ6cHoY3mRrAh8fkzWOffWzGf_y5tEg.jyTEv_sD75jKFIvM2RBBhTsP1xlTwxGN2SWVsqmQGbkg.PNG/job_trait_h4_s3_03.png', desc: '패닉에 빠진 적의 마력을 흡수해 자신을 강화한다.', stats: '나이트메어 시전시 15초간 시전자의 공격력 7~25% 증폭' }
        ],
        tier6: [
            { name: '포스 인챈트', job: 'common', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfMTE5/MDAxNzMxNjY1MzY2NjQx.9XwWlXtHdv2-Se2QPnR_ihFjyq3J40mkTx7R2WDAbpwg.fuu3PvzFCSNR3QFlQ0Xbi6kFgFMKcsvx2_bqAzFRxCgg.PNG/job_trait_h4_s4_03.png', desc: '엘리멘탈 포스의 화염과 냉기원소를 각각 강화한다.', stats: '엘리멘탈 포스 스킬공격력 46~100% 증폭' },
            { name: '포스 퓨전', job: 'common', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfOTIg/MDAxNzMxNjY1MzcxOTM4.kPte7cIWTNsc68Iu_4eUkuHwyYE-gvAUXCbUKsmF3PMg.3AThe_gbofUYurDA-RoVgrL0j0FDlbYt5_V-rnN3KC8g.PNG/job_trait_h4_s4_04.png', desc: '화염과 냉기를 융합하여 얼음 불꽃을 탄생시킨다.', stats: '엘리멘탈 포스 시전시 7초 동안 자신에게 얼음 불꽃 버프 적용. 얼음 불꽃은 매 2초마다 초당 공격력의 115~250% 데미지로 주변 적 광역공격 ' }
        ]
    }
};