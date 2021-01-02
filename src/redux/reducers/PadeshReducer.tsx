const INITIAL_STATE = {
    category: "all",
};

const PadeshReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "SET_PADESH_CATEGORY":
            return {...state, ...{category: action.payload}};
        default:
            return state;
    }
}

export default PadeshReducer;
