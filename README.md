# Auto-SecureMatrix

## 使い方
1. Codeタブをクリックし、Download Zip
## 制作の背景
学生ポータルでは、住所・成績情報へのアクセス時や、初めてのデバイスでログインする場合（シークレットモード含む）に、SecureMatrixパスワードを求められます。  
しかし、パスワード入力欄が`<input type="password">`になっているため、ブラウザのパスワード入力補助機能が効いてしまい、LDAPパスワードが自動入力されてしまいます。  
毎回、自動入力されるLDAPパスワードを消して打ち直すのも面倒くさい上、SecureMatrixはその特性上、ブラウザのパスワード補完機能が使えないので、HTMLタグを解析して自動入力できれば便利だと思いました。
## 免責事項
- Google Chrome上のみでの動作を保証しています。
- Microsoft Edge, Firefox, Safari, Firefox for Androidはstorage.syncをサポートするため、動作する可能性はあります。Operaは非対象です。
- 詳しくは、[storage.sync](https://developer.mozilla.org/ja/docs/Mozilla/Add-ons/WebExtensions/API/storage/sync) （MDN Web Docs）をご参照ください。