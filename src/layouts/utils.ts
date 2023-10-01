import styled, { css } from 'styled-components';

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
