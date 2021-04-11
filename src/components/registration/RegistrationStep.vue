<template>
  <v-card flat class="transparent mx-auto" max-width="700" v-if="ready">
    <v-row
      v-for="(item, propName) in schema[step]"
      :key="propName"
      class="my-0"
      align="start"
      :style="{ height: rowHeight(item) + 'px' }"
    >
      <v-col cols="0" md="4" class="d-none d-md-inline-block">
        <h6 class="text-right">{{ item.title }}</h6>
      </v-col>
      <v-col cols="12" sm="8">
        <v-text-field
          v-if="textField(item)"
          v-model="item.value"
          :label="item.title"
          :rules="[item.required ? rules.required : (value) => true, rule(item)]"
          outlined
          dense
          :append-icon="appendIcon(item)"
          :type="type(item)"
          @click:append="showPassword = !showPassword"
        />

        <v-text-field
          v-if="item.type === 'mobile'"
          v-model="item.value"
          prefix="+61"
          :rules="[item.required ? rules.required : (value) => true, rules.mobile]"
          label="mobile phone number"
          outlined
          dense
        ></v-text-field>

        <!-- <InputWithAutocomplite
          v-if="item.type === 'address'"
          :address.sync="item.value"
          style="display: block;"
        /> -->
        <GeoscapeAutocomplete
          v-if="item.type === 'address'"
          :value.sync="item.value"
          style="margin-top: -14px!important; margin-bottom: 8px!important;"
        />

        <v-textarea
          v-if="item.type === 'textarea'"
          v-model="item.value"
          :label="item.title"
          hide-details
          outlined
          dense
        />
      </v-col>
    </v-row>
    <v-row
      v-if="step === 'auth'"
      justify="end"
    >
      <v-checkbox
        v-model="confirm"
        label="Agree to Terms & Conditions"
      />
    </v-row>
  </v-card>
</template>

<script>

import { rules, steps } from '@/config'

export default {
  name: 'RegistrationStep',
  components: {
    // InputWithAutocomplite: () => import('@/components/registration/InputWithAutocomplite.vue'),
    GeoscapeAutocomplete: () => import('@/components/registration/GeoscapeAutocomplete.vue')
  },
  props: {
    step: {
      validator: function (value) {
        return steps.indexOf(value) !== -1
      }
    },
    schema: Object,
    agree: Boolean
  },
  data: () => ({
    items: null,
    showPassword: false,
    rules
  }),
  computed: {
    confirm: {
      get () {
        return this.agree
      },
      set (val) {
        this.$emit('update:agree', val)
      }
    }
  },
  watch: {
    step: {
      immediate: true,
      handler (val) {
        if (!val) return
        this.items = this.schema[val]
        this.ready = true
      }
    },
    item: {
      deep: true,
      handler (val) {
        console.log(val.address)
      }
    }
  },
  methods: {
    appendIcon (item) {
      return item.type !== 'password' ? '' : this.showPassword ? 'mdi-eye' : 'mdi-eye-off'
    },
    type (item) {
      return item.type !== 'password' || this.showPassword ? 'text' : 'password'
    },
    rowHeight (item) {
      return item.type === 'textarea' ? 160 : 60
    },
    textField (item) {
      return ['simple-text', 'url', 'phone', 'email', 'abn', 'state', 'postcode', 'number', 'password'].indexOf(item.type) !== -1
    },
    rule (item) {
      return this.rules[item.type]
    }
  }
}
</script>
