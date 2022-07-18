import { createSelector } from "reselect";

const stateSelector = (state) => state;
const bookListStateSelector = (state) => state.bookList;
const paginationStateSelector = (state) => state.pagination;

export const bookListLoadingSelector = createSelector(
  bookListStateSelector,
  (bookList) => bookList.loading
);

export const bookListDataSelector = createSelector(
  bookListStateSelector,
  (bookList) => bookList.data
);

export const bookListErrorSelector = createSelector(
  bookListStateSelector,
  (bookList) => bookList.error
);

export const bookListCurrentPageSelector = createSelector(
  paginationStateSelector,
  (pagination) => pagination.currentPage
);

export const bookListPaginationSelector = createSelector(
  paginationStateSelector,
  (pagination) => ({
    itemsPerPage: pagination.itemsPerPage,
    currentPage: pagination.currentPage,
  })
);

export const bookListCurrentItemsSelector = createSelector(
  stateSelector,
  ({ pagination, bookList }) => {
    const { itemsPerPage, currentPage } = pagination;
    const lastItemIndex = itemsPerPage * currentPage;
    const firstItemIndex = lastItemIndex - itemsPerPage;
    return bookList.data.slice(firstItemIndex, lastItemIndex);
  }
);
