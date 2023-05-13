import { createStore } from "vuex"

const store = createStore({
	state : {
		person: {
			name : "Ahmet",
			age : 23,
		},
		theme: "dark",
		myarr: [1, 2, 3, 4, 5]
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
		setTheme(context, item) {
			console.log(context, " <=>", item)
			setTimeout(() => {
				context.commit("setTheme", "Pink")
			}, 2000);
		}
	}
})

export default store;