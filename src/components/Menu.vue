<template>
    <section class="menu">
        <div class="menu__item"
            v-for="item in items"
            :key="item.id"
            @click="sendSectionRequest(item)"
            >
            {{ item }}
            </div>
    </section>
</template>

<script>
export default {
  data() {
    return {
      items: ['Hot', 'Top', 'User'],
    };
  },
  methods: {
    sendSectionRequest(item) {
      this.$store.dispatch('requestImages', item.toLowerCase());
    },
  },
};
</script>

<style scoped lang="scss">
    .menu {
        display: flex;
        flex-direction: row;
        border: 1px solid rgb(230, 231, 233);
        margin: 0.8rem;
        height: 3rem;
        width: 50%;

        &__item {
            display: flex;
            flex-grow: 1;
            align-items: center;
            justify-content: center;
            border: 1px solid rgb(87, 87, 87);
            background-color: rgb(228, 228, 228);

            &:hover {
                cursor: pointer;
            }
        }
    }
</style>
