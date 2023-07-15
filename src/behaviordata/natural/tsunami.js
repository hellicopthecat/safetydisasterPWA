const tsnunami = {
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
              '항만, 포구 등에 정박해 있거나, 해안가에서 조업 중인 선박은 지진해일 발생여부를 인지한 후, 시간적 여유가 있다면 선박을 수심이 깊은 지역으로 이동시킵니다.',
            contentsType: 1,
            mainOrd: 50,
            safetyCate1: 1,
            safetyCate2: 1012,
            safetyCate3: 1012005,
            safetyCateNm1: '자연재난',
            safetyCateNm2: '지진해일',
            safetyCateNm3: '지진해일 내습 시 선박 위에 있다면',
            subOrd: 1
          },
          {
            actRmks:
              '지진해일이 내습하면 항만 등에서 그 파고는 거대해지고 유속이 급격하게 증가하므로 선박의 안전에 특히 주의해야 합니다.',
            contentsType: 1,
            mainOrd: 50,
            safetyCate1: 1,
            safetyCate2: 1012,
            safetyCate3: 1012005,
            safetyCateNm1: '자연재난',
            safetyCateNm2: '지진해일',
            safetyCateNm3: '지진해일 내습 시 선박 위에 있다면',
            subOrd: 2
          },
          {
            actRmks:
              '선박에 대한 조치가 끝난 후에 자신이 육지에 있다면 동료들과 함께 신속히 고지대로 대피합니다.',
            contentsType: 1,
            mainOrd: 50,
            safetyCate1: 1,
            safetyCate2: 1012,
            safetyCate3: 1012005,
            safetyCateNm1: '자연재난',
            safetyCateNm2: '지진해일',
            safetyCateNm3: '지진해일 내습 시 선박 위에 있다면',
            subOrd: 3
          },
          {
            actRmks: '내가 있는 지역이 지진해일의 위험이 있는 지역인지 미리 확인합니다.',
            contentsType: 1,
            mainOrd: 50,
            safetyCate1: 1,
            safetyCate2: 1012,
            safetyCate3: 1012005,
            safetyCateNm1: '자연재난',
            safetyCateNm2: '지진해일',
            safetyCateNm3: '지진해일 내습 시 선박 위에 있다면',
            subOrd: 4
          },
          {
            actRmks:
              '해안가에 있을 때 지진을 느꼈다면 곧 지진해일이 올 수도 있으니 빨리 해안에서 멀리 떨어진 곳으로 대피합니다.',
            contentsType: 1,
            mainOrd: 10,
            safetyCate1: 1,
            safetyCate2: 1012,
            safetyCate3: 1012006,
            safetyCate4: 1012006001,
            safetyCateNm1: '자연재난',
            safetyCateNm2: '지진해일',
            safetyCateNm3: '지진해일이 발생하면 이렇게 대피합니다',
            subOrd: 1
          },
          {
            actRmks:
              '해안에서 지진을 느끼거나 지진해일 특보가 발령되면 지진해일 긴급 대피장소나 높은 곳으로 대피합니다. 피할 시간이 없다면 주변 튼튼한 건물의 3층 이상으로 대피합니다.',
            contentsType: 1,
            mainOrd: 10,
            safetyCate1: 1,
            safetyCate2: 1012,
            safetyCate3: 1012006,
            safetyCate4: 1012006001,
            safetyCateNm1: '자연재난',
            safetyCateNm2: '지진해일',
            safetyCateNm3: '지진해일이 발생하면 이렇게 대피합니다',
            subOrd: 2
          },
          {
            actRmks:
              '지진해일이 오기 전 해안의 바닷물이 갑자기 빠져나가거나, 기차와 같은 큰 소리를 내면서 다가오기도 합니다. 이 때 높은 곳으로 대피합니다.',
            contentsType: 1,
            mainOrd: 10,
            safetyCate1: 1,
            safetyCate2: 1012,
            safetyCate3: 1012006,
            safetyCate4: 1012006001,
            safetyCateNm1: '자연재난',
            safetyCateNm2: '지진해일',
            safetyCateNm3: '지진해일이 발생하면 이렇게 대피합니다',
            subOrd: 3
          },
          {
            actRmks:
              '지진해일은 지진과 마찬가지로 한 번의 큰 파도로 끝나지 않습니다. 지진해일 특보가 해제될 때까지 낮은 곳으로 가지 않습니다.',
            contentsType: 1,
            mainOrd: 10,
            safetyCate1: 1,
            safetyCate2: 1012,
            safetyCate3: 1012006,
            safetyCate4: 1012006001,
            safetyCateNm1: '자연재난',
            safetyCateNm2: '지진해일',
            safetyCateNm3: '지진해일이 발생하면 이렇게 대피합니다',
            subOrd: 4
          },
          {
            actRmks:
              '일반적으로 일본 서해안에서 규모 7.0이상의 지진이 발생하면 약 1~2시간 후 동해안 지역에 약 3~4m 높이의 지진해일이 발생할 수 있습니다.',
            contentsType: 1,
            mainOrd: 10,
            safetyCate1: 1,
            safetyCate2: 1012,
            safetyCate3: 1012006,
            safetyCate4: 1012006001,
            safetyCateNm1: '자연재난',
            safetyCateNm2: '지진해일',
            safetyCateNm3: '지진해일이 발생하면 이렇게 대피합니다',
            subOrd: 5
          },
          {
            contentsType: 1,
            mainOrd: 10,
            safetyCate1: 1,
            safetyCate2: 1012,
            safetyCate3: 1012006,
            safetyCate4: 1012006001,
            safetyCateNm1: '자연재난',
            safetyCateNm2: '지진해일',
            safetyCateNm3: '지진해일이 발생하면 이렇게 대피합니다',
            subOrd: 6
          },
          {
            contentsType: 2,
            contentsUrl:
              'http://mepv2.safekorea.go.kr/mdbs_html/images/mobileWeb/newEarthquake/P13-2.jpg',
            mainOrd: 10,
            safetyCate1: 1,
            safetyCate2: 1012,
            safetyCate3: 1012006,
            safetyCate4: 1012006001,
            safetyCateNm1: '자연재난',
            safetyCateNm2: '지진해일',
            safetyCateNm3: '지진해일이 발생하면 이렇게 대피합니다',
            subOrd: 7
          },
          {
            actRmks: '지진 해일',
            contentsType: 3,
            contentsUrl: 'rtsp://125.60.33.158/Low/Low/TidalWave2.mp4',
            mainOrd: 2,
            platformId: 1,
            safetyCate1: 1,
            safetyCate2: 1012,
            safetyCateNm1: '자연재난',
            safetyCateNm2: '지진해일',
            subOrd: 1
          },
          {
            actRmks: '지진 해일',
            contentsType: 3,
            contentsUrl: 'http://125.60.33.158:1935/Low/Low/mp4:TidalWave2.mp4/playlist.m3u8',
            mainOrd: 2,
            platformId: 2,
            safetyCate1: 1,
            safetyCate2: 1012,
            safetyCateNm1: '자연재난',
            safetyCateNm2: '지진해일',
            subOrd: 1
          },
          {
            actRmks: '지진 해일',
            contentsType: 4,
            contentsUrl: 'rtsp://125.60.33.158/Caption/Caption/TidalWave2_Caption.mp4',
            mainOrd: 2,
            platformId: 1,
            safetyCate1: 1,
            safetyCate2: 1012,
            safetyCateNm1: '자연재난',
            safetyCateNm2: '지진해일',
            subOrd: 1
          },
          {
            actRmks: '지진 해일',
            contentsType: 4,
            contentsUrl:
              'http://125.60.33.158:1935/Caption/Caption/mp4:TidalWave2_Caption.mp4/playlist.m3u8',
            mainOrd: 2,
            platformId: 2,
            safetyCate1: 1,
            safetyCate2: 1012,
            safetyCateNm1: '자연재난',
            safetyCateNm2: '지진해일',
            subOrd: 1
          }
        ]
      },
      numOfRows: 10,
      pageNo: 1,
      totalCount: 15
    }
  }
}

export default tsnunami
