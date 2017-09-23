'use strict';
const http = require('http');
const server = http.createServer((req, res) => {
  const now = new Date().getTime();
  res.setHeader('Set-Cookie', 'last_access=' + now + ';expires=Mon, 07 Jan 2036 00:00:00 GMT;');
  const last_access_time = req.headers.cookie ? parseInt(req.headers.cookie.split('last_access=')[1]) : now;

  let lastTimeStr = new Date(last_access_time).toString();
  res.end(lastTimeStr);
  let span = now - last_access_time;
  //一回の更新で２回表示される
  //最初の表示は前回のラストログインと、ラストログインから更新クリックの間の時間のためリクエストの時の？
  //２回目の表示はspanが短いことからレスポンスの時の表示？
  console.log("last = " + lastTimeStr);
  console.log("span = " + (span * 0.001).toFixed(2) + " S");

});
const port = 8000;
server.listen(port, () => {
  console.info('Listening on ' + port);
});