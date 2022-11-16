import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://raw.githubusercontent.com/Akamaru69/Databasee/main/Random%20Anime/yuki.json'
	conn.sendButton(m.chat, 'Pedoo', wm, await(await fetch(url)).buffer(), [['Next',`.${command}`]],m)
}
handler.command = /^(yuki)$/i
handler.tags = ['anime']
handler.help = ['yuki']
handler.limit = true

export default handler
