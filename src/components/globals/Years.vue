<template lang="pug">
.years
  button.years__item(
    v-for="year in years"
    @click="$emit('set',getYearId(year))",
    :class=`{
      'years__item--active': currentYear === getYearId(year),
      'years__item--contrast': isContrast
    }`) {{year}}
</template>

<script>
/* eslint-disable no-console, no-plusplus */
export default {
  name: 'Years',
  props: {
    currentYear: String,
    isContrast: Boolean,
    years: Array,
  },
  methods: {
    getYearId(yearNumber) {
      return `year${yearNumber}`;
    },
  },
};
</script>

<style lang="scss">
.years {
  $block: &;
  text-align: center;

  &__item {
    cursor: pointer;
    background: none;
    font-size: 18px;
    margin: 0 10px;
    border: none;
    color: #038ed2;
    padding: 8px 16px;
    text-decoration: underline;

    &:focus {
      outline: none;
    }

    &--contrast {
      color: white;
    }

    &--active {
      background: #038ed2;
      color: white;
      text-decoration: none;
    }
    &--contrast#{$block}__item--active {
      background: white;
      color: #038ed2;
    }
  }
}
</style>
