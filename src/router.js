import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)
const _import = page => () =>
    import (`./views/${page}/index`)
const router =  new Router({
  routes: [
        {
          path: '/',
          name: 'home',
          component: _import('Home')
        },
      {
          path: '/login',
          name: 'login',
          component: _import('Login')
      }
  ]
})
router.beforeEach((to, from, next) => {
    if (to.matched.length ===0) {                                        //如果未匹配到路由
    from.name ? next({ name:from.name }) : next('/');   //如果上级也未匹配到路由则跳转错误页面，如果上级能匹配到则转上级路由
} else {
    next();                                                                            //如果匹配到正确跳转
}
});
export default router;
