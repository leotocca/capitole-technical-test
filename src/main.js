import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes/index";
import store from "./store/index";
import "./index.css";

createApp(App).use(router).use(store).mount("#app");
