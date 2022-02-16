<template>
  <form class="form-panel shipping">
    <div action="" class="form-panel__content">
      <h2 class="form-panel__content__title">運送方式</h2>
      <div
        class="form-panel__content__shipping"
        v-for="(shipping, key) in shippingList"
        :key="key"
      >
        <div class="form-panel__content__shipping__radio">
          <input
            type="radio"
            :id="key"
            name="shipping"
            @click.stop="handleShippingClick(shipping.price)"
            :value="shipping.price"
            v-model="formInfo.shippingFee"
          />
          <label :for="key">
            <div class="form-panel__content__shipping__text">
              <p>{{ shipping.name }}</p>
              <p>{{ shipping.period }}</p>
            </div>
            <div class="form-panel__content__shipping__price">
              <p>{{ shipping.price === 0 ? "免費" : "$" + shipping.price }}</p>
            </div>
          </label>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    formInfo: {
      type: Object,
      require: true,
    },
  },
  data() {
    return {
      shippingList: {
        standard: {
          name: "標準運送",
          period: "約 3~7 個工作天",
          price: 0,
        },
        dhl: {
          name: "DHL 貨運",
          period: "48 小時內送達",
          price: 500,
        },
      },
    };
  },
  created() {
    this.$emit('page-change')
  },
  methods: {
    handleShippingClick(shippingPrice) {
      if (shippingPrice === 0) {
        this.$emit("after-free-freight");
      } else {
        this.$emit("after-add-freight");
      }
    },
  },
};
</script>
