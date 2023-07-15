const landSlide = {
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
              '산사태 취약지역 주민은 대피를 준비하고, 행정기관에서 안내한 대피장소를 사전에 숙지하고 간단한 생필품 등 사전준비',
            contentsType: 1,
            mainOrd: 10,
            safetyCate1: 1,
            safetyCate2: 1014,
            safetyCate3: 1014001,
            safetyCateNm1: '자연재난',
            safetyCateNm2: '산사태',
            safetyCateNm3: '산사태취약지역 주민(주의보 단계)',
            subOrd: 1
          },
          {
            actRmks:
              '노약자나 어린이는 집밖으로 나가는 것을 삼가고 유선연락이 가능한 곳에서 상황 예의 주시',
            contentsType: 1,
            mainOrd: 10,
            safetyCate1: 1,
            safetyCate2: 1014,
            safetyCate3: 1014001,
            safetyCateNm1: '자연재난',
            safetyCateNm2: '산사태',
            safetyCateNm3: '산사태취약지역 주민(주의보 단계)',
            subOrd: 2
          },
          {
            actRmks:
              '경사면에서 물이솟는 등 산사태 징후가 있을 경우 즉시 대피하고 가까운 주민센터나 시구 재난안전대책본부에 신고한다.',
            contentsType: 1,
            mainOrd: 10,
            safetyCate1: 1,
            safetyCate2: 1014,
            safetyCate3: 1014001,
            safetyCateNm1: '자연재난',
            safetyCateNm2: '산사태',
            safetyCateNm3: '산사태취약지역 주민(주의보 단계)',
            subOrd: 3
          },
          {
            actRmks:
              '기상상황 및 행정기관 연락상황을 SMS 또는 방송 정보를 통해 지속적으로 확인한다.',
            contentsType: 1,
            mainOrd: 10,
            safetyCate1: 1,
            safetyCate2: 1014,
            safetyCate3: 1014001,
            safetyCateNm1: '자연재난',
            safetyCateNm2: '산사태',
            safetyCateNm3: '산사태취약지역 주민(주의보 단계)',
            subOrd: 4
          },
          {
            actRmks:
              '산사태 취약지역 주민은 안전을 위해 사전에 대피하거나 주민대피명령이 발령될 경우 대피장소 또는 안전지대로 반드시 대피한다.',
            contentsType: 1,
            mainOrd: 20,
            safetyCate1: 1,
            safetyCate2: 1014,
            safetyCate3: 1014002,
            safetyCateNm1: '자연재난',
            safetyCateNm2: '산사태',
            safetyCateNm3: '산사태취약지역 주민(경보 단계)',
            subOrd: 1
          },
          {
            actRmks: '대피시 화재 등 2차 피해 예방을 위해 가스, 전기 차단',
            contentsType: 1,
            mainOrd: 20,
            safetyCate1: 1,
            safetyCate2: 1014,
            safetyCate3: 1014002,
            safetyCateNm1: '자연재난',
            safetyCateNm2: '산사태',
            safetyCateNm3: '산사태취약지역 주민(경보 단계)',
            subOrd: 2
          },
          {
            actRmks:
              '혹시 대피하지 않은 주민이 있을 수 있으므로 옆집을 확인하고 위험 상황을 알려준다.',
            contentsType: 1,
            mainOrd: 20,
            safetyCate1: 1,
            safetyCate2: 1014,
            safetyCate3: 1014002,
            safetyCateNm1: '자연재난',
            safetyCateNm2: '산사태',
            safetyCateNm3: '산사태취약지역 주민(경보 단계)',
            subOrd: 3
          },
          {
            actRmks: '대피 후 기상 등 위험상황의 추이를 확인한다.',
            contentsType: 1,
            mainOrd: 20,
            safetyCate1: 1,
            safetyCate2: 1014,
            safetyCate3: 1014002,
            safetyCateNm1: '자연재난',
            safetyCateNm2: '산사태',
            safetyCateNm3: '산사태취약지역 주민(경보 단계)',
            subOrd: 4
          },
          {
            actRmks:
              '산사태가 일어날 위험이 있는 곳에서 가까이 가지 않는다. 산사태 징후에 대해 사전에 숙지',
            contentsType: 1,
            mainOrd: 30,
            safetyCate1: 1,
            safetyCate2: 1014,
            safetyCate3: 1014003,
            safetyCateNm1: '자연재난',
            safetyCateNm2: '산사태',
            safetyCateNm3: '일반 주민(주의보 단계)',
            subOrd: 1
          },
          {
            actRmks: '등산객 또는 산간계곡의 야영객은 안전한 곳으로 대피한다.',
            contentsType: 1,
            mainOrd: 30,
            safetyCate1: 1,
            safetyCate2: 1014,
            safetyCate3: 1014003,
            safetyCateNm1: '자연재난',
            safetyCateNm2: '산사태',
            safetyCateNm3: '일반 주민(주의보 단계)',
            subOrd: 2
          },
          {
            actRmks:
              '텔레비전, 인터넷, 라디오를 통해 기상정보를 확인하고 관계 행정기관의 안내에 귀 기울인다.',
            contentsType: 1,
            mainOrd: 30,
            safetyCate1: 1,
            safetyCate2: 1014,
            safetyCate3: 1014003,
            safetyCateNm1: '자연재난',
            safetyCateNm2: '산사태',
            safetyCateNm3: '일반 주민(주의보 단계)',
            subOrd: 3
          },
          {
            actRmks:
              'KBS뉴스(자막방송), 산사태정보시스템을 통해 산사태 경보 발령지역을 확인하고 지역내에 위치할 경우 안전에 유의한다.',
            contentsType: 1,
            mainOrd: 40,
            safetyCate1: 1,
            safetyCate2: 1014,
            safetyCate3: 1014004,
            safetyCateNm1: '자연재난',
            safetyCateNm2: '산사태',
            safetyCateNm3: '일반 주민(경보 단계)',
            subOrd: 1
          },
          {
            actRmks: '산림주변의 야외 활동을 하지 않는다.',
            contentsType: 1,
            mainOrd: 40,
            safetyCate1: 1,
            safetyCate2: 1014,
            safetyCate3: 1014004,
            safetyCateNm1: '자연재난',
            safetyCateNm2: '산사태',
            safetyCateNm3: '일반 주민(경보 단계)',
            subOrd: 2
          },
          {
            actRmks: '산림내에 있을 경우 계곡부에서 벗어나 높은 곳으로 피신한다.',
            contentsType: 1,
            mainOrd: 40,
            safetyCate1: 1,
            safetyCate2: 1014,
            safetyCate3: 1014004,
            safetyCateNm1: '자연재난',
            safetyCateNm2: '산사태',
            safetyCateNm3: '일반 주민(경보 단계)',
            subOrd: 3
          },
          {
            actRmks:
              '산사태 발생 상황을 확인한 경우 즉시 신고하고, 인명피해 및 고립이 우려될 경우 119 또는 1688-3119(산림항공구조대)로 구조를 요청한다.',
            contentsType: 1,
            mainOrd: 40,
            safetyCate1: 1,
            safetyCate2: 1014,
            safetyCate3: 1014004,
            safetyCateNm1: '자연재난',
            safetyCateNm2: '산사태',
            safetyCateNm3: '일반 주민(경보 단계)',
            subOrd: 4
          }
        ]
      },
      numOfRows: 10,
      pageNo: 1,
      totalCount: 15
    }
  }
}
export default landSlide
