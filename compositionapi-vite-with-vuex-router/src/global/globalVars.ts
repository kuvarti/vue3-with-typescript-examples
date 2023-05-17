import { createStore} from 'vuex'


const store = createStore({
	state : {
		totalcprocess: {
			value: 0
		}
	},
	getters: {
		gettotal(state: any): string {
			return state.totalcprocess.value
		}
	},
	mutations : {
		inctotal(state: any){
			state.totalcprocess.value++
		}
	}
});

export default store;