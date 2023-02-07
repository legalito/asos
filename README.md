# 💤 CHALLENGE 48H - Boutique en ligne décentralisée

---

## 📝 Présentation du projet

En 48 heures chrono, faire un Proof of Concept de boutique en ligne décentralisée permettant aux petits et moyens commerçants de se libérer des gros marketplaces centralisés.

## ⚙️ Fonctionnalités attendues

-   Affichage du site et base de données (à vous de décider des données à enregistrer et présenter en vous inspirant des marketplace existants!) ✅
-   Création de comptes commerçants et clients ✅ _(Système de rôle : Client, Admin, Commerçant)_
-   Ajout d'instances connectées, présentation des produits des instances concernées et de ses pairs connus. ✅

## ⚙️ Fonctionnalités souhaitées :

-   Passer une commande en tant qu'invité sur une autre instance (pas de paiement à mettre en place). 🟠

_(L'idée serait qu'un utilisateur puisse ajouter un produit dans son panier et lors de la commande choisir un mode invité)._

-   En tant qu'administrateur d'une instance, Blacklister des instances concurrentes pour que leurs produits n'apparaissent pas même si notre instance y est indirectement liée. ❌

# Récapitulatif

Dans le principe, nous devions créer une boutique en ligne. En 48h, nous avons réussi à produire un début de site e-commerce. Certaines des fonctionnalités ne sont pas présentes.
L'idée serait de pouvoir créer un compte client, un compte commerçant et un compte administrateur. L'administrateur pourrait gérer les rôles des utilisateurs en les changeant en commerçants. Un utilisateur commerçant pourrait ajouter des produits à sa boutique. Un utilisateur client pourrait ajouter des produits à son panier et passer une commande. Mais aussi un utilisateur pourrait passer une commande en tant qu'invité.

Pour l'API nous avons créer les tables, routes pour les différentes requêtes.

Pour la patie docker, nous avons réussi à mettre en place un reverse proxy et un loadbalancing avec les fichiers de configurations. L'idée final serait à mettre en place une base de données pour chaque boutique.

## Objectif final

L'idée du projet attendu était 
# Réflexions attendues des B3

Voir le fichier `Rendu-B3.pdf`

# 📥 Installation du projet

## Installation de NodeJS


👉🏼 `Installation de NodeJS en LTS` : https://nodejs.org/en/download/

## Installation des packages

Allons dans chaque dossier `front`& `server` et exécutons la commande suivante :

-   Commande : `npm install`

# 🎉 C'est parti !

-   Lançons le projet : `npm run dev`


---


* Équipe
  . Hugo LE GAL - B3 Dev
  . Georgio SORIN - B3 Dev
  . Nathy MELLAL - B3 Cybersec
  . Mathis AUGEREAU - B2
  . Abakar TIDJANI - B2 
  . Noa DROUINEAU - B1
  . Richard LESIEUR - B1


_Nantes YNOV Campus - Challenge48H - 2022/2023_
