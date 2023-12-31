import { createGlobalStyle } from 'styled-components';
import { dark, misc, palettes, typography } from './config/colors';
import {
  classes,
  fontSizeClasses,
  fontWeightClasses,
  radiusClasses,
} from './config/utilities';

export const GlobalStyle = createGlobalStyle`
  :root { 
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;
    
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;

    /* Variables - we can write a script which converts obj into vars */
    --color-primary: ${palettes.primary.main};
    --color-primary-light: ${palettes.primary.light};
    --color-primary-dark: ${palettes.primary.dark};
    --color-primary-contrast: ${palettes.primary.contrast};
    --color-primary-contained-hover-bg: ${palettes.primary.containedHoverBg};
    --color-primary-outlined-hover-bg: ${palettes.primary.outlinedHoverBg};
    --color-primary-outlined-resting-bg: ${palettes.primary.outlinedRestingBg};

    --color-secondary: ${palettes.secondary.main};
    --color-secondary-light: ${palettes.secondary.light};
    --color-secondary-dark: ${palettes.secondary.dark};
    --color-secondary-contrast: ${palettes.secondary.contrast};
    --color-secondary-contained-hover-bg: ${palettes.secondary.containedHoverBg};
    --color-secondary-outlined-hover-bg: ${palettes.secondary.outlinedHoverBg};
    --color-secondary-outlined-resting-bg: ${palettes.secondary.outlinedRestingBg};

    --color-info: ${palettes.info.main};
    --color-info-light: ${palettes.info.light};
    --color-info-dark: ${palettes.info.dark};
    --color-info-contrast: ${palettes.info.contrast};
    --color-info-contained-hover-bg: ${palettes.info.containedHoverBg};
    --color-info-outlined-hover-bg: ${palettes.info.outlinedHoverBg};
    --color-info-outlined-resting-bg: ${palettes.info.outlinedRestingBg};
    
    --color-success: ${palettes.success.main};
    --color-success-light: ${palettes.success.light};
    --color-success-dark: ${palettes.success.dark};
    --color-success-contrast: ${palettes.success.contrast};
    --color-success-contained-hover-bg: ${palettes.success.containedHoverBg};
    --color-success-outlined-hover-bg: ${palettes.success.outlinedHoverBg};
    --color-success-outlined-resting-bg: ${palettes.success.outlinedRestingBg};

    --color-warning: ${palettes.warning.main};
    --color-warning-light: ${palettes.warning.light};
    --color-warning-dark: ${palettes.warning.dark};
    --color-warning-contrast: ${palettes.warning.contrast};
    --color-warning-contained-hover-bg: ${palettes.warning.containedHoverBg};
    --color-warning-outlined-hover-bg: ${palettes.warning.outlinedHoverBg};
    --color-warning-outlined-resting-bg: ${palettes.warning.outlinedRestingBg};

    --color-error: ${palettes.error.main};
    --color-error-light: ${palettes.error.light};
    --color-error-dark: ${palettes.error.dark};
    --color-error-contrast: ${palettes.error.contrast};
    --color-error-contained-hover-bg: ${palettes.error.containedHoverBg};
    --color-error-outlined-hover-bg: ${palettes.error.outlinedHoverBg};
    --color-error-outlined-resting-bg: ${palettes.error.outlinedRestingBg};

    --color-text: ${typography.main};
    --color-text-secondary: ${typography.secondary};
    --color-background: ${misc.background};
    --color-action-hover: ${typography.hover};
    --color-disabled: ${typography.disabled};
    --color-divider: ${misc.divider};

    --color-dark-bg: ${dark.background};
    --color-badge-border: #312D4B;
    --color-gradient-stop-1: #c6a7fe;
    --color-gradient-stop-2: #9155FD;
    --color-input-icon: #E7E3FC8A;
    --color-primary-dimmed: rgb(59, 50, 93);
  }
  
  *, ::after, ::before {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body {
    background-color: var(--color-background);
    color: var(--color-text);
  }

  .center {
    display: grid;
    place-content: center;
  }

  /** For Debugging */
  .border {
    border: 1px solid var(--color-primary);
  }

  .pointer {
    cursor: pointer;
  }

  .icon {
    display: inline-flex;
    align-items: center;
    color: inherit;
    font-style: normal;
    line-height: 0;
    text-align: center;
    text-transform: none;
    vertical-align: -0.125em;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    transition: transform 0.3s;
  }

  /** AntD Global customization */
  .ant-btn {
    &.success {
      color: var(--color-success);
      border-color: var(--color-success);
      &:hover {
        color: var(--color-success) !important;
        border-color: var(--color-success) !important;
      }
    }
    &.secondary {
      color: var(--color-secondary);
      border-color: var(--color-secondary);
      &:hover {
        color: var(--color-secondary) !important;
        border-color: var(--color-secondary) !important;
      }
    }
    text-transform: uppercase;
    font-weight: 500;
    &-default {
      background-color: transparent;
    }
  }

  .ant-checkbox {
    color: var(--color-text-secondary);
    &-checked {
      & .ant-checkbox-inner {
        background-color: var(--color-primary) !important;
        border-color: var(--color-primary) !important;
      }
    }
    & .ant-checkbox-inner {
      background-color: transparent;
      border: 2px solid var(--color-text-secondary);
      height: 18px;
      width: 18px;
    }
  }

  .ant-tag {
    --color: var(--color-primary);
    background-color: var(--color);
    color: var(--color-text);
    border-color: var(--color);
    font-weight: 500;
    &.primary {
      color: var(--color-primary) !important;
      background-color: var(--color-primary-dimmed);
      border: none;
    }
    &.outlined {
      background-color: transparent !important;
      color: var(--color);
    }
    &.success {
      --color: var(--color-success);
    }
    &.warning {
      --color: var(--color-warning);
    }
    &.error {
      --color: var(--color-error);
    }
    &.info {
      --color: var(--color-info);
    }
    &.secondary {
      --color: var(--color-secondary);
    }
  }

  .ant-radio-wrapper {
    & .ant-radio-inner {
      background: transparent;
    }
  }

  .ant-badge {
    & .ant-badge-dot {
      box-shadow: none;
      height: 12px;
      width: 12px;
      border: 2px solid var(--color-badge-border);
    }
  }

  .ant-input-suffix {
    svg {
      color: var(--color-input-icon);
      height: 20px;
      width: 22px;
    }
  }

  .ant-input-affix-wrapper {
    & .ant-input-prefix {
      margin-inline-end: 0;
    }
    > input.ant-input {
      padding: 16px 12px;
    }
  }

  .ant-input {
    padding: 16px 12px;
    &.filled {
      background-color: var(--color-action-hover);
    }
    &.standard {
      border-top: none;
      border-left: none;
      border-right: none;
      border-radius: 0;
      background: transparent;
    }
  }

  .ant-tabs {
    background-color: #312D4B;
    border-radius: 6px;
    &-tab-btn {
      font-weight: 500;
    }
    color: #E7E3FCAD;
    .ant-tabs-content-holder {
      padding: 0 20px 20px 20px;
    }
    &-tab {
      + .ant-tabs-tab {
        margin-left: 0 !important;
      }
    }
    &-tab-btn {
      padding: 0 16px;
    }
    &-nav {
      &::before {
        border: 1px solid #E7E3FC1F;
      }
      &-list {
        text-transform: uppercase;
      }
    }
  }
  .ant-tabs-top {
    > .ant-tabs-nav {
      &::before {
        border: 1px solid #E7E3FC1F;
      }
    }
  }

  .ant-select-dropdown {
    background-color: #312D4B;
  }
  .ant-select-item-option-selected {
    background-color: var(--color-primary-dark) !important;
  }
  .ant-select-single { 
    &.ant-select-open {
      & .ant-select-selection-item {
        color: unset;
      }
    }
  }


  .ant-alert {
    border: none;
    border-radius: 5px;
    &-warning {
      &.ant-alert-with-description {
        & .ant-alert-message {
          color: var(--color-warning);
        }
      }
      color: var(--color-warning);
    }
  }

  .ant-collapse {
    border: none;
    border-radius: 0;
    & .ant-collapse-content {
      background-color: unset;
      border-top: none;
    }
    > .ant-collapse-item {
      border-bottom: 1px solid var(--color-divider);
    }
    &-item {
      border: 1px solid var(--color-divider);
      &:not(:last-child) {
        margin-bottom: 16px;
      }
      &:first-child {
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
      }
      &:last-child  {
        border-bottom-left-radius: 6px !important;
        border-bottom-right-radius: 6px !important;
      }
    }
  }


  /** Utility classes */
  ${classes}
  ${radiusClasses}
  ${fontWeightClasses}
  ${fontSizeClasses}

  .text-primary {
    color: var(--color-primary);
  }

  .block {
    display: block;
  }
`;
