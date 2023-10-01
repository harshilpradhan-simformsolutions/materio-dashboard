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

export { Flex };
