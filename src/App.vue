<template lang="pug">
#app
  .main
    section#about.about
      .container
        header.mobile-header(v-if="isMobile", v-cloak="")
          a.mobile-logo(href="/")
            img.mobile-logo__img(src="static/img/logo.png")
          .info
            .info__date 25 августа
            .info__place Москва | ИЦ Сколково
          button.hamburger.hamburger--emphatic(
            :class="{'is-active' : isMenuOpen}",
            type="button",
            v-if="isMobile",
            @click="toggleMenu")
            span.hamburger-box
              span.hamburger-inner
        transition(name="slide")
          aside#left-menu.panel(v-if="isMobile && isMenuOpen", v-cloak="")
            navigation(:onClick="toggleMenu")
        header.header(v-if="!isMobile", v-cloak="")
          a.logo(href="/")
            img.logo__img(src="static/img/logo.png")
          .header__nav
            navigation(:onClick="toggleMenu")
          .info
            .info__date 25 августа
            .info__place Москва | ИЦ Сколково
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
            |  и музыка соединяются,
            br
            |  превращаясь в магию
          .content__mobile-buy-tickets
            a.button.button--contrast(
              target="_blank",
              href="https://msk.kassir.ru/frame/event/104230?key=d68c4b88-00fb-ee51-8fdd-fec9d1c99539"
            ) Купить билеты
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
    section#program.program.section
      .container
        h2.section__heading Расписание лектория
        .program__text(v-html="content.schedule.content")
        h2.section__heading Программа
        Years(:currentYear="currentYear", @set="setYear")
        .program__content(v-if="currentYear === 'year2016'")
          img.program__img(:src="content.year2016.programm.photo.path", alt="Программа фестиваля 2016")
          .program__text(v-html="content.year2016.programm.content")
        .program__content(v-if="currentYear === 'year2017'")
          img.program__img(:src="content.year2017.programm.photo.path", alt="Программа фестиваля 2017")
          .program__text(v-html="content.year2017.programm.content")
        .program__content.program__content--slider(v-if="currentYear === 'year2018'")
          swiper(:options="programmSliderOptions" ref="programmSwiper")
            template(v-for="section in content.year2018.programm")
              swiper-slide.program__section
                .program__section-photo(:style="{'backgroundImage': 'url('+section.photo.path+')'}")
                .program__section-description
                  h2 {{section.title}}
                  div(v-html="section.content")
            .swiper-pagination.swiper-pagination-contrast.js-programm-pagination(slot="pagination")
          .swiper-button-next.js-programm-next.program__button-next
          .swiper-button-prev.js-programm-prev.program__button-prev
      .call-to-action
        a.button.button--primary(
          target="_blank",
          href="https://msk.kassir.ru/frame/event/104230?key=d68c4b88-00fb-ee51-8fdd-fec9d1c99539"
        ) Купить Билеты
    section#artists.artists.section.section--contrast
      .container
        h2.section__heading Артисты
        Years(:currentYear="currentYear", :isContrast="true", @set="setYear")
        .row
          .col.col-xs-12.col-sm-6.col-lg-3(v-for="artist in content[currentYear].artists")
            .artists__block(
              @click="openArtist(artist)",
              :class="{'artists__block--clickable':artist.about}")
              img.artists__img(
                :src="artist.photo.path",
                :alt="artist.name",
                :title="artist.alreadyPerformed ? 'Уже выступил' : null",
                :class="{'artists__img--muted' : artist.alreadyPerformed}")
              .artists__name {{artist.name}}
        .call-to-action
          a.button.button--contrast(
            target="_blank",
            href="https://msk.kassir.ru/frame/event/104230?key=d68c4b88-00fb-ee51-8fdd-fec9d1c99539"
          ) Купить Билеты
    section#discuss.discuss.section
      .container
        h2.section__heading Большие лекции
        .row
          .col.col-xs-12
            img(src="static/img/viskuss-1.png").preview.discuss__photo
          .col.col-xs-12.col-lg-6
            img(src="static/img/viskuss-2.png").preview.discuss__photo
          .col.col-xs-12.col-lg-6
            img(src="static/img/viskuss-3.png").preview.discuss__photo
    section#howitwas.howitwas.section
      .container
        h2.section__heading Как это было?
        p
        .years
          button.years__item(
            @click="slideTo(0)",
            :class="{'years__item--active': activeIndex < 4}"
            ) 2016
          button.years__item(
            @click="slideTo(4)",
            :class="{'years__item--active': activeIndex >= 4}"
            ) 2017
      .collage
        swiper(:options="newsfeedOption" ref="newsfeedSwiper")
          swiper-slide
            .row
              .col.col-xs-6
                .ratio
                  .ratio__expander.ratio__expander--xs-3x2
                  .ratio__content
                    .collage__block.collage__block--link
                      preview(:source="gallery.image_2016_01", @open="openGallery")
              .col.col-xs-6
                .ratio
                  .ratio__expander.ratio__expander--xs-3x2
                  .ratio__content
                    .collage__block.collage__block--link
                      preview(:source="gallery.image_2016_02", @open="openGallery")
              .col.col-xs-12
                .ratio
                  .ratio__expander.ratio__expander--xs-3x2
                  .ratio__content
                    .collage__block.collage__block--link
                      preview(:source="gallery.image_2016_03", @open="openGallery")
          swiper-slide
            .row
              .col.col-xs-6
                .ratio
                  .ratio__expander.ratio__expander--xs-3x4
                  .ratio__content
                    .collage__block.collage__block--link
                      preview(:source="gallery.image_2016_04", @open="openGallery")
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
                    .collage__block.collage__block--link
                      preview(:source="gallery.image_2016_05", @open="openGallery")
            .row
              .col.col-xs-6
                .ratio
                  .ratio__expander.ratio__expander--xs-3x2
                  .ratio__content
                    .collage__block
                      .collage__text
                        .collage__text--primary 12
                        .collage__text--default артистов
                        .collage__text--secondary Российские и мировые имена
              .col.col-xs-6
                .ratio
                  .ratio__expander.ratio__expander--xs-3x2
                  .ratio__content
                    .collage__block.collage__block--link
                      preview(:source="gallery.image_2016_06", @open="openGallery")
          swiper-slide
            .row
              .col.col-xs-12
                .ratio
                  .ratio__expander.ratio__expander--xs-3x2
                  .ratio__content
                    .collage__block.collage__block--link
                      preview(:source="gallery.image_2016_07", @open="openGallery")
              .col.col-xs-6
                .ratio
                  .ratio__expander.ratio__expander--xs-3x2
                  .ratio__content
                    .collage__block.collage__block--link
                      preview(:source="gallery.image_2016_08", @open="openGallery")
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
                    .collage__block.collage__block--link
                      preview(:source="gallery.image_2016_09", @open="openGallery")
              .col.col-xs-6
                .ratio
                  .ratio__expander.ratio__expander--xs-3x2
                  .ratio__content
                    .collage__block.collage__block--link
                      preview(:source="gallery.image_2016_10", @open="openGallery")
              .col.col-xs-12
                .ratio
                  .ratio__expander.ratio__expander--xs-3x2
                  .ratio__content
                    .collage__block.collage__block--link
                      preview(:source="gallery.image_2016_11", @open="openGallery")
          swiper-slide
            .row
              .col.col-xs-6
                .ratio
                  .ratio__expander.ratio__expander--xs-3x2
                  .ratio__content
                    .collage__block.collage__block--link
                      preview(:source="gallery.image_2017_01", @open="openGallery")
              .col.col-xs-6
                .ratio
                  .ratio__expander.ratio__expander--xs-3x2
                  .ratio__content
                    .collage__block.collage__block--link
                      preview(:source="gallery.image_2017_02", @open="openGallery")
              .col.col-xs-12
                .ratio
                  .ratio__expander.ratio__expander--xs-3x2
                  .ratio__content
                    .collage__block.collage__block--link
                      preview(:source="gallery.image_2017_03", @open="openGallery")
          swiper-slide
            .row
              .col.col-xs-6
                .ratio
                  .ratio__expander.ratio__expander--xs-3x4
                  .ratio__content
                    .collage__block.collage__block--link
                      preview(:source="gallery.image_2017_04", @open="openGallery")
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
                    .collage__block.collage__block--link
                      preview(:source="gallery.image_2017_05", @open="openGallery")
            .row
              .col.col-xs-6
                .ratio
                  .ratio__expander.ratio__expander--xs-3x2
                  .ratio__content
                    .collage__block
                      .collage__text
                        .collage__text--primary 10
                        .collage__text--default артистов
                        .collage__text--secondary Российские и мировые имена
              .col.col-xs-6
                .ratio
                  .ratio__expander.ratio__expander--xs-3x2
                  .ratio__content
                    .collage__block.collage__block--link
                      preview(:source="gallery.image_2017_06", @open="openGallery")
          swiper-slide
            .row
              .col.col-xs-12
                .ratio
                  .ratio__expander.ratio__expander--xs-3x2
                  .ratio__content
                    .collage__block.collage__block--link
                      preview(:source="gallery.image_2017_07", @open="openGallery")
              .col.col-xs-6
                .ratio
                  .ratio__expander.ratio__expander--xs-3x2
                  .ratio__content
                    .collage__block.collage__block--link
                      preview(:source="gallery.image_2017_08", @open="openGallery")
              .col.col-xs-6
                .ratio
                  .ratio__expander.ratio__expander--xs-3x2
                  .ratio__content
                    .collage__block
                      .collage__text
                        .collage__text--primary 2
                        .collage__text--default открытые дискуссии
                        .collage__text--secondary Известные ученые, журналисты и медийные персоны
          swiper-slide
            .row
              .col.col-xs-6
                .ratio
                  .ratio__expander.ratio__expander--xs-3x2
                  .ratio__content
                    .collage__block.collage__block--link
                      preview(:source="gallery.image_2017_09", @open="openGallery")
              .col.col-xs-6
                .ratio
                  .ratio__expander.ratio__expander--xs-3x2
                  .ratio__content
                    .collage__block.collage__block--link
                      preview(:source="gallery.image_2017_10", @open="openGallery")
              .col.col-xs-12
                .ratio
                  .ratio__expander.ratio__expander--xs-3x2
                  .ratio__content
                    .collage__block.collage__block--link
                      preview(:source="gallery.image_2017_11", @open="openGallery")
      .call-to-action
        a.button.button--primary(
          target="_blank",
          href="https://msk.kassir.ru/frame/event/104230?key=d68c4b88-00fb-ee51-8fdd-fec9d1c99539"
        ) Купить Билеты
    section#partners.partners.section(v-if="mainPartners")
      .container
        h2.section__heading Информационные партнеры
        .partners__list.partners__list--info
          a.partners__link.partners__link--info(
            v-for="partner in mainPartners",
            :href="partner.link",
            target="_blank",
            rel="noopener noreferrer nofollow")
            img.partners__logo(:src="partner.photo.path")
    section#partners.partners.section(v-if="partners")
      .container
        h2.section__heading Партнеры
        .partners__list
          a.partners__link(
            v-for="partner in partners",
            :href="partner.link",
            target="_blank",
            rel="noopener noreferrer nofollow")
            img.partners__logo(:src="partner.photo.path")
    section#rules.section.section--contrast
      .container
        h2.section__heading Правила фестиваля
        .rules(v-html="content.rules.content")
    section#coordinates.coordinates.section
      .container
        h2.section__heading Как добраться
        p В течение всего дня будут курсировать бесплатные шатлы от станции метро Парк Победы до места проведения фестиваля
    section#contact.contact.section
      .container
        h2.section__heading Контакты
        p По вопросам сотрудничества:&nbsp;
          a(href="mailto:info@skjazz.ru") info@skjazz.ru
  .popup(v-if="isGalleryOpen")
    button.popup__close(@click.stop="closeGallery")
      svg(xmlns="http://www.w3.org/2000/svg" viewBox="0 0 371.23 371.23")
        path(d=`M371.23 21.213L350.018 0 185.615 164.402 21.213 0 0 21.213l164.402
        164.402L0 350.018l21.213 21.212
        164.402-164.402L350.018 371.23l21.212-21.212-164.402-164.403z`)
    swiper(:options="galleryOptions" ref="gallerySwiper")
      template(v-for="slide in gallery")
        swiper-slide.popup__slide
          iframe(
            v-if="slide.videoId",
            :src="'https://www.youtube.com/embed/'+slide.videoId+'?rel=0&amp;controls=0&amp;showinfo=0'",
            frameborder="0",
            allow="autoplay; encrypted-media",
            allowfullscreen
          ).popup__video
          img(
            v-else,
            :src="slide.full"
          ).popup__image
      .swiper-pagination.swiper-pagination-white.js-gallery-pagination(slot="pagination")
      .swiper-button-next.swiper-button-white.js-gallery-next(slot="button-next")
      .swiper-button-prev.swiper-button-white.js-gallery-prev(slot="button-prev")
  .popup(v-if="currentArtist").main(@click.self="closeArtist")
    button.popup__close(@click.stop="closeArtist")
      svg(xmlns="http://www.w3.org/2000/svg" viewBox="0 0 371.23 371.23")
        path(d=`M371.23 21.213L350.018 0 185.615 164.402 21.213 0 0 21.213l164.402
        164.402L0 350.018l21.213 21.212
        164.402-164.402L350.018 371.23l21.212-21.212-164.402-164.403z`)
    .artist-info
      .artist-info__photo(v-if="currentArtist.photoWide")
        img.preview(:src="currentArtist.photoWide.path", :alt="currentArtist.name")
      a.artist-info__link(:href="currentArtist.link") {{currentArtist.link}}
      .artist-info__about(v-html="currentArtist.about")
      .artist-info__ok
        button.button.button--primary(@click="closeArtist") Ок, спасибо!
</template>

<script>
/* eslint-disable no-console, no-plusplus */
import Navigation from '@/components/Navigation';
import api from '@/api/';

export default {
  name: 'App',
  components: {
    Navigation,
  },
  data() {
    return {
      isMenuOpen: false,
      isMobile: false,
      isScrolled: false,
      newsfeedOption: {
        speed: 667,
        spaceBetween: 0,
        slidesPerView: 4,
        observer: true,
        observeParents: true,
        breakpoints: {
          767: {
            slidesPerView: 1,
          },
          1200: {
            slidesPerView: 2,
          },
          1600: {
            slidesPerView: 3,
          },
        },
      },
      activeIndex: 0,
      gallery: {
        image_2016_01: {
          thumb: 'static/img/2016-1.jpg',
          full: 'static/img/2016/1.jpg',
        },
        image_2016_02: {
          thumb: 'static/img/2016-2.jpg',
          full: 'static/img/2016/2.jpg',
        },
        image_2016_03: {
          thumb: 'static/img/2016-3.jpg',
          full: 'static/img/2016/3.jpg',
        },
        image_2016_04: {
          thumb: 'static/img/2016-4.jpg',
          full: 'static/img/2016/4.jpg',
        },
        image_2016_05: {
          thumb: 'static/img/2016-5.jpg',
          full: 'static/img/2016/5.jpg',
        },
        image_2016_06: {
          thumb: 'static/img/2016-6.jpg',
          full: 'static/img/2016/6.jpg',
        },
        image_2016_07: {
          thumb: 'static/img/video-2016.gif',
          full: 'static/img/2016/7.jpg',
          videoId: '7AEgOSzbBDY',
        },
        image_2016_08: {
          thumb: 'static/img/2016-8.jpg',
          full: 'static/img/2016/8.jpg',
        },
        image_2016_09: {
          thumb: 'static/img/2016-9.jpg',
          full: 'static/img/2016/9.jpg',
        },
        image_2016_10: {
          thumb: 'static/img/2016-10.jpg',
          full: 'static/img/2016/10.jpg',
        },
        image_2016_11: {
          thumb: 'static/img/2016-11.jpg',
          full: 'static/img/2016/11.jpg',
        },
        image_2017_01: {
          thumb: 'static/img/2017-1.jpg',
          full: 'static/img/2017/1.jpg',
        },
        image_2017_02: {
          thumb: 'static/img/2017-2.png',
          full: 'static/img/2017/2.jpg',
        },
        image_2017_03: {
          thumb: 'static/img/2017-3.png',
          full: 'static/img/2017/3.jpg',
        },
        image_2017_04: {
          thumb: 'static/img/2017-4.png',
          full: 'static/img/2017/4.jpg',
        },
        image_2017_05: {
          thumb: 'static/img/2017-5.png',
          full: 'static/img/2017/5.jpg',
        },
        image_2017_06: {
          thumb: 'static/img/2017-6.png',
          full: 'static/img/2017/6.jpg',
        },
        image_2017_07: {
          thumb: 'static/img/video-2017.gif',
          full: 'static/img/2017/7.jpg',
          videoId: 'aMwDBSLd2d8',
        },
        image_2017_08: {
          thumb: 'static/img/2017-8.png',
          full: 'static/img/2017/8.jpg',
        },
        image_2017_09: {
          thumb: 'static/img/2017-9.png',
          full: 'static/img/2017/9.jpg',
        },
        image_2017_10: {
          thumb: 'static/img/2017-10.png',
          full: 'static/img/2017/10.jpg',
        },
        image_2017_11: {
          thumb: 'static/img/2017-11.png',
          full: 'static/img/2017/11.jpg',
        },
      },
      isGalleryOpen: false,
      galleryOptions: {
        pagination: {
          el: '.js-gallery-pagination',
        },
        navigation: {
          nextEl: '.js-gallery-next',
          prevEl: '.js-gallery-prev',
        },
        initialSlide: 0,
      },
      currentYear: 'year2018',
      content: {
        year2018: {
          title: '2018',
          artists: [],
          programm: [],
        },
        year2017: {
          title: '2017',
          artists: [],
          programm: {},
        },
        year2016: {
          title: '2016',
          artists: [],
          programm: {},
        },
        rules: '',
        schedule: '',
      },
      currentArtist: null,
      partners: null,
      mainPartners: null,
      programmSliderOptions: {
        pagination: {
          el: '.js-programm-pagination',
        },
        navigation: {
          nextEl: '.js-programm-next',
          prevEl: '.js-programm-prev',
        },
      },
    };
  },
  computed: {
    swiper() {
      return this.$refs.newsfeedSwiper.swiper;
    },
    galleryArray() {
      return Object.values(this.gallery);
    },
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.handleResize);
      this.handleResize();

      api.getCollectionByKey('artists2016').then((artists) => {
        this.content.year2016.artists = artists;
      });

      api.getCollectionByKey('artists2017').then((artists) => {
        this.content.year2017.artists = artists;
      });

      api.getCollectionByKey('artists2018').then((artists) => {
        this.content.year2018.artists = artists;
      });

      api.getCollectionByKey('programm2018').then((programm) => {
        this.content.year2018.programm = programm;
      });

      api.getCollectionByKey('partners').then((partners) => {
        this.partners = partners;
      });

      api.getCollectionByKey('mainPartners').then((mainPartners) => {
        this.mainPartners = mainPartners;
      });

      api.getRegionByKey('programm2016').then((programm) => {
        this.content.year2016.programm = programm;
      });

      api.getRegionByKey('programm2017').then((programm) => {
        this.content.year2017.programm = programm;
      });

      api.getRegionByKey('rules').then((rules) => {
        this.content.rules = rules;
      });

      api.getRegionByKey('schedule').then((schedule) => {
        this.content.schedule = schedule;
      });

      this.swiper.on('slideChangeTransitionEnd', () => {
        this.activeIndex = this.swiper.activeIndex;
      });

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
      console.log('toggleMenu');
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
    slideTo(index) {
      this.swiper.slideTo(index);
    },
    openGallery(slide) {
      const index = this.galleryArray.indexOf(slide);
      this.galleryOptions.initialSlide = index;
      this.isGalleryOpen = true;
    },
    closeGallery() {
      this.isGalleryOpen = false;
    },
    openArtist(artist) {
      this.currentArtist = artist;
    },
    closeArtist() {
      this.currentArtist = null;
    },
  },
};
</script>

<style lang="scss"></style>



// WEBPACK FOOTER //
// App.vue