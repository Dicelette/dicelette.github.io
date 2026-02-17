---
title: La catastrophe du 14/02/2026
description: Le shutdown du samedi 14/02/2026 et quelques réflexions à ce sujet
tags: ["maintenance"]
hide_table_of_contents: false
authors:
  - name: Mara-Li
    image_url: https://avatars.githubusercontent.com/u/30244939?s=64&v=4
    url: https://github.com/Mara-Li
    socials:
      github: Mara-Li
      bluesky: Mara-Li.fr
---

Franchement, j'aurai aimé trouvé un autre moyen d'intégrer une catégories "annonces" sur le site autrement que par cette info.

Comme certains l'auraient vu, le samedi 14/02/2026, le bot a été *down* pendant une grosse partie de la journée. Je vais de ce pas expliquer la catastrophe qu'à été cette journée et les raisons de ce down.

<!--truncate-->

Tout d'abord, il faut savoir que le bot est hébergé chez moi (en France) sur un Raspberry Pi 5. C'est un petit ordinateur qui consomme très peu d'énergie et qui est parfait pour faire tourner un bot (entre autre) Discord 24/7. Cependant, il a ses limites, lié à ma connexion internet et mon électricité (c'est à dire qu'en cas de coupure réseau/électrique, le bot est down, mais ce n'est pas le cas ici... Même si c'est déjà arrivée 🥲).

Le samedi 14/02/2026, vers 9h, j'ai voulu mettre à jour le serveur (mise à jour firmware) car cela n'avait pas été fait depuis un moment. Malheureusement, la mise à jour a échoué et a corrompu le système d'exploitation qui se trouvait sur un disque dur M2 (retenez l'information, elle est importante). 

J'ai essayé de réparer le système en utilisant une carte SD via un lecteur SD, mais... Ce dernier a aussi décidé de mourir. Je devais donc démonter mon ordinateur pour en retirer le disque dur M2 (qui, **heureusement** ne contient pas l'OS de mon PC sinon...) pour y placer celui du Raspberry. J'ai donc, à minima, pu récupérer les données du disque dur M2 (et donc du bot et ses copains) et les transférer sur le pc.

Ne trouvant pas moyen de réparer le système d'exploitation du Raspberry, j'ai décidé de réinstaller une nouvelle image sur le disque dur, mais ça a échoué **plusieurs fois**. Heureusement, j'ai réussi à le réparer via un gros formatage et des réparations de secteurs défectueux (une fois par windows, une fois par linux et une fois totalement raté qui m'a forcé de réinstaller l'OS). J'ai ENSUITE finalement réussi à réinstaller une image stable du système et commencer la seconde restauration (vu que la première, vers 19h, avait échoué).

Puisque ça prend du temps (notamment car je devais copier les données sur mon fixe et j'ai essayé de faire une image d'un disque de 120go), j'ai décidé de host le bot sur mon propre PC en attendant. Sauf que pour brancher le M2, je dois à chaque fois redémarrer l'ordi, ce qui ... Rendait le bot plutôt instable. Notamment car certaines données de mon ordinateur était sur l'autre M2, me forçant à faire des redémarrages pour pouvoir accéder à ces données (et donc au bot).

Bref, après une journée de galère, j'ai réussi à remettre le bot en ligne vers 22h. Je suis vraiment désolé pour cette journée de shutdown. J'aurai pas dûe faire cette mise à jour firmware sans faire de réel back-up, même si j'avoue que je ne pensais pas que le lecteur de SD allait mourir le même jour.
Au moins, aucune donnée n'a été perdue !

Mais dans les faits, j'ai dû : 
- Racheter une carte SD de 32go (parce qu'une de 4go est pas du tout suffisante, même pour du back-up).
- ET racheter un lecteur de carte SD.

N'ayant *toujours pas reçu* (long story short) mon salaire, et même si ce n'est pas grand chose, j'ai perdu 30€ à cause de ce shutdown, ce qui est pas mal pour quelqu'un qui n'a PAS du tout de revenus.

J'aime clairement pas faire la manche, vu que le bot a pour but d'être **GRATUIT** pour **TOUJOURS**, si vous aimez le bot et vous voulez me soutenir, j'ai un KO-FI : [https://ko-fi.com/mara__li](https://ko-fi.com/mara__li) (même 1€ est un gros soutien pour moi, et je vous en serai très reconnaissante).
