<template>
  <div class="stepper-panel">
    <h1 class="stepper-panel__title">結帳</h1>
    <div class="stepper-panel__content">
      <div class="stepper-panel__content__step" :class="{ checked: page > 1 }">
        <div class="stepper-panel__content__step--container color"></div>
        <div class="stepper-panel__content__step--taxt">寄送地址</div>
      </div>
      <div class="stepper-panel__content__step" :class="{ checked: page > 2 }">
        <div
          class="stepper-panel__content__step--container"
          :class="{ opacity: page < 2 , color: page >= 2 }"
        ></div>
        <div class="stepper-panel__content__step--connect-line"></div>
        <div class="stepper-panel__content__step--taxt" :class="{ opacity: page < 2 }">
          運送方式
        </div>
      </div>
      <div class="stepper-panel__content__step">
        <div
          class="stepper-panel__content__step--container"
          :class="{ opacity: page < 3 , color: page >= 3}"
        ></div>
        <div
          class="stepper-panel__content__step--connect-line"
          :class="{ opacity: page < 2 }"
        ></div>
        <div class="stepper-panel__content__step--taxt" :class="{ opacity: page < 3 }">
          付款資訊
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    page: {
      type: Number,
      // require: true
      default: 1,
    },
  },
};
</script>
