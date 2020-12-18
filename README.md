###### <ins>Explanations / Explications</ins>:  
[english](#new-approach-for-adblockersand-first-proposed-by-k-mikz) | [français](#nouvelle-approche-pour-les-bloqueurs-de-publicitéset-première-fois-proposé-par-k-mikz)<br>   

###### <ins>Requirements</ins> ( for some filters to work / pour que certains filtres fonctionnent ):
[Français] Accédez au tableau de bord "uBlock Origin/Nano Adblocker", sélectionnez <ins>***l'onglet Paramètres***</ins>, cochez <ins>***Activer les fonctionnalités avancées***</ins> puis cliquez sur <ins>***l'icône engrenages***</ins> ⚙ qui s'affiche. Pour <ins>***userResourcesLocation***</ins> (tout en bas), remplacez <ins>***unset***</ins> par [ce fichier de scriptlets](https://github.com/K-mikaZ/new_approach_adb__1st/blob/master/common_utils/Resources/scriptlets.js) (copier/coller l'adresse du code raw `https://raw.githubusercontent.com/K-mikaZ/new_approach_adb__1st/master/common_utils/Resources/scriptlets.js`).<br><br>[english] Go to the "uBlock Origin/Nano Adblocker" dashboard, select <ins>***the Settings tab***</ins>, check <ins>***Activate advanced features***</ins> then click on <ins>***the gears icon***</ins> ⚙ which is displayed. For <ins>***userResourcesLocation***</ins> (at the bottom) replace <ins>***unset***</ins> with [this scriptlets file](https://github.com/K-mikaZ/new_approach_adb__1st/blob/master/common_utils/Resources/scriptlets.js) (copy/paste the address of the raw code `https://raw.githubusercontent.com/K-mikaZ/new_approach_adb__1st/master/common_utils/Resources/scriptlets.js`).   
<br><br>   
LEGEND: Lists with 3 stars (⭒⭒⭒) are in "beta" versions
###### *fr: LEGENDE: Les listes avec 3 étoiles (⭒⭒⭒) sont en versions "beta"*
<br><br>
###### <ins>LISTS</ins> ( subscription / abonnement ):
- "Rules, Filtering and exception list" [[ Install ]](https://subscribe.adblockplus.org/?location=https://raw.githubusercontent.com/K-mikaZ/new_approach_adb__1st/master/KmZ_filters.txt&amp;title=Rules%2C%20Filtering%20and%20exception%20list)
    > ###### *fr: "Règles, filtrage et liste d'exceptions"*
    
- "~~Rules, Filtering, exception list and <ins>no-chromecast</ins>" [[ Install ]](https://subscribe.adblockplus.org?location=https://raw.githubusercontent.com/K-mikaZ/new_approach_adb__1st/master/KmZ_filters_no-chromecast.txt&amp;title=Rules%2C%20Filtering%2C%20exception%20list%20and%20no-chromecast)~~ ⭒⭒⭒ under repair (en réfection)
    > ~~###### *fr: "Règles, filtrage, liste d'exceptions et bloque chromecast"*~~
- "~~Rules, filtering, exception list and blocking antisocial third-party" [[ Install ]](https://subscribe.adblockplus.org?location=https://raw.githubusercontent.com/K-mikaZ/new_approach_adb__1st/master/KmZ_filters_with_antisocial_third-part.txt&amp;title=Rules%2C%20filtering%2C%20exception%20list%20and%20blocking%20antisocial%20third-party)~~ under repair (en réfection)
    > ~~###### *fr: "Règles, filtrage, liste d'exceptions et blocage de tiers antisociaux"*~~
- "~~Rules, filtering, exception list, blocking antisocial third-party and <ins>no-chromecast</ins>" (full) [[ Install ]](https://subscribe.adblockplus.org?location=https://raw.githubusercontent.com/K-mikaZ/new_approach_adb__1st/master/KmZ_filters_no-chromecast_with_antisocial_third-part.txt&amp;title=Rules%2C%20filtering%2C%20exception%2C%20blocking%20antisocial%20third-party%20and%20no%20chromecast)~~ ⭒⭒⭒ under repair (en réfection)
    > ~~###### *fr: "Règles, filtrage, liste d'exceptions, blocage de tiers antisociaux et bloque chromecast" (complet)*~~  
    

###### <ins>EXTRA</ins> ( subscription / abonnement ):
- "No WEBRTC" - Block WEBRTC (Web Real Time Communications), sometimes used for "real-time advertising" [[ Install ]](https://subscribe.adblockplus.org?location=https%3A%2F%2Fraw.githubusercontent.com%2FK-mikaZ%2Fnew_approach_adb__1st%2Fmaster%2Fcommon_utils%2Flists%2F%E2%9C%97to_block%2Fothers%2Fno_webrtc.txt&amp;title=No%20WEBRTC) ⭒⭒⭒
    > ###### *fr: "No WEBRTC" - Bloquer WEBRTC (Web Real Time Communications), parfois utilisé pour "la publicité en temps réel"*
- "Hola Free VPN Popup Remover" (for chrome and firefox, replaces [addon](https://chrome.google.com/webstore/detail/hola-free-vpn-popup-remov/gmfaipdofemomnhpcllkoadpieibiefg)) [[ Install ]](https://subscribe.adblockplus.org?location=https%3A%2F%2Fraw.githubusercontent.com%2FK-mikaZ%2Fnew_approach_adb__1st%2Fmaster%2Fcommon_utils%2Flists%2F%E2%9C%97to_block%2Fothers%2FHola_Free_VPN_Popup_Remover.txt&amp;title=Hola%20Free%20VPN%20Popup%20Remover)
    > ###### *fr: "Hola Free VPN Popup Remover" (pour chrome et firefox, remplace l'[addon](https://chrome.google.com/webstore/detail/hola-free-vpn-popup-remov/gmfaipdofemomnhpcllkoadpieibiefg))*
<br>

###### <ins>USERSCRIPTS</ins> ( for tampermonkey, greasemonkey ... / pour tampermonkey, greasemonkey ... ):<br>
###### USEFUL:
- "You(Tube) nonstop!" (Prevents annoying "video paused" dialogs from showing up) [[ go and click on raw button ]](https://github.com/K-mikaZ/new_approach_adb__1st/blob/master/common_utils/Resources/UserScripts/YTNonStop.user.js)
    > ###### *fr: "You(Tube) nonstop!" (Empêche l'affichage des boîtes de dialogue ennuyeuses "vidéo en pause") [ allez et cliquez sur le bouton raw ]*
###### PRIVACY / SECURITY:
- "Trackerless Magnet URI" (Rewrites all Magnet URI links to forces BitTorrent clients to use trackerless rather than server-assisted peer-discovery.) [[ go and click on raw button ]](https://github.com/K-mikaZ/new_approach_adb__1st/blob/master/common_utils/Resources/UserScripts/TrackerlessMagnetURI.user.js)
    > ###### *fr: "Trackerless Magnet URI" (Réécrit tous les liens URI Magnet pour obliger les clients BitTorrent à utiliser la découverte par les pairs sans suivi plutôt que par le serveur.) [ allez et cliquez sur le bouton raw ]*
<br>

###### <ins>ADDONS/PLUGINS</ins> ( recommended / conseillés ):
- "SponsorBlock for YouTube" [- Removes commercial messages and embedded ads (Enable "Auto Skip" in the settings/options)](https://sponsor.ajay.app)
    > ###### *fr: "SponsorBlock pour YouTube" [- Supprime les messages commerciaux et publicités intégrées (Activez "Passage Automatique" dans les paramètres/options)](https://sponsor.ajay.app)*
<br><br>

###### <ins>Disclaimer</ins>:
[français] Comme il s'agit de mes propres listes de filtres (que je partage ici gracieusement), il peut y avoir des filtres avec lesquels vous n'êtes pas d'accord.<br>Si c'est le cas, n'hésitez pas à cliquer sur le bouton Fork et à créer votre propre liste.<br><br>[english] Since these are my own filter lists (which I am sharing here free of charge), there may be filters with which you do not agree.<br>If so, feel free to click the Fork button and create your own list.

<br>

# Nouvelle approche pour les bloqueurs de publicités<br>et première fois proposé (par K-mik@Z)  
<br>

## [FRANÇAIS](#français)  
<details>
  <summary>Pour la petite histoire...</summary>

  J'ai voulu proposer (sur un [site connu de la communauté](https://github.com/collinbarrett/FilterLists)) une simple liste (non pas de blocage, mais de [redirect-rule](https://github.com/gorhill/uBlock/wiki/Static-filter-syntax#redirect-rule) automatique), pour aider au *noop\** de tous les filtres de blocages (déjà présent dans votre bloqueur de pubs, mais aussi à venir) et qui utilisais pour cela des conditions ( [!#if - !#endif](https://github.com/gorhill/uBlock/wiki/Static-filter-syntax#if-condition) ).
###### *\*noop: pour les non-initiés, équivalent à une réponse vide*.
Mais je n'ai pas rencontrer un franc succès (non pas au niveau de l'hébergeur de listes lui-même, mais plus auprès de la team ublock-origin), [voyez par vous même](https://github.com/collinbarrett/FilterLists/issues/1731). Ma démarche à été critiquée, voire raillée.<br><br>
Je n'ai jamais demandé de retoucher leurs codes, alors pourquoi tant d'hostilité. J'ai juste proposé une liste qu'il suffisait d'installer ou non.

> La règle de redirection n'est pas d'accélérer le navigateur. Elle est utilisée pour réparer les cassures, anti-adblock et faciliter la rédaction de la liste.

OK, alors pourquoi ne pas l'automatisée pour qu'elle s'applique par elle-même (plus simple pour l'écriture de filtres, non?).<br><br>Je ne suis pas codeur, et je dois justifier (par des mesures que je ne peux pas faire car je ne connais pas les outils pour) tout ce que je propose.<br>Quant à moi, je dois me contenter d'hypothèses:

> Je ne pense pas que fournir une réponse sera plus rapide que d'annuler simplement une demande de réseau.

Supposition. En effet, dans de nombreux langages informatiques, une réponse (même vide) vaut toujours mieux que pas de réponse. Cela évite de nombreuses erreurs (ou le non-retour de réponse, si attendue).<br><br>Et dans notre cas, bien souvent, `pas de réponse` = `bloqueurs` = `message "veuillez désactiver votre bloqueur de pubs"`

</details>
<details>
  <summary>Nouvelle approche! De quelle façon?</summary>
  
  Directives de pré-processeur pour les filtres:<br>J'ai décidé d'utiliser (tant que faire ce peut), les conditions ( !#if ) en partant de cet remarque:
> Les conditions prennent en charge tous les opérateurs logiques de base. - [AdguardTeam](https://github.com/AdguardTeam/AdguardBrowserExtension/issues/917#issue-282353661-permalink)

Et [contrairement à ce que pense notre ami](https://github.com/collinbarrett/FilterLists/issues/1731#issuecomment-651969310), ~~je soutiens que les conditions simple sont reconnues~~ je décide quand même de les utiliser.<br><br>Bah oui quoi! L'addon saurait bloquer des éléments, mais ne saurait pas les reconnaître avec des conditions.<br>Essayez pour voir si `google.com, *$image, *$xhr ou *$1p` ne fonctionne pas!<br>Alors pourquoi ne pourrais-t-on pas pas écrire `!#if google.com, !#if image ou !#if (xhr && 1p)` dans ce cas.<br><br>Et si tel est le cas, pourquoi ne pas demander à l'addon de reconnaître des directives basics.<br><br>Si vous n'essayez seulement que ce que vous savez, où est l'opportunité de progresser.<br>

> "Ils ne savaient pas que c'était impossible, alors ils l'ont fait." - Mark Twain

</details>  
<br>  

********************
<br>  

# New approach for adblockers<br>and first proposed (by K-mik@Z)  
<br>

## [ENGLISH](#english)  
<details>
  <summary>For the little story...</summary>

  I wanted to offer (on a [site known to the community](https://github.com/collinbarrett/FilterLists)) a simple list (not of blocking, but automatic [redirect-rule](https://github.com/gorhill/uBlock/wiki/Static-filter-syntax#redirect-rule)), to help the *noop\** of all blocking filters (already present in your ad blocker, but also to come) and which used for that conditions ([!#if - !#endif](https://github.com/gorhill/uBlock/wiki/Static-filter-syntax#if-condition)).
###### *\*noop: for the uninitiated, equivalent to an empty response*.
But I did not meet a great success (not at the level of the list host itself, but more with the ublock-origin team), [see for yourself](https://github.com/collinbarrett/FilterLists/issues/1731). My approach has been criticized, even mocked.<br><br>
I never asked to touch up their codes, so why so much hostility. I just proposed a list whether to install or not.

> The redirect rule is not to speed up the browser. It is used to repair breaks, anti-adblock and to facilitate the drafting of the list.

OK, so why not automate it so that it applies by itself (easier to write filters, right?).<br><br>I'm not a coder, and I have to justify (by measures that I can not do because I do not know the tools for) everything I offer.<br>As for me, I have to settle for assumptions:

> I don't think that providing a response will be faster than simply canceling a network request.

Assumption. Indeed, in many computer languages, a response (even empty) is always better than no response. This avoids many errors (or non-return of response, if expected).<br><br>And in our case, very often, `no response` = `blockers` = `message "please deactivate your ad blocker"`

    
</details>
<details>
  <summary>New approach! How?</summary>
  
  Pre-processor directives for filters:<br>I have decided to use (as much as I can) the conditions ( !#if ) starting from this remark:
> The conditions support all the basic logical operators. - [AdguardTeam](https://github.com/AdguardTeam/AdguardBrowserExtension/issues/917#issue-282353661-permalink)

And [contrary to what our friend thinks](https://github.com/collinbarrett/FilterLists/issues/1731#issuecomment-651969310), ~~I maintain that the simple conditions are recognized~~ I still decide to use them.<br><br>Well yes what! The addon could block elements, but would not recognize them with conditions.<br>Try to see if `google.com, *$image, *$xhr or *$1p` is not working!<br>So why can't we write `!#if google.com, !#if image or !#if (xhr && 1p)` in this case.<br><br>And if that's the case, why not ask the addon to recognize basic directives.<br><br>And if you only try what you know, where is the opportunity to progress.<br>

> "They didn't know it was impossible, so they did it." - Mark Twain

</details>
