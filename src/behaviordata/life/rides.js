const rides = {
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
              '대기 중에 안전 울타리에 걸터앉거나 넘어가는 행위 또는 울타리 안으로 들어가 사진을 찍는 행위는 넘어지거나 유기기구(놀이기구)에 부딪힐 위험이 있으므로 특별히 조심한다.',
            contentsType: 1,
            mainOrd: 10,
            safetyCate1: 3,
            safetyCate2: 3007,
            safetyCate3: 3007001,
            safetyCateNm1: '생활안전',
            safetyCateNm2: '어린이 놀이시설 안전사고',
            safetyCateNm3: '탑승대기 주의 사항',
            subOrd: 1
          },
          {
            actRmks:
              '놀이동산 안에 있는 일반 시설을 이용할 때도 안전에 대한 주의가 필요합니다. 물놀이 시설이 있는 곳에서는 바닥에서 미끄러지기 쉬우므로 뛰어다니는 행동을 자제하고, 놀이기구 간 이동 시 계단 등의 미끄럽거나 날카로운 부분을 주의해서 다니도록 한다.',
            contentsType: 1,
            mainOrd: 20,
            safetyCate1: 3,
            safetyCate2: 3007,
            safetyCate3: 3007002,
            safetyCateNm1: '생활안전',
            safetyCateNm2: '어린이 놀이시설 안전사고',
            safetyCateNm3: '일반 시설 안전 이용',
            subOrd: 1
          },
          {
            actRmks:
              '전기시설이나 화기시설, 울타리 내부 등 접근금지구역이나 운행하지 않는 놀이시설에 들어가면 위험하니 출입금지 구역에는 절대 들어가지 않도록 한다.',
            contentsType: 1,
            mainOrd: 20,
            safetyCate1: 3,
            safetyCate2: 3007,
            safetyCate3: 3007002,
            safetyCateNm1: '생활안전',
            safetyCateNm2: '어린이 놀이시설 안전사고',
            safetyCateNm3: '일반 시설 안전 이용',
            subOrd: 2
          },
          {
            actRmks:
              '놀이기구 탑승 시 가장 유의할 점은 바로 키 제한이다. 이 제한은 규정된 키보다 작은 사람은 놀이 기구에 탑승할 수 없다는 것으로서, 가장 기본이 되는 안전 보장 조건이다. 일부 놀이 기구는 보호자가 함께 이용하면 규정된 키보다 작은 어린이도 이용할 수 있는데, 이때 어린이의 보호자는 반드시 만 18세 이상의 성인이어야 한다.',
            contentsType: 1,
            mainOrd: 30,
            safetyCate1: 3,
            safetyCate2: 3007,
            safetyCate3: 3007003,
            safetyCateNm1: '생활안전',
            safetyCateNm2: '어린이 놀이시설 안전사고',
            safetyCateNm3: '탑승 제한',
            subOrd: 1
          },
          {
            actRmks:
              '임산부, 노소약자, 음주자 등 신체적으로 안전 위험이 따르는 사람은 놀이기구를 이용할 수 없다. 겉으로 보이지 않는 손님의 건강상태를 근무자가 일일이 확인하기 어려운 만큼 고혈압이나 심장질환, 디스크 등을 앓고 계신 분은 놀이기구 이용을 스스로 자제하는 것이 안전을 위한 최고의 방법이다.',
            contentsType: 1,
            mainOrd: 30,
            safetyCate1: 3,
            safetyCate2: 3007,
            safetyCate3: 3007003,
            safetyCateNm1: '생활안전',
            safetyCateNm2: '어린이 놀이시설 안전사고',
            safetyCateNm3: '탑승 제한',
            subOrd: 2
          },
          {
            actRmks:
              '놀이기구를 무리하게 오래 이용하거나 식사 후 이용할 때에는 충분한 휴식을 한 다음 이용해야 안전하다.',
            contentsType: 1,
            mainOrd: 30,
            safetyCate1: 3,
            safetyCate2: 3007,
            safetyCate3: 3007003,
            safetyCateNm1: '생활안전',
            safetyCateNm2: '어린이 놀이시설 안전사고',
            safetyCateNm3: '탑승 제한',
            subOrd: 3
          },
          {
            actRmks:
              '어린이와 함께 이용할 때는 안쪽으로 어린이를 앉히고 레버나 안전벨트가 제대로 장착되었는지 보호자가 반드시 확인한 후 안전봉을 두 손으로 꼭 잡게 한 다음 출발한다.',
            contentsType: 1,
            mainOrd: 40,
            safetyCate1: 3,
            safetyCate2: 3007,
            safetyCate3: 3007004,
            safetyCateNm1: '생활안전',
            safetyCateNm2: '어린이 놀이시설 안전사고',
            safetyCateNm3: '어린이 탑승',
            subOrd: 1
          },
          {
            actRmks:
              '어린이 전용 놀이기구를 탈 때에는 출발 전에 반드시 보호자가 탑승을 도와 안전 벨트를 확인하고, 하차할 때도 반드시 보호자가 직접 어린이를 챙기는 게 중요하다. 보호자는 어린이의 가장 훌륭한 안전관리자이다.',
            contentsType: 1,
            mainOrd: 40,
            safetyCate1: 3,
            safetyCate2: 3007,
            safetyCate3: 3007004,
            safetyCateNm1: '생활안전',
            safetyCateNm2: '어린이 놀이시설 안전사고',
            safetyCateNm3: '어린이 탑승',
            subOrd: 2
          },
          {
            actRmks:
              '놀이기구 탑승 시 올바른 탑승 자세를 갖추는 것이 중요하다. 안전에 불필요한 행동은 삼가고 정확한 자세를 갖춘 다음 안전벨트를 착용했는지 점검한다.',
            contentsType: 1,
            mainOrd: 50,
            safetyCate1: 3,
            safetyCate2: 3007,
            safetyCate3: 3007005,
            safetyCateNm1: '생활안전',
            safetyCateNm2: '어린이 놀이시설 안전사고',
            safetyCateNm3: '탑승 때 주의 사항',
            subOrd: 1
          },
          {
            actRmks:
              '롤러 코스터류의 놀이기구 중 상체가 고정되는 기종은 개인별로 안전레버와 벨트가 있지만, 하체 고정형 기구는 개인별 안전장치가 없으므로 안전점검 시 함께 탄 사람들이 서로서로 확인해주는 배려가 필요하다.',
            contentsType: 1,
            mainOrd: 50,
            safetyCate1: 3,
            safetyCate2: 3007,
            safetyCate3: 3007005,
            safetyCateNm1: '생활안전',
            safetyCateNm2: '어린이 놀이시설 안전사고',
            safetyCateNm3: '탑승 때 주의 사항',
            subOrd: 2
          },
          {
            actRmks:
              '안전장치가 없는 놀이기구에서는 탑승 중 일어서거나 뛰어내리는 등의 돌발행위를 일체 하지 말아야 하며 음식이나 음료수를 들고 탑승해서도 안 된다.',
            contentsType: 1,
            mainOrd: 50,
            safetyCate1: 3,
            safetyCate2: 3007,
            safetyCate3: 3007005,
            safetyCateNm1: '생활안전',
            safetyCateNm2: '어린이 놀이시설 안전사고',
            safetyCateNm3: '탑승 때 주의 사항',
            subOrd: 3
          },
          {
            actRmks:
              '놀이기구의 기종마다 각기 특성에 맞는 안전벨트의 종류와 장착방법이 다르다는 사실을 유의하고 반드시 운행 요원의 안내에 따라 행동해야 안전하다는 사실을 기억해 둔다.',
            contentsType: 1,
            mainOrd: 50,
            safetyCate1: 3,
            safetyCate2: 3007,
            safetyCate3: 3007005,
            safetyCateNm1: '생활안전',
            safetyCateNm2: '어린이 놀이시설 안전사고',
            safetyCateNm3: '탑승 때 주의 사항',
            subOrd: 4
          },
          {
            actRmks:
              '운행 중 떨어질 수 있는 물건은 가지고 타지 않으며 항상 안전레버를 손으로 잡고 있어야 한다. 운행 중 일어서거나 하는 불필요한 행동이나 안전장치를 풀거나 해체 또는 문을 열거나 하는 일체의 행위는 절대 시도해서는 안 된다.',
            contentsType: 1,
            mainOrd: 60,
            safetyCate1: 3,
            safetyCate2: 3007,
            safetyCate3: 3007006,
            safetyCateNm1: '생활안전',
            safetyCateNm2: '어린이 놀이시설 안전사고',
            safetyCateNm3: '운행 중 자세',
            subOrd: 1
          },
          {
            actRmks:
              '창으로 손을 내민다거나 놀이기구 밖으로 오물을 버리는 행위, 운행 중 음식물을 먹거나 친구들과 과격하게 장난하는 행위 역시 위험하므로 자제해야 한다.',
            contentsType: 1,
            mainOrd: 60,
            safetyCate1: 3,
            safetyCate2: 3007,
            safetyCate3: 3007006,
            safetyCateNm1: '생활안전',
            safetyCateNm2: '어린이 놀이시설 안전사고',
            safetyCateNm3: '운행 중 자세',
            subOrd: 2
          },
          {
            actRmks:
              '이러한 모든 행동들은 운행 중 승객이 스스로 안전을 지키고자 노력해야 하는 안전수칙인 만큼 이용자 스스로 행동으로 옮기는 마음가짐이 무엇보다 중요하다.',
            contentsType: 1,
            mainOrd: 60,
            safetyCate1: 3,
            safetyCate2: 3007,
            safetyCate3: 3007006,
            safetyCateNm1: '생활안전',
            safetyCateNm2: '어린이 놀이시설 안전사고',
            safetyCateNm3: '운행 중 자세',
            subOrd: 3
          },
          {
            actRmks:
              '정지하기 전에 안전장치를 푸는 행위나 정지하고자 서서히 움직이는 동안 놀이기구에서 뛰어내리는 행위는 매우 위험하므로 결코 해서는 안 된다.',
            contentsType: 1,
            mainOrd: 70,
            safetyCate1: 3,
            safetyCate2: 3007,
            safetyCate3: 3007007,
            safetyCateNm1: '생활안전',
            safetyCateNm2: '어린이 놀이시설 안전사고',
            safetyCateNm3: '탑승 완료 후 퇴장',
            subOrd: 1
          },
          {
            actRmks:
              '탑승객은 자신의 소지품을 확인한 후 천천히 놀이기구에서 지정된 출구로 하차 하여 나간다.',
            contentsType: 1,
            mainOrd: 70,
            safetyCate1: 3,
            safetyCate2: 3007,
            safetyCate3: 3007007,
            safetyCateNm1: '생활안전',
            safetyCateNm2: '어린이 놀이시설 안전사고',
            safetyCateNm3: '탑승 완료 후 퇴장',
            subOrd: 2
          },
          {
            actRmks: '출구로 뛰어나가는 행동 역시 대단히 위험하므로 자제한다.',
            contentsType: 1,
            mainOrd: 70,
            safetyCate1: 3,
            safetyCate2: 3007,
            safetyCate3: 3007007,
            safetyCateNm1: '생활안전',
            safetyCateNm2: '어린이 놀이시설 안전사고',
            safetyCateNm3: '탑승 완료 후 퇴장',
            subOrd: 3
          }
        ]
      },
      numOfRows: 10,
      pageNo: 1,
      totalCount: 18
    }
  }
}

export default rides
