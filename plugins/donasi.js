let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `
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
`

const templateButtons = [
    {index: 1, urlButton: {displayText: '✨ Saweria', url: psaweria}},
    {index: 2, urlButton: {displayText: '📷 Instagram', url: sig}},
    {index: 3, urlButton: {displayText: '🌎 Official Group', url: sgc}},
    {index: 4, quickReplyButton: {displayText: 'Menu', id: '.menu'}},
    {index: 5, quickReplyButton: {displayText: 'Owner', id: '.owner'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: {url: fla + 'Donasi'}
}
conn.sendMessage(m.chat, tm, m)
}

handler.menugroup = ['donasi']
handler.tagsgroup = ['group']
handler.command = /^(dona(te|si))$/i

export default handler
