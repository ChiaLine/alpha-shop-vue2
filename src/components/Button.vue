<template>
  <div class="form-panel__botton">
    <button
      class="form-panel__botton--top"
      :class="{ visibility: page === 1 }"
      type="button"
      @click.stop.prevent="handleTopButtonClick"
    >
      ← 上一步
    </button>
    <button
      class="form-panel__botton--checked"
      type="button"
      v-if="page === 3"
      @click.stop.prevent="handleConfirmButtonClick"
      data-toggle="modal" 
      data-target="#exampleModal"
    >
      確認下單
    </button>
    <button
      class="form-panel__botton--checked"
      type="button"
      @click.stop.prevent="handleBottomButtonClick"
      v-else
    >
      下一步 →
    </button>
  </div>
</template>


<script>
export default {
  props: {
    page: {
      type: Number,
      require: true,
    },
  },
  methods: {
    handleBottomButtonClick() {
      // if (this.page === 3) {
      //   return;
      // }
      this.$emit("after-bottom-form");
    },
    handleTopButtonClick() {
      //  if (this.page === 1) {
      //   return;
      // }
      this.$emit("after-top-form");
    },
    handleConfirmButtonClick() {
      this.$emit("after-confirm-form");
    },
  },
};
</script>
