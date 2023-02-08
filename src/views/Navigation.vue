<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-primary">
    <router-link :to="`/${this.$route.params.lang}`" class="nav-link text-white"> <div v-if="Math.floor(Math.random() * 100)===1">(´• ω •)</div><div v-else><CZ>warta</CZ></div></router-link>

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse col-sm-11" id="navbarSupportedContent">
          <ul class="navbar-nav" style="  width: 100%;">
            <li class="nav-item">
              <router-link :to="`/${this.$route.params.lang}/about/`" class="nav-link">{{languageTranslationsAccess.Pages.Navigation.Information[this.$route.params.lang]}}</router-link>
            </li>
            <li class="nav-item">
              <router-link :to="`/${this.$route.params.lang}/listOfPublications/`" class="nav-link">{{languageTranslationsAccess.Pages.Navigation.listOfPublications[this.$route.params.lang]}}</router-link>
            </li>
            <li class="nav-item">
              <router-link v-if="userStatus===1" :to="`/${this.$route.params.lang}/AbstractInput/`" class="nav-link">{{languageTranslationsAccess.Pages.Navigation.createPublication[this.$route.params.lang]}}</router-link>
            </li>
            <li class="nav-item">
              <router-link v-if="userIsModerator===true" :to="`/${this.$route.params.lang}/AdminPanel/`" class="nav-link">{{languageTranslationsAccess.Pages.Navigation.AdminPanel[this.$route.params.lang]}}</router-link>
            </li>
          </ul>
          <ul class="navbar-nav col" style="width: 100%;">
            <li class="nav-item dropdown" v-if="userIsModerator===true">
              <a class="nav-link dropdown-toggle" href="#" id="dropdown02" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                </svg></a>
              <div class="dropdown-menu" aria-labelledby="dropdown01">
                <router-link :to="`/${this.$route.params.lang}/Account/`" class="dropdown-item">{{languageTranslationsAccess.Pages.Navigation.Profile[$route.params.lang]}}</router-link>
      <!--          <router-link :to="`/${this.$route.params.lang}/AdminPanel/`" class="dropdown-item">Админ-панель</router-link>-->
                <button class="dropdown-item" v-on:click="logOut">{{languageTranslationsAccess.Pages.Navigation.Logout[$route.params.lang]}}</button>
              </div>
            </li>
            <li class="nav-item dropdown" v-else-if="userStatus===1">
              <a class="nav-link dropdown-toggle" href="#" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                </svg></a>
              <div class="dropdown-menu" aria-labelledby="dropdown01">
                <router-link :to="`/${this.$route.params.lang}/Account/`" class="dropdown-item">{{languageTranslationsAccess.Pages.Navigation.Profile[$route.params.lang]}}</router-link>
                <button class="dropdown-item" v-on:click="logOut">Выйти</button>
              </div>
            </li>
            <li class="nav-item dropdown" v-else>
              <a class="nav-link dropdown-toggle" href="#" id="dropdown03" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                </svg></a>
              <div class="dropdown-menu" aria-labelledby="dropdown01">
                <router-link :to="`/${this.$route.params.lang}/Login/`" class="dropdown-item">{{languageTranslationsAccess.Pages.Navigation.Login[$route.params.lang]}}</router-link>
                <router-link :to="`/${this.$route.params.lang}/Register/`" class="dropdown-item">{{languageTranslationsAccess.Pages.Navigation.Registration[$route.params.lang]}}</router-link>
              </div>
            </li>


            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="dropdownlang" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {{this.$route.params.lang}}
                <img :src="`${this.flags[this.$route.params.lang]}`" class="flag">
              </a>
              <div class="dropdown-menu" aria-labelledby="dropdownlang">
                <div v-on:click="changeLanguage('en')" class="dropdown-item">en<img :src="`${this.flags.en}`" class="flag"></div>
                <div v-on:click="changeLanguage('ru')" class="dropdown-item">ru<img :src="`${this.flags.ru}`" class="flag"></div>
                <div v-on:click="changeLanguage('ua')" class="dropdown-item">ua<img :src="`${this.flags.ua}`" class="flag"></div>
                <div v-on:click="changeLanguage('cz')" class="dropdown-item">cz<img :src="`${this.flags.cz}`" class="flag"></div>
              </div>
            </li>

          </ul>
    </div>
  </nav>
</template>

<script>
import axios from "axios";
import "/node_modules/flag-icons/css/flag-icons.min.css";

export default {
  name: "Navigation",
  data() {
    return {
      userStatus: 0,
      userIsModerator: false,
      languageTranslationsAccess: this.languageTranslations,
      flags: {
        "ua": "/media/ua.svg",
        "ru": "/media/ru.png",
        "en": "/media/en.png",
        "cz": "/media/cz.png",
      }
    };
  },
  methods: {
   changeLanguage(langaugeToChange){
     if (this.$route.params.lang !== langaugeToChange){
       this.$router.replace({ params: {lang:langaugeToChange}})
     }
   },
   getCookie(name) {
      var nameEQ = name + "=";
      var ca = document.cookie.split(';');
      for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
  return null;
},    setCookie(name,value,days) {
      var expires = "";
      if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
      }
      document.cookie = name + "=" + (value || "")  + expires + "; path=/";
    },
    logOut(){

      axios.delete("logout/",{ headers: {"Authorization" :  'Token ' + this.getCookie("token")} }).then(
        ).catch(window.location.href = "/");
      this.setCookie("token", undefined);
    }
  },
  mounted() {
    console.log("asd");
    axios.get('/checkIfUserIsLoggined/', { headers: {"Authorization" :  'Token ' + this.getCookie("token")} })
        .then(response => {
          console.log(response.data)
          console.log(response.data["userIsLogginned"])
          this.userStatus = parseInt(response.data["userIsLogginned"])
          this.userIsModerator = Boolean(parseInt(response.data["userIsModerator"]));

        }).catch(error => {
      this.userStatus = 0
      this.userIsModerator = 0;
    });
  },
}
</script>

<style scoped>
CZ::after {
  content: '🇨🇿';
  font-size: 12px;
  vertical-align: top;
}
.flag{
  width:25px;
}
</style>
