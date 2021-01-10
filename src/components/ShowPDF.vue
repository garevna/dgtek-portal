<template>
  <object
    :data="base64String"
    type="application/pdf"
    width="100%"
    height="800"
  ></object>
</template>

<script>

export default {
  name: 'ShowPDF',
  props: {
    fileData: String
  },
  data: () => ({
    base64String: '',
    notFound: require('@/config/404').default
  }),
  watch: {
    fileData: {
      immediate: true,
      handler (val) {
        if (!val) {
          this.base64String = this.notFound
        } else {
          this.base64String = val
        }
      }
    }
  }
}
</script>
