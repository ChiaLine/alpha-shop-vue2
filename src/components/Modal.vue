<template>
  <div class="modal-container">
    <div class="modal">      
      <h2 class="mb-1">購物籃：</h2>
      <p v-for="(item) in cartCards" :key="item.id">
        <samp v-show="item.quantity > 0">
          {{ item.name }} {{ item.quantity }}件， ${{ item.priceTotal }}
        </samp>
      </p>
      <p>運費: {{ freight > 0 ? freight : '免費' }}</p>
      <p>小計: {{ cartTotal }}</p>
      <h2 class="mt-5 mb-1">結帳：</h2>
      <p v-for="(val, key, index) in formInfo" :key="index">
        {{ key }} : {{ val }}
      </p>
      <button class="modal-button" @click.stop.prevent="handleDeleteButtonClick">
        X
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    formInfo: {
      type: Object,
      require: true
    },
    cartCards: {
      type: Array,
      require: true
    },
    freight: {
      type: Number,
      require: true
      // default: 0,
    },
    cartTotal: {
      type: Number,
      // default: 0,
      require: true
    }
  },
  methods: {
    handleDeleteButtonClick(){
      this.$emit('after-delete-modal')
    },
  }
}
</script>