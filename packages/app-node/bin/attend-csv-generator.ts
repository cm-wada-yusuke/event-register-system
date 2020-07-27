import csvAppend from 'csv-append';
import * as fs from 'fs';
import * as uuid from 'uuid';

const RELATIVE_PATH_TO_CSV = `./out/attend.csv`;
const { append, end } = csvAppend(RELATIVE_PATH_TO_CSV);

const lines = 100;

for (let i = 1; i <= lines; i++) {
    append({
        タイムスタンプ: '2020/07/27 3:15:06 午後 GMT+9',
        お名前: '和田 祐介',
        メールアドレス: `wada.yusuke+${i}@classmethod.jp`,
        所属組織: 'クラスメソッド株式会社',
        '参加日をお選びください。': '1 日目;2 日目;3 日目',
        食事制限: 'グルテンフリー',
        '到着時に xx 円を支払う必要があることを理解しています': 'はい',
        チケットID: uuid.v4(),
        ユーザーID: uuid.v4(),
    });
}

end().then(() =>
    console.log(fs.readFileSync(RELATIVE_PATH_TO_CSV, { encoding: 'utf8' })),
);
