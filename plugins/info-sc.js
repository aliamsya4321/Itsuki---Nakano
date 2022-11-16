/*
 * ngelarang lu biar g diubah kyknya emg susah ya anjg
 * jadi kalau lu g bsa ngehargain orang
 * setidaknya buat sc ori by gw, trs buat sc lu hasil copas tuh
 * better bgtu dripada nma gw dihapus smua
 * najis 👎🗿
*/

import fs from 'fs'
import fetch from 'node-fetch'
import moment from 'moment-timezone'
let handler = async (m, { conn, args, command }) => {
	let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    
    let fgclink = {
           "key": {
               "fromMe": false,
               "participant": "0@s.whatsapp.net",
               "remoteJid": "0@s.whatsapp.net"
           },
           "message": {
               "groupInviteMessage": {
                   "groupJid": "6282127487538-1625305606@g.us",
                   "inviteCode": "null",
                   "groupName": "Halo", 
                   "caption": wm, 
                   'jpegThumbnail': fs.readFileSync('./media/ok.jpg')
               }
           }
       }
       let tag = `@${m.sender.replace(/@.+/, '')}`
  let mentionedJid = [m.sender]
let scnya = ` 𝑯𝒂𝒍𝒍𝒐 ${tag} 𝑳𝒂𝒈𝒊 𝑵𝒚𝒂𝒓𝒊 𝑺𝑪 𝒀𝒂`
    let footerny = `╭═[ *SCRIPT* ]═────···
┴
│ 𝐒𝐜𝐫𝐢𝐩𝐭 : 𝑩𝒂𝒔𝒆
│ ╰ https://github.com/Hyuura-Official/YushinoMdV3
│ 𝐑𝐞𝐜𝐨𝐝𝐞 : 𝑭𝒊𝒌𝒓𝒊𝒊
│ ╰ https://github.com/Akamaru69/Itsuki---Nakano
┬
╰──────────═┅═──────────
📮 𝑺&𝑲
𝑱𝒂𝒏𝒈𝒂𝒏 𝒅𝒊𝒑𝒆𝒓𝒋𝒖𝒂𝒍 𝒃𝒆𝒍𝒊𝒌𝒂𝒏 𝑺𝒄𝒓𝒊𝒑𝒕 𝒊𝒏𝒊
𝑺𝒆𝒃𝒆𝒍𝒖𝒎 𝒑𝒂𝒌𝒂𝒊 𝒋𝒂𝒏𝒈𝒂𝒏 𝒍𝒖𝒑𝒂 𝒌𝒂𝒔𝒊𝒉 𝒔𝒕𝒂𝒓
𝑭𝒐𝒍𝒍𝒐𝒘 𝑮𝒊𝒕𝒉𝒖𝒃 !
𝑱𝒂𝒏𝒈𝒂𝒏 𝒔𝒂𝒍𝒂𝒉 𝒈𝒖𝒏𝒂𝒌𝒂𝒏 𝒔𝒄𝒓𝒊𝒑𝒕 𝒊𝒏𝒊!
`
 conn.send3ButtonImg(m.chat, `https://telegra.ph/file/ca99960e961e46b14fc58.jpg`, scnya, footerny, 'Menu', '.menu', 'Owner', '.owner', 'Donasi', '.donasi', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: 'https://chat.whatsapp.com/DQImxkVI5Z84mUrNO5LzFx',
    mediaType: 2, 
    description: sgc,
    title: "𝑱𝒐𝒊𝒏 𝑺𝒊𝒏𝒊 𝑩𝒂𝒏𝒉",
    body: wm,
    thumbnail: fs.readFileSync('./thumbnail.jpg'),
    sourceUrl: sgc
     }}
  })
}
handler.help = ['sc']
handler.tags = ['info']
handler.command = ['sc','sourlcode']

export default handler


function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  let res = "Sudah Dini Hari Kok Belum Tidur Kak? 🥱"
  if (time >= 4) {
    res = "Pagi Kak 🌄"
  }
  if (time >= 10) {
    res = "Selamat Siang Kak ☀️"
  }
  if (time >= 15) {
    res = "Selamat Sore Kak 🌇"
  }
  if (time >= 18) {
    res = "Malam Kak 🌙"
  }
  return res
}
function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [d, ' *Days ☀️*\n ', h, ' *Hours 🕐*\n ', m, ' *Minute ⏰*\n ', s, ' *Second ⏱️* '].map(v => v.toString().padStart(2, 0)).join('')
}
