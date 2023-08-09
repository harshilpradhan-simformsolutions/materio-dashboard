import { createGlobalStyle } from 'styled-components';
import { misc, palettes, typography } from './config/colors';
import { classes } from './config/utilities';

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
    --color-background: ${misc.background};
    --color-action-hover: ${typography.hover};
    --color-disabled: ${typography.disabled};
    --color-divider: ${misc.divider};
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
  }

  /** AntD Global customization */
  .ant-tag {
    --color: var(--color-primary);
    background-color: var(--color);
    color: var(--color-text);
    border-color: var(--color);
    font-weight: 500;
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

  /** Utility classes */
  ${classes}
`;
