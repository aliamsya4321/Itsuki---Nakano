import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://zenzapis.xyz/api/morensfw/yuri?apikey=a5652f2864'
	conn.sendButton(m.chat, 'Tch Dasar Sagne🥵', wm, await(await fetch(url)).buffer(), [['Next',`.${command}`]],m)
}
handler.command = /^(yuri)$/i
handler.tags = ['nsfw']
handler.help = ['yuri']
handler.limit = true

export default handler
