
const defaultState = {
    list: []
}

export default (state = defaultState, action) => {

    switch (action.type) {
        case "aaa":
            let newState = JSON.parse(JSON.stringify(state))
            newState.list.push(action.payload)
            return newState;
        
        default:
    }

    return state;
}