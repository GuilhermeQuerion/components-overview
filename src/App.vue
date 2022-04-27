<template>
  <global-component></global-component>
  <local-component :title="title" @addclick="count+= $event">
    <!-- Slot Teste -->
    <template v-slot:header>
      Slot Header
    </template>
    <template v-slot:content>
      Slot Content
    </template>
  </local-component>
  <p>{{count}}</p>
</template>

<script>
import LocalComponent from "./components/LocalComponent.vue";

export default {
  data() {
    return {
      title: "Teste Title",
      count: 0
    }
  },
  methods: {

  },
  components: {
    LocalComponent
  },
  //ganchos de inicialização
  beforeCreate(){
    //antes da iniciação do componente, data ainda não está iniciado
    console.log('before create');
  },
  created(){
    //Acesso aos elementos do data
    console.log('created')
  },
  //ganchos de montagem (inserção no DOM)
  beforeMount(){
    console.log('before mount')
  },
  mounted(){
    console.log('mounted')
  },
  //ganchos de atualizações
  beforeUpdate(){
    console.log('before Update')
  },
  updated() {
    console.log('Updated')
  },
  //ganchos de destruição
  beforeUnmount(){
    console.log('before Unmount')
  },
  unmounted(){
    console.log('Unmounted')
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
