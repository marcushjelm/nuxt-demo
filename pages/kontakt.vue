<template>
  <div>
    <h1>Kontakt</h1>

    <ValidationObserver v-slot="{ handleSubmit }">
      <b-form novalidate @submit.prevent="handleSubmit(onSubmit)">
        <ValidationProvider
          v-slot="{ validated, valid, errors }"
          mode="eager"
          rules="required"
        >
          <b-form-group label="Förening" label-for="input-1">
            <b-form-input
              id="input-1"
              v-model="form.club"
              :state="validated ? valid : null"
              required
            ></b-form-input>
            <b-form-invalid-feedback>{{ errors[0] }}</b-form-invalid-feedback>
          </b-form-group>
        </ValidationProvider>

        <ValidationProvider
          v-slot="{ validated, valid, errors }"
          mode="eager"
          rules="required"
        >
          <b-form-group label="Namn" label-for="input-2">
            <b-form-input
              id="input-2"
              v-model="form.name"
              :state="validated ? valid : null"
              required
            ></b-form-input>
            <b-form-invalid-feedback>{{ errors[0] }}</b-form-invalid-feedback>
          </b-form-group>
        </ValidationProvider>

        <ValidationProvider
          v-slot="{ validated, valid, errors }"
          rules="required|email"
          mode="eager"
        >
          <b-form-group label="E-post" label-for="input-3">
            <b-form-input
              id="input-3"
              v-model="form.email"
              :state="validated ? valid : null"
              required
            ></b-form-input>
            <b-form-invalid-feedback>{{ errors[0] }}</b-form-invalid-feedback>
          </b-form-group>
        </ValidationProvider>

        <b-button type="submit" variant="primary">Skicka meddelande</b-button>
      </b-form>
    </ValidationObserver>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        club: '',
        name: '',
        email: '',
      },
    }
  },
  methods: {
    onSubmit(event) {
      alert(JSON.stringify(this.form))
    },
  },
  head: {
    title: 'Kontakt',
  },
}
</script>
