<template lang="pug">
#app
  .main
    section#about.about
      .container
        header.mobile-header(v-if="isMobile", v-cloak="")
          a.mobile-logo(href="/")
            img.mobile-logo__img(src="static/img/logo.png")
          button.hamburger.hamburger--emphatic(
            :class="{'is-active' : isMenuOpen}",
            type="button",
            v-if="isMobile",
            @click="toggleMenu")
            span.hamburger-box
              span.hamburger-inner
        transition(name="slide")
          aside#left-menu.panel(v-if="isMobile && isMenuOpen", v-cloak="")
            .info
              .info__date 25 августа
              .info__place Москва | Сколково
            nav.nav
              ul.nav__list
                a.nav__link(href="#howitwas") Как это было
                a.nav__link(href="#artists") Артисты
                a.nav__link(href="#program") Программа
                a.nav__link(href="") Партнеры
                a.nav__link(href="") Купить Билеты
        header.header(v-if="!isMobile", v-cloak="")
          a.logo(href="/")
            img.logo__img(src="static/img/logo.png")
          nav.nav
            ul.nav__list
              a.nav__link(href="#howitwas") Как это было
              a.nav__link(href="#artists") Артисты
              a.nav__link(href="#program") Программа
              a.nav__link(href="") Партнеры
              a.nav__link(href="") Купить Билеты
          .info
            .info__date 25 августа
            .info__place Москва | Сколково
        .content
          .content__small
            | а это непередаваемая
            br
            |  атмосфера, которая
            br
            |  витает в воздухе
          img.content__image(:src="'static/img/jazz-'+random()+'.png'", alt="Jazz Science Сколово")
          .content__primary
            | место, где наука
            br
            |  и музыка соединяются, —
            br
            |  превращаясь в магию
          .content-aside
            .social
              a.social__link.social__link--insta(href="")
              a.social__link.social__link--fb(href="")
              a.social__link.social__link-vk(href="")
            .learn-more узнать больше про фестиваль
      #js-molecule-1.molecule.molecule--1
      #js-molecule-2.molecule.molecule--2
      #js-molecule-3.molecule.molecule--3
      #js-molecule-4.molecule.molecule--4
      #js-molecule-5.molecule.molecule--5
      #js-molecule-6.molecule.molecule--6
    section#howitwas.howitwas
      .container
        h2.howitwas__heading.heading Как это было?
        Years(:currentYear="currentYear", @set="setYear")
      .collage
        swiper(:options="swiperOption" ref="mySwiper")
            swiper-slide
              .row
                .col.col-xs-6
                  .ratio
                    .ratio__expander.ratio__expander--xs-3x2
                    .ratio__content
                      .collage__block
                        .image
                          img.image__picture(src="static/img/saksofon.jpg")
                .col.col-xs-6
                  .ratio
                    .ratio__expander.ratio__expander--xs-3x2
                    .ratio__content
                      .collage__block
                        .image
                          img.image__picture(src="static/img/valerylatypov-3476.png")
                .col.col-xs-12
                  .ratio
                    .ratio__expander.ratio__expander--xs-3x2
                    .ratio__content
                      .collage__block
                        .image
                          img.image__picture(src="static/img/SHA_6713.png")
            swiper-slide
              .row
                .col.col-xs-6
                  .ratio
                    .ratio__expander.ratio__expander--xs-3x4
                    .ratio__content
                      .collage__block
                        .image
                          img.image__picture(src="static/img/valerylatypov-1579.png")
                .col.col-xs-6
                  .ratio
                    .ratio__expander.ratio__expander--xs-3x2
                    .ratio__content
                      .collage__block
                        .collage__text
                          .collage__text--primary 6000
                          .collage__text--default участников
                          .collage__text--secondary московский джазовый оркестр Ярославы Симоновой
                  .ratio
                    .ratio__expander.ratio__expander--xs-3x2
                    .ratio__content
                      .collage__block
                        .image
                          img.image__picture(src="static/img/DSC01579.png")
              .row
                .col.col-xs-6
                  .ratio
                    .ratio__expander.ratio__expander--xs-3x2
                    .ratio__content
                      .collage__block
                        .collage__text
                          .collage__text--primary 12
                          .collage__text--default приглашенных артистов
                          .collage__text--secondary мировые джазовые имена
                .col.col-xs-6
                  .ratio
                    .ratio__expander.ratio__expander--xs-3x2
                    .ratio__content
                      .collage__block
                        .image
                          img.image__picture(src="static/img/valerylatypov-1576.png")
            swiper-slide
              .row
                .col.col-xs-12
                  .ratio
                    .ratio__expander.ratio__expander--xs-3x2
                    .ratio__content
                      .collage__block
                        .image
                          img.image__picture(src="static/img/valerylatypov-3021.png")
                .col.col-xs-6
                  .ratio
                    .ratio__expander.ratio__expander--xs-3x2
                    .ratio__content
                      .collage__block
                        .image
                          img.image__picture(src="static/img/valerylatypov-3036.png")
                .col.col-xs-6
                  .ratio
                    .ratio__expander.ratio__expander--xs-3x2
                    .ratio__content
                      .collage__block
                        .collage__text
                          .collage__text--primary 72
                          .collage__text--default часа
                          .collage__text--secondary науки и музыки
            swiper-slide
              .row
                .col.col-xs-6
                  .ratio
                    .ratio__expander.ratio__expander--xs-3x2
                    .ratio__content
                      .collage__block
                        .image
                          img.image__picture(src="static/img/valerylatypov-3464.png")
                .col.col-xs-6
                  .ratio
                    .ratio__expander.ratio__expander--xs-3x2
                    .ratio__content
                      .collage__block
                        .image
                          img.image__picture(src="static/img/valerylatypov-1611.png")
                .col.col-xs-12
                  .ratio
                    .ratio__expander.ratio__expander--xs-3x2
                    .ratio__content
                      .collage__block
                        .image
                          img.image__picture(src="static/img/valerylatypov-2566.png")
    section#artists.artists
      .container
        h2.artists__heading.heading Артисты
        Years(:currentYear="currentYear", :isContrast="true", @set="setYear")
        .row
          .col.col-xs-12.col-sm-6.col-lg-3(v-for="artist in content[currentYear].artists")
            .artists__block
              img.artists__img(:src="artist.src", :alt="artist.name")
              .artists__name {{artist.name}}
    section#program.program
      .container
        h2.program__heading.heading Программа
        Years(:currentYear="currentYear", @set="setYear")
        .program__content
          img.program__img(src="static/img/program-img.png", alt="Программа фестиваля")
          .program__text
            | Помимо музыкальной программы, на фестивале можно было посетить научно-популярные
            | лекции, принять участие в мастер-классах от Культурного Центра ЗИЛ и Playtronica,
            | а также интерактивных инсталляциях от Петра Айду, Vtol: (проект Дмитрия
            | Морозова) и Музея Скрябина. Для меломанов и любопытствующих работал Маркет
            | винила, где можно было приобрести или обменять редкие пластинки. Также
            | в рамках SkolkovoJazz прошел Фестиваль фудтраков, который объединил самые
            | любимые и известные проекты московского стрит-фуда.
</template>

<script>
/* eslint-disable no-console, no-plusplus */
export default {
  name: 'App',
  data() {
    return {
      isMenuOpen: false,
      isMobile: false,
      isScrolled: false,
      swiperOption: {
        speed: 667,
        spaceBetween: 0,
        freeMode: true,
        slidesPerView: 4,
        loop: true,
        autoplay: {
          delay: 1000,
        },
      },
      currentYear: 'year2016',
      content: {
        year2017: {},
        year2016: {
          artists: [
            { src: 'static/img/ilya-i-azat.png', name: 'Группа Ильи Морозова и Азата Баязитова' },
            { src: 'static/img/sergey-quintet.png', name: 'Квинтет Сергея Долженкова' },
            { src: 'static/img/vsdims-group.png', name: 'Вадим Эйленкриг и его группа' },
            { src: 'static/img/oleg-trio.png', name: 'Трио Олега Аккуратова' },
            { src: 'static/img/till-quintet.png', name: 'Till Brönner Quintet' },
            { src: 'static/img/igor-i-moscow-jazzband.png', name: 'Игорь Бутман и Московский джазовый оркестр' },
            { src: 'static/img/july-afterjuly.png', name: 'July AfterJuly' },
            { src: 'static/img/teslaboy.png', name: 'Группа TeslaBoy' },
            { src: 'static/img/baronin-a.png', name: 'Антон Баронин' },
            { src: 'static/img/toymintseva-a.png', name: 'Алена Тойминцева' },
            { src: 'static/img/guru-groove.png', name: 'Guru Groove Foundation' },
            { src: 'static/img/tony-momrelle-band.png', name: 'Tony Momrelle Band' }],
        },
      },
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    },
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.handleResize);
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
        const pageX = e.clientX;
        const pageY = e.clientY;
        Object.keys(layers).forEach((key) => {
          const depthX = layers[key].depthX;
          const depthY = layers[key].depthY;
          layers[key].elem.style.transform =
            `translateX(${pageX / depthX}px) translateY(${pageY / depthY}px)`;
        });
      });
    });
  },
  methods: {
    handleResize() {
      this.isMobile = window.innerWidth < 1200;
      this.isMenuOpen = window.innerWidth >= 1200;
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
    setYear(year) {
      this.currentYear = year;
    },
  },
};
</script>

<style lang="scss"></style>
