const initialPartsState = {
    parts : [],
}

const partsReducer = (state = initialPartsState, action) => {
    if(action.type === "SET_PARTS") {
        return {
            ...state,
            parts: action.parts,
          };
    }
    return state;
};

export default partsReducer;