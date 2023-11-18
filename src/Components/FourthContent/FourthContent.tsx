import { Box, Button, Container, Grid, Typography } from '@mui/material';
import graph from '../../Images/Group-1000003704.png'
import "./Fourth.css";
import React from 'react'
import { Link } from 'react-router-dom';

function FourthContent() {


  return (


    <Container maxWidth={false} className='graph-content-bg'>

      <Box display='flex' justifyContent='center'>

        <Typography className='top-text' color='#FFF' variant='h1' textTransform='uppercase'>

          Stop that bullshit. Challenge a <span style={{ color: '#F3554C' }}>friend</span> today

        </Typography>

      </Box>

      <Grid container
        spacing={10}
        justifyContent='center'
        alignItems='center'
        textAlign='center'
        columns={{ xs: 2, md: 5 }}
        sx={{ flexDirection: { xs: 'column', md: 'row' } }}

      >



        <Grid item xs={4}>

          <div className='bg-graph' style={{ backgroundImage: `url(${graph})` }}>


            <Box display='flex' justifyContent='center'>

              <Link to='/challengeFriend'>
                <Button
                  className='bottom-btn2'
                  variant='contained'
                  sx={{
                    backgroundImage: 'linear-gradient(to right, #F16B40, #F33E56)',
                    padding: 1.5,
                    textTransform: 'none',
                    '&:hover': {
                      // border: '2px solid #F16B40',
                      color: '#FFF',
                      background: 'transparent'
                    }
                  }}
                >

                  Start a Challenge
                </Button>

              </Link>
            </Box>


          </div>


        </Grid>

      </Grid>








    </Container >



  )


}

export default FourthContent;