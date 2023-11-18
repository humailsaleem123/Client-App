import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import React from 'react'



const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: '13px 0px 0px 0px ',
  padding: 13,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: '#F3504E',
  },
}));



function ProgessBar(props: any) {


  return (


    <BorderLinearProgress variant="determinate" value={props.value} />

  )



}

export default ProgessBar;
