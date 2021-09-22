<template>
  <v-container fluid fill-height>
  <v-navigation-drawer
      dark
      app
      v-model="drawer"
      :mini-variant.sync="mini"
      :mini-variant-width="60"
      permanent
    >
      <v-list-item class="px-2 my-2">
        <v-list-item-title>
          <v-btn icon @click="mini = !mini">
            <v-icon>{{ mini ? 'mdi-chevron-right' : 'mdi-chevron-left' }}</v-icon>
          </v-btn>
        </v-list-item-title>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          v-for="(item, index) in services"
          :key="index"
          link
        >
          <v-list-item-icon></v-list-item-icon>

        <v-list-item-content @click="click(item)">
          <v-list-item-title class="text-left">
            {{ item.serviceName.value }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>

  <v-row justify="center">
    <ServiceForm
      v-if="currentServiceId"
      :id="currentServiceId"
      :service.sync="currentService"
    />
    <!-- <ServiceDetails
      v-if="currentOrderId"
      :data.sync="currentOrder"
      class="mt-12"
    /> -->
  </v-row>
</v-container>

  <!-- <v-container class="homefone">
    <v-row justify="center">
      <v-col cols="12" md="6" lg="5" xl="3">
        <v-card class="transparent">
          <v-toolbar dark>
            <v-spacer />
            <v-btn icon @click="createNewService">
              <v-icon>$add</v-icon>
            </v-btn>
          </v-toolbar>
          <v-simple-table
            fixed-header
            max-height="500"
          >
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">
                    Service Name
                  </th>
                  <th class="text-left">
                    Service Type
                  </th>
                  <th class="text-left">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(item, id) in services"
                  :key="id"
                >
                  <td>{{ item.serviceName.value }}</td>
                  <td>{{ item.serviceType.value }}</td>
                  <td>
                    <v-btn icon @click="edit(item, id)">
                      <v-icon small>$edit</v-icon>
                    </v-btn>
                    <v-btn icon @click="remove(item, id)">
                      <v-icon small>$delete</v-icon>
                    </v-btn>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card>
      </v-col>

      <v-col cols="12" md="6" lg="5" xs="3">
        <ServiceForm
          v-if="currentServiceId"
          :id="currentServiceId"
          :service.sync="currentService"
        />
      </v-col>
    </v-row>
  </v-container> -->
</template>

<script>

import { mapState, /* mapMutations, */ mapActions } from 'vuex'

export default {
  name: 'Services',
  components: {
    ServiceForm: () => import('@/components/services/ServiceForm.vue')
  },
  data: () => ({
    currentServiceId: null,
    currentService: null,
    drawer: false,
    mini: false
  }),
  computed: {
    ...mapState('services', ['services'])
  },
  methods: {
    ...mapActions('services', {
      updateServices: 'UPDATE_SERVICES',
      updateService: 'UPDATE_SERVICE',
      getAllServices: 'GET_SERVICES',
      createNewService: 'CREATE_SERVICE',
      deleteService: 'DELETE_SERVICE'
    }),
    click (item) {
      if (!item) return
      this.currentServiceId = item._id
      this.currentService = item
    }
  },
  created () {
    this.getAllServices()
  }
}
</script>
