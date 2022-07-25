import { useSelector } from "react-redux";
import { Modal } from "../../../../components/Modal";
import { bookListCreateStateSelector } from "../../selectors/bookList";
import { BookForm } from "../BookForm/BookForm";
import PropTypes from "prop-types";

export const CreateBookModal = ({ onSave, onCancel }) => {
  // const { loading } = useSelector(bookListCreateStateSelector);

  return (
    <Modal form="create" onCancel={onCancel} formName="create">
      <BookForm mode="create" onSave={onSave} name="create" />
    </Modal>
  );
};

CreateBookModal.propTypes = {
  onSave: PropTypes.func,
  onCancel: PropTypes.func,
};

CreateBookModal.defaultProps = {
  onSave: () => {},
  onCancel: () => {},
};
