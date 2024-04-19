import { combineReducers } from 'redux'
import {menuCategoryReducer} from "./MenuCategoryReducer";
import {menuReducer} from "./MenuReducer";
import {diningTableReducer} from "./DiningTableReducer";
import {reportReducer} from "./ReportReducer";

export const reducers = combineReducers({
    menuCategoryReducer,
    menuReducer,
    diningTableReducer,
    reportReducer,
});