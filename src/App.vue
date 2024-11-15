<template>
  <div id="app">
    <h1>Ticket Management System</h1>
    <TicketList />
  </div>
</template>

<script>
// Importando o componente TicketList
import TicketList from './components/TicketList.vue'

export default {
  name: 'App',
  components: {
    TicketList  // Registrando o componente
  }
}
</script>

<style>
</style>
