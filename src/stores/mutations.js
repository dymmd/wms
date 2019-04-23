const mutations = {
    // 没有登陆
    loginFalse: state => state.loginState = false,
    // 登陆成功
    loginTrue: state => state.loginState = true,
}
export default mutations
