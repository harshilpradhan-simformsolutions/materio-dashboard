import { Input, Select, Button, Space } from 'antd';
import { RxCross2 } from 'react-icons/rx';
import { AccountContainer } from './Profile.styles';
import { ReactComponent as WarningIcon } from '../../assets/icons/warning.svg';
import { useState } from 'react';

const Account = () => {
  const [showBanner, setShowBanner] = useState(true);

  return (
    <AccountContainer className="px-20 mb-20">
      <form className="profile-form pb-24">
        <Input placeholder="Username" />
        <Input placeholder="Name" />
        <Input placeholder="Email" />
        <Input placeholder="Role" />
        <Select
          defaultValue="lucy"
          options={[
            { value: 'jack', label: 'Jack' },
            { value: 'lucy', label: 'Lucy' },
            { value: 'Yiminghe', label: 'yiminghe' },
          ]}
        />
        <Input placeholder="Company" />
      </form>
      {showBanner && (
        <div className="warning mb-24">
          <span className="icon warning-icon">
            <WarningIcon />
          </span>
          <div className="warning-content">
            <p className="warning-content__title">
              Your email is not confirmed. Please check your inbox.
            </p>
            <p className="warning-content__subtitle">Resend Confirmation</p>
          </div>
          <span
            role="button"
            className="icon pointer warning-icon"
            onClick={() => setShowBanner(false)}
          >
            <RxCross2 size={16} />
          </span>
        </div>
        // <Alert
        //   icon={<WarningIcon />}
        //   message="Success Tips"
        //   description="Detailed description and advice about successful copywriting."
        //   type="warning"
        //   showIcon
        //   closable
        //   onClose={() => setShowBanner(false)}
        //   className="mb-24"
        //   closeIcon={<RxCross2 size={16} />}
        // />
      )}
      <Space size={16}>
        <Button type="primary" onClick={() => setShowBanner(true)}>
          SAVE CHANGES
        </Button>
        <Button>CANCEL</Button>
      </Space>
    </AccountContainer>
  );
};

export { Account };
