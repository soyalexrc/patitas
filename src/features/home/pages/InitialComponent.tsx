import React from 'react';
import Page from '@/shared/components/Page';
import {Box, Paper, Typography, Button} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import Transitions from "@/shared/components/Transitions";
import logo from '@/assets/images/logo-patitas.png'

export default function InitialComponent() {
  const navigate = useNavigate();
  return (
    <Transitions>
      <Page
        title='Home | Patitas'
        description='Patitas web'
        sx={{
          background: 'linear-gradient(0deg, rgba(56,223,170,1) 0%, rgba(233,255,249,1) 55%, rgba(255,255,255,1) 100%)',
          height: '100vh',
          display: 'grid',
          gridTemplateRows: 'repeat(12, 1fr)'
        }}
      >
        <>
          <Box sx={{display: 'flex', alignItems: 'center', flexDirection: 'column', gridRowStart: '6'}}>
            <Box component='img' src={logo} alt="" sx={{width: '100%', maxWidth: '500px'}}/>
            <Button sx={{width: 200, color: 'primary.main'}} variant='contained' onClick={() => navigate('/registro')}>Registrarse</Button>
          </Box>
          <Box sx={{display: 'flex', alignItems: 'center', flexDirection: 'column', gridRowStart: '12'}}>
            <Typography variant='h4' style={{ cursor: 'pointer', color: 'rgba(255,255,255,1)' }} onClick={() => navigate('/menu')}>
              Iniciar sesion
            </Typography>
          </Box>
        </>
      </Page>
    </Transitions>
  )
}
