<template>
  <div class="form-panel__botton">
    <button
      class="form-panel__botton--top"
      :class="{ visibility: toggleFormStep === 1 }"
      type="button"
      @click.stop.prevent="handleTopButtonClick"
    >
      ← 上一步
    </button>
    <button
      class="form-panel__botton--checked"
      type="button"
      v-if="toggleFormStep === 3"
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
    toggleFormStep: {
      type: Number,
      require: true,
    },
  },
  methods: {
    handleBottomButtonClick() {
      if (this.toggleFormStep === 3) {
        return;
      }
      this.$emit("after-bottom-form");
    },
    handleTopButtonClick() {
       if (this.toggleFormStep === 1) {
        return;
      }
      this.$emit("after-top-form");
    },
    handleConfirmButtonClick() {
      this.$emit("after-confirm-form");
    },
  },
};
</script>
