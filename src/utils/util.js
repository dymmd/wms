import Cookies from 'js-cookie'

const getDeviceIdUrl = 'app://getDeviceId'

export function isEmptyObject(obj) {
    let i;
    for (i in obj) {
        return false
    }
    return true
}

export function setToken(token) {
    Cookies.set('token', token)
}

export function getToken() {
    return Cookies.get('token')
}

export function removeToken() {
    Cookies.remove('token')
}

export function setItem(name, item) {
    localStorage.setItem(name, JSON.stringify(item))
}

export function getItem(name) {
    return JSON.parse(localStorage.getItem(name))
}

export function removeItem(name) {
    localStorage.removeItem(name)
}

export function randomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

/**
 * [getUrlParam 解析 url 中的参数]
 * @param {[type]} name [要获取的参数名]
 * @return {[type]} [description]
 */
export function getUrlParam(name) {
    let paramsString = location.href.split('?')[1],
        res = {}
    if ( !paramsString ) {
      return null
    }
    let params = paramsString.split('&')
    for (let param of params) {
        let tmp = param.split('=')
        res[tmp[0]] = tmp[1]
    }
    if (name) {
        return res[name]
    } else {
        return res
    }
}

/**
 * [getDeviceId 获取设备码]
 * @return {[type]} [description]
 * @description
 * 1、获取用户唯一标识码
 */
export function getUuid() {
    return getItem('uuid')
}

/**
 * [getDeviceIdFromApp 从原生 app 获取设备码]
 * @return {[type]} [description]
 * !!! 有可能有异步操作的问题
 */
export function getDeviceIdFromApp() {

    let deviceId = getItem('deviceId')

    // 如果已经有设备号就不作任何操作
    if (deviceId) {
        return
    }
    // 如果是 windows 环境，设备号随机生成，仅作为测试使用
    if (window.navigator.platform.indexOf('Win') > -1) {
        deviceId = randomInt(10000, 99999) + new Date().getTime().toString()
        setItem('deviceId', deviceId)
    } else {
        if (!window.setDeviceId) {
            window.setDeviceId = deviceId => {
                setItem('deviceId', deviceId)
            }
        }
        window.location = getDeviceIdUrl
    }
}
/**
 * 将日期转换为指定的格式
 * @param {Object} dateStr   "1469281920000" "2016-07-23 21:52"
 * @param {Object} fmt   "yyyy.MM.dd" "yyyy/MM/dd" "yyyy-MM-dd"
 * eg:var time2 = new Date().format("yyyy-MM-dd");
 */
export function dateFormat(dateStr,fmt) {
    dateStr=new Date(dateStr);
    var o = {
        "M+" : dateStr.getMonth()+1,                 //月份
        "d+" : dateStr.getDate(),                    //日
        "h+" : dateStr.getHours(),                   //小时
        "m+" : dateStr.getMinutes(),                 //分
        "s+" : dateStr.getSeconds(),                 //秒
        "q+" : Math.floor((dateStr.getMonth()+3)/3), //季度
        "S"  : dateStr.getMilliseconds()             //毫秒
    };
    if(/(y+)/.test(fmt)) {
        fmt=fmt.replace(RegExp.$1, (dateStr.getFullYear()+"").substr(4 - RegExp.$1.length));
    }
    for(var k in o) {
        if(new RegExp("("+ k +")").test(fmt)){
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
        }
    }
    return fmt;
}
/**
 * 在微信上隐藏地址 方法1隐藏
 */
export function hideaddress (){
    if (typeof WeixinJSBridge == "undefined"){
        if( document.addEventListener ){
            document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
        }else if (document.attachEvent){
            document.attachEvent('WeixinJSBridgeReady', onBridgeReady);
            document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
        }
    }else onBridgeReady();
}
