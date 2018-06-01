<template lang="pug">
  nav.nav
    a.nav__link(href="#howitwas") Как это было
    a.nav__link(href="#artists") Артисты
    a.nav__link(href="#program") Программа
    a.nav__link(href="#partners") Партнеры
    a.nav__link(href="#contact") Контакты
    a.nav__link.nav__link--contrast(
      target="_blank",
      href="https://msk.kassir.ru/frame/event/104230?key=d68c4b88-00fb-ee51-8fdd-fec9d1c99539"
    ) Купить билеты
</template>

<script>
export default {
  name: 'Navigation',
};
</script>

<style lang="scss">
@import "~@/styles/colors";

.nav {
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 1200px) {
    flex-flow: row;
  }

  &__link {
    padding: 10px 16px;
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 16px;
    font-weight: bold;
    text-align: center;

    &:hover {
      background: $color--contrast;
      color: $color--primary;
    }

    &--contrast {
      background: $color--contrast;
      color: $color--primary;

      &:hover {
        background: white;
      }
    }
  }
}
</style>

