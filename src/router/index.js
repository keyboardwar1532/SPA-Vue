import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/Test'
import Login from '@/components/Login'
import Logout from '@/components/Logout'
import Add from '@/components/Add'
import Edit from '@/components/Edit'

Vue.use(Router)
const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/test',
    name: 'Test',
    component: Test
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/add',
    name: 'Add',
    component: Add
  },
  {
    path: '/edit/:id',
    name: 'Edit',
    props: true,
    component: Edit
  },
  {
    path: '/logout',
    name: 'Logout',
    component: Logout
  }
]
const router = new Router({ mode: 'history', routes })

router.beforeEach(({ name }, from, next) => {
  // 获取 JWT Token
  if (localStorage.getItem('JWT_TOKEN')) {
    // 如果用户在login页面
    if (name === 'Login') {
      next('/')
    } else {
      next()
    }
  } else {
    if (name === 'Login') {
      next()
    } else {
      next({ name: 'Login' })
    }
  }
})
export default router
// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld
//     },
//     {
//       path: '/test',
//       name: 'Test',
//       component: Test
//     },
//     {
//       path: '/login',
//       name: 'Login',
//       component: Login
//     }
//   ]
// })
