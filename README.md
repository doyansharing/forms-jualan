## Form Jualan Input Google SpreadSheet Powered By [Lanzz Store](https://lanzzstore.my.id)

---------

<p align="center">
<img src="https://i.ibb.co/gMY9yvt/1.jpg" width="128" height="128"/>
</p>



---

## Lanzz Store Forms
> Form untuk mengginput data jualan anda di spreadsheet dapat diatur dengan mudah lewat html dan js..
> Jika ada pertanyaan silahkan ke [sini](https://wa.me/6281311268263?text=bang+nanya+dong)

---------

# Instalasi

---------

### Di Laptop
1. Buka link [ini](https://docs.google.com/spreadsheets/)
2. Lalu buat dokumen spreadsheet baru
<p class="center">
  <img src="https://telegra.ph/file/4a97a44453c3065e1b0dd.jpg" alt="contohDokumen" width="70%" height="80%">
</p>
3. Judul bebas dan kalian harus menamakan header selalu di atas jika tidak maka error. Apakah bisa mengganti header dengan yang kita mau?. Tentu Saja! Lihat [VIDIO INI](https://youtu.be/g4wATezvY2o) untuk melihat penjelasan dan caranya.

---------

## Copy ini
```
var sheetName = 'lanzz-store' // sesuaikan dengan nama sheet kamu
var scriptProp = PropertiesService.getScriptProperties()

function intialSetup () {
  var activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet()
  scriptProp.setProperty('key', activeSpreadsheet.getId())
}

function doPost (e) {
  var lock = LockService.getScriptLock()
  lock.tryLock(10000)

  try {
    var doc = SpreadsheetApp.openById(scriptProp.getProperty('key'))
    var sheet = doc.getSheetByName(sheetName)

    var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0]
    var nextRow = sheet.getLastRow() + 1

    var newRow = headers.map(function(header) {
      return header === 'timestamp' ? new Date() : e.parameter[header]
    })

    sheet.getRange(nextRow, 1, 1, newRow.length).setValues([newRow])

    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success', 'row': nextRow }))
      .setMimeType(ContentService.MimeType.JSON)
  }

  catch (e) {
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': e }))
      .setMimeType(ContentService.MimeType.JSON)
  }

  finally {
    lock.releaseLock()
  }
}
```
4. Pilih Extensi Pada spreadsheetnya dan pilih apps script.
<p class="center">
  <img src="https://telegra.ph/file/4543c0fa8538c4d6fc693.jpg" alt="contohDokumen2" width="70%" height="80%">
</p>
5. Timpa kode default dengan kode di atas dari ini.
<p class="center">
  <img src="https://telegra.ph/file/7856074451a8f75cbf6df.jpg" alt="contohDokumen3" width="70%" height="80%">
</p>
6. Setelah anda timpa lalu anda simpan projectnya dengan meklik tombol simpan di kiri atas. dan kemudian tekan jalankan ( anda akan di tinjau izin terlebih dahulu, izinkan saja ). setelah itu Buat Development baru.
<p class="center">
  <img src="https://telegra.ph/file/ab3afdb62356132725c8d.jpg" alt="contohDokumen4" width="70%" height="80%">
</p>
7. Setelah itu ubah kepemilikan menjadi saya. dan option kedua kamu pilih "siapa saja". setelah itu copy linknya
 Kalau ndak paham Nonton [VIDIO INI SAJA](https://youtu.be/g4wATezvY2o)

---------

### Donate
* [Qris](https://telegra.ph/file/a87165740655a7a067a2f.jpg)
* <img src="https://telegra.ph/file/a87165740655a7a067a2f.jpg" alt="Qris" width="340" height="340">

