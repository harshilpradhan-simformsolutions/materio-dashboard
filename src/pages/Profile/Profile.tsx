import { Tabs } from 'antd';
import { MdSearch, MdLockOpen, MdNotificationsNone } from 'react-icons/md';

import { Label } from '../../components/antd/Label';
import { ReactComponent as InfoIcon } from '../../assets/icons/info.svg';
import { ReactComponent as BillingIcon } from '../../assets/icons/billing.svg';

import { Account } from './Account';
import { Info } from './Info';
import { Billing } from './Billing';
import { Security } from './Security';
import { Notifications } from './Notifications';

const Profile = () => {
  return (
    <Tabs
      defaultActiveKey="5"
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
          label: <Label icon={<BillingIcon />}>Billing</Label>,
          children: <Billing />,
        },
        {
          key: '5',
          label: (
            <Label icon={<MdNotificationsNone size={20} />}>
              Notifications
            </Label>
          ),
          children: <Notifications />,
        },
      ]}
    />
  );
};

export { Profile };
