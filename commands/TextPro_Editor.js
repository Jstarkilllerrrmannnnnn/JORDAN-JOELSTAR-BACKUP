//-----------------------------------------------------------------------------------
const Secktor = require('../lib')
const Config = require('../config')
const maker = require('mumaker')
let { fancytext, tiny, runtime, formatp, botpic, prefix, sck1, tlang, cmd, fetchJson, getBuffer  } = require("../lib");
const axios = require('axios');
const fetch = require('node-fetch');



//-----------------------------------------------------------------------------------
cmd({ pattern: "glow", category: "logo", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
        if (!text) return citel.reply('*_Example : .steel Suhail Tech_*');
        let anu = await maker.textpro('https://textpro.me/free-advanced-glow-text-effect-873.html', text);
        Void.sendMessage(citel.chat, { image: { url: anu }, caption: `Made by ${tlang().title},For my ${tlang().greet}` }, { quoted: citel });
    })
//---------------------------------------------------------------------------
cmd({
            pattern: "steal",
            category: "logo",
            desc: "Some text to image feature with various styles."
        },
        async(Void, citel, text) => {
            if (!text) return citel.reply('_Example : .steel suhail;tech info_');  
            let text1 = text ? text.split(';')[0] : '';
            let text2 = text ? text.split(';')[1] : '';
            if(!text2 || !text1) return await citel.reply("*Uhh Please Provide text. Example: .steel text1;text2*");
            let anu = await maker.textpro('https://textpro.me/3d-steel-text-effect-877.html', [text1, text2] );
            Void.sendMessage(citel.chat, { image: {url: anu },caption: `Made by ${tlang().title},For my ${tlang().greet}`}, { quoted: citel });
        }
    )

//-----------------------------------------------------------------------------------
cmd({
            pattern: "avenger",
            category: "logo",
            desc: "Some text to image feature with various styles."
        },
        async(Void, citel, text) => {
            if (!text) return citel.reply('*_Example : .avenger suhail;tech_*');  
            let text1 = text ? text.split(';')[0] : '';
            let text2 = text ? text.split(';')[1] : '';
            if(!text2 || !text1) return await citel.reply("*Uhh Please Provide text. Example: .avenger text1;text2*");
            let anu = await maker.textpro('https://textpro.me/create-3d-avengers-logo-online-974.html', [text1, text2] );
            Void.sendMessage(citel.chat, { image: {url: anu },caption: `Made by ${tlang().title},For my ${tlang().greet}`}, { quoted: citel });
        }
    )
//-----------------------------------------------------------------------------------
cmd({
            pattern: "marvel",
            category: "logo",
            desc: "Some text to image feature with various styles."
        },
        async(Void, citel, text) => {
            if (!text) return citel.reply('*_Example : .marvel suhail;tech_*');  
            let text1 = text ? text.split(';')[0] : '';
            let text2 = text ? text.split(';')[1] : '';
            if(!text2 || !text1) return await citel.reply("*Uhh Please Provide text. Example: .marvel text1;text2*");
            let anu = await maker.textpro('https://textpro.me/create-logo-style-marvel-studios-ver-metal-972.html', [text1, text2] );
            Void.sendMessage(citel.chat, { image: {url: anu },caption: `Made by ${tlang().title},For my ${tlang().greet}`}, { quoted: citel });
        }
    )
//-----------------------------------------------------------------------------------
cmd({
            pattern: "phub",
            category: "logo",
            desc: "Some text to image feature with various styles."
        },
        async(Void, citel, text) => {
            if (!text) return citel.reply('*_Example : .phub suhail;tech_*');  
            let text1 = text ? text.split(';')[0] : '';
            let text2 = text ? text.split(';')[1] : '';
            if(!text2 || !text1) return await citel.reply("*Uhh Please Provide text. Example: .phub text1;text2*");
            let anu = await maker.textpro('https://textpro.me/pornhub-style-logo-online-generator-free-977.html', [text1, text2] );
            Void.sendMessage(citel.chat, { image: {url: anu },caption: `Made by ${tlang().title},For my ${tlang().greet}`}, { quoted: citel });
        }
    )
//-----------------------------------------------------------------------------------

cmd({
            pattern: "glitch",
            category: "logo",
            desc: "Some text to image feature with various styles."
        },
        async(Void, citel, text) => {
            if (!text) return citel.reply('*_Example : .glitch suhail;tech_*');  
            let text1 = text ? text.split(';')[0] : '';
            let text2 = text ? text.split(';')[1] : '';
            if(!text2 || !text1) return await citel.reply("*Uhh Please Provide text. Example: .glitch text1;text2*");
            let anu = await maker.textpro('https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html', [text1, text2] );
            Void.sendMessage(citel.chat, { image: {url: anu },caption: `Made by ${tlang().title},For my ${tlang().greet}`}, { quoted: citel });
        }
    )
//-----------------------------------------------------------------------------------
