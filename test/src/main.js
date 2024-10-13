
import { createApp } from 'vue'
import App from './App.vue'
import gAuthPlugin from 'vue3-google-oauth2'
const app = createApp(App)
let gauthClientId = "149171011013-gg3jml3vnehe14d45bim01ntbjun5ol6.apps.googleusercontent.com";
app.use(gAuthPlugin, { clientId: gauthClientId, scope: 'email', prompt: 'consent', fetch_basic_profile: false })
import { gapi } from "gapi-script";

gapi.load("client:auth2", () => {
  gapi.client.init({
    clientId:
      "*****.apps.googleusercontent.com",
    plugin_name: "chat",
  });
});
app.mount('#app')
