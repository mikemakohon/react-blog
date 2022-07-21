import { useSelector } from "react-redux";
import { Modal } from "../../../../components/Modal";
import { bookListDeleteStateSelector } from "../../selectors/bookList";
import Spin from "antd/lib/spin";
import { Space, Typography } from "antd";

export const DeleteBookModal = ({ onSave, onCancel }) => {
  const { loading, data } = useSelector(bookListDeleteStateSelector);

  const { Title, Text } = Typography;

  return (
    <Modal onCancel={onCancel} onSave={() => onSave(data)} formName="edit">
      <Spin spinning={loading} />
      {!loading && data && (
        <Space direction="vertical">
          <Title level={5}>
            Are you sure that you want to delete {data.title}?
          </Title>
          <Text>This action is irreversible</Text>
        </Space>
      )}
    </Modal>
  );
};
