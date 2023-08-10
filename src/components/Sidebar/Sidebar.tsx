import { useState } from 'react';
import { Menu, Radio as RadioButton, Tag } from 'antd';
import {
  MdOutlineMail,
  MdOutlineChatBubbleOutline,
  MdCalendarToday,
  MdContentCopy,
  MdLockOpen,
  MdStarBorder,
  MdLaptopChromebook,
} from 'react-icons/md';

import { Expand } from '../Icons';
import { SidebarBase } from './Sidebar.styles';
import { SidebarSection } from './SidebarSection';
import { SidebarItem } from './SidebarItem';

import { ReactComponent as Logo } from '../../../public/logo.svg';
import { ReactComponent as Radio } from '../../assets/radio-checked.svg';
import { ReactComponent as Home } from '../../assets/home.svg';
import { ReactComponent as Card } from '../../assets/card.svg';
import { ReactComponent as User } from '../../assets/user.svg';
import { ReactComponent as Invoice } from '../../assets/invoice.svg';
import { ReactComponent as Arrows } from '../../assets/components.svg';
import { ReactComponent as Typography } from '../../assets/typography.svg';
import { ReactComponent as Checked } from '../../assets/checked.svg';

const items = ['CRM', 'Analytics', 'eCommerce'];

const Sidebar = () => {
  const [selected, setSelected] = useState<string | null>(items[1]);

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
          expandIcon={({ isOpen }) => (
            <Expand direction={isOpen ? 'up' : 'down'} />
          )}
          items={[
            {
              key: '1',
              label: (
                <>
                  <span>Dashboards</span>
                  <Tag className="error">New</Tag>
                </>
              ),
              icon: (
                <span className="icon">
                  <Home />
                </span>
              ),
              children: items.map((item) => ({
                key: item,
                label: <RadioButton>{item}</RadioButton>,
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
          <SidebarItem label="Typography" icon={<Typography />} />
          <SidebarItem label="Icons" icon={<MdStarBorder size={24} />} />
          <SidebarItem label="Cards" icon={<Card />} expandable />
          <SidebarItem label="Components" icon={<Arrows />} expandable />
        </SidebarSection>
        <SidebarSection title="forms & tables">
          <SidebarItem label="Form Elements" icon={<Radio />} expandable />
          <SidebarItem
            label="Form Layouts"
            icon={<MdLaptopChromebook size={20} />}
          />
          <SidebarItem label="Form Validation" icon={<Checked />} />
        </SidebarSection>
      </div>
    </SidebarBase>
  );
};

export { Sidebar };
