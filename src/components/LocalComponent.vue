<template>
  <h1>Local Component</h1>
  <h2>{{title}}</h2>
  <!-- <button @click="$emit('addclick')"> Add</button> -->
  <button @click="$emit('addclick',1)"> Add</button>
  <button @click="addtwo"> Add two</button>

  <!-- <slot></slot> -->
  <slot name="header"/>
  <slot name="content"/>
</template>

<script>
export default {
  //props:["title"],
  props:{
      title: String
  },
  methods: {
      addtwo(){
          this.$emit('addclick',2)
      }
  },
}
</script>

<style scoped>

</style>