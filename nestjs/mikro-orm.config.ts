import { Example } from './src/entities/user.entity';

export default {
  entities: [Example],
  dbName: 'postgres',
  type: 'postgresql',
  password: 'postgres',
};
// config消してみて検証
// app.moduleの
// モデル層を作る　コントローラー層をつなぐ　コントローラーのエンドポイント　サーバー外部からhttpメソッド
// nestjsからDBを操作できるようにする
