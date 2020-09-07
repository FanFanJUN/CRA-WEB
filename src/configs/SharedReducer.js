const SHOW = 'SHOW';
const HIDE = 'HIDE';
const defaultState = {
    loadings:false
}
export default function (state, action) {
    if (!state) {
        state = defaultState
    }
    switch (action.type) {
        case SHOW:
            return{
                loadings:true
            }
        case HIDE:{
            return{
                loadings:false
            }
        }
        default:
            return state
    }
}

export const show =() => {
    const loadings = true
    return { type: 'SHOW', loadings }
}

export const hide =() => {
    const loadings = false
    return { type: 'HIDE', loadings }
}
