import axios from 'axios'
import { getToken,removeToken} from '@/utils/util'
import {Toast} from 'vant'

axios.defaults.baseURL = 'http://app-t.healthservice.mobile.taikang.com:80',
   /* http://app-t.healthservice.mobile.taikang.com/shop-app/*/
  /* process.env.NODE_ENV === 'production' ? '' :*/
axios.defaults.timeout = 5000
let flagUrl=''
axios.interceptors.response.use( function( res ) {
  console.log(res)
    if(res.status==200){
      if(res.data.code==1){
        return res.data.data
      }else if(res.data.code=='E000008'||res.data.code=='D100001'){
          //校验token过期
          Toast.fail(res.data.message)
          removeToken()
          window.location.href='/#/login'
      }else{
        Toast.fail(res.data.message)
        /*return res.data*/
      }
    }else{
        if(flagUrl=='/appArea/queryLocationByLongitudeLatitude'){
            Toast.fail('无法定位')
        }else{
            window.location.replace( '/#/networkAnomaly')
            Toast.fail('网络异常')
        }
    }
}, function(err) {
  console.log(err)
    if(flagUrl=='/appArea/queryLocationByLongitudeLatitude'){
        Toast.fail('无法定位')
    }else{
        //window.location.replace( '/#/networkAnomaly')
        Toast.fail('网络异常')
    }
})

axios.interceptors.request.use(function(config) {
    flagUrl=config.url
  config.url = '/mobilenet/console/'+ config.url
  if (config.url !== '/appUser/userLogin') {
    config.data = config.data || {}
    if(getToken()){
        config.token = config.data.token = getToken()
        config.headers['access-token'] = getToken();
    }
  }
  return config
}, function(err) {
  return err
})

export default axios
