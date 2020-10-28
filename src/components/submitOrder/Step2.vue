<template>
<div>
  
</div>
</template>

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