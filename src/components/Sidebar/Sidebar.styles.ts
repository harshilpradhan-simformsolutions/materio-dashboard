import styled from 'styled-components';

export const SidebarBase = styled.nav`
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

  .navbar-content {
    padding-right: 18px;
    max-height: calc(100vh - 64px);
    overflow-y: auto;
  }

  .ant-menu {
    background-color: transparent;
    font-size: 16px;
    &-sub {
      > li {
        border-top-right-radius: 50px;
        border-bottom-right-radius: 50px;
        padding-top: 9px;
        padding-bottom: 9px;
        margin-left: 0;
        &:hover {
          background-color: var(--color-action-hover) !important;
        }
        &.active {
          color: white;
          background: linear-gradient(to right, #c6a7fe, var(--color-primary));
        }
      }
    }
    &-submenu {
      &-selected {
        > .ant-menu-submenu-title {
          color: var(--color-text);
        }
      }
      &-title {
        border-top-right-radius: 50px;
        border-bottom-right-radius: 50px;
        padding-left: 18px !important;
        padding-top: 9px;
        padding-bottom: 9px;
        margin: 0;
        width: 100%;
        &:active {
          background-color: transparent;
        }
        &:hover {
          background-color: var(--color-action-hover) !important;
        }
      }
    }
  }
`;
export const SidebarSectionBase = styled.div`
  margin: 20px 0;
  font-weight: 400;

  .sidebar-section {
    &__items {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }
    &__title {
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
  }
`;

export const SidebarItemBase = styled.li`
  width: 100%;
  font-size: 16px;
  list-style: none;
  padding: 9px 14px 9px 23px;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  display: flex;
  align-items: center;
  &:hover {
    background-color: var(--color-action-hover);
  }
  .label {
    flex: 1;
    max-width: 146px;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;
