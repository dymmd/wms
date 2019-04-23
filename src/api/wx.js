const loginUrl = 'app_wx://login'
const shareUrl = 'app_wx://share'

function system() {
    let system = navigator.userAgent
    if (system.indexOf('Android') !== -1) {
        return 'Android'
    } else if (system.indexOf('iPhone') !== -1) {
        return 'IOS'
    }

}

function addParams(url, params) {
    let tmp, key
    for (key in params) {
        tmp = params[key]
        url += `&${key}=${tmp}`
    }
    return url
}

/**
 * [login 微信 app原生 登录接口]
 * @return {[type]} [description]
 */
export function getAuthCode() {
    return new Promise(
        (resolve, reject) => {

            // 先定义获取结果的方法
            window.wxLoginResult = function(res) {
                resolve(res)
            }

            // 调用原生 app 方法
            window.location = addParams(loginUrl, {
                appid: 'wxbc4fafac0ff69a35'
            })
        }
    )
}

/**
 * [share 微信分享]
 * @param {[type]} data [description]
 * @return {[type]} [description]
 */
export function share(data) {
    return new Promise(
        (resolve, reject) => {
            // window.location = addParams(shareUrl, {
            //     webpageUrl: document.location.host + '/share.html?id=' + data.id,
            //     title: data.title,
            //     description: data.description,
            //     to: data.to,
            //     appId: 'wxbc4fafac0ff69a35'
            // })
            let shareUrl = document.location.href.split("#")[0] + '/share.html?id=' + data.id
            if (system() == 'Android') {
                window.app_android_sharewx.androidShareWx(
                    'wxbc4fafac0ff69a35',
                    shareUrl,
                    data.title,
                    data.description,
                    data.to
                )
                window.shareResultWx = function() {
                    resolve(arguments)
                }

            }

        }
    )
}
