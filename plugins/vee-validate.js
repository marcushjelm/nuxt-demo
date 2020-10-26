import Vue from 'vue'
import {
  ValidationObserver,
  ValidationProvider,
  extend,
  localize,
} from 'vee-validate'
import sv from 'vee-validate/dist/locale/sv.json'
import { required, email } from 'vee-validate/dist/rules'

localize('sv', sv)

extend('required', {
  ...required,
  message: 'Obligatoriskt fält',
})

extend('email', {
  ...email,
  message: 'Felaktig e-postadress',
})

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)
