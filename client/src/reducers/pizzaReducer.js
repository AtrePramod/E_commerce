export const getAllPizzaReducer = (state = { pizzas: [] }, action) => {
    switch (action.type) {
        case 'GET_PIZZAS_REQUEST':
            return {
                ...state,
                loading: true
            }
        case 'GET_PIZZAS_SUCCESS':
            return {
                pizzas: action.payload,
                loading: false
            }
        case 'GET_PIZZAS_FAIL':
            return {
                error: action.payload
            }
        default: return state
    }
};
export const addPizzaReducer = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_PIZZAS_REQUEST':
            return {
                ...state,
                loading: true
            }
        case 'ADD_PIZZAS_SUCCESS':
            return {
                success: true,
                loading: false
            }
        case 'ADD_PIZZAS_FAIL':
            return {
                error: action.payload
            }
        default: return state
    }
}

export const editPizzaByIdReducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET_PIZZASBYID_REQUEST':
            return {
                ...state,
                loading: true
            }
        case 'GET_PIZZASBYID_SUCCESS':
            return {
                pizza: action.payload,
                loading: false
            }
        case 'GET_PIZZASBYID_FAIL':
            return {
                error: action.payload
            }
        default: return state
    }
};
export const updatePizzaByIdReducer = (state = {}, action) => {
    switch (action.type) {
        case 'UPDATED_PIZZABYID_REQUEST':
            return {
                ...state,
                updateloading: true
            }
        case 'UPDATED_PIZZABYID_SUCCESS':
            return {
                updatesuccess: true,
                updateloading: false
            }
        case 'UPDATED_PIZZABYID_FAIL':
            return {
                updaterror: action.payload
            }
        default: return state
    }
}
