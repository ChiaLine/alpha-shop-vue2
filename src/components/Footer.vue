<template>
  <footer>
    <div class="footer__content">
      <img
        class="footer__logo"
        :src="footerLogo"
        style="width: 170px; height: 30px"
      />
      <div class="footer__content__section">
        <h2>客戶服務</h2>
        <a href="">運送說明</a>
        <a href="">退換貨相關</a>
        <a href="">付款資訊</a>
        <a href="">FAQ</a>
      </div>
      <div class="footer__content__section">
        <h2>關於我們</h2>
        <a href="">品牌故事</a>
        <a href="">媒體聯繫</a>
        <a href="">Press kit</a>
      </div>
      <div class="footer__content__section">
        <h2>資訊</h2>
        <a href="">隱私權政策</a>
        <a href="">Cookie</a>
        <a href="">GDPR</a>
      </div>
      <div class="footer__content__section">
        <h2>追蹤ALPHA Shop</h2>
        <a href="">+886 02123-45678</a>
        <div class="us__icons">
          <img
            v-for="(value, key, index) in footerIcons"
            :key="index"
            :src="value"
            :class="key"
          />
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  props: {
    footerLogo: {
      type: String,
      require: true,
    },
  },
  data() {
    return {
      footerIcons: {
        facebookIcon: "https://i.imgur.com/PiQSa8o.png",
        instagramIcon: "https://i.imgur.com/1Zw629X.png",
        callIcon: "https://i.imgur.com/LMeAUvw.png",
      },
    };
  },
};
</script>
