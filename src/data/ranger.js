// data/ranger.js
const IMG = 'https://cafeptthumb-phinf.pstatic.net/';

export const rangerData = {
    deadeye: {
        name: '데드아이 영웅 스킬 트리',
        main: { name: '퍼펙트 샷', icon: IMG + 'MjAyNDExMTVfMTU0/MDAxNzMxNjY0MDMwNTk5.wEJ_v0xeyxw-HTcDO0i9vaj-zP20mOs9dgkdtIE1Jngg.hYnrbH5EwGjCKnkffilRE9FwDJ-yVNWtD-kwMpAgKmMg.PNG/job_trait_h1_s4_01.png', desc: '완벽한 조준으로 적을 저격한다.', stats: '초당공격력의 150~400% 데미지로 단일 타겟 공격. 100% 치명타 (재사용 대기시간 25초)' },
        tier1: [
            { name: '급소 공격', icon: IMG + 'MjAyNDExMTVfMjU1/MDAxNzMxNjY0MTYzNzMz.Z0kffTUniOrIF1t78hDt6Nzm_YBNWO5RGnSxcwFafP8g.vecgd2gyQtNoxBnQ626a-ZcQulPMzEuf_haSOCzMTpwg.PNG/job_trait_h1_s3_02.png', desc: '레인폴이 급소를 노린다.', stats: '레인폴 스킬공격력 6.5~20% 증폭' },
            { name: '정밀 사격', icon: IMG + 'MjAyNDExMTVfMjYw/MDAxNzMxNjM3MTcwNDI3.z_t7vKpgOkZZFvh5CZXmr53-_x3qJeT_e1VT04OBtPIg.L4xyl1GaZ5V84KWCNIPycWfaZeMTTpGWTBAc1rMusUog.PNG/job_trait_h1_s3_01.png', desc: '스나이핑이 더욱 정확해진다.', stats: '스나이핑 스킬공격력 6.5~20% 증폭' },
            { name: '불사조의 깃털', icon: IMG + 'MjAyNDExMTVfMTk4/MDAxNzMxNjY0MTcxNzQ3._58A7q-uy90RraZ6LxBIdivtnnyUrdSoIcrLzf_LhPEg.bk4D2TWf6ZtHztK7DXtrW8q00GKygtlFF2XXRUiALEIg.PNG/job_trait_h1_s3_03.png', desc: '서몬 피닉스가 더욱 강력해진다.', stats: '서몬 피닉스 스킬공격력 6.5~20% 증폭' }
        ],
        tier2: [
            { name: '전체 공격력', icon: IMG + 'MjAyNDExMTVfMTU4/MDAxNzMxNjY1NDE3NjA2.Zl8Wm3g2dKZtKwhZmqJk92aeVtcxUUTtPW28ejcfQWcg.LzPDOhxrEVuQhPQrHDGzPfkUCjImmotqyJI9Ro2Wmb0g.PNG/job_trait_all_01.png', desc: '전체 공격력이 증가한다.', stats: '전체 공격력 23~50% 증가' },
            { name: '체력', icon: IMG + 'MjAyNDExMTVfMjA0/MDAxNzMxNjY1NDIyNjEw.IvvVnwkvEMISRlYpyeAmhTKJ0i7I-H2sP_sj8FfrftQg.OvBBLr_GSIswM8iE5tiRiitDCF6O0RmeloLoJkGQPY0g.PNG/job_trait_all_02.png', desc: '체력이 증가한다.', stats: '체력 23~50% 증가' }
        ],
        tier3: [
            { name: '치유의 선율', icon: IMG + 'MjAyNDExMTVfMTY2/MDAxNzMxNjY0MzcwODkz.bpdRDCK510Rq76rc0HYmJRgcf5b-vtd4dyWvcq6uMxYg.mVt-Qs7S6d2njDO3Q4Md2xRHeM4tOyFLf0q2JieKfSQg.PNG/job_trait_h2_s3_02.png', desc: '송 오브 피스의 치유량이 증가한다.', stats: '송 오브 피스 치유량 6.5~20% 증가' },
            { name: '맹독', icon: IMG + 'MjAyNDExMTVfMjM4/MDAxNzMxNjY0Mzc2OTA0.Gk_WmTvR8vnPwpDbDcDNCg2-jQmZ6d1kuWAL4KLUNvEg.3A4maN2VhUQ6hmsLTaAFwoQ2Op3HOJ3cNRnbauDHOPAg.PNG/job_trait_h2_s3_03.png', desc: '포이즌 봄이 더욱 강력해진다.', stats: '포이즌 봄 스킬공격력 6.5~20% 증폭' },
            { name: '마력 화살', icon: IMG + 'MjAyNDExMTVfMTQ3/MDAxNzMxNjY0MzE1NDcz.mFrilhwdU80WgzKafLPYiiJtsyLwsfMAq075DUXrjjcg.P_p_olHqg6TgukZM1Qn6EgLwn1LyXjnlK5pkwsTkleQg.PNG/job_trait_h2_s1_03.png', desc: '미스틱 애로우가 더욱 강력해진다.', stats: '미스틱 애로우 스킬공격력 6.5~20% 증폭' }
        ],
        tier4: [
            { name: '치명타 피해량', icon: IMG + 'MjAyNDExMTVfMjQ1/MDAxNzMxNjY1NDMzMjQ1.ds_HsP615mVUL2veNiDbPs1y8-KD1iSzijOwsio2U5Mg.Jd8VZBqxSYfYLOwITw2DPX9TUDFL2VN9BTHWqEjaBWcg.PNG/job_trait_all_04.png', desc: '치명타 피해량이 증가한다.', stats: '치명타 피해량 13~40% 증가' },
            { name: '받는 피해 감소', icon: IMG + 'MjAyNDExMTVfMTg5/MDAxNzMxNjY1MzkwODU4.ToVUwIc9Z4U1IpExKgADSn_KcCYHY2ksN4HmpUEQgTQg.rVogxVjHJuF_z82F2XTUGkLbQc73swRz5VlP2yybURIg.PNG/job_trait_all_03.png', desc: '받는 피해가 감소된다.', stats: '받는 피해 6~15% 감소' }
        ],
        tier5: [
            { name: '치명적 저격', icon: IMG + 'MjAyNDExMTVfMjU3/MDAxNzMxNjY1MDEwNTky.J0trVewG-Q7GAYHiUbb0sV4EeBuwtgYxzAtn-CuSlIQg.pEU6gRBbCcWAXQKgdV1xiC4UZFNAf16XC7Ga1Vd7HlYg.PNG/job_trait_h3_s4_03.png', desc: '퍼펙트 샷의 피해량이 증가한다.', stats: '퍼펙트 샷 스킬공격력 14~50% 증폭' },
            { name: '폭발 화살', icon: IMG + 'MjAyNDExMTVfMjY3/MDAxNzMxNjY0ODY0NTcw.KwTv02wyQu0U_Z64o0SJP1x5LilZGa1WkaVJNYqN1Ogg.dag3ROjnNhNdaI-AU11uSJC_Fs-W6kkHp8uEdxtZ0ccg.PNG/job_trait_h3_s4_02.png', desc: '퍼펙트 샷이 폭발하여 주변 적에게 피해를 준다.', stats: '퍼펙트 샷 적중시 주변 적에게 초당공격력의 50~150% 피해' },
            { name: '독 확산', icon: IMG + 'MjAyNDExMTVfMjc4/MDAxNzMxNjY1MDE3MTkx.4EyjRyyxkknAyss4Xno9Y4i1bV0yAE6X5uel82onCdUg.KlQXe5EElKKC_DsqWreIwMAnPBipjaDxGPe6mVgHnf4g.PNG/job_trait_h3_s4_04.png', desc: '포이즌 봄의 독이 주변으로 확산된다.', stats: '포이즌 봄 범위 30~100% 증가' }
        ],
        tier6: [
            { name: '일격필살', icon: IMG + 'MjAyNDExMTVfMjA3/MDAxNzMxNjM3MjA5NDMy.912dGWxt0GOrRb6E7ksGp-RN-sMBFDHha90VYJtBw7wg.DNuCltuo3LM1erMXHQs9PGbvA30zAhiufbJosXVmnyEg.PNG/job_trait_all_01.png', desc: '퍼펙트 샷이 일정 확률로 즉사 효과를 부여한다.', stats: '퍼펙트 샷 적중시 3~10% 확률로 일반 몬스터 즉사' },
            { name: '연속 사격', icon: IMG + 'MjAyNDExMTVfMTcz/MDAxNzMxNjM3MjAyNjcz.uw3q8tiKFK1aATKacj5BAUDp2oNL2rnHX5u1tvbL7oQg.rBPp0tD-SzWgz3krV-DeQVVPjhh3_nJjqJv33YXPLEIg.PNG/job_trait_all_02.png', desc: '퍼펙트 샷을 연속으로 발사한다.', stats: '퍼펙트 샷 타격 횟수 1~2회 추가' }
        ]
    },
    starshooter: {
        name: '스타슈터 영웅 스킬 트리',
        main: { name: '스타폴', icon: IMG + 'MjAyNDExMTVfMTU0/MDAxNzMxNjY0MDMwNTk5.wEJ_v0xeyxw-HTcDO0i9vaj-zP20mOs9dgkdtIE1Jngg.hYnrbH5EwGjCKnkffilRE9FwDJ-yVNWtD-kwMpAgKmMg.PNG/job_trait_h1_s4_01.png', desc: '별빛 화살을 소환하여 적에게 쏟아붓는다.', stats: '초당공격력의 80~200% 데미지로 5회 광역공격 (재사용 대기시간 20초)' },
        tier1: [
            { name: '급소 공격', icon: IMG + 'MjAyNDExMTVfMjU1/MDAxNzMxNjY0MTYzNzMz.Z0kffTUniOrIF1t78hDt6Nzm_YBNWO5RGnSxcwFafP8g.vecgd2gyQtNoxBnQ626a-ZcQulPMzEuf_haSOCzMTpwg.PNG/job_trait_h1_s3_02.png', desc: '레인폴이 급소를 노린다.', stats: '레인폴 스킬공격력 6.5~20% 증폭' },
            { name: '정밀 사격', icon: IMG + 'MjAyNDExMTVfMjYw/MDAxNzMxNjM3MTcwNDI3.z_t7vKpgOkZZFvh5CZXmr53-_x3qJeT_e1VT04OBtPIg.L4xyl1GaZ5V84KWCNIPycWfaZeMTTpGWTBAc1rMusUog.PNG/job_trait_h1_s3_01.png', desc: '스나이핑이 더욱 정확해진다.', stats: '스나이핑 스킬공격력 6.5~20% 증폭' },
            { name: '불사조의 깃털', icon: IMG + 'MjAyNDExMTVfMTk4/MDAxNzMxNjY0MTcxNzQ3._58A7q-uy90RraZ6LxBIdivtnnyUrdSoIcrLzf_LhPEg.bk4D2TWf6ZtHztK7DXtrW8q00GKygtlFF2XXRUiALEIg.PNG/job_trait_h1_s3_03.png', desc: '서몬 피닉스가 더욱 강력해진다.', stats: '서몬 피닉스 스킬공격력 6.5~20% 증폭' }
        ],
        tier2: [
            { name: '전체 공격력', icon: IMG + 'MjAyNDExMTVfMTU4/MDAxNzMxNjY1NDE3NjA2.Zl8Wm3g2dKZtKwhZmqJk92aeVtcxUUTtPW28ejcfQWcg.LzPDOhxrEVuQhPQrHDGzPfkUCjImmotqyJI9Ro2Wmb0g.PNG/job_trait_all_01.png', desc: '전체 공격력이 증가한다.', stats: '전체 공격력 23~50% 증가' },
            { name: '체력', icon: IMG + 'MjAyNDExMTVfMjA0/MDAxNzMxNjY1NDIyNjEw.IvvVnwkvEMISRlYpyeAmhTKJ0i7I-H2sP_sj8FfrftQg.OvBBLr_GSIswM8iE5tiRiitDCF6O0RmeloLoJkGQPY0g.PNG/job_trait_all_02.png', desc: '체력이 증가한다.', stats: '체력 23~50% 증가' }
        ],
        tier3: [
            { name: '치유의 선율', icon: IMG + 'MjAyNDExMTVfMTY2/MDAxNzMxNjY0MzcwODkz.bpdRDCK510Rq76rc0HYmJRgcf5b-vtd4dyWvcq6uMxYg.mVt-Qs7S6d2njDO3Q4Md2xRHeM4tOyFLf0q2JieKfSQg.PNG/job_trait_h2_s3_02.png', desc: '송 오브 피스의 치유량이 증가한다.', stats: '송 오브 피스 치유량 6.5~20% 증가' },
            { name: '맹독', icon: IMG + 'MjAyNDExMTVfMjM4/MDAxNzMxNjY0Mzc2OTA0.Gk_WmTvR8vnPwpDbDcDNCg2-jQmZ6d1kuWAL4KLUNvEg.3A4maN2VhUQ6hmsLTaAFwoQ2Op3HOJ3cNRnbauDHOPAg.PNG/job_trait_h2_s3_03.png', desc: '포이즌 봄이 더욱 강력해진다.', stats: '포이즌 봄 스킬공격력 6.5~20% 증폭' },
            { name: '마력 화살', icon: IMG + 'MjAyNDExMTVfMTQ3/MDAxNzMxNjY0MzE1NDcz.mFrilhwdU80WgzKafLPYiiJtsyLwsfMAq075DUXrjjcg.P_p_olHqg6TgukZM1Qn6EgLwn1LyXjnlK5pkwsTkleQg.PNG/job_trait_h2_s1_03.png', desc: '미스틱 애로우가 더욱 강력해진다.', stats: '미스틱 애로우 스킬공격력 6.5~20% 증폭' }
        ],
        tier4: [
            { name: '치명타 피해량', icon: IMG + 'MjAyNDExMTVfMjQ1/MDAxNzMxNjY1NDMzMjQ1.ds_HsP615mVUL2veNiDbPs1y8-KD1iSzijOwsio2U5Mg.Jd8VZBqxSYfYLOwITw2DPX9TUDFL2VN9BTHWqEjaBWcg.PNG/job_trait_all_04.png', desc: '치명타 피해량이 증가한다.', stats: '치명타 피해량 13~40% 증가' },
            { name: '받는 피해 감소', icon: IMG + 'MjAyNDExMTVfMTg5/MDAxNzMxNjY1MzkwODU4.ToVUwIc9Z4U1IpExKgADSn_KcCYHY2ksN4HmpUEQgTQg.rVogxVjHJuF_z82F2XTUGkLbQc73swRz5VlP2yybURIg.PNG/job_trait_all_03.png', desc: '받는 피해가 감소된다.', stats: '받는 피해 6~15% 감소' }
        ],
        tier5: [
            { name: '치명적 저격', icon: IMG + 'MjAyNDExMTVfMjU3/MDAxNzMxNjY1MDEwNTky.J0trVewG-Q7GAYHiUbb0sV4EeBuwtgYxzAtn-CuSlIQg.pEU6gRBbCcWAXQKgdV1xiC4UZFNAf16XC7Ga1Vd7HlYg.PNG/job_trait_h3_s4_03.png', desc: '스타폴의 피해량이 증가한다.', stats: '스타폴 스킬공격력 14~50% 증폭' },
            { name: '폭발 화살', icon: IMG + 'MjAyNDExMTVfMjY3/MDAxNzMxNjY0ODY0NTcw.KwTv02wyQu0U_Z64o0SJP1x5LilZGa1WkaVJNYqN1Ogg.dag3ROjnNhNdaI-AU11uSJC_Fs-W6kkHp8uEdxtZ0ccg.PNG/job_trait_h3_s4_02.png', desc: '스타폴이 더 넓은 범위를 공격한다.', stats: '스타폴 범위 30~100% 증가' },
            { name: '독 확산', icon: IMG + 'MjAyNDExMTVfMjc4/MDAxNzMxNjY1MDE3MTkx.4EyjRyyxkknAyss4Xno9Y4i1bV0yAE6X5uel82onCdUg.KlQXe5EElKKC_DsqWreIwMAnPBipjaDxGPe6mVgHnf4g.PNG/job_trait_h3_s4_04.png', desc: '포이즌 봄의 독이 주변으로 확산된다.', stats: '포이즌 봄 범위 30~100% 증가' }
        ],
        tier6: [
            { name: '별빛 세례', icon: IMG + 'MjAyNDExMTVfMjA3/MDAxNzMxNjM3MjA5NDMy.912dGWxt0GOrRb6E7ksGp-RN-sMBFDHha90VYJtBw7wg.DNuCltuo3LM1erMXHQs9PGbvA30zAhiufbJosXVmnyEg.PNG/job_trait_all_01.png', desc: '스타폴이 더 많은 화살을 발사한다.', stats: '스타폴 타격 횟수 2~5회 추가' },
            { name: '유성우', icon: IMG + 'MjAyNDExMTVfMTcz/MDAxNzMxNjM3MjAyNjcz.uw3q8tiKFK1aATKacj5BAUDp2oNL2rnHX5u1tvbL7oQg.rBPp0tD-SzWgz3krV-DeQVVPjhh3_nJjqJv33YXPLEIg.PNG/job_trait_all_02.png', desc: '스타폴 시전시 재사용 대기시간이 감소한다.', stats: '스타폴 재사용 대기시간 3~10초 감소' }
        ]
    }
};