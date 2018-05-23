<template lang="pug">
  #app
</template>

<script>
/* eslint-disable no-console, no-plusplus */
export default {
  name: 'App',
  components: {
    // Product,
  },
  data() {
    return {
      isMenuOpen: false,
      isMobile: false,
      isScrolled: false,
    };
  },
  mounted() {
    this.$nextTick(function () {
      window.addEventListener('resize', this.handleResize);
      window.addEventListener('scroll', this.handleScroll);
      this.handleResize();

      const wrapper = document.getElementById('about');
      const layers = {
        1: {
          elem: document.getElementById('js-molecule-1'),
          depthX: 21,
          depthY: 21,
        },
        2: {
          elem: document.getElementById('js-molecule-2'),
          depthX: 100,
          depthY: 100,
        },
        3: {
          elem: document.getElementById('js-molecule-3'),
          depthX: 21,
          depthY: 21,
        },
        4: {
          elem: document.getElementById('js-molecule-4'),
          depthX: 9,
          depthY: 9,
        },
        5: {
          elem: document.getElementById('js-molecule-5'),
          depthX: 100,
          depthY: 100,
        },
        6: {
          elem: document.getElementById('js-molecule-6'),
          depthX: 15,
          depthY: 15,
        },
      };

      wrapper.addEventListener('mousemove', (e) => {
        let pageX = e.clientX,
          pageY = e.clientY;
        for (const key in layers) {
          const depthX = layers[key].depthX;
          const depthY = layers[key].depthY;
          layers[key].elem.style.transform =
            `translateX(${pageX / depthX}px) translateY(${pageY / depthY}px)`;
        }
      });

      const collageWrapper = document.getElementById('js-collage-wrapper');
      const collageContainer = document.getElementById('js-collage-container');
      collageWrapper.addEventListener('mousemove', (e) => {
        const position = e.clientX / window.innerWidth * 10 - 5;
        collageContainer.style.transform = `translateX(${position }%)`;
      });
    });
  },
  methods: {
    handleResize() {
      this.isMobile = window.innerWidth < 1200;
      this.isMenuOpen = window.innerWidth >= 1200;
    },
    handleScroll() {
      this.isScrolled = window.scrollY > 0;
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    },
    random() {
      return Math.floor(Math.random() * 3) + 1;
    },
    submit: function submit(data, url) {
      const self = this;
      this.post(data, url, (result) => {
        if (result) {
          for (const field in self.form.data) {
            field.data = '';
          }
          self.form.isAgree = false;
          self.form.isSent = true;
          setTimeout(() => {
            self.form.isSent = false;
          }, 3e3);
        }
      });
    },
    post: function post(data, url, success) {
      const xhr = new XMLHttpRequest();
      xhr.open('POST', url, !0);
      xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
      xhr.send(JSON.stringify(data));
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
          success(xhr.responseText);
        }
      };
    },
  },
};
</script>

<style lang="scss"></style>
