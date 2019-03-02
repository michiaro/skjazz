<template lang="pug">
  nav.nav
    a.nav__link(href="#program" @click="onClick") Программа
    a.nav__link(href="#artists" @click="onClick") Артисты
    a.nav__link(href="#discuss" @click="onClick") Дискуссии
    a.nav__link(href="#howitwas" @click="onClick") Как это было
    a.nav__link(href="#partners" @click="onClick") Партнеры
    a.nav__link(href="#contact" @click="onClick") Контакты
</template>

<script>
export default {
  name: 'Navigation',
  props: {
    onClick: Function,
  },
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
    border: 0;
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

