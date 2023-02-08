<template>
  <footer>
    <div class="container text-white d-flex justify-content-center" >
      <div class="row" style="margin-bottom: 10px;">
        <div class="col item text">
          <h3>{{ languageTranslationsAccess.Pages.Footer.OurSocialMedia[$route.params.lang] }}</h3>
          <div class="d-flex justify-content-center" style="width: 100%;">
            <a type="button" class="btn btn-primary btn-circle border-white btn-floating" href="https://www.tiktok.com/@warta_cz">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tiktok" viewBox="0 0 16 16">
                <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z"/>
              </svg>

            </a>
<!--            <button type="button" class="btn btn-primary btn-circle border-white btn-floating"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">-->
<!--              <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>-->
<!--            </svg>-->
<!--            </button>-->
<!--            <button type="button" class="btn btn-primary btn-circle border-white btn-floating">-->
<!--              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16">-->
<!--                <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.122C.002 7.343.01 6.6.064 5.78l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>-->
<!--              </svg>-->
<!--            </button>-->
          </div>        </div>
        <div class="col item text">
          <h3>{{ languageTranslationsAccess.Pages.Footer.TechSupport[$route.params.lang] }}</h3>
          <p>VyatcheslavUkraintsev@gmail.com</p>
        </div>
<!--        <div class="col item text">-->
<!--          <h3>{{ languageTranslationsAccess.Pages.Footer.RecommendedResources[$route.params.lang] }}</h3>-->
<!--          <p v-for="resource in languageTranslationsAccess.Pages.Footer.RecommendedResourcesList[$route.params.lang]" v-bind="resource.id">-->
<!--            <a v-html="resource.icon"></a>-->
<!--            {{resource.Title}}-->
<!--          </p>-->
<!--        </div>-->
        <div class="col item text">
          <h3>{{ languageTranslationsAccess.Pages.Footer.OurDonations[$route.params.lang] }}</h3>
          <p v-for="resource in languageTranslationsAccess.Pages.Footer.DonationList[$route.params.lang]" v-bind="resource.id">
            <a type="button" class="btn btn-primary btn-circle border-white btn-floating" :href="resource.href">
              <img :src="resource.icon" width="20px">
            </a>
            {{resource.Title}}
<!--            <a v-html="resource.icon"></a>-->
<!--            Донат-->
          </p>
        </div>
        <div class="col item text">
          <h3>{{ languageTranslationsAccess.Pages.Footer.MobileApplication[$route.params.lang] }}</h3>
          <p>
            <a type="button" class="btn btn-primary btn-circle border-white btn-floating" href="/downloadApp">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-phone" viewBox="0 0 16 16">
                <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/>
                <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
              </svg>
            </a>
            {{ languageTranslationsAccess.Pages.Footer.Download[$route.params.lang] }}
<!--            <a v-html="resource.icon"></a>-->
<!--            Донат-->
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
name: "Footer",
  data () {
    return {
      languageTranslationsAccess: this.languageTranslations
    }
  },
}
</script>

<style scoped>

</style>