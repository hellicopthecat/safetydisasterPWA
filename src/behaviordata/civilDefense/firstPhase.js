const firstPhase = {
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
              '몸을 숨길 수 있는 가장 가까운 곳으로 대피합니다. - 사전 지정된 대피소가 있는 경우 신속히 그곳으로 이동합니다. - 지정된 대피소가 없다면 아파트나 고층건물의 지하실로 대피합니다.',
            contentsType: 1,
            mainOrd: 10,
            safetyCate1: 4,
            safetyCate2: 4001,
            safetyCate3: 4001001,
            safetyCate4: 4001001001,
            safetyCateNm1: '민방위',
            safetyCateNm2: '비상사태',
            safetyCateNm3: '비상사태가 발생하면',
            subOrd: 1
          },
          {
            actRmks:
              '대피시 머리 부분을 보호하고 고막파열 방지를 위해 엄지 손가락으로 귀를 막고 입을 벌립니다.',
            contentsType: 1,
            mainOrd: 10,
            safetyCate1: 4,
            safetyCate2: 4001,
            safetyCate3: 4001001,
            safetyCate4: 4001001001,
            safetyCateNm1: '민방위',
            safetyCateNm2: '비상사태',
            safetyCateNm3: '비상사태가 발생하면',
            subOrd: 2
          },
          {
            actRmks: '정부 방송을 청취하면서 통제에 적극 협조합니다.',
            contentsType: 1,
            mainOrd: 10,
            safetyCate1: 4,
            safetyCate2: 4001,
            safetyCate3: 4001001,
            safetyCate4: 4001001001,
            safetyCateNm1: '민방위',
            safetyCateNm2: '비상사태',
            safetyCateNm3: '비상사태가 발생하면',
            subOrd: 3
          },
          {
            contentsType: 2,
            contentsUrl:
              'http://mepv2.safekorea.go.kr/mdbs_html/images/mobileWeb/eEmergencySafety/eEmergencySafety_icon_01.png',
            mainOrd: 10,
            safetyCate1: 4,
            safetyCate2: 4001,
            safetyCate3: 4001001,
            safetyCate4: 4001001001,
            safetyCateNm1: '민방위',
            safetyCateNm2: '비상사태',
            safetyCateNm3: '비상사태가 발생하면',
            subOrd: 4
          },
          {
            contentsType: 2,
            contentsUrl:
              'http://mepv2.safekorea.go.kr/mdbs_html/images/mobileWeb/eEmergencySafety/eEmergencySafety_icon_02.png',
            mainOrd: 10,
            safetyCate1: 4,
            safetyCate2: 4001,
            safetyCate3: 4001001,
            safetyCate4: 4001001001,
            safetyCateNm1: '민방위',
            safetyCateNm2: '비상사태',
            safetyCateNm3: '비상사태가 발생하면',
            subOrd: 5
          },
          {
            actRmks: '자동차의 운행이 통제되므로 대중교통 수단을 이용합니다.',
            contentsType: 1,
            mainOrd: 20,
            safetyCate1: 4,
            safetyCate2: 4001,
            safetyCate3: 4001001,
            safetyCate4: 4001001002,
            safetyCateNm1: '민방위',
            safetyCateNm2: '비상사태',
            safetyCateNm3: '비상사태가 발생하면',
            subOrd: 1
          },
          {
            actRmks: '통신망이 마비되지 않도록 불필요한 전화사용은 자제합니다.',
            contentsType: 1,
            mainOrd: 20,
            safetyCate1: 4,
            safetyCate2: 4001,
            safetyCate3: 4001001,
            safetyCate4: 4001001002,
            safetyCateNm1: '민방위',
            safetyCateNm2: '비상사태',
            safetyCateNm3: '비상사태가 발생하면',
            subOrd: 2
          },
          {
            actRmks:
              '단전-단수에 대비하여 양초나 손전등을 준비하고 욕조나 큰 그릇에 물을 받아두고 아껴습니다.',
            contentsType: 1,
            mainOrd: 20,
            safetyCate1: 4,
            safetyCate2: 4001,
            safetyCate3: 4001001,
            safetyCate4: 4001001002,
            safetyCateNm1: '민방위',
            safetyCateNm2: '비상사태',
            safetyCateNm3: '비상사태가 발생하면',
            subOrd: 3
          },
          {
            actRmks:
              '꼭 필요한 물품 이외에 식료품, 유류 등 생활필수품에 대하여 사재기를 하지 말아야 합니다.',
            contentsType: 1,
            mainOrd: 20,
            safetyCate1: 4,
            safetyCate2: 4001,
            safetyCate3: 4001001,
            safetyCate4: 4001001002,
            safetyCateNm1: '민방위',
            safetyCateNm2: '비상사태',
            safetyCateNm3: '비상사태가 발생하면',
            subOrd: 4
          },
          {
            actRmks:
              '정부의 안내를 믿고 따라야 하며 인터넷 등에 거짓된 정보를 게시하거나 유포하지 말아야 합니다.',
            contentsType: 1,
            mainOrd: 20,
            safetyCate1: 4,
            safetyCate2: 4001,
            safetyCate3: 4001001,
            safetyCate4: 4001001002,
            safetyCateNm1: '민방위',
            safetyCateNm2: '비상사태',
            safetyCateNm3: '비상사태가 발생하면',
            subOrd: 5
          },
          {
            actRmks:
              '적군, 행동이 수상한 사람, 불온선전물 등을 발견 즉시 관계기관(111, 112, 113)에 신고해야 합니다.',
            contentsType: 1,
            mainOrd: 20,
            safetyCate1: 4,
            safetyCate2: 4001,
            safetyCate3: 4001001,
            safetyCate4: 4001001002,
            safetyCateNm1: '민방위',
            safetyCateNm2: '비상사태',
            safetyCateNm3: '비상사태가 발생하면',
            subOrd: 6
          },
          {
            contentsType: 2,
            contentsUrl:
              'http://mepv2.safekorea.go.kr/mdbs_html/images/mobileWeb/eEmergencySafety/eEmergencySafety_icon_03.png',
            mainOrd: 20,
            safetyCate1: 4,
            safetyCate2: 4001,
            safetyCate3: 4001001,
            safetyCate4: 4001001002,
            safetyCateNm1: '민방위',
            safetyCateNm2: '비상사태',
            safetyCateNm3: '비상사태가 발생하면',
            subOrd: 7
          },
          {
            actRmks: '동원에 응하기 전 가족들에게 그 사실(일시,장소 등)을 알립니다.',
            contentsType: 1,
            mainOrd: 30,
            safetyCate1: 4,
            safetyCate2: 4001,
            safetyCate3: 4001001,
            safetyCate4: 4001001003,
            safetyCateNm1: '민방위',
            safetyCateNm2: '비상사태',
            safetyCateNm3: '비상사태가 발생하면',
            subOrd: 1
          },
          {
            actRmks: '집결지에 도착하면 관계자의 통제에 따라 행동하고 임의로 이탈해서는 안됩니다.',
            contentsType: 1,
            mainOrd: 30,
            safetyCate1: 4,
            safetyCate2: 4001,
            safetyCate3: 4001001,
            safetyCate4: 4001001003,
            safetyCateNm1: '민방위',
            safetyCateNm2: '비상사태',
            safetyCateNm3: '비상사태가 발생하면',
            subOrd: 2
          },
          {
            actRmks:
              '장비가 동원대상인 경우는 정상적인 가동에 필요한 수리부속품 등을 갖추고 동원에 응해야 합니다.',
            contentsType: 1,
            mainOrd: 30,
            safetyCate1: 4,
            safetyCate2: 4001,
            safetyCate3: 4001001,
            safetyCate4: 4001001003,
            safetyCateNm1: '민방위',
            safetyCateNm2: '비상사태',
            safetyCateNm3: '비상사태가 발생하면',
            subOrd: 3
          },
          {
            contentsType: 2,
            contentsUrl:
              'http://mepv2.safekorea.go.kr/mdbs_html/images/mobileWeb/eEmergencySafety/eEmergencySafety_icon_04.png',
            mainOrd: 30,
            safetyCate1: 4,
            safetyCate2: 4001,
            safetyCate3: 4001001,
            safetyCate4: 4001001003,
            safetyCateNm1: '민방위',
            safetyCateNm2: '비상사태',
            safetyCateNm3: '비상사태가 발생하면',
            subOrd: 4
          },
          {
            actRmks: '가까운 비상구를 찾아 질서있게 이동합니다.',
            contentsType: 1,
            mainOrd: 10,
            safetyCate1: 4,
            safetyCate2: 4001,
            safetyCate3: 4001002,
            safetyCate4: 4001002001,
            safetyCateNm1: '민방위',
            safetyCateNm2: '비상사태',
            safetyCateNm3: '대형건물 파괴시 행동요령',
            subOrd: 1
          },
          {
            actRmks:
              '엘리베이터를 이용하지 말고 비상계단을 이용하여 건물밖으로 대피합니다. - 대피시 벽돌, 유리 등 파편물에 주의합니다.',
            contentsType: 1,
            mainOrd: 10,
            safetyCate1: 4,
            safetyCate2: 4001,
            safetyCate3: 4001002,
            safetyCate4: 4001002001,
            safetyCateNm1: '민방위',
            safetyCateNm2: '비상사태',
            safetyCateNm3: '대형건물 파괴시 행동요령',
            subOrd: 2
          },
          {
            actRmks: '민방위대장, 관계공무원 안내에 따라 치료를 받거나 다른 지역으로 대피합니다.',
            contentsType: 1,
            mainOrd: 10,
            safetyCate1: 4,
            safetyCate2: 4001,
            safetyCate3: 4001002,
            safetyCate4: 4001002001,
            safetyCateNm1: '민방위',
            safetyCateNm2: '비상사태',
            safetyCateNm3: '대형건물 파괴시 행동요령',
            subOrd: 3
          },
          {
            actRmks: '출입문 손잡이가 뜨거우면 문밖에 화재가 진행중이므로 다른 통로로 대피합니다.',
            contentsType: 1,
            mainOrd: 20,
            safetyCate1: 4,
            safetyCate2: 4001,
            safetyCate3: 4001002,
            safetyCate4: 4001002002,
            safetyCateNm1: '민방위',
            safetyCateNm2: '비상사태',
            safetyCateNm3: '대형건물 파괴시 행동요령',
            subOrd: 1
          },
          {
            actRmks: '옷에 불이 붙으면 두손으로 눈과 입을 가리고 바닥에 뒹굴어 불을 꺼야 합니다.',
            contentsType: 1,
            mainOrd: 20,
            safetyCate1: 4,
            safetyCate2: 4001,
            safetyCate3: 4001002,
            safetyCate4: 4001002002,
            safetyCateNm1: '민방위',
            safetyCateNm2: '비상사태',
            safetyCateNm3: '대형건물 파괴시 행동요령',
            subOrd: 2
          },
          {
            actRmks: '무리하게 빠져나오려 하지 말고 가급적 편안한 자세를 유지합니다.',
            contentsType: 1,
            mainOrd: 30,
            safetyCate1: 4,
            safetyCate2: 4001,
            safetyCate3: 4001002,
            safetyCate4: 4001002003,
            safetyCateNm1: '민방위',
            safetyCateNm2: '비상사태',
            safetyCateNm3: '대형건물 파괴시 행동요령',
            subOrd: 1
          },
          {
            actRmks: '손전등, 불빛을 비추거나 파이프 등을 두드려 구조 요청을 합니다.',
            contentsType: 1,
            mainOrd: 30,
            safetyCate1: 4,
            safetyCate2: 4001,
            safetyCate3: 4001002,
            safetyCate4: 4001002003,
            safetyCateNm1: '민방위',
            safetyCateNm2: '비상사태',
            safetyCateNm3: '대형건물 파괴시 행동요령',
            subOrd: 2
          },
          {
            actRmks: '누출 가스로 인한 폭발 위험이 있어 성냥, 라이터 등을 사용해서는 안됩니다.',
            contentsType: 1,
            mainOrd: 30,
            safetyCate1: 4,
            safetyCate2: 4001,
            safetyCate3: 4001002,
            safetyCate4: 4001002003,
            safetyCateNm1: '민방위',
            safetyCateNm2: '비상사태',
            safetyCateNm3: '대형건물 파괴시 행동요령',
            subOrd: 3
          },
          {
            actRmks: '가급적 휴대폰 등의 발신음을 주기적으로 보내야 합니다.',
            contentsType: 1,
            mainOrd: 30,
            safetyCate1: 4,
            safetyCate2: 4001,
            safetyCate3: 4001002,
            safetyCate4: 4001002003,
            safetyCateNm1: '민방위',
            safetyCateNm2: '비상사태',
            safetyCateNm3: '대형건물 파괴시 행동요령',
            subOrd: 4
          },
          {
            actRmks:
              '각 가정과 직장에 있는 구조장비와 구급약을 활용하여 인명구조 활동을 도와야 합니다.',
            contentsType: 1,
            mainOrd: 10,
            safetyCate1: 4,
            safetyCate2: 4001,
            safetyCate3: 4001003,
            safetyCate4: 4001003001,
            safetyCateNm1: '민방위',
            safetyCateNm2: '비상사태',
            safetyCateNm3: '인명 및 시설피해시 행동요령',
            subOrd: 1
          },
          {
            actRmks:
              '부상자, 노약자 등 부상이나 위헙정도에 따라 우선순위를 정하여 침착하게 구조합니다.',
            contentsType: 1,
            mainOrd: 10,
            safetyCate1: 4,
            safetyCate2: 4001,
            safetyCate3: 4001003,
            safetyCate4: 4001003001,
            safetyCateNm1: '민방위',
            safetyCateNm2: '비상사태',
            safetyCateNm3: '인명 및 시설피해시 행동요령',
            subOrd: 2
          },
          {
            actRmks: '대량으로 인명피해가 발생하면 자발적으로 헌혈에 동참합니다.',
            contentsType: 1,
            mainOrd: 10,
            safetyCate1: 4,
            safetyCate2: 4001,
            safetyCate3: 4001003,
            safetyCate4: 4001003001,
            safetyCateNm1: '민방위',
            safetyCateNm2: '비상사태',
            safetyCateNm3: '인명 및 시설피해시 행동요령',
            subOrd: 3
          },
          {
            actRmks: '화생방 공격으로 오염된 환자는 전문가의 지시에 따라 구조해야 합니다.',
            contentsType: 1,
            mainOrd: 10,
            safetyCate1: 4,
            safetyCate2: 4001,
            safetyCate3: 4001003,
            safetyCate4: 4001003001,
            safetyCateNm1: '민방위',
            safetyCateNm2: '비상사태',
            safetyCateNm3: '인명 및 시설피해시 행동요령',
            subOrd: 4
          },
          {
            actRmks: '제출',
            contentsType: 2,
            contentsUrl:
              'http://mepv2.safekorea.go.kr/mdbs_html/images/mobileWeb/eEmergencySafety/eEmergencySafety_icon_05.png',
            mainOrd: 10,
            safetyCate1: 4,
            safetyCate2: 4001,
            safetyCate3: 4001003,
            safetyCate4: 4001003001,
            safetyCateNm1: '민방위',
            safetyCateNm2: '비상사태',
            safetyCateNm3: '인명 및 시설피해시 행동요령',
            subOrd: 5
          },
          {
            actRmks:
              '휴대용 전등 또는 양초, 라이터 또는 성냥, 건전지 등을 미리 준비해 두고 불필요한 전력 소비를 자제합니다.',
            contentsType: 1,
            mainOrd: 20,
            safetyCate1: 4,
            safetyCate2: 4001,
            safetyCate3: 4001003,
            safetyCate4: 4001003002,
            safetyCateNm1: '민방위',
            safetyCateNm2: '비상사태',
            safetyCateNm3: '인명 및 시설피해시 행동요령',
            subOrd: 1
          },
          {
            actRmks:
              '각 가정에서는 물탱크, 욕조, 양동이 등에 물을 충분히 담아 두고 최대한 아껴써야 합니다.',
            contentsType: 1,
            mainOrd: 20,
            safetyCate1: 4,
            safetyCate2: 4001,
            safetyCate3: 4001003,
            safetyCate4: 4001003002,
            safetyCateNm1: '민방위',
            safetyCateNm2: '비상사태',
            safetyCateNm3: '인명 및 시설피해시 행동요령',
            subOrd: 2
          },
          {
            actRmks:
              '평소에 각 가정에서는 휴대용 가스렌지와 부탄캔(15개) 등을 미리 준비해 두고 비상시에는 최대한 아껴써야 합니다.',
            contentsType: 1,
            mainOrd: 20,
            safetyCate1: 4,
            safetyCate2: 4001,
            safetyCate3: 4001003,
            safetyCate4: 4001003002,
            safetyCateNm1: '민방위',
            safetyCateNm2: '비상사태',
            safetyCateNm3: '인명 및 시설피해시 행동요령',
            subOrd: 3
          },
          {
            actRmks:
              '피해 현장에 차량과 주민의 접근을 통제하고 불에 타거나 폭발하기 쉬운 위험물 등을 우선 제거합니다. - 불발탄, 폭발물 제거 등 특수기술이나 장비가 필요한 경우에는 군부대 등 관계기관에 신고하여 조치합니다.',
            contentsType: 1,
            mainOrd: 30,
            safetyCate1: 4,
            safetyCate2: 4001,
            safetyCate3: 4001003,
            safetyCate4: 4001003003,
            safetyCateNm1: '민방위',
            safetyCateNm2: '비상사태',
            safetyCateNm3: '인명 및 시설피해시 행동요령',
            subOrd: 1
          },
          {
            actRmks:
              '각자 가지고 있는 소화기나 물자를 활용하여 응급복구 작업을 서둘러 피해를 최소한으로 줄여야 합니다.',
            contentsType: 1,
            mainOrd: 30,
            safetyCate1: 4,
            safetyCate2: 4001,
            safetyCate3: 4001003,
            safetyCate4: 4001003003,
            safetyCateNm1: '민방위',
            safetyCateNm2: '비상사태',
            safetyCateNm3: '인명 및 시설피해시 행동요령',
            subOrd: 2
          },
          {
            actRmks:
              '화생방 공격으로 오염된 시설과 장비는 비눗물이나 세제를 활용하여 깨끗이 씻어야 합니다.',
            contentsType: 1,
            mainOrd: 30,
            safetyCate1: 4,
            safetyCate2: 4001,
            safetyCate3: 4001003,
            safetyCate4: 4001003003,
            safetyCateNm1: '민방위',
            safetyCateNm2: '비상사태',
            safetyCateNm3: '인명 및 시설피해시 행동요령',
            subOrd: 3
          },
          {
            contentsType: 2,
            contentsUrl:
              'http://mepv2.safekorea.go.kr/mdbs_html/images/mobileWeb/eEmergencySafety/eEmergencySafety_icon_09.png',
            mainOrd: 30,
            safetyCate1: 4,
            safetyCate2: 4001,
            safetyCate3: 4001003,
            safetyCate4: 4001003003,
            safetyCateNm1: '민방위',
            safetyCateNm2: '비상사태',
            safetyCateNm3: '인명 및 시설피해시 행동요령',
            subOrd: 4
          },
          {
            actRmks: '비상사태가 발생하면',
            contentsType: 4,
            contentsUrl: 'rtsp://125.60.33.158/Caption/Caption/state_of_emergency.mp4',
            mainOrd: 510,
            platformId: 1,
            safetyCate1: 4,
            safetyCate2: 4001,
            safetyCateNm1: '민방위',
            safetyCateNm2: '비상사태',
            subOrd: 1
          },
          {
            actRmks: '비상사태가 발생하면',
            contentsType: 4,
            contentsUrl:
              'http://125.60.33.158:1935/Caption/Caption/mp4:state_of_emergency.mp4/playlist.m3u8',
            mainOrd: 510,
            platformId: 2,
            safetyCate1: 4,
            safetyCate2: 4001,
            safetyCateNm1: '민방위',
            safetyCateNm2: '비상사태',
            subOrd: 1
          },
          {
            actRmks: '전시대비 행동요령',
            contentsType: 4,
            contentsUrl:
              'http://125.60.33.158:1935/Caption/Caption/mp4:emergency1.mp4/playlist.m3u8',
            mainOrd: 510,
            platformId: 2,
            safetyCate1: 4,
            safetyCate2: 4001,
            safetyCateNm1: '민방위',
            safetyCateNm2: '비상사태',
            subOrd: 2
          },
          {
            actRmks: '전시대비 행동요령',
            contentsType: 4,
            contentsUrl: 'rtsp://125.60.33.158/Caption/Caption/emergency1.mp4',
            mainOrd: 510,
            platformId: 1,
            safetyCate1: 4,
            safetyCate2: 4001,
            safetyCateNm1: '민방위',
            safetyCateNm2: '비상사태',
            subOrd: 2
          },
          {
            actRmks: '전쟁발발 행동요령',
            contentsType: 4,
            contentsUrl:
              'http://125.60.33.158:1935/Caption/Caption/mp4:emergency2.mp4/playlist.m3u8',
            mainOrd: 510,
            platformId: 2,
            safetyCate1: 4,
            safetyCate2: 4001,
            safetyCateNm1: '민방위',
            safetyCateNm2: '비상사태',
            subOrd: 3
          },
          {
            actRmks: '전쟁발발 행동요령',
            contentsType: 4,
            contentsUrl: 'rtsp://125.60.33.158/Caption/Caption/emergency2.mp4',
            mainOrd: 510,
            platformId: 1,
            safetyCate1: 4,
            safetyCate2: 4001,
            safetyCateNm1: '민방위',
            safetyCateNm2: '비상사태',
            subOrd: 3
          }
        ]
      },
      numOfRows: 10,
      pageNo: 1,
      totalCount: 43
    }
  }
}
export default firstPhase
