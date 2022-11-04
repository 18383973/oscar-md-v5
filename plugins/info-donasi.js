let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `
「 Suport Bot Dengan Cara donasi 」

⫹⫺ Via Pulsa Indosat : 6285878258447
⫹⫺ Via Dana : 6285878258447
⫹⫺ Via Saweria :
⫹⫺ https://saweria.co/vincenttofc

`.trim()
  m.reply(text)
}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
