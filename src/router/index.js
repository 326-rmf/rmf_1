import Vue from 'vue'
import VueRouter from 'vue-router'
import tiaozhuan from '../components/tiaozhuan.vue'
import tiaozhuan_2 from '../components/tiaozhuan_2.vue'
import tiaozhuan_3 from '../components/tiaozhuan_3.vue'
import tiaozhuan_4 from '../components/tiaozhuan_4.vue'
Vue.use(VueRouter)

const routes = [{
		path: '/tiaozhuan',
		name: 'tiaozhuan',
		components: {
			default: tiaozhuan
		}
	},
	{
		path: '/tiaozhuan_2',
		name: 'tiaozhuan_2',
		components: {
			default: tiaozhuan_2
		}
	},
	{
		path: '/tiaozhuan_3',
		name: 'tiaozhuan_3',
		components: {
			default: tiaozhuan_3
		}
	},
	{
		path: '/tiaozhuan_4',
		name: 'tiaozhuan_4',
		components: {
			default: tiaozhuan_4
		}
	},


]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
