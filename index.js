//厳密モード
'use strict';
//httpモジュール呼び出し
const http = require('http');
/**
 * サーバー作成
 * 第一引数：サーバーにリクエストがあったときに実行する関数
 */
const server = http.createServer((req, res) => {
    // 現在時刻をミリ秒に変換した数値を代入
    const now = new Date().getTime();
    // Cookieに最終アクセス時間のデータと
    // 有効期限のデータをセットする
    // Cookieの値の最後にはセミコロンが必要
    res.setHeader('Set-Cookie', 'last_access=' + now + ';expires=Mon, 07 Jan 2036 00:00:00 GMT;');
    // 'hi'を書き出して終了
    // res.end('hi');
    // クッキーにセットされた情報を書き出して終了
    // res.end(req.headers.cookie);
    // クッキーが設定されている場合は、
    // "last_access=xxxxxx"という形式で設定されているので
    // 'last_access='でsplitした配列の[1]を取得することで
    // 最終アクセス時間を取得することができる
    // クッキーが設定されていない場合は現在時刻を代入する
    const last_access_time = req.headers.cookie ? parseInt(req.headers.cookie.split('last_access=')[1]) : now;
    // 現在時間をDate形式に変換して、文字列に変換して
    // レスポンスに書き出して終了する
    res.end(new Date(last_access_time).toString());
});
// ポート番号
const port = 8000;
/**
 * サーバーを起動する
 * 第一引数：ポート番号
 * 第二引数：サーバー起動時に実行する関数
 */
server.listen(port, () => {
    console.info('Listening on ' + port);
});