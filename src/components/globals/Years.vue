<template lang="pug">
.years
    button.years__item(
      @click="$emit('set','year2016')",
      :class=`{
        'years__item--active': currentYear === 'year2016',
        'years__item--contrast': isContrast
      }`) 2016
    button.years__item(
      @click="$emit('set','year2017')",
      :class=`{
        'years__item--active': currentYear === 'year2017',
        'years__item--contrast': isContrast
      }`) 2017
</template>

<script>
/* eslint-disable no-console, no-plusplus */
export default {
  name: 'Years',
  props: {
    currentYear: String,
    isContrast: Boolean,
  },
};
</script>

<style lang="scss">
.years {
  text-align: center;

  &__item {
    cursor: pointer;
    background: none;
    font-size: 18px;
    margin: 0 10px;
    border: none;
    color: #038ed2;

    &:focus {
      outline: none;
    }

    &--contrast {
      color: white;
    }

    &--active {
      font-weight: bold;
    }
  }
}
</style>
