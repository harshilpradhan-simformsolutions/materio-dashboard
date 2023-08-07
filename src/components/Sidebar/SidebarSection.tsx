import { PropsWithChildren } from 'react';
import { SidebarSectionBase } from './Sidebar.styles';

const SidebarSection = (props: PropsWithChildren<{ title: string }>) => {
  const { title, children } = props;

  return (
    <SidebarSectionBase>
      <div className="sidebar-section__title">
        <p>{title}</p>
      </div>
      {/* AntD Space mounts extra div for each flex item, so applying flex manually */}
      <ul className="sidebar-section__items">{children}</ul>
    </SidebarSectionBase>
  );
};

export { SidebarSection };
