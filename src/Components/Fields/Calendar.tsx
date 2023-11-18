import React from "react";
import { Slider, Typography } from "@mui/material";
import { useField } from "formik";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { makeStyles } from '@mui/styles'


const CalendarWrapper = ({ name, ...otherProps }: any) => {

  const [field, mata, helpers] = useField(name);



  const useStyles = makeStyles((theme: any) => ({
    dateCalendar: {

      // Add your custom styles here to change the size
      // For example:
      width: '700px !important',
      height: '600px',
      [theme.breakpoints.down("sm")]: {
        width: '350px !important',
        height: 'auto'
      },
      [theme.breakpoints.down("md")]: {
        width: '500px',
        height: 'auto'
      }
    },
  }
  ));


  const configCalendar = {
    ...field,
    ...otherProps,
    value: field.value,
    onChange: (date: any) => {
      helpers.setValue(date);
      // if (onchange) {
      //   onChange(date);
      // }
    },
  };

  const classes = useStyles();

  return (


    <React.Fragment >


      <LocalizationProvider dateAdapter={AdapterDayjs} >

        <DateCalendar
          {...configCalendar}
          value={field.value ? dayjs(field.value).startOf('day') : null}
          views={['year', 'month', 'day']}
          inputProps={{
            id: name,
          }}
          classes={{ root: classes.dateCalendar }}
        />

      </LocalizationProvider>

      {mata.touched && mata.error && field.value !== 0 && <Typography variant="body2" color={'red'}>{mata.error}</Typography>}


    </React.Fragment >
  );
};

export default CalendarWrapper;