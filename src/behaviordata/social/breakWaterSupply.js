const breakWaterSupply = {
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
              '해당지역 주민들께서는 다른 통지사항이 있기 전에는 마시거나 양치하거나 식기세척 및 요리하실 때에 불편하시더라도 시중에서 파는 병물을 사용하시거나, 저희 ○○수도사업소에서 각 지역에 ○○시 이후로 병물 및 급수차 지원을 하고 있으니, 지원된 수돗물을 사용하여 주시기 바랍니다.',
            contentsType: 1,
            mainOrd: 10,
            safetyCate1: 2,
            safetyCate2: 2003,
            safetyCate3: 2003001,
            safetyCateNm1: '사회재난',
            safetyCateNm2: '식용수',
            safetyCateNm3: '급수중단 발령시',
            subOrd: 1
          },
          {
            contentsType: 2,
            contentsUrl:
              'http://mepv2.safekorea.go.kr/mdbs_html/images/mobileWeb/lWater/lWater_01.png',
            mainOrd: 10,
            safetyCate1: 2,
            safetyCate2: 2003,
            safetyCate3: 2003001,
            safetyCateNm1: '사회재난',
            safetyCateNm2: '식용수',
            safetyCateNm3: '급수중단 발령시',
            subOrd: 2
          },
          {
            actRmks:
              '끓이지 않은 물은 드시지 마십시오! 물을 1분가량 끓이신 후 식혀서 사용하시면 물에 있는 박테리아 등의 미생물들이 파괴되어 안전합니다.',
            contentsType: 1,
            mainOrd: 20,
            safetyCate1: 2,
            safetyCate2: 2003,
            safetyCate3: 2003002,
            safetyCateNm1: '사회재난',
            safetyCateNm2: '식용수',
            safetyCateNm3: 'Ⅰ급상황 발생시',
            subOrd: 1
          },
          {
            actRmks:
              '수돗물에서 냄새가 나는 기간 동안에는 끊여 마실 것을 권합니다. 끊인 후 상온에서 식히면 냄새가 없어집니다.',
            contentsType: 1,
            mainOrd: 30,
            safetyCate1: 2,
            safetyCate2: 2003,
            safetyCate3: 2003003,
            safetyCateNm1: '사회재난',
            safetyCateNm2: '식용수',
            safetyCateNm3: 'Ⅱ급상황 발생시',
            subOrd: 1
          },
          {
            actRmks:
              '샤워시(특히 온수) 살수효과에 의해 냄새물질이 쉽게 휘발하여 냄새가 더 심해질 수 있으므로 꼭 환기하여 주시기 바랍니다.',
            contentsType: 1,
            mainOrd: 30,
            safetyCate1: 2,
            safetyCate2: 2003,
            safetyCate3: 2003003,
            safetyCateNm1: '사회재난',
            safetyCateNm2: '식용수',
            safetyCateNm3: 'Ⅱ급상황 발생시',
            subOrd: 2
          },
          {
            actRmks:
              'Q : 물의 맛과 냄새, 색깔 등이 평소와 다를 때에는? A : 수질오염 의심이 들 때는 "지역번호 + 128번" 또는 가까운 경찰서로 신고해 주시기 바랍니다.',
            contentsType: 1,
            mainOrd: 30,
            safetyCate1: 2,
            safetyCate2: 2003,
            safetyCate3: 2003003,
            safetyCateNm1: '사회재난',
            safetyCateNm2: '식용수',
            safetyCateNm3: 'Ⅱ급상황 발생시',
            subOrd: 3
          }
        ]
      },
      numOfRows: 10,
      pageNo: 1,
      totalCount: 6
    }
  }
}
export default breakWaterSupply
