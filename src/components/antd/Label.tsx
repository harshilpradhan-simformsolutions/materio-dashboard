import { PropsWithChildren } from 'react';
import { Flex } from '../../layouts/utils';

interface LabelProps {
  icon: React.ReactNode;
  gap?: number;
  className?: string;
}
const Label = (props: PropsWithChildren<LabelProps>) => {
  const { children, icon, gap = 9, className } = props;

  return (
    <Flex gap={gap} className={className}>
      <span className="icon">{icon}</span>
      {children}
    </Flex>
  );
};

export { Label };
