const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	alfa: 'https://api.zeeoneofc.xyz', //apabila link api eror, segera laporkan ke owner
}

// Free apikey
global.APIKeys = {
	'https://api.zeeoneofc.xyz': 'your apikey',  // login https://api.zeeoneofc.xyz to get apikey || https://api-alphabot.herokuapp.com
}

// setting 
global.autoread = true // auto read pesan / message
global.autorecording = true //status auto merekam ( auto record )
global.autoketik = false //status auto mengetik (auto typing)
global.available = true //status online (online)

// Other
global.botname = "PutraBotz-MD⳹" //namabot kalian
global.zifa = "*PutraBotz-MD" //kontol kalian
global.ownername= "*PutraPler-MD⳹" //nama kalian
global.myweb ="https://instagram.com/Putra Nich" //bebas asal jan hapus
global.youtube = "https://youtube.com/channel/U" //bebas asal jan hapus
global.github = "https/github.com/cekilxd/" //bebas
global.email = "putranp2314@gmail.com" //bebas
global.region = "indonesia" //bebas
global.ownernomer = "6283840600765" // nomor wa kalian
global.ownernomerr = "+6283840600765" //nmr wa kalian
global.thumbnail = "./image/rozi.jpg" // ini lol.jpg adalah nama foto di folder image. untuk foto bot
global.donasi = "./image/zifa.jpg" // foto donasi di folder image
global.background_welcome="https://telegra.ph/file/02bc44135c3791d03cdd7.jpg" // maks size 30kb, agar welcome image nya tdk delay
global.owner = ["6283840600765"] //ganti agar fitur owner bisa di gunakan
global.packname = 'PutraBotz-MD' //sticker wm ubah
global.author = 'putra' //sticker wm ganti nama kalian
global.sessionName = 'session'
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    sukses: '🤗Done',
    admin: 'Perintah Ini Hanya Bisa Digunakan Oleh Admin !',
    botAdmin: 'Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Kontol !',
    owner: 'Perintah Ini Hanya Bisa Digunakan Oleh Owner Kontol !',
    group: 'Perintah Ini Hanya Bisa Digunakan Di Group Kontol !',
    private: 'Perintah Ini Hanya Bisa Digunakan Di Private Kontol !',
	bot: 'Fitur Khusus Pengguna Nomor Bot',
    errtoimg: 'Maaf Saat Ini Belum Support Sticker Gif !',
    wait: '⏳  SABAR KONTOL',
	lockCmd: 'Fitur Tidak Diaktifkan Oleh Owner!',
	example1: 'Selamat Datang @user Di Group @subject Jangan Lupa Baca Rules @desc\n\nNote :\n1. @user (Mention User Join)\n2. @bio (Get Bio User Join)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)\n5. @subject (Group Name)'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
