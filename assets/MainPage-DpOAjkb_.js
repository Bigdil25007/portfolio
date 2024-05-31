import{_ as C,F as H,H as z}from"./Footer-D6VoVSZz.js";import{_ as v,u as _,r as h,w,o as q,a as D,b as r,c,d as t,t as u,e as y,f as l,g as f,h as I,p as M,i as T,F as m,j as E,n as N,k as b,l as k,m as F,q as L}from"./index-D6rc_AFL.js";import{f as x,P as U}from"./ProgressBar-BTQ71Lv8.js";import A from"./Caroussel-B2MLRC5j.js";import j from"./Banner-DjoDUSz8.js";const P={fr:{h1:"à la recherche d'un développeur web backend ?",h2:`Ça tombe bien je suis passionné par ce domaine !
Découvrez juste en dessous mon profil et mes projets
`,button_text:"Qui suis-je ?",button_link:"/fr/#about-me"},en:{h1:"Looking for a backend web developer?",h2:`You're in luck, I'm passionate about this field!
Discover my profile and projects just below
`,button_text:"Who am I ?",button_link:"/en/#about-me"}},O=o=>(M("data-v-89b64e3d"),o=o(),T(),o),G=O(()=>t("div",{id:"particles-js"},null,-1)),Q={class:"content"},R=["innerHTML"],W={__name:"Accueil",setup(o){const a=_(),e=h(P[a.params.lang]);return w(()=>a.params.lang,i=>{e.value=P[i]}),q(()=>{particlesJS.load("particles-js","/particle-js/particles.json?url")}),(i,d)=>{const n=D("router-link");return r(),c("section",null,[G,t("div",Q,[t("h1",null,u(e.value.h1),1),t("h2",{innerHTML:y(x)(e.value.h2)},null,8,R),t("button",null,[l(n,{to:e.value.button_link},{default:f(()=>[I(u(e.value.button_text),1)]),_:1},8,["to"])])])])}}},Y=v(W,[["__scopeId","data-v-89b64e3d"]]),$={fr:{id:"about-me",title:"Faisons connaissance :)",paragraph:`Hello ! Moi c'est Bilal Oulahal, développeur junior en backend âgé de 20 ans.
Je suis actuellement en formation pour obtenir un BUT Informatique (Bac+3) et compte par la suite continuer mes études pour obtenir un **diplôme d'ingénieur**. Je serais donc encore étudiant pendant quelques années mais souhaite dès maitenant me mettre en avant sur internet pour attirer les profils intéressés.
Vous pourrez retrouver sur ce site mon parcours, mes compétences (non exhaustif) et mes projets majeurs.

N'hésitez pas à me contacter grâce au **formulaire en fin de page**.
Vous pourriez découvrir un jeune aficionado de **musique** de tout genre qui se donne autant à fond dans l'informatique que dans le **sport** !
`,img:{src:"/divers/profile.jpg?url",alt:"Photo de profil"}},en:{id:"about-me",title:"Let's get to know each other :)",paragraph:`Hello! My name is Bilal Oulahal, a 20-year-old junior backend developer. 
I'm currently studying for a Bachelor's degree in Computer Science and plan to continue my education to become an **engineer**. I'll be a student for a few more years, but I want to start showcasing myself online to attract interested people. 
On this website, you can find my background, my skills (non-exhaustive), and my major projects.

Feel free to contact me using the **form at the end of the page**.
You'll discover a young **music** aficionado who is as passionate about computer science as he is about **sports**.
`,img:{src:"/divers/profile.jpg?url",alt:"Profile Photo"}}},X={class:"profil"},K={class:"content"},Z=["src","alt"],ee={class:"text"},te=["innerHTML"],ne={__name:"Profil",setup(o){const a=_(),e=h($[a.params.lang]);return w(()=>a.params.lang,i=>{e.value=$[i]}),(i,d)=>(r(),c(m,null,[l(C,{id:e.value.id},null,8,["id"]),t("section",X,[t("h1",null,u(e.value.title),1),t("div",K,[t("img",{src:e.value.img.src,alt:e.value.img.alt},null,8,Z),t("div",ee,[t("p",{innerHTML:y(x)(e.value.paragraph)},null,8,te)])])])],64))}},ae=v(ne,[["__scopeId","data-v-9b0983be"]]),oe=["innerHTML"],re=["src"],se={__name:"TimelineItem",props:{imageUrl:{type:String,default:""},date:{type:String,required:!0},title:{type:String,default:""},paragraph:{type:String,required:!0}},setup(o){return(a,e)=>(r(),c("li",{class:N(a.$attrs.class)},[t("div",null,[t("time",null,u(o.date),1),t("h2",null,u(o.title),1),t("p",{innerHTML:y(x)(o.paragraph)},null,8,oe),o.imageUrl?(r(),c("img",{key:0,src:o.imageUrl,alt:""},null,8,re)):E("",!0)])],2))}},ie=v(se,[["__scopeId","data-v-0c838316"]]),V={fr:{id:"parcours",title:"Mon parcours",description:"Découvrez ci-dessous mon parcours professionnel dans le domaine du développement web",items:[{date:"2024",title:"Développeur logiciel chez OVHcloud (stage de 3 mois)",imageUrl:"/parcours/ovh.webp?url",paragraph:`Création d'un assistant logiciel d'installation (wizard) en utilisant Electron et **ReactJS**. 
Utilisation d'outils collaboratifs comme BitBucket **(Git)** et Jira  avec le framework AGILE.
`},{date:"2022 - Aujourd'hui",title:"BUT Informatique (Parcours : Réalisation d'applications)",imageUrl:"/parcours/iut.webp?url",paragraph:`Création de projets d'équipe (que vous pouvez retrouver sur ce site !) comme des applications webs ou jeux vidéos. 
Découverte de nombreux frameworks comme **VueJS et ExpressJS**.
Utilisation en majorité de **NodeJS** pour les applis web (gestion de routage et communication avec des API ou bases de données).
`},{date:"2023",title:`Obtention d'une certification "Introduction to Cyber Security" (Cisco)`,paragraph:`Intéressé par la cybersécurité, j'ai suivi un module pour comprendre les bases de ce domaine.
À la fin de cette formation, j'ai obtenu une certification de la part de Cisco, entreprise reconnue de réseau et cybersécurité.
J'ai ainsi appris les menaces courantes sur les sites webs et comment s'en protéger (ex : injections SQL ou XSS)
**(Certification visible sur mon profil LinkedIn)**
`},{date:"2019 - 2022",title:"BAC Général (Spécialité NSI)",paragraph:`NSI : Numérique et Sciences de l'Informatique
Découverte de la programmation à l'aide de Python, des bases de données avec SQL et du développement web de manière plus concrète.

C'est à cette période que je me suis plus orienté dans le backend par préférence, comparé au front-end.
`},{date:"2019",title:"Stage de découverte du développement web",imageUrl:"/parcours/adista.jpg?url",paragraph:`Première expérience avec le développement web lors d'un stage de découverte du monde professionnel.
C'est à cette occasion que j'ai découvert pour la première fois ce domaine. L'ayant trouvé intéressant, j'ai alors démarré par apprendre les rudiments : HTML, CSS et JavaScript.
`}]},en:{id:"parcours",title:"My career",description:"Discover my professional journey in the field of web development below",items:[{date:"2024",title:"Software Developer at OVHcloud (3-month internship)",imageUrl:"/parcours/ovh.webp?url",paragraph:`Creation of an installation assistant (wizard) using Electron and **ReactJS**.  Utilized collaborative tools like BitBucket **(Git)** and Jira with the AGILE framework.
`},{date:"2022 - Present",title:"Bachelor's Degree in Computer Science (Specialization: Application Development)",imageUrl:"/parcours/iut.webp?url",paragraph:`Creation of team projects (which you can find on this site !) such as web applications or video games. Exploration of numerous frameworks like **VueJS and ExpressJS**. Extensive use of **NodeJS** for web apps (handling routing and communication with APIs or databases).
`},{date:"2023",title:'Obtained a certification "Introduction to Cyber Security" (Cisco)',paragraph:`Interested in cybersecurity, I completed a module to understand the basics of this field.
At the end of this training, I obtained a certification from Cisco, a renowned company in networking and cybersecurity.
I learned about common threats to websites and how to protect against them (e.g., SQL injections or XSS).
**(Certification visible on my LinkedIn profile)**
`},{date:"2022",title:"General Baccalaureate (Specialization: NSI)",paragraph:`NSI: Digital and Computer Science (in french) Introduction to programming with Python, databases with SQL, and more concrete web development.
It was during this period that I developed a preference for backend development over frontend.
`},{date:"2019",title:"Web Development Discovery Internship",imageUrl:"/parcours/adista.jpg?url",paragraph:`First experience with web development during an introductory internship in the professional world. It was on this occasion that I discovered this field for the first time. Finding it interesting, I began by learning the basics: HTML, CSS, and JavaScript.
`}]}},le={class:"title"},ce={class:"timeline"},ue={__name:"Parcours",setup(o){const a=_(),e=h(V[a.params.lang]);w(()=>a.params.lang,n=>{e.value=V[n]});function i(n){var s=n.getBoundingClientRect();return s.top>=0&&s.left>=0&&s.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&s.right<=(window.innerWidth||document.documentElement.clientWidth)}function d(n){for(var s=0;s<n.length;s++)!n[s].classList.contains("in-view")&&i(n[s])&&n[s].classList.add("in-view")}return q(()=>{const n=document.querySelectorAll(".timeline li");window.addEventListener("load",()=>d(n)),window.addEventListener("resize",()=>d(n)),window.addEventListener("scroll",()=>d(n))}),(n,s)=>(r(),c(m,null,[l(C,{id:e.value.id},null,8,["id"]),t("section",null,[t("div",le,[t("h1",null,u(e.value.title),1),t("h2",null,u(e.value.description),1)]),t("div",ce,[t("ul",null,[(r(!0),c(m,null,b(e.value.items,(g,p)=>(r(),k(ie,F({key:p,ref_for:!0},g),null,16))),128))])])])],64))}},de=v(ue,[["__scopeId","data-v-e4c5e227"]]),pe={class:"cv"},me=["src"],he={__name:"CV",props:{content:{type:Object,required:!0}},setup(o){return(a,e)=>(r(),c("div",pe,[t("img",{src:o.content.pdfImagePath,alt:"Curriculum Vitae"},null,8,me),t("button",{type:"submit",onClick:e[0]||(e[0]=()=>{a.window.open(o.content.pdfFilePath)})},u(o.content.buttonText),1)]))}},ve=v(he,[["__scopeId","data-v-4ad368af"]]),B={fr:{id:"competences",title:"Compétences",description:"Voici les compétences que j'ai acquises au cours de mes études et de mes expériences professionnelles",list:[{backend:[{skill:"NodeJS",value:85},{skill:"PHP",value:55}]},{frontend:[{skill:"VueJS",value:90},{skill:"ReactJS",value:80},{skill:"CSS",value:65}]},{"Bases de données":[{skill:"MySQL",value:80},{skill:"MongoDB",value:90}]},{outils:[{skill:"Git",value:85}]}],colors:["rgb(25, 135, 84)","rgb(13, 202, 240)","rgb(255, 193, 7)"],cv:{pdfImagePath:"/cv/CV.jpg?url",pdfFilePath:"/cv/CV.pdf?url",buttonText:"Télécharger"}},en:{id:"competences",title:"Skills",description:"Here are the skills I have acquired during my studies and professional experiences",list:[{backend:[{skill:"NodeJS",value:85},{skill:"PHP",value:55}]},{frontend:[{skill:"VueJS",value:90},{skill:"ReactJS",value:80},{skill:"CSS",value:65}]},{Databases:[{skill:"MySQL",value:80},{skill:"MongoDB",value:90}]},{tools:[{skill:"Git",value:85}]}],colors:["rgb(25, 135, 84)","rgb(13, 202, 240)","rgb(255, 193, 7)"],cv:{pdfImagePath:"/cv/CV-EN.jpg?url",pdfFilePath:"/cv/CV-EN.pdf?url",buttonText:"Download"}}},ge={class:"title"},fe={class:"content"},be={class:"list"},_e={style:{textTransform:"capitalize"}},we={__name:"Competences",setup(o){const a=_(),e=h(B[a.params.lang]);return w(()=>a.params.lang,i=>{e.value=B[i]}),(i,d)=>(r(),c(m,null,[l(C,{id:e.value.id},null,8,["id"]),t("section",null,[t("div",ge,[t("h1",null,u(e.value.title),1),t("h2",null,u(e.value.description),1)]),t("div",fe,[t("div",be,[(r(!0),c(m,null,b(e.value.list,(n,s)=>(r(),c("div",{key:s,class:"category"},[t("h3",_e,u(Object.keys(n)[0]),1),(r(!0),c(m,null,b(n[Object.keys(n)[0]],(g,p)=>(r(),k(U,{key:p,title:g.skill,fill:g.value,color:e.value.colors[s]},null,8,["title","fill","color"]))),128))]))),128))]),l(ve,{content:e.value.cv},null,8,["content"])])])],64))}},ke=v(we,[["__scopeId","data-v-1e28894b"]]),J={fr:{banners:[{src:"/background/servor.jpg?url",html:[{type:"h1",content:"Actuellement :"},{type:"h2",content:"Développeur logiciel chez OVHcloud"}]},{src:"/background/computer.jpg?url",html:""},{src:"/background/servor.jpg?url",html:[{type:"h1",content:"Fait intéressant :"},{type:"p",content:"Je suis un grand amateur de natation et de plongée sous-marine mais aussi de jazz dansant. Vous voulez savoir un de mes rêves ? Écouter du Frank Sinatra à 30 mètres de profondeur !"}]}]},en:{banners:[{src:"/background/servor.jpg?url",html:[{type:"h1",content:"Currently:"},{type:"p",content:"Software Developer at OVHcloud"}]},{src:"/background/computer.jpg?url",html:""},{src:"/background/servor.jpg?url",html:[{type:"h1",content:"Interesting fact :"},{type:"p",content:"I am a big fan of swimming and scuba diving, as well as dancing to jazz. You want to know one of my dreams ? Listening to Frank Sinatra at 30 meters underwater !"}]}]}},xe={__name:"MainPage",setup(o){const a=_(),e=h(J[a.params.lang]),i=h(e.value.banners[0]),d=h(e.value.banners[1]),n=h(e.value.banners[2]);return w(()=>a.params.lang,s=>{e.value=J[s],i.value=e.value.banners[0],d.value=e.value.banners[1],n.value=e.value.banners[2]}),(s,g)=>(r(),c(m,null,[l(z),l(Y),l(ae),l(j,{src:i.value.src,height:i.value.height},{default:f(()=>[(r(!0),c(m,null,b(i.value.html,(p,S)=>(r(),k(L(p.type),{key:S},{default:f(()=>[I(u(p.content),1)]),_:2},1024))),128))]),_:1},8,["src","height"]),l(de),l(j,{src:d.value.src,height:d.value.height},null,8,["src","height"]),l(ke),l(j,{src:n.value.src,height:n.value.height},{default:f(()=>[(r(!0),c(m,null,b(n.value.html,(p,S)=>(r(),k(L(p.type),{key:S},{default:f(()=>[I(u(p.content),1)]),_:2},1024))),128))]),_:1},8,["src","height"]),l(A),l(H,{path:y(a).path},null,8,["path"])],64))}};export{xe as default};