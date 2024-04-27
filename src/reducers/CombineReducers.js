import { combineReducers } from 'redux'
import {menuCategoryReducer} from "./MenuCategoryReducer";
import {menuReducer} from "./MenuReducer";
import {diningTableReducer} from "./DiningTableReducer";
import {reportReducer} from "./ReportReducer";
import {menuOrderReducer} from "./CashierReducer";

export const reducers = combineReducers({
    orderReducer: menuOrderReducer,
    menuCategoryReducer,
    menuReducer,
    diningTableReducer,
    reportReducer,
});