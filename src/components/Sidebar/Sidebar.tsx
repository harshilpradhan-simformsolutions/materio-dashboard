import { Menu, Tag } from 'antd';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as Radio } from '../../assets/radio-checked.svg';
import { ReactComponent as Home } from '../../assets/home.svg';
import { ReactComponent as Arrow } from '../../assets/arrow.svg';
import { SidebarBase } from './Sidebar.styles';
import { SidebarSection } from './SidebarSection';
import { SidebarItem } from './SidebarItem';
import {
  MdOutlineMail,
  MdOutlineChatBubbleOutline,
  MdCalendarToday,
} from 'react-icons/md';

const Sidebar = () => {
  return (
    <SidebarBase>
      <div className="logo-container">
        <div className="logo">
          <Logo />
          <h1>MATERIO</h1>
          <Radio />
        </div>
      </div>
      <div className="navbar__content">
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
              children: [
                {
                  key: '1.1',
                  label: 'CRM',
                },
                {
                  key: '1.2',
                  label: 'Analytics',
                },
                {
                  key: '1.3',
                  label: 'eCommerce',
                },
              ],
            },
          ]}
        />
        <div className="nav-items__list">
          <SidebarSection title="Apps & Pages">
            <SidebarItem label="Email" icon={<MdOutlineMail size={20} />} />
            <SidebarItem
              label="Chat"
              icon={<MdOutlineChatBubbleOutline size={20} />}
            />
            <SidebarItem
              label="Calendar"
              icon={<MdCalendarToday size={20} />}
            />
            <SidebarItem label="CRM" icon={<Home />} />
            <SidebarItem label="Dashboards" icon={<Home />} />
            <SidebarItem label="CRM" icon={<Home />} />
            <SidebarItem label="Dashboards" icon={<Home />} />
            <SidebarItem label="CRM" icon={<Home />} />
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
      </div>
    </SidebarBase>
  );
};

export { Sidebar };
