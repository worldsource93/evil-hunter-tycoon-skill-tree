// data/darkknight.js
const IMG = 'https://cafeptthumb-phinf.pstatic.net/';

export const darkknightData = {
    overlord: {
        name: '오버로드 영웅 스킬 트리',
        main: { name: '하이퍼 블리츠', icon: IMG + 'MjAyNTExMjBfOTQg/MDAxNzYzNjMwMTY3NjIx.RjBRhNJ6yO9I60UlNveyNV7fodQKW3N2eK0m8VziEZwg.n4rkh1Uaekmgol3IuJxC0bYP5-w7pz16mETD2NeS7zIg.PNG/skill_h5_09.png', desc: '일반공격시 확률적으로 하이퍼 블리츠를 시전한다.', stats: '일반공격시 25% 확률로 초당공격력의 37~100% 데미지로 5회 광역공격. 하이퍼 블리츠는 적의 방어력을 무시 (PVP에서 스킬공격력 60% 감폭)' },
        tier1: [
            { name: '파워 슬래쉬', icon: IMG + 'MjAyNDExMTVfMTQg/MDAxNzMxNjY0MTU4MjA5.oS3OBiAHg6neevQZUri5D6kCYIIlhC3JjAqDMrW1dNgg.gviMvmD_W-tVfMXXSiq55W3qgMX84WLd8DkhKdgoIBEg.PNG/job_trait_h1_s3_01.png', desc: '라운드 슬래쉬 시전시 더욱 강력한 기운을 발산한다.', stats: '라운드 슬래쉬 스킬공격력 6.5~20% 증폭' },
            { name: '라운드 포스', icon: IMG + 'MjAyNDExMTVfMTAx/MDAxNzMxNjM3MTYzNDgy.sNwa0FscswQNnrjyCdellbwM5IOIuX2N0DIGfrZv2Jcg.4LQjf10UON5K3knEARXUR_WobWPytDfG1Dog4r5luSEg.PNG/job_trait_h1_s3_02.png', desc: '라운드 슬래쉬로 방사한 기운을 주변에 둘러 받는 피해를 감소시킨다.', stats: '라운드 슬래쉬 시전시 3초간 시전자의 받는 피해 1~10% 감소' },
            { name: '집중력 유지', icon: IMG + 'MjAyNDExMTVfMTk4/MDAxNzMxNjY0MTcxNzQ3._58A7q-uy90RraZ6LxBIdivtnnyUrdSoIcrLzf_LhPEg.bk4D2TWf6ZtHztK7DXtrW8q00GKygtlFF2XXRUiALEIg.PNG/job_trait_h1_s3_03.png', desc: '훈련을 통해 집중 상태를 더 유지할 수 있게 한다.', stats: '컨센트레이트 지속시간 1~10초 증가' }
        ],
        tier2: [
            { name: '전체 공격력', icon: IMG + 'MjAyNDExMTVfMTIw/MDAxNzMxNjY0MTI0MzAz.1zCqqxzoKU0ZyZFz8Cy8PAj7_-XhassoH4Utf78MwCwg.hP3iIiPJ1vLWGGmZyrXPAvKzTxNE2eVvddCdIQ310RIg.PNG/job_trait_all_01.png', desc: '전체 공격력이 증가한다.', stats: '전체 공격력 23~50% 증가' },
            { name: '체력', icon: IMG + 'MjAyNDExMTVfMjM0/MDAxNzMxNjY0MTI4MzQz.Xha6txm9Xb_bEsrcVplt8_upyxR0etkSR2Butpqu3l8g.IuLB8UBEn0E12UzbI_1-LaF5_kci2lCHRWPXMWZItXcg.PNG/job_trait_all_02.png', desc: '체력이 증가한다.', stats: '체력 23~50% 증가' }
        ],
        tier3: [
            { name: '카발리 차지', icon: IMG + 'MjAyNDExMTVfMjQ2/MDAxNzMxNjY0MzAzODYy.2-5EyaaZ_wleSXP-GDeO6cbbgwEyBNDki2LcMdt-L_cg.jD3DE5n28eDO2fcADFcVSd_9euqJwZfEYawGL6nReisg.PNG/job_trait_h2_s1_01.png', desc: '탈 것에 탑승 중일 때 더 강력하게 공격한다.', stats: '에퀴테이션 적용 중에 자신의 공격력 6.5~20% 증폭' },
            { name: '쉐도우 스킨', icon: IMG + 'MjAyNDExMTVfMTE0/MDAxNzMxNjY0MzEwMDAz.Jx0nv8ucCrMi85p_8-_P3T4Sc-3K8HsnD077UTuXlP8g.VsZ4FD_Rq0iJw3vFEfz7444hij5iqS1J6BtTWtYtlK4g.PNG/job_trait_h2_s1_02.png', desc: '그림자의 힘을 몸에 둘러 더 강력한 일격을 시전하고 자신을 보호한다.', stats: '쉐도우 스트라이크 스킬공격력을 6.5~20% 증폭시키고 8초간 받는 피해 11~20% 감소' },
            { name: '래피드 스핀', icon: IMG + 'MjAyNDExMTVfMTI4/MDAxNzMxNjY0NjIxODc3.eoiQ4KZa-pGJ70v0xsNys6qSHLM552Y02c-k13SRIQAg.w94b7mM5zmliz51bYj_I2dM_Xn8PtPgVzlodu2XC9BMg.PNG/job_trait_h2_s1_03.png', desc: '스핀 스플래시가 더욱 빠르게 회전한다.', stats: '스핀 스플래시 공격 주기가 0.02~0.2초 감소하는 대신 시전불가 시간을 3초로 변경' }
        ],
        tier4: [
            { name: '치명타 피해량', icon: IMG + 'MjAyNDExMTVfMTYw/MDAxNzMxNjM3MTk1ODkw.e6rVzINNDaXJ5_aYXiddcL0anP-HfDLDtcJGFZNdCs4g.7hMhzzYR4W0qdJDqb11n_kxVHppXhk-FnPmb5pobnCgg.PNG/job_trait_all_03.png', desc: '치명타 피해량이 증가한다.', stats: '치명타 피해량 13~40% 증가' },
            { name: '받는 피해 감소', icon: IMG + 'MjAyNDExMTVfMTc0/MDAxNzMxNjY0MTM3ODU3.NwaMdNAy52wZyn0pGBfxyMFiBdKz7Ysr3F5P7l8QUv8g.hEmXTZuNoafUJyJF8H8Em2HeyH5w5THkz2EEHtGxaHcg.PNG/job_trait_all_04.png', desc: '받는 피해가 감소된다.', stats: '받는 피해 6~15% 감소' }
        ],
        tier5: [
            { name: '다크 쉴드', icon: IMG + 'MjAyNDExMTVfMjY1/MDAxNzMxNjY0NzMyMDIz.6QKZUS4RyEX9Q4csGs0xctHJUIhQKn9V0BX3y_6M5u4g.wekOwtCXtc6s2IaiiU1Fr1W3xD1QaUeFV23kKNXP4AEg.PNG/job_trait_h3_s1_01.png', desc: '피어싱 쓰러스트 시전시 보호막을 생성한다.', stats: '적 1명당 시전자 최대체력의 3.7~10% 보호막 생성 (최대 3중첩) 5초간 지속' },
            { name: '데들리 자벨린', icon: IMG + 'MjAyNDExMTVfMjU3/MDAxNzMxNjY0NzM4Njgy.EcgBeEjvDxRHqzoeE24j_jADDuPq3pbuRFMSxt57Wxsg.PFGwQZCrM6yRbovaApD0HPLJZcZv9IRFCISQYryQSV0g.PNG/job_trait_h3_s1_02.png', desc: '쉐이드 자벨린이 확률에 따라 더욱 강력한 피해를 준다.', stats: '쉐이드 자벨린이 30~75%로 적에게 2배 피해량 적용' },
            { name: '하이퍼 플레임', icon: IMG + 'MjAyNDExMTVfMTkx/MDAxNzMxNjY0NzQ2MjMw.w71OGJBz7UAEqzS2JKKIpRLS3N1Q64Zndgl1TWXiUSYg.gFPbGfATs2Po9t6qVb3EgsnNUZMSb2L7OYVXzdNBCicg.PNG/job_trait_h3_s1_03.png', desc: '드래곤이 더 뜨거운 브레스를 내뿜는다.', stats: '드래곤 브레스 스킬공격력 14~50% 증폭' }
        ],
        tier6: [
            { name: '레이지 블리츠', icon: IMG + 'MjAyNDExMTVfMTIw/MDAxNzMxNjY1Mjc2MjM2.ZCgSZqn5bwDe2l1iKrgZibvbNwC7san8nrh6F1T_pVQg.EKoze8LVkMmSXP0kX2_auxkdi0zQNDQXf5sOdww0aUEg.PNG/job_trait_h4_s1_01.png', desc: '분노의 힘을 담아 하이퍼 블리츠를 강화한다.', stats: '하이퍼 블리츠 스킬공격력 16~70% 증폭' },
            { name: '다크니스 블리츠', icon: IMG + 'MjAyNDExMTVfMTI4/MDAxNzMxNjY1Mjg3OTQy.ugMzsm_3vgT9hMJvt5p95MADd0uu2ECB6IsE4dmu_Vog.Cq0BfleGsV1XtMCVMeaEKgBOglrr41rOJdcYSwGSAWsg.PNG/job_trait_h4_s1_03.png', desc: '하이퍼 블리츠가 일반공격에 발동하지 않는 대신 시전 가능 스킬로 변경된다.', stats: '초당공격력의 300~750% 데미지로 5회 광역공격. 시전 후 10초간 시전불가' }
        ]
    },
    deathbringer: {
        name: '데스브링어 영웅 스킬 트리',
        main: { name: '미스틸테인', icon: IMG + 'MjAyNDExMTVfMjU3/MDAxNzMxNjY0NzI0NTcx.smKrKa9zJBNYFFgij1UNBWWTEnG94G13pgFiG5Adr2gg.mfH-w8MXbv2LF9zx2iPWd19ANNDrAzvZeQhhjlT9tXQg.PNG/skill_h3_09.png', desc: '일반공격 시 확률적으로 미스틸테인을 시전한다.', stats: '일반공격시 20% 확률로 초당공격력의 37~100% 데미지로 3회 타겟공격' },
        tier1: [
            { name: '파워 슬래쉬', icon: IMG + 'MjAyNDExMTVfMTQg/MDAxNzMxNjY0MTU4MjA5.oS3OBiAHg6neevQZUri5D6kCYIIlhC3JjAqDMrW1dNgg.gviMvmD_W-tVfMXXSiq55W3qgMX84WLd8DkhKdgoIBEg.PNG/job_trait_h1_s3_01.png', desc: '라운드 슬래쉬 시전시 더욱 강력한 기운을 발산한다.', stats: '라운드 슬래쉬 스킬공격력 6.5~20% 증폭' },
            { name: '라운드 포스', icon: IMG + 'MjAyNDExMTVfMTAx/MDAxNzMxNjM3MTYzNDgy.sNwa0FscswQNnrjyCdellbwM5IOIuX2N0DIGfrZv2Jcg.4LQjf10UON5K3knEARXUR_WobWPytDfG1Dog4r5luSEg.PNG/job_trait_h1_s3_02.png', desc: '라운드 슬래쉬로 방사한 기운을 주변에 둘러 받는 피해를 감소시킨다.', stats: '라운드 슬래쉬 시전시 3초간 시전자의 받는 피해 1~10% 감소' },
            { name: '집중력 유지', icon: IMG + 'MjAyNDExMTVfMTk4/MDAxNzMxNjY0MTcxNzQ3._58A7q-uy90RraZ6LxBIdivtnnyUrdSoIcrLzf_LhPEg.bk4D2TWf6ZtHztK7DXtrW8q00GKygtlFF2XXRUiALEIg.PNG/job_trait_h1_s3_03.png', desc: '훈련을 통해 집중 상태를 더 유지할 수 있게 한다.', stats: '컨센트레이트 지속시간 1~10초 증가' }
        ],
        tier2: [
            { name: '전체 공격력', icon: IMG + 'MjAyNDExMTVfMTIw/MDAxNzMxNjY0MTI0MzAz.1zCqqxzoKU0ZyZFz8Cy8PAj7_-XhassoH4Utf78MwCwg.hP3iIiPJ1vLWGGmZyrXPAvKzTxNE2eVvddCdIQ310RIg.PNG/job_trait_all_01.png', desc: '전체 공격력이 증가한다.', stats: '전체 공격력 23~50% 증가' },
            { name: '체력', icon: IMG + 'MjAyNDExMTVfMjM0/MDAxNzMxNjY0MTI4MzQz.Xha6txm9Xb_bEsrcVplt8_upyxR0etkSR2Butpqu3l8g.IuLB8UBEn0E12UzbI_1-LaF5_kci2lCHRWPXMWZItXcg.PNG/job_trait_all_02.png', desc: '체력이 증가한다.', stats: '체력 23~50% 증가' }
        ],
        tier3: [
            { name: '카발리 차지', icon: IMG + 'MjAyNDExMTVfMjQ2/MDAxNzMxNjY0MzAzODYy.2-5EyaaZ_wleSXP-GDeO6cbbgwEyBNDki2LcMdt-L_cg.jD3DE5n28eDO2fcADFcVSd_9euqJwZfEYawGL6nReisg.PNG/job_trait_h2_s1_01.png', desc: '탈 것에 탑승 중일 때 더 강력하게 공격한다.', stats: '에퀴테이션 적용 중에 자신의 공격력 6.5~20% 증폭' },
            { name: '쉐도우 스킨', icon: IMG + 'MjAyNDExMTVfMTE0/MDAxNzMxNjY0MzEwMDAz.Jx0nv8ucCrMi85p_8-_P3T4Sc-3K8HsnD077UTuXlP8g.VsZ4FD_Rq0iJw3vFEfz7444hij5iqS1J6BtTWtYtlK4g.PNG/job_trait_h2_s1_02.png', desc: '그림자의 힘을 몸에 둘러 더 강력한 일격을 시전하고 자신을 보호한다.', stats: '쉐도우 스트라이크 스킬공격력을 6.5~20% 증폭시키고 8초간 받는 피해 11~20% 감소' },
            { name: '래피드 스핀', icon: IMG + 'MjAyNDExMTVfMTI4/MDAxNzMxNjY0NjIxODc3.eoiQ4KZa-pGJ70v0xsNys6qSHLM552Y02c-k13SRIQAg.w94b7mM5zmliz51bYj_I2dM_Xn8PtPgVzlodu2XC9BMg.PNG/job_trait_h2_s1_03.png', desc: '스핀 스플래시가 더욱 빠르게 회전한다.', stats: '스핀 스플래시 공격 주기가 0.02~0.2초 감소하는 대신 시전불가 시간을 3초로 변경' }
        ],
        tier4: [
            { name: '치명타 피해량', icon: IMG + 'MjAyNDExMTVfMTYw/MDAxNzMxNjM3MTk1ODkw.e6rVzINNDaXJ5_aYXiddcL0anP-HfDLDtcJGFZNdCs4g.7hMhzzYR4W0qdJDqb11n_kxVHppXhk-FnPmb5pobnCgg.PNG/job_trait_all_03.png', desc: '치명타 피해량이 증가한다.', stats: '치명타 피해량 13~40% 증가' },
            { name: '받는 피해 감소', icon: IMG + 'MjAyNDExMTVfMTc0/MDAxNzMxNjY0MTM3ODU3.NwaMdNAy52wZyn0pGBfxyMFiBdKz7Ysr3F5P7l8QUv8g.hEmXTZuNoafUJyJF8H8Em2HeyH5w5THkz2EEHtGxaHcg.PNG/job_trait_all_04.png', desc: '받는 피해가 감소된다.', stats: '받는 피해 6~15% 감소' }
        ],
        tier5: [
            { name: '다크 쉴드', icon: IMG + 'MjAyNDExMTVfMjY1/MDAxNzMxNjY0NzMyMDIz.6QKZUS4RyEX9Q4csGs0xctHJUIhQKn9V0BX3y_6M5u4g.wekOwtCXtc6s2IaiiU1Fr1W3xD1QaUeFV23kKNXP4AEg.PNG/job_trait_h3_s1_01.png', desc: '피어싱 쓰러스트 시전시 보호막을 생성한다.', stats: '적 1명당 시전자 최대체력의 3.7~10% 보호막 생성 (최대 3중첩) 5초간 지속' },
            { name: '확인사살', icon: IMG + 'MjAyNDExMTVfMTQx/MDAxNzMxNjY0ODA4MzM1.BnNUWoq1Ryj7SC9rTUqYdJewNE6aqyC6hJXpyOzDNU4g.5C7vuSovLkfA9mHvtTuai6uGKfCdpWew7qEfUJNRL8cg.PNG/job_trait_h3_s4_01.png', desc: '쉐이드 자벨린으로 적 처치시 재사용 대기시간이 초기화된다.', stats: '쉐이드 자벨린으로 적 처치시 재사용 대기시간 초기화' },
            { name: '하이퍼 플레임', icon: IMG + 'MjAyNDExMTVfMTkx/MDAxNzMxNjY0NzQ2MjMw.w71OGJBz7UAEqzS2JKKIpRLS3N1Q64Zndgl1TWXiUSYg.gFPbGfATs2Po9t6qVb3EgsnNUZMSb2L7OYVXzdNBCicg.PNG/job_trait_h3_s1_03.png', desc: '드래곤이 더 뜨거운 브레스를 내뿜는다.', stats: '드래곤 브레스 스킬공격력 14~50% 증폭' }
        ],
        tier6: [
            { name: '커스 드링커', icon: IMG + 'MjAyNDExMTVfMjQ5/MDAxNzMxNjY1Mjk1OTY4.GUfmTxD2HY3WW1ygTf0LcustsfzYAvma2KYnxF6_WL8g.xZ0pdM7KikPR_JSOcHQBUXtQWVFxnR2nIE1BTAPWJIsg.PNG/job_trait_h4_s2_01.png', desc: '미스틸테인 적중시 적에게 저주를 부여한다.', stats: '미스틸테인 적중시 8초간 적에게 저주 부여. 저주 대상 피격시 초당공격력의 10~40% 추가 피해' },
            { name: '데스 그라운드', icon: IMG + 'MjAyNDExMTVfMjQ5/MDAxNzMxNjY1MzAyMjAw.tKb0njec3d-3Ev_1lRH_LnlkPr8lQ7XpkHdjcilnbrcg.bd__wBMzLTKKv_mMYcl-8cO7mJSEfXU_U4cdMIg9Ctkg.PNG/job_trait_h4_s2_02.png', desc: '미스틸테인이 광역기로 변경된다.', stats: '미스틸테인이 광역기로 변경. 초당공격력의 37~100% 데미지로 3회 광역공격' }
        ]
    }
};