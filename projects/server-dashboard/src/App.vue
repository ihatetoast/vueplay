<template>
    <div class="container">
        <app-header></app-header>
        <hr/>
        <div class="row">
          <app-servers></app-servers>
          <app-server-details></app-server-details>
        </div>
        <hr/>
        <div class="row">
           <app-footer></app-footer>        
        </div>
    </div>
</template>

<script>
  import Header from './Shared/Header.vue';
  import Footer from './Shared/Footer.vue';
  import Servers from './Server/Servers.vue';
  import ServerDetails from './Server/ServerDetails.vue';

  export default {
    components:{
      'app-header': Header,
      'app-footer': Footer,
      'app-servers': Servers,
      'app-server-details': ServerDetails
    }
  }
</script>

<style></style>
