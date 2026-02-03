const compression = require("compression"); // 라이브러리를 통해 설치했으면 꼭 적어주어야 함!
const cors = require("cors"); // 라이브러리를 통해 설치했으면 꼭 적어주어야 함!
const express = require('express');
const {indexRouter} = require("./src/router/indexRouter");

const app = express();
const port = 3000;

// Express 미들웨어 설정

// cors 설정
app.use(cors());

// body json 설정
app.use(express.json());

// HTTP 요청 압축
app.use(compression());

// 라우터 분리
indexRouter(app);

app.get("/users", function (req, res) {
    return res.send("HELLO");
});

app.listen(port, () => {
  console.log(`Express app listening at port: ${port}`)
});