<template>
  <div id="app" class="app">
    <Navigation></Navigation>
    <transition name="moveInUp">
    <router-view style="min-height: 100vh !important;"/>

  </transition>
    <div class="bg-primary">
      <Footer></Footer>
    </div>
    <notifications group="foo" />

  </div>

</template>

<script>

import axios from 'axios';
import Navigation from "@/views/Navigation";
import Footer from "@/views/Footer";
axios.defaults.xsrfHeaderName = 'X-CSRFToken'
axios.defaults.xsrfCookieName = 'csrftoken'
export default {
  components: {Footer, Navigation},
  mounted() {

    var image = new Image();
    image.src = "/media/castle.png";
      // Inside here we already have the dimensions of the loaded image
      var style = [
        // Hacky way of forcing image's viewport using `font-size` and `line-height`
        'font-size: 1px;',
        'line-height: ' + 286 + 'px;',

        // Hacky way of forcing a middle/center anchor point for the image
        'padding: ' + 286 * .5 + 'px ' + 850 * .5 + 'px;',

        // Set image dimensions
        'background-size: ' + 850 + 'px ' + 286 + 'px;',

        // Set image URL
        'background: url('+ image.src +');'
      ].join(' ');

      // notice the space after %c
      console.log('%c ', style);



    },
  methods:{
    getCookie(name) {
      var nameEQ = name + "=";
      var ca = document.cookie.split(';');
      for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
      }
      return null;
    },
    setCookie(name,value,days) {
      var expires = "";
      if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
      }
      document.cookie = name + "=" + (value || "")  + expires + "; path=/";
    },
  }
}

</script>
<style>
@import'~bootstrap/dist/css/bootstrap.css';
.btn-circle {
  width: 38px;
  height: 38px;
  border-radius: 19px;
  text-align: center;
  padding-left: 0;
  padding-right: 0;
  /*font-size: 16px;*/
  margin-left: 10px;
}
.form-block{
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  background-color: #f7f7f7;
  padding-left: 20%;
  padding-right: 20%;
  padding-top: 5%;
}


.moveInUp-enter-active{
  animation: fadeIn 1s ease-in;
}
@keyframes fadeIn{
  0%{
    opacity: 0;
  }
  50%{
    opacity: 0.5;
  }
  100%{
    opacity: 1;
  }
}

.navbar-nav > li{
}
.navbar {
  margin-bottom: 0;
}
.album {
  min-height: 50rem; /* Can be removed; just added for demo purposes */
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #f7f7f7;
}

.card {
  float: left;
  width: 33.333%;
  padding: .75rem;
  margin-bottom: 2rem;
  border: 0;
}

.card > img {
  margin-bottom: .75rem;
}

.card-text {
  font-size: 85%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.projectCard {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  width: 250px;
  margin-left: 15px;
  margin-bottom: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  background-color: white;
  border: solid white;
  transition: 1s;
}
.projectCard:hover{
  transform: scale(1.04);
}
.card-text{
  text-align: center;

}

a .card-body {
  color:#6c757d;
  text-decoration:none !important;

}
a:hover{
  text-decoration:none;
}
div.col-md-4{
  transition: 1s;
}
div.col-md-4:hover{
  transform: scale(1.04);
}
.container{
  display: flex;
  /*justify-content: center;*/
  flex-wrap: wrap;

}
.card {
  transition: all 0.2s ease;
  cursor: pointer
}

.card:hover {
  box-shadow: 5px 6px 6px 2px #e9ecef;
  transform: scale(1.1)
}
.card-img{
  object-fit: cover; /* Do not scale the image */
  object-position: center; /* Center the image within the element */
  width: 100%;
  margin-bottom: 1rem;
  max-height: 150px;

}
</style>
