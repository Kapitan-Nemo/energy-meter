<template>
  <ApplianceHero @openModal="openModal"></ApplianceHero>
  <transition name="modal">
    <ApplianceNew @closeModal="closeModal" v-if="showModal"></ApplianceNew>
  </transition>

  <transition name="modal">
    <ApplianceSummary
      @closeSummary="closeSummary"
      v-if="showSummary"
    ></ApplianceSummary>
  </transition>

  <TransitionGroup>
    <section class="hero__empty" v-if="Appliances[0] == null">
      <div class="container-fluid">
        <h2 class="hero__empty-title">
          Whoops! You haven’t added any<br />
          appliances yet.
        </h2>
        <img class="hero__empty-image" src="@/assets/svg/hero/empty.svg" />
      </div>
    </section>

    <section v-else class="appliance">
      <div class="container-fluid">
        <div class="appliance__title-wrap">
          <h2 class="appliance__title">Your appliances:</h2>
          <div class="appliance__button-wrap">
            <button
              v-if="Appliances.length > 1"
              @click="showSummary = true"
              class="appliance__button-summary"
            >
              <span class="appliance__button-summary-wrap"
                >Summary <img src="@/assets/svg/buttons/summary.svg"
              /></span>
            </button>
            <button @click="showEdit" class="appliance__button-setting">
              <span
                class="appliance__button-setting-wrap"
                v-if="showEditOptions"
                >Hide options <img src="@/assets/svg/buttons/settings.svg"
              /></span>
              <span class="appliance__button-setting-wrap" v-else
                >Show options <img src="@/assets/svg/buttons/settings.svg"
              /></span>
            </button>
          </div>
        </div>
        <div class="appliance__card-wrapper">
          <TransitionGroup name="list">
            <div
              class="appliance__card"
              v-for="Appliance in Appliances"
              :key="Appliance.id"
            >
              <transition>
                <div v-if="showEditOptions" class="appliance__options">
                  <button
                    class="appliance__options-delete"
                    @click="removeAppliance(Appliance)"
                  >
                    <img
                      class="appliance__options-delete-icon"
                      src="@/assets/svg/controls/delete.svg"
                    />
                    Delete
                  </button>
                </div>
              </transition>

              <div class="appliance__card__header">
                <p class="appliance__card__header-title">
                  {{ Appliance.device }}
                </p>
                <img
                  class="appliance__card__header-image"
                  src="@/assets/svg/devices/tv.svg"
                  v-if="Appliance.device == 'TV'"
                />
                <img
                  class="appliance__card__header-image"
                  src="@/assets/svg/devices/washing-machine.svg"
                  v-if="Appliance.device == 'Washing machine'"
                />
                <img
                  class="appliance__card__header-image"
                  src="@/assets/svg/devices/fridge.svg"
                  v-if="Appliance.device == 'Fridge'"
                />
                <img
                  class="appliance__card__header-image"
                  src="@/assets/svg/devices/other.svg"
                  v-if="Appliance.device == 'Other'"
                />
              </div>
              <div class="appliance__card__body">
                <div class="appliance__card__body-item">
                  <div class="appliance__card__body-wrapper">
                    <img
                      class="modal__body-icon"
                      src="@/assets/svg/controls/wattage.svg"
                    />
                    <p class="appliance__card__body-title">Wattage:</p>
                  </div>
                  <span class="appliance__card__body-badge"
                    >{{ Appliance.wattage }}W</span
                  >
                </div>
                <div class="appliance__card__body-item">
                  <div class="appliance__card__body-wrapper">
                    <img
                      class="modal__body-icon"
                      src="@/assets/svg/controls/time.svg"
                    />
                    <p class="appliance__card__body-title">Used per day:</p>
                  </div>
                  <span class="appliance__card__body-badge"
                    >{{ Appliance.time }}h</span
                  >
                </div>
                <div class="appliance__card__body-item">
                  <div class="appliance__card__body-wrapper">
                    <img
                      class="modal__body-icon"
                      src="@/assets/svg/controls/power.svg"
                    />
                    <p class="appliance__card__body-title">
                      Power consumption:
                    </p>
                  </div>
                  <span class="appliance__card__body-badge"
                    >{{
                      (Appliance.wattage * 0.001 * Appliance.time).toFixed(2)
                    }}
                    kWh</span
                  >
                </div>
              </div>
              <div class="appliance__card__footer">
                <p class="appliance__card__footer-title">
                  {{ (Appliance.cost * 30).toFixed(2) }}
                  $
                  <small>Per month</small>
                </p>
              </div>
            </div>
          </TransitionGroup>
        </div>
      </div>
    </section>
  </TransitionGroup>
</template>

<script setup>
import { ref, onMounted, watch, provide } from "vue";
import ApplianceHero from "./ApplianceHero.vue";
import ApplianceNew from "./ApplianceNew.vue";
import ApplianceSummary from "./ApplianceSummary.vue";

const showModal = ref(false);
const showSummary = ref(false);
const showEditOptions = ref(false);
const Appliances = ref([]);

provide("Appliances", Appliances);
provide("showModal", showModal);

function openModal() {
  document.body.classList.add("overflow-hidden");
  return (showModal.value = true);
}
function closeModal() {
  document.body.classList.remove("overflow-hidden");
  return (showModal.value = false);
}

function closeSummary() {
  return (showSummary.value = false);
}

function showEdit() {
  showEditOptions.value = !showEditOptions.value;
}

function removeAppliance(Appliance) {
  Appliances.value = Appliances.value.filter((t) => t !== Appliance);
  if (Appliances.value.length < 1) {
    return (showEditOptions.value = false);
  }
}

function getAppliance() {
  if (localStorage.getItem("appliances_list")) {
    Appliances.value = JSON.parse(localStorage.getItem("appliances_list"));
  }
}

watch(
  () => Appliances.value,
  (updatedList) => {
    localStorage.setItem("appliances_list", JSON.stringify(updatedList));
  },
  { deep: true }
);

onMounted(() => {
  getAppliance();
});
</script>

<style lang="scss">
.appliance {
  @include max-lg {
    margin: 100px 0 0 0;
  }
  &__title {
    font-size: 40px;
    margin: 0 0 15px 0;
    @include max-lg {
      font-size: 25px;
      margin: 30px 0 15px 0;
      font-variation-settings: "wght" 500;
    }
  }
  &__title-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-flow: row;
    margin: 0 0 30px 0;
    @include max-lg {
      flex-flow: column-reverse;
      margin: 0;
    }
  }
  &__button-wrap {
    display: flex;
    flex-flow: row;
  }
  &__button-setting {
    font-size: 25px;
    background: $secondary;
    color: $primary;
    border-radius: 20px;
    height: 70px;
    width: 315px;
    cursor: pointer;
    font-variation-settings: "wght" 400;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @include max-lg {
      width: 80px;
      height: 70px;
      font-size: 0px;
      justify-content: center;
      margin: 0px;
    }
    &-wrap {
      display: flex;
      width: 100%;
      justify-content: space-between;
      padding: 0px 15px 0 15px;
      align-items: center;
      @include max-lg {
        display: flex;
        width: auto;
        justify-content: space-between;
        padding: 0;
        align-items: center;
      }
    }
  }
  &__button-summary {
    font-size: 25px;
    background: $primary;
    color: $primary-light;
    border-radius: 20px;
    height: 70px;
    width: 315px;
    margin: 0 30px 0 0;
    cursor: pointer;
    font-variation-settings: "wght" 400;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @include max-lg {
      width: 80px;
      height: 70px;
      font-size: 0px;
      justify-content: center;
      margin: 0px 30px 0 0;
    }
    &-wrap {
      display: flex;
      width: 100%;
      justify-content: space-between;
      padding: 0px 15px 0 15px;
      align-items: center;
      @include max-lg {
        display: flex;
        width: auto;
        justify-content: space-between;
        padding: 0;
        align-items: center;
      }
    }
  }
  &__options {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    background: rgba(29, 43, 71, 0.5);
    border-radius: 20px;
    &-delete {
      width: 100px;
      height: 100px;
      background: $primary;
      color: $primary-light;
      display: flex;
      flex-flow: column;
      justify-content: center;
      align-items: center;
      border-radius: 20px;
      cursor: pointer;
      transition: 0.6s all;
      &:hover {
        transform: translateY(-10px);
        transition: 0.6s all;
      }
      &-icon {
        margin: 0 0 15px 0;
      }
    }
  }
  &__card-wrapper {
    display: flex;
    flex-flow: wrap;
    flex-direction: row;
  }
  &__card {
    position: relative;
    margin: 0 30px 30px 0;
    width: calc(1 / 3 * 100% - (1 - 1 / 3) * 30px);
    min-width: 500px;
    border-radius: 30px;
    -webkit-box-shadow: 0px 2px 40px 10px rgba(0, 0, 0, 0.05);
    -moz-box-shadow: 0px 2px 40px 10px rgba(0, 0, 0, 0.05);
    box-shadow: 0px 2px 40px 10px rgba(0, 0, 0, 0.05);
    @include max-lg {
      width: 100%;
      min-width: auto;
      margin: 0 0 30px 0;
    }
    &:nth-child(3n) {
      margin-right: 0;
    }
    &:last-of-type {
      margin-right: 0;
    }
    &__header {
      background: $primary-light;
      color: $primary;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 85px;
      border-radius: 30px 30px 0 0;
      padding: 25px;
      @include max-lg {
        height: 70px;
      }
      &-title {
        font-size: 30px;
        font-variation-settings: "wght" 400;
        @include max-lg {
          font-size: 20px;
        }
      }
      &-image {
        @include max-sm {
          width: 40px;
          max-height: 50px;
        }
      }
    }
    &__body {
      padding: 0px 25px 0px 25px;
      @include max-lg {
        padding: 0px 15px 0px 15px;
      }
      &-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 50px 0 50px 0;
        @include max-lg {
          padding: 25px 0 0px 0;
        }
        &:first-of-type {
          padding: 50px 0 0 0;
          @include max-lg {
            padding: 25px 0 0px 0;
          }
        }
        &:last-of-type {
          padding: 0 0 50px 0;
          @include max-lg {
            padding: 25px 0 25px 0;
          }
        }
      }
      &-title {
        font-size: 20px;
        font-variation-settings: "wght" 400;
        margin: 0;
        @include max-lg {
          font-size: 14px;
        }
      }
      &-wrapper {
        display: flex;
        align-items: center;
      }
      &-badge {
        background: $secondary-light;
        color: $primary;
        font-size: 20px;
        min-width: 85px;
        min-height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        padding: 0 15px 0 15px;
        @include max-lg {
          font-size: 14px;
          min-width: 65px;
          min-height: 30px;
          text-align: center;
        }
      }
    }
    &__footer {
      background: $primary;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 85px;
      border-radius: 0 0 30px 30px;
      padding: 25px;
      @include max-lg {
        height: 70px;
      }
      &-title {
        font-size: 30px;
        font-variation-settings: "wght" 400;
        color: $white;
        display: flex;
        flex-flow: column;
        align-items: center;
        @include max-lg {
          font-size: 20px;
        }
        small {
          font-size: 10px;
        }
      }
    }
  }
}
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
