<template>
  <div class="modal-container">
    <div class="modal">
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
    }
  },
  methods: {
    handleDeleteButtonClick(){
      this.$emit('after-delete-modal')
    },
  }
}
</script>