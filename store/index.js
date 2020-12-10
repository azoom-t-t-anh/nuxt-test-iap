export const state = () => ({
  token: ''
})

export const mutations = {
  SET_TOKEN(state, payload) {
    state.iapJwtAssertion = payload
  }
}

export const actions = {
  nuxtServerInit ({ commit }, { req }) {

    const iapJwtAssertion = req.headers["x-goog-iap-jwt-assertion"]    

    iapJwtAssertion && commit('SET_TOKEN', iapJwtAssertion)
  }

}