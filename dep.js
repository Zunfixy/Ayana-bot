module.exports = ({
name: "deposit",
aliases: "dep",
code: `
$description[Déposé votre argent dans votre banque avec succès]

$setUserVar[Money;$sub[$getUserVar[Money];$replaceText[$message[1];all;$getUserVar[Money];-1]]]

$setUserVar[Bank;$sum[$getUserVar[Bank];$replaceText[$message[1];all;$getUserVar[Money];-1]]]

$onlyIf[$replaceText[$message[1];all;$getUserVar[Money];-1]<=$getUserVar[Money];Vous ne pouvez pas déposer plus que ce que vous avez]
$color[RANDOM]
$onlyIf[$isNumber[$message[1]]>=false;{description:**Échec du dépôt, veuillez saisir un numéro valide.**}{color:RED}]
 `
})
