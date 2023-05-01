const fs = require('fs');
const QRCode = require('qrcode');

// コマンドライン引数でテキストファイル名を受け取る
const inputFile = process.argv[2];

// ファイルを読み込み、各行を配列に変換
fs.readFile(inputFile, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const urls = data.split('\n').filter(line => line.trim() !== '');

  // 各URLに対してQRコードを生成
  urls.forEach((url, index) => {
    QRCode.toDataURL(url, { errorCorrectionLevel: 'H' }, (err, encodedUrl) => {
      if (err) {
        console.error(err);
        return;
      }

      const base64Data = encodedUrl.replace(/^data:image\/png;base64,/, '');

      fs.writeFile(`output${index + 1}.png`, base64Data, 'base64', (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log(`QRコードが正常に生成されました: output${index + 1}.png`);
        }
      });
    });
  });
});
