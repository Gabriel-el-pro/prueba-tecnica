<template>
<div id="app" class="fondo">
 
  <b-container fluid>
    <b-navbar-nav class="ml-auto" style="margin-top:20px;background-color: rgba(5, 82, 41, 0.602);">
     <b-col sm="12">
      <label style="font-size:20px;" for="input-large">Ingrese la Latitud y Longitud que desea buscar, por ultimo de click en el boton "Buscar cordenadas"</label>
    </b-col>
  </b-navbar-nav>
  <hr>
  <b-row class="my-3">
    <b-col sm="1">
      <label style="font-size:20px" for="input-large">Latitud:</label>
    </b-col>
    <b-col sm="3">
      <input v-model.number="latitud" size="lg" placeholder="Ingrese la latitud">
    </b-col>
     <b-col sm="1">
      <label style="font-size:20px"  for="input-large">Longitud:</label>
    </b-col>
    <b-col sm="3">
      <input v-model.number="longitud" size="lg" placeholder="Ingrese la longitud">
    </b-col>
  </b-row>
  <div class="row justify-content-center">
   <b-button  @click="cambiarLocalizacion()" variant="outline-danger">Buscar Cordenadas</b-button>
 </div>
 </b-container>
 <hr>
  <l-map style="height: 400px" :zoom="zoom" :center="$store.state.center">
    <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
     <l-marker :lat-lng="$store.state.center" ></l-marker>
  </l-map>
<hr>
  <h1>{{$store.state.titulo}}</h1>
  <ul>
    <li v-for="(data, index) in $store.state.cordenadasBuscadas"
    :key="index">
   <font>Latitud: </font> {{data.latitud}}
    <font>Longitud: </font> {{data.longitud}}
    </li>
    </ul>
  </div>
</template>

<script>
//import L from 'leaflet';
import { Icon } from 'leaflet';
import {LMap, LTileLayer,LMarker} from 'vue2-leaflet';
import 'leaflet/dist/leaflet.css';
delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});
export default {
  components: {
    LMap,
    LTileLayer,
    LMarker
    //'l-map': window.Vue2Leaflet.LMap,
    
  },
  
  data () {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      zoom: 15,
         longitud: '',
        latitud: '',
    };
  },
  
  methods:{
      cambiarLocalizacion(){
        if(this.latitud!='' && this.longitud!=''){
     this.$store.state.latitud=Number(this.latitud);
     this.$store.state.longitud=Number(this.longitud);
     this.$store.dispatch('agregarLocalizacion');
     this.longitud= '';
    this.latitud= '';
        }else{
          alert('Digite una latitud y longitud valida')
        }
   },
  //   cambiar(){
  //       this.center=[]
  //      this.center[0]=Number(this.longitud);
  //      this.center[1]=Number(this.latitud);
  //       let usuario= new Object()
  //     usuario.longitud=this.longitud;
  //     usuario.latitud=this.latitud;
  //     this.cordenadasBuscadas.push(usuario);
  //     this.longitud=null;
  //     this.latitud=null;
  //  }
  }
}
</script>
<style>
.fondo{
  background-color: rgba(248, 182, 182, 0.171);
}

</style>
