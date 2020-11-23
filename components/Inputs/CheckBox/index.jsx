import React from 'react';
import Fade from 'react-reveal/Fade';
import { AiOutlineCheck } from 'react-icons/ai';
import PropTypes from 'prop-types';

const CheckBox = ({
  checked, onChange, size, square,
}) => (
  <button
    type="button"
    onClick={onChange}
    style={{
      height: size,
      width: size,
    }}
    className={`border border-blue-6 animation-fast flex-full text-blue-1 ${
      square ? 'rounded-sm' : 'rounded-full'
    } ${checked ? 'bg-blue-3' : 'bg-white'}`}
  >
    <Fade duration={200} when={checked}>
      <AiOutlineCheck />
    </Fade>
  </button>
);
CheckBox.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  size: PropTypes.number,
  square: PropTypes.bool,
};
CheckBox.defaultProps = {
  size: 30,
  square: false,
};
export default CheckBox;
