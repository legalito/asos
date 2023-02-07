#  CHALLENGE 48H - Boutique en ligne décentralisée

---

##  Présentation du projet

En 48 heures chrono, faire un Proof of Concept de boutique en ligne décentralisée permettant aux petits et moyens commerçants de se libérer des gros marketplaces centralisés.
Le réseau de petits commerçants sera réparti comme suit :
- Un réseau de serveurs (appelés "instances") servant chacun leurs propresproduits ainsi que les produits des autres serveurs auxquels ils sontconnectés, sans entité centrale
- Chaque serveur peut accueillir plusieurs commerçants différents
- Via la recherche sur une seule de ces instances, on peut trouver lesproduits de toutes les autres instances connues de celle-ci, y compris lesproduits proposés par leurs propres instances connues, et ainsi de suite.
- Les clients naux créent un compte utilisateur sur une seule de cesinstances et peuventacheter des produits provenant de leur instance de manière classiquepasser commande chez les commerçants des autres instances depuisla leur; le paiement aura lieu sur l'autre instance mais une nouvelleinscription ne sera pas nécessaire.

##  Fonctionnalités attendues

-   Affichage du site et base de données (à vous de décider des données à enregistrer et présenter en vous inspirant des marketplace existants!) 
-   Création de comptes commerçants et clients 
-   Ajout d'instances connectées, présentation des produits des instances concernées et de ses pairs connus. 

##  Fonctionnalités souhaitées :

-   Passer une commande en tant qu'invité sur une autre instance (pas de paiement à mettre en place). 

_(L'idée serait qu'un utilisateur puisse ajouter un produit dans son panier et lors de la commande choisir un mode invité)._

-   En tant qu'administrateur d'une instance, Blacklister des instances concurrentes pour que leurs produits n'apparaissent pas même si notre instance y est indirectement liée. 

# Réflexions attendues pour nos B3
## Développement 
- Comment assurer la performance du système malgré son aspectdistribué en réseau 
- Quelle architecture mettre en place pour permettre la symétrie desinstances les unes par rapport aux autres sans gouvernance centralisée ?
## Cybersécurité 
- Comment sécuriser les nombreuses communications nécessaires 
- Quel protocole utiliser ? Comment authentier les instances les unes par rapport aux autrespour éviter les attaques de type Man in the middle et les usurpations ?
- Comment authentier les utilisateurs d'une instance lorsqu'ilscommandent un produit provenant d'une autre instance ?

# Nos solutions pour répondre au sujet 

- Docker API et BDD replicas avec un communication entre instance via protocol ARP
- Les API comm entre elle 
- un container qui possède une table qui affiche toute les autres API
- Site web hors docker hébergervia VERCEL

# Pour lancer le Projet :  
- Telecharger NodeJS si cela n'est pas deja fais pour pouvoir run le projet : https://nodejs.org/en/download/
- Les commande a effectuer depuis votre éditeur de code source pour pouvoir lancer le projet :
  - 1 git clone https://github.com/legalito/asos.git (Pour avoir le Projet sur son ordinateur)
  - 2 npm i ou npm install (pour effectuer l'installation de NodeJS)
  - 3 npm install next (pour le rendu côté serveur et la génération de sites Web statiques)
  - 4 npm install @mui/icons-material @mui/material @emotion/styled @emotion/react (Pour l'ajout de composant pré fait sur le site)


* Équipe
  . Hugo LE GAL - B3 Dev
  . Georgio SORIN - B3 Dev
  . Nathy MELLAL - B3 Cybersec
  . Mathis AUGEREAU - B2
  . Abakar TIDJANI - B2 
  . Noa DROUINEAU - B1
  . Richard LESIEUR - B1


_Nantes YNOV Campus - Challenge48H - 2022/2023_
