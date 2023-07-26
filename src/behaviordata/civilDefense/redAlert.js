const redAlert = {
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
              '민방공 경보는 적의 항공기나 미사일 등에 의한 공격이 예상되거나 공격중일 때 그 사실을 국민들에게 신속히 전파하기 위한 것으로 정부에서는 전국적인 민방공 경보체제를 만들어 준비하고 있습니다.',
            contentsType: 1,
            mainOrd: 10,
            safetyCate1: 4,
            safetyCate2: 4002,
            safetyCate3: 4002001,
            safetyCateNm1: '민방위',
            safetyCateNm2: '민방공',
            safetyCateNm3: '민방공 경보 구분',
            subOrd: 1
          },
          {
            actRmks:
              '경계경보 : 적의 공격이 예상될 때 사이렌으로 1분동안 평탄음(-------)을 울리고, 라디오 · TV · 확성기 등으로 경보방송을 합니다.',
            contentsType: 1,
            mainOrd: 10,
            safetyCate1: 4,
            safetyCate2: 4002,
            safetyCate3: 4002001,
            safetyCateNm1: '민방위',
            safetyCateNm2: '민방공',
            safetyCateNm3: '민방공 경보 구분',
            subOrd: 2
          },
          {
            actRmks:
              '공습경보 : 적의 공격이 긴박하거나 진행 중일 때 사이렌으로 3분동안 파상음(~~~~~)을 울리고, 라디오 · TV · 확성기 등으로 경보방송을 합니다.',
            contentsType: 1,
            mainOrd: 10,
            safetyCate1: 4,
            safetyCate2: 4002,
            safetyCate3: 4002001,
            safetyCateNm1: '민방위',
            safetyCateNm2: '민방공',
            safetyCateNm3: '민방공 경보 구분',
            subOrd: 3
          },
          {
            actRmks:
              '화생방경보 : 적의 화생방 공격이 있거나 예상될 때 라디오 · TV · 확성기 등으로 경보방송을 합니다.',
            contentsType: 1,
            mainOrd: 10,
            safetyCate1: 4,
            safetyCate2: 4002,
            safetyCate3: 4002001,
            safetyCateNm1: '민방위',
            safetyCateNm2: '민방공',
            safetyCateNm3: '민방공 경보 구분',
            subOrd: 4
          },
          {
            actRmks:
              '경보해제 : 공격 징후 및 추가공격이 예상되지 않을 때 라디오 · TV · 확성기 등으로 경보방송을 합니다.',
            contentsType: 1,
            mainOrd: 10,
            safetyCate1: 4,
            safetyCate2: 4002,
            safetyCate3: 4002001,
            safetyCateNm1: '민방위',
            safetyCateNm2: '민방공',
            safetyCateNm3: '민방공 경보 구분',
            subOrd: 5
          },
          {
            actRmks: '즉시 TV, 라디오 방송을 청취하며 정부의 안내에 따라야 합니다.',
            contentsType: 1,
            mainOrd: 20,
            safetyCate1: 4,
            safetyCate2: 4002,
            safetyCate3: 4002002,
            safetyCateNm1: '민방위',
            safetyCateNm2: '민방공',
            safetyCateNm3: '경계경보 발령시 행동요령',
            subOrd: 1
          },
          {
            actRmks: '밤에는 불을 꺼야 하며 불빛이 밖으로 새어 나가지 않도록 차단해야 합니다.',
            contentsType: 1,
            mainOrd: 20,
            safetyCate1: 4,
            safetyCate2: 4002,
            safetyCate3: 4002002,
            safetyCateNm1: '민방위',
            safetyCateNm2: '민방공',
            safetyCateNm3: '경계경보 발령시 행동요령',
            subOrd: 2
          },
          {
            actRmks:
              '어린이와 노약자를 미리 대피시키고 평소 준비해 둔 비상용품은 대피소로 옮겨야 합니다.',
            contentsType: 1,
            mainOrd: 20,
            safetyCate1: 4,
            safetyCate2: 4002,
            safetyCate3: 4002002,
            safetyCateNm1: '민방위',
            safetyCateNm2: '민방공',
            safetyCateNm3: '경계경보 발령시 행동요령',
            subOrd: 3
          },
          {
            actRmks:
              '화재위험이 있는 석유와 가스통은 안전한 곳으로 옮기고, 외부 가스밸브를 차단하며, 전열기의 코드를 뽑아야 합니다.',
            contentsType: 1,
            mainOrd: 20,
            safetyCate1: 4,
            safetyCate2: 4002,
            safetyCate3: 4002002,
            safetyCateNm1: '민방위',
            safetyCateNm2: '민방공',
            safetyCateNm3: '경계경보 발령시 행동요령',
            subOrd: 4
          },
          {
            contentsType: 2,
            contentsUrl:
              'http://mepv2.safekorea.go.kr/mdbs_html/images/mobileWeb/eEmergencySafety/eEmergencySafety_icon_11.png',
            mainOrd: 20,
            safetyCate1: 4,
            safetyCate2: 4002,
            safetyCate3: 4002002,
            safetyCateNm1: '민방위',
            safetyCateNm2: '민방공',
            safetyCateNm3: '경계경보 발령시 행동요령',
            subOrd: 5
          },
          {
            actRmks:
              '화생방 공격에 대비하여 방독면 등 개인 보호장비를 점검하고, 음식물과 우물 등은 뚜껑이나 비닐로 덮어야 합니다.',
            contentsType: 1,
            mainOrd: 20,
            safetyCate1: 4,
            safetyCate2: 4002,
            safetyCate3: 4002002,
            safetyCateNm1: '민방위',
            safetyCateNm2: '민방공',
            safetyCateNm3: '경계경보 발령시 행동요령',
            subOrd: 6
          },
          {
            actRmks:
              '극장, 운동장, 음식점 등 사람이 많이 모이는 곳에서는 영업을 중단하고 손님들에게 대피준비를 하도록 해야 합니다.',
            contentsType: 1,
            mainOrd: 20,
            safetyCate1: 4,
            safetyCate2: 4002,
            safetyCate3: 4002002,
            safetyCateNm1: '민방위',
            safetyCateNm2: '민방공',
            safetyCateNm3: '경계경보 발령시 행동요령',
            subOrd: 7
          },
          {
            actRmks:
              '지하대피소 등 안전한 곳으로 빨리 대피하고, 고층건물에서는 지하실 또는 아래층으로 대피합니다.',
            contentsType: 1,
            mainOrd: 30,
            safetyCate1: 4,
            safetyCate2: 4002,
            safetyCate3: 4002003,
            safetyCateNm1: '민방위',
            safetyCateNm2: '민방공',
            safetyCateNm3: '공습경보 발령시 행동요령',
            subOrd: 1
          },
          {
            contentsType: 2,
            contentsUrl:
              'http://mepv2.safekorea.go.kr/mdbs_html/images/mobileWeb/eEmergencySafety/eEmergencySafety_icon_12.png',
            mainOrd: 30,
            safetyCate1: 4,
            safetyCate2: 4002,
            safetyCate3: 4002003,
            safetyCateNm1: '민방위',
            safetyCateNm2: '민방공',
            safetyCateNm3: '공습경보 발령시 행동요령',
            subOrd: 2
          },
          {
            actRmks:
              '화생방 공격에 대비한 방독면 등 개인보호 장비와 간단한 생활필수품, 물자 등을 가지고 대피해야 합니다.',
            contentsType: 1,
            mainOrd: 30,
            safetyCate1: 4,
            safetyCate2: 4002,
            safetyCate3: 4002003,
            safetyCateNm1: '민방위',
            safetyCateNm2: '민방공',
            safetyCateNm3: '공습경보 발령시 행동요령',
            subOrd: 3
          },
          {
            actRmks:
              '운행 중인 차량은 가까운 빈터나 도로 오른쪽에 정차한 후 승객을 모두 내리게 하여 대피하도록 합니다.',
            contentsType: 1,
            mainOrd: 30,
            safetyCate1: 4,
            safetyCate2: 4002,
            safetyCate3: 4002003,
            safetyCateNm1: '민방위',
            safetyCateNm2: '민방공',
            safetyCateNm3: '공습경보 발령시 행동요령',
            subOrd: 4
          },
          {
            actRmks: '대피한 뒤에도 계속 방송을 들으면서 정부의 안내에 따라 행동합니다.',
            contentsType: 1,
            mainOrd: 30,
            safetyCate1: 4,
            safetyCate2: 4002,
            safetyCate3: 4002003,
            safetyCateNm1: '민방위',
            safetyCateNm2: '민방공',
            safetyCateNm3: '공습경보 발령시 행동요령',
            subOrd: 5
          },
          {
            actRmks:
              '화생공격이 있을 때는 고지대나 고층건물의 상층부로 신속히 대피하되, 실내 대피시에는 문을 꼭 닫고 외부 오염공기가 들어오는 것을 막아야 합니다.',
            contentsType: 1,
            mainOrd: 40,
            safetyCate1: 4,
            safetyCate2: 4002,
            safetyCate3: 4002004,
            safetyCateNm1: '민방위',
            safetyCateNm2: '민방공',
            safetyCateNm3: '화생방경보 발령시 행동요령',
            subOrd: 1
          },
          {
            contentsType: 2,
            contentsUrl:
              'http://mepv2.safekorea.go.kr/mdbs_html/images/mobileWeb/eEmergencySafety/eEmergencySafety_icon_13_1.png',
            mainOrd: 40,
            safetyCate1: 4,
            safetyCate2: 4002,
            safetyCate3: 4002004,
            safetyCateNm1: '민방위',
            safetyCateNm2: '민방공',
            safetyCateNm3: '화생방경보 발령시 행동요령',
            subOrd: 2
          },
          {
            actRmks:
              '생물학 공격이 있을 때는 위생에 힘쓰며 해충에 물리지 않도록 하고 끓인 물과 깨끗한 음식물만 섭취합니다.',
            contentsType: 1,
            mainOrd: 40,
            safetyCate1: 4,
            safetyCate2: 4002,
            safetyCate3: 4002004,
            safetyCateNm1: '민방위',
            safetyCateNm2: '민방공',
            safetyCateNm3: '화생방경보 발령시 행동요령',
            subOrd: 3
          },
          {
            contentsType: 2,
            contentsUrl:
              'http://mepv2.safekorea.go.kr/mdbs_html/images/mobileWeb/eEmergencySafety/eEmergencySafety_icon_13_2.png',
            mainOrd: 40,
            safetyCate1: 4,
            safetyCate2: 4002,
            safetyCate3: 4002004,
            safetyCateNm1: '민방위',
            safetyCateNm2: '민방공',
            safetyCateNm3: '화생방경보 발령시 행동요령',
            subOrd: 4
          },
          {
            actRmks:
              '핵공격이 있을 때는 지하대피소로 신속히 대피하되, 미처 대피를 하지 못했을 경우는 핵폭발 반대방향으로 엎드려 눈과 귀를 막고, 핵폭풍이 완전히 멈춘 후 일어나야 합니다.',
            contentsType: 1,
            mainOrd: 40,
            safetyCate1: 4,
            safetyCate2: 4002,
            safetyCate3: 4002004,
            safetyCateNm1: '민방위',
            safetyCateNm2: '민방공',
            safetyCateNm3: '화생방경보 발령시 행동요령',
            subOrd: 5
          },
          {
            contentsType: 2,
            contentsUrl:
              'http://mepv2.safekorea.go.kr/mdbs_html/images/mobileWeb/eEmergencySafety/eEmergencySafety_icon_13_3.png',
            mainOrd: 40,
            safetyCate1: 4,
            safetyCate2: 4002,
            safetyCate3: 4002004,
            safetyCateNm1: '민방위',
            safetyCateNm2: '민방공',
            safetyCateNm3: '화생방경보 발령시 행동요령',
            subOrd: 6
          }
        ]
      },
      numOfRows: 10,
      pageNo: 1,
      totalCount: 23
    }
  }
}
export default redAlert
