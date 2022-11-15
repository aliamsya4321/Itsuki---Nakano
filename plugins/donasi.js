let handler =  m => m.reply(`
╭─「 🧚🏻‍♂️ *DONASI* 」
│
├ PULSA / DANA / GOPAY :
├ • *082123019956*
│
├ • SAWERIA
├ https://saweria.co/LorddShenn
│
├ • OWNERKU
├ wa.me/6282123019956
╰───────────
© 𝙋𝙤𝙬𝙚𝙧𝙚𝙙 𝘽𝙮 𝐅𝐢𝐤𝐫𝐢𝐢
`.trim()) // Tambah sendiri kalo mau

handler.menugroup = ['donasi']
handler.tagsgroup = ['group']
handler.command = /^(dona(te|si))$/i

export default handler
