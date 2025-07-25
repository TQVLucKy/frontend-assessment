<style lang="scss" scoped src="../styles/exercise2.scss"></style>

<template>
  <div class="wrapper max-w-[800px] md:p-5">
    <!-- Tabs on desktop -->
    <div v-if="!isMobile">
      <div class="border-default border flex rounded-t">
        <button v-for="(section, index) in sections" :key="index" :class="['px-[20px] py-[10px] cursor-pointer font-bold text-[#666] ', activeIndex === index
          ? 'shadow-[1px_0_0_0_#ccc,0_2px_0_0_white] shadow-inset active'
          : 'shadow-[1px_0_0_0_#ccc] shadow-inset button-hover']" @click="toggle(index)">
          {{ section.title }}
        </button>
      </div>
      <transition mode="out-in" enter-active-class="transition-opacity duration-300" enter-from-class="opacity-0"
        leave-active-class="transition-opacity duration-300" leave-to-class="opacity-0">
        <div v-if="activeIndex !== -1" class="border-default p-5 border border-t-0 rounded-b" :key="activeIndex"
          v-html="sections[activeIndex].content">
        </div>
      </transition>
    </div>

    <!-- Accordion on mobile -->
    <div class="accordion" v-else>
      <div v-for="(section, index) in sections" :key="index"
        class="w-[80vw] border-default border border-b-0 last:border-b">
        <button
          class="w-full text-left p-[15px] border-none font-bold cursor-pointer transition-all ease-in-out button-hover"
          @click="toggle(index)" :class="{ 'active': activeIndex === index }">
          {{ section.title }}
        </button>
        <transition @leave="onLeave">
          <div v-show="activeIndex === index" :class="[
            'overflow-hidden', activeIndex === index ? 'animate-dropdown-open' : 'animate-dropdown-close'
          ]">
            <div class="p-[15px]" v-html="section.content"></div>
          </div>
        </transition>
      </div>
    </div>

  </div>
</template>

<script>
import data from '../data.json';

export default {
  data() {
    return {
      sections: data,
      activeIndex: 0,
      isMobile: false,
    };
  },
  methods: {
    toggle(index) {
      if (this.isMobile) {
        this.activeIndex = this.activeIndex === index ? -1 : index;
      }
      else {
        if (this.activeIndex !== index) {
          this.activeIndex = index;
        }
      }
    },
    onLeave(el, done) {
      setTimeout(() => {
        done();
      }, 750);
    },
    checkMobile() {
      if (this.isMobile && window.innerWidth >= 768 && this.activeIndex === -1) {
        this.activeIndex = 0;
      }
      this.isMobile = window.innerWidth < 768;
    },
  },
  mounted() {
    this.checkMobile();
    window.addEventListener('resize', this.checkMobile);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkMobile);
  },
};
</script>