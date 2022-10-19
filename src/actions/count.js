
///////////for class component////////
// import { COUNTER_CHANGE } from "../constants";

import { COUNTER_DECREMENT, COUNTER_INCREMENT } from "../constants";

// export function changeCount(count){
//     return{
//         type:COUNTER_CHANGE,
//         payload:count
//     }
// }



/////////for functional component///////////
 
export function  counterIncrement() {
    return{type:COUNTER_INCREMENT}
}
export function counterDecrement() {
    return{type:COUNTER_DECREMENT}
}