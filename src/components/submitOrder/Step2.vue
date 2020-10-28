<template>
  <form ref="form">
    <v-row no-gutters justify="center">
      <v-col cols="8">
        <v-container fluid>
          <v-card flat>
            <h2>Technical details and Contact details</h2>
            <v-row no-gutters justify="space-between">
              <v-col cols="5" align="center">
                <v-text-field
                  v-model="fullSiteAddress"
                  label="Full Site Address"
                />
                <v-text-field
                  v-model="serviceDescription"
                  label="Service Description (from MSA)"
                />
                <v-text-field
                  v-model="vlan"
                  label="VLAN"
                />
                <v-text-field
                  v-model="aEnd"
                  label="A End:"
                />
              </v-col>
              <v-col cols="5" align="center">
                <v-text-field
                  v-model="customerName"
                  label="Custumer Name"
                />
                <v-text-field
                  v-model="term"
                  label="Term:"
                />
                <v-text-field
                  v-model="zEnd"
                  label="Z End:"
                />
              </v-col>
            </v-row>
          </v-card>
          <v-card flat>
            <h2>*Building / Facilities Manager or Property Manager or Strata or Owner</h2>
            <v-row no-gutters justify="space-between">
              <v-col cols="5" align="center">
                <v-text-field
                  v-model="name"
                  label="Name"
                />
                <v-text-field
                  v-model="company"
                  label="Company"
                />
                <v-text-field
                  v-model="emailAdress"
                  label="Email Address"
                />
              </v-col>
              <v-col cols="5" align="center">
                <v-text-field
                  v-model="position"
                  label="Position"
                />
                <v-text-field
                  v-model="contactNumber"
                  label="Contact Number"
                />
              </v-col>
            </v-row>
          </v-card>
          <v-card flat>
            <h2>End Customer & On-Site Contact Details</h2>
            <v-row no-gutters justify="space-between">
              <v-col cols="5" align="center">
                <v-text-field
                  v-model="companyName"
                  label="Company Name"
                />
                <v-text-field
                  v-model="position2"
                  label="Position"
                />
                <v-text-field
                  v-model="emailAdress2"
                  label="Email Address"
                />
              </v-col>
              <v-col cols="5" align="center">
                <v-text-field
                  v-model="siteContactName"
                  label="Site Contact Name"
                />
                <v-text-field
                  v-model="contactNumber2"
                  label="Contact Number"
                />
              </v-col>
            </v-row>
          </v-card>
        </v-container>
      </v-col>
    </v-row>
  </form>
</template>

<style lang="sass">

</style>

<script>
export default {
  
}
</script>

<script>
export default {
  name: 'Step2',

  props: ['loadData', 'saveData'],

  data: () => ({
    // Technical details
    fullSiteAddress: '',
    serviceDescription: '',
    vlan: '',
    aEnd: '',
    customerName: '',
    term: '',
    zEnd: '',
    // buildings
    name: '',
    company: '',
    emailAdress: '',
    position: '',
    contactNumber: '',
    //  End customers
    companyName: '',
    position2: '',
    emailAdress2: '',
    siteContactName: '',
    contactNumber2: '',
  }),
  computed: {
    //
  },
  methods: {
    loadFields () {
      if (!this.loadData) return
      this.fullSiteAddress = this.loadData.fullSiteAddress
      this.serviceDescription = this.loadData.serviceDescription
      this.vlan = this.loadData.vlan
      this.aEnd = this.loadData.aEnd
      this.customerName = this.loadData.customerName
      this.zEnd = this.loadData.zEnd

      this.name = this.loadData.name
      this.company = this.loadData.company
      this.emailAdress = this.loadData.emailAdress
      this.position = this.loadData.position
      this.contactNumber = this.loadData.contactNumber

      this.companyName = this.loadData.companyName
      this.position2 = this.loadData.position2
      this.emailAdress2 = this.loadData.emailAdress2
      this.siteContactName = this.loadData.siteContactName
      this.contactNumber2 = this.loadData.contactNumber2
    },
    saveFields () {
      const data = {
        fullSiteAddress: this.fullSiteAddress,
        serviceDescription: this.serviceDescription,
        vlan: this.vlan,
        aEnd: this.aEnd,
        customerName: this.customerName,
        zEnd: this.zEnd,

        name: this.name,
        company: this.company,
        emailAdress: this.emailAdress,
        position: this.position,
        contactNumber: this.contactNumber,

        companyName: this.companyName,
        position2: this.position2,
        emailAdress2: this.emailAdress2,
        siteContactName: this.siteContactName,
        contactNumber2: this.contactNumber2,
        }
      this.saveData(data)
    }
  },
  beforeMount () {
    console.log('beforeMount Step2')
    this.loadFields()
  },
  beforeDestroy () {
    console.log('beforeDestroy Step2')
    this.saveFields()
  }

}
</script>

<style>

</style>
