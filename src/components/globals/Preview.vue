<template lang="pug">
.image
  img.image__picture(:src="full ? source.full : source.thumb", @click="$emit('open', source)")
</template>

<script>
/* eslint-disable no-console, no-plusplus */
export default {
  name: 'Preview',
  props: {
    source: Object,
    full: Boolean,
  },
};
</script>

<style lang="scss">
.image {
  height: 100%;
  overflow: hidden;
  position: relative;

  &__picture {
    object-fit: cover;
    position: absolute;
    display: block;
    height: 100%;
    width: 100%;
  }
}
</style>
