import { Button } from 'antd';
import { PropsWithChildren } from 'react';
import styled from 'styled-components';

const SectionBase = styled.section`
  margin: 1rem;
  padding: 1rem;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 0.5rem 0;
`;

const Display = ({ title, children }: PropsWithChildren<{ title: string }>) => {
  return (
    <SectionBase>
      <h2>{title}</h2>
      <Flex>{children}</Flex>
    </SectionBase>
  );
};

function App() {
  return (
    <>
      <Display title="Button">
        <Button type="primary" size="small">
          Click
        </Button>
        <Button type="primary">Click</Button>
        <Button type="primary" size="large">
          Click
        </Button>
        <Button size="large" shape="round">
          Click
        </Button>
      </Display>
    </>
  );
}

export default App;
