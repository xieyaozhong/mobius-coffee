# Google Form 串接教學

這個網站目前已經預留正式收單程式碼。

你需要做：

1. 建立一份 Google Form
2. 欄位建議：
   - 姓名
   - 電話
   - 日期
   - 時間
   - 人數
   - 備註
3. 打開表單原始碼，搜尋 `formResponse`
4. 把網址貼到 `script.js` 的 `GOOGLE_FORM_URL`
5. 搜尋 `entry.` 找到每個欄位 ID
6. 把 `entry.姓名欄位ID` 等文字換成真正欄位 ID

完成後，客人送出的訂位會進入 Google Form 回覆表。
