import React from 'react';
import { Button } from '@mui/material';
import { useFormikContext } from 'formik';

const SubmitButtonWrapper = ({
  children,
  ...otherProps
}: any) => {
  const { submitForm } = useFormikContext();

  const handleSubmit = () => {
    submitForm();
  }

  const configButton = {
    variant: 'contained',
    color: 'primary',
    // fullWidth: true,
    onClick: handleSubmit
  }

  return (
    <Button
      {...configButton as any}
      {...otherProps as any}
    >
      {children}
    </Button>
  );
};

export default SubmitButtonWrapper;