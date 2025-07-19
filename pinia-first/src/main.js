import { createApp, toRef } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { SecretPiniaPlugin } from './stores/plugin/SecretPiniaPlugin'

const app = createApp(App)
const pinia = createPinia()

pinia.use(SecretPiniaPlugin)

// this is how we add a property to pinia store that we don't see on devtools
// but is available on 'customProperties'
pinia.use(() => ({ hello: 'some hello' }))

pinia.use(({ store }) => {
  store.message = 'some message'
})

// this is how we add a property to pinia state that we see on devtools
pinia.use(({ store }) => {
  store.$state.hasError = false
  store.hasError = toRef(store.$state, 'hasError')
})

// watch a change
pinia.use(({ store }) => {
  store.$subscribe((mutation, state) => {
    console.log('change occures in store ', store.$id)
    console.log('this is the mutation ', mutation)
    console.log('this is new state ', state)
  })
  store.$onAction(({ name, args, after, onError }) => {
    after(() => {
      console.log('finished running function: ', name, ' with args: ', args)
    })
    onError(() => {
      console.log('an error occured in ', name)
    })
  })
})

app.use(pinia)
app.use(router)

app.mount('#app')
