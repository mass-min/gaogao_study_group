# スクレイピングはいいぞ

何
---
- 2018/08/08のGAOGAO勉強会「スクレイピングはいいぞ」で使う、ワークショップ的なヤツ用ファイル群です。

使い方
---
### リポジトリをclone
- `git clone git@github.com:mass-min/gaogao_study_group.git` (既にcloneしている場合は不要です)

### masterブランチが最新状態になっているか確認
- `git pull`

### 必要なパッケージをインストール
- `2018_08_08`ディレクトリに移動、ディレクトリのルートで`npm install`

構成
---
package.json                npmでのパッケージ管理用ファイル
package-lock.json           npmでのバージョン指定用ファイル
README.md                   このファイル
scripts
|- get-latest-post-title.js ワークショップでいじる用ファイル
|- sample.js                ワークショップの解答的なファイル
