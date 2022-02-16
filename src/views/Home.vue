<template>
  <main class="main">
    <div class="main__left">
      <Stepper :page="page" />
      <router-view
        :formInfo="formInfo"
        @after-add-freight="afterAddFreight"
        @after-free-freight="afterFreeFreight"
        @page-change="afterPageChange"
      />
      <Button
        :page="page"
        @after-bottom-form="afterBottomForm(), saveLocalStorage(), pageStep()"
        @after-top-form="afterTopForm(), pageStep()"
        @after-confirm-form="afterConfirmForm(), saveLocalStorage()"
      />
    </div>
    <div class="main__right">
      <CartCard
        :cartCard="cartCard"
        @after-delete-quantity="afterDeleteQuantity"
        @after-add-quantity="afterAddQuantity"
      />
    </div>
  </main>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
import Stepper from "../components/Stepper.vue";
import Button from "../components/Button.vue";
import CartCard from "../components/CartCard.vue";
// import { component } from 'vue/types/umd';

export default {
  name: "Home",
  components: {
    Stepper,
    Button,
    CartCard,
  },
  data() {
    return {
      cartCard: {
        cards: [
          {
            id: uuidv4(),
            name: "破壞補丁修身牛仔褲",
            image: "https://i.imgur.com/y0XZysy.png",
            price: 3999,
            priceTotal: 0,
            quantity: 0,
          },
          {
            id: uuidv4(),
            name: "刷色直筒牛仔褲",
            image: "https://i.imgur.com/MpFOnLZ.png",
            price: 1299,
            priceTotal: 0,
            quantity: 0,
          },
        ],
        freight: 0,
        cartTotal: 0,
      },
      formInfo: {
        appellation: "",
        name: "",
        phone: "",
        email: "",
        area: "",
        address: "",
        shippingFee: 0,
        cardName: "",
        cardNumber: "",
        cardDate: "",
        cardCvcCcv: "",
      },
      page: Number(this.$route.name),
    };
  },
  created() {
    // console.log("取得 localStorage 資料");
    this.formInfo =
      JSON.parse(localStorage.getItem("FORM_DATA")) || this.formInfo;
    this.cartCard =
      JSON.parse(localStorage.getItem("CARD_DATA")) || this.cartCard;
  },
  methods: {
    saveLocalStorage() {
      // console.log("把資料存到 localStorage");
      localStorage.setItem("FORM_DATA", JSON.stringify(this.formInfo));
      localStorage.setItem("CARD_DATA", JSON.stringify(this.cartCard));
    },
    afterDeleteQuantity(cardId) {
      const index = this.cartCard.cards.findIndex((card) => card.id === cardId);
      if (this.cartCard.cards[index].quantity === 0) {
        return;
      } else {
        this.cartCard.cards[index].quantity -= 1;
        this.cartCard.cards[index].priceTotal =
          this.cartCard.cards[index].quantity *
          this.cartCard.cards[index].price;
        this.cartCard.cartTotal -= this.cartCard.cards[index].price;
      }
    },
    afterAddQuantity(cardId) {
      const index = this.cartCard.cards.findIndex((card) => card.id === cardId);
      this.cartCard.cards[index].quantity += 1;
      this.cartCard.cards[index].priceTotal =
        this.cartCard.cards[index].quantity * this.cartCard.cards[index].price;
      this.cartCard.cartTotal += this.cartCard.cards[index].price;
    },
    afterBottomForm() {
      this.page += 1;
    },
    afterTopForm() {
      this.page -= 1;
    },
    afterFreeFreight() {
      this.cartCard.freight = 0;
      this.cartCard.cartTotal -= 500;
    },
    afterAddFreight() {
      this.cartCard.freight = 500;
      this.cartCard.cartTotal += 500;
    },
    afterShippingChecked(shippingName, shippingPrice) {
      this.cartCard.freight = shippingPrice;
      if (shippingName === "DHL 貨運") {
        this.cartCard.cartTotal += shippingPrice;
      } else {
        this.cartCard.cartTotal = shippingPrice;
      }
    },
    afterConfirmForm() {
      const form = this.formInfo;
      const cartCard = this.cartCard;
      for (let [name, value] of Object.entries(form)) {
        console.log(`${name}: ${value}`);
      }
      this.$emit("after-show-modal", form, cartCard);
    },
    pageStep() {
      // 改變畫面上的路徑名稱
      this.$router.push({ name: this.page});
    },
    afterPageChange() {
      this.page = Number(this.$route.name);
    },
  },
};
</script>
