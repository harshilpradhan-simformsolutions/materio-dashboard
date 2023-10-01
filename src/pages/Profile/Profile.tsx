import { Tabs } from 'antd';
import { MdSearch, MdLockOpen } from 'react-icons/md';

import { Account } from './Account';
import { Flex } from '../../layouts/utils';
import { PropsWithChildren } from 'react';
import { Security } from './Security';

interface LabelProps {
  icon: React.ReactNode;
}
const Label = (props: PropsWithChildren<LabelProps>) => {
  const { children, icon } = props;

  return (
    <Flex gap={9}>
      {icon}
      {children}
    </Flex>
  );
};

const Profile = () => {
  return (
    <Tabs
      defaultActiveKey="2"
      destroyInactiveTabPane
      items={[
        {
          key: '1',
          label: <Label icon={<MdSearch size={20} />}>Account</Label>,
          children: <Account />,
        },
        {
          key: '2',
          label: <Label icon={<MdLockOpen size={20} />}>Profile</Label>,
          children: <Security />,
        },
        {
          key: '3',
          label: <Label icon={<MdSearch size={20} />}>Security</Label>,
          children: <div>Security</div>,
        },
        {
          key: '4',
          label: <Label icon={<MdSearch size={20} />}>Notifications</Label>,
          children: <div>Notifications</div>,
        },
      ]}
    />
  );
};

export { Profile };
