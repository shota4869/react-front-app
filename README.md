# 貯金ちゃん


# DEMO
Demo動画↓

https://user-images.githubusercontent.com/81454257/188755706-75c6bc98-ae44-4191-aae8-b7f8cf43b5cd.mp4

ライン連携イメージ↓

![IMG_4310](https://user-images.githubusercontent.com/81454257/188752491-96da5ead-7b30-484d-a987-1486d602600b.PNG)


# 説明
簡単な貯金アプリを制作しました。
認証機能とLineNotifyを用いてライン連携できる機能を実装しています。

LineNotifyの設定方法は下記のURLから参照して、アクセストークン取得後、設定いただければ毎朝8時に通知が来るよう設定しております。
 （https://zenn.dev/protoout/articles/18-line-notify-setup）
 
 レスポンシブ対応しておりますので、IPhoneからでも使用できます。
 
 残課題が残っており順に修正対応をおこなっていきます。
 （emailではなくても登録・ログインできてしまう。etc...）
 
# 使用フレームワーク
 - フロントエンド：React, ChakraUI
 - バックエンド：SpringBoot, Spring Security
 
 ⇨バックエンドは別のリポジトリにて管理（https://github.com/shota4869/springboot-backend）
  
  Qiitaにもまとめています。社内紹介で紹介用に簡単にまとめた記事なので詳細は後日記載予定です。（https://qiita.com/sho0403/items/58a6699672e9cf58f02d）
  
# 起動
フロントエンド：　
```
  yarn start
```
バックエンド：
```
 maven install
 java -jar springboot-rest-api-0.0.1-SNAPSHOT.jar
```

# Author
* takase shota
* takase.shota01@gmail.com
