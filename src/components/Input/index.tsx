import React, { InputHTMLAttributes } from 'react';

import { IconBaseProps } from 'react-icons';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ icon: Icon, ...props }) => {
  return (
    <Container data-test="component-input">
      {Icon && <Icon />}
      <input {...props} />
    </Container>
  );
};

export default Input;
