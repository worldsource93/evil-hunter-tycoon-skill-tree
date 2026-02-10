// data/sorcerer.js
const IMG = 'https://cafeptthumb-phinf.pstatic.net/';

export const sorcererData = {
    manalord: {
        name: '마나로드 영웅 스킬 트리',
        main: { name: '마나차지', icon: IMG + 'MjAyNDExMTVfMTky/MDAxNzMxNjY0NTkwMjI2.fqTNPeDua_QBy_IE3MOVi-rCrEPZsUxtGZSQ3ontncwg.cEdPxKSV4RS_Gb6v0o6XThMxggEtBDblrQdtybTQW2Qg.PNG/skill_h2_10.png', desc: '마나를 충전하여 다음 스킬의 피해량을 증가시킨다.', stats: '마나차지 시전 후 10초 이내 시전하는 스킬의 피해량 15~50% 증가 (재사용 대기시간 20초)' },
        tier1: [
            { name: '치명적인 번개', icon: IMG + 'MjAyNDExMTVfMTU4/MDAxNzMxNjM3MDk5MTU4.4l-KKOVNy-ts1H2CumZ60dn9DavQcWiZt2WHiqZRZEIg.X-5jseJlwH27Mt-_kJ-fmZQlx0aU7k0fCDCwsh2M8lsg.PNG/job_trait_h1_s1_01.png', desc: '라이트닝 볼트가 더욱 치명적인 피해를 입힌다.', stats: '라이트닝 볼트 스킬공격력 6.5~20% 증폭' },
            { name: '피뢰침', icon: IMG + 'MjAyNDExMTVfMjMz/MDAxNzMxNjM3MTE0NzM3.N79zKCVKuYxQGIPPEHOp1gh08fm_wqEICRihvylQ4OIg.Qlb2efXblfNtj4T5zvdlJC2iB9GuxbPSXefg6g9y2_Ig.PNG/job_trait_h1_s1_02.png', desc: '라이트닝 볼트가 적중한 적에게 전기 충격을 남긴다.', stats: '라이트닝 볼트 적중시 3초간 적에게 전기 충격 부여' },
            { name: '아이스 쉴드', icon: IMG + 'MjAyNDExMTVfMjM5/MDAxNzMxNjM3MTM1NTIw.BCYO8_tBL9wmNDx9wf3iRAdLmWHGa3Pdjuz9zI-9IrUg.XmKTM3kkrhHxafr9k_fNw4-JvLujGuAqna15bo_ZYWgg.PNG/job_trait_h1_s2_01.png', desc: '프로스트 아머 시전시 보호막량이 증가한다.', stats: '프로스트 아머 시전시 보호막량 6.5~20% 증가' }
        ],
        tier2: [
            { name: '전체 공격력', icon: IMG + 'MjAyNDExMTVfMTM3/MDAxNzMxNjY0NDQ0NzI2.pVnp_0dzoT2_h5YOltWFe2HNcJhONhmw_wXORBGQ9qEg.FPukuALx78W14XsuKFZ2Jx3uy6e1qiJMCLNX5UlFQ6sg.PNG/job_trait_all_01.png', desc: '전체 공격력이 증가한다.', stats: '전체 공격력 23~50% 증가' },
            { name: '체력', icon: IMG + 'MjAyNDExMTVfMTU2/MDAxNzMxNjY0NDQ5MzQ0.bcp3J7NjHw42h9s8XpxDbJNi2CmPQLvIx5tXu1gRqXog.eJWx0iWpNQtecnDoR4oOr7OgoAVi2dYJ-hKu3vvxzGwg.PNG/job_trait_all_02.png', desc: '체력이 증가한다.', stats: '체력 23~50% 증가' }
        ],
        tier3: [
            { name: '매서운 눈보라', icon: IMG + 'MjAyNDExMTVfMTM1/MDAxNzMxNjY0NTMzNDg4.PydBSB9_HjKCs_A1LMso9BGTOYXzDM_nzIyxcPGdrv0g.2yg3UnRODRI5etUoa3FPADCYnlDGsXVnZG-HuWnMsFwg.PNG/job_trait_h2_s4_03.png', desc: '블리자드가 더욱 매서운 피해를 입힌다.', stats: '블리자드 스킬공격력 6.5~20% 증폭' },
            { name: '상급 저주', icon: IMG + 'MjAyNDExMTVfMTk0/MDAxNzMxNjY0NTYyNTMx.etNiJYSRV8WNYv5MguNUWrP2jIrJGq4OfVGau96H4R8g.pR5BQEUYHvFI9jxS59W1pTYqJ-Cy4FrQQPaNMCSPyX4g.PNG/job_trait_h2_s2_01.png', desc: '스톤 커즈가 더욱 강력해진다.', stats: '스톤 커즈 스킬공격력 6.5~20% 증폭' },
            { name: '코멧 클러스터', icon: IMG + 'MjAyNDExMTVfMTQx/MDAxNzMxNjY0NTcyNzQz.OQMVyqnTs3GepPFdioHKruXkCWJympoRAGWYcI1HFpog.JDBj351L92jTGAbeKEhcZHaFgw8SmohA_pmXuX7ERTwg.PNG/job_trait_h2_s2_03.png', desc: '메테오가 더 많은 운석을 떨어뜨린다.', stats: '메테오 타격 횟수 1~3회 증가' }
        ],
        tier4: [
            { name: '치명타 피해량', icon: IMG + 'MjAyNDExMTVfMjE1/MDAxNzMxNjY0NDU0MTM1.JZGbsste_s3b1Tk4OKAFatg1hJ0dZycRe8iY4qEpnysg.1Ttdi_gwzZCqQCqVROHn5Hk2koj-rVjMGluHZoGK2isg.PNG/job_trait_all_03.png', desc: '치명타 피해량이 증가한다.', stats: '치명타 피해량 13~40% 증가' },
            { name: '받는 피해 감소', icon: IMG + 'MjAyNDExMTVfMjY1/MDAxNzMxNjY0NDU4NTE4.g8vUrG4OnplTjnXxp9RkIcNUVoSPCyZ5LH7BGRXXTTAg.5zXrOO0Q0IdcyT-qivHG1xQP18ypZy8HtSPW_H3OPEYg.PNG/job_trait_all_04.png', desc: '받는 피해가 감소된다.', stats: '받는 피해 6~15% 감소' }
        ],
        tier5: [
            { name: '하이 퍼밀리어', icon: IMG + 'MjAyNDExMTVfMTc3/MDAxNzMxNjY0OTUyMDAz.i4gLzwjIyudAaQmpOLQ0ctr13jbwv_qS8aaN0wbOWCMg.YvY1hwmHHjM9oiEqLMe0kwA-BxqoHxtTPs9kBUyPV_gg.PNG/job_trait_h3_s2_01.png', desc: '서몬 퍼밀리어가 더욱 강력한 소환수를 부른다.', stats: '서몬 퍼밀리어 소환수 공격력 14~50% 증가' },
            { name: '다크 프로텍션', icon: IMG + 'MjAyNDExMTVfMTAw/MDAxNzMxNjY0NzcwMDA5.dHLPiX9SEPVHWcE714BYTKAokPv1kYtZ-L5LQvJ5syQg.JYUEqvDiac8NukMEcf-sEN0l0OqLn0hjQM-XGWy0nAkg.PNG/job_trait_h3_s2_03.png', desc: '폴리모프 시전시 보호막을 생성한다.', stats: '폴리모프 시전시 시전자 최대체력의 5~15% 보호막 생성' },
            { name: '공포의 지배자', icon: IMG + 'MjAyNDExMTVfMjcx/MDAxNzMxNjY0OTIyMjI1.z14JrDpFlOuWQzp1F9kIdwIWThbXwkOElUex6kaT8G0g.taAnncfvCtdfizrrvD-f7sOGN5NurNRm817tQQd4kIog.PNG/job_trait_h3_s1_03.png', desc: '나이트메어가 더욱 강력한 공포를 심어준다.', stats: '나이트메어 스킬공격력 14~50% 증폭' }
        ],
        tier6: [
            { name: '오버차지', icon: IMG + 'MjAyNDExMTVfMTEz/MDAxNzMxNjY1MTM1OTU1.lN6DPAqqOasGHlN83wCrVFyixkuJPdq_6tG48XO-N7Ig.wLCB1rw18Ae4ikApfzVlQmF5foxMz_V3PBi7jTvPlT0g.PNG/job_trait_h4_s2_01.png', desc: '마나차지의 효과가 증가한다.', stats: '마나차지 피해량 증가 효과 5~20% 추가 증가' },
            { name: '라이트닝 오브', icon: IMG + 'MjAyNDExMTVfMjE0/MDAxNzMxNjY1MTQyNjUz.OTMJPnzA9UQxU07wZ_rEywtBwRERaRVFVnrVw2kHYEQg.s-vdDtYExkQRVSyJ3we61sYX65BeD90X05hqFaEvvcEg.PNG/job_trait_h4_s2_02.png', desc: '마나차지 시전 후 전기 구체를 생성한다.', stats: '마나차지 시전 후 전기 구체 생성. 전기 구체는 주변 적에게 초당공격력의 50~150% 피해' }
        ]
    },
    oppositer: {
        name: '오포지터 영웅 스킬 트리',
        main: { name: '엘리멘탈 포스', icon: IMG + 'MjAyNDExMTVfMjIx/MDAxNzMxNjY0ODkxODkz.krNpTMzV7V0Z77wtf-X__3viYWWl2OPIYZ0L5E-WDegg.DDXX36jrvfXkR_THFUqsDupjwVlx8BbqRSxPVd50uN8g.PNG/skill_h3_10.png', desc: '원소의 힘을 끌어모아 다음 스킬에 부여한다.', stats: '엘리멘탈 포스 시전 후 10초 이내 시전하는 스킬에 원소 속성 부여. 원소 속성 스킬은 적의 원소 저항을 50~100% 무시' },
        tier1: [
            { name: '치명적인 번개', icon: IMG + 'MjAyNDExMTVfMTU4/MDAxNzMxNjM3MDk5MTU4.4l-KKOVNy-ts1H2CumZ60dn9DavQcWiZt2WHiqZRZEIg.X-5jseJlwH27Mt-_kJ-fmZQlx0aU7k0fCDCwsh2M8lsg.PNG/job_trait_h1_s1_01.png', desc: '라이트닝 볼트가 더욱 치명적인 피해를 입힌다.', stats: '라이트닝 볼트 스킬공격력 6.5~20% 증폭' },
            { name: '피뢰침', icon: IMG + 'MjAyNDExMTVfMjMz/MDAxNzMxNjM3MTE0NzM3.N79zKCVKuYxQGIPPEHOp1gh08fm_wqEICRihvylQ4OIg.Qlb2efXblfNtj4T5zvdlJC2iB9GuxbPSXefg6g9y2_Ig.PNG/job_trait_h1_s1_02.png', desc: '라이트닝 볼트가 적중한 적에게 전기 충격을 남긴다.', stats: '라이트닝 볼트 적중시 3초간 적에게 전기 충격 부여' },
            { name: '아이스 쉴드', icon: IMG + 'MjAyNDExMTVfMjM5/MDAxNzMxNjM3MTM1NTIw.BCYO8_tBL9wmNDx9wf3iRAdLmWHGa3Pdjuz9zI-9IrUg.XmKTM3kkrhHxafr9k_fNw4-JvLujGuAqna15bo_ZYWgg.PNG/job_trait_h1_s2_01.png', desc: '프로스트 아머 시전시 보호막량이 증가한다.', stats: '프로스트 아머 시전시 보호막량 6.5~20% 증가' }
        ],
        tier2: [
            { name: '전체 공격력', icon: IMG + 'MjAyNDExMTVfMTYz/MDAxNzMxNjY0NDg0MDQ4.wfAr-NCdikTafkmGHOUJoaQyeT9qPke4P3q0zFqh2csg.2skM-9WrYNkBO8VHrNw4IGqDt7oeSNH4iPzLwZvkMwsg.PNG/job_trait_all_01.png', desc: '전체 공격력이 증가한다.', stats: '전체 공격력 23~50% 증가' },
            { name: '체력', icon: IMG + 'MjAyNDExMTVfMTk5/MDAxNzMxNjY0NDg5MjY5.STAMk80WEXcThwtby2qTNkvx8gOvN5yf8nv5Chq5iWIg.dT3gHNrM6Mv14zfJl-6_tTUmBWFx6ERGyQj8fOmbP8Ag.PNG/job_trait_all_02.png', desc: '체력이 증가한다.', stats: '체력 23~50% 증가' }
        ],
        tier3: [
            { name: '매서운 눈보라', icon: IMG + 'MjAyNDExMTVfMTM1/MDAxNzMxNjY0NTMzNDg4.PydBSB9_HjKCs_A1LMso9BGTOYXzDM_nzIyxcPGdrv0g.2yg3UnRODRI5etUoa3FPADCYnlDGsXVnZG-HuWnMsFwg.PNG/job_trait_h2_s4_03.png', desc: '블리자드가 더욱 매서운 피해를 입힌다.', stats: '블리자드 스킬공격력 6.5~20% 증폭' },
            { name: '상급 저주', icon: IMG + 'MjAyNDExMTVfMTk0/MDAxNzMxNjY0NTYyNTMx.etNiJYSRV8WNYv5MguNUWrP2jIrJGq4OfVGau96H4R8g.pR5BQEUYHvFI9jxS59W1pTYqJ-Cy4FrQQPaNMCSPyX4g.PNG/job_trait_h2_s2_01.png', desc: '스톤 커즈가 더욱 강력해진다.', stats: '스톤 커즈 스킬공격력 6.5~20% 증폭' },
            { name: '코멧 클러스터', icon: IMG + 'MjAyNDExMTVfMTQx/MDAxNzMxNjY0NTcyNzQz.OQMVyqnTs3GepPFdioHKruXkCWJympoRAGWYcI1HFpog.JDBj351L92jTGAbeKEhcZHaFgw8SmohA_pmXuX7ERTwg.PNG/job_trait_h2_s2_03.png', desc: '메테오가 더 많은 운석을 떨어뜨린다.', stats: '메테오 타격 횟수 1~3회 증가' }
        ],
        tier4: [
            { name: '치명타 피해량', icon: IMG + 'MjAyNDExMTVfMjE1/MDAxNzMxNjY0NDU0MTM1.JZGbsste_s3b1Tk4OKAFatg1hJ0dZycRe8iY4qEpnysg.1Ttdi_gwzZCqQCqVROHn5Hk2koj-rVjMGluHZoGK2isg.PNG/job_trait_all_03.png', desc: '치명타 피해량이 증가한다.', stats: '치명타 피해량 13~40% 증가' },
            { name: '받는 피해 감소', icon: IMG + 'MjAyNDExMTVfMjY1/MDAxNzMxNjY0NDU4NTE4.g8vUrG4OnplTjnXxp9RkIcNUVoSPCyZ5LH7BGRXXTTAg.5zXrOO0Q0IdcyT-qivHG1xQP18ypZy8HtSPW_H3OPEYg.PNG/job_trait_all_04.png', desc: '받는 피해가 감소된다.', stats: '받는 피해 6~15% 감소' }
        ],
        tier5: [
            { name: '하이 퍼밀리어', icon: IMG + 'MjAyNDExMTVfMTc3/MDAxNzMxNjY0OTUyMDAz.i4gLzwjIyudAaQmpOLQ0ctr13jbwv_qS8aaN0wbOWCMg.YvY1hwmHHjM9oiEqLMe0kwA-BxqoHxtTPs9kBUyPV_gg.PNG/job_trait_h3_s2_01.png', desc: '서몬 퍼밀리어가 더욱 강력한 소환수를 부른다.', stats: '서몬 퍼밀리어 소환수 공격력 14~50% 증가' },
            { name: '다크 프로텍션', icon: IMG + 'MjAyNDExMTVfMTAw/MDAxNzMxNjY0NzcwMDA5.dHLPiX9SEPVHWcE714BYTKAokPv1kYtZ-L5LQvJ5syQg.JYUEqvDiac8NukMEcf-sEN0l0OqLn0hjQM-XGWy0nAkg.PNG/job_trait_h3_s2_03.png', desc: '폴리모프 시전시 보호막을 생성한다.', stats: '폴리모프 시전시 시전자 최대체력의 5~15% 보호막 생성' },
            { name: '공포의 지배자', icon: IMG + 'MjAyNDExMTVfMjcx/MDAxNzMxNjY0OTIyMjI1.z14JrDpFlOuWQzp1F9kIdwIWThbXwkOElUex6kaT8G0g.taAnncfvCtdfizrrvD-f7sOGN5NurNRm817tQQd4kIog.PNG/job_trait_h3_s1_03.png', desc: '나이트메어가 더욱 강력한 공포를 심어준다.', stats: '나이트메어 스킬공격력 14~50% 증폭' }
        ],
        tier6: [
            { name: '포스 인챈트', icon: IMG + 'MjAyNDExMTVfMjgw/MDAxNzMxNjY1MTQ4NDgz.BMPD08EdhNnVp8IOu9hPEzKU6ptwKauaud5rQxZlxvcg.p2YPJ2IZqPyMLhP6299h_1xQRRegMbVEXOt3pyXoz18g.PNG/job_trait_h4_s2_03.png', desc: '엘리멘탈 포스의 지속 시간이 증가한다.', stats: '엘리멘탈 포스 지속 시간 3~10초 증가' },
            { name: '포스 퓨전', icon: IMG + 'MjAyNDExMTVfMTQ2/MDAxNzMxNjY1MTU5NTUz.hlDHzTO-Lswr4UYPAIGQGbeqe-CiFA1mcNxsvIqCMvog.-mcvhz4q4lI4LKvgJanXFvyZSQGznUtANYG5lIa4vUMg.PNG/job_trait_h4_s3_01.png', desc: '엘리멘탈 포스 시전시 원소 융합 효과를 부여한다.', stats: '엘리멘탈 포스 시전시 10초간 모든 속성 저항 30~80% 증가' }
        ]
    }
};