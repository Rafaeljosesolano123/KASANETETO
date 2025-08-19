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
'*💫🌹 Crítico(a) Musical V 🌹💫*': 200,
'*💫🌹 Crítico(a) Musical IV 🌹💫*': 225,
'*💫🌹 Crítico(a) Musical III 🌹💫*': 250,
'*💫🌹 Crítico(a) Musical II 🌹💫*': 275,
'*💫🌹 Crítico(a) Musical I 🌹💫*': 299,
'*🥖💎 Productor(a) de Armonías V 💎🥖*': 300,
'*🥖💎 Productor(a) de Armonías IV 💎🥖*': 325,
'*🥖💎 Productor(a) de Armonías III 💎🥖*': 350,
'*🥖💎 Productor(a) de Armonías II 💎🥖*': 375,
'*🥖💎 Productor(a) de Armonías I 💎🥖*': 399,
'*🎤✨ Prácticante Utaloid V ✨🎤*': 400,
'*🎤✨ Prácticante Utaloid IV ✨🎤*': 425,
'*🎤✨ Prácticante Utaloid III ✨🎤*': 450,
'*🎤✨ Prácticante Utaloid II ✨🎤*': 475,
'*🎤✨ Prácticante Utaloid I ✨🎤*': 499,
'*❤️‍🔥🌹 Vocalista Principal  V 🌹❤️‍🔥*': 500,
'*❤️‍🔥🌹 Vocalista Principal IV 🌹❤️‍🔥*': 525,
'*❤️‍🔥🌹 Vocalista Principal III 🌹❤️‍🔥*': 550,
'*❤️‍🔥🌹 Vocalista Principal II 🌹❤️‍🔥*': 575,
'*❤️‍🔥🌹 Vocalista Principal I 🌹❤️‍🔥*': 599,
'*🎵🎓 Musico Expérimental V 🎓🎵*': 600,
'*🎵🎓 Musico Expérimental IV 🎓🎵*': 625,
'*🎵🎓 Musico Expérimental III 🎓🎵*': 650,
'*🎵🎓 Musico Expérimental II 🎓🎵*': 675,
'*🎵🎓 Musico Expérimental I 🎓🎵*': 699,
'*💥🎤 Maestro(a) de las Notas V 🎤💥*': 700,
'*💥🎤 Maestro(a) de las Notas IV 🎤💥*': 725,
'*💥🎤 Maestro(a) de las Notas III 🎤💥*': 750,
'*💥🎤 Maestro(a) de las Notas II 🎤💥*': 775,
'*💥🎤 Maestro(a) de las Notas I 🎤💥*': 799,
'*🎓💎 Sabio(a) de las Armonias V 💎🎓*': 800,
'*🎓💎 Sabio(a) de las Armonias IV 💎🎓*': 825,
'*🎓💎 Sabio(a) de las Armonias III 💎🎓*': 850,
'*🎓💎 Sabio(a) de las Armonias II 💎🎓*': 875,
'*🎓💎 Sabio(a) de las Armonias I 💎🎓*': 899,
'*💫🌹 Historiador Músical V 🌹💫*':900,
'*💫🌹 Historiador Músical  IV 🌹💫*': 925,
'*💫🌹 Histiriador Músical  III 🌹💫*': 950,
'*💫🌹 Historiador Musical II 🌹💫*': 975,
'*💫🌹 Historiador Musical I 🌹💫*': 999,
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
