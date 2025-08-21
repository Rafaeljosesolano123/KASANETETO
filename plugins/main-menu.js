let handler = async (m, { conn, args }) => {
let userId = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
let user = global.db.data.users[userId]
let name = conn.getName(userId)
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let totalCommands = Object.values(global.plugins).filter((v) => v.help && v.tags).length
    
let txt = `💫 *KASANE TETO BOT* 💫
💥 ¡Hola!, @${userId.split('@')[0]}! 

❤️ *Estado:* ${(conn.user.jid == global.conn.user.jid ? 'Principal ⚡️' : 'Sub-Bot 🔌')}
⏰ *Activo:* ${uptime}
👥 *Usuarios:* ${totalreg}

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

🔍 *BUSCADORES*
•❤️ .pinterest - Imágenes Pinterest
•⏳ .google - Búsquedas Google
•🖥️ .yts -Videos YouTube
•🖼️ .imagen - Imágenes Google
•💡 .infoanime - Info anime/manga
•📱 .tiktoksearch - Videos TikTok
•🎓 .githubsearch - Usuarios GitHub
•🎥 .cuevana - Películas y series
•🐔 .tweetposts - Posts de Twitter/X
•🔞 .hentaisearch - Contenido hentai
•🔞 .xnxxsearch - Videos Xnxx
•🔞 .xvsearch - Videos Xvideos
•🔞 .pornhubsearch - Videos Pornhub
•❓ .npmjs - Paquetes NPM

📥 *DESCARGAS*
•🎵 .play - Música/video YouTube
•🔍 .tiktok - Videos TikTok
•🔮 .instagram - Posts Instagram
•🔎 .facebook - Videos Facebook
•👾 .mediafire - Archivos MediaFire
•🎮 .mega - Archivos MEGA
•✖️ .twitter - Videos Twitter/X
•🛑 .ytmp3 - YouTube por URL
•🎬 .pinvid - Videos Pinterest
•🕹️ .terabox - Archivos Terabox
•📢 .gitclone - Repositorios GitHub
•👾 .apk  - APKs de Aptoide
•🔞 .xvideosdl - Descargar Xvideos
•🔞 .xnxxdl - Descargar Xnxx
•🔞 .tiktokrandom - TikTok aleatorio
•❓ .npmdl - Paquetes NPM

🎨 *STICKERS*
•🖇️ .s - Crear sticker
•🖨️ .toimg - Sticker a imagen
•⌛ .emojimix - Mezclar emojis
•📝 .qc - Stickers con texto
•✏️ .ttp - Texto a sticker
• 💧.wm - Cambiar marca de agua
•🪄 .setmeta - Establecer pack y autor
•❌ .delmeta - Eliminar pack stickers
•📸 .pfp - Foto de perfil

💰 *ECONOMÍA & RPG*
•📠 .work - Trabajar
•💎 .daily - Recompensa diaria
•⛏️ .mine - Minar recursos
•🎰 .casino - Apostar
•🪙 .cf - Cara o cruz
•💸 .slot - Tragamonedas
•🎰 .ruleta - Ruleta
•💰 .steal - Robar dinero
•✨ .robarxp - Robar XP
•🏦 .bank - Ver banco
•💳 .wallet  - Ver cartera
•📥 .deposit - Depositar
•📤 .withdraw  - Retirar
•➡️ .transfer - Transferir dinero
•💲 .buyall - Comprar con XP
•📦 .cofre - Cofre diario
•⏰ .weekly - Regalo semanal
•🗓️ .monthly - Regalo mensual
•🎩 .eboard - Ranking millonarios
•⚔️ .aventura - Aventurarse
•❤️‍🩹 .curar - Curar salud
•🔫 .cazar - Cazar
•📜 .inv - Ver inventario
•🪨 .mazmorra - Explorar mazmorras
•🎃 .halloween - Dulce o truco
•🌨️ .christmas - Regalo navideño
•🔓 .crime - Trabajar como ladrón
•❤️‍🔥 .slut - Trabajo prostituta

🎯 *GACHA & WAIFUS*
•🔥 .rollwaifu - Buscar waifu
•🎖️ .claim - Reclamar personaje
•🛏️ .harem - Ver colección
•📷 .charimage - Imagen personaje
•📋 .charinfo - Info personaje
•🎁 .givechar - Regalar personaje
•✅ .vote - Votar personaje
•🥇 .waifusboard - Top waifus

🎮 *JUEGOS*
•🗒️ .ttt - Tres en raya
•✂️ .ppt - Piedra/papel/tijera
•📚 .matematicas - Quiz matemático
•🪦 .ahorcado - Juego del ahorcado
•🍲 .sopa - Sopa de letras
•🆚 .pvp - PvP contra usuario

👥 *GRUPOS (Solo admins)*
•🔉 .hidetag - Mencionar todos oculto
•🚫 .kick - Eliminar usuario
•🫂 .add - Invitar usuario
•❤️ .promote - Dar admin
•💔 .demote - Quitar admin
•🖇️ .link - Enlace del grupo
•📎 .revoke - Restablecer enlace
•🔐 .group - Abrir/cerrar grupo
•⚠️ .warn - Advertir usuario
•⚠️ .unwarn - Quitar advertencias
•‼️ .advlist - Ver advertidos
•🔇 .mute - Silenciar usuario
•🔈 .unmute - Quitar silencio
•❌ .delete - Eliminar mensaje
•🔊 .admins - Mencionar admins
•📊 .gp - Info del grupo
•💻 .linea - Usuarios online
•👋 .setwelcome - Mensaje bienvenida
•👋 .setbye - Mensaje despedida
•📋 .encuesta - Crear encuesta
•👻 .fantasmas - Ver usuarios inactivos
•💥 .kickfantasmas - Eliminar inactivos
•🔊 .invocar - Invocar todos
•😶‍🌫️ .setemoji - Cambiar emoji
•🏴‍☠️ .listnum - Eliminar por país
•🖼️ .gpbanner - Cambiar imagen grupo
•✏️ .gpname - Cambiar nombre
•📝 .gpdesc - Cambiar descripción
•▶️ .bot on/off - Encender/apagar bot

🛠️ *HERRAMIENTAS*
• .clima - Ver clima
• .translate - traducir
• .enhance - Mejorar imagen
• .calcular - Calculadora
• .fake - Mensajes falsos
• .letra - Cambiar fuente letras
• .read / #readviewonce / #ver - Ver imágenes una vista
• .whatmusic - Identificar canciones
• .ss - Screenshot páginas web
• .length  - Cambiar tamaño archivos
• .say - Repetir mensajes
• .todoc - Crear documentos
• .horario - Horario global países

🎌 *ANIME & REACCIONES*
• .hug - Dar abrazos
• .kiss - Dar besos
• .pat - Acariciar
• .slap - Abofetear
• .cry - Llorar
• .happy - Estar feliz
• .angry - Estar enojado
• .love - Enamorarse
• .bite - Morder
• .bleh - Sacar lengua
• .blush - Sonrojarse
• .bored - Estar aburrido
• .cuddle - Acurrucarse
• .dance - Bailar
• .drunk - Estar borracho
• .eat - Comer
• .facepalm - Palmada cara
• .impregnate - Embarazar
• .kill - Matar
• .laugh - Reírse
• .lick - Lamer
• .poke - Picar
• .pout - Hacer pucheros
• .punch - Dar puñetazo
• .run - Correr
• .sad - Estar triste
• .scared - Estar asustado
• .seduce - Seducir
• .shy - Sentir timidez
• .dias - Buenos días
• .noches - Buenas noches
• .sleep - Irse a dormir
• .smoke - Fumar
• .think - Pensar

🔞 *NSFW (Solo +18)*
• .waifu - Waifu NSFW
• .rule34 - Buscar R34
• .anal - Contenido anal
• .bath - Bañarse juntos
• .blowjob - Hacer mamada
• .boobjob - Hacer rusa
• .cum - Venirse
• .fap - Hacerse paja
• .ppcouple - Imágenes parejas
• .footjob - Paja con pies
• .fuck - Follar
• .cafe - Tomar café juntos
• .violar - Violar
• .grabboobs - Agarrar pechos
• .grop - Manosear
• .lickpussy - Lamer coño
• .sixnine - Hacer 69
• .spank - Dar nalgada
• .suckboobs - Chupar pechos
• .undress - Desnudar
• .yuri - Hacer tijeras lésbicas

📝 *PERFIL & USUARIO*
• .reg - Registrarse
• .unreg - Eliminar registro
• .profile - Ver perfil
• .marry - Casarse
• .divorce - Divorciarse
• .setgenre - Establecer género
• .delgenre - Eliminar género
• .setbirth - Fecha nacimiento
• .delbirth - Eliminar fecha
• .setdescription - Descripción
• .deldescription - Eliminar descripción
• .lb - Top usuarios XP
• .level - Ver nivel
• .comprarpremium - Comprar premium
• .confesiones - Confesar sentimientos

⚙️ *INFORMACIÓN & CONFIG*
• .ping - Velocidad bot
• .uptime - Tiempo activo
• .status - Estado del bot
• .infobot - Info completa bot
• .script - Código fuente
• .staff  - Desarrolladores
• .links - Enlaces oficiales
• .sug - Sugerir comando
• .reporte - Reportar errores
• .sistema - Estado sistema
• .speed - Estadísticas velocidad
• .views - Cantidad usuarios
• .funciones - Ver funciones
• .ds - Limpiar sesión
• .editautoresponder - Config auto respuesta

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❤️ *¿Te gusta el bot?*❤️
💥 Recuerda no abusar de los comandos 💥`.trim()

await conn.sendMessage(m.chat, { 
text: txt,
contextInfo: {
mentionedJid: [userId],
externalAdReply: {                
title: botname,
body: textbot,
mediaType: 1,
mediaUrl: redes,
sourceUrl: redes,
thumbnail: await (await fetch(banner)).buffer(),
showAdAttribution: false,
containsAutoReply: true,
renderLargerThumbnail: true
}}}, { quoted: m })
}

handler.help = ['menu']
handler.tags = ['main']
handler.command = ['menu', 'menú', 'help']

export default handler

function clockString(ms) {
let seconds = Math.floor((ms / 1000) % 60)
let minutes = Math.floor((ms / (1000 * 60)) % 60)
let hours = Math.floor((ms / (1000 * 60 * 60)) % 24)
return `${hours}h ${minutes}m ${seconds}s`
}
