import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Order from '@/components/Order'
import Admin from '@/components/Admin'
import About from '@/components/about/About'

// 二级路由
import Concant from '@/components/about/Concant'
import History from '@/components/about/History'

// 三级路由
import PersonName from '../components/about/PersonName'
import PersonPhone from '../components/about/PersonPhone'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homeLink',
      component: Home
    }, {
      path: '/order',
      name: 'orderLink',
      component: Order
    }, {
      path: '/admin',
      name: 'adminLink',
      component: Admin
    }, {
      path: '/about',
      name: 'aboutLink',
      redirect: '/about/history',
      component: About,
      children: [
        {
          path: '/about/concant',
          name: 'concantLink',
          redirect: '/personPhone',
          component: Concant,
          children: [
            {
              path: '/personName',
              name: 'personNameLink',
              component: PersonName
            }, {
              path: '/personPhone',
              name: 'personPhoneLink',
              component: PersonPhone
            }
          ]
        }, {
          path: '/about/history',
          name: 'historyLink',
          component: History
        }
      ]
    }, {
      path: '*',
      redirect: '/'
    }
  ],
  mode: 'history'
})
