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
•❤️ .pinterest / #pin - Imágenes Pinterest
•💫 .google - Búsquedas Google
•🌟 .yts / #ytsearch - Videos YouTube
•💥 .imagen / #image - Imágenes Google
•🌹 .infoanime - Info anime/manga
•🥖 .tiktoksearch / #tiktoks - Videos TikTok
•🎓 .githubsearch - Usuarios GitHub
•✨ .cuevana / #cuevanasearch - Películas y series
•❤️‍🔥 .tweetposts - Posts de Twitter/X
•❣️ .hentaisearch - Contenido hentai
•👾 .xnxxsearch / #xnxxs - Videos Xnxx
•👻 .xvsearch / #xvideossearch - Videos Xvideos
•🌷 .pornhubsearch / #phsearch - Videos Pornhub
•💐 .npmjs - Paquetes NPM

📥 *DESCARGAS*
•🍎 .play / #play2 - Música/video YouTube
•☄️ .tiktok / #tt - Videos TikTok
•🔥 .instagram / #ig - Posts Instagram
•💥 .facebook / #fb - Videos Facebook
•🍁 .mediafire / #mf - Archivos MediaFire
•🥖 .mega / #mg - Archivos MEGA
•🪷 .twitter / #x - Videos Twitter/X
•✨ .ytmp3 / #ytmp4 - YouTube por URL
•❤️‍🔥 .pinvid / #pinvideo - Videos Pinterest
•❣️ .terabox / #tb - Archivos Terabox
•👾 .gitclone - Repositorios GitHub
•👻 .apk / #modapk - APKs de Aptoide
•🌷 .xvideosdl - Descargar Xvideos
•💐 .xnxxdl - Descargar Xnxx
•⚡ .tiktokrandom / #ttrandom - TikTok aleatorio
•🍓 .npmdl / #npmdownloader - Paquetes NPM

🎨 *STICKERS*
•🎧 .s / #sticker - Crear sticker
•💓 .toimg / #img - Sticker a imagen
•🌹 .emojimix - Mezclar emojis
•☄️ .qc - Stickers con texto
•👾 .ttp / #attp / #brat - Texto a sticker
• .wm - Cambiar marca de agua
•🌷 .setmeta - Establecer pack y autor
•🍁 .delmeta - Eliminar pack stickers
•🪷 .pfp / #getpic - Foto de perfil

💰 *ECONOMÍA & RPG*
•🎁 .work / #trabajar - Trabajar
•💎 .daily / #diario - Recompensa diaria
•👑 .mine / #mining / #minar - Minar recursos
•🏆 .casino / #apostar - Apostar
•🥀 .cf / #suerte - Cara o cruz
•🥖 .slot - Tragamonedas
•❤️ .ruleta / #roulette / #rt - Ruleta
•👻 .steal / #robar / #rob - Robar dinero
•❤️‍🔥 .robarxp / #robxp - Robar XP
•⚡ .bank / #banco - Ver banco
•💫 .wallet / #cartera - Ver cartera
•💎 .deposit / #depositar / #d - Depositar
•👑 .withdraw / #retirar / #with - Retirar
• .transfer / #pay - Transferir dinero
• .buyall / #buy - Comprar con XP
• .cofre - Cofre diario
• .weekly / #semanal - Regalo semanal
• .monthly / #mensual - Regalo mensual
• .eboard / #baltop - Ranking millonarios
• .aventura / #adventure - Aventurarse
• .curar / #heal - Curar salud
• .cazar / #hunt / #berburu - Cazar
• .inv / #inventario - Ver inventario
• .mazmorra / #explorar - Explorar mazmorras
• .halloween - Dulce o truco
• .christmas / #navidad - Regalo navideño
• .crime / #crimen - Trabajar como ladrón
• .slut / #prostituirse - Trabajo prostituta

🎯 *GACHA & WAIFUS*
• .rollwaifu / #rw / #roll - Buscar waifu
• .claim / #c / #reclamar - Reclamar personaje
• .harem / #waifus / #claims - Ver colección
• .charimage / #waifuimage / #wimage - Imagen personaje
• .charinfo / #winfo / #waifuinfo - Info personaje
• .givechar / #givewaifu / #regalar - Regalar personaje
• .vote / #votar - Votar personaje
• .waifusboard / #waifustop / #topwaifus - Top waifus

🎮 *JUEGOS*
• .ttt - Tres en raya
• .ppt - Piedra/papel/tijera
• .matematicas / #mates - Quiz matemático
• .ahorcado - Juego del ahorcado
• .sopa / #buscarpalabra - Sopa de letras
• .pvp / #suit - PvP contra usuario

👥 *GRUPOS (Solo admins)*
• .hidetag - Mencionar todos oculto
• .kick - Eliminar usuario
• .add / #añadir / #agregar - Invitar usuario
• .promote - Dar admin
• .demote - Quitar admin
• .link - Enlace del grupo
• .revoke / #restablecer - Restablecer enlace
• .group / #grupo [open/close] - Abrir/cerrar grupo
• .warn / #advertir / #warning - Advertir usuario
• .unwarn / #delwarn - Quitar advertencias
• .advlist / #listadv - Ver advertidos
• .mute - Silenciar usuario
• .unmute - Quitar silencio
• .delete / #del - Eliminar mensaje
• .admins / #admin - Mencionar admins
• .gp / #infogrupo - Info del grupo
• .linea / #listonline - Usuarios online
• .setwelcome - Mensaje bienvenida
• .setbye - Mensaje despedida
• .encuesta / #poll - Crear encuesta
• .fantasmas - Ver usuarios inactivos
• .kickfantasmas - Eliminar inactivos
• .invocar / #tagall / #todos - Invocar todos
• .setemoji / #setemo - Cambiar emoji
• .listnum / #kicknum - Eliminar por país
• .gpbanner / #groupimg - Cambiar imagen grupo
• .gpname / #groupname - Cambiar nombre
• .gpdesc / #groupdesc - Cambiar descripción
• .bot on/off - Encender/apagar bot

🛠️ *HERRAMIENTAS*
• .clima / #tiempo - Ver clima
• .translate / #traducir / #trad - Traducir
• .enhance / #remini / #hd - Mejorar imagen
• .calcular / #cal - Calculadora
• .fake / #fakereply - Mensajes falsos
• .letra - Cambiar fuente letras
• .read / #readviewonce / #ver - Ver imágenes una vista
• .whatmusic / #shazam - Identificar canciones
• .ss / #ssweb - Screenshot páginas web
• .length / #tamaño - Cambiar tamaño archivos
• .say / #decir - Repetir mensajes
• .todoc / #todocument - Crear documentos
• .horario - Horario global países

🎌 *ANIME & REACCIONES*
• .hug - Dar abrazos
• .kiss / #besar / #kiss2 - Dar besos
• .pat - Acariciar
• .slap - Abofetear
• .cry - Llorar
• .happy / #feliz - Estar feliz
• .angry / #enojado - Estar enojado
• .love / #amor - Enamorarse
• .bite - Morder
• .bleh - Sacar lengua
• .blush - Sonrojarse
• .bored / #aburrido - Estar aburrido
• .cuddle - Acurrucarse
• .dance - Bailar
• .drunk - Estar borracho
• .eat / #comer - Comer
• .facepalm - Palmada cara
• .impregnate / #preg - Embarazar
• .kill - Matar
• .laugh - Reírse
• .lick - Lamer
• .poke - Picar
• .pout - Hacer pucheros
• .punch - Dar puñetazo
• .run - Correr
• .sad / #triste - Estar triste
• .scared - Estar asustado
• .seduce - Seducir
• .shy / #timido - Sentir timidez
• .dias / #days - Buenos días
• .noches / #nights - Buenas noches
• .sleep - Irse a dormir
• .smoke - Fumar
• .think - Pensar

🔞 *NSFW (Solo +18)*
• .waifu - Waifu NSFW
• .rule34 / #r34 - Buscar R34
• .anal - Contenido anal
• .bath - Bañarse juntos
• .blowjob / #mamada / #bj - Hacer mamada
• .boobjob - Hacer rusa
• .cum - Venirse
• .fap - Hacerse paja
• .ppcouple / #ppcp - Imágenes parejas
• .footjob - Paja con pies
• .fuck / #coger / #fuck2 - Follar
• .cafe / #coffee - Tomar café juntos
• .violar / #perra - Violar
• .grabboobs - Agarrar pechos
• .grop - Manosear
• .lickpussy - Lamer coño
• .sixnine / #69 - Hacer 69
• .spank / #nalgada - Dar nalgada
• .suckboobs - Chupar pechos
• .undress / #encuerar - Desnudar
• .yuri / #tijeras - Hacer tijeras lésbicas

📝 *PERFIL & USUARIO*
• .reg / #verificar / #register - Registrarse
• .unreg - Eliminar registro
• .profile - Ver perfil
• .marry - Casarse
• .divorce - Divorciarse
• .setgenre / #setgenero - Establecer género
• .delgenre / #delgenero - Eliminar género
• .setbirth / #setnacimiento - Fecha nacimiento
• .delbirth / #delnacimiento - Eliminar fecha
• .setdescription / #setdesc - Descripción
• .deldescription / #deldesc - Eliminar descripción
• .lb / #lboard - Top usuarios XP
• .level / #lvl - Ver nivel
• .comprarpremium / #premium - Comprar premium
• .confesiones / #confesar - Confesar sentimientos

⚙️ *INFORMACIÓN & CONFIG*
• .ping / #p - Velocidad bot
• .uptime / #runtime - Tiempo activo
• .serbot / #serbot code - Crear SubBot
• .qr / #code - Código QR SubBot
• .status / #estado - Estado del bot
• .infobot - Info completa bot
• .script / #sc - Código fuente
• .staff / #colaboradores - Desarrolladores
• .bots / #sockets - Lista Sub-Bots
• .links / #grupos - Enlaces oficiales
• .sug / #newcommand - Sugerir comando
• .reporte / #reportar - Reportar errores
• .sistema / #system - Estado sistema
• .speed / #speedtest - Estadísticas velocidad
• .views / #usuarios - Cantidad usuarios
• .funciones / #totalfunciones - Ver funciones
• .ds / #fixmsgespera - Limpiar sesión
• .editautoresponder - Config auto respuesta

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
💙 *¿Tu propio bot?* Usa .code
✨ Escribe el comando para usarlo`.trim()

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
