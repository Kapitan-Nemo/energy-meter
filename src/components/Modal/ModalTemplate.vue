<template>
  <div class="modal-mask">
    <div class="modal">
      <div class="modal__wrapper">
        <div class="modal__container">
          <div class="modal__header">
            <slot name="header">Default Header Text</slot>
          </div>
          <slot name="body">
            <p>Default Body Text</p>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.modal {
  &__wrapper {
    display: flex;
    align-items: center;
    margin: 3rem 0 0 0;
    justify-content: center;
    @include max-lg {
      margin: 1rem 0 0 0;
    }
  }
  &__container {
    width: 500px;
    background-color: #fff;
    border-radius: 30px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
    @include max-lg {
      width: 90%;
    }
  }

  &__error {
    position: absolute;
    bottom: 25px;
    right: 25px;
    display: flex;
    width: 380px;
    justify-content: space-between;
    align-items: center;
    background: #ffce79;
    padding: 13px 25px 13px 25px;
    border-radius: 20px;
    @include max-lg {
      width: 300px;
      transform: translate(-50%, -50%);
      left: 50%;
      bottom: 0;
    }
    &-wrapper {
      display: flex;
      align-items: center;
      font-size: 16px;
      color: $primary;
      font-variation-settings: "wght" 500;
      @include max-lg {
        font-size: 12px;
      }
    }
    &-icon {
      margin: 0 10px 0 0;
    }
    &-text {
      margin: 0;
      font-variation-settings: "wght" 500;
      @include max-lg {
        font-size: 12px;
      }
    }
  }
  &__header {
    background: $primary-light;
    padding: 15px;
    border-radius: 30px 30px 0 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 85px;
    @include max-lg {
      height: 50px;
      font-size: 18px;
    }
    &-close {
      cursor: pointer;
      width: 38px;
      height: 38px;
      transition: 0.3s ease-in;
      border-radius: 50%;
      &:hover {
        background: $secondary;
        transition: 0.3s ease-out;
        border-radius: 50%;
        width: 38px;
        height: 38px;
        padding: 5px;
      }
      @include max-lg {
        width: 25px;
        height: 25px;
        &:hover {
          width: 25px;
          height: 25px;
        }
      }
    }
  }
  &__body {
    padding: 50px 25px 50px 25px;
    @include max-lg {
      padding: 25px 15px 25px 15px;
    }
    &-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0 0 50px 0;
      @include max-lg {
        margin: 0 0 30px 0;
      }
      &:last-of-type {
        margin: 0;
      }
      &-wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      &-wrapper-mobile {
        @include max-lg {
          justify-content: flex-end;
        }
      }
    }
    &-items-mobile {
      @include max-lg {
        display: flex;
        justify-content: space-between;
      }
    }
    &-item-mobile {
      @include max-lg {
        display: block;
        justify-content: flex-end;
        margin: 0;
      }
    }
    &-input {
      text-align: right;
      border: none;
      border-bottom: solid 1px $secondary;
      font-size: 20px;
      max-width: 180px;
      padding: 0 5px 0 0;
      color: $primary;
      transition: 0.5s ease;
      @include max-lg {
        font-size: 14px;
        max-width: 100px;
        margin: 15px 0 0 0;
      }
      &-placeholder {
        background: none;
        font-size: 20px;
        max-width: 20px;
        border: none;
        border-bottom: solid 1px #ffd17f;
        padding: 0;
        color: $primary;
        transition: 0.5s ease;
        @include max-lg {
          font-size: 14px;
          margin: 15px 0 0 0;
        }
      }
    }
    &-select {
      color: $primary;
      background: white;
      font-size: 20px;
      border: solid 1px $primary;
      padding: 7px 37px 7px 10px;
      border-radius: 10px;
      appearance: none;
      background-image: url("data:image/svg+xml,%0A%3Csvg width='21px' height='10px' viewBox='0 0 21 10' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg id='Homepage' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cg id='Homepage---add-new' transform='translate(-1154.000000, -281.000000)' fill='%231D2B47' fill-rule='nonzero'%3E%3Cg id='Device' transform='translate(736.000000, 267.000000)'%3E%3Cg id='Dropdown' transform='translate(249.000000, 0.000000)'%3E%3Cg id='Icon' transform='translate(169.000000, 14.000000)'%3E%3Cpath d='M10.5456522,10 C10.4543478,10 10.2717391,9.91631799 10.1804348,9.91631799 L0.136956522,0.711297071 C-0.0456521739,0.543933054 -0.0456521739,0.292887029 0.136956522,0.125523013 C0.319565217,-0.0418410042 0.593478261,-0.0418410042 0.776086957,0.125523013 L10.5456522,8.9958159 L20.223913,0.125523013 C20.4065217,-0.0418410042 20.6804348,-0.0418410042 20.8630435,0.125523013 C21.0456522,0.292887029 21.0456522,0.543933054 20.8630435,0.711297071 L10.8195652,9.91631799 C10.8195652,9.91631799 10.6369565,10 10.5456522,10 Z' id='Path'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
      background-repeat: no-repeat;
      background-position: calc(100% - 10px) center;
      cursor: pointer;
      @include max-lg {
        font-size: 12px;
      }
    }
    &-icon {
      margin: 0 20px 0px 0;
    }
    &-label {
      font-size: 20px;
      @include max-lg {
        font-size: 10px;
      }
    }
  }
  &__footer {
    height: 85px;
    display: flex;
    background: $primary;
    justify-content: center;
    align-items: center;
    border-radius: 0 0 30px 30px;
    @include max-lg {
      height: 50px;
      font-size: 18px;
    }
    &-button {
      font-size: 30px;
      background: $primary;
      color: $white;
      height: 100%;
      width: 100%;
      border-radius: 0 0 30px 30px;
      cursor: pointer;
      font-variation-settings: "wght" 400;
      @include max-lg {
        font-size: 18px;
      }
    }
  }
  &__title {
    font-size: 30px;
    margin: 0;
    font-variation-settings: "wght" 400;
    @include max-lg {
      font-size: 18px;
    }
  }
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.overflow-hidden {
  overflow: hidden;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s ease;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
