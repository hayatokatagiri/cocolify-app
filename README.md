# 孤立者への支援アプリ Cocolify

## コンセプト

困っている人に、困っていること別に相談機関を提示するアプリ。
　地域ごとに出す。

## 流れ（成果物のゴール）

- 必要な相談機関を現住所から判定し、提示する（ログインしなくても）
- ログイン機能（Sign Up/In）

- 困ったことを入力 → 困ったことがなんなのかを判定

## ソース URL

＜お金、仕事、住宅など、生活に関するお悩み相談＞
https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000073432.html
https://www.gov-online.go.jp/useful/article/201504/2.html#:~:text=%E7%9B%B8%E8%AB%87%E7%AA%93%E5%8F%A3%E3%81%AF%E3%80%81%E9%83%BD%E9%81%93%E5%BA%9C%E7%9C%8C,%E5%B8%82%E7%94%BA%E6%9D%91%E3%81%AB%E3%81%8A%E5%95%8F%E3%81%84%E5%90%88%E3%82%8F%E3%81%9B%E3%81%8F%E3%81%A0%E3%81%95%E3%81%84%E3%80%82

厚生労働省　自立相談支援機関　相談窓口一覧（令和 5 年 4 月１日現在）
https://www.mhlw.go.jp/content/000707280.pdf

＜カウンセリングルーム＞
臨床心理士を探す（日本臨床心理士会の外部リンク）：
http://www.jsccp.jp/near/rinsho/indexsch
https://www.navitime.co.jp/category/0506024/

#　仕様

- フロントエンド　 Typescript/React
- hosting firebase

## スマホの場合

- 「どんなことでお困りですか？」

1. GPS で現在地を取得
   https://memorva.jp/memo/mobile/sp_javascript_gps_geolocation_latitude_longitude.php

2. 近辺の自立支援施設を表示（csv から）

3. メールアドレスが csv にある場合は、相談内容をそのメールアドレスに送信できるようにする

# 手順

下準備：Progate で JS、React などを学ぶ

- 相談施設一覧の csv に、位置情報を追加（python）

# 実装案

## Nav Bar

- ログイン機能（マイページで管理）、ブックマーク機能

### ハンバーガーメニュー　 ≡

- 支援先のブックマーク機能
- 全国のカウンセリングルーム（カウンセラーを検索（外部リンク））
- K6 などのストレスの質問項目を入れる

## その他

- チャット bot の実装（「どうされましたか？」）
  困ったことを入力 -> テキストを AI で分類を判定（金がない、など）-> 結果の表示
  「詳しく書く」に、属性、SES などを入力
  https://spjai.com/category-classification/
- 地域研究との接合
