import{_ as f,a as S,b as e,c as a,f as P,g as j,d as n,t as d,r as _,w as x,F as m,k as p,l as B,m as C}from"./index-CKCltWjv.js";import{d as g}from"./projets-BFkWzrmq.js";const b={class:"card"},A=["src","alt"],L={class:"overlay"},N={__name:"ProjectCard",props:{img:{type:String,required:!0},link:{type:String,default:"/"},imgAlt:{type:String,default:""},title:{type:String,default:""},description:{type:String,default:""}},setup(t){return(o,l)=>{const r=S("router-link");return e(),a("div",b,[P(r,{to:t.link},{default:j(()=>[n("img",{src:t.img,alt:t.imgAlt},null,8,A)]),_:1},8,["to"]),n("div",L,[n("h5",null,d(t.title),1),n("p",null,d(t.description),1)])])}}},w=f(N,[["__scopeId","data-v-b12b18e2"]]),I={class:"listProject"},c=3,q={__name:"ListProjet",props:{lang:{type:String,required:!0}},setup(t){const o=t,l=_(g[o.lang]),r=_(Array.from({length:c},()=>[])),i=()=>{r.value=Array.from({length:c},()=>[]),l.value.forEach((s,u)=>{r.value[u%c].push(s)})};return i(),x(()=>o.lang,s=>{l.value=g[s],i()}),(s,u)=>(e(),a("div",I,[(e(!0),a(m,null,p(r.value,(h,v)=>(e(),a("div",{key:v,class:"column"},[(e(!0),a(m,null,p(h,(y,k)=>(e(),B(w,C({key:k,ref_for:!0},y),null,16))),128))]))),128))]))}},V=f(q,[["__scopeId","data-v-13cf5977"]]);export{V as default};
