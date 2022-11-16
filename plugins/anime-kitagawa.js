import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://zenzapis.xyz/randomanime/marin-kitagawa?apikey=a5652f2864'
		conn.sendButton(m.chat, 'Wibu stress', wm, await(await fetch(url)).buffer(), [['Next',`.${command}`]],m)
		}
		handler.command = /^(kitagawa)$/i
		handler.tags = ['anime']
		handler.help = ['kitagawa']
		handler.limit = true
export default handler
