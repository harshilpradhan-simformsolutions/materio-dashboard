import { PropsWithChildren } from 'react';
import { Flex } from '../../layouts/utils';

interface LabelProps {
  icon: React.ReactNode;
  gap?: number;
}
const Label = (props: PropsWithChildren<LabelProps>) => {
  const { children, icon, gap = 9 } = props;

  return (
    <Flex gap={gap}>
      <span className="icon">{icon}</span>
      {children}
    </Flex>
  );
};

export { Label };
