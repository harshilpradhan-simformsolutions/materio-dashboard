import styled from 'styled-components';

export const SidebarBase = styled.nav`
  background-color: var(--color-background);
  overflow-y: auto;
  max-height: 100vh;

  // TODO: utility classes
  .logo-container {
    padding: 8px 0;
  }

  .logo {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 8px 22px;
    h1 {
      flex: 1;
      font-size: 20px;
      font-weight: 700;
      padding: 1px 0;
    }
  }

  .navbar__content {
    padding-right: 18px;
  }

  .ant-menu {
    background-color: transparent;
    &-submenu-title {
      padding-left: 18px !important;
    }
  }
`;
export const SidebarSectionBase = styled.div`
  margin: 20px 0;
  font-weight: 400;

  .sidebar-section__items {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
  .sidebar-section__title {
    color: var(--color-disabled);
    background-color: var(--color-divider);
    text-transform: uppercase;
    height: 1px;
    width: 100%;
    position: relative;
    font-size: 12px;
    margin: 35px 0 25px 0;

    p {
      position: absolute;
      background-color: var(--color-background);
      left: 14px;
      top: -9px;
      padding: 0 10px;
    }
  }
`;

export const SidebarItemBase = styled.li`
  width: 100%;
  font-size: 16px;
  list-style: none;
  padding: 10px 14px 10px 23px;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  display: flex;
  align-items: center;
  .icon {
    margin-right: 12px;

    svg {
      vertical-align: middle;
    }
  }
  &:hover {
    background-color: var(--color-action-hover);
  }
`;
