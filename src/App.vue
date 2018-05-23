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
                a.nav__link(href="#partners") Партнеры
                a.nav__link(
                  target="_blank",
                  href="https://msk.kassir.ru/frame/event/104230?key=d68c4b88-00fb-ee51-8fdd-fec9d1c99539"
                ) Купить Билеты
        header.header(v-if="!isMobile", v-cloak="")
          a.logo(href="/")
            img.logo__img(src="static/img/logo.png")
          nav.nav
            ul.nav__list
              a.nav__link(href="#howitwas") Как это было
              a.nav__link(href="#artists") Артисты
              a.nav__link(href="#program") Программа
              a.nav__link(href="#partners") Партнеры
              a.nav__link(
                target="_blank",
                href="https://msk.kassir.ru/frame/event/104230?key=d68c4b88-00fb-ee51-8fdd-fec9d1c99539"
              ) Купить Билеты
          .info
            .info__date 25 августа
            .info__place Москва | Сколково
        .content
          .content__small
            | это непередаваемая
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
              a.social__link.social__link--insta(
                href="https://www.instagram.com/skolkovojazz/",
                target="_blank")
              a.social__link.social__link--fb(
                href="https://www.facebook.com/skolkovojazz/",
                target="_blank")
              a.social__link.social__link-vk(
                href="https://vk.com/skolkovojazz",
                target="_blank")
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
                        img.image__picture(src="static/img/2016-1.jpg")
              .col.col-xs-6
                .ratio
                  .ratio__expander.ratio__expander--xs-3x2
                  .ratio__content
                    .collage__block
                      .image
                        img.image__picture(src="static/img/2016-2.jpg")
              .col.col-xs-12
                .ratio
                  .ratio__expander.ratio__expander--xs-3x2
                  .ratio__content
                    .collage__block
                      .image
                        img.image__picture(src="static/img/2016-3.jpg")
          swiper-slide
            .row
              .col.col-xs-6
                .ratio
                  .ratio__expander.ratio__expander--xs-3x4
                  .ratio__content
                    .collage__block
                      .image
                        img.image__picture(src="static/img/2016-4.jpg")
              .col.col-xs-6
                .ratio
                  .ratio__expander.ratio__expander--xs-3x2
                  .ratio__content
                    .collage__block
                      .collage__text
                        .collage__text--primary 2016
                        .collage__text--default год
                        .collage__text--secondary Состоялся впервые
                .ratio
                  .ratio__expander.ratio__expander--xs-3x2
                  .ratio__content
                    .collage__block
                      .image
                        img.image__picture(src="static/img/2016-5.jpg")
            .row
              .col.col-xs-6
                .ratio
                  .ratio__expander.ratio__expander--xs-3x2
                  .ratio__content
                    .collage__block
                      .collage__text
                        .collage__text--primary 12
                        .collage__text--default приглашенных артистов
                        .collage__text--secondary Российские и мировые имена
              .col.col-xs-6
                .ratio
                  .ratio__expander.ratio__expander--xs-3x2
                  .ratio__content
                    .collage__block
                      .image
                        img.image__picture(src="static/img/2016-6.jpg")
          swiper-slide
            .row
              .col.col-xs-12
                .ratio
                  .ratio__expander.ratio__expander--xs-3x2
                  .ratio__content
                    .collage__block
                      .image
                        img.image__picture(src="static/img/2016-7.jpg")
              .col.col-xs-6
                .ratio
                  .ratio__expander.ratio__expander--xs-3x2
                  .ratio__content
                    .collage__block
                      .image
                        img.image__picture(src="static/img/2016-8.jpg")
              .col.col-xs-6
                .ratio
                  .ratio__expander.ratio__expander--xs-3x2
                  .ratio__content
                    .collage__block
                      .collage__text
                        .collage__text--default Лучшее джазовое событие года
          swiper-slide
            .row
              .col.col-xs-6
                .ratio
                  .ratio__expander.ratio__expander--xs-3x2
                  .ratio__content
                    .collage__block
                      .image
                        img.image__picture(src="static/img/2016-9.jpg")
              .col.col-xs-6
                .ratio
                  .ratio__expander.ratio__expander--xs-3x2
                  .ratio__content
                    .collage__block
                      .image
                        img.image__picture(src="static/img/2016-10.jpg")
              .col.col-xs-12
                .ratio
                  .ratio__expander.ratio__expander--xs-3x2
                  .ratio__content
                    .collage__block
                      .image
                        img.image__picture(src="static/img/2016-11.jpg")
          swiper-slide
            .row
              .col.col-xs-6
                .ratio
                  .ratio__expander.ratio__expander--xs-3x2
                  .ratio__content
                    .collage__block
                      .image
                        img.image__picture(src="static/img/2017-1.jpg")
              .col.col-xs-6
                .ratio
                  .ratio__expander.ratio__expander--xs-3x2
                  .ratio__content
                    .collage__block
                      .image
                        img.image__picture(src="static/img/2017-2.png")
              .col.col-xs-12
                .ratio
                  .ratio__expander.ratio__expander--xs-3x2
                  .ratio__content
                    .collage__block
                      .image
                        img.image__picture(src="static/img/2017-3.png")
          swiper-slide
            .row
              .col.col-xs-6
                .ratio
                  .ratio__expander.ratio__expander--xs-3x4
                  .ratio__content
                    .collage__block
                      .image
                        img.image__picture(src="static/img/2017-4.png")
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
                        img.image__picture(src="static/img/2017-5.png")
            .row
              .col.col-xs-6
                .ratio
                  .ratio__expander.ratio__expander--xs-3x2
                  .ratio__content
                    .collage__block
                      .collage__text
                        .collage__text--primary 10
                        .collage__text--default приглашенных артистов
                        .collage__text--secondary Российские и мировые имена
              .col.col-xs-6
                .ratio
                  .ratio__expander.ratio__expander--xs-3x2
                  .ratio__content
                    .collage__block
                      .image
                        img.image__picture(src="static/img/2017-6.png")
          swiper-slide
            .row
              .col.col-xs-12
                .ratio
                  .ratio__expander.ratio__expander--xs-3x2
                  .ratio__content
                    .collage__block
                      .image
                        img.image__picture(src="static/img/2017-7.png")
              .col.col-xs-6
                .ratio
                  .ratio__expander.ratio__expander--xs-3x2
                  .ratio__content
                    .collage__block
                      .image
                        img.image__picture(src="static/img/2017-8.png")
              .col.col-xs-6
                .ratio
                  .ratio__expander.ratio__expander--xs-3x2
                  .ratio__content
                    .collage__block
                      .collage__text
                        .collage__text--primary 2
                        .collage__text--default открытые дискусии
                        .collage__text--secondary Известные ученые, журналисты и медийные персоны
          swiper-slide
            .row
              .col.col-xs-6
                .ratio
                  .ratio__expander.ratio__expander--xs-3x2
                  .ratio__content
                    .collage__block
                      .image
                        img.image__picture(src="static/img/2017-9.png")
              .col.col-xs-6
                .ratio
                  .ratio__expander.ratio__expander--xs-3x2
                  .ratio__content
                    .collage__block
                      .image
                        img.image__picture(src="static/img/2017-10.png")
              .col.col-xs-12
                .ratio
                  .ratio__expander.ratio__expander--xs-3x2
                  .ratio__content
                    .collage__block
                      .image
                        img.image__picture(src="static/img/2017-11.png")
    section#artists.artists
      .container
        h2.artists__heading.heading Приглашенные артисты
        Years(:currentYear="currentYear", :isContrast="true", @set="setYear")
        .row
          .col.col-xs-12.col-sm-6.col-lg-3(v-for="artist in content[currentYear].artists")
            .artists__block
              img.artists__img(:src="artist.src", :alt="artist.name")
              .artists__name {{artist.name}}
    section#program.program
      .container
        h2.heading Программа
        Years(:currentYear="currentYear", @set="setYear")
        .program__content(v-if="currentYear === 'year2016'")
          img.program__img(src="static/img/program-2016.png", alt="Программа фестиваля 2016")
          .program__text
            p Помимо музыкальной программы, на&nbsp;фестивале можно было посетить научно-популярные
              | лекции, принять участие в&nbsp;мастер-классах от&nbsp;Культурного Центра ЗИЛ
              | и&nbsp;Playtronica,
              | а&nbsp;также интерактивных инсталляциях от&nbsp;Петра Айду, Vtol: (проект Дмитрия
              | Морозова) и&nbsp;Музея Скрябина. Для меломанов и&nbsp;любопытствующих работал Маркет
              | винила, где можно было приобрести или обменять редкие пластинки. Также
              | в&nbsp;рамках SkolkovoJazz прошел Фестиваль фудтраков, который объединил самые
              | любимые и&nbsp;известные проекты московского стрит-фуда.
            p Для самых маленьких гостей была организована программа
              | от&nbsp;семейного кафе &laquo;Андерсон&raquo; и&nbsp;&laquo;SHUSHA-TOYS&raquo;

        .program__content(v-if="currentYear === 'year2017'")
          img.program__img(src="static/img/program-2017.png", alt="Программа фестиваля 2017")
          .program__text
            p В рамках программы 2017 года на&nbsp;обеих сценах чередовались
              | выступления музыкальных коллективов и&nbsp;паблик-токов с&nbsp;участием
              | признанных деятелей науки, медиа и&nbsp;журналистики, таких как
              | Татьяна Черниговская, Александр Архангельский, Владимир Раевский
              | и&nbsp;Сергей Паранько.
            p Научная программа была посвящена теме симбиоза науки о&nbsp;человеческом
              | восприятии и&nbsp;различных
              | видов искусства. В&nbsp;коллаборации с&nbsp;фестивалем науки
              | &laquo;WOW!HOW?&raquo;,
              | Занимательным Музеем наук &laquo;Эксперементаниум&raquo; и&nbsp;Планетарием
              | были созданы интерактивные зоны и&nbsp;арт-объекты, визуализирующие идею
              | синергии музыки и&nbsp;науки.
            p Юные посетители фестиваля приняли участие в&nbsp;специальных активностях,
              | разработанных для
              | детей нашими партнерами &laquo;Лигой роботов&raquo; и&nbsp;Гигантскими
              | головоломками. Для всех гостей на&nbsp;территории фестиваля были организованы
              | Книжная ярмарка и&nbsp;Винил-маркет, а&nbsp;также фестиваль фудтраков, дополненный
              | изысканным выездным рестораном от&nbsp;OsteriaMario.

    section#partners.partners
      .container
        h2.heading Партнеры
        img(src="static/img/partners.png", alt="Партнеры", class="preview")
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
        observer: true,
        observeParents: true,
      },
      currentYear: 'year2016',
      content: {
        year2017: {
          artists: [
            { src: 'static/img/marimba.png', name: 'Маримба+' },
            { src: 'static/img/scristian.png', name: 'Cristian Sans Trio' },
            { src: 'static/img/dummy-1.png', name: '' },
            { src: 'static/img/musicaviva.png', name: 'Московский камерный оркестр Musicviva и Юрий Фаворин' },
            { src: 'static/img/dummy-2.png', name: '' },
            { src: 'static/img/butman.png', name: 'Московский джазовый оркестр под управлением Игоря Бутмана' },
            { src: 'static/img/jukebox.png', name: 'Jukebox' },
            { src: 'static/img/pii.png', name: 'Число Пи' },
            { src: 'static/img/anton-g.png', name: 'Антон Маскелиаде' },
            { src: 'static/img/azekel.png', name: 'Azekel' },
            { src: 'static/img/jekka.png', name: 'Jekka' },
            { src: 'static/img/blinder.png', name: 'Yana Blinder' },
          ],
        },
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
