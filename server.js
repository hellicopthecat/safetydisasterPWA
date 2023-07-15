// server.js 파일 생성

const express = require('express')
const cors = require('cors')
const app = express()
// 포트 설정 및 서버 시작
const port = 3000

// Express 미들웨어 및 라우팅 설정

app.use(cors())
app.use((req, res, next) => {
  res.setHeader('Content-Security-Policy', 'upgrade-insecure-requests')
  next()
})
app.use(express.static('dist'))

app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`)
})
