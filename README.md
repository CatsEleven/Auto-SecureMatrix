# Auto-SecureMatrix

## 更新履歴
| 日時 | 情報 | バージョン |
| ------- | ------- |------- |
| 2024/4/8 | 公開をはじめました | Ver1.0
| 2024/5/16 | 同じボタンを2回まで押せるように修正しました | Ver1.1
| 2024/5/17 | カラで保存したときにundifinedエラーが出るのを修正しました | Ver1.2

## 機能
ユーザーが登録した順番にしたがって、学生ポータルのSecureMatrixパスワードを自動入力します。  
異なるデバイス間でも、同じGoogleアカウントでログインしていれば設定を同期することができます。

## 制作の背景
学生ポータルでは、住所・成績情報へのアクセス時や、初めてのデバイスでログインする場合（シークレットモード含む）に、SecureMatrixパスワードを求められます。  
しかし、パスワード入力欄が`<input type="password">`になっているため、ブラウザのパスワード入力補助機能が効いてしまい、LDAPパスワードが自動入力されてしまいます。  
毎回、自動入力されるLDAPパスワードを消して打ち直すのも面倒くさいし、SecureMatrixはその特性上、ブラウザのパスワード補完機能が使えないので、HTMLタグを解析して自動入力できれば便利だと思いました。

## 仕組み
1. Auto-SecureMatrix設定画面のマトリクスと、実際のパスワード入力画面のマトリクスには、同じ0～63までのIDが振られています。登録ボタンを押すと、{button要素のID（0～63）: 順番の数字（1～8）,... }が登録されます。
2. パスワード入力画面の数字には、alt属性に画像の数字と同じものが入っています。これを読み取って、自動入力しています。


## 使い方
1. Codeタブをクリックし、Download Zipを押して、Zipファイルをダウンロードします。
<img src='img\md\1.png'></img>
2. Zipファイルを、お使いのPCで解凍します。
3. Google Chromeの右上三点リーダーから「拡張機能」ページを開き「パッケージ化されていない拡張機能を読み込む」をクリックします。
<img src='img\md\2.png'></img>
4. 先ほど解凍したフォルダを指定します。
5. 拡張機能が追加され、右上のジグソーパズルアイコンの中にAuto-SecureMatrixが出現します。
6. Auto-SecureMatrixのアイコンをクリックし、設定画面に入ります。
7. マトリクスに、自身が登録したSecureMatrixパスワードの順番通りにクリックしてください。
<img src='img\md\3.png'></img>
   1. 8コ全て入力できたら「登録」を押してください。
   2. 入力を最初からやり直したいときは「クリア」を押してください。
   3. 登録された順番を削除したいときは「登録抹消」を教えてください。
8. SecureMatrixパスワード入力画面に、自動入力されます。画面中央には自動入力された数字が表示されます。正しいことを確認してください。
<img src='img\md\4-new.png'></img>

## 免責事項
- Google Chrome上のみでの動作を保証しています。
- Microsoft Edge, Firefox, Safari, Firefox for Androidはstorage.syncをサポートするため、動作する可能性はあります。Operaは非対象です。
- 詳しくは、[storage.sync](https://developer.mozilla.org/ja/docs/Mozilla/Add-ons/WebExtensions/API/storage/sync) （MDN Web Docs）をご参照ください。
- <a href="qiita.com/daichi_yamazaki/items/6337e5a5086104bcabf0">DBなしのchrome拡張でsecureに認証情報を扱いたい（qiita.com/daichi_yamazaki/items/6337e5a5086104bcabf0）</a>