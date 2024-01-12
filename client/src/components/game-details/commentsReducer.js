const reducer = (state, action) => {
    switch (action?.type) {
        case "GET_ALL_COMMENTS":
            // do smth
            return [...action.something];
            // break;
        case 'ADD_COMMENT':
            return [...state, action.something];
        // case 'EDIT_COMMENT':
        //     return state.map(c => c._id === action.something._id ? {...c, text: action.something.text}: c)
        default:
            return state;
    }

}

export default reducer;