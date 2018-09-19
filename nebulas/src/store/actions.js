import * as types from './mutation-types'

export const setLoading = function ({commit}, loading) {
  commit(types.SET_LOADING, loading)
}
