import '../lib/language.js';
let handler = async (m, { conn, args, participants }) => {
    let users = Object.entries(global.db.data.users).map(([key, value]) => {
      return {...value, jid: key}
    })
    
    // Ordina gli utenti per EXP, Unitycoins e Livello
    let sortedExp = users.map(toNumber('exp')).sort(sort('exp'))
    let sortedLim = users.map(toNumber('limit')).sort(sort('limit'))
    let sortedLevel = users.map(toNumber('level')).sort(sort('level'))
    
    let usersExp = sortedExp.map(enumGetKey)
    let usersLim = sortedLim.map(enumGetKey)
    let usersLevel = sortedLevel.map(enumGetKey)
    
    // Numero di utenti da mostrare (default 5, max 10)
    let len = args[0] && args[0].length > 0 ? Math.min(10, Math.max(parseInt(args[0]), 5)) : Math.min(5, sortedExp.length)
    
    let text = `
╭─═[ *${global.t('top_unitycoins_title', m.sender, null, { len: len })}* ]═⋆
│╭─────────···
 ✩│${global.t('your_position_unitycoins', m.sender, null, { position: usersLim.indexOf(m.sender) + 1, total: usersLim.length })}
 ✩│ ${sortedLim.slice(0, len).map(({ jid, limit }, i) => `${i + 1}. ${participants.some(p => jid === p.jid) ? `(${conn.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]} *${limit} ${global.t('unitycoins_symbol', m.sender)}*`).join`\n✩│ `}
  │╰─────────···
  ╰────═┅═────
  
  ╭─═[ *${global.t('top_xp_title', m.sender, null, { len: len })}* ]═⋆
  │╭────────────···
  ✩│${global.t('your_position_xp', m.sender, null, { position: usersExp.indexOf(m.sender) + 1, total: usersExp.length })}
  ✩│ ${sortedExp.slice(0, len).map(({ jid, exp }, i) => `${i + 1}. ${participants.some(p => jid === p.jid) ? `(${conn.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]} *${exp} ${global.t('xp_symbol', m.sender)}*`).join`\n✩│ `}
  │╰────────────···
  ╰─────═┅═─────
  `.trim()
  
    await conn.sendMessage(m.chat, { 
      text, 
      mentions: conn.parseMention(text) 
    }, { quoted: m })
  }
  
  handler.help = ['classifica']
  handler.tags = ['rpg']
  handler.command = /^(classifica|leaderboard|lb|rank|ranking)$/i
  handler.register = true
  
  // Funzioni di utilità
  function sort(property, ascending = true) {
    if (property) return (...args) => args[ascending & 1][property] - args[!ascending & 1][property]
    else return (...args) => args[ascending & 1] - args[!ascending & 1]
  }
  
  function toNumber(property, _default = 0) {
    if (property) return (a, i, b) => {
      return {...b[i], [property]: a[property] === undefined ? _default : a[property]}
    }
    else return a => a === undefined ? _default : a
  }
  
  function enumGetKey(a) {
    return a.jid
  }
  
  export default handler