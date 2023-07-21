const commonDuct = {
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
              '거주지역 인근에 공동구가 있을 경우, 공동구관리자(지자체, 공단 등) 및 유관기관 비상연락망 등을 사전에 파악합니다. ※ 공동구 설치지역 : 서울(목동,여의도,개포,가락,상계,상암), 대전(둔산), 부산(해운대), 인천(연수,송도), 광주, 경기(부천,분당,평촌,일산,산본,수원,안산), 충북(오창), 전남(여수), 경북(구미), 경남(창원)',
            contentsType: 1,
            mainOrd: 10,
            safetyCate1: 2,
            safetyCate2: 2004,
            safetyCate3: 2004001,
            safetyCateNm1: '사회재난',
            safetyCateNm2: '공동구 재난',
            safetyCateNm3: '공동구재난 발생 우려시',
            subOrd: 1
          },
          {
            actRmks:
              '지역재난안전대책본부 및 경찰서, 소방서 등 주요기관들의 비상연락망을 확인-유지하고 공동구 재난 시 비상대피장소를 미리 확인합니다.',
            contentsType: 1,
            mainOrd: 10,
            safetyCate1: 2,
            safetyCate2: 2004,
            safetyCate3: 2004001,
            safetyCateNm1: '사회재난',
            safetyCateNm2: '공동구 재난',
            safetyCateNm3: '공동구재난 발생 우려시',
            subOrd: 2
          },
          {
            actRmks:
              '공동구 재난으로 인한 라이프라인(전력, 통신, 상수 등) 단절 등에 대비하여 간단한 식료품, 생필품 및 의약품, 라디오 등의 비상물자를 사전에 준비합니다.',
            contentsType: 1,
            mainOrd: 10,
            safetyCate1: 2,
            safetyCate2: 2004,
            safetyCate3: 2004001,
            safetyCateNm1: '사회재난',
            safetyCateNm2: '공동구 재난',
            safetyCateNm3: '공동구재난 발생 우려시',
            subOrd: 3
          },
          {
            actRmks:
              '컴퓨터 등 정밀기기를 사용하는 곳에서는 무정전전원공급장치(UPS)를 설치하면 피해를 예방할 수 있습니다.',
            contentsType: 1,
            mainOrd: 10,
            safetyCate1: 2,
            safetyCate2: 2004,
            safetyCate3: 2004001,
            safetyCateNm1: '사회재난',
            safetyCateNm2: '공동구 재난',
            safetyCateNm3: '공동구재난 발생 우려시',
            subOrd: 4
          },
          {
            contentsType: 2,
            contentsUrl:
              'http://mepv2.safekorea.go.kr/mdbs_html/images/mobileWeb/hDisaster/hDisaster_icon_01.png',
            mainOrd: 10,
            safetyCate1: 2,
            safetyCate2: 2004,
            safetyCate3: 2004001,
            safetyCateNm1: '사회재난',
            safetyCateNm2: '공동구 재난',
            safetyCateNm3: '공동구재난 발생 우려시',
            subOrd: 5
          },
          {
            actRmks:
              '재난(화재 등) 발견 시 다른 사람에게 알리고, 폭발 및 붕괴 등의 위험이 없는 안전한 지역으로 이동하고, 소방서(119) 및 관할 지자체(지역재난안전대책본부)에 신고합니다.',
            contentsType: 1,
            mainOrd: 20,
            safetyCate1: 2,
            safetyCate2: 2004,
            safetyCate3: 2004002,
            safetyCateNm1: '사회재난',
            safetyCateNm2: '공동구 재난',
            safetyCateNm3: '공동구재난 발생 시',
            subOrd: 1
          },
          {
            actRmks:
              '공동구 인근에 있는 주민들은 화재 및 파괴 등에 따른 폭발, 도로붕괴 등의 위험이 있으니 지역재난안전대책본부의 통제에 따라 지정된 대피장소로 이동합니다. - 전력공급이 중단 될 수 있으니, 엘리베이터는 절대 이용하지 않도록 하며 계단을 이용 - 대피 시에는 연기·가스에 의한 질식이나 호흡기관의 장애를 초래할 위험이 있으므로 풍향에 따라 적절히 행동하고 물수건으로 입과 코를 막고 이동 - 대피장소 등 안전한 곳에 도달한 이후에는 지역재난안전대책본부의 별도 안내가 있을 때까지 무단 이동하지 않고 대기',
            contentsType: 1,
            mainOrd: 20,
            safetyCate1: 2,
            safetyCate2: 2004,
            safetyCate3: 2004002,
            safetyCateNm1: '사회재난',
            safetyCateNm2: '공동구 재난',
            safetyCateNm3: '공동구재난 발생 시',
            subOrd: 2
          },
          {
            actRmks:
              '재난방송 청취 등 상황전개현황을 지속적으로 파악합니다. - 스마트폰이나 휴대용 라디오 등을 소지하여 재난온라인방송 청취 - 국민안전처에서 발송하는 재난문자전송서비스(CBS) 지속 확인',
            contentsType: 1,
            mainOrd: 20,
            safetyCate1: 2,
            safetyCate2: 2004,
            safetyCate3: 2004002,
            safetyCateNm1: '사회재난',
            safetyCateNm2: '공동구 재난',
            safetyCateNm3: '공동구재난 발생 시',
            subOrd: 3
          },
          {
            actRmks:
              '안전이 확인된 이후 이동 및 귀가합니다. - 지역재난안전대책본부의 별도 안내가 있기 전까지 무분별한 이동 자제 - 추가적인 공동구 재난이 발생 할 수 있으므로 공동구 인근에는 접근하지 않도록 유의',
            contentsType: 1,
            mainOrd: 20,
            safetyCate1: 2,
            safetyCate2: 2004,
            safetyCate3: 2004002,
            safetyCateNm1: '사회재난',
            safetyCateNm2: '공동구 재난',
            safetyCateNm3: '공동구재난 발생 시',
            subOrd: 4
          },
          {
            actRmks:
              '집에 도착한 후에 전력, 통신, 상수 등의 이상 유무를 점검하고, 이상이 의심될 경우에는 지자체 및 한전, KT, 상수도사업소 등에 점검 및 복구 요청',
            contentsType: 1,
            mainOrd: 20,
            safetyCate1: 2,
            safetyCate2: 2004,
            safetyCate3: 2004002,
            safetyCateNm1: '사회재난',
            safetyCateNm2: '공동구 재난',
            safetyCateNm3: '공동구재난 발생 시',
            subOrd: 5
          },
          {
            actRmks:
              'Q : 공동구란 무엇입니까? A : 공동구란 지하매설물(전선로, 통신선로, 상-하수도관, 열수송관 등)을 공동 수용함으로써 도로중복굴착방지, 도시미관 개선, 도로구조 보전 및 교통의 원활한 소통을 위해 지중(地中)에 설치하는 시설물입니다. 공동구는 지자체가 관리하며, 일반인의 출입이 통제되고 있어 재난(화재, 파손 등) 발생 시 직접적인 인명 피해의 우려는 적으나, 재난 발생 시 전력, 통신, 상수 등 단절에 대비한 국민들의 주의가 필요하며, 화재 시 환기구를 통해 유독가스가 배출 될 수 있어 안전한 곳으로 대피하는 것이 필요합니다.',
            contentsType: 1,
            mainOrd: 20,
            safetyCate1: 2,
            safetyCate2: 2004,
            safetyCate3: 2004002,
            safetyCateNm1: '사회재난',
            safetyCateNm2: '공동구 재난',
            safetyCateNm3: '공동구재난 발생 시',
            subOrd: 6
          }
        ]
      },
      numOfRows: 10,
      pageNo: 1,
      totalCount: 11
    }
  }
}
export default commonDuct
