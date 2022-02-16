<template>
  <form class="form-panel address">
    <div action="" class="form-panel__content">
      <h2 class="form-panel__content__title">寄送地址</h2>
      <div class="form-panel__content__row address__row1">
        <div class="address__row1__appellation">
          <label for="appellation">稱謂</label>
          <select 
          name="appellation" 
          id="appellation" 
          v-model="formInfo.appellation"
          >
            <option value selected disabled >請選擇</option>
            <option value="先生">先生</option>
            <option value="女士">女士</option>
          </select>
        </div>
        <div class="address__row1__name">
          <label for="name">姓名</label>
          <input
            id="name"
            class="d-block"
            type="text"
            placeholder="請輸入姓名"
            name="name"
            v-model="formInfo.name"
          />
        </div>
      </div>
      <div class="form-panel__content__row address__row2">
        <div class="address__row2__phone">
          <label for="phone">電話</label>
          <input
            type="text"
            id="phone"
            placeholder="請輸入行動電話"
            name="phone"
            v-model="formInfo.phone"
          />
        </div>
        <div class="address__row2__email">
          <label for="email">信箱</label>
          <input
            type="text"
            id="email"
            placeholder="請輸入電子郵件"
            name="email"
            v-model="formInfo.email"
          />
        </div>
      </div>
      <div class="form-panel__content__row address__row3">
        <div class="address__row3__area">
          <label for="area">縣市</label>
          <select name="area" id="area" v-model="formInfo.area">
            <option value selected disabled >請選擇縣市</option>
            <option v-for="(val, index) in cities" :key="index" :value="val">{{ val }}</option>
          </select>
        </div>
        <div class="address__row3__address">
          <label for="address">地址</label>
          <input
            id="address"
            class="w-100"
            type="text"
            placeholder="請輸入地址"
            name="address"
            v-model="formInfo.address"
          />
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
  data() {
    return {
      cities: [
        '台北市',
        '新北市',
        '花蓮市',
        '台中市',
        '台南市',
        '屏東市',
        '高雄市',
      ]  
    }
  }
}
</script>
