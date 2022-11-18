import React from 'react';
import {useNavigate} from 'react-router-dom';
import Page from "@/shared/components/Page";
import {Box, IconButton, Typography, Grid} from "@mui/material";
import Transitions from "@/shared/components/Transitions";
import logo from "@/assets/images/logo-patitas.png";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

function DogLifeCycle() {
  const dogAgeData = {
    dogYears: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    smallAge: [15, 24, 28, 31, 36, 40, 44, 48, 52, 56, 60, 64, 68, 72, 76, 80],
    mediumAge: [15, 24, 28, 31, 36, 42, 47, 51, 56, 60, 65, 69, 74, 78, 83, 87],
    largeAge: [15, 24, 28, 32, 36, 45, 50, 55, 61, 66, 72, 77, 82, 88, 93, 120],
  };
  return (
    <Grid container spacing={2} justifyContent='center'>
      <Grid item xs={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography fontSize='12px' align='center' sx={{ color: '#fff', mb: 1 }}>Años de perro</Typography>
        <Box
          sx={{
            border: '5px solid #fff',
            borderRadius: 5,
            p: 2,
            width: '67px'
          }}
        >
          {dogAgeData.dogYears.map((age, index) => (
            <Typography align='center' sx={{ mb: 1, color: '#fff' }}>{age}</Typography>
          ))}
        </Box>
      </Grid>
      <Grid item xs={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography fontSize='12px' align='center' sx={{ color: '#fff', mb: 1 }}>Pequeño</Typography>
        <Box
          sx={{
            backgroundColor: '#fff',
            borderRadius: 5,
            p: 2,
            width: '67px'
          }}
        >
          {dogAgeData.smallAge.map((age, index) => (
            <Typography align='center' color='primary' sx={{ mb: 1 }}>{age}</Typography>
          ))}
        </Box>
      </Grid>
      <Grid item xs={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography fontSize='12px' align='center' sx={{ color: '#fff', mb: 1 }}>Mediano</Typography>
        <Box
          sx={{
            backgroundColor: '#fff',
            borderRadius: 5,
            p: 2,
            width: '67px'
          }}
        >
          {dogAgeData.mediumAge.map((age, index) => (
            <Typography align='center' color='primary' sx={{ mb: 1 }}>{age}</Typography>
          ))}
        </Box>
      </Grid>
      <Grid item xs={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography fontSize='12px' align='center' sx={{ color: '#fff', mb: 1 }}>Grande</Typography>
        <Box
          sx={{
            backgroundColor: '#fff',
            borderRadius: 5,
            p: 2,
            width: '67px'
          }}
        >
          {dogAgeData.largeAge.map((age, index) => (
            <Typography align='center' color='primary' sx={{ mb: 1 }}>{age}</Typography>
          ))}
        </Box>
      </Grid>

    </Grid>
  )
}


function CatLifeCycle() {
  const dogAgeData = {
    dogYears: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    smallAge: [15, '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    mediumAge: [24, 28, 32, 36, 40, 44, 48, 52, 56, 60, '', '', '', '', '', ''],
    largeAge: [64, 68, 72, 76, 80, 84, 88, 92, 96, 100, 104, 108, 112, 116, 120],
  };
  return (
    <Grid container spacing={2} justifyContent='center'>
      <Grid item xs={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography fontSize='12px' align='center' sx={{ color: '#fff', mb: 1 }}>Años de gato</Typography>
        <Box
          sx={{
            border: '5px solid #fff',
            borderRadius: 5,
            p: 2,
            width: '67px',
            height: '-webkit-fill-available'
          }}
        >
          {dogAgeData.dogYears.map((age, index) => (
            <Typography align='center' sx={{ mb: 1, color: '#fff' }}>{age}</Typography>
          ))}
        </Box>
      </Grid>
      <Grid item xs={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography fontSize='12px' align='center' sx={{ color: '#fff', mb: 1 }}>Pequeño</Typography>
        <Box
          sx={{
            backgroundColor: '#fff',
            borderRadius: 5,
            p: 2,
            width: '67px',
            height: '-webkit-fill-available'
          }}
        >
          {dogAgeData.smallAge.map((age, index) => (
            <Typography align='center' color='primary' sx={{ mb: 1 }}>{age}</Typography>
          ))}
        </Box>
      </Grid>
      <Grid item xs={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography fontSize='12px' align='center' sx={{ color: '#fff', mb: 1 }}>Mediano</Typography>
        <Box
          sx={{
            backgroundColor: '#fff',
            borderRadius: 5,
            p: 2,
            width: '67px',
            height: '-webkit-fill-available'
          }}
        >
          {dogAgeData.mediumAge.map((age, index) => (
            <Typography align='center' color='primary' sx={{ mb: 1 }}>{age}</Typography>
          ))}
        </Box>
      </Grid>
      <Grid item xs={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography fontSize='12px' align='center' sx={{ color: '#fff', mb: 1 }}>Grande</Typography>
        <Box
          sx={{
            backgroundColor: '#fff',
            borderRadius: 5,
            p: 2,
            width: '67px',
            height: '-webkit-fill-available'
          }}
        >
          {dogAgeData.largeAge.map((age, index) => (
            <Typography align='center' color='primary' sx={{ mb: 1 }}>{age}</Typography>
          ))}
        </Box>
      </Grid>

    </Grid>
  )
}

export default function LifeCycleComponent() {
  const userData = JSON.parse(localStorage.getItem('patitas-token'));
  const navigate = useNavigate();

  console.log(userData);
  return (
    <Transitions>
      <Page
        title='Ciclo de vida | Patitas'
        description='Ciclo de vida, patitas'
        sx={{
          background: 'linear-gradient(0deg, rgba(253,187,45,1) 0%, rgba(255,236,197,1) 100%)',
          height: '100vh',
          padding: '.5rem 0'
        }}
      >

        <>
          <Box px={2}>
            <IconButton onClick={() => navigate(-1)}>
              <ArrowBackIosIcon fontSize='large' sx={{color: '#fff'}}/>
            </IconButton>
          </Box>
          <Box display='flex' flexDirection='column' alignItems='center'>
            <Box component='img' src={logo} sx={{width: '100%', maxWidth: '300px'}}/>
            <Typography align='center' fontSize='54px' sx={{color: '#fff', marginTop: '-2rem'}}>Ciclo de
              vida</Typography>
            <Box
              sx={{ border: '2px solid #000000', padding: '.3rem 2rem', borderRadius: 5, mb: 2 }}
            >
              <Typography align='center' variant='h1' sx={{color: '#fff' }}>
                {userData.petType.includes('erro') ? 'Perro' : 'Gato'}
              </Typography>
            </Box>
          </Box>
          {
            userData.petType.includes('erro') ? <DogLifeCycle/> : <CatLifeCycle/>

          }

        </>
      </Page>
    </Transitions>
  )
}
