import React from 'react';
import { Field } from 'formik';
import { Radio, Box, Container, Grid } from '@mui/material';

const RadioButton2 = (props: any) => {
  const { label, name, options, ...rest } = props;


  return (

    <React.Fragment>

      {/* <label htmlFor={name}>{label}</label> */}
      < Field name={name} {...rest} >
        {
          ({ field }: any) => {
            return options.map((option: any) => {
              return (

                <Box key={option.key} mb={3} display='flex' justifyContent='space-between' alignItems='center'
                  sx={{
                    background: '#FFF', borderRadius: '5px',
                    ...(field.value == option.value && {
                      border: '2px solid rgb(255 103 57)',
                      background: 'rgb(233 213 207)'
                    }),

                  }}
                >


                  <label htmlFor={option.id} style={{ marginLeft: 5, marginRight: 10 }} >{option.key}</label>

                  <Radio

                    // type='radio'

                    id={option.id}
                    {...field}
                    value={option.value}
                    checked={field.value === option.value}
                  />

                </Box>

              );
            })
          }
        }
      </Field >
    </React.Fragment>
  );
};

export default RadioButton2;