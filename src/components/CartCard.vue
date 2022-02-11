<template>
  <div class="cartcard p-3">
    <h3 class="cartcard__title">購物籃</h3>
    <div class="cartcard__contentx">
      <div
        class="cartcard__content__card"
        v-for="card in cartCard.cards"
        :key="card.id"
      >
        <img :src="card.image" alt="" />
        <div class="cartcard__content__card__text">
          <p>{{ card.name }}</p>
          <div class="cartcard__content__card__text__icons">
            <div
              class="down"
              @click.stop.prevent="handleDeleteButtonClick(card.id)"
            >
              -
            </div>
            <span class="anoumt">{{ card.quantity }}</span>
            <div class="up" @click.stop.prevent="handleAddButtonClick(card.id)">
              +
            </div>
          </div>
        </div>
        <div class="cartcard__content__card__price">
          <span>$</span>
          <span>{{ card.priceTotal }}</span>
        </div>
      </div>
    </div>
    <div class="cartcard__freight">
      <p>運費</p>
      <p>{{ cartCard.freight === 0 ? "免費" : "$" + cartCard.freight }}</p>
    </div>
    <div class="cartcard__total">
      <p>小計</p>
      <div class="totals">
        <span>$</span>
        <span class="total">{{ cartCard.cartTotal }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cartCard: {
      type: Object,
      require: true,
    },
  },
  methods: {
    handleDeleteButtonClick(cardId) {
      this.$emit("after-delete-quantity", cardId);
    },
    handleAddButtonClick(cardId) {
      this.$emit("after-add-quantity", cardId);
    },
  },
};
</script>
