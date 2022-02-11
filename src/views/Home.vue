<template>
  <main class="main">
    <div class="main__left">
      <Stepper :toggle-form-step="toggleFormStep" />
      <Form1 v-show="Page === 1" :formInfo="formInfo" />
      <Form2
        v-show="Page === 2"
        :formInfo="formInfo"
        @after-add-freight="afterAddFreight"
        @after-free-freight="afterFreeFreight"
      />
      <Form3 v-show="Page === 3" :formInfo="formInfo" />
      <Button
        :toggle-form-step="toggleFormStep"
        @after-bottom-form="afterBottomForm(), saveLocalStorage(), pageStep()"
        @after-top-form="afterTopForm(), pageStep()"
        @after-confirm-form=" afterConfirmForm(), saveLocalStorage() "
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
import Form1 from "../components/Form1.vue";
import Form2 from "../components/Form2.vue";
import Form3 from "../components/Form3.vue";
import Button from "../components/Button.vue";
import CartCard from "../components/CartCard.vue";

export default {
  name: "Home",
  components: {
    Stepper,
    Form1,
    Form2,
    Form3,
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
      toggleFormStep: 1,
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
      Page: Number(this.$route.name),
    };
  },
  created() {
    // console.log("取得 localStorage 資料");
    this.toggleFormStep = this.Page;
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
      this.toggleFormStep += 1;
      this.Page = this.toggleFormStep;
    },
    afterTopForm() {
      this.toggleFormStep -= 1;
      this.Page = this.toggleFormStep;
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
      if (shippingName === 'DHL 貨運') {
        this.cartCard.cartTotal += shippingPrice;
      } else {
        this.cartCard.cartTotal = shippingPrice;
      }
    },
    afterConfirmForm() {
      const form = this.formInfo;
      for (let [name, value] of Object.entries(form)) {
        console.log(`${name}: ${value}`);
      }
      this.$emit("after-show-modal", form);
    },
    pageStep() {
      this.$router.push({ name: this.toggleFormStep });
    },
  },
};
</script>
