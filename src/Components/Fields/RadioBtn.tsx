import React from 'react';
import { Field } from 'formik';
import { Radio, Box, Container, Grid } from '@mui/material';
import bitmap from '../../Images/Bitmap.png';

const RadioButton = (props: any) => {
  const { label, name, options, ...rest } = props;



  return (

    <React.Fragment>

      {/* <label htmlFor={name}>{label}</label> */}
      < Field name={name} {...rest} >
        {
          ({ field }: any) => {
            return options.map((option: any) => {
              return (

                <Grid key={option.key} item xs={5} md={4}
                  sx={{ background: '#FFF', height: '10rem', padding: '15px', border: '1px solid #999999', borderRadius: '5px' }}

                >

                  <Box display='flex' justifyContent='space-between' mb={4} alignItems='center'>

                    <label htmlFor={option.id} style={{ marginLeft: 5, marginRight: 10 }} >{option.key}</label>

                    <Radio

                      // type='radio'

                      id={option.id}
                      {...field}
                      value={option.value}
                      checked={field.value === option.value}
                    />

                  </Box>


                  <Box display='flex' justifyContent='flex-end'>
                    <img src={bitmap} />
                  </Box>

                </Grid>

              );
            })
          }
        }
      </Field >
    </React.Fragment>
  );
};

export default RadioButton;