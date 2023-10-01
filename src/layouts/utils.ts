import styled, { css } from 'styled-components';

// AntD Space component adds wrapper divs around children
// This component implements same functionality without the extra divs
// and more flexibility
const Flex = styled.div<{ gap?: number }>`
  display: flex;
  align-items: center;
  ${({ gap }) =>
    gap &&
    css`
      gap: ${gap}px;
    `}
`;

const Grid = styled.div<{ columns: number | string; gap?: number }>`
  display: grid;
  grid-template-columns: ${({ columns }) =>
    typeof columns === 'number' ? `repeat(${columns}, 1fr)` : columns};
  ${({ gap }) =>
    gap &&
    css`
      gap: ${gap}px;
    `}
  & .full-width {
    grid-column: 1 / -1;
  }
`;

export { Flex, Grid };
