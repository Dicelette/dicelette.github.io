---
title: Commande slash
---
# Commandes Slash

## Lancer les Dés

Utilisez `/roll 1d20` pour effectuer un lancer de dé. Vous pouvez également utiliser la notation "semi-directe" en ajoutant un commentaire : `/roll 1d20 Mon commentaire`. Veuillez noter que la notation "indirecte" n'est pas disponible dans ce mode.

![Roll](/assets/rolls/slash-commands.gif)

## Créer une Nouvelle Scène

Utilisez `/scene <nom>` pour créer une nouvelle scène. Le bot créera alors un nouveau fil de discussion, préfixé par `🎲`, où il enverra les logs des dés. Ce fil prendra le nom de la `scène`, et tous les autres fils préfixés par `🎲` seront archivés.

![Scene](/assets/rolls/scene.gif)

## Aide

Utilisez `/help` pour afficher le message d'aide.

## Logs

Cette commande permet de configurer un canal pour recevoir tous les logs d'erreur du bot.

Utilisez `/logs <channel>` pour configurer le canal de logs.