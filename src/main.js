import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// import lodash from 'lodash'

createApp(App).mount('#app')
fetch('http://localhost:5173/api/getData').then((result) => {
  console.log(result);
})
