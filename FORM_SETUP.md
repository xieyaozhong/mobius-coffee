# Mobius Coffee Business Website

這是 Mobius Coffee 的商業網站版本，可直接上傳到 GitHub Pages 展示，也可以進一步串接 Google Form / Firebase / Django 成為真正收資料的網站。

## 已完成商業化功能

- 首頁商業文案與 CTA
- SEO meta description / Open Graph 分享資訊
- 今日菜單與分類篩選
- 商品加入詢問
- 線上訂位表單
- 活動報名表單
- IG 作品展示圖
- 完整地址與一鍵導航
- Google Maps / Apple Maps 導航
- 複製地址功能
- FAQ 常見問題
- 手機版響應式設計
- 後台 Demo 頁

## 店面資料

地址：台中市北屯區南京東路三段12巷28弄23號  
電話：04-0000-0000  
Email：hello@mobiuscoffee.com

## 如何讓表單真的收到資料

目前表單會在畫面顯示「送出成功」，但尚未連接真正資料庫。

最簡單商業上線方式：

1. 建立 Google Form
2. 檢查 Google Form 原始碼取得 `formResponse` 網址
3. 取得每個欄位的 `entry.xxxxx`
4. 修改 `script.js` 裡面的：
   - `GOOGLE_FORM_URL`
   - `entry.姓名欄位ID`
   - `entry.電話欄位ID`
   - `entry.日期欄位ID`
   - `entry.時間欄位ID`
   - `entry.人數欄位ID`
   - `entry.備註欄位ID`

## 更完整的正式版可以升級

- Firebase Firestore 儲存訂位與活動資料
- Django 後台管理菜單、訂位、活動
- Email 通知
- LINE Notify / LINE Bot 通知
- 自訂網域
- Google Analytics
- Search Console


## 本次新增的完整商業功能

- 個人聯絡信箱：handsomeboy784@gmail.com
- Gmail 一鍵寄信按鈕
- 聯絡我們表單
- 商業合作選項
- 網站開發選項
- 咖啡活動合作選項
- 品牌設計選項
- LINE 官方帳號按鈕位置
- Instagram 按鈕位置
- Facebook 粉專按鈕位置
- Google 商家 / 評價按鈕
- 頁尾完整商業資訊
- 聯絡表單 Google Form 串接預留
