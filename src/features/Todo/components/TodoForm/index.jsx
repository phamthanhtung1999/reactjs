import React from 'react';
import PropTypes from 'prop-types';
// import InputField from '../../../../components/formControl/inputField';
import InputField from 'components/formControl/InputField';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

function TodoForm(props) {
  const schema = yup.object().shape({
    title: yup.string().required('please enter title').min(5, 'title is too short'),
  });
  const form = useForm({
    defaultValues: {
      title: '',
    },
    resolver: yupResolver(schema),
  });
  const handleSubmit = (values) => {
    const { onSubmit } = props;
    // console.log('Todo Form: ', values);
    if (onSubmit) {
      onSubmit(values);
    }
    form.reset();
  };
  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      Todo Form
      <InputField name="title" label="Todo" form={form} />
    </form>
  );
}

export default TodoForm;
