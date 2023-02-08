<template>
  <div id="snippetContent">
      <div class="main-body">
        <h2>{{ languageTranslationsAccess.Pages.MyAccount.Profile[$route.params.lang] }}</h2>
        <div class="row gutters-sm">
          <div class="col-md-4 mb-3">
            <div class="profileCard">
              <div class="card-body">
                <div class="d-flex flex-column align-items-center text-center">
                  <img v-bind:src="icon" alt="Admin" class="rounded-circle" width="150">
                  <div class="mt-3">
                    <h4>@{{username}}</h4>
<!--                    <button class="btn btn-primary">Follow</button> <button class="btn btn-outline-primary">Змінити</button>-->
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div class="col-md-8">
            <div class="profileCard mb-3">
              <div class="card-body">
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">{{ languageTranslationsAccess.Pages.MyAccount.LastVisit[$route.params.lang] }}</h6>
                  </div>
                  <div class="col-sm-9 text-secondary"> {{ connectionDate }}</div>
                </div>
                <hr>
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">{{ languageTranslationsAccess.Pages.MyAccount.UserRole[$route.params.lang] }}</h6>
                  </div>
                  <div class="col-sm-9 text-secondary" v-on:click="isAdmin=2; isModerator=2">
                    <div v-if="1===this.isAdmin">{{ languageTranslationsAccess.Pages.MyAccount.rols.Admin[$route.params.lang] }}</div>
                    <div v-else-if="1===this.isModerator">{{ languageTranslationsAccess.Pages.MyAccount.rols.Moderator[$route.params.lang] }}</div>
                    <div v-else>{{languageTranslationsAccess.Pages.MyAccount.rols.User[$route.params.lang]}}</div>
                    <div v-if="2===this.isAdmin">(╯°益°)╯彡┻━┻</div>
                  </div>
                </div>
<!--                <hr>-->
<!--                <div class="row">-->
<!--                  <div class="col-sm-9 ">-->
<!--                    <div>-->
<!--                      Досягнення-->
<!--                    </div>-->
<!--                    <div>-->
<!--                      <div class="row">-->
<!--                        <div class="col-sm">(づ◡﹏◡)づ empty</div>-->
<!--                      </div>-->

<!--                    </div>-->
<!--                  </div>-->
<!--                </div>-->
              </div>
            </div>
<!--            <div class="row gutters-sm">-->
<!--              <div class="col-sm-6 mb-3">-->
<!--                <div class="profileCard h-100">-->
<!--                  <div class="card-body">-->
<!--                    <h6 class="d-flex align-items-center mb-3">Достижения пользователя</h6>-->
<!--                    <small>Вклад в общее создание постов </small>-->
<!--                    <div class="progress" style="height: 1px;">-->
<!--                      <div class="progress-bar" role="progressbar" style="width: 50%;" aria-valuemin="0" aria-valuemax="100"></div>-->
<!--                    </div>-->

<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
          </div>
        </div>
      </div>
  </div>
</template>

<script>

  import axios from 'axios'
  axios.defaults.xsrfHeaderName = 'X-CSRFToken'
  axios.defaults.xsrfCookieName = 'csrftoken'
   export default {
    name: 'Account',
    data () {
      return {
        languageTranslationsAccess: this.languageTranslations,
        fullName: '',
        email: '',
        username: '',
        password: '',
        confirm: '',
        expire_date: '',
        firstConnection_date: '',
        icon: '',
        connectionDate: '',
        isModerator: '',
        isAdmin: '',
}
},
    mounted() {
      this.returnUserInformation();

    },
    methods: {

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
    returnUserInformation () {
      axios.get('/getUserInfo/', {
        headers: {"Authorization" :  'Token ' + this.getCookie("token")}}).then(response => {
    this.userStatus = response.data["userStatus"];
    this.username = response.data["username"];
    this.password = response.data["password"];
    this.icon = response.data["icon"];
    this.isModerator = response.data["isModerator"];
    this.isAdmin = response.data["isAdmin"];
    this.connectionDate = response.data["connectionDate"];
  }).catch(() => {
    console.warn('Not good man :(');
  })
}
}
}

</script>

<style scoped>
body{
  margin-top:20px;
  color: #1a202c;
  text-align: left;
  background-color: #e2e8f0;
}
.main-body{
  background-color: #f7f7f7;
}
.main-body {
  padding: 15px;
}
.profileCard {
  box-shadow: 0 1px 3px 0 rgba(0,0,0,.1), 0 1px 2px 0 rgba(0,0,0,.06);
}

.profileCard {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 0 solid rgba(0,0,0,.125);
  border-radius: .25rem;
}

.card-body {
  flex: 1 1 auto;
  min-height: 1px;
  padding: 1rem;
}

.gutters-sm {
  margin-right: -8px;
  margin-left: -8px;
}

.gutters-sm>.col, .gutters-sm>[class*=col-] {
  padding-right: 8px;
  padding-left: 8px;
}
.mb-3, .my-3 {
  margin-bottom: 1rem!important;
}

.bg-gray-300 {
  background-color: #e2e8f0;
}
.h-100 {
  height: 100%!important;
}
.shadow-none {
  box-shadow: none!important;
}
</style>
