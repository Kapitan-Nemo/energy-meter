<template>
  <ApplianceForm>
    <template v-slot:header>
      <h2 class="modal__title">Add new appliance</h2>
      <img
        @click="$emit('closeModal')"
        class="modal__header-close"
        src="@/assets/svg/controls/close.svg"
      />
    </template>
    <template v-slot:body>
      <transition>
        <div class="modal__error" v-if="newTime > 24">
          <span class="modal__error-wrapper">
            <img
              class="modal__error-icon"
              src="@/assets/svg/controls/warning.svg"
            />
            Error!
          </span>
          <p class="modal__error-text">Max used per day is 24h</p>
        </div>
      </transition>
      <transition>
        <div class="modal__error" v-if="showModalError">
          <span class="modal__error-wrapper">
            <img
              class="modal__error-icon"
              src="@/assets/svg/controls/warning.svg"
            />
            Error!
          </span>

          <p class="modal__error-text">Please complete all fields.</p>
        </div>
      </transition>
      <form>
        <div class="modal__body">
          <div class="modal__body-item">
            <div class="modal__body-item-wrapper">
              <img
                class="modal__body-icon"
                src="@/assets/svg/controls/device.svg"
              />
              <label class="modal__body-label">Choose device:</label>
            </div>
            <select class="modal__body-select" v-model="newDevice">
              <option disabled value="">Please Select</option>
              <option>Washing machine</option>
              <option>Fridge</option>
              <option>TV</option>
              <option>Other</option>
            </select>
          </div>
          <div class="modal__body-item">
            <div class="modal__body-item-wrapper">
              <img
                class="modal__body-icon"
                src="@/assets/svg/controls/wattage.svg"
              />
              <label class="modal__body-label">Wattage:</label>
            </div>
            <div class="modal__body-item-wrapper">
              <input
                type="number"
                inputmode="decimal"
                v-model="newWattage"
                class="modal__body-input"
              />
              <input
                class="modal__body-input-placeholder"
                type="text"
                value="W"
                disabled
              />
            </div>
          </div>
          <div class="modal__body-item">
            <div class="modal__body-item-wrapper">
              <img
                class="modal__body-icon"
                src="@/assets/svg/controls/time.svg"
              />
              <label class="modal__body-label">Used per day:</label>
            </div>
            <div class="modal__body-item-wrapper">
              <input
                type="number"
                inputmode="decimal"
                class="modal__body-input"
                v-model="newTime"
              />
              <input
                class="modal__body-input-placeholder"
                type="text"
                value="h"
                disabled
              />
            </div>
          </div>
        </div>
        <div class="modal__footer">
          <button @click="submitForm" class="modal__footer-button">Save</button>
        </div>
      </form>
    </template>
  </ApplianceForm>
</template>

<script setup>
import { ref, inject } from "vue";
import ApplianceForm from "./Modal/ModalTemplate.vue";

let id = 0;
const Appliances = inject("Appliances");
const newWattage = ref("");
const newTime = ref("");
const newDevice = ref("");
let showModalError = ref(false);

function addAppliance() {
  Appliances.value.push({
    id: id++,
    wattage: newWattage.value,
    time: newTime.value,
    device: newDevice.value,
    cost: newWattage.value * 0.001 * newTime.value * 0.7,
  });
  newWattage.value = "";
  newTime.value = "";
  newDevice.value = "";
}

function submitForm(e) {
  e.preventDefault();
  if (
    newWattage.value == "" ||
    newTime.value == "" ||
    newTime.value > 24 ||
    newDevice.value == ""
  ) {
    return (showModalError.value = true);
  } else {
    addAppliance();
    return (showModalError.value = false);
  }
}
</script>
