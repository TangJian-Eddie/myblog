import Vue from 'vue'
import VueRouter from 'vue-router'

const Start = () => import('../views/start/Start')
const ShowBlogs = () => import('../views/home/ShowBlogs')
const SingleBlog = () => import('../views/single/SingleBlog')
const EditBlog = () => import('../views/edit/EditBlog')
const AddBlog = () => import('../views/add/AddBlog')

// 1.安装插件
Vue.use(VueRouter)

// 2.创建router
const routes = [
  {
    path: '',
    redirect: '/start'
  },
	{
		path: '/start',
		component: Start
	},
  {
    path: '/home',
    component: ShowBlogs
  },
  {
    path: '/blog/:id',
    component: SingleBlog
  },
  {
    path: '/edit/:id',
    component: EditBlog
  },
  {
    path: '/add',
    component: AddBlog
  }
]
const router = new VueRouter({
  routes,
  mode: 'history'
})


export default router
