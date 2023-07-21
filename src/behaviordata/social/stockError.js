const stockError = {
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
              '보이스피싱을 당한 경우에는 - 사기범이 피해금을 인출하기 전에 사기이용계좌의 지급정지를 신청합니다. - 전기통신금융사기 피해금 환급에 관한 특별법(일명 ‘보이스피싱법’)의 구제대상은 사기이용계좌의 피해금이 남은 경우로 한정하고 있습니다.',
            contentsType: 1,
            mainOrd: 10,
            safetyCate1: 2,
            safetyCate2: 2008,
            safetyCate3: 2008001,
            safetyCateNm1: '사회재난',
            safetyCateNm2: '금융전산',
            safetyCateNm3: '보이스피싱 피해금 지급정지',
            subOrd: 2
          },
          {
            actRmks: '경찰청 112센터를 통해 피해금 지급정지를 신청합니다.',
            contentsType: 1,
            mainOrd: 10,
            safetyCate1: 2,
            safetyCate2: 2008,
            safetyCate3: 2008001,
            safetyCateNm1: '사회재난',
            safetyCateNm2: '금융전산',
            safetyCateNm3: '보이스피싱 피해금 지급정지',
            subOrd: 3
          },
          {
            actRmks:
              '지급정지 신청 후에는 - 가까운 경찰서에서 피해신고확인서를 발급받아 지급정지를 요청한 은행에 경찰서에서 발급한 피해신고확인서와 신분증 사본, 피해구제신청서를 3일 이내에 제출하면 됩니다.',
            contentsType: 1,
            mainOrd: 10,
            safetyCate1: 2,
            safetyCate2: 2008,
            safetyCate3: 2008001,
            safetyCateNm1: '사회재난',
            safetyCateNm2: '금융전산',
            safetyCateNm3: '보이스피싱 피해금 지급정지',
            subOrd: 4
          },
          {
            contentsType: 2,
            contentsUrl:
              'http://mepv2.safekorea.go.kr/mdbs_html/images/mobileWeb/hFinance/hFinance_icon_01.png',
            mainOrd: 10,
            safetyCate1: 2,
            safetyCate2: 2008,
            safetyCate3: 2008001,
            safetyCateNm1: '사회재난',
            safetyCateNm2: '금융전산',
            safetyCateNm3: '보이스피싱 피해금 지급정지',
            subOrd: 5
          },
          {
            actRmks:
              '금융거래정보 요구는 일절 응대하지 말아야 합니다.(보안카드 번호 전체를 요구하면 100% 피싱)',
            contentsType: 1,
            mainOrd: 20,
            safetyCate1: 2,
            safetyCate2: 2008,
            safetyCate3: 2008002,
            safetyCateNm1: '사회재난',
            safetyCateNm2: '금융전산',
            safetyCateNm3: '보이스피싱 피해예방 요령',
            subOrd: 1
          },
          {
            actRmks: '현금지급기로 유인하면 100% 보이스피싱이니 절대로 응하지 말야야 합니다.',
            contentsType: 1,
            mainOrd: 20,
            safetyCate1: 2,
            safetyCate2: 2008,
            safetyCate3: 2008002,
            safetyCateNm1: '사회재난',
            safetyCateNm2: '금융전산',
            safetyCateNm3: '보이스피싱 피해예방 요령',
            subOrd: 2
          },
          {
            actRmks:
              '자녀납치 보이스피싱에 대비하여 평소 자녀의 친구, 선생님, 인척 등의 연락처를 미리 확보합니다.',
            contentsType: 1,
            mainOrd: 20,
            safetyCate1: 2,
            safetyCate2: 2008,
            safetyCate3: 2008002,
            safetyCateNm1: '사회재난',
            safetyCateNm2: '금융전산',
            safetyCateNm3: '보이스피싱 피해예방 요령',
            subOrd: 3
          },
          {
            actRmks:
              '개인·금융거래정보를 미리 알고 접근하는 경우에도 내용의 진위를 반드시 확인하시기 바랍니다.',
            contentsType: 1,
            mainOrd: 20,
            safetyCate1: 2,
            safetyCate2: 2008,
            safetyCate3: 2008002,
            safetyCateNm1: '사회재난',
            safetyCateNm2: '금융전산',
            safetyCateNm3: '보이스피싱 피해예방 요령',
            subOrd: 4
          },
          {
            actRmks:
              '피해를 당한 경우 경찰청 112콜센터 또는 금융회사 콜센터로 신속히 지급정지를 요청합니다.',
            contentsType: 1,
            mainOrd: 20,
            safetyCate1: 2,
            safetyCate2: 2008,
            safetyCate3: 2008002,
            safetyCateNm1: '사회재난',
            safetyCateNm2: '금융전산',
            safetyCateNm3: '보이스피싱 피해예방 요령',
            subOrd: 5
          },
          {
            actRmks: '유출된 금융거래정보는 즉시 해지하거나 폐기하시기 바랍니다.',
            contentsType: 1,
            mainOrd: 20,
            safetyCate1: 2,
            safetyCate2: 2008,
            safetyCate3: 2008002,
            safetyCateNm1: '사회재난',
            safetyCateNm2: '금융전산',
            safetyCateNm3: '보이스피싱 피해예방 요령',
            subOrd: 6
          },
          {
            actRmks: '예금통장 및 현금(체크)카드는 타인에게 양도하시면 안됩니다.',
            contentsType: 1,
            mainOrd: 20,
            safetyCate1: 2,
            safetyCate2: 2008,
            safetyCate3: 2008002,
            safetyCateNm1: '사회재난',
            safetyCateNm2: '금융전산',
            safetyCateNm3: '보이스피싱 피해예방 요령',
            subOrd: 7
          },
          {
            actRmks:
              'Q : 보이스피싱 예방 및 피해금 환급은 어떤 과정이 중요한가요? A : 보이스피싱은 예방이 가장 중요합니다. 거래하는 금융회사 또는 보이스피싱 지킴이 (http://phishing-keeper.fss.or.kr)에서 피해예방법을 숙지하고, 피해를 당했을 경우 신속한 지급정지 신청으로 피해금이 인출되는 것을 막아 환급을 받는 것이 중요합니다.',
            contentsType: 1,
            mainOrd: 20,
            safetyCate1: 2,
            safetyCate2: 2008,
            safetyCate3: 2008002,
            safetyCateNm1: '사회재난',
            safetyCateNm2: '금융전산',
            safetyCateNm3: '보이스피싱 피해예방 요령',
            subOrd: 8
          }
        ]
      },
      numOfRows: 10,
      pageNo: 1,
      totalCount: 12
    }
  }
}
export default stockError
