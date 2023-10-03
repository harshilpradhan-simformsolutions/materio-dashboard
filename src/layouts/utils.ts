import styled, { css } from 'styled-components';

// AntD Space component adds wrapper divs around children
// This component implements same functionality without the extra divs
// and more flexibility
const Flex = styled.div<{
  gap?: number;
  direction?: 'row' | 'column';
  align?: string;
  justify?: string;
}>`
  display: flex;
  align-items: center;
  flex-direction: ${({ direction }) => direction ?? 'row'};
  ${({ align }) =>
    align &&
    css`
      align-items: ${align};
    `}
  ${({ justify }) =>
    justify &&
    css`
      justify-content: ${justify};
    `}
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
  & .start {
    align-self: start;
  }
`;

export { Flex, Grid };
