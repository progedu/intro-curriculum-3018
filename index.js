'use strict';
const http = require('http');
const server = http.createServer((req, res) => {
  let accessed;
  if (req.headers.cookie) {
    accessed = Number(req.headers.cookie.split('=')[1]);

    //cookie が文字列できているからNumberに変換
    // = を境で分割し配列に代入 =前がキー値 =の後が値 ...★★★
    //　配列の[1]に入る数字(元文字列)がどこから取得したのかわからない

    // 初回 アクセス→ req.headers.cookie 無し ,accessed = 0 ,accessed++
    //  res.setHeaderでキー値 'Set-cookie',値 'last_access=' 1 が配列で保存される？？
    //  ブラウザにはこのページに 1 回アクセスしましたと表示される
    // 次回以降 →cookie 有り ,last_access = 1　が文字列で出力 → 1を数値にして++で加算したい
    // ★★★より、last_access === Set-Cookie[0], 1 === Set-Cookie[1]のような配列になる？？
    // 1をNumberで数値に変換して、accessed = 1 , accessed ++,
    // ブラウザにはこのページに 2 回アクセスしましたと表示される

  } else {
    accessed = 0;
  }

  if (req.url !== '/favicon.ico') {
    accessed++;
  } 
  //HTTPのレスポンスヘッダのSet-Cookieの項目を利用してブラウザに情報を持たせる
  //TS 19分30秒頃
  res.setHeader('Set-Cookie', 'last_access=' + accessed + ';' + 'expires=Mon, 07 Jan 2036 00:00:00 GMT;');
  res.end('このページに' + accessed + ' 回アクセスしました');
});
const port = 8000;
server.listen(port, () => {
  console.info('Listening on ' + port);
});

