import { ReactNode } from 'react';
import { SidebarItemBase } from './Sidebar.styles';

interface SidebarItemProps {
  label: string;
  icon: ReactNode;
}
const SidebarItem = (props: SidebarItemProps) => {
  const { label, icon } = props;

  return (
    <SidebarItemBase className="pointer">
      <span className="icon">{icon}</span>
      <span>{label}</span>
    </SidebarItemBase>
  );
};

export { SidebarItem };
