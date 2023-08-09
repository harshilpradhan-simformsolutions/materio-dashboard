import { Menu, Tag } from 'antd';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as Radio } from '../../assets/radio-checked.svg';
import { ReactComponent as Home } from '../../assets/home.svg';
import { ReactComponent as Arrow } from '../../assets/arrow.svg';
import { ReactComponent as User } from '../../assets/user.svg';
import { ReactComponent as Invoice } from '../../assets/invoice.svg';
import { SidebarBase } from './Sidebar.styles';
import { SidebarSection } from './SidebarSection';
import { SidebarItem } from './SidebarItem';
import {
  MdOutlineMail,
  MdOutlineChatBubbleOutline,
  MdCalendarToday,
  MdContentCopy,
  MdLockOpen,
} from 'react-icons/md';
import { useState } from 'react';

const items = ['CRM', 'Analytics', 'eCommerce'];

const Sidebar = () => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <SidebarBase>
      <div className="py-8">
        <div className="logo">
          <Logo />
          <h1>MATERIO</h1>
          <Radio />
        </div>
      </div>
      <div className="navbar-content">
        <Menu
          mode="inline"
          expandIcon={<Arrow height={24} width={24} />}
          items={[
            {
              key: '1',
              label: (
                <>
                  <span>Dashboards</span>
                  <Tag className="error">New</Tag>
                </>
              ),
              icon: <Home />,
              children: items.map((item) => ({
                key: item,
                label: item,
                className: item === selected ? 'active' : undefined,
                onClick: () => setSelected(item),
              })),
            },
          ]}
        />
        <SidebarSection title="Apps & Pages">
          <SidebarItem label="Email" icon={<MdOutlineMail size={20} />} />
          <SidebarItem
            label="Chat"
            icon={<MdOutlineChatBubbleOutline size={20} />}
          />
          <SidebarItem label="Calendar" icon={<MdCalendarToday size={20} />} />
          <SidebarItem label="Invoice" icon={<Invoice />} expandable />
          <SidebarItem label="User" icon={<User />} expandable />
          <SidebarItem
            label="Roles & Permissions"
            icon={<MdLockOpen size={20} />}
            expandable
          />
          <SidebarItem label="Pages" icon={<Invoice />} expandable />
          <SidebarItem
            label="Dialog Examples"
            icon={<MdContentCopy size={20} />}
          />
        </SidebarSection>
        <SidebarSection title="user interface">
          <SidebarItem label="Dashboards" icon={<Home />} />
          <SidebarItem label="CRM" icon={<Home />} />
          <SidebarItem label="Dashboards" icon={<Home />} />
          <SidebarItem label="CRM" icon={<Home />} />
          <SidebarItem label="Dashboards" icon={<Home />} />
          <SidebarItem label="CRM" icon={<Home />} />
          <SidebarItem label="Dashboards" icon={<Home />} />
          <SidebarItem label="CRM" icon={<Home />} />
        </SidebarSection>
      </div>
    </SidebarBase>
  );
};

export { Sidebar };
