import React, { ButtonHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';

import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ComponentType<IconBaseProps>;
}

const Button: React.FC<ButtonProps> = ({ icon: Icon, children, ...props }) => {
  return (
    <Container {...props}>
      {Icon && (
        <div>
          <Icon />
        </div>
      )}
      <span>{children}</span>
    </Container>
  );
};

export default Button;
