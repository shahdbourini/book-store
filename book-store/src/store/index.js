import { configureStore } from "@reduxjs/toolkit";
import books from "./bookSlice";
import auth from "./auth";

// export default configureStore({
//   reducer: {
//     books,
//   },
// });

const store = configureStore({
  reducer: {books: books, auth: auth},
})

export default store;