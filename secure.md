# Pourquoi mettre en place des mesures de sécurité notre projet ?

Tout d’abord, il est important de mettre en place des mesures de sécurité pour plusieurs grandes raisons :
Protection des données : en protégeant votre système contre les attaques de pirates informatiques, vous pouvez éviter la fuite ou la destruction de données sensibles et confidentielles.
Continuité des activités : en veillant à la sécurité de votre système, vous pouvez minimiser les perturbations et les interruptions de votre activité, ce qui peut améliorer la productivité et la rentabilité.
Conformité réglementaire : certaines industries sont soumises à des réglementations strictes en matière de cybersécurité, telles que les secteurs bancaire et de la santé. En veillant à la cybersécurité de votre système, vous pouvez vous conformer à ces réglementations et éviter les sanctions et les amendes.
Protéger la réputation : une violation de la sécurité de votre système peut avoir des conséquences négatives sur votre réputation auprès de vos clients, partenaires et employés. En veillant à la cybersécurité, vous pouvez minimiser les risques pour votre réputation.
En somme, la cybersécurité est cruciale pour protéger les données, les activités, la conformité réglementaire et la réputation de votre entreprise.
Cela s’inscrit donc bien dans notre projet de marketplace décentraliser 

# Mesure mise en place pour sécuriser nos conteneurs dockers 

Concernant notre projet nos avons décider de mettre en place un système de conteneurisation via une plateforme très connus et fiable dans le domaine de l’informatique « DOCKER ».
Il y a plusieurs raisons pour lesquelles il est important de sécuriser les conteneurs Docker :
Protection des données : les conteneurs peuvent stocker et traiter des données sensibles, il est donc important de les protéger contre les attaques de hackers ou de logiciels malveillants.
Isolation des ressources : les conteneurs Docker sont conçus pour fonctionner de manière isolée les uns des autres, ce qui peut minimiser les risques de propagation de malware et d'autres menaces.
Sécurité des images : les images Docker utilisées pour déployer les conteneurs peuvent contenir des vulnérabilités de sécurité. Il est donc important de vérifier régulièrement les images et de les mettre à jour pour corriger les vulnérabilités connues.
La sécurité des conteneurs Docker est cruciale pour protéger les données, minimiser les risques de propagation de malware et respecter les réglementations en matière de cybersécurité.

Afin de garantir une sécurité correct sur nos conteneurs nous avons décider de mettre en place plusieurs mesures technique.
Voici quelque exemple utilisé pour la sécurité sur des conteneurs, 
/Mettre à jour les images de conteneur : Utilisez toujours des images de conteneur mises à jour pour minimiser les risques de vulnérabilité.
/Utiliser des utilisateurs non privilégiés : Évitez d'exécuter des conteneurs en tant que root ou avec des privilèges élevés.
/Limiter les capacités du système : Limitez les capacités système attribuées à un conteneur pour minimiser les risques de compromission.
/Utiliser un réseau isolé : Isolez les conteneurs dans des réseaux privés pour limiter les attaques à la périphérie.
/Surveiller les activités des conteneurs : Surveillez les activités des conteneurs en utilisant des outils de surveillance et d'analyse de sécurité.
/Éviter les images de conteneur douteuses : N'utilisez pas d'images de conteneur provenant de sources douteuses ou non fiables.

/De notre côté nous avons choisit de partir sur plusieurs mesures dont : 
-	L’utilisation d’images de conteneur mises à jour, fiable et distribuer par un éditeur connus pour minimiser les risques de vulnérabilité.
-	L’utilisation des utilisateurs non privilégiés  afin d’exécutez les conteneurs en tant qu'utilisateur non privilégié pour minimiser les risques de compromission en cas d'exploitation de vulnérabilité.
/Ensuite nous avons décidé de fermer les ports non utilisés sur les conteneurs pour plusieurs raisons.
En fermant les ports non utilisés, ont réduit les attaques potentielles sur le système. Les ports ouverts peuvent être utilisés pour explorer et exploiter les vulnérabilités de sécurité de plus , pour minimiser les risques de fuite de données sensibles ou confidentielles. Ensuite cela permet d’optimiser les ressources du système, telles que la mémoire et le processeur, en limitant le trafic réseau.
La fermeture des ports non utilisés sur les conteneurs Docker peut améliorer la sécurité, la confidentialité, l'optimisation des ressources et la conformité réglementaire du système.
/Ensuite nous avons décidé de mettre en place de la redondance/replicas sur nos conteneurs pour plusieurs raisons.
En utilisant des répliques, on peut garantir une disponibilité élevée pour les applications déployées dans des conteneurs en s'assurant que les applications sont toujours disponibles même en cas de défaillance d'un conteneur.
De plus en ajoutant ou en supprimant des répliques en fonction des besoins, on peut facilement équilibrer la charge pour les applications déployées dans des conteneurs pour optimiser les performances et la disponibilité. Enfin utilisant des répliques, on peut garantir une tolerance aux pannes pour les applications déployées dans des conteneurs en s'assurant que les applications sont toujours disponibles même en cas de défaillance d'un ou plusieurs conteneurs.
 Pour finir la haute disponibilité, on peut garantir une haute disponibilité pour les applications déployées dans des conteneurs en s'assurant que les applications sont toujours disponibles même en cas de défaillance d'un ou plusieurs conteneurs.
En utilisant des répliques pour les conteneurs Docker, on garantis une disponibilité élevée, une scalabilité horizontale et une tolerance aux pannes pour les applications déployées dans des conteneurs. Cela peut aider à améliorer la fiabilité et la disponibilité des applications pour les utilisateurs finaux.

/Ensuite nous avons mis di loadbalancing sur des conteneurs Docker est utilisé pour garantir une répartition équitable de la charge de travail entre les différents conteneurs qui exécutent une application. Cela peut aider à améliorer la disponibilité et la tolérance aux pannes de l'application, car si un conteneur tombe en panne, le trafic sera redirigé vers les autres conteneurs en bon état. Cela peut également améliorer les performances de l'application en répartissant la charge de travail sur plusieurs conteneurs plutôt que de la charger sur un seul.
