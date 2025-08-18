import { canLevelUp } from '../lib/levelling.js'

const roles = {
'*🥖 Estudiante Novato(a) V 🥖*': 0,
'*🥖 Estudiante Novato(a) IV 🥖*': 2,
'*🥖 Estudiante Novato(a) III 🥖*': 4,
'*🥖 Estudiante Novato(a) II 🥖*': 6,
'*🥖 Estudiante Novato(a) I 🥖*': 8,
'*💫 Estudiante Destacado(a) V 💫*': 10,
'*💫 Estudiante Destacado(a) IV 💫*': 12,
'*💫 Estudiante Destacado(a) III 💫*': 14,
'*💫 Estudiante Destacado(a) II 💫*': 16,
'*💫 Estudiante Destacado(a) I 💫*': 18,
'*❤️ Aprendiz Rápido(a) V ❤️*': 20,
'*❤️ Aprendiz Rápido(a) IV ❤️*': 22,
'*❤️ Aprendiz Rápido(a) III ❤️*': 24,
'*❤️ Aprendiz Rápido(a) II ❤️*': 26,
'*❤️ Aprendiz Rápido(a) I ❤️*': 28,
'*✨ Lider del Aula V ✨*': 30,
'*✨ Lider del Aula IV ✨*': 32,
'*✨ Lider del Aula III ✨*': 34,
'*✨ Lider del Aula II ✨*': 36,
'*✨ Lider del Aula I ✨*': 38,
'*❤️‍🔥 Experto(a) en Materias V ❤️‍🔥*': 40,
'*❤️‍🔥 Experto(a) en Materias IV ❤️‍🔥*': 42,
'*❤️‍🔥 Experto(a) en Materias III ❤️‍🔥*': 44,
'*❤️‍🔥 Experto(a) en Materias II ❤️‍🔥*': 46,
'*❤️‍🔥 Experto(a) en Materias I ❤️‍🔥*': 48,
'*💥 Alumno(a) Ejemplar V 💥*': 50,
'*💥 Alumno(a) Ejemplar  IV 💥*': 52,
'*💥 Alumno(a) Ejemplar  III 💥*': 54,
'*💥 Alumno(a) Ejemplar  II 💥*': 56,
'*💥 Alumno(a) Ejemplar  I 💥*': 58,
'*❣️ Compositor Junior V ❣️*': 60,
'*❣️ Compositor Junior  IV ❣️*': 62,
'*❣️ Compositor Junior  III ❣️*': 64,
'*❣️ Compositor Junior  II ❣️*': 66,
'*❣️ Compositor Junior  I ❣️*': 68,
'*❤️🎧 Creador de Contenido V 🎧❤️*': 70,
'*❤️🎧 Creador de Contenido IV 🎧❤️*': 72,
'*❤️🎧 Creador de Contenido III 🎧❤️*': 74,
'*❤️🎧 Creador de Contenido II 🎧❤️*': 76,
'*❤️🎧 Creador de Contenido I 🎧❤️*': 78,
'*💫💥 Lider Estudiantil V 💥💫*': 80,
'*💫💥 Lider Estudiantil  IV 💥💫*': 85,
'*💫💥 Lider Estudiantil  III 💥💫*': 90,
'*💫💥 Lider Estudiantil  II 💥💫*': 95,
'*💫💥 Lider Estudiantil  I 💥💫*': 99,
'*❤️🌹 Experto(a) en Melodías V 🌹❤️*': 100,
'*❤️🌹 Experto(a) en Melodías IV 🌹❤️*': 110,
'*❤️🌹 Experto(a) en Melodías III 🌹❤️*': 120,
'*❤️🌹 Experto(a) en Melodías II 🌹❤️*': 130,
'*❤️🌹 Experto(a) en Melodías I 🌹❤️*': 140,
'*🎤🌟 Compositor Destacado(a) V 🌟🎤*': 150,
'*🎤🌟 Compositor Destacado(a) IV 🌟🎤*': 160,
'*🎤🌟 Compositor Destacado(a) III 🌟🎤*': 170,
'*🎤🌟 Compositor Destacado(a) II 🌟🎤*': 180,
'*🎤🌟 Compositor Destacado(a) I 🌟🎤*': 199,
'*💫🌟 Titán(a) Digital V 🌟💫*': 200,
'*💫🌟 Titán(a) Digital IV 🌟💫*': 225,
'*💫🌟 Titán(a) Digital III 🌟💫*': 250,
'*💫🌟 Titán(a) Digital II 🌟💫*': 275,
'*💫🌟 Titán(a) Digital I 🌟💫*': 299,
'*🎵💎 Guardián(a) de Armonías V 💎🎵*': 300,
'*🎵💎 Guardián(a) de Armonías IV 💎🎵*': 325,
'*🎵💎 Guardián(a) de Armonías III 💎🎵*': 350,
'*🎵💎 Guardián(a) de Armonías II 💎🎵*': 375,
'*🎵💎 Guardián(a) de Armonías I 💎🎵*': 399,
'*🎤✨ Maestro(a) Vocaloid V ✨🎤*': 400,
'*🎤✨ Maestro(a) Vocaloid IV ✨🎤*': 425,
'*🎤✨ Maestro(a) Vocaloid III ✨🎤*': 450,
'*🎤✨ Maestro(a) Vocaloid II ✨🎤*': 475,
'*🎤✨ Maestro(a) Vocaloid I ✨🎤*': 499,
'*🌟💙 Señor(a) de las Melodías V 💙🌟*': 500,
'*🌟💙 Señor(a) de las Melodías IV 💙🌟*': 525,
'*🌟💙 Señor(a) de las Melodías III 💙🌟*': 550,
'*🌟💙 Señor(a) de las Melodías II 💙🌟*': 575,
'*🌟💙 Señor(a) de las Melodías I 💙🌟*': 599,
'*🎵👑 Héroe(a) Musical Inmortal V 👑🎵*': 600,
'*🎵👑 Héroe(a) Musical Inmortal IV 👑🎵*': 625,
'*🎵👑 Héroe(a) Musical Inmortal III 👑🎵*': 650,
'*🎵👑 Héroe(a) Musical Inmortal II 👑🎵*': 675,
'*🎵👑 Héroe(a) Musical Inmortal I 👑🎵*': 699,
'*💫🎤 Maestro(a) del Mundo Virtual V 🎤💫*': 700,
'*💫🎤 Maestro(a) del Mundo Virtual IV 🎤💫*': 725,
'*💫🎤 Maestro(a) del Mundo Virtual III 🎤💫*': 750,
'*💫🎤 Maestro(a) del Mundo Virtual II 🎤💫*': 775,
'*💫🎤 Maestro(a) del Mundo Virtual I 🎤💫*': 799,
'*✨💎 Sabio(a) de las Frecuencias V 💎✨*': 800,
'*✨💎 Sabio(a) de las Frecuencias IV 💎✨*': 825,
'*✨💎 Sabio(a) de las Frecuencias III 💎✨*': 850,
'*✨💎 Sabio(a) de las Frecuencias II 💎✨*': 875,
'*✨💎 Sabio(a) de las Frecuencias I 💎✨*': 899,
'*🌟🎵 Viajero(a) del Ciberespacio V 🎵🌟*': 900,
'*🌟🎵 Viajero(a) del Ciberespacio IV 🎵🌟*': 925,
'*🌟🎵 Viajero(a) del Ciberespacio III 🎵🌟*': 950,
'*🌟🎵 Viajero(a) del Ciberespacio II 🎵🌟*': 975,
'*🌟🎵 Viajero(a) del Ciberespacio I 🎵🌟*': 999,
'*💙👑 Deidad Virtual Eterna V 👑💙*': 1000,
'*💙👑 Deidad Virtual Eterna IV 👑💙*': 2000,
'*💙👑 Deidad Virtual Eterna III 👑💙*': 3000,
'*💙👑 Deidad Virtual Eterna II 👑💙*': 4000,
'*💙👑 Deidad Virtual Eterna I 👑💙*': 5000,
'*🎤✨💫 Gran Diva del Infinito Digital 💫✨🎤*': 10000,
}

let handler = m => m
handler.before = async function (m, { conn }) {
    
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let user = global.db.data.users[m.sender]
    
    let level = user.level
    let before = user.level * 1
    
    while (canLevelUp(user.level, user.exp, global.multiplier)) 
        user.level++
    
    if (before !== user.level) {
        let especial = 'coin'
        let especial2 = 'exp'
        let especialCant = Math.floor(Math.random() * (100 - 10 + 1)) + 10
        let especialCant2 = Math.floor(Math.random() * (100 - 10 + 1)) + 10

        if (user.level % 5 === 0) {
            user[especial] += especialCant
            user[especial2] += especialCant2
        }
    }

    let role = (Object.entries(roles).sort((a, b) => b[1] - a[1]).find(([, minLevel]) => level >= minLevel) || Object.entries(roles)[0])[0]
    user.role = role

    return !0
}

export default handler
