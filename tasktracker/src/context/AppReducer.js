const AppReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TASK':
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            }
        case 'DELETE_TASK':
            var newTasks = [];
            for (var i = 0; i < state.tasks.length; i++) {
                if (state.tasks[i].id !== Number(action.payload)) {
                    newTasks.push(state.tasks[i]);
                }
            }
            return {
                ...state,
                tasks: newTasks
            }
        default:
            return state;
    }
}

export default AppReducer;