  <template>
  <div class="home">
    <section class="jumbotron text-center" style="background-color: white; ">
      <div class="container"></div>
      <div class="row py-lg-5">
        <div class="col-lg-6 col-md-8 mx-auto">
          <img src="/media/castle.png" style="width: 100px;" :class="castle_icon" v-on:click="rotate">
          <h1 class="fw-light">{{languageTranslationsAccess.Pages.Main.KWU[this.$route.params.lang]}}</h1>
          <blockquote>
            <p class="lead text-muted">
              {{languageTranslationsAccess.Pages.Main.sloganList[new Date().getDay()][Math.floor(Math.random()*3)][this.$route.params.lang] }}
            </p>
          </blockquote>
        </div>
      </div>
    </section>
    <div class="album text-muted">
      <h2 style="margin-bottom: 100px;">{{ languageTranslationsAccess.Pages.Main.LastPublication[this.$route.params.lang] }}</h2>
      <div class="container" style="justify-content: center;">
        <div v-for="projectCard in this.listOfProductsLast" v-bind:key="projectCard.id">
          <div class="projectCard" style="width: 18rem;">
            <router-link :to="`/${$route.params.lang}/publicationPage/${projectCard.id}`">
              <div v-if="projectCard.icon.length>0">
                <img class="card-img-top" :src="`${projectCard.icon[0].url}`" alt="Card image cap">
              </div>
              <div v-else>
                <img class="card-img-top" src="https://img2.akspic.ru/previews/0/7/6/5/6/165670/165670-prostota-graficeskij_dizajn-materialnoe_svojstvo-purpurnyj_cvet-polutona_i_ottenki-550x310.jpg" alt="Card image cap">
              </div>
              <div class="card-body">
                <h5 class="card-title">{{projectCard[$route.params.lang.toUpperCase()].Title}}</h5>
                <p class="card-text">{{projectCard[$route.params.lang.toUpperCase()].ShortDescription}}</p>
              </div>
            </router-link>
          </div>
        </div>
      </div>
      <KyivMapOfMultiPublications style="margin-left: auto;margin-right: auto; display: inline-block;min-width: 100px; width: 90%;" v-bind:dots="this.listOfMarkers"></KyivMapOfMultiPublications>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import Home from '@/components/Home.vue'
import KyivMapOfMultiPublications from "@/views/KyivMapOfMultiPublications.vue"
import axios from "axios";

class Point {
  latitude
  longitude
  id

  constructor(latitude, longitude, id){
    this.latitude = latitude
    this.longitude = longitude
    this.id = id
  }

  latlng(){
    return [this.latitude, this.longitude]
  }

}

export default {
  name: 'Home',
  components:{KyivMapOfMultiPublications},
  data () {
    return {
      listOfProductsLast: [],
      listOfMarkers: [],
      languageTranslationsAccess: this.languageTranslations,
      castle_icon: "",

    }
  },
  mounted() {
    this.getListOfProducts()
  },
  methods:{
    rotate(){
      this.castle_icon = "kwu"
      setTimeout(() => this.castle_icon = "", 2000);

    },
    getListOfProducts(){

      var DISTRIBUTOR_QUERY = `
        query{
          getListOfTemporaryProblems{
            id
            active
            location{
              latitude
              longitude
            }
        }
        }`
    axios({
            url: "/graphql/",
            method: 'post',
            headers: {
              'Content-Type': 'application/json',
              "Authorization" :  'Token ' + this.getCookie("token"),
          },
          data: {
            query: DISTRIBUTOR_QUERY,
          }
    }).then(response => {
      console.log(response.data.data)
      for (var temporaryProblem in response.data.data.getListOfTemporaryProblems) {
        var point = new Point(parseFloat(response.data.data.getListOfTemporaryProblems[temporaryProblem].location[0].latitude), parseFloat(response.data.data.getListOfTemporaryProblems[temporaryProblem].location[0].longitude), response.data.data.getListOfTemporaryProblems[temporaryProblem].id)
        this.listOfMarkers.push(point)
      }

    })


      // axios.get("/problem/getListOfProblems",
      //     {params: {
      //         "Title": ""
      //       }}
      // ).then(result=>{
      //   this.listOfProductsLast = result.data["listOfProblems"].reverse()
      //   for (var resultKey in this.listOfProductsLast) {
      //     var latlang = []
      //
      //     for(var key in result.data["listOfProblems"][resultKey].location){
      //       console.log([parseInt(result.data["listOfProblems"][resultKey].location[key][0]), parseInt(result.data["listOfProblems"][resultKey].location[key][1])])
      //       latlang.push([parseInt(result.data["listOfProblems"][resultKey].location[key][0]), parseInt(result.data["listOfProblems"][resultKey].location[key][1])])
      //
      //     }
      //     this.listOfMarkers.push(
      //         {
      //           "latlngs": latlang,
      //           // "color": 'green'
      //         },
      //     )
      //
      //   }
      //   console.log("marker " + this.listOfMarkers)
      // })
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

    },
  }

}
</script>
<style>

.kwu {
  animation: rot 1s linear infinite;
}

@keyframes rot {
  0% { transform: rotateY( 0deg); }
  50% { transform: rotateY(90deg); }
  100% { transform: rotateY( 0deg); }
}

blockquote {
  padding: 6px 16px;
  border: none;
  quotes: "\201C" "\201D";
  display: inline-block;
  position: relative;
}

blockquote:before {
  content: open-quote;
  font-weight: bold;
  position:absolute;
  top:0;
  left: 0;
}
blockquote:after {
  content: close-quote;
  font-weight: bold;
  position:absolute;
  bottom:0; right: 0;
}
</style>