<template>
    <div>
      <h2>Tickets</h2>
      <ul>
        <li v-for="ticket in tickets" :key="ticket.id">
          {{ ticket.client_name }} (ID: {{ ticket.id }})
          <button @click="viewMessages(ticket.id)">View Messages</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        tickets: []
      }
    },
    created() {
      this.fetchTickets()
    },
    methods: {
      async fetchTickets() {
        try {
          const response = await this.$axios.get('/tickets', {
            headers: {
              Authorization: 'Bearer wh1zzt3ch'  // Token para autenticação
            }
          })
          this.tickets = response.data
        } catch (error) {
          console.error('Error fetching tickets:', error)
        }
      },
      viewMessages(ticketId) {
        this.$router.push({ name: 'TicketMessages', params: { ticketId } })
      }
    }
  }
  </script>
  