const SET_SCROLLOFFSET_Y = "scroll/SET_SCROLLOFFSET_Y"

const initScrollState = {
    scrolloffsetY:0,
}


export const setScrollOffsetY = (height) => {
    return {type:SET_SCROLLOFFSET_Y, payload:height};

}


const scroll = (state=initScrollState, action) => {
    switch (action.type) {
        case SET_SCROLLOFFSET_Y:
            return {...state, scrolloffsetY: action.payload
    }

        default:
            return state;
    }


}
export default scroll;


