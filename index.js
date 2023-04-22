const fs = require('fs');
const QRCode = require('qrcode');

const text = 'ここに変換したい文字列を入力してください';

QRCode.toDataURL(text, { errorCorrectionLevel: 'H' }, (err, url) => {
  if (err) {
    console.error(err);
    return;
  }

  const base64Data = url.replace(/^data:image\/png;base64,/, '');

  fs.writeFile('output.png', base64Data, 'base64', (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('QRコードが正常に生成されました: output.png');
    }
  });
});
