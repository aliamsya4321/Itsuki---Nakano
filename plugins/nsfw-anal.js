import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://api.lolhuman.xyz/api/random2/anal?apikey=3c508dcc8d907cdc15404b86'
		conn.sendButton(m.chat, 'Wibu stress', wm, await(await fetch(url)).buffer(), [['Next',`.${command}`]],m)
		}
		handler.command = /^(anal)$/i
		handler.tags = ['nsfw']
		handler.help = ['anal']
		handler.limit = true
export default handler
