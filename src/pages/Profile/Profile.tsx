import { PropsWithChildren } from 'react';
import { Tabs } from 'antd';
import { MdSearch, MdLockOpen } from 'react-icons/md';

import { ReactComponent as InfoIcon } from '../../assets/icons/info.svg';

import { Account } from './Account';
import { Flex } from '../../layouts/utils';
import { Security } from './Security';
import { Info } from './Info';

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
      defaultActiveKey="3"
      destroyInactiveTabPane
      items={[
        {
          key: '1',
          label: <Label icon={<MdSearch size={20} />}>Account</Label>,
          children: <Account />,
        },
        {
          key: '2',
          label: <Label icon={<MdLockOpen size={20} />}>Security</Label>,
          children: <Security />,
        },
        {
          key: '3',
          label: <Label icon={<InfoIcon />}>Info</Label>,
          children: <Info />,
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
