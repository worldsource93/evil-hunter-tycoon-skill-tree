// data/darkknight.js

export const darkknightData = {
    overlord: {
        name: '오버로드 영웅 스킬 트리',
        main: { name: '하이퍼 블리츠', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNTExMjBfOTQg/MDAxNzYzNjMwMTY3NjIx.RjBRhNJ6yO9I60UlNveyNV7fodQKW3N2eK0m8VziEZwg.n4rkh1Uaekmgol3IuJxC0bYP5-w7pz16mETD2NeS7zIg.PNG/skill_h5_09.png', desc: '일반공격시 확률적으로 하이퍼 블리츠를 시전한다.', stats: '일반공격시 25% 확률로 초당공격력의 37~100% 데미지로 5회 광역공격. 하이퍼 블리츠는 적의 방어력을 무시. (PVP에서 스킬공격력 60% 감폭)' },
        tier1: [
            { name: '파워 슬래쉬', job: 'common', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNTExMjBfMjU3/MDAxNzYzNjI5OTUzMzU2.wtMLaepWwk4AUfJOL9k_WVfXRZXDyX8FTYh1z37QvTUg.4ysig6DQhDXwmwaF9D5z0B1V_Ygd88h5ZGJOzjq4CpQg.PNG/job_trait_h5_s1_01.png', desc: '라운드 슬래쉬 시전시 더욱 강력한 기운을 발산한다.', stats: '라운드 슬래쉬 스킬공격력 6.5~20% 증폭' },
            { name: '라운드 포스', job: 'common', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNTExMjBfMTQw/MDAxNzYzNjI5OTU5ODYz.Cyc8uzPD2d9DGGHRBpYxD44rZrgHV553N0ABGv95JcAg.a9Er9uEXUSsmNjtXVDNvdguU8bp3C7Rx02_79OvjgJ8g.PNG/job_trait_h5_s1_02.png', desc: '라운드 슬래쉬로 발산한 기운을 주변에 둘러 받는 피해를 감소시킨다.', stats: '라운드 슬래쉬 시전시 3초간 시전자의 받는 피해 1~10% 감소' },
            { name: '집중력 유지', job: 'common', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNTExMjBfMjUy/MDAxNzYzNjI5OTY1MTk1.s8_CyBoiy9LDXR7PCZ0eNnjyZEXcQLTjR2Lh1-SnIFkg.qVb7IAwlltPYbTWUtZnOiIW8pUsGPA_1iUkiGSIR1OEg.PNG/job_trait_h5_s1_03.png', desc: '훈련을 통해 집중 상태를 더 유지할 수 있게 한다.', stats: '컨센트레이트 지속시간 1~10초 증가' }
        ],
        tier2: [
            { name: '전체공격력', job: 'common', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfMjA3/MDAxNzMxNjM3MjA5NDMy.912dGWxt0GOrRb6E7ksGp-RN-sMBFDHha90VYJtBw7wg.DNuCltuo3LM1erMXHQs9PGbvA30zAhiufbJosXVmnyEg.PNG/job_trait_all_01.png', desc: '전체 공격력이 증가한다.', stats: '전체 공격력 23~50% 증가' },
            { name: '체력', job: 'common', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfMTcz/MDAxNzMxNjM3MjAyNjcz.uw3q8tiKFK1aATKacj5BAUDp2oNL2rnHX5u1tvbL7oQg.rBPp0tD-SzWgz3krV-DeQVVPjhh3_nJjqJv33YXPLEIg.PNG/job_trait_all_02.png', desc: '체력이 증가한다.', stats: '체력 23~50% 증가' }
        ],
        tier3: [
            { name: '카발리 차지', job: '2-1', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNTExMjBfMTUw/MDAxNzYzNjI5OTc2MDIy._w1huCyiWST6W19Rvu_ks3wD2XaIEsKbFc8Dd7rp9-0g.AbkBCxew0F8FMvX_FUEyOKFoDn2xyS1puVreKeis4_Ug.PNG/job_trait_h5_s2_01.png', desc: '탈 것에 탑승 중일 때 더 강력하게 공격한다.', stats: '에퀴테이션 적용 중에 자신의 공격력 7~25% 증폭' },
            { name: '쉐도우 스킨', job: '2-2', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNTExMjBfMjI5/MDAxNzYzNjI5OTgxNjA3.lm-N4R4Nph80Tk-TCD1WSG3ueOvbBxF4tzDuPQOSXPMg.SZBXGG0Q6fT7si6t3K9qsJxJC-1u8vlm4LsEcP4fR4sg.PNG/job_trait_h5_s2_02.png', desc: '그림자의 힘을 몸에 둘러 더 강력한 일격을 시전하고 자신을 보호한다.', stats: '쉐도우 스트라이크 스킬공격력을 7.5~30% 증폭시키고 쉐도우 스트라이크 시전시 8초간 시전자의 받는 피해 11~20% 감소 및 행동불가 상태이상 면역' },
            { name: '레피드 스핀', job: '2-3', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNTExMjBfMTk3/MDAxNzYzNjI5OTg4NTQ2.DuhUnHCbuDnHbY-g1VtQllMLBr0f1r6D6xe-QdD3QiQg.EgySuil5jF9Fy418liGgSdjfjnlJrBIy2CPTeNJStPAg.PNG/job_trait_h5_s2_03.png', desc: '스핀 스플래시가 더욱 빠르게 회전한다.', stats: '스핀 스플래시 공격 주기가 0.02~0.2초 감소하는 대신 시전불가 시간을 3초 로 변경' }
        ],
        tier4: [
            { name: '치명타 피해량', job: 'common', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfMTYw/MDAxNzMxNjM3MTk1ODkw.e6rVzINNDaXJ5_aYXiddcL0anP-HfDLDtcJGFZNdCs4g.7hMhzzYR4W0qdJDqb11n_kxVHppXhk-FnPmb5pobnCgg.PNG/job_trait_all_03.png', desc: '치명타 피해량이 증가한다.', stats: '치명타 피해량 13~40% 증가' },
            { name: '받는 피해', job: 'common', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfNzIg/MDAxNzMxNjM3MTg4NzA2.vI1bT7uW4EplQdonaBK1x19VSDAQWAo5vuVgEjiC0XMg.Bg7xSqpzJl9jJTRj0njQOI6tzuNPPHPqr0Ijg4FeXNMg.PNG/job_trait_all_04.png', desc: '받는 피해가 감소된다.', stats: '받는 피해 6~15% 감소' }
        ],
        tier5: [
            { name: '다크 쉴드', job: '3-1', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNTExMjBfMTc4/MDAxNzYzNjMwMTI2ODQy.0hM0TS93MFxsVMU9qiTT4ZZPwhnfhbiAK1Eq7CD7C4Eg.52rU2F9OYQ3PGI5PRzxd9LaF4bEYglHQDI3YbZd1m0Qg.PNG/job_trait_h5_s3_01.png', desc: '피어싱 쓰러스트 시전시 보호막을 생성한다.', stats: '피어싱 쓰러스트 스킬 범위 내에 위치한 적 1명당 시전자 최대체력의 3.7~10% 보호막 생성. (최대 3중첩)  보호막은 5초간 지속' },
            { name: '데들리 자벨린', job: '3-2', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNTExMjBfOTcg/MDAxNzYzNjI5ODcyMDY0.1FdKU7mg2tX7ZhaZIza2SxOzA2T4IRaDjcDKoiIpLSUg.Yyi3zCuruQkdh7nP-0jHqNg7iF-9cgDMT5XpWgUIiHAg.PNG/job_trait_h5_s3_02.png', desc: '셰이드 자벨린이 30~75%로 적에게 2배 피해량 적용.' },
            { name: '하이퍼 플레임', job: '3-3', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNTExMjBfMjMg/MDAxNzYzNjI5ODYyMzQx.mn2kINZ6kvwoGtoYnSJXLABJE3l84MKqGoIUjSUmgEIg.F_2XA802Rim2sODsx8iexHBmmYwi1y07X8Axk-Dvi-wg.PNG/job_trait_h5_s3_03.png', desc: '드래곤이 더 뜨거운 브레스를 내뿜는다.', stats: '드래곤 브레스 스킬공격력 14~50% 증폭' }
        ],
        tier6: [
            { name: '레이지 블리츠', job: 'common', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNTExMjBfMTc5/MDAxNzYzNjMwMDQ5NTEz.K1Kt9w2Fbj1vnGXPqThUjKDsUK6cD6tQTAEy1GXMvrYg.pW-XMot1zINGKXD1ETKkbsOGyQQxgw0RkE6_YcqSVBcg.PNG/job_trait_h5_s4_01.png', desc: '분노의 힘을 담아 하이퍼 블리츠를 강화한다.', stats: '하이퍼 블리츠 스킬공격력 16~70% 증폭.' },
            { name: '다크니스 블리츠', job: 'common', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNTExMjBfMTA1/MDAxNzYzNjMwMTQ4MDUw.iqghvDfnOos-Tl0i9WKay1W-GBZo-qwH3NOxvKu6_u4g.Kal0FWSG2e9G_NyYQqtFTjiN3Gh3EKciKZ7oJvYeZSog.PNG/job_trait_h5_s4_02.png', desc: '하이퍼 블리츠가 일반공격에 발동하지 않는 대신 시전 가능 스킬로 변경된다.', stats: '다크니스 블리츠 시전가능. 적의 방어력을 무시하고 초당공격력의 300~750% 데미지로 5회 광역공격. (시전 후 10초 간 시전불가) (PVP에서 스킬공격력 60% 감폭)' }
        ]
    },
    deathbringer: {
        name: '데스브링어 영웅 스킬 트리',
        main: { name: '미스틸테인', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNTExMjBfMjIg/MDAxNzYzNjMwMjE2NDM0.jnO8xPAnwXdoLPrTwjqelJkgrZPINo319BNdlTXOrCsg.dBObaDVKpYrIz4PGeuwsew5jDLMZIZVphdfs8F0qWZIg.PNG/skill_h5_10.png', desc: '저주의 창 미스틸테인을 소환하여 강력한 저주를 내린다.', stats: '초당공격력의 700~2500% 데미지로 광역공격. 7초 간 저주지역을 생성해 범위 내 적에게 지속적으로 받는 치명타 데미지 6~15% 증가 상태이상 부여 (PVP에서 스킬공격력 60% 감폭)' },
        tier1: [
            { name: '파워 슬래쉬', job: 'common', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNTExMjBfMjU3/MDAxNzYzNjI5OTUzMzU2.wtMLaepWwk4AUfJOL9k_WVfXRZXDyX8FTYh1z37QvTUg.4ysig6DQhDXwmwaF9D5z0B1V_Ygd88h5ZGJOzjq4CpQg.PNG/job_trait_h5_s1_01.png', desc: '라운드 슬래쉬 시전시 더욱 강력한 기운을 발산한다.', stats: '라운드 슬래쉬 스킬공격력 6.5~20% 증폭' },
            { name: '라운드 포스', job: 'common', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNTExMjBfMTQw/MDAxNzYzNjI5OTU5ODYz.Cyc8uzPD2d9DGGHRBpYxD44rZrgHV553N0ABGv95JcAg.a9Er9uEXUSsmNjtXVDNvdguU8bp3C7Rx02_79OvjgJ8g.PNG/job_trait_h5_s1_02.png', desc: '라운드 슬래쉬로 발산한 기운을 주변에 둘러 받는 피해를 감소시킨다.', stats: '라운드 슬래쉬 시전시 3초간 시전자의 받는 피해 1~10% 감소' },
            { name: '집중력 유지', job: 'common', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNTExMjBfMjUy/MDAxNzYzNjI5OTY1MTk1.s8_CyBoiy9LDXR7PCZ0eNnjyZEXcQLTjR2Lh1-SnIFkg.qVb7IAwlltPYbTWUtZnOiIW8pUsGPA_1iUkiGSIR1OEg.PNG/job_trait_h5_s1_03.png', desc: '훈련을 통해 집중 상태를 더 유지할 수 있게 한다.', stats: '컨센트레이트 지속시간 1~10초 증가' }
        ],
        tier2: [
            { name: '전체공격력', job: 'common', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfMjA3/MDAxNzMxNjM3MjA5NDMy.912dGWxt0GOrRb6E7ksGp-RN-sMBFDHha90VYJtBw7wg.DNuCltuo3LM1erMXHQs9PGbvA30zAhiufbJosXVmnyEg.PNG/job_trait_all_01.png', desc: '전체 공격력이 증가한다.', stats: '전체 공격력 23~50% 증가' },
            { name: '체력', job: 'common', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfMTcz/MDAxNzMxNjM3MjAyNjcz.uw3q8tiKFK1aATKacj5BAUDp2oNL2rnHX5u1tvbL7oQg.rBPp0tD-SzWgz3krV-DeQVVPjhh3_nJjqJv33YXPLEIg.PNG/job_trait_all_02.png', desc: '체력이 증가한다.', stats: '체력 23~50% 증가' }
        ],
        tier3: [
            { name: '카발리 차지', job: '2-1', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNTExMjBfMTUw/MDAxNzYzNjI5OTc2MDIy._w1huCyiWST6W19Rvu_ks3wD2XaIEsKbFc8Dd7rp9-0g.AbkBCxew0F8FMvX_FUEyOKFoDn2xyS1puVreKeis4_Ug.PNG/job_trait_h5_s2_01.png', desc: '탈 것에 탑승 중일 때 더 강력하게 공격한다.', stats: '에퀴테이션 적용 중에 자신의 공격력 7~25% 증폭' },
            { name: '쉐도우 스킨', job: '2-2', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNTExMjBfMjI5/MDAxNzYzNjI5OTgxNjA3.lm-N4R4Nph80Tk-TCD1WSG3ueOvbBxF4tzDuPQOSXPMg.SZBXGG0Q6fT7si6t3K9qsJxJC-1u8vlm4LsEcP4fR4sg.PNG/job_trait_h5_s2_02.png', desc: '그림자의 힘을 몸에 둘러 더 강력한 일격을 시전하고 자신을 보호한다.', stats: '쉐도우 스트라이크 스킬공격력을 7.5~30% 증폭시키고 쉐도우 스트라이크 시전시 8초간 시전자의 받는 피해 11~20% 감소 및 행동불가 상태이상 면역' },
            { name: '레피드 스핀', job: '2-3', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNTExMjBfMTk3/MDAxNzYzNjI5OTg4NTQ2.DuhUnHCbuDnHbY-g1VtQllMLBr0f1r6D6xe-QdD3QiQg.EgySuil5jF9Fy418liGgSdjfjnlJrBIy2CPTeNJStPAg.PNG/job_trait_h5_s2_03.png', desc: '스핀 스플래시가 더욱 빠르게 회전한다.', stats: '스핀 스플래시 공격 주기가 0.02~0.2초 감소하는 대신 시전불가 시간을 3초 로 변경' }
        ],
        tier4: [
            { name: '치명타 피해량', job: 'common', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfMTYw/MDAxNzMxNjM3MTk1ODkw.e6rVzINNDaXJ5_aYXiddcL0anP-HfDLDtcJGFZNdCs4g.7hMhzzYR4W0qdJDqb11n_kxVHppXhk-FnPmb5pobnCgg.PNG/job_trait_all_03.png', desc: '치명타 피해량이 증가한다.', stats: '치명타 피해량 13~40% 증가' },
            { name: '받는 피해', job: 'common', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNDExMTVfNzIg/MDAxNzMxNjM3MTg4NzA2.vI1bT7uW4EplQdonaBK1x19VSDAQWAo5vuVgEjiC0XMg.Bg7xSqpzJl9jJTRj0njQOI6tzuNPPHPqr0Ijg4FeXNMg.PNG/job_trait_all_04.png', desc: '받는 피해가 감소된다.', stats: '받는 피해 6~15% 감소' }
        ],
        tier5: [
            { name: '다크 쉴드', job: '3-1', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNTExMjBfMTc4/MDAxNzYzNjMwMTI2ODQy.0hM0TS93MFxsVMU9qiTT4ZZPwhnfhbiAK1Eq7CD7C4Eg.52rU2F9OYQ3PGI5PRzxd9LaF4bEYglHQDI3YbZd1m0Qg.PNG/job_trait_h5_s3_01.png', desc: '피어싱 쓰러스트 시전시 보호막을 생성한다.', stats: '피어싱 쓰러스트 스킬 범위 내에 위치한 적 1명당 시전자 최대체력의 3.7~10% 보호막 생성. (최대 3중첩)  보호막은 5초간 지속' },
            { name: '데들리 자벨린', job: '3-2', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNTExMjBfOTcg/MDAxNzYzNjI5ODcyMDY0.1FdKU7mg2tX7ZhaZIza2SxOzA2T4IRaDjcDKoiIpLSUg.Yyi3zCuruQkdh7nP-0jHqNg7iF-9cgDMT5XpWgUIiHAg.PNG/job_trait_h5_s3_02.png', desc: '셰이드 자벨린이 30~75%로 적에게 2배 피해량 적용.' },
            { name: '하이퍼 플레임', job: '3-3', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNTExMjBfMjMg/MDAxNzYzNjI5ODYyMzQx.mn2kINZ6kvwoGtoYnSJXLABJE3l84MKqGoIUjSUmgEIg.F_2XA802Rim2sODsx8iexHBmmYwi1y07X8Axk-Dvi-wg.PNG/job_trait_h5_s3_03.png', desc: '드래곤이 더 뜨거운 브레스를 내뿜는다.', stats: '드래곤 브레스 스킬공격력 14~50% 증폭' }
        ],
        tier6: [
            { name: '커스 드링커', job: 'common', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNTExMjBfMTUx/MDAxNzYzNjMwMjI0NTA0.Cb2rdFBGZKuRxKBeo6TiJw906jPxO2AFW6fl9XSw85wg.bsXa72lTeYBNL0otYABPaKE7GTEzpcfo4ExxWV7KcJog.PNG/job_trait_h5_s4_03.png', desc: '미스틸테인의 저주를 흡수하여 자신을 강화한다.', stats: '미스틸테인 시전시 시전자에게 7초간 공격력 6.5~20% 증폭, 받는 피해 5.5~10% 감소 부여 ' },
            { name: '데스 그라운드', job: 'common', icon: 'https://cafeptthumb-phinf.pstatic.net/MjAyNTExMjBfMTU5/MDAxNzYzNjMwMjMzODE0.gCWHAysBKjthH7qXdpUhm52FexK9DTTTjmzLu_mzuJIg.lzAB4hlfWbUVj0eucqtshRptUpkcr_7HVAEsGkLzljwg.PNG/job_trait_h5_s4_04.png', desc: '미스틸테인의 저주가 퍼져나갈 때마다 피해를 준다.', stats: '미스틸테인 지속시간동안 1초마다 초당공격력의 125~350% 데미지로 광역공격. (PVP에서 스킬공격력 60% 감폭)' }
        ]
    }
};