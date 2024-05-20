// fichier router/index.js ou un nom similaire
import { createRouter, createWebHistory } from 'vue-router';

import MainPage from '@page/MainPage.vue';
import Projets from '@page/Projets.vue';
import LegalMentions from '@page/LegalMentions.vue';
import Sitemap from '@page/Sitemap.vue';

const routes = [
  {
    path: '/',
    name: 'Portfolio',
    component: MainPage
  },
  {
    path: '/projets',
    name: 'Projets',
    component: Projets,
  },
  {
    path: '/mentions-legales',
    name: 'LegalMentions',
    component: LegalMentions,
  },
  {
    path: '/plan-site',
    name: 'PlanSite',
    component: Sitemap,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;