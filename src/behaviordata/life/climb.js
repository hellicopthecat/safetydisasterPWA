const climb = {
  response: {
    header: {
      resultCode: 0,
      resultMsg: 'NORMAL SERVICE.'
    },
    body: {
      items: {
        item: [
          {
            actRmks: '1단계 : 위급상황을 인식하고 어떻게 행동할지를 결정하는 것(Check)',
            contentsType: 1,
            mainOrd: 10,
            safetyCate1: 3,
            safetyCate2: 3006,
            safetyCate3: 3006001,
            safetyCateNm1: '생활안전',
            safetyCateNm2: '산행안전사고',
            safetyCateNm3: '위급 상황 시 행동 요령(3C)',
            subOrd: 1
          },
          {
            actRmks: '2단계 : 도움을 요청하는 것(Call)',
            contentsType: 1,
            mainOrd: 10,
            safetyCate1: 3,
            safetyCate2: 3006,
            safetyCate3: 3006001,
            safetyCateNm1: '생활안전',
            safetyCateNm2: '산행안전사고',
            safetyCateNm3: '위급 상황 시 행동 요령(3C)',
            subOrd: 2
          },
          {
            actRmks: '3단계 : 응급의료기관에 인계할 때까지 적절한 처치를 하는 것(Care)',
            contentsType: 1,
            mainOrd: 10,
            safetyCate1: 3,
            safetyCate2: 3006,
            safetyCate3: 3006001,
            safetyCateNm1: '생활안전',
            safetyCateNm2: '산행안전사고',
            safetyCateNm3: '위급 상황 시 행동 요령(3C)',
            subOrd: 3
          },
          {
            actRmks: '응급 상황이 발생한 정확한 장소',
            contentsType: 1,
            mainOrd: 20,
            safetyCate1: 3,
            safetyCate2: 3006,
            safetyCate3: 3006002,
            safetyCateNm1: '생활안전',
            safetyCateNm2: '산행안전사고',
            safetyCateNm3: '구조 요청 시 꼭 알려야 할 정보',
            subOrd: 1
          },
          {
            actRmks: '무슨 일이 일어났는지',
            contentsType: 1,
            mainOrd: 20,
            safetyCate1: 3,
            safetyCate2: 3006,
            safetyCate3: 3006002,
            safetyCateNm1: '생활안전',
            safetyCateNm2: '산행안전사고',
            safetyCateNm3: '구조 요청 시 꼭 알려야 할 정보',
            subOrd: 2
          },
          {
            actRmks: '부상자의 상태 정도',
            contentsType: 1,
            mainOrd: 20,
            safetyCate1: 3,
            safetyCate2: 3006,
            safetyCate3: 3006002,
            safetyCateNm1: '생활안전',
            safetyCateNm2: '산행안전사고',
            safetyCateNm3: '구조 요청 시 꼭 알려야 할 정보',
            subOrd: 3
          },
          {
            actRmks: '전화 거는 사람의 이름, 연락처',
            contentsType: 1,
            mainOrd: 20,
            safetyCate1: 3,
            safetyCate2: 3006,
            safetyCate3: 3006002,
            safetyCateNm1: '생활안전',
            safetyCateNm2: '산행안전사고',
            safetyCateNm3: '구조 요청 시 꼭 알려야 할 정보',
            subOrd: 4
          },
          {
            actRmks: '얼마나 많은 사람이 다쳤는지',
            contentsType: 1,
            mainOrd: 20,
            safetyCate1: 3,
            safetyCate2: 3006,
            safetyCate3: 3006002,
            safetyCateNm1: '생활안전',
            safetyCateNm2: '산행안전사고',
            safetyCateNm3: '구조 요청 시 꼭 알려야 할 정보',
            subOrd: 5
          },
          {
            actRmks: '응급처치는 어떻게 하고 있는지',
            contentsType: 1,
            mainOrd: 20,
            safetyCate1: 3,
            safetyCate2: 3006,
            safetyCate3: 3006002,
            safetyCateNm1: '생활안전',
            safetyCateNm2: '산행안전사고',
            safetyCateNm3: '구조 요청 시 꼭 알려야 할 정보',
            subOrd: 6
          },
          {
            actRmks:
              '가슴통증, 호흡곤란 등의 급성질환이 발생했을 때 - 등산을 하다가 극심한 가슴통증이 발생했다면 심장혈관, 즉 관상동맥의 이상을 의심해 볼 수 있다. 특히, 가슴이 터질 듯 하거나 짓누르는 듯한 통증을 느낀다면 협심증이나 심근경색일 때 발생하는 현상일 수 있으므로 즉시 편안한 자세로 휴식을 취해야 하며 구조대에 도움을 요청하도록 한다. 심혈관계에 이상이 있는 사람은 무리한 등산을 피해야 하며 혈관확장제를 미리 준비하여 증상이 나타났을 때 복용하는 것이 좋다. 호흡곤란 증세가 나타났을 때에는 등산을 중단하고 안정을 취해야 하며 호흡을 깊게 천천히 하도록 하고 증상이 좋아지지 않으면 즉시 도움을 요청해야 한다.',
            contentsType: 1,
            mainOrd: 30,
            safetyCate1: 3,
            safetyCate2: 3006,
            safetyCate3: 3006003,
            safetyCateNm1: '생활안전',
            safetyCateNm2: '산행안전사고',
            safetyCateNm3: '응급조치',
            subOrd: 1
          },
          {
            actRmks:
              '겨울철 디카, 휴대폰 랜턴 밧데리 방전보호 - 리튬이온 베터리는 온도가 낮으면 작동에 무리가 가거나 방전될 소지가 있다. 따라서 평상시 베터리를 따뜻한 체온으로 보호하여 방전 및 예기치 못한 상황에 유의한다. 추운 날씨에는 자켓 안에 넣어 다니며 손난로등으로 함께 보관하면 효과적으로 베터리 방전을 예방할 수 있다. 랜턴 베터리의 경우 사용중인 베터리와 베터리 사이에 종이를 넣어둠으로 절전효과를 일으킬 수 있다.',
            contentsType: 1,
            mainOrd: 30,
            safetyCate1: 3,
            safetyCate2: 3006,
            safetyCate3: 3006003,
            safetyCateNm1: '생활안전',
            safetyCateNm2: '산행안전사고',
            safetyCateNm3: '응급조치',
            subOrd: 2
          },
          {
            actRmks:
              '고혈압 및 빈혈 환자 등산 시 주의 사항 - 평소 고혈압이 있는 사람이 혈압이 잘 조절되지 않은 상태에서 산에 오르면 혈압이 더욱 상승하게 된다. 갑작스러운 혈압상승은 뇌출혈 등 위험한 상황으로 이어질 수 있으므로 각별히 주의해야 한다. 빈혈환자 역시 등산을 하게 되면 운동량이 증가하여 몸에 더 많은 산소를 공급해야 하는데 이는 심장에 부담을 줄 수 있다.',
            contentsType: 1,
            mainOrd: 30,
            safetyCate1: 3,
            safetyCate2: 3006,
            safetyCate3: 3006003,
            safetyCateNm1: '생활안전',
            safetyCateNm2: '산행안전사고',
            safetyCateNm3: '응급조치',
            subOrd: 3
          },
          {
            actRmks:
              '골절 - 뼈가 부러지는 부상을 입었을 경우에는 먼저 손상 부위를 차갑에 유지하고 부목을 대고 고정시켜야 한다. 나뭇가지나 두꺼운 종이 등을 사용하여 옷가지 등으로 묶으면 된다. 골절 부위에 출혈이 있으면 직접 압박으로 지혈을 하고 부목을 대도록 한다. 뼈가 외부로 노출된 개방성 골절 부상을 입었다면 뼈를 억지로 안으로 밀어 넣으려 하지 말고 만약 뼈가 안으로 들어간 경우라면 의료진에 알리도록 한다. 개방성 골절은 노출된 부위를 통해 감염이 생길 우려가 있으므로 환부를 깨끗한 가제나 수건으로 덮고 부목으로 고정시켜 빨리 병원으로 이송해야 한다.',
            contentsType: 1,
            mainOrd: 30,
            safetyCate1: 3,
            safetyCate2: 3006,
            safetyCate3: 3006003,
            safetyCateNm1: '생활안전',
            safetyCateNm2: '산행안전사고',
            safetyCateNm3: '응급조치',
            subOrd: 4
          },
          {
            actRmks:
              '다리에 쥐날 때 - 만약에 왼쪽 다리에 쥐가 나는 등 근육이 경직 혹은 경련이 일어날 경우 왼쪽 손등의 새끼 손가락 중간마디를 오른 손 검지 손톱등으로 꾹 눌러본다. 특별히 아픈 부위가 있다면 지속적으로 해당 부위를 누르게 되면 일시적으로 통증을 경감시킬 수 있다. 오른쪽 다리의 경우 같은 방법으로 오른쪽 손등의 새끼 손가락 중간 마디 부위를 지압한다.',
            contentsType: 1,
            mainOrd: 30,
            safetyCate1: 3,
            safetyCate2: 3006,
            safetyCate3: 3006003,
            safetyCateNm1: '생활안전',
            safetyCateNm2: '산행안전사고',
            safetyCateNm3: '응급조치',
            subOrd: 5
          },
          {
            actRmks:
              '머리손상 - 머리를 다쳤을 때 환자가 의식을 잃거나 토하거나 두통을 계속 호소한다면 반드시 응급실에 가서 검사를 받아야 한다. 이 때는 가능한 가장 가까운 응급실을 찾는 것이 바람직 하다.',
            contentsType: 1,
            mainOrd: 30,
            safetyCate1: 3,
            safetyCate2: 3006,
            safetyCate3: 3006003,
            safetyCateNm1: '생활안전',
            safetyCateNm2: '산행안전사고',
            safetyCateNm3: '응급조치',
            subOrd: 6
          },
          {
            actRmks:
              '뱀에 물렸을 때 - 몸을 눕혀 안정시킨 뒤 움직이지 않게 하고 물린 부위가 부풀어 오르면 5~10cm 위쪽을 묶어 독이 퍼지지 않게 한다. 입에 상처가 없을 때 물린 부위를 약간 절개하고 입으로 독을 빨아낸다. 뱀에게 물린 경우 뱀의 모양을 잘 살펴야 한다. 독사는 머리가 삼각형이고 목이 가늘며 물리면 2개의 독이빨 자국이 난다. 독사가 아니면 당황할 필요는 없다. 소독을 주된 처치로 하면 되는데 비누와 흐르는 물로 상처 부위를 깨끗이 씻고 옥시풀 등의 소독약으로 소독한 다음 거즈같은 청결한 천으로 덮는다. 동물에게 물린 상처는 여러 가지 감염증의 원인이 되므로 처치가 끝났으면 조속히 의사의 진찰을 받는다. 만약 독사에 물린 사람이 있을 때는 우선 환자가 안정하도록 바닥에 눕힌다. 움직이면 혈액순환이 좋아져 독소가 빨리 퍼지므로 주의해야 한다. 상처부위를 물로 잘 씻어 내고 소독을 한 다음, 상처보다도 심장에 가까운 곳을 가볍게(표면의 정맥을 압박할 정도로) 묶어둔다. 구조자는 환자의 상처부위에 직접 입을 대고 독소를 빨아낸다. 강하게 빨아내고 빨아내거든 재빨리 뱉어 버린다. 이러한 처치를 몇 번 되풀이 하고 독소를 빨아낸 사람은 깨끗이 양치질을 한다. 상처의 처치가 끝나면 환자를 들 것 같은 것에 태워서 안정한 상태 그대로 서둘러 의사의 치료를 받게 한다. 치료가 늦어지면 독소가 전신에 퍼져서 쇼크상태에 빠지는 수가 있으므로 주의해야 한다.',
            contentsType: 1,
            mainOrd: 30,
            safetyCate1: 3,
            safetyCate2: 3006,
            safetyCate3: 3006003,
            safetyCateNm1: '생활안전',
            safetyCateNm2: '산행안전사고',
            safetyCateNm3: '응급조치',
            subOrd: 7
          },
          {
            actRmks:
              '벌레에 물렸을 때 - 밝은 색의 옷이나 헤어스프레이, 향수 등은 곤충을 유인할 수 있으므로 피하고, 남은 음식도 꼭 덮어놓으므로 벌레들로 부터의 피해를 예방한다. 산행 중에는 긴상하의가 모기를 막는 일차적 방책이다. 그 외 초음파를 발생시켜 모기를 퇴치한다는 초음파 모기 퇴치기, 바르는 모기약 등을 병용한다. 또한 손목에 걸어 착용할 수 있는 모기퇴치 용품도 휴대한다.',
            contentsType: 1,
            mainOrd: 30,
            safetyCate1: 3,
            safetyCate2: 3006,
            safetyCate3: 3006003,
            safetyCateNm1: '생활안전',
            safetyCateNm2: '산행안전사고',
            safetyCateNm3: '응급조치',
            subOrd: 8
          },
          {
            actRmks:
              '벌에 쏘였을 경우 - 산행 중 벌에게 쏘이는 경우, 억지로 독침을 빼려 하지 말고 신용카드 같은 얇은 도구를 이용하여 살살 긁어 주면 곧 벌침이 빠진다. 이 후 환부를 절대로 문지르지 말아야 한다. 계곡물이나 생수 등으로 차가운 물수건을 만들어 상처 부위를 덮어준다. 이 때 얼음물에 적신 물수건으로 냉찜질을 해주면 통증이 가신다. 한편 얼음등으로 물린 부위를 찜질하고 암모니아 수 등을 바르면 큰 문제는 없다. 또한 보통 대용으로 우유를 바르는 것도 좋다. 전신적인 쇼크나 알레르기 반응 시 병원에 입원, 응급치료를 받아야 한다.',
            contentsType: 1,
            mainOrd: 30,
            safetyCate1: 3,
            safetyCate2: 3006,
            safetyCate3: 3006003,
            safetyCateNm1: '생활안전',
            safetyCateNm2: '산행안전사고',
            safetyCateNm3: '응급조치',
            subOrd: 9
          },
          {
            actRmks:
              '여름철에 잡목숲을 산행할 때 - 날씨가 무더운 한 여름, 가시넝쿨로 뒤덮힌 잡목 숲을 산행할 경우 피부보호를 위해 가급적 긴 팔을 입어야 한다. 그러나 더위로 인해 여의치 않을 경우 반팔에 토시를 착용하여 산행길이 좋으면 토시를 벗고 잡목구간 출연시는 다시 입는 형태로 수시로 갈아 입도록 함으로 가시넝쿨에 피부가 상하지 않도록 주의한다. (토시: 손목을 감싸는 천으로 만든 것. 일명 ""소대""라고 함)',
            contentsType: 1,
            mainOrd: 30,
            safetyCate1: 3,
            safetyCate2: 3006,
            safetyCate3: 3006003,
            safetyCateNm1: '생활안전',
            safetyCateNm2: '산행안전사고',
            safetyCateNm3: '응급조치',
            subOrd: 10
          },
          {
            actRmks:
              '열상 - 찟어져서 생긴 상처를 열상이라고 한다. 열상은 출혈도 많고 때로는 피부속의 근육과 인대 등도 밖으로 보일 수 있다. 특히 머리부위의 열상은 출혈량이 많아서 상처부위 범위가 작더라도 심한 출혈을 발생시킨다. 열상이 있을 때에는 열상의 정확한 부위를 확인한 후 거즈를 덮고 손으로 눌러주면 지혈이 된다. 이 때 지혈제를 사용하면 지혈제 가루가 상처 사이에 박혀 세척으로도 완전히 제거 되지 않아 나중에 봉합해도 상처가 잘 치유되지 않을 수 있기 때문에 사용하지 않는 것이 좋다. 열상은 대부분 상처를 봉합해야만 하기 때문에 가능한 빠른 시간 안에 응급실을 찾아야 한다.',
            contentsType: 1,
            mainOrd: 30,
            safetyCate1: 3,
            safetyCate2: 3006,
            safetyCate3: 3006003,
            safetyCateNm1: '생활안전',
            safetyCateNm2: '산행안전사고',
            safetyCateNm3: '응급조치',
            subOrd: 11
          },
          {
            actRmks:
              '예기치 못한 눈길 상황 발생시 - 예상치 못한 폭설 등으로 산길이 눈으로 덮였을 시, 비상 아이젠을 착용하여야 하나 상황이 위급하다면 대용으로 신발위에 양말을 벗어 신고 산행한다. 또는 아이젠 대용으로 배낭에 항상 9mm 줄을 예비하여 눈길 발생 시 발에 줄을 감고 산행하도록 한다.',
            contentsType: 1,
            mainOrd: 30,
            safetyCate1: 3,
            safetyCate2: 3006,
            safetyCate3: 3006003,
            safetyCateNm1: '생활안전',
            safetyCateNm2: '산행안전사고',
            safetyCateNm3: '응급조치',
            subOrd: 12
          },
          {
            actRmks:
              '저체온증 - 저체온증은 체온이 35℃ 이하로 내려간 상태를 말하는데 추운 겨울철에만 발생하는 것이 아니라 땀 등으로 옷이 젖어 있는 상태에서 바람이 불면 발생할 수 있다. 특히, 체력이 저하되고 탈진한 상태라면 더욱 위험할 수 있으므로 주의해야 한다. 체온이 떨어지기 시작하면 움직임이 둔화되기 때문에 스스로 정상체온을 회복하는 능력이 저하된다. 따라서 날씨가 크게 춥지 않은 가을철이라도 등산을 할 때에는 체온을 유지시켜 주는 재질의 등산복과 여벌의 옷을 준비하고 탈진되지 않도록 수분과 탄수화물을 적절히 섭취해야 한다. 만약 체온이 저하되었다면 옷이나 담요 등을 덮어 보온을 하고 따뜻한 물을 마시며 피부를 강하게 문질러 혈액순환이 잘 되도록 하는 것도 좋다. 무엇보다 빨리 도움을 요청해서 따뜻한 곳으로 이동해야 한다.',
            contentsType: 1,
            mainOrd: 30,
            safetyCate1: 3,
            safetyCate2: 3006,
            safetyCate3: 3006003,
            safetyCateNm1: '생활안전',
            safetyCateNm2: '산행안전사고',
            safetyCateNm3: '응급조치',
            subOrd: 13
          },
          {
            actRmks:
              '주변에 응급환자 발생시 - 우선 당황하지 말고 침착하게 행동해야 한다. 당황하게 되면 평소에 잘 알고 있던 응급처치조차 제대로 하지 못하고 환자를 더욱더 불안하게 할 수 있다. 혼자서 모든 것을 해결하려는 것은 잘못이다. 환자 상태가 나쁘거나 급할 수록 주변의 도움을 청해야 한다. 소방서에서 운영하는 119 구급대는 응급환자 신고접수 후 5분 안에 현장에 출동하여 도움을 주고 있다. 전국 어디서나 119로 전화 가능하다. 추락사고 현장에서 무리하게 환자를 옮기려고 서두르게 되면 손상을 악화 시킬 수 있으니 구급대를 기다린다. 응급처치가 항상 필요한 것만은 아니다. 무엇인가를 해야 한다는 강박관념에 욕심을 부리다 보면 불필요한 처치를 하거나 응급실 도착시간을 지연시킬 수 있다. 예를 들어 부엌에서 요리를 하다가 칼에 손을 베인 경우에 출혈이 멈추도록 상처부위를 거즈로 감싸거나 손으로 누르는 것은 좋지만 약국에 달려가 지혈제나 항생제를 사다가 상처에 뿌리고 응급실에 오는 것은 잘못이다. 응급처치의 우선순위 중 가장 중요한 것은 생명유지를 위한 호흡과 심장운동이다. 이를 위하여 기도유지, 인공호흡, 심장압박 등이 다른 처치에 우선되어야 한다. 예를 들어 교통사고로 의식을 잃고 고개가 앞으로 젖혀져 있으면 기도가 막실 수 있는데 이 경우에 눈에 보이는 사지의 출혈에만 신경쓰다보면 숨을 못쉬어 불행한 일이 생길 수 있다. 병원응급실로 옮겨야겠다고 결정이 되면 가장 가까운 병의원의 응급실로 환자를 옮겨 1차 응급조치를 받아야 한다. 무조건 큰 병원만 고입하여 멀리 떨어진 대학병원 등으로 옮기다 보면 치료시기를 놓쳐 상태가 악화될 수도 있다.',
            contentsType: 1,
            mainOrd: 30,
            safetyCate1: 3,
            safetyCate2: 3006,
            safetyCate3: 3006003,
            safetyCateNm1: '생활안전',
            safetyCateNm2: '산행안전사고',
            safetyCateNm3: '응급조치',
            subOrd: 14
          },
          {
            actRmks:
              '철과상과 절상 - 등산 시에는 날카로운 나뭇가지나 등산장비 등에 피부를 긁히거나 베이는 경우도 자주 발생한다. 사소한 부상이라면 소독 후 반창고를 붙이도록 하고 만약 피가 멈추지 않거나 출혈이 심각할 때는 환부를 심장보다 높은 곳으로 들어 올리고 피가 나는 부위는 압박을 통해 지혈하도록 한다.',
            contentsType: 1,
            mainOrd: 30,
            safetyCate1: 3,
            safetyCate2: 3006,
            safetyCate3: 3006003,
            safetyCateNm1: '생활안전',
            safetyCateNm2: '산행안전사고',
            safetyCateNm3: '응급조치',
            subOrd: 15
          },
          {
            actRmks:
              '치아 손상 - 치아가 뿌리째 빠진 경우는 식염수나 우유에 빠진 치아를 담가서 치과 응급처치를 받을 수 있는 병원으로 빠른 시간 안에 가져 가면 적절한 이식치료를 받을 수 있다.',
            contentsType: 1,
            mainOrd: 30,
            safetyCate1: 3,
            safetyCate2: 3006,
            safetyCate3: 3006003,
            safetyCateNm1: '생활안전',
            safetyCateNm2: '산행안전사고',
            safetyCateNm3: '응급조치',
            subOrd: 16
          },
          {
            actRmks:
              '탈진 - 탈진을 방지하기 위해서는 사전에 수분을 충분히 섭취하는 것이 중요하다. 등산을 하면서 물을 조금씩 자주 마시고 쉬는 동안에는 탄수화물을 섭취하도록 하며, 알코올이나 고단백 음식은 피하는 것이 바람직하다. 만약 등산로에서 길을 잃고 오랜 시간 헤매다 탈진 증세가 나타날 때에는 그늘에 편한 자세로 눕도록 하고 등산화와 양말을 벗고 조이는 옷과 허리띠 등을 느슨하게 풀어주는 것이 좋다. 물을 충분히 공급하며 이때 소금물이나 염분제를 먹는 것은 피해야 한다.',
            contentsType: 1,
            mainOrd: 30,
            safetyCate1: 3,
            safetyCate2: 3006,
            safetyCate3: 3006003,
            safetyCateNm1: '생활안전',
            safetyCateNm2: '산행안전사고',
            safetyCateNm3: '응급조치',
            subOrd: 17
          },
          {
            actRmks:
              "발목염좌 - 발목을 '삐었다' 혹은 '접질렀다' 고 표현하는 발목 염좌는 울퉁불퉁한 바위나 계단을 오르내릴 때 흔히 발생하는 증상이다. 다리가 균형을 잃으면서 발목이 돌아갔을 때 걷기 힘들어지고 부위가 부어오르는 것을 느낄 수 있는데 이는 인대의 일부 혹은 전체가 늘어나거나 파열됐기 때문이다. 가벼운 발목 염좌의 경우 따로 치료를 하지 않아도 저절로 낫게 되지만 2~3일이 지났는데도 지속적으로 발목 부위에 통증을 느낀다면 병원을 찾는 것이 좋다. 단순 염좌라 생각하여 방치했다가 뒤늦게 골절이 발견되는 경우도 있기 때문이다. 인대가 손상된 경우라면 3~4주간 석고부목 고정을, 인대가 파열된 상황이면 4~6주간 석고 고정을 해야 한다. 발목 염좌를 초기에 제대로 치료하지 않을 경우 다친 부위를 반복적으로 삐게되거나 만성적 통증에 시달릴 수도 있으므로 주의해야 한다.",
            contentsType: 1,
            mainOrd: 30,
            safetyCate1: 3,
            safetyCate2: 3006,
            safetyCate3: 3006003,
            safetyCateNm1: '생활안전',
            safetyCateNm2: '산행안전사고',
            safetyCateNm3: '응급조치',
            subOrd: 18
          },
          {
            actRmks: '산행은 아침 일찍 시작하여 해지기 한두 시간 전에 마친다.',
            contentsType: 1,
            mainOrd: 40,
            safetyCate1: 3,
            safetyCate2: 3006,
            safetyCate3: 3006004,
            safetyCateNm1: '생활안전',
            safetyCateNm2: '산행안전사고',
            safetyCateNm3: '산에 오를 때는 어떻게 할까?',
            subOrd: 1
          },
          {
            actRmks: '하루 8시간을 산행하고, 체력의 30%는 비축한다.',
            contentsType: 1,
            mainOrd: 40,
            safetyCate1: 3,
            safetyCate2: 3006,
            safetyCate3: 3006004,
            safetyCateNm1: '생활안전',
            safetyCateNm2: '산행안전사고',
            safetyCateNm3: '산에 오를 때는 어떻게 할까?',
            subOrd: 2
          },
          {
            actRmks: '일행 중 약한 사람을 기준으로 산행한다.',
            contentsType: 1,
            mainOrd: 40,
            safetyCate1: 3,
            safetyCate2: 3006,
            safetyCate3: 3006004,
            safetyCateNm1: '생활안전',
            safetyCateNm2: '산행안전사고',
            safetyCateNm3: '산에 오를 때는 어떻게 할까?',
            subOrd: 3
          },
          {
            actRmks: '될 수 있으면 30킬로그램 이상의 짐을 지지 않는다.',
            contentsType: 1,
            mainOrd: 40,
            safetyCate1: 3,
            safetyCate2: 3006,
            safetyCate3: 3006004,
            safetyCateNm1: '생활안전',
            safetyCateNm2: '산행안전사고',
            safetyCateNm3: '산에 오를 때는 어떻게 할까?',
            subOrd: 4
          },
          {
            actRmks:
              '배낭에는 기상이변 등을 대비 랜턴, 우의, 휴대전화(예비 축전지), 상비약품을 준비하고 손에는 될 수 있으면 물건을 들지 않는다.',
            contentsType: 1,
            mainOrd: 40,
            safetyCate1: 3,
            safetyCate2: 3006,
            safetyCate3: 3006004,
            safetyCateNm1: '생활안전',
            safetyCateNm2: '산행안전사고',
            safetyCateNm3: '산에 오를 때는 어떻게 할까?',
            subOrd: 5
          },
          {
            actRmks: '등산화는 발에 잘 맞고 통기성과 방수성이 좋은 것을 신는다.',
            contentsType: 1,
            mainOrd: 40,
            safetyCate1: 3,
            safetyCate2: 3006,
            safetyCate3: 3006004,
            safetyCateNm1: '생활안전',
            safetyCateNm2: '산행안전사고',
            safetyCateNm3: '산에 오를 때는 어떻게 할까?',
            subOrd: 6
          },
          {
            actRmks: '산행 중에는 한꺼번에 너무 많이 먹지 말고, 조금씩 자주 섭취한다.',
            contentsType: 1,
            mainOrd: 40,
            safetyCate1: 3,
            safetyCate2: 3006,
            safetyCate3: 3006004,
            safetyCateNm1: '생활안전',
            safetyCateNm2: '산행안전사고',
            safetyCateNm3: '산에 오를 때는 어떻게 할까?',
            subOrd: 7
          },
          {
            actRmks: '산에서는 아는 길도 자주 지도를 보고 확인한다.',
            contentsType: 1,
            mainOrd: 40,
            safetyCate1: 3,
            safetyCate2: 3006,
            safetyCate3: 3006004,
            safetyCateNm1: '생활안전',
            safetyCateNm2: '산행안전사고',
            safetyCateNm3: '산에 오를 때는 어떻게 할까?',
            subOrd: 8
          },
          {
            actRmks: '길을 잘못 들었을 때는 당황하지 말고, 아는 위치까지 되돌아가서 다시 확인한다.',
            contentsType: 1,
            mainOrd: 40,
            safetyCate1: 3,
            safetyCate2: 3006,
            safetyCate3: 3006004,
            safetyCateNm1: '생활안전',
            safetyCateNm2: '산행안전사고',
            safetyCateNm3: '산에 오를 때는 어떻게 할까?',
            subOrd: 9
          },
          {
            actRmks:
              '등반로 외의 산행을 삼가고, 길을 잃었을 때에는 계곡을 피하여 능선으로 올라간다.',
            contentsType: 1,
            mainOrd: 40,
            safetyCate1: 3,
            safetyCate2: 3006,
            safetyCate3: 3006004,
            safetyCateNm1: '생활안전',
            safetyCateNm2: '산행안전사고',
            safetyCateNm3: '산에 오를 때는 어떻게 할까?',
            subOrd: 10
          },
          {
            actRmks: '등산화 바닥 전체로 지면을 밟고 안전하게 걷는다.',
            contentsType: 1,
            mainOrd: 40,
            safetyCate1: 3,
            safetyCate2: 3006,
            safetyCate3: 3006004,
            safetyCateNm1: '생활안전',
            safetyCateNm2: '산행안전사고',
            safetyCateNm3: '산에 오를 때는 어떻게 할까?',
            subOrd: 11
          },
          {
            actRmks: '보폭을 너무 넓게 하지 말고 항상 일정한 속도로 걷는다.',
            contentsType: 1,
            mainOrd: 40,
            safetyCate1: 3,
            safetyCate2: 3006,
            safetyCate3: 3006004,
            safetyCateNm1: '생활안전',
            safetyCateNm2: '산행안전사고',
            safetyCateNm3: '산에 오를 때는 어떻게 할까?',
            subOrd: 12
          },
          {
            actRmks: '발 디딜 곳을 잘 살펴 천천히 걷는다.',
            contentsType: 1,
            mainOrd: 40,
            safetyCate1: 3,
            safetyCate2: 3006,
            safetyCate3: 3006004,
            safetyCateNm1: '생활안전',
            safetyCateNm2: '산행안전사고',
            safetyCateNm3: '산에 오를 때는 어떻게 할까?',
            subOrd: 13
          },
          {
            actRmks:
              '처음 몇 차례는 15~20분 정도 걷고 5분간 휴식하고, 차츰 30분 정도 걷고 5~10분간 휴식한 다음 산행에 적응이 되면 1시간 정도 걷고 10분간씩 휴식하는 것이 좋다.',
            contentsType: 1,
            mainOrd: 40,
            safetyCate1: 3,
            safetyCate2: 3006,
            safetyCate3: 3006004,
            safetyCateNm1: '생활안전',
            safetyCateNm2: '산행안전사고',
            safetyCateNm3: '산에 오를 때는 어떻게 할까?',
            subOrd: 14
          },
          {
            actRmks:
              '산행 시에는 수시로 지형과 지도를 대조하여 현재 위치를 소방서에서 설치한 위치판 고유번호와 함께 확인하는 것이 좋다.',
            contentsType: 1,
            mainOrd: 40,
            safetyCate1: 3,
            safetyCate2: 3006,
            safetyCate3: 3006004,
            safetyCateNm1: '생활안전',
            safetyCateNm2: '산행안전사고',
            safetyCateNm3: '산에 오를 때는 어떻게 할까?',
            subOrd: 15
          },
          {
            actRmks: '내려갈 때는 자세를 낮추고 발아래를 잘 살펴 안전하게 디딘다.',
            contentsType: 1,
            mainOrd: 40,
            safetyCate1: 3,
            safetyCate2: 3006,
            safetyCate3: 3006004,
            safetyCateNm1: '생활안전',
            safetyCateNm2: '산행안전사고',
            safetyCateNm3: '산에 오를 때는 어떻게 할까?',
            subOrd: 16
          },
          {
            actRmks: '썩은 나뭇가지 풀, 불안정한 바위를 손잡이로 사용하지 않는다.',
            contentsType: 1,
            mainOrd: 40,
            safetyCate1: 3,
            safetyCate2: 3006,
            safetyCate3: 3006004,
            safetyCateNm1: '생활안전',
            safetyCateNm2: '산행안전사고',
            safetyCateNm3: '산에 오를 때는 어떻게 할까?',
            subOrd: 17
          },
          {
            actRmks: '급경사 등 위험한 곳에서는 보조 자일을 사용하는 것이 좋다.',
            contentsType: 1,
            mainOrd: 40,
            safetyCate1: 3,
            safetyCate2: 3006,
            safetyCate3: 3006004,
            safetyCateNm1: '생활안전',
            safetyCateNm2: '산행안전사고',
            safetyCateNm3: '산에 오를 때는 어떻게 할까?',
            subOrd: 18
          },
          {
            actRmks:
              '야생동물이나 곤충으로부터 피해를 보지 않도록 주의하고, 뱀 등이 나타나면 절대로 공격을 하면 안 된다.',
            contentsType: 1,
            mainOrd: 50,
            safetyCate1: 3,
            safetyCate2: 3006,
            safetyCate3: 3006005,
            safetyCateNm1: '생활안전',
            safetyCateNm2: '산행안전사고',
            safetyCateNm3: '산에서 캠핑할 때는',
            subOrd: 1
          },
          {
            actRmks:
              '계곡에서 캠핑할 때는, 밤사이 집중호우가 내려 물이 갑자기 불어나면서 위험해질 수 있으므로 물 가까이 텐트를 치지 않는다.',
            contentsType: 1,
            mainOrd: 50,
            safetyCate1: 3,
            safetyCate2: 3006,
            safetyCate3: 3006005,
            safetyCateNm1: '생활안전',
            safetyCateNm2: '산행안전사고',
            safetyCateNm3: '산에서 캠핑할 때는',
            subOrd: 2
          },
          {
            actRmks:
              '물을 쉽게 구할 수 있고 바닥이 평평해야 하며, 뒤에 암벽이나 언덕이 없어 산사태 위험이 없는 곳에 텐트를 친다.',
            contentsType: 1,
            mainOrd: 50,
            safetyCate1: 3,
            safetyCate2: 3006,
            safetyCate3: 3006005,
            safetyCateNm1: '생활안전',
            safetyCateNm2: '산행안전사고',
            safetyCateNm3: '산에서 캠핑할 때는',
            subOrd: 3
          },
          {
            actRmks: '벌레에 물리면 비눗물로 즉시 씻고, 항히스타민제 연고를 바른다.',
            contentsType: 1,
            mainOrd: 50,
            safetyCate1: 3,
            safetyCate2: 3006,
            safetyCate3: 3006005,
            safetyCateNm1: '생활안전',
            safetyCateNm2: '산행안전사고',
            safetyCateNm3: '산에서 캠핑할 때는',
            subOrd: 4
          },
          {
            actRmks: '휴대용 랜턴, 라디오, 밧줄(로프), 구급약품 등을 준비해둔다.',
            contentsType: 1,
            mainOrd: 50,
            safetyCate1: 3,
            safetyCate2: 3006,
            safetyCate3: 3006005,
            safetyCateNm1: '생활안전',
            safetyCateNm2: '산행안전사고',
            safetyCateNm3: '산에서 캠핑할 때는',
            subOrd: 5
          },
          {
            actRmks: '호우주의보 발령 시 라디오에 귀를 기울여 기상상태를 주시한다.',
            contentsType: 1,
            mainOrd: 50,
            safetyCate1: 3,
            safetyCate2: 3006,
            safetyCate3: 3006005,
            safetyCateNm1: '생활안전',
            safetyCateNm2: '산행안전사고',
            safetyCateNm3: '산에서 캠핑할 때는',
            subOrd: 6
          },
          {
            actRmks:
              '등산 중일 때에는 빨리 하산하거나 급히 높은 지대로 피신하되, 물살이 거센 계곡을 절대로 건너지 않는다.',
            contentsType: 1,
            mainOrd: 50,
            safetyCate1: 3,
            safetyCate2: 3006,
            safetyCate3: 3006005,
            safetyCateNm1: '생활안전',
            safetyCateNm2: '산행안전사고',
            safetyCateNm3: '산에서 캠핑할 때는',
            subOrd: 7
          },
          {
            actRmks: '야영 중에 물이 밀려들 때에는 절대로 물건에 미련을 두지 말고 신속히 대피한다.',
            contentsType: 1,
            mainOrd: 50,
            safetyCate1: 3,
            safetyCate2: 3006,
            safetyCate3: 3006005,
            safetyCateNm1: '생활안전',
            safetyCateNm2: '산행안전사고',
            safetyCateNm3: '산에서 캠핑할 때는',
            subOrd: 8
          },
          {
            actRmks: '집중호우 시 나무로 만들어진 다리(교량)는 건너지 않는다.',
            contentsType: 1,
            mainOrd: 50,
            safetyCate1: 3,
            safetyCate2: 3006,
            safetyCate3: 3006005,
            safetyCateNm1: '생활안전',
            safetyCateNm2: '산행안전사고',
            safetyCateNm3: '산에서 캠핑할 때는',
            subOrd: 9
          }
        ]
      },
      numOfRows: 10,
      pageNo: 1,
      totalCount: 54
    }
  }
}
export default climb
