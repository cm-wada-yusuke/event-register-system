import csvAppend from 'csv-append';
import * as fs from 'fs';

const RELATIVE_PATH_TO_CSV = `./out/proposal.csv`;
const { append, end } = csvAppend(RELATIVE_PATH_TO_CSV);

const lines = 100;

for (let i = 1; i <= lines; i++) {
    append({
        タイムスタンプ: '2020/07/27 3:15:06 午後 GMT+9',
        お名前: '和田 祐介',
        メールアドレス: `wada.yusuke+${i}@classmethod.jp`,
        所属組織: 'クラスメソッド株式会社',
        '参加日をお選びください。': '1 日目;2 日目;3 日目',
        セッションタイトル:
            'サーバーレス と ファイル処理：Amazon Athena と Step Functions を組み合わせてファイルを結合する',
        'セッション概要（400字以内）': `サーバーレスでファイルを扱うシーンが増えてきました。AWSで保存しておく場所としてS3は有力ですが、アプリケーションで利用できる形式に変換する方法として、多くの選択肢があります。
このセッションでは、「別々のサービスで発行されたCSVファイルをJOINする」というユースケースに対し、Amazon Athena を使ったアプローチを紹介します。さらに、一連の処理を Step Functions にまとめることで、ジョブとして定義する方法を示します。`,
    });
}

end().then(() =>
    console.log(fs.readFileSync(RELATIVE_PATH_TO_CSV, { encoding: 'utf8' })),
);
