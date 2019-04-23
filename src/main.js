import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'babel-polyfill'
import vuex from 'vuex'
/*import Vant from 'vant'
import 'vant/lib/vant-css/index.css'*/
import store from './stores/store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
/*import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'*/

Vue.config.productionTip = false

Vue.use ( ElementUI , vuex  )
new Vue ( {
    router ,
    store ,
    render : h => h ( App )
} ).$mount ( '#app' )



