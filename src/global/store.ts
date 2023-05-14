import { createStore } from "vuex"
import deneme from "./components/mainlist"

const store = createStore({
	state : {
		person: {
			name : "Ahmet",
			age : 23,
		},
		theme: "dark",
	},
	modules : {
		list: deneme
	},
	getters : {
		getTheme(state): string {
			return state.theme;
		}
	},
	mutations : {// Anlik olarak islem yapar, garantisi verilemez
		setTheme(state, item: string) {
			state.theme = item;
		}
	},
	actions : {//async olarak islem yapar
		setTheme(context, item: string) {
			setTimeout(() => {
				context.commit("setTheme", item)
			}, 2000);
		}
	}
})

export default store;