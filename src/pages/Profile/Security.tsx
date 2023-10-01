import { Input } from 'antd';
import { MdLockOpen } from 'react-icons/md';

import { Flex } from '../../layouts/utils';
import { ProfileAction } from './ProfileAction';
import { SecurityContainer } from './Profile.styles';
import security from '../../assets/images/security.png';
import { ReactComponent as Key } from '../../assets/icons/key.svg';

const Security = () => {
  return (
    <SecurityContainer>
      <div className="password my-20">
        <div className="password-fields">
          <Input.Password className="mb-24" placeholder="Current Password" />
          <Input.Password className="mb-24" placeholder="New Password" />
          <Input.Password
            className="mb-24"
            placeholder="Confirm New Password"
          />
        </div>
        <div className="password-image">
          <img src={security} />
        </div>
      </div>
      <div className="auth">
        <Flex gap={16} className="auth-header my-24">
          <span className="icon">
            <Key />
          </span>
          <span className="auth-header__text">Two-factor authentication</span>
        </Flex>
        <div className="auth-body p-20">
          <span className="auth-body__logo icon p-12 text-primary">
            <MdLockOpen size={24} />
          </span>
          <p className="auth-body__title my-16">
            Two factor authentication is not enabled yet.
          </p>
          <p className="auth-body__description mb-20">
            Two-factor authentication adds an additional layer of <br />{' '}
            security to your account by requiring more than just a <br />{' '}
            password to log in. Learn more.
          </p>
        </div>
      </div>
      <ProfileAction />
    </SecurityContainer>
  );
};

export { Security };
