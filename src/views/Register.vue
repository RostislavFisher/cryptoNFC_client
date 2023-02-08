<template>
  <div style="background-color: #f7f7f7; padding: 100px;">
  <div class="register-form" style="width: 100%; max-width: 420px; padding: 15px; margin: 0 auto; ">
    <form @submit.prevent="registerUser">
      <div class="form-label-group">
        <label for="ur">{{ languageTranslationsAccess.Pages.Registration.username[$route.params.lang] }}</label>
        <input type="text" name="ur" id="ur" v-model="username" class="form-control" :placeholder="`${languageTranslationsAccess.Pages.Registration.username[$route.params.lang]}`"  required="" autofocus="">
      </div>
      <div class="form-label-group">
        <label for="el">{{ languageTranslationsAccess.Pages.Registration.email[$route.params.lang] }}</label>
        <input type="email" name="el" id="el" v-model="email" class="form-control" :placeholder="`${languageTranslationsAccess.Pages.Registration.email[$route.params.lang]}`"  required="" autofocus="">
      </div>
      <div class="form-label-group">
        <label for="pwr">{{ languageTranslationsAccess.Pages.Registration.password[$route.params.lang] }}</label>
        <input type="text" name="pwr" id="pwr" v-model="password" class="form-control" :placeholder="`${languageTranslationsAccess.Pages.Registration.password[$route.params.lang]}`"  required="" autofocus="">
      </div>
      <div class="form-label-group">
        <label for="pass">{{ languageTranslationsAccess.Pages.Registration.password[$route.params.lang] }}</label>
        <input type="password" name="pass" id="pass" v-model="confirm" class="form-control" :placeholder="`${languageTranslationsAccess.Pages.Registration.password[$route.params.lang]}`" required="" autofocus="">
      </div>
      <button type="submit" class="btn btn-lg btn-primary btn-block" style="margin-top: 30px;">{{ languageTranslationsAccess.Pages.Registration.submit[$route.params.lang] }}</button>
    </form>
  </div>
  </div>
</template>

<script>
import axios from "axios";
import Vue from "vue";
import VueCompareImage from "vue-compare-image";
import KyivMapOfMultiPublications from "./KyivMapOfMultiPublications";
import Lingallery from "lingallery";
axios.defaults.xsrfHeaderName = 'X-CSRFToken'
axios.defaults.xsrfCookieName = 'csrftoken'

export default {
  name: 'Register',
  components:{
    VueCompareImage,
    KyivMapOfMultiPublications,
    Lingallery,
  },
  data () {
    return {
      name: '',
      email: '',
      username: '',
      password: '',
      confirm: '',

      languageTranslationsAccess: this.languageTranslations
    }
  },
  methods: {
    registerUser () {
      axios.post('/api-auth/restRegistration', {
        params: {
          name: this.name,
          email: this.email,
          username: this.username,
          password: this.password,
          confirm: this.confirm
        }}).then(response => {
            this.token = response.data["token"];
            if(this.token !== undefined) {
              this.setCookie("token", this.token, 2);
              this.$router.push(`/${this.$route.params.lang}/`);
              this.$router.go(0);

            }
            console.log(response.data.result)
            if(response.data.result === 'user is also registered') {
              Vue.notify({
                group: 'foo',
                type: 'error',
                title: this.languageTranslationsAccess.Pages.Registration.Error[this.$route.params.lang],
                text: this.languageTranslationsAccess.Pages.Registration.UserAlreadyExists[this.$route.params.lang],
              })
            }
            else if(response.data.result === 'user is registered') {
              Vue.notify({
                group: 'foo',
                type: 'success',
                title: this.languageTranslationsAccess.Pages.Registration.UserHasBeenCreated[this.$route.params.lang],
                text: this.languageTranslationsAccess.Pages.Registration.Login[this.$route.params.lang]
              })
            }
            else{
              Vue.notify({
                group: 'foo',
                type: 'error',
                title: this.languageTranslationsAccess.Pages.Registration.Error[this.$route.params.lang],
                text: this.languageTranslationsAccess.Pages.Registration.WrongData[this.$route.params.lang],
              })
            }
          }
      ).catch(error => {
        console.log(error)
        Vue.notify({
          group: 'foo',
          type: 'error',
          title: this.languageTranslationsAccess.Pages.Registration.Error[this.$route.params.lang],
          text: "Cталася помилка! Спробуйте інший пароль та ім'я користувача"
        })
      });
    }
  }
}
</script>
