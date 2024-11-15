import { createRouter, createWebHistory } from 'vue-router'
import TicketList from '../components/TicketList.vue'
import TicketMessages from '../components/TicketMessages.vue'

const routes = [
  { path: '/', component: TicketList },
  { path: '/tickets/:ticketId/messages', name: 'TicketMessages', component: TicketMessages }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
