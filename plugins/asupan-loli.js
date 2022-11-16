let handler = async (m, { conn, text }) => {
    let yh = global.asupan
    let url = yh[Math.floor(Math.random() * yh.length)]
    conn.sendButton(m.chat, 'Random Video Loli Lucu', 'Lolinya Kaak', url, [['NEXT', '.asupanloli']], m)
  }
  handler.command = /^(asupanloli)$/i
  handler.tags = ['premium']
  handler.help = ['asupanloli']
  handler.premium = true
  export default handler
  
 global.asupan = [
  "https://telegra.ph/file/10069e4217c83c0c4eb9c.mp4",
  "https://telegra.ph/file/842b70b84369622205154.mp4",
  "https://telegra.ph/file/2472cfdd27275b260b9a6.mp4",
  "https://telegra.ph/file/3ad47eb59f31390bcfe15.mp4",
  "https://telegra.ph/file/749b7cff82c81aad91eea.mp4"
]
