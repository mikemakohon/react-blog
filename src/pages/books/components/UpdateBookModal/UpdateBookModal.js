import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "../../../../components/Modal";
import { bookListUpdateStateSelector } from "../../selectors/bookList";
import { bookItemUpdateDataFetch } from "../../thunk/bookList";
import { BookForm } from "../BookForm/BookForm";
import Spin from "antd/lib/spin";

export const UpdateBookModal = ({ onSave, onCancel }) => {
  const dispatch = useDispatch();
  const { fetchData, data, loading } = useSelector(bookListUpdateStateSelector);

  useEffect(() => {
    dispatch(bookItemUpdateDataFetch(fetchData));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Modal form="edit" onCancel={onCancel} formName="edit">
      <Spin spinning={loading} />
      {!loading && data && (
        <BookForm mode="edit" onSave={onSave} data={data} name="edit" />
      )}
    </Modal>
  );
};
