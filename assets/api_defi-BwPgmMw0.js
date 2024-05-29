const e={fr:{title:"API de gestion de défis d'éco-développement informatique",description:"Création et gestion d'une base de données MongoDB à l'aide de requêtes HTTP",sections:[{subtitle:"Contexte",paragraph:`Dans le cadre de nos cours sur les bases de données NoSQL, nous avons eu un mois pour créer une API à 2 permettant de communiquer avec. 
L'objectif était de nous familiariser avec les opérations CRUD de MongoDB (Create/Read/Update/Delete) tout en faisant travailler nos compétences en ExpressJS.
Notre API devait donc permettre de créer des défis d'éco-conception informatique puis de les modifier, supprimer ou récupérer sous format JSON.
`,image:"/projets/api_mongoDB/mongodb.jpg?url"},{subtitle:"Organisation du projet",paragraph:`Pour optimiser notre temps, nous avons divisé notre projet en 3 axes principaux en se basant sur le modèle MVC (Model-Vue-Controller) :
  - front-end
  - back-end
  - base de données

De mon côté, j'ai démarré en créant une base de données MySql et en utilisant Prisma pour faciliter la communication entre la base de données et le serveur. Du côté de mon collègue, il s'est occupé du front-end à l'aide d'Handlebars, un moteur de template permettant d'insérer directement des données dans une mise en page HTML.

Une fois ces deux parties terminées, nous avons pu les relier ensemble en utilisant ExpressJS pour créer un serveur qui communique avec la base de données et le front-end. Mais pour gérer le serveur, nous avons du gérer les routes et les contrôleurs. 
Cette partie a été la plus complexe pour moi car dès le début il a fallu réfléchir à la meilleure approche au niveau du nombres de routes et de contrôleurs pour éviter d'en avoir trop. Il a fallu aussi créer des middlewares (fonctions qui s'exécutent avant les routes) pour gérer les erreurs et les autorisations. C'était un peu long à faire mais permet de s'assurer que personne ne puisse manipuler les routes pour accéder à des données auxquelles ils n'ont pas accès.
`,image:""},{subtitle:"Retour d'expérience et points d'amélioration",paragraph:`J'ai bien aimé faire ce projet puisque c'était la première fois que je créais une API. J'ai ainsi découvert MongoDB et ses avantages comme l'accès plus facile aux données pour des requêtes simples (comparé aux requêtes SQL).  

Comparé à d'autres projets web, celui-ci demandait plus de compréhension sur les requêtes HTTP (en-têtes, corps, méthodes, etc.) et la sécurité au niveau d'une API avec les jetons d'authentification. J'ai donc appris beaucoup de choses malgré le fait que ce projet était parmi les plus court que j'ai fais.
Et justement, puisque ce projet était assez réduit en terme de fonctionalités, il y a beaucoup de choses que j'aurais aimé ajouter comme :
 - Un système de recherche pour trouver des défis en fonction de leur nom voir même d'autres critères
 - Créer un site web de documentation pour lister les routes disponibles voir même permettre au site d'intéragir avec l'API pour avoir une interface graphique plutôt que de communiquer avec la commande "curl" ou bien un script JS.

Ce sont des idées qui pourraient être longues à rajouter mais permettrait de faire de cette API, un vrai projet d'envergure. 


Lien GitHub : <strong>https://github.com/Bigdil25007/API_MongoDB</strong>
`,image:"/projets/api_mongoDB/testRequest.jpg?url"}],competences:[{techniques:[{skill:"MongoDB",value:90},{skill:"Curl",value:85},{skill:"ExpressJS",value:80},{skill:"Git",value:70}]},{concepts:[{skill:"Requêtes HTTP",value:95},{skill:"JWT (JSON Web Token)",value:85},{skill:"Réponses serveur (JSON et codes HTTP)",value:80}]}],colors:["rgb(25, 135, 84)","rgb(13, 202, 240)","rgb(255, 193, 7)"]}};export{e as default};