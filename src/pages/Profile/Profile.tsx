import { Tabs } from 'antd';
import { Account } from './Account';

const Profile = () => {
  return (
    <Tabs
      defaultActiveKey="1"
      destroyInactiveTabPane
      items={[
        {
          key: '1',
          label: 'Account',
          children: <Account />,
        },
      ]}
    />
  );
};

export { Profile };
