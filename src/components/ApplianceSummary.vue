<template>
  <ApplianceSummary>
    <template v-slot:header>
      <h2 class="modal__title">Summary</h2>
      <img
        @click="$emit('closeSummary')"
        class="modal__header-close"
        src="@/assets/svg/controls/close.svg"
      />
    </template>
    <template v-slot:body>
      <img class="modal__summary-icon" src="@/assets/svg/controls/cost.svg" />
      <div class="modal__summary-body">
        <p class="modal__summary-title">Costs of all appliances</p>
        <div class="modal__body-item modal__summary-item">
          <div class="modal__body-item-wrapper">
            <img class="modal__body-icon" src="@/assets/svg/controls/day.svg" />
            <label class="modal__body-label">Per day:</label>
          </div>
          <div class="modal__body-item-wrapper">
            <p class="modal__summary-badge">{{ costSummary.toFixed(2) }} $</p>
          </div>
        </div>
        <div class="modal__body-item modal__summary-item">
          <div class="modal__body-item-wrapper">
            <img
              class="modal__body-icon"
              src="@/assets/svg/controls/month.svg"
            />
            <label class="modal__body-label">Per month:</label>
          </div>
          <div class="modal__body-item-wrapper">
            <p class="modal__summary-badge">
              {{ (costSummary * 30).toFixed(2) }} $
            </p>
          </div>
        </div>
        <div class="modal__body-item">
          <div class="modal__body-item-wrapper">
            <img
              class="modal__body-icon"
              src="@/assets/svg/controls/year.svg"
            />
            <label class="modal__body-label">Per year:</label>
          </div>
          <div class="modal__body-item-wrapper">
            <p class="modal__summary-badge">
              {{ (costSummary * 365).toFixed(2) }} $
            </p>
          </div>
        </div>
      </div>
      <div class="modal__footer">
        <button class="modal__footer-button">Download CSV</button>
      </div>
    </template>
  </ApplianceSummary>
</template>

<script setup>
import { computed, inject } from "vue";
import ApplianceSummary from "./Modal/ModalTemplate.vue";

const Appliances = inject("Appliances");

const costSummary = computed(() => {
  return Appliances.value.reduce(
    (costSummary, Appliance) => Appliance.cost + costSummary,
    0
  );
});
</script>

<style lang="scss">
.modal {
  &__summary {
    &-body {
      padding: 25px 25px 25px 25px;
    }
    &-item {
      margin: 0 0 30px 0;
    }
    &-title {
      font-size: 25px;
      font-variation-settings: "wght" 500;
      margin: 0 0 30px 0;
      text-align: center;
      @include max-lg {
        font-size: 20px;
      }
    }
    &-icon {
      max-width: 150px;
      margin: -60px auto 0 auto;
      display: flex;
    }
    &-badge {
      font-size: 20px;
      background: $secondary;
      color: $primary;
      margin: 0;
      padding: 10px 20px 10px 20px;
      border-radius: 20px;
      @include max-lg {
        font-size: 14px;
      }
    }
  }
}
</style>
