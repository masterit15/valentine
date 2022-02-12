import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import VueSocketIO from 'vue-3-socket.io'

const socket = new VueSocketIO({
    debug: false,
    connection: 'http://localhost:5000',
    vuex: {
        store,
        actionPrefix: 'SOCKET_',
        mutationPrefix: 'SOCKET_'
    },
})
createApp(App).use(store).use(router).use(socket).mount('#app')
