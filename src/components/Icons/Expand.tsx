import { ReactComponent as Arrow } from '../../assets/icons/arrow.svg';

interface ExpandProps {
  direction?: 'up' | 'down';
}
const Expand = (props: ExpandProps) => {
  const { direction = 'down' } = props;

  return (
    <span
      className="icon pointer"
      style={direction === 'up' ? { transform: 'rotate(180deg)' } : undefined}
    >
      <Arrow />
    </span>
  );
};

export { Expand };
