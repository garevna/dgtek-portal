<template>
  <form>
    <v-row no-gutters justify="center">
      <v-col cols="8">
        <v-container fluid>
          <v-card flat>
            <h2>Technical details and Contact details</h2>
            <v-row no-gutters justify="space-between">
              <v-col cols="5" align="center">
                <v-text-field
                  label= "Full Site Address"
                />
                <v-text-field
                  label= "Service Description (from MSA)"
                />
                <v-text-field
                  label= "VLAN"
                />
                <v-text-field
                  label= "A End:"
                />
              </v-col>
              <v-col cols="5" align="center">
                <v-text-field
                  label= "Custumer Name"
                />
                <v-text-field
                  label= "Term:"
                />
                <v-text-field
                  label= "Z End:"
                />
              </v-col>
            </v-row>
          </v-card>
          <v-card flat>
            <h2>*Building / Facilities Manager or Property Manager or Strata or Owner</h2>
            <v-row no-gutters justify="space-between">
              <v-col cols="5" align="center">
                <v-text-field
                  label= "Name"
                />
                <v-text-field
                  label= "Company"
                />
                <v-text-field
                  label= "Email Address"
                />
              </v-col>
              <v-col cols="5" align="center">
                <v-text-field
                  label= "Position"
                />
                <v-text-field
                  label= "Contact Number"
                />
              </v-col>
            </v-row>
          </v-card>
          <v-card flat>
            <h2>End Customer & On-Site Contact Details</h2>
            <v-row no-gutters justify="space-between">
              <v-col cols="5" align="center">
                <v-text-field
                  label= "Company Name"
                />
                <v-text-field
                  label= "Position"
                />
                <v-text-field
                  label= "Email Address"
                />
              </v-col>
              <v-col cols="5" align="center">
                <v-text-field
                  label= "Site Contact Name"
                />
                <v-text-field
                  label= "Contact Number"
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