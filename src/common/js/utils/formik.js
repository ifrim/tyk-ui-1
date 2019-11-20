import React from 'react';

const getValueFromPath = (obj, path) => {
  // turn 'aaa.qqq[2].bbb[5][3].mmm' into ['aaa', 'qqq', '2', 'bbb', '5', '3', 'mmm']
  const indexes = path.split('.').map(x => x.split('[')).flat().map(x => x.replace(/]/g, ''));
  return indexes.reduce((acc, v) => (acc ? acc[v] : acc), obj);
};

/* eslint-disable react/prop-types */
const wrapper = (Component, options) => ({ field, form, ...properties }) => {
  const opts = {
    ...{
      getOnChangeProps: () => ({}),
      getCompProps: () => ({ isfield: true }),
    },
    ...options,
  };

  const onChange = (value) => {
    const onChangeProps = opts.getOnChangeProps(value, field, form, properties);
    field.onChange({ target: { name: field.name, value, ...onChangeProps } });
    if (typeof properties.onChange === 'function') properties.onChange(value);
  };

  const formError = getValueFromPath(form.touched, field.name)
    && getValueFromPath(form.errors, field.name);
  const error = typeof formError === 'string' ? formError : '';
  const compProps = opts.getCompProps(field, form, properties);

  return (
    <Component
      {...field}
      error={error}
      {...properties}
      {...compProps}
      onChange={onChange}
    />
  );
};

export default wrapper;