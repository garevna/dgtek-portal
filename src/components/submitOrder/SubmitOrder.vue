<template>
  <div>
    <SendMsa/>
    <CreateNewService/>
  </div>
</template>

<script>
import SendMsa from './SendMsa'
import CreateNewService from './CreateNewService'

export default {
  name: 'submit-order',
  components: {
    SendMsa,
    CreateNewService
  }
}
</script>

<style>

</style>