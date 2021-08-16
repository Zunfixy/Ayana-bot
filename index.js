const Aoijs = require("aoi.js")

const bot = new Aoijs.Bot({
  token: "TOKEN",
  prefix: "$getServerVar[prefix]"
});

bot.onMessage({
 guildOnly: false
});

bot.loadCommands('./commands/');

bot.variables({
  message_snipe: "",
	author_snipe: "",
  warn: "0",
  prefix: "A.",
  lvl: "0",
  rexp: "40",
  exp: "0",
  lvlmsg: "GG! {user.mention} tu es passé au niveau {level}!",
  col: "7000ff",
  bg: "",
  rsystem: "0",
  embedc: "7000FF",
  Money: "0",
  Bank: "0",
  Forcelvl: "0",
  ForceXP: "0",
  ForcereqXP: "100",
  Vitesselvl: "0",
  VitesseXP: "0",
  VitessereqXP: "100",
  Endurancelvl: "0",
  EnduranceXP: "0",
  EndurancereqXP: "100",
  Agilitelvl: "0",
  AgiliteXP: "0",
  AgilitereqXP: "100",
  Controle_armelvl: "0",
  Controle_armeXP: "0",
  Controle_armereqXP: "100",
  Resistancereq: "100",
  Resistancelvl: "0",
  ResistanceXP: "0",
  ChakraXP: "0",
  ChakrareqXP: "100",
  Chakralvl: "0",
  cristaux: "100",
  piece: "500",
  leveltotal: "5",
});

bot.command({
  name: "setprefix",
  aliases: ['prefix'],
  code: `
Le préfixe de ce serveur a été changé avec succès en **$message**
$setServerVar[prefix;$message]
$onlyIf[$checkContains[$message;@everyone;@here]==false;Vous ne pouvez pas mettre le préfixe comme mention!]
$argsCheck[>1;Veuillez fournir un préfixe. ] 
$onlyPerms[manageserver;Pour changer le préfixe du bot sur cette guilde, vous aurez besoin de la permissions \`MANAGE_GUILD\`.]
`
});

bot.command ({
 name: "$alwaysExecute",
 code: `$channelSendMessage[$channelID;$replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[lvlmsg];{user.tag};$userTag];{user.mention};<@$authorID>];{level};$getUserVar[lvl]];{exp};$getUserVar[exp]]]
$setUserVar[lvl;$sum[$getUserVar[lvl];1]]
$setUserVar[rexp;$multi[$getUserVar[rexp];2]]
$onlyIf[$getUserVar[exp]>=$getUserVar[rexp];]
$onlyIf[$getServerVar[rsystem]>=1;]
$onlyForServers[$guildID;]` 
})

bot.command({
    name: "$alwaysExecute",
    code: `$setUserVar[exp;$sum[$getUserVar[exp];$random[1;5]]]
$onlyIf[$getServerVar[rsystem]>=1;]
$onlyForServers[$guildID;]
$cooldown[2s;]`
}) 

bot.command({
    name: "enablerank",
    code: `$description[Le système de mise à niveau a été __Activé__!]
$color[$getVar[embedc]]
$setServerVar[rsystem;1]
$onlyPerms[manageserver;{description:Vous avez besoin de la permission \`MANAGE_SERVER\`.}{color:$getVar[embedc]}]
$cooldown[5s;S'il vous plaît, attendez **%time%**]`
})

bot.command({
    name: "disablerank",
    code: `$description[Le système de mise à niveau a été __Désactivé__!]
$color[$getVar[embedc]]
$setServerVar[rsystem;0]
$onlyPerms[manageserver;{description:Vous avez besoin de la permission \`MANAGE_SERVER\`.}{color:$getVar[embedc]}]
$cooldown[5s;S'il vous plaît, attendez **%time%**]`
})

bot.command({
  name: "update",
  code: `<a:oui:855290012899868692> **|** Mise à jour de toutes les commandes!
$updateCommands
$onlyForIDs[698837292328157224;<a:non:855290147826434068> **|** Seul le développeur de bot peut le faire!] `
})
