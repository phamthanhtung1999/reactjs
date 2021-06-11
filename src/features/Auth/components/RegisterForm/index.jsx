import { yupResolver } from '@hookform/resolvers/yup';
import { Avatar, Button, Typography } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';
import InputField from 'components/formControl/InputField';
import PasswordField from 'components/formControl/PassworkField';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: '24px ',
    // marginBottom: theme.spacing(2),
  },

  avatar: {
    margin: '0 auto',
    // backgroundColor: theme.palette.secondary.main,
    backgroundColor: '#dc004e',
  },

  title: {
    textAlign: 'center',
    margin: '16px 0 24px 0',
  },

  submit: {
    margin: '24px 0 16px 0 ',
  },
}));

RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
};

function RegisterForm(props) {
  const classes = useStyles();

  const schema = yup.object().shape({
    fullName: yup
      .string()
      .required('Please! Enter your Fullname.')
      .test('should has at least two words.', 'Please! enter at least two words.', (value) => {
        return value.split(' ').length >= 2;
      }),
    email: yup
      .string()
      .required('Please! Enter your Email.')
      .email('Please! enter a valid email address.'),
    password: yup
      .string()
      .required('Please! enter your Password')
      .min(6, 'Must have at least 6 characters'),
    // .max(15, 'no more than 15 characters')
    // .matches(/((?=.[!@#$%^&()-=+{};:,<.>]){1})/, 'Must have at least 1 special character'),
    retypePassword: yup
      .string()
      .required('Please!retype your Password')
      .oneOf([yup.ref('password')], "Passwords don't match."),
  });
  const form = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      retypePassword: '',
    },
    resolver: yupResolver(schema),
  });
  const handleSubmit = (values) => {
    const { onSubmit } = props;
    if (onSubmit) {
      onSubmit(values);
      // console.log(values);
    }
    form.reset();
  };
  return (
    <div className={classes.root}>
      <Avatar className={classes.avatar}>
        <LockOutlined></LockOutlined>
      </Avatar>
      <Typography component="h3" variant="h5" className={classes.title}>
        Create An Acount
      </Typography>

      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField name="fullName" label="Full Name" form={form} />
        <InputField name="email" label="Email" form={form} />
        <PasswordField name="password" label="Password" form={form} />
        <PasswordField name="retypePassword" label="Retype Password" form={form} />

        <Button
          type="submit"
          className={classes.submit}
          variant="contained"
          color="primary"
          fullWidth
        >
          Create an account
        </Button>
      </form>
    </div>
  );
}

export default RegisterForm;
