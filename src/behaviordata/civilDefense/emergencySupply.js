const emergencySupply = {
  response: {
    header: {
      resultCode: 0,
      resultMsg: 'NORMAL SERVICE.'
    },
    body: {
      items: {
        item: [
          {
            actRmks:
              '비상용 생활 필수품 ○ 식량 : 가급적 조리와 보관이 간편한 쌀, 라면, 밀가루, 통조림 등 (30일분) ○ 취사도구 : 식기(코펠), 버너 및 부탄가스(15개 이상) ○ 침구 및 의류 : 담요, 내의 등 ○ 라디오(배터리 포함), 배낭, 휴대용 전등, 양초, 성냥 등',
            contentsType: 1,
            mainOrd: 10,
            safetyCate1: 4,
            safetyCate2: 4004,
            safetyCate3: 4004001,
            safetyCate4: 4004001001,
            safetyCateNm1: '민방위',
            safetyCateNm2: '비상대비물자',
            safetyCateNm3: '가정내 비상대비 물자 준비요령',
            subOrd: 1
          },
          {
            actRmks:
              '가정용 비상약품 ○ 의약품 : 소독제, 해열진통제, 소화제, 지사제, 화상연고, 지혈제, 소염제 등 ○ 의약외품 : 핀셋, 가위, 붕대, 탈지면, 반창고, 삼각건 등',
            contentsType: 1,
            mainOrd: 10,
            safetyCate1: 4,
            safetyCate2: 4004,
            safetyCate3: 4004001,
            safetyCate4: 4004001001,
            safetyCateNm1: '민방위',
            safetyCateNm2: '비상대비물자',
            safetyCateNm3: '가정내 비상대비 물자 준비요령',
            subOrd: 2
          },
          {
            actRmks:
              '화생방전 대비용품 ○ 방독면 또는 수건, 마스크 ○ 보호옷 또는 비닐옷, 우의 ○ 방독장화와 장갑 또는 고무장화와 장갑 ○ 비누, 합성세제(제독시 필요) ○ 충분한 접착테이프 (창틀, 문틀 밀폐용)',
            contentsType: 1,
            mainOrd: 10,
            safetyCate1: 4,
            safetyCate2: 4004,
            safetyCate3: 4004001,
            safetyCate4: 4004001001,
            safetyCateNm1: '민방위',
            safetyCateNm2: '비상대비물자',
            safetyCateNm3: '가정내 비상대비 물자 준비요령',
            subOrd: 3
          },
          {
            actRmks:
              '음식물은 가급적 조리가 필요없고 통조림으로 되어 있는 식품을 선택하고, 정기적으로 유통기간을 확인하여 교체합니다.',
            contentsType: 1,
            mainOrd: 20,
            safetyCate1: 4,
            safetyCate2: 4004,
            safetyCate3: 4004001,
            safetyCate4: 4004001002,
            safetyCateNm1: '민방위',
            safetyCateNm2: '비상대비물자',
            safetyCateNm3: '가정내 비상대비 물자 준비요령',
            subOrd: 1
          },
          {
            actRmks: '라디오의 배터리는 충분히 준비해 두어야 합니다.',
            contentsType: 1,
            mainOrd: 20,
            safetyCate1: 4,
            safetyCate2: 4004,
            safetyCate3: 4004001,
            safetyCate4: 4004001002,
            safetyCateNm1: '민방위',
            safetyCateNm2: '비상대비물자',
            safetyCateNm3: '가정내 비상대비 물자 준비요령',
            subOrd: 2
          },
          {
            actRmks: '한 사람당 최소한 한 벌씩 두툼한 옷과 튼튼한 신발을 준비해 둡니다.',
            contentsType: 1,
            mainOrd: 20,
            safetyCate1: 4,
            safetyCate2: 4004,
            safetyCate3: 4004001,
            safetyCate4: 4004001002,
            safetyCateNm1: '민방위',
            safetyCateNm2: '비상대비물자',
            safetyCateNm3: '가정내 비상대비 물자 준비요령',
            subOrd: 3
          },
          {
            actRmks:
              '의약품은 가족 구성원의 특성을 고려하여, 어린이나 노약자에 맞는 약품을 추가적으로 준비하고, 환자가 있다면 최신 처방전 및 의약품을 준비합니다.',
            contentsType: 1,
            mainOrd: 20,
            safetyCate1: 4,
            safetyCate2: 4004,
            safetyCate3: 4004001,
            safetyCate4: 4004001002,
            safetyCateNm1: '민방위',
            safetyCateNm2: '비상대비물자',
            safetyCateNm3: '가정내 비상대비 물자 준비요령',
            subOrd: 4
          },
          {
            actRmks: '만약 대피시에는 보험증서, 계약서, 여권 등 중요서류도 함께 챙겨가야 합니다.',
            contentsType: 1,
            mainOrd: 20,
            safetyCate1: 4,
            safetyCate2: 4004,
            safetyCate3: 4004001,
            safetyCate4: 4004001002,
            safetyCateNm1: '민방위',
            safetyCateNm2: '비상대비물자',
            safetyCateNm3: '가정내 비상대비 물자 준비요령',
            subOrd: 5
          },
          {
            actRmks: '제출',
            contentsType: 2,
            contentsUrl:
              'http://mepv2.safekorea.go.kr/UPLOAD/201404/a740677a-06ed-4a6e-8196-ae0b75326475.png',
            mainOrd: 20,
            safetyCate1: 4,
            safetyCate2: 4004,
            safetyCate3: 4004002,
            safetyCateNm1: '민방위',
            safetyCateNm2: '비상대비물자',
            safetyCateNm3: '일반방독면 사용요령',
            subOrd: 1
          },
          {
            actRmks: '손수건 : 손수건을 물에 적셔 코와 입을 막아 호흡기 보호',
            contentsType: 1,
            mainOrd: 10,
            safetyCate1: 4,
            safetyCate2: 4004,
            safetyCate3: 4004003,
            safetyCate4: 4004003001,
            safetyCateNm1: '민방위',
            safetyCateNm2: '비상대비물자',
            safetyCateNm3: '화생방공격 대비 물자 사용요령',
            subOrd: 1
          },
          {
            actRmks:
              '비닐봉투 : 비닐봉투를 쓰고 허리를 묶어 외부 공기유입차단(비닐봉투속의 남은 산소를 감안 이동)',
            contentsType: 1,
            mainOrd: 10,
            safetyCate1: 4,
            safetyCate2: 4004,
            safetyCate3: 4004003,
            safetyCate4: 4004003001,
            safetyCateNm1: '민방위',
            safetyCateNm2: '비상대비물자',
            safetyCateNm3: '화생방공격 대비 물자 사용요령',
            subOrd: 2
          },
          {
            actRmks:
              '마스크, 휴지 : 마스크를 착용하거나 휴지 등을 몇겹 접고 물에 적셔서 코, 입을 막고 응급조치',
            contentsType: 1,
            mainOrd: 10,
            safetyCate1: 4,
            safetyCate2: 4004,
            safetyCate3: 4004003,
            safetyCate4: 4004003001,
            safetyCateNm1: '민방위',
            safetyCateNm2: '비상대비물자',
            safetyCateNm3: '화생방공격 대비 물자 사용요령',
            subOrd: 3
          },
          {
            actRmks:
              '비닐우의, 방수의류 등 : 우의를 머리까지 덮어 쓰고 허리띠로 허리를 꼭 묶어 외부 오염공기의 유입차단',
            contentsType: 1,
            mainOrd: 20,
            safetyCate1: 4,
            safetyCate2: 4004,
            safetyCate3: 4004003,
            safetyCate4: 4004003002,
            safetyCateNm1: '민방위',
            safetyCateNm2: '비상대비물자',
            safetyCateNm3: '화생방공격 대비 물자 사용요령',
            subOrd: 1
          },
          {
            actRmks: '고무용품 : 고무장갑 및 장화를 착용하여 피부노출 방지',
            contentsType: 1,
            mainOrd: 30,
            safetyCate1: 4,
            safetyCate2: 4004,
            safetyCate3: 4004003,
            safetyCate4: 4004003003,
            safetyCateNm1: '민방위',
            safetyCateNm2: '비상대비물자',
            safetyCateNm3: '화생방공격 대비 물자 사용요령',
            subOrd: 1
          },
          {
            actRmks: '비상대비물자',
            contentsType: 4,
            contentsUrl:
              'http://125.60.33.158:1935/Caption/Caption/mp4:emergency_preparation.mp4/playlist.m3u8',
            mainOrd: 540,
            platformId: 2,
            safetyCate1: 4,
            safetyCate2: 4004,
            safetyCateNm1: '민방위',
            safetyCateNm2: '비상대비물자',
            subOrd: 1
          },
          {
            actRmks: '비상대비물자',
            contentsType: 4,
            contentsUrl: 'rtsp://125.60.33.158/Caption/Caption/emergency_preparation.mp4',
            mainOrd: 540,
            platformId: 1,
            safetyCate1: 4,
            safetyCate2: 4004,
            safetyCateNm1: '민방위',
            safetyCateNm2: '비상대비물자',
            subOrd: 1
          },
          {
            actRmks: '방독면 착용요령(남)',
            contentsType: 4,
            contentsUrl: 'rtsp://125.60.33.158/Caption/Caption/gas_mask.mp4',
            mainOrd: 540,
            platformId: 1,
            safetyCate1: 4,
            safetyCate2: 4004,
            safetyCateNm1: '민방위',
            safetyCateNm2: '비상대비물자',
            subOrd: 2
          },
          {
            actRmks: '방독면 착용요령(남)',
            contentsType: 4,
            contentsUrl: 'http://125.60.33.158:1935/Caption/Caption/mp4:gas_mask.mp4/playlist.m3u8',
            mainOrd: 540,
            platformId: 2,
            safetyCate1: 4,
            safetyCate2: 4004,
            safetyCateNm1: '민방위',
            safetyCateNm2: '비상대비물자',
            subOrd: 2
          }
        ]
      },
      numOfRows: 10,
      pageNo: 1,
      totalCount: 18
    }
  }
}
export default emergencySupply
