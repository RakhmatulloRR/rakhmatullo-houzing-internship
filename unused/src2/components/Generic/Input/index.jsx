import React from 'react';
import { Container, Icon, Wrapper } from './style';

export const Input = ({
  children,
  onClick,
  height,
  width,
  type,
  mr,
  ml,
  mb,
  mt,
  pl,
  onChange,
  placeholder,
  defaultValue,
}) => {
  return (
    <Wrapper mr={mr} ml={ml} mb={mb} mt={mt}>
      <Icon>{children}</Icon>
      <Container
        defaultValue={defaultValue}
        onChange={onChange}
        placeholder={placeholder}
        pl={pl}
        type={type}
        width={width}
        height={height}
        onClick={onClick}
      />
    </Wrapper>
  );
};

export default Input;
