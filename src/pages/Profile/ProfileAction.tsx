import { Button, Space } from 'antd';

interface ProfileActionProps {
  onSaveChanges?: () => void;
  onCancel?: () => void;
}
const ProfileAction = (props: ProfileActionProps) => {
  const { onSaveChanges, onCancel } = props;

  return (
    <Space size={16}>
      <Button type="primary" onClick={onSaveChanges}>
        Save Changes
      </Button>
      <Button htmlType="button" className="secondary" onClick={onCancel}>
        Cancel
      </Button>
    </Space>
  );
};

export { ProfileAction };
