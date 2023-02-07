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

# Récapitulatif

Dans le principe, nous devions créer une boutique en ligne. En 48h, nous avons réussi à produire un début de site e-commerce. Certaines des fonctionnalités ne sont pas présentes.
L'idée serait de pouvoir créer un compte client, un compte commerçant et un compte administrateur. L'administrateur pourrait gérer les rôles des utilisateurs en les changeant en commerçants. Un utilisateur commerçant pourrait ajouter des produits à sa boutique. Un utilisateur client pourrait ajouter des produits à son panier et passer une commande. Mais aussi un utilisateur pourrait passer une commande en tant qu'invité.

Pour la patie docker, nous avons réussi à mettre en place un reverse proxy et un loadbalancing avec les fichiers de configurations. L'idée final serait à mettre en place une base de données pour chaque boutique.

# Réflexions attendues pour nos B3
Développement 
- Comment assurer la performance du système malgré son aspectdistribué en réseau 
- Quelle architecture mettre en place pour permettre la symétrie desinstances les unes par rapport aux autres sans gouvernance centralisée ?
Cybersécurité 
- Comment sécuriser les nombreuses communications nécessaires 
- Quel protocole utiliser ? Comment authentier les instances les unes par rapport aux autrespour éviter les attaques de type Man in the middle et les usurpations ?
- Comment authentier les utilisateurs d'une instance lorsqu'ilscommandent un produit provenant d'une autre instance ?





* Équipe
  . Hugo LE GAL - B3 Dev
  . Georgio SORIN - B3 Dev
  . Nathy MELLAL - B3 Cybersec
  . Mathis AUGEREAU - B2
  . Abakar TIDJANI - B2 
  . Noa DROUINEAU - B1
  . Richard LESIEUR - B1


_Nantes YNOV Campus - Challenge48H - 2022/2023_
