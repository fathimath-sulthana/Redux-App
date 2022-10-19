/////////////class component////////////////
// import { Switch } from "react-native";
// import { COUNTER_CHANGE } from "../constants";
// const intialState ={
//     count:0
// }

// const countReducer = (state= intialState,action) =>{
//     switch(action.type){
//         case COUNTER_CHANGE:
//               return{
//                 ...state,
//                 count:action.payload
//               }
//           default :
//                 return state;
//         }
//     }
// export default countReducer;



////////////////// functional componrnt/////////////
import { COUNTER_INCREMENT,COUNTER_DECREMENT } from "../constants";
const intialState ={
    count:0
}

const countReducer = (state= intialState,action) =>{
    switch(action.type){
        case COUNTER_INCREMENT:
              return{
                ...state,
                count: state.count +1
              }
        case COUNTER_DECREMENT:
                return{
                  ...state,
                  count: state.count -1
                }
          default :
                return state;
        }
    }
export default countReducer;