<template>
  <div style="background-color: #f7f7f7; padding: 100px;">
  <img src="/media/korgi.gif" v-if="loading">
  <div class="register-form" style="width: 100%; max-width: 420px; padding: 15px; margin: 0 auto; ">
    <form @submit.prevent="loginUser">
      <div class="form-label-group">
        <label for="ur">{{languageTranslationsAccess.Pages.Login.username[$route.params.lang]}}</label>
        <input type="text" name="ur" id="ur" v-model="username" class="form-control" :placeholder="`${languageTranslationsAccess.Pages.Login.username[$route.params.lang]}`" required="" autofocus="">
      </div>
      <div class="form-label-group">
        <label for="pwr">{{languageTranslationsAccess.Pages.Login.password[$route.params.lang]}}</label>
        <input type="password" name="pwr" id="pwr" v-model="password" class="form-control" :placeholder="`${languageTranslationsAccess.Pages.Login.password[$route.params.lang]}`" required="" autofocus="">
      </div>
      <button type="submit" class="btn btn-lg btn-primary btn-block" style="margin-top: 30px;">{{ languageTranslationsAccess.Pages.Login.submit[$route.params.lang] }}</button>
    </form>
  </div>
  </div>
</template>

<script>
import axios from "axios";
axios.defaults.xsrfHeaderName = 'X-CSRFToken'
axios.defaults.xsrfCookieName = 'csrftoken'

import Vue from 'vue'
export default {
  name: 'Login',
  data () {
    return {
      name: '',
      email: '',
      username: '',
      password: '',
      confirm: '',
      loading: false,
      languageTranslationsAccess: this.languageTranslations
    }
  },
  methods: {
    setCookie(name,value,days) {
      var expires = "";
      if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
      }
      document.cookie = name + "=" + (value || "")  + expires + "; path=/";
    },
    loginUser () {

      this.loading = true
      axios.post('/api-auth/restLogin', {
        params: {
          username: this.username,
          password: this.password,
        }}).then(response => {
        this.token = response.data["token"];
        if (this.token !== undefined) {
          this.setCookie("token", this.token, 2);
          this.$router.push(`/${this.$route.params.lang}/`);
          this.$router.go(0);
          this.loading = false
        } else {
          Vue.notify({
            group: 'foo',
            type: 'error',
            title: this.languageTranslationsAccess.Pages.Login.Error[this.$route.params.lang],
            text: this.languageTranslationsAccess.Pages.Login.WrongData[this.$route.params.lang]
          })
          this.loading = false
        }
      }).catch(error => {
        console.log(error)
        Vue.notify({
          group: 'foo',
          type: 'error',
          title: this.languageTranslationsAccess.Pages.Login.Error[this.$route.params.lang],
          text: this.languageTranslationsAccess.Pages.Login.WrongData[this.$route.params.lang]
        })
        this.loading = false
      });
    }
  }
}

</script>

<style scoped>

</style>
