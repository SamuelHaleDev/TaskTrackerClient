const AppReducer = (state, action) => {
    switch(action.type) {
        case 'GET_TASKS':
            return {
                ...state,
                loading: false,
                tasks: action.payload
            }
        case 'ADD_TASK':
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            }
        case 'DELETE_TASK':
            var newTasks = [];
            for (var i = 0; i < state.tasks.length; i++) {
                if (state.tasks[i]._id !== action.payload) {
                    newTasks.push(state.tasks[i]);
                }
            }
            return {
                ...state,
                tasks: newTasks
            }
        case 'SET_LOADING':
            return {
                ...state,
                loading: action.payload
            };
        case 'TASK_ERROR':
            return {
                ...state,
                tasks: newTasks
            }
        default:
            return state;
    }
}

export default AppReducer;