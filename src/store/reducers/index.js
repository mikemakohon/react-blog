import { combineReducers } from "redux";
import bookReducer from "../../pages/Book/reducers/book";
import bookListReducer from "../../pages/Books/reducers/bookList";
import statisticsReducer from "../../pages/Statistics/reducers/statistics";
import paginationReducer from "../../components/Pagination/reducers/pagination";
import modal from "../modal/reducer/modal";

export default combineReducers({
  book: bookReducer,
  bookList: bookListReducer,
  statistics: statisticsReducer,
  pagination: paginationReducer,
  modal,
});
