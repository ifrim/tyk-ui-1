import React from 'react';

import PropTypes from 'prop-types';


const StringInput = ({
  setShowOptions,
  tokenValue,
  handleInputChange,
  inputRef,
  handleKeyDown,
  disabled,
}) => (
  <input
    disabled={disabled}
    className="string-builder__input"
    value={tokenValue}
    onChange={handleInputChange}
    onFocus={() => setShowOptions(true)}
    onBlur={() => setShowOptions(false)}
    onKeyDown={handleKeyDown}
    ref={inputRef}
  />
);

StringInput.propTypes = {
  setShowOptions: PropTypes.func,
  tokenValue: PropTypes.string,
  handleInputChange: PropTypes.func,
  handleKeyDown: PropTypes.func,
  inputRef: PropTypes.instanceOf(Object),
  disabled: PropTypes.bool,
};

export { StringInput };