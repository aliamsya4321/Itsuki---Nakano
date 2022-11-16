import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://zenzapis.xyz/randomanime/v2/yuki?apikey=a5652f2864'
	conn.sendButton(m.chat, 'Pedoo', wm, await(await fetch(url)).buffer(), [['Next',`.${command}`]],m)
}
handler.command = /^(yuki)$/i
handler.tags = ['anime']
handler.help = ['yuki']
handler.limit = true

export default handler
