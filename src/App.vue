<template>
  <div id="alpha-shop">
    <Header 
    :header-logo="headerLogo"
    @after-toggle-dark="afterToggleDark"
    @after-toggle-light="afterToggleLight"
    /> 
    <router-view 
    @after-show-modal="afterShowModal"
    />
    <Footer :footer-logo="footerLogo"/> 
    <Modal
      v-if="showModal"
      :form-info="formInfo"
      :cart-cards="cartCards"
      :freight="freight"
      :cart-total="cartTotal"
      @after-delete-modal="deleteShowModal"
    />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Modal from './components/Modal.vue'

export default {
  name: "App",
  components: {
    Header,
    Footer,
    Modal,
  },
  data() {
    return {
      cartCards: [],
      freight: 0,
      cartTotal: 0,
      formInfo: {},
      dataTheme: '',
      headerLogo: 'https://i.imgur.com/WwqZCgv.png',
      footerLogo: 'https://i.imgur.com/WwqZCgv.png',
      showModal: false,
    }
  },
  methods: {
    afterToggleDark() {
      document.documentElement.setAttribute("data-theme", "dark");
      this.headerLogo = 'https://i.imgur.com/BaBW5zw.png'
      this.footerLogo = this.headerLogo
    },
    afterToggleLight() {
      document.documentElement.setAttribute("data-theme", "light");
      this.headerLogo = 'https://i.imgur.com/WwqZCgv.png'
      this.footerLogo = this.headerLogo
    },
    afterShowModal(form, cartCard) {
      this.formInfo = form
      this.cartCards = cartCard.cards
      this.freight = cartCard.freight
      this.cartTotal = cartCard.cartTotal
      this.showModal = true;
    },
    deleteShowModal() {
      this.showModal = false;
    },
  },
};
</script>

<style scoped>
  #alpha-shop {
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
</style>