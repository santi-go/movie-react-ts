import React from 'react';

import { Wrapper } from './Button.style'

const Button = ({ text, callback }) => (
  <Wrapper type='button' onClick={callback}>
    {text}
  </Wrapper>
);

export default Button;