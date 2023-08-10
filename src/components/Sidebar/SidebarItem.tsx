import { ReactNode } from 'react';
import { SidebarItemBase } from './Sidebar.styles';
import { MdChevronRight } from 'react-icons/md';
import { typography } from '../../config/colors';

interface SidebarItemProps {
  label: string;
  icon: ReactNode;
  expandable?: boolean;
}
const SidebarItem = (props: SidebarItemProps) => {
  const { label, icon, expandable = false } = props;

  return (
    <SidebarItemBase className="pointer">
      <span className="icon">{icon}</span>
      <span className="label">{label}</span>
      {expandable && (
        <span className="icon">
          <MdChevronRight size={24} color={typography.secondary} />
        </span>
      )}
    </SidebarItemBase>
  );
};

export { SidebarItem };
