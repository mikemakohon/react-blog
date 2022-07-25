import { Button, Modal as AntdModal } from "antd";
import PropTypes from "prop-types";

export const Modal = ({ loading, children, onCancel, formName, onSave }) => {
  return (
    <AntdModal
      visible={true}
      onCancel={onCancel}
      confirmLoading={loading}
      footer={[
        <Button key="cancel" onClick={onCancel}>
          Cancel
        </Button>,
        <Button
          key="submit"
          type="primary"
          loading={loading}
          htmlType="submit"
          form={formName}
          onClick={onSave}
        >
          Confirm
        </Button>,
      ]}
    >
      {children}
    </AntdModal>
  );
};

Modal.propTypes = {
  loading: PropTypes.bool,
  onCancel: PropTypes.func,
  onSave: PropTypes.func,
  formName: PropTypes.string,
  children: PropTypes.any,
};

Modal.defaultProps = {
  loading: true,
  onSave: () => {},
  onCancel: () => {},
  formName: "",
  children: [],
};
