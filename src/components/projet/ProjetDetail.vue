<script setup>
import { ref, onMounted, watch } from 'vue';
import { formatBackline } from '/src/utils.js';

import ImageViewer from '@component/utils/ImageViewer.vue';
import ProgressBar from "@component/utils/ProgressBar.vue";

let showOverlay = ref(false);
let overlayImageSrc = ref('');
const content = ref(null);

const props = defineProps({
    id: {
        type: String,
        required: true
    },
    lang: {
        type: String,
        required: true
    }
});

const loadProject = async () => {
  try {
    const project = await import(`../../content/projet/${props.id}.yml`);
    return project.default[props.lang];
  } catch (error) {
    console.error('Error loading project:', error);
    return null
  }
};

const activateViewer = (imageSrc) => {
  overlayImageSrc.value = imageSrc;
  showOverlay.value = true;
};

watch(() => props.id, async () => {
  content.value = await loadProject();
});

onMounted(async () => {
  content.value = await loadProject();
});
</script>

<template>
  <div class="header" v-if="content !== null">
    <h1>{{ content.title }}</h1>
    <p>{{ content.description }}</p>
  </div>

  <div class="projet" v-if="content !== null">
    <section v-for="(section, index) in content.sections" :key="index">
      <div class="wrapper">
        <h1>{{ section.subtitle }}</h1>
        <p v-html="formatBackline(section.paragraph)"></p>
      </div>
      <img :src="section.image" alt="" @click="activateViewer(section.image)"/>
    </section>
    <ImageViewer :show="showOverlay" :image-src="overlayImageSrc" @update:show="showOverlay = $event" />
  </div>

  <section class="competences" v-if="content !== null">
    <div v-for="(category, index) in content.competences" :key="index">
      <h3 :style="{textTransform: 'capitalize' }">{{ Object.keys(category)[0] }}</h3>
      <ProgressBar 
        v-for="(skill, skillIndex) in category[Object.keys(category)[0]]" 
        :key="skillIndex" 
        :title="skill.skill" 
        :fill="skill.value" 
        :color="content.colors[index]"
      />
    </div>
  </section>
</template>

<style scoped>
.header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-top: 10rem;
  margin-bottom: 2rem;
}

.projet {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5rem;
}

.projet > section{
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
}

.projet > section:nth-child(3n) {
  flex-direction: row-reverse;
}

.projet > section:nth-child(3n + 1) {
  flex-direction: row;
}

.projet > section:nth-child(3n + 2) {
  flex-direction: column;
}

.competences {
  margin: 5rem auto;
  width: 70%;
  position: relative;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10rem;

  background-color: #d1caca;
  border: 2px solid black;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  padding: 1rem;

  & > div {
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}

img {
  width: 50%;
  height: auto;
  max-height: 400px;
  max-width: 600px;
  object-fit: contain;

  border: 2px solid #8B0000;
  box-shadow: 0 0 0 2px white, 0 0 0 4px #8B0000;
  transition: all 0.3s ease-out;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
    filter: brightness(0.85);
  }
}

.projet .wrapper *{
  padding: 0.8rem;
}

@media (max-width: 900px) {
  .header {
    margin-top: 5rem;
  }

  .projet > section {
    width: 100%;
    flex-direction: column !important;
  }

  .competences {
    width: 90%;
  }

  img {
    width: 60%;
    max-height: none;
    max-width: none;
  }
}
</style>