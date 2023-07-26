const microDust = {
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
              '대기 중 입자가 미세한 크기로 탄소성분(유기탄소, 원소탄소), 이온성분(황산염, 질산염, 암모늄), 광물성분 등 종류의 성분이 다양한 혼합물입니다.',
            contentsType: 1,
            mainOrd: 10,
            safetyCate1: 3,
            safetyCate2: 3015,
            safetyCate3: 3015001,
            safetyCateNm1: '생활안전',
            safetyCateNm2: '미세먼지',
            safetyCateNm3: '미세먼지의 특성',
            subOrd: 1
          },
          {
            actRmks: 'PM10 : 1000분의 10mm보다 작은 먼지',
            contentsType: 1,
            mainOrd: 10,
            safetyCate1: 3,
            safetyCate2: 3015,
            safetyCate3: 3015001,
            safetyCateNm1: '생활안전',
            safetyCateNm2: '미세먼지',
            safetyCateNm3: '미세먼지의 특성',
            subOrd: 2
          },
          {
            actRmks: 'PM2.5 : 1000분의 2.5mm보다 작은 먼지, 머리카락 직경(약 60㎛)의 1/20 ~ 1/30',
            contentsType: 1,
            mainOrd: 10,
            safetyCate1: 3,
            safetyCate2: 3015,
            safetyCate3: 3015001,
            safetyCateNm1: '생활안전',
            safetyCateNm2: '미세먼지',
            safetyCateNm3: '미세먼지의 특성',
            subOrd: 3
          },
          {
            contentsType: 2,
            contentsUrl:
              'http://mepv2.safekorea.go.kr/mdbs_html/images/mobileWeb/nMise/miSe_01.png',
            mainOrd: 10,
            safetyCate1: 3,
            safetyCate2: 3015,
            safetyCate3: 3015001,
            safetyCateNm1: '생활안전',
            safetyCateNm2: '미세먼지',
            safetyCateNm3: '미세먼지의 특성',
            subOrd: 4
          },
          {
            actRmks:
              '예보내용이 “약간 나쁨“ 이상이거나 실시간 농도(민감군영향 등급 이상)가 높은 경우 - 대기오염 취약계층(노약자, 어린이, 호흡기질환자, 심폐질환자 등)의 경우 가급적 외출시간을 줄이고, 외출시는 마스크(황사마스크 인증상품) 착용 - 어린이는 대기오염에 더 취약하기 때문에 학교나 유치원에서는 실외 체육보다는 실내 운동으로 대체하는 것도 권고됨 ※ 미세먼지(PM10) 환경기준 : 24시간 100㎍/㎥, 연간 50㎍/㎥',
            contentsType: 1,
            mainOrd: 120,
            safetyCate1: 3,
            safetyCate2: 3015,
            safetyCate3: 3015002,
            safetyCateNm1: '생활안전',
            safetyCateNm2: '미세먼지',
            safetyCateNm3: '미세먼지(PM10) 예보 등급별 행동요령',
            subOrd: 2
          },
          {
            actRmks:
              '장시간 외출 시 에어코리아(www.airkorea.or.kr)에서 동네별 실시간 오염도 확인 요망',
            contentsType: 1,
            mainOrd: 120,
            safetyCate1: 3,
            safetyCate2: 3015,
            safetyCate3: 3015002,
            safetyCateNm1: '생활안전',
            safetyCateNm2: '미세먼지',
            safetyCateNm3: '미세먼지(PM10) 예보 등급별 행동요령',
            subOrd: 3
          },
          {
            actRmks:
              '미세먼지 농도가 높은 날은 가급적 지하철 등 대중교통을 이용하는 등 오염저감노력에 동참',
            contentsType: 1,
            mainOrd: 120,
            safetyCate1: 3,
            safetyCate2: 3015,
            safetyCate3: 3015002,
            safetyCateNm1: '생활안전',
            safetyCateNm2: '미세먼지',
            safetyCateNm3: '미세먼지(PM10) 예보 등급별 행동요령',
            subOrd: 4
          },
          {
            actRmks:
              '참고 : 미세먼지 높은 날 건강 생활 수칙 - 등산, 축구 등 오랜 실외 활동을 자제하고, 특히 어린이, 노약자, 호흡기 및 심폐질환자는 가급적 실외활동 자제 - 학교나 유치원은 실내 체육수업으로 대체 권고 - 실외 활동시에는 마스크, 보호안경, 모자 등 착용 - 창문을 닫고, 빨래는 실내에서 건조 - 세면을 자주하고, 흐르는 물에 코를 자주 세척 - 가급적 대중교통을 이용하고, 야외 바비큐 등 자제',
            contentsType: 1,
            mainOrd: 120,
            safetyCate1: 3,
            safetyCate2: 3015,
            safetyCate3: 3015002,
            safetyCateNm1: '생활안전',
            safetyCateNm2: '미세먼지',
            safetyCateNm3: '미세먼지(PM10) 예보 등급별 행동요령',
            subOrd: 5
          },
          {
            actRmks:
              '가정 및 식품취급 장소 - 노약자, 호흡기 질환자 등은 실외활동 자제 - 창문을 닫고 가급적 외출 최소화 - 노출된 채소, 과일 등 농수산물은 충분히 세척 후 섭취 - 식품제조, 조리시 철저한 손 씻기 - 기계 및 기구류 세척 등 위생관리로 2차 오염방지',
            contentsType: 1,
            mainOrd: 130,
            safetyCate1: 3,
            safetyCate2: 3015,
            safetyCate3: 3015003,
            safetyCateNm1: '생활안전',
            safetyCateNm2: '미세먼지',
            safetyCateNm3: '부문별 생활 수칙',
            subOrd: 6
          },
          {
            actRmks:
              '학교 등 교육기관 - 유치원과 초등학교의 실외활동 자제 - 대기오염예보를 고려해 실내체육으로 대체 - 천식, 아토피질환 학생 위생 점검 - (필요시) 상비약 비치 - 외출시에는 보호안경, 마스크 착용 - 천식 등 호흡기 및 심폐질환 학생에 특별 고지 - 창문을 닫고 가급적 실외공기 차단 - 쉬는 시간마다 손 씻기',
            contentsType: 1,
            mainOrd: 130,
            safetyCate1: 3,
            safetyCate2: 3015,
            safetyCate3: 3015003,
            safetyCateNm1: '생활안전',
            safetyCateNm2: '미세먼지',
            safetyCateNm3: '부문별 생활 수칙',
            subOrd: 7
          },
          {
            actRmks:
              '축산/농가 등 - 방목장의 가축은 축사 안으로 대피시켜 노출 최소화 - 비닐하우스, 온실 및 축사의 출입문, 창문 등 닫기 - 야적된 사료용 건초, 볏집 등은 비닐, 천막 등으로 덮기',
            contentsType: 1,
            mainOrd: 130,
            safetyCate1: 3,
            safetyCate2: 3015,
            safetyCate3: 3015003,
            safetyCateNm1: '생활안전',
            safetyCateNm2: '미세먼지',
            safetyCateNm3: '부문별 생활 수칙',
            subOrd: 8
          },
          {
            actRmks:
              '미세입자들은 먼지 핵에 여러 종류의 오염물질이 엉겨 붙어 구성된 것으로 호흡기를 통하여 인체내에 유입될수 있다.',
            contentsType: 1,
            mainOrd: 40,
            safetyCate1: 3,
            safetyCate2: 3015,
            safetyCate3: 3015004,
            safetyCateNm1: '생활안전',
            safetyCateNm2: '미세먼지',
            safetyCateNm3: '미세먼지가 인체에 미치는 영향',
            subOrd: 1
          },
          {
            actRmks:
              '장기간 흡입 시, 입자가 미세할수록 코 점막을 통해 걸러지지 않고 흡입 시 폐포까지 직접 침투하기에 천식이나 폐질환의 유병률, 조시사망률 증가에 영향을 줄 수 있다.',
            contentsType: 1,
            mainOrd: 40,
            safetyCate1: 3,
            safetyCate2: 3015,
            safetyCate3: 3015004,
            safetyCateNm1: '생활안전',
            safetyCateNm2: '미세먼지',
            safetyCateNm3: '미세먼지가 인체에 미치는 영향',
            subOrd: 2
          },
          {
            actRmks:
              '대부분의 연구에 따르면 장기적, 지속적 노출 시 건강영향이 나타나며 단시간 흡입으로 갑자기 신체변화가 나타나지는 않는다고 알려져 있다. 그러나 어린이·노인·호흡기 질환자 등 민감군은 일반인보다 건강영향이 클 수 있어 더 각별한 주의가 필요하다.',
            contentsType: 1,
            mainOrd: 40,
            safetyCate1: 3,
            safetyCate2: 3015,
            safetyCate3: 3015004,
            safetyCateNm1: '생활안전',
            safetyCateNm2: '미세먼지',
            safetyCateNm3: '미세먼지가 인체에 미치는 영향',
            subOrd: 3
          },
          {
            contentsType: 2,
            contentsUrl:
              'http://mepv2.safekorea.go.kr/mdbs_html/images/mobileWeb/nMise/miSe_02.png',
            mainOrd: 40,
            safetyCate1: 3,
            safetyCate2: 3015,
            safetyCate3: 3015004,
            safetyCateNm1: '생활안전',
            safetyCateNm2: '미세먼지',
            safetyCateNm3: '미세먼지가 인체에 미치는 영향',
            subOrd: 4
          },
          {
            actRmks: '에어코리아(환경부 전국 실시간대기오염도 사이트, www.airkorea.or.kr)',
            contentsType: 1,
            mainOrd: 50,
            safetyCate1: 3,
            safetyCate2: 3015,
            safetyCate3: 3015005,
            safetyCateNm1: '생활안전',
            safetyCateNm2: '미세먼지',
            safetyCateNm3: '미세먼지 정보 확인',
            subOrd: 1
          },
          {
            actRmks: '일기예보',
            contentsType: 1,
            mainOrd: 50,
            safetyCate1: 3,
            safetyCate2: 3015,
            safetyCate3: 3015005,
            safetyCateNm1: '생활안전',
            safetyCateNm2: '미세먼지',
            safetyCateNm3: '미세먼지 정보 확인',
            subOrd: 2
          },
          {
            actRmks: '대기오염 옥외전광판',
            contentsType: 1,
            mainOrd: 50,
            safetyCate1: 3,
            safetyCate2: 3015,
            safetyCate3: 3015005,
            safetyCateNm1: '생활안전',
            safetyCateNm2: '미세먼지',
            safetyCateNm3: '미세먼지 정보 확인',
            subOrd: 3
          },
          {
            actRmks: '우리동네 대기질 어플리케이션',
            contentsType: 1,
            mainOrd: 50,
            safetyCate1: 3,
            safetyCate2: 3015,
            safetyCate3: 3015005,
            safetyCateNm1: '생활안전',
            safetyCateNm2: '미세먼지',
            safetyCateNm3: '미세먼지 정보 확인',
            subOrd: 4
          },
          {
            actRmks: '에어코리아 모바일 서비스',
            contentsType: 1,
            mainOrd: 50,
            safetyCate1: 3,
            safetyCate2: 3015,
            safetyCate3: 3015005,
            safetyCateNm1: '생활안전',
            safetyCateNm2: '미세먼지',
            safetyCateNm3: '미세먼지 정보 확인',
            subOrd: 5
          },
          {
            actRmks: '기상청, 지자체 홈페이지 등',
            contentsType: 1,
            mainOrd: 50,
            safetyCate1: 3,
            safetyCate2: 3015,
            safetyCate3: 3015005,
            safetyCateNm1: '생활안전',
            safetyCateNm2: '미세먼지',
            safetyCateNm3: '미세먼지 정보 확인',
            subOrd: 6
          },
          {
            actRmks: '민감군(어린이·노인·폐질환 및 심장질환자)은 실외활동 제한 및 실내생활 권고',
            contentsType: 1,
            mainOrd: 10,
            safetyCate1: 3,
            safetyCate2: 3015,
            safetyCate3: 3015006,
            safetyCate4: 3015006001,
            safetyCateNm1: '생활안전',
            safetyCateNm2: '미세먼지',
            safetyCateNm3: '미세먼지 발생 시 국민행동요령',
            subOrd: 1
          },
          {
            actRmks:
              '일반인은 장시간 또는 무리한 실외활동을 줄임(특히, 눈이 아프거나, 기침 또는 목의 통증이 있는 경우 실외활동 자제)',
            contentsType: 1,
            mainOrd: 10,
            safetyCate1: 3,
            safetyCate2: 3015,
            safetyCate3: 3015006,
            safetyCate4: 3015006001,
            safetyCateNm1: '생활안전',
            safetyCateNm2: '미세먼지',
            safetyCateNm3: '미세먼지 발생 시 국민행동요령',
            subOrd: 2
          },
          {
            actRmks:
              '부득이 외출 시 황사(보호)마스크 착용(폐기능 질환자는 의사와 충분한 상의 후 사용권고)',
            contentsType: 1,
            mainOrd: 10,
            safetyCate1: 3,
            safetyCate2: 3015,
            safetyCate3: 3015006,
            safetyCate4: 3015006001,
            safetyCateNm1: '생활안전',
            safetyCateNm2: '미세먼지',
            safetyCateNm3: '미세먼지 발생 시 국민행동요령',
            subOrd: 3
          },
          {
            actRmks: '교통량이 많은 지역 이동 자제',
            contentsType: 1,
            mainOrd: 10,
            safetyCate1: 3,
            safetyCate2: 3015,
            safetyCate3: 3015006,
            safetyCate4: 3015006001,
            safetyCateNm1: '생활안전',
            safetyCateNm2: '미세먼지',
            safetyCateNm3: '미세먼지 발생 시 국민행동요령',
            subOrd: 4
          },
          {
            actRmks: '유치원·초등학교 실외수업 자제',
            contentsType: 1,
            mainOrd: 10,
            safetyCate1: 3,
            safetyCate2: 3015,
            safetyCate3: 3015006,
            safetyCate4: 3015006001,
            safetyCateNm1: '생활안전',
            safetyCateNm2: '미세먼지',
            safetyCateNm3: '미세먼지 발생 시 국민행동요령',
            subOrd: 5
          },
          {
            actRmks: '공공기관 운영 야외 체육시설 운영 제한',
            contentsType: 1,
            mainOrd: 10,
            safetyCate1: 3,
            safetyCate2: 3015,
            safetyCate3: 3015006,
            safetyCate4: 3015006001,
            safetyCateNm1: '생활안전',
            safetyCateNm2: '미세먼지',
            safetyCateNm3: '미세먼지 발생 시 국민행동요령',
            subOrd: 6
          },
          {
            actRmks:
              '공원·체육시설·고궁·터미널·철도 및 지하철 등을 이용하는 시민에게 과격한 실외활동 자제 홍보',
            contentsType: 1,
            mainOrd: 10,
            safetyCate1: 3,
            safetyCate2: 3015,
            safetyCate3: 3015006,
            safetyCate4: 3015006001,
            safetyCateNm1: '생활안전',
            safetyCateNm2: '미세먼지',
            safetyCateNm3: '미세먼지 발생 시 국민행동요령',
            subOrd: 7
          },
          {
            actRmks:
              '민감군(어린이·노인·폐질환 및 심장질환자)은 실외활동 금지(실외활동시 의사와 상의)',
            contentsType: 1,
            mainOrd: 20,
            safetyCate1: 3,
            safetyCate2: 3015,
            safetyCate3: 3015006,
            safetyCate4: 3015006002,
            safetyCateNm1: '생활안전',
            safetyCateNm2: '미세먼지',
            safetyCateNm3: '미세먼지 발생 시 국민행동요령',
            subOrd: 1
          },
          {
            actRmks:
              '일반인은 장시간 또는 무리한 실외활동 자제(기침 또는 목의 통증이 있는 경우 실내생활 유지)',
            contentsType: 1,
            mainOrd: 20,
            safetyCate1: 3,
            safetyCate2: 3015,
            safetyCate3: 3015006,
            safetyCate4: 3015006002,
            safetyCateNm1: '생활안전',
            safetyCateNm2: '미세먼지',
            safetyCateNm3: '미세먼지 발생 시 국민행동요령',
            subOrd: 2
          },
          {
            actRmks: '부득이 외출시 황사(보호) 마스크 착용',
            contentsType: 1,
            mainOrd: 20,
            safetyCate1: 3,
            safetyCate2: 3015,
            safetyCate3: 3015006,
            safetyCate4: 3015006002,
            safetyCateNm1: '생활안전',
            safetyCateNm2: '미세먼지',
            safetyCateNm3: '미세먼지 발생 시 국민행동요령',
            subOrd: 3
          },
          {
            actRmks: '교통량이 많은 지역 가급적 이동 금지',
            contentsType: 1,
            mainOrd: 20,
            safetyCate1: 3,
            safetyCate2: 3015,
            safetyCate3: 3015006,
            safetyCate4: 3015006002,
            safetyCateNm1: '생활안전',
            safetyCateNm2: '미세먼지',
            safetyCateNm3: '미세먼지 발생 시 국민행동요령',
            subOrd: 4
          },
          {
            actRmks: '유치원·초등학교 실외수업 금지, 수업단축 또는 휴교',
            contentsType: 1,
            mainOrd: 20,
            safetyCate1: 3,
            safetyCate2: 3015,
            safetyCate3: 3015006,
            safetyCate4: 3015006002,
            safetyCateNm1: '생활안전',
            safetyCateNm2: '미세먼지',
            safetyCateNm3: '미세먼지 발생 시 국민행동요령',
            subOrd: 5
          },
          {
            actRmks: '중·고등학교 실외수업 자제',
            contentsType: 1,
            mainOrd: 20,
            safetyCate1: 3,
            safetyCate2: 3015,
            safetyCate3: 3015006,
            safetyCate4: 3015006002,
            safetyCateNm1: '생활안전',
            safetyCateNm2: '미세먼지',
            safetyCateNm3: '미세먼지 발생 시 국민행동요령',
            subOrd: 6
          },
          {
            actRmks: '공공기관 운영 야회 체육시설 운영 중단',
            contentsType: 1,
            mainOrd: 20,
            safetyCate1: 3,
            safetyCate2: 3015,
            safetyCate3: 3015006,
            safetyCate4: 3015006002,
            safetyCateNm1: '생활안전',
            safetyCateNm2: '미세먼지',
            safetyCateNm3: '미세먼지 발생 시 국민행동요령',
            subOrd: 7
          },
          {
            actRmks:
              '공원·체육시설·고궁·터미널·철도 및 지하철 등을 이용하는 시민에게 과격한 실외활동 자제 홍보',
            contentsType: 1,
            mainOrd: 20,
            safetyCate1: 3,
            safetyCate2: 3015,
            safetyCate3: 3015006,
            safetyCate4: 3015006002,
            safetyCateNm1: '생활안전',
            safetyCateNm2: '미세먼지',
            safetyCateNm3: '미세먼지 발생 시 국민행동요령',
            subOrd: 8
          },
          {
            contentsType: 2,
            contentsUrl:
              'http://mepv2.safekorea.go.kr/mdbs_html/images/mobileWeb/nMise/miSe_04.png',
            mainOrd: 30,
            safetyCate1: 3,
            safetyCate2: 3015,
            safetyCate3: 3015006,
            safetyCate4: 3015006003,
            safetyCateNm1: '생활안전',
            safetyCateNm2: '미세먼지',
            safetyCateNm3: '미세먼지 발생 시 국민행동요령',
            subOrd: 1
          },
          {
            actRmks:
              '※관련근거 : 대기환경 보전법 시행규칙 [별표7]대기오염경보단계별 대기오염물질의 농도기준(제14조 관련',
            contentsType: 1,
            mainOrd: 30,
            safetyCate1: 3,
            safetyCate2: 3015,
            safetyCate3: 3015006,
            safetyCate4: 3015006003,
            safetyCateNm1: '생활안전',
            safetyCateNm2: '미세먼지',
            safetyCateNm3: '미세먼지 발생 시 국민행동요령',
            subOrd: 2
          },
          {
            actRmks:
              '민감군 - 보통: 실외활동시 특별히 행동에 제약을 받을 필요는 없지만 몸상태에 따라 유의하여 활동 - 나쁨: 장시간 또는 무리한 실외활동 제한, 특히 천식을 앓고 있는 사람이 실외에 있는 경우 흡입기를 더 자주 사용할 필요가 있음 - 매우나쁨: 가급적 실내활동, 실외 활동 시 의사와 상의',
            contentsType: 1,
            mainOrd: 10,
            safetyCate1: 3,
            safetyCate2: 3015,
            safetyCate3: 3015007,
            safetyCate4: 3015007001,
            safetyCateNm1: '생활안전',
            safetyCateNm2: '미세먼지',
            safetyCateNm3: '미세먼지 많은 날 생활 수칙',
            subOrd: 1
          },
          {
            actRmks:
              '일반인 - 나쁨: 장시간 또는 무리한 실외활동 제한, 특히 눈이 아픈 증상이 있거나, 기침이나 목의 통증으로 불편한 사람은 실외활동을 피해야 함 - 매우나쁨: 장시간 또는 무리한 실외 활동제한, 목의 통증과 기침등의 증상이 있는 사람은 실외활동을 피해야 함',
            contentsType: 1,
            mainOrd: 10,
            safetyCate1: 3,
            safetyCate2: 3015,
            safetyCate3: 3015007,
            safetyCate4: 3015007001,
            safetyCateNm1: '생활안전',
            safetyCateNm2: '미세먼지',
            safetyCateNm3: '미세먼지 많은 날 생활 수칙',
            subOrd: 2
          },
          {
            actRmks:
              '민감군 - 보통: 실외활동시 특별히 행동에 제약을 받을 필요는 없지만 몸상태에 따라 유의하여 활동 - 나쁨: 장시간 또는 무리한 실외활동 제한 - 매우나쁨: 가급적 실내활동',
            contentsType: 1,
            mainOrd: 20,
            safetyCate1: 3,
            safetyCate2: 3015,
            safetyCate3: 3015007,
            safetyCate4: 3015007002,
            safetyCateNm1: '생활안전',
            safetyCateNm2: '미세먼지',
            safetyCateNm3: '미세먼지 많은 날 생활 수칙',
            subOrd: 3
          },
          {
            actRmks:
              '일반인 - 나쁨: 장시간 또는 무리한 실외활동 제한 특히 눈이 아픈증상이 있는 사람은 실외활동을 피해야 함 - 매우나쁨: 실외에서의 활동을 제한하고 실내생활 권고',
            contentsType: 1,
            mainOrd: 20,
            safetyCate1: 3,
            safetyCate2: 3015,
            safetyCate3: 3015007,
            safetyCate4: 3015007002,
            safetyCateNm1: '생활안전',
            safetyCateNm2: '미세먼지',
            safetyCateNm3: '미세먼지 많은 날 생활 수칙',
            subOrd: 4
          },
          {
            contentsType: 2,
            contentsUrl:
              'http://mepv2.safekorea.go.kr/mdbs_html/images/mobileWeb/nMise/miSe_03.png',
            mainOrd: 30,
            safetyCate1: 3,
            safetyCate2: 3015,
            safetyCate3: 3015007,
            safetyCate4: 3015007003,
            safetyCateNm1: '생활안전',
            safetyCateNm2: '미세먼지',
            safetyCateNm3: '미세먼지 많은 날 생활 수칙',
            subOrd: 1
          },
          {
            actRmks: '민감군 : 어린이, 노인, 천식 같은 폐질환 및 심장질환을 앓고 있는 어른',
            contentsType: 1,
            mainOrd: 30,
            safetyCate1: 3,
            safetyCate2: 3015,
            safetyCate3: 3015007,
            safetyCate4: 3015007003,
            safetyCateNm1: '생활안전',
            safetyCateNm2: '미세먼지',
            safetyCateNm3: '미세먼지 많은 날 생활 수칙',
            subOrd: 2
          }
        ]
      },
      numOfRows: 10,
      pageNo: 1,
      totalCount: 44
    }
  }
}
export default microDust
