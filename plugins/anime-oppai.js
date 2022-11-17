import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://zenzapis.xyz/randomanime/oppai?apikey=a5652f2864'
		conn.sendButton(m.chat, 'Wibu stress', wm, await(await fetch(url)).buffer(), [['Next',`.${command}`]],m)
		}
		handler.command = /^(oppai)$/i
		handler.tags = ['anime']
		handler.help = ['oppai']
		handler.limit = true
export default handler
