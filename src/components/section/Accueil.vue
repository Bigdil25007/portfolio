<script setup>
import { onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

import { formatHTML } from '/src/utils.js';
import yml from '@content/section/accueil.yml';

const router = useRoute();
const content = ref(yml[router.params.lang]);

watch(() => router.params.lang, (newLang) => {
  content.value = yml[newLang];
});


onMounted(() => {
  particlesJS.load('particles-js', '/particle-js/particles.json?url');
});
</script>

<template>
  <section>
    <div id="particles-js"></div>
    <div class="content">
      <h1>{{ content.h1 }}</h1>
      <h2 v-html="formatHTML(content.h2)"></h2>
      <button>
        <router-link :to="content.button_link">{{ content.button_text }}</router-link>
      </button>
    </div>
  </section>
</template>

<style scoped>
section {
    height: 100vh;
    position: relative;
}

#particles-js {
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: #212529;
    background-size: cover;
    background-position: 50% 50%;
}

.content {
    position: absolute;
    top: 40%;
    width: 50%;
    left: 25%;
    right: auto;
    text-align: center;
    color: white;
    pointer-events: none;
    
    h1 {
        text-transform: uppercase;
        font-weight: bold;
        font-size: 2.5rem;
        margin-bottom: 1.5rem;
        border-bottom: none;
    }

    h2 {
        color: rgb(203, 203, 203);
        font-size: 1.5rem;
        margin-bottom: 1.5rem;
    }
}

button {
    pointer-events: all;
    padding: 0.5rem 1rem;
    background-color: #1c385e;
    transition: all 0.3s ease-in-out;

    &:hover {
        cursor: pointer;
        background-color: #050a11;
    }

    a {
        font-size: 1.5rem;
        text-transform: uppercase;
        color: white;
        text-decoration: none;
    }
}

@media (max-width: 700px) {
  .content {

    h1 {
        font-size: 2rem;
    }

    h2 {
        font-size: 1rem;
    }
  }
}
</style>