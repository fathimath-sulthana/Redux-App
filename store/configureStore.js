import { combineReducers, createStore } from "redux";
import countReducer from "../src/reducers/countReducers";

const rootReducer = combineReducers(
    {
        counter:countReducer
    }
)

const configureStore = () =>{
    return createStore(rootReducer);
}
export default configureStore;