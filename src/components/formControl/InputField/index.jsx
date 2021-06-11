import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';
import { Controller } from 'react-hook-form';

function InputField(props) {
  const { form, name, label, disabled } = props;

  const {
    formState: { errors },
  } = form;

  const hasError = errors[name];

  // console.log(errors[name], touchedFields[name]);

  return (
    <Controller
      name={name}
      control={form.control}
      render={({ field }) => (
        <TextField
          {...field}
          label={label}
          error={!!hasError}
          helperText={errors[name]?.message}
          disabled={disabled}
          fullWidth
          variant="outlined"
          margin="dense"
        />
      )}
    ></Controller>
  );
}

export default InputField;
