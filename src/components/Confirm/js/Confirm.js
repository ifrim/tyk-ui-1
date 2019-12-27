import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Button from '../../Button';
import Modal from '../../Modal';

const Confirm = (props) => {
  const {
    children,
    title,
    description,
  } = props;
  const [open, setOpen] = useState(false);
  const [callback, setCallback] = useState(null);

  const show = callbackFunc => (...args) => {
    setOpen(true);
    setCallback(() => () => callbackFunc(...args));
  };

  const hide = () => {
    setOpen(false);
    setCallback(null);
  };

  const confirm = () => {
    callback();
    hide();
  };

  return (
    <>
      {children(show)}
      <Modal
        opened={open}
        onClose={hide}
      >
        <Modal.Header>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {description}
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={confirm}
            theme="success"
          >
            Save
          </Button>
          <Button
            onClick={hide}
            theme="default"
          >
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

Confirm.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.object,
    PropTypes.node,
  ]),
};

export default Confirm;
