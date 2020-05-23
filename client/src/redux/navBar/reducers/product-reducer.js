import {RECEIVE_PRODUCTS} from "../../constants";

const initialState = {
    productList:[],
    // productCategory=[]
}

export default (state=initialState, action)=>{

    switch (action.type) {
        case RECEIVE_PRODUCTS:
            return {...state, productList:[...action.productList]}
    
        default:
            return state
    }

}