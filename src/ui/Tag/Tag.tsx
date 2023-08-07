import { TagProps as AntTagProps } from 'antd';
import { TagBase } from './Tag.styles';
import { palettes } from '../../config/colors';

interface TagProps extends Omit<AntTagProps, 'color'> {
  color?: keyof typeof palettes | (string & object);
}
const Tag = (props: TagProps) => {
  const { color = 'primary', ...rest } = props;
  const key = color in palettes ? palettes[color].main : color;

  return <TagBase color={key} {...rest} />;
};

export { Tag };
