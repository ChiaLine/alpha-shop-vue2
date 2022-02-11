<template>
  <nav class="nav">
    <input type="checkbox" id="nav__checkbox" class="d-none">
    <div class="nav__menu">
      <ul class="nav__menu__items">
        <li
        class="item"
        v-for="(item, index) in menuItems"
        :key="index"
        >{{ item }}</li>
      </ul>
      <div class="nav__menu__icons">
        <img 
        v-for="(value, key, index ) in menuIcons"
        :key="index"
        :src="value" 
        :class='key'
        v-show="key !== toggleMoonSun && key !== toggleSearchIcon && key !== toggleShoppingCartIcon"
        @click="handleIconClick(key)"
        >
      </div>
    </div>
    <label class="nav__checkbox" for="nav__checkbox">
      <span class="nav__checkbox__hamburger"></span>
    </label>
    <img class="nav__img" :src="headerLogo">
  </nav>
</template>

<script>
export default {
  props: {
    headerLogo: {
      type: String,
      require: true,
    }
  },
  data() {
    return {
      menuItems: [ '男款', '女款', '最新消息', '客製商品', '聯絡我們' ],
      menuIcons: {
        searchIconLight: 'https://i.imgur.com/q2bYyeO.png',
        shoppingCartIconLight: 'https://i.imgur.com/RM48J7y.png',
        moonIcon: 'https://i.imgur.com/XLkh9pq.png',
        searchIconDark: 'https://i.imgur.com/h8rsOvd.png',
        shoppingCartIconDark: 'https://i.imgur.com/Qygt0Yv.png',
        sunIcon: 'https://i.imgur.com/P5O7673.png',
      },
      toggleSearchIcon: 'searchIconDark',
      toggleShoppingCartIcon: 'shoppingCartIconDark',
      toggleMoonSun: 'sunIcon',
    }
  },
  methods: {
    handleIconClick(iconName) {
      if (iconName === 'moonIcon') {
        this.toggleMoonSun = 'moonIcon'
        this.toggleSearchIcon = 'searchIconLight'
        this.toggleShoppingCartIcon = 'shoppingCartIconLight'
        this.$emit('after-toggle-dark')
      } else if (iconName ==='sunIcon') {
        this.toggleMoonSun = 'sunIcon'
        this.toggleSearchIcon = 'searchIconDark'
        this.toggleShoppingCartIcon = 'shoppingCartIconDark'
        this.$emit('after-toggle-light')
      }
    }
  },
}
</script>