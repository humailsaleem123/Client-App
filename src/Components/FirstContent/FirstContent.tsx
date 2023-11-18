import { Box, Button, Container, Grid, Typography } from '@mui/material';
import football from '../../Images/pexels-wallace-chuck-2834917.png';
import Peoples from '../../Images/image-155.png';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import React from 'react'
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme: any) => ({

  bottomTxt: {
    position: 'absolute',
    bottom: 0,
    height: '5rem',
    color: '#FFF',
    width: '100%',
    alignItems: 'center',
    backgroundImage: 'linear-gradient(to right, #F16B40, #F33E56)',
    [theme.breakpoints.down("md")]: {
      height: '4rem',
    },
    [theme.breakpoints.down("sm")]: {
      height: '3rem',
    }
  },

  bottomBtn: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
    paddingBottom: '20px!important',
    display: 'flex',
    justifyContent: 'center',

  },

}
))

function FirstContent() {


  const classes = useStyles();

  return (
    // background-image: radial-gradient(farthest-corner at 50px 90px, #f35 0 %, #43e 30 % );
    // style={{ backgroundImage: 'radial-gradient(farthest-corner at 40px -50px, #f35 0% , #091423 25%)' }}

    <Container className='first-content-bg' maxWidth={false} style={{ padding: '60px' }}>



      < Grid container
        alignItems='center'
        justifyContent='center'
        rowGap={4}
        columnGap={4}
        columns={{ xs: 3, md: 10, lg: 9 }
        }
        sx={{ flexDirection: { xs: 'row', md: 'row' } }}
      >

        <Grid item xs={5.5}>



          <div className="bg-img1" style={{ backgroundImage: `url(${football})` }}>


            <Box padding={7}>
              <Typography variant='h1' fontWeight={1000}>Set Your Goal, <br />Unlock Your Potential</Typography>
            </Box>



            <Box className={classes.bottomTxt} >


              <Link to='/challenge'>
                <Button
                  className={classes.bottomTxt}

                  fullWidth
                  sx={{ color: '#FFF', textDecoration: 'none' }}
                >Lets Fuckin Do it</Button>
                {/* <Typography variant='h3' textTransform='uppercase'>Lets Fuckin Do it</Typography> */}

              </Link>

            </Box>




          </div>

        </Grid>

        <Grid item xs={3} md={3.3}>

          <div className="bg-img2" style={{ backgroundImage: `url(${Peoples})` }}>


            <Box className={classes.bottomBtn}>

              <Link to='/challengeFriend'>

                <Button color='primary' endIcon={<ArrowDownwardIcon />} variant='outlined'
                  size='large'
                  sx={{
                    border: '2px solid rgb(255 103 57)',
                    textTransform: 'capitalize',
                    '&:hover': {
                      backgroundImage: 'linear-gradient(to right, #F16B40, #F33E56)',
                      color: '#FFF'
                    },

                  }}
                >
                  Challenge a friend

                </Button>

              </Link>
            </Box>






          </div>


        </Grid>

      </Grid >





    </Container >

  )


}

export default FirstContent;