import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./user/user-reducer";
import cartReducer from "./cart/cart-reducers";
import shopReducer from "./shop/shop.reducer";
import collectionReducer from "./collections/collection-reducer";
import themeReducer from "./theme/theme-reducer";
import alertReducer from "./alert/alert-reducer";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart', 'theme']
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    shop: shopReducer,
    collection: collectionReducer,
    theme: themeReducer,
    alert: alertReducer
})

export default persistReducer(persistConfig, rootReducer)