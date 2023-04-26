const initialState = []

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "POST": {
            return [...state, action.payloud];
        }
        case "GET": {
            return [...action.payloud];
        }
        default:
            return state
    }
}
export default reducer;



