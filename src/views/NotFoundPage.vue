<template>
  <div class="page-wrap d-flex flex-row align-items-center">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-12 text-center">
          <span class="display-1 d-block">404</span>
          <div class="mb-4 lead">{{languageTranslationsAccess.Pages.NotFoundPage.ThisPageDoesNotExist[$route.params.lang]}}</div>
          <router-link :to="`/${this.$route.params.lang}`">
            <a href="https://www.totoprayogo.com/#" class="btn btn-link">{{languageTranslationsAccess.Pages.NotFoundPage.Main[$route.params.lang]}}</a>

          </router-link>

        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "NotFoundPage.vue",
  data () {
    return {
      languageTranslationsAccess: this.languageTranslations
    }
  },
}
</script>

<style scoped>
body {
  background: #dedede;
}
.container{
  justify-content: center;
}
</style>