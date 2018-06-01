<template lang="pug">
  nav.nav
    a.nav__link(href="#howitwas") Как это было
    a.nav__link(href="#artists") Артисты
    a.nav__link(href="#program") Программа
    a.nav__link(href="#partners") Партнеры
    a.nav__link(href="#coordinates") Как добраться
    a.nav__link(href="#contact") Контакты
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

