# text2qr

文字列をQRコードに変更するプロジェクト。

## 事前準備
以下の事前準備が必要。

- [【Windows/Mac/Linux（Ubuntu）】Node.jsインストール方法](https://qiita.com/ryome/items/eec08b28aff294e8c3d6)

## フォルダ構成

```
.
├─index.js
├─【任意】.txt
├─package-lock.json
├─package.json
└─node_modules
    └─...省略
```

## 使い方

1. テキストファイルを配置する（テキストファイルを1行ずつQRコードに変換する）
2. `npm install` コマンドを実行する
3. `node index.js 【任意】.txt` コマンドを実行する
4. 以下のように `output1.png, output2.png, output3.png...etc` が作成されていれば成功

- テキストファイル
```
http://～
http://～
http://～
...etc
```

- 実行後のフォルダ構成
```
.
├─index.js
├─input.txt
├─output1.png
├─output2.png
├─output3.png
├─package-lock.json
├─package.json
└─node_modules
    └─...省略
```