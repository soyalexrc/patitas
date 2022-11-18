import React from 'react';
import Page from '@/shared/components/Page';
import {Box, useMediaQuery, Typography, Button} from '@mui/material';
import {styled} from "@mui/material/styles";
import {useNavigate} from 'react-router-dom'
import logo from '@/assets/images/logo-patitas.png';
import Transitions from "@/shared/components/Transitions";

const Item = styled(Box)(({theme}) => ({
  borderRadius: 15,
  border: '2px solid black',
  width: 200,
  textAlign: 'center',
  margin: '.5rem 0',
  padding: '.5rem',
  "&:hover" : {
    cursor: 'pointer',
    backgroundColor: 'black',
    transition: 'background-color .1s ease, color .1s ease',
    fontWeight: 'bold',
    color: 'white'
  }
}));

const sampleItems = [
  {
    title: 'Alarmas',
    path: 'alarmas'
  },
  {
    title: 'Ciclo de vida',
    path: 'ciclo-de-vida'
  },
  {
    title: 'Alimentacion',
    path: 'alimentacion'
  },
  {
    title: 'Aseo',
    path: 'aseo'
  },
  {
    title: 'Juegos',
    path: 'juegos'
  },
  {
    title: 'Salud',
    path: 'salud'
  },
  {
    title: 'Cuidado',
    path: 'cuidado'
  },
]


export default function HomeComponent() {
  const largeScreen = useMediaQuery((theme: any) => theme.breakpoints.up('md'))
  const navigate = useNavigate();


  return (
    <Transitions>
      <Page
        title='Menu | Patitas'
        description='Menu de opciones patitas'
        sx={{
          background: 'linear-gradient(0deg, rgba(56,223,170,1) 2%, rgba(233,255,249,1) 86%, rgba(255,255,255,1) 100%)',
          height: '100vh',
        }}
      >
        <Box sx={{display: 'grid', placeItems: 'center', height: '90vh'}}>
          <Box sx={{width: largeScreen ? 600 : '100%'}}>
            <Typography align='center' color='primary' fontSize='56px'>Bienvenido a </Typography>
            <Box component='img' src={logo} sx={{ width: '100%' }}></Box>
            <Box display='flex' flexDirection='column' alignItems='center'>
              {
                sampleItems.map((item, index) => (
                  <Button
                    variant='contained'
                    sx={{
                      textTransform: 'uppercase',
                      fontWeight: 'bold',
                      width: '200px',
                      margin: '.7rem 0',
                      backgroundColor: index % 2 === 0 ? 'primary.main' : '#FFF',
                      color: index % 2 === 0 ? '#FFF' : 'primary.main',
                      "&:hover": {
                        color: 'primary.main'
                      }
                  }}
                    onClick={() => navigate(item.path)}
                  >
                    {item.title}
                  </Button>
                ))
              }
            </Box>
          </Box>
        </Box>
      </Page>
    </Transitions>
  )
}
