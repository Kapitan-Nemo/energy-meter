<template>
  <section class="hero">
    <div class="container-fluid">
      <div class="hero__wrapper">
        <div class="hero__left">
          <img
            height="480"
            width="480"
            class="hero__image"
            src="@/assets/svg/hero/left.svg"
          />
        </div>
        <div class="hero__center">
          <img
            class="hero__logo"
            width="251"
            height="50"
            alt="Logo Energy Meter"
            src="@/assets/svg/hero/logo.svg"
          />
          <h1 class="hero__title">Calculate cost of home energy</h1>
          <button class="hero__button" @click="$emit('openModal')">
            Add appliance
          </button>
        </div>
        <div class="hero__right">
          <img
            height="480"
            width="480"
            class="hero__image"
            src="@/assets/svg/hero/right.svg"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.hero {
  margin: 0 0 50px 0;
  &__wrapper {
    display: flex;
    justify-content: space-between;
    @include max-lg {
      flex-flow: column-reverse;
    }
  }
  &__image {
    width: 480px;
    height: auto;
    @include max-lg {
      width: 275px;
    }
  }
  &__title {
    text-align: center;
    @include max-lg {
      max-width: 250px;
      font-variation-settings: "wght" 500;
      font-size: 30px;
      margin: 30px 0 15px 0;
    }
  }
  &__logo {
    margin: 0 auto;
    display: flex;
  }
  &__button {
    height: 75px;
    width: 300px;
    font-size: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: $primary-light;
    border-radius: 30px;
    margin: 0 auto;
    color: $primary;
    cursor: pointer;
    @include min-1920 {
      width: 415px;
      height: 100px;
      font-size: 35px;
    }
    @include max-lg {
      font-size: 20px;
      width: 220px;
      height: 45px;
    }
  }
  &__left {
    @include max-lg {
      .hero__image {
        margin: 30px 0 0 0;
      }
    }
    &:after {
      content: "";
      width: 435px;
      height: 455px;
      background: #dcf2ff;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      border-radius: 0 0 25px 0;
      @include max-lg {
        width: 320px;
        height: 320px;
        top: 270px;
        left: -100px;
      }
    }
  }
  &__right {
    @include max-lg {
      .hero__image {
        display: none;
      }
    }
    &:after {
      content: "";
      width: 500px;
      height: 500px;
      background: #ffce79;
      position: absolute;
      top: -80px;
      right: -80px;
      z-index: -1;
      border-radius: 50%;
      @include max-lg {
        top: 150px;
        width: 360px;
        height: 360px;
        right: -150px;
      }
    }
  }
  &__center {
    @include max-lg {
      align-items: center;
      justify-content: center;
      display: flex;
      flex-flow: column;
    }
  }
  &__empty {
    &-image {
      display: flex;
      margin: 0 auto;
      max-width: 200px;
    }
    &-title {
      margin: 0 0 0 0;
      font-size: 40px;
      @include max-lg {
        font-size: 20px;
      }
    }
  }
}
</style>
