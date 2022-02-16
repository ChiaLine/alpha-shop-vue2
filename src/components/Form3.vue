<template>
  <form class="form-panel checkout">
    <div action="" class="form-panel__content">
      <h2 class="form-panel__content__title">付款資訊</h2>
      <div class="form-panel__content__row checkout__row1">
        <label for="card-name">持卡人姓名</label>
        <input type="text" 
        id="card-name" 
        placeholder="John Doe" 
        name="card-name"
        v-model="formInfo.cardName"
        />
      </div>
      <div class="form-panel__content__row checkout__row2">
        <label for="card-number">卡號</label>
        <input 
        type="text" 
        id="card-number"
        placeholder="1111 2222 3333 4444" 
        name="card-number"
        v-model="formInfo.cardNumber"
        />
      </div>
      <div class="form-panel__content__row checkout__row3">
        <div class="checkout__card-date">
          <div class="checkout__card-date--left">
            <label for="card-date">有效期限</label>
            <input 
            type="text" 
            id="card-date" 
            placeholder="MM/YY"
            name="card-date"
            v-model="formInfo.cardDate"
            />
          </div>
          <div class="checkout__card-date--right">
            <label for="card-cvc-ccv">CVC/CCV</label>
            <input 
            type="text" 
            id="card-cvc-ccv" 
            placeholder="123" 
            name="card-cvc-ccv"
            v-model="formInfo.cardCvcCcv"
            />
          </div>
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
    }
  },
  created() {
    this.$emit('page-change')
  },
}
</script>