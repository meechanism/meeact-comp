import styled from 'styled-components';
import * as colors from '../styles/colors';
import { darken } from 'polished';

const buttonSizes = {
  small: {
    'font-size': '14px',
    'line-height': '30px',
    padding: '0 8px',
  },
  medium: {
    'font-size': '16px',
    'line-height': '40px',
    padding: '0 12px',
  },
  large: {
    'font-size': '18px',
    'line-height': '50px',
    padding: '0 16px',
  },
  wide: {
    'font-size': '16px',
    'line-height': '40px',
    padding: '0 36px',
  },
  extraWide: {
    'font-size': '16px',
    'line-height': '40px',
    padding: '0 72px',
  },
  fullWidth: {
    'font-size': '16px',
    'line-height': '40px',
    padding: '0 8px',
  },
};

function setDisplay({ size }) {
  return size === 'fullWidth' ? 'block' : 'inline-block';
}
function setWidth({ size }) {
  return size === 'fullWidth' ? '100%' : 'initial';
}

function getBackground(props) {
  let color = 'transparent';
  if (props.primary) {
    color = '#0048F6';

  } else if (props.bgColor) {
    color = colors[props.bgColor];
  }
  return color;
}

const Button = styled.button`
    background: ${ (props) => getBackground(props) };
    border: none;
    border-radius: 2px;
    color: ${({ fontColor }) => colors[fontColor]};
    cursor: pointer;
    display: ${setDisplay};
    font-size: ${({ size }) => buttonSizes[size]['font-size']};
    line-height: ${({ size }) => buttonSizes[size]['line-height']};
    font-weight: 200;
    margin: 8px 0;
    outline: none;
    padding: ${({ size }) => buttonSizes[size]['padding']};
    text-transform: uppercase;
    transition: all 300ms ease;
    &:hover {
        background: ${({ bgColor }) => darken(0.1, colors[bgColor])};
    }
    width: ${setWidth};
`;

Button.defaultProps = {
  modification: null,  // options: primary
  bgColor: 'blue',
  fontColor: 'white',
  size: 'medium'
};

export default Button;