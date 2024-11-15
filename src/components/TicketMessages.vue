<template>
  <div>
    <h2>Messages for Ticket {{ ticketId }}</h2>
    <ul>
      <li v-for="message in messages" :key="message.id">
        {{ message.sender }}: {{ message.content }}
      </li>
    </ul>
    <textarea v-model="newMessage" placeholder="Type a new message"></textarea>
    <button @click="sendMessage">Send Message</button>
  </div>
</template>

<script>
export default {
  name: 'TicketMessages',
  data() {
    return {
      ticketId: this.$route.params.ticketId,
      messages: [],
      newMessage: ''
    }
  },
  created() {
    this.fetchMessages()
  },
  methods: {
    async fetchMessages() {
      try {
        const response = await this.$axios.get(`/tickets/${this.ticketId}/messages`, {
          headers: {
            Authorization: 'Bearer wh1zzt3ch'  // Autenticação
          }
        })
        this.messages = response.data
      } catch (error) {
        console.error(error)
      }
    },
    async sendMessage() {
      try {
        await this.$axios.post(`/tickets/${this.ticketId}/messages`, {
          message: {
            sender: 'client',
            content: this.newMessage
          }
        }, {
          headers: {
            Authorization: 'Bearer wh1zzt3ch'  // Autenticação
          }
        })
        this.newMessage = ''
        this.fetchMessages()
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>
