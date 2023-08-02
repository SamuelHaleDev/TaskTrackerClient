const AppReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TASK':
            return {
                ...state,
                tasks: [action.payload, ...state.tasks]
            }
        default:
            return state;
    }
}

export default AppReducer;