//this is the initial state
const initialState = {
    image: '',
    mortgage: 0,
    rent: 0,
    name: '',
    address: '',
    city: '',
    state: '',
    zipcode: 0
}


//these are the action type
const UPDATE_IMAGE = 'UPDATE_IMAGE'
const UPDATE_MORTGAGE = 'UPDATE_MORTGAGE'
const UPDATE_RENT = 'UPDATE_RENT'
const UPDATE_NAME = 'UPDATE_NAME'
const UPDATE_ADDRESS = 'UPDATE_ADDRESS'
const UPDATE_CITY = 'UPDATE_CITY'
const UPDATE_STATE = 'UPDATE_STATE'
const UPDATE_ZIPCODE = 'UPDATE_ZIPCODE'


//this is the reducer
function reducer(state = initialState, action) {
    let newState = {}
    switch (action.type) {
        case UPDATE_IMAGE:
            newState = { ...state, ...{ image: action.payload } }
            console.log(newState)
            return newState;
        case UPDATE_MORTGAGE:
            newState = { ...state, ...{ mortgage: action.payload } }
            console.log(newState)
            return newState;
        case UPDATE_RENT:
            newState = { ...state, ...{ rent: action.payload } }
            console.log(newState)
            return newState;
        case UPDATE_NAME:
            newState = { ...state, ...{ name: action.payload } }
            console.log(newState)
            return newState;
        case UPDATE_ADDRESS:
            newState = { ...state, ...{ address: action.payload } }
            console.log(newState)
            return newState;
        case UPDATE_CITY:
            newState = { ...state, ...{ city: action.payload } }
            console.log(newState)
            return newState;
        case UPDATE_STATE:
            newState = { ...state, ...{ state: action.payload } }
            console.log(newState)
            return newState;
        case UPDATE_ZIPCODE:
            newState = { ...state, ...{ zipcode: action.payload } }
            console.log(newState)
            return newState;
        default:
            return state
    }
}


//these are the action creators
export function updateImage(image) {
    return {
        type: UPDATE_IMAGE,
        payload: image
    }
}

export function updateMortgage(mortgage) {
    return {
        type: UPDATE_MORTGAGE,
        payload: mortgage
    }
}

export function updateRent(rent) {
    return {
        type: UPDATE_RENT,
        payload: rent
    }
}

export function updateName(name) {
    return {
        type: UPDATE_NAME,
        payload: name
    }
}

export function updateAddress(address) {
    return {
        type: UPDATE_ADDRESS,
        payload: address
    }
}

export function updateCity(city) {
    return {
        type: UPDATE_CITY,
        payload: city
    }
}

export function updateState(state) {
    return {
        type: UPDATE_STATE,
        payload: state
    }
}

export function updateZipcode(zipcode) {
    return {
        type: UPDATE_ZIPCODE,
        payload: zipcode
    }
}


//exporting default
export default reducer