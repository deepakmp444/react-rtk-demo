import { configureStore } from "@reduxjs/toolkit";
// import reduxLogger from "redux-logger";
import cakeReducer from "../features/cake/cakeSlice";
import iceReducer from "../features/icecream/icecreamSlice";
import userReducer from "../features/users/userSlice";
// const logger = reduxLogger.createLogger();

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    ice: iceReducer,
    user: userReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
