import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
let state = {
  visitedViews: [{
    name: '工作台',
    path: '/',
    flag: '',
    matchflag:'',
    params: '',
    StatefullPath: "/"
  }],
  initial: [{
    name: '工作台',
    path: '/',
    flag: '',
    matchflag:'',
    params: '',
    matchflag:'',
    StatefullPath: "/"
  }],
  locFlag: null,
  judge: {
    flag: ''
  },
};
let mutations = {
  ADD_VISITED_VIEWS: (state, view) => {
    if (localStorage.getItem("judge") != undefined) {
      state.locFlag = JSON.parse(localStorage.getItem("judge")).flag;
      view.flag ? view.flag : view.flag = state.locFlag;
    }
    // console.log(view)
      if (state.visitedViews.some(v => v.name === view.name)&& view.name==='质检详情'){
        state.visitedViews.forEach((val,ind,arr)=>{//val为数组中当前的值，index为当前值的下表，arr为原数组
          if( state.visitedViews[ind].name==='质检详情'){
            // console.log(22222, state.visitedViews[ind])
            state.visitedViews[ind]=view;
            // console.log(22222, state.visitedViews[ind])            
            return
          }
      })
      return
    }
    // console.log('继续往下走')
      if (state.visitedViews.some(v => v.name === view.name)&& view.name!='质检详情') return;
      state.visitedViews.push({
        name: view.name,
        path: view.path,
        flag: view.flag,
        params: view.params,
        matchflag: view.matchflag,
        StatefullPath: view.StatefullPath
      })
    // 新添加部分，改变flag进行判断
    // state.locFlag=view.flag;
  },
  DEL_VISITED_VIEWS: (state, view) => {
    for (const [i, v] of state.visitedViews.entries()) {
      if (v.name === view.name) {
        state.visitedViews.splice(i, 1)
        break
      }
    }
  },
};
let actions = {
  addVisitedViews({
    commit
  }, view) {
    commit('ADD_VISITED_VIEWS', view)
  },
  delVisitedViews({
    commit,
    state
  }, view) {
    return new Promise((resolve) => {
      commit('DEL_VISITED_VIEWS', view)
      resolve([...state.visitedViews])
    })
  },
};
export default new Vuex.Store({
  state,
  mutations,
  actions
});
