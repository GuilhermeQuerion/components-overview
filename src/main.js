import { createApp } from 'vue'
import App from './App.vue'
import GlobalComponent from './components/GlobalComponent.vue'

const app = createApp(App)
// Registra o camponente para ser utilizado Globalmente
app.component('GlobalComponent', GlobalComponent)
app.mount('#app')
