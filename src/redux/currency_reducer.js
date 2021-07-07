import { ADDCURRENCY } from "./constant";
const initState = []

export default function currencyReducer(prestate = initState,action){
    const {type,data} = action
    switch (type) {
        case ADDCURRENCY:
            return [data,...prestate]
    
        default:
            return [...prestate]
    }
}