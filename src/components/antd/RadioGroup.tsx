import { useId } from 'react';
import { Radio, RadioGroupProps } from 'antd';
import styled from 'styled-components';

const Label = styled.label`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
`;

const RadioGroup = (
  props: RadioGroupProps & {
    label: string;
    labelClass?: string;
  }
) => {
  const { label, labelClass = '', ...rest } = props;
  const id = useId();
  const labelId = `${id}-label`;

  return (
    <div>
      <Label className={`block mb-10 ${labelClass}`.trim()} htmlFor={labelId}>
        {label}
      </Label>
      <Radio.Group {...rest} id={labelId} />
    </div>
  );
};

export { RadioGroup };
