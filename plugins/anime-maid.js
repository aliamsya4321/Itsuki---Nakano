import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://zenzapis.xyz/randomanime/maid?apikey=a5652f2864'
		conn.sendButton(m.chat, 'Wibu stress', wm, await(await fetch(url)).buffer(), [['Next',`.${command}`]],m)
		}
		handler.command = /^(maid)$/i
		handler.tags = ['anime']
		handler.help = ['maid']
		handler.limit = true
export default handler
