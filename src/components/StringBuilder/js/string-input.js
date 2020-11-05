import React, { useEffect, useState, useRef } from 'react';

import PropTypes from 'prop-types';

const StringInput = ({
  setShowOptions,
  tokenValue,
  handleInputChange,
  disabled,
  placeholder,
  tokens,
  dropdownTriggerKey,
  setStringBuilderHeight,
  stringBuilderHeight,
}) => {
  const [contextMaxLength, setContentMaxLength] = useState(tokenValue.length + 5);
  const inputRef = useRef();

  useEffect(() => {
    if (tokenValue) {
      setStringBuilderHeight(`${(inputRef.current.scrollHeight + 20)}px`);
    }
  }, []);

  const autoGrow = (e) => {
    if (contextMaxLength - 10 < tokenValue.length) {
      const newHeight = `${e.target.scrollHeight + 3}px`;
      setStringBuilderHeight(newHeight);
      setContentMaxLength(contextMaxLength + 10);
    }
  };

  /**
   *
   * @param {*} e : Event
   * Handle backspace event
   * - If the last thing added by user was a token prevent default and
   * remove the entire token instead of single character, else continue with default behaviour
   */
  const handleBackSpace = (e) => {
    const lastToken = tokens[tokens?.length - 2];
    const lastCharsInString = tokenValue.slice(-lastToken?.length);
    if (lastToken === lastCharsInString) {
      e.preventDefault();
      // console.log({ tokenString, lastCharsInString, lastToken });
      // setTokenString(tokenString.slice(0, -`__TOKEN__${lastCharsInString}__TOKEN__`.length));
      // return;
    }
    // setTokenString(tokenString.slice(0, -1));
  };

  // const handleOnFocus = (e) => {
  //   e.selectionEnd = e.selectionStart;
  // };

  const handleKeyDown = (e) => {
    console.log(e.key);
    if (e.key === 'Enter') {
      e.preventDefault();
    }
    if (e.key === 'Backspace') {
      handleBackSpace(e);
    }
    if (e.key === dropdownTriggerKey) {
      e.preventDefault();
      setShowOptions(true);
    }
  };

  return (
    <textarea
      disabled={disabled}
      className="string-builder__input"
      value={tokenValue}
      onChange={handleInputChange}
      // onFocus={handleOnFocus}
      onKeyDown={handleKeyDown}
      onKeyUp={autoGrow}
      placeholder={placeholder}
      onPaste={e => console.log('PASTE >>>>', { e }, e.target)}
      ref={inputRef}
      style={{ height: stringBuilderHeight }}
      spellCheck={false}
      maxLength={contextMaxLength}
    />
  );
};

StringInput.propTypes = {
  setShowOptions: PropTypes.func,
  tokenValue: PropTypes.string,
  handleInputChange: PropTypes.func,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  stringBuilderHeight: PropTypes.string,
  dropdownTriggerKey: PropTypes.string,
  setStringBuilderHeight: PropTypes.func,
  // inputRef: PropTypes.element,
  tokens: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    className: PropTypes.string,
    desc: PropTypes.string,
  })),
};

export { StringInput };
