import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import BookList from "../../components/BookList/BookList";
import { StyledContainer } from "./styled";
import Spinner from "../../components/Spinner";
import Pagination from "../../components/Pagination";
import { paginationChangePage } from "../../components/Pagination/reducers/pagination";
// import { useAxios } from "../../hooks/useAxios";
// import { getBooks } from "../../api/books";
import {
  bookItemCreate,
  bookItemDelete,
  bookItemUpdate,
  bookListFetch,
} from "./thunk/bookList";
import { modalStateSelector } from "../../store/modal/selectors/modal";
import { modalOpenToggleAction } from "../../store/modal/reducer/modal";
import { CreateBookModal } from "./components/CreateBookModal";
import { UpdateBookModal } from "./components/UpdateBookModal";
import { DeleteBookModal } from "./components/DeleteBookModal";
import {
  bookDeleteItemDataSetAction,
  bookUpdateItemIdSetAction,
} from "./reducers/bookList";
import { Button } from "antd";

import * as selectors from "./selectors/bookList";

export default function Books() {
  // const { data, loading, error } = useAxios(getBooks);

  const loading = useSelector(selectors.bookListLoadingSelector);
  const data = useSelector(selectors.bookListDataSelector);
  const error = useSelector(selectors.bookListErrorSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { itemsPerPage, currentPage } = useSelector(
    selectors.bookListPaginationSelector
  );

  const { open, name } = useSelector(modalStateSelector);
  // console.log(open, name);

  const currentItems = useSelector(selectors.bookListCurrentItemsSelector);
  const handlePagination = (page) => {
    dispatch(paginationChangePage({ page }));
  };

  useEffect(() => {
    dispatch(bookListFetch());
  }, [dispatch]);

  const handleCreateBook = (values) => {
    dispatch(bookItemCreate(values));
  };

  const handleUpdateBook = (values) => {
    dispatch(bookItemUpdate(values));
  };

  const handleDeleteBook = (item) => {
    dispatch(bookItemDelete(item));
  };

  const handleCreateModalOpenToggle = () => {
    dispatch(modalOpenToggleAction({ name: "Create" }));
  };

  const handleEditModalOpen = useCallback((id) => {
    dispatch(bookUpdateItemIdSetAction({ id }));
    dispatch(modalOpenToggleAction({ name: "Update" }));
    // eslint-disable-next-line
  }, []);

  const handleEditModalClose = useCallback(() => {
    dispatch(modalOpenToggleAction({ name: "Update" }));
    // eslint-disable-next-line
  }, []);

  const handleDeleteModalOpen = useCallback((item) => {
    dispatch(bookDeleteItemDataSetAction(item));
    dispatch(modalOpenToggleAction({ name: "Delete" }));
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Button
        onClick={handleCreateModalOpenToggle}
        style={{ float: "right", margin: "15px" }}
      >
        Create Book
      </Button>
      <StyledContainer>
        {error && <p className="error">{error}</p>}
        {loading && <Spinner />}
        {data && !loading && !error && (
          <BookList
            onEdit={handleEditModalOpen}
            onDelete={handleDeleteModalOpen}
            books={currentItems}
          />
        )}
      </StyledContainer>
      {data.length > itemsPerPage && !error && (
        <Pagination
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          totalItems={data.length}
          paginate={handlePagination}
        />
      )}
      {open && name === "Create" && (
        <CreateBookModal
          onSave={handleCreateBook}
          onCancel={handleCreateModalOpenToggle}
        />
      )}
      {open && name === "Update" && (
        <UpdateBookModal
          onSave={handleUpdateBook}
          onCancel={handleEditModalClose}
        />
      )}
      {open && name === "Delete" && (
        <DeleteBookModal
          onSave={handleDeleteBook}
          onCancel={handleDeleteModalOpen}
        />
      )}
    </>
  );
}
