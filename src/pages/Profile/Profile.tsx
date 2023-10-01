import { Tabs } from 'antd';
import { MdSearch } from 'react-icons/md';

import { Account } from './Account';
import { Flex } from '../../layouts/utils';

const Profile = () => {
  return (
    <Tabs
      defaultActiveKey="1"
      destroyInactiveTabPane
      items={[
        {
          key: '1',
          label: (
            <Flex gap={9}>
              <MdSearch size={20} />
              Account
            </Flex>
          ),
          children: <Account />,
        },
      ]}
    />
  );
};

export { Profile };
