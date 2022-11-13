import React from 'react';
import {useNavigate} from 'react-router-dom';
import Page from "@/shared/components/Page";
import {Box, IconButton, Typography, Paper, Grid} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import logo from '@/assets/images/logo-patitas.png';
import Transitions from "@/shared/components/Transitions";

interface SampleData  {
  title: string;
  day: string;
  hour: string;
  minutes: string;
  zoneTime: string;
  onceADay: boolean;
  twiceADay: boolean;
  everyDay: boolean;
}

const sampleData: SampleData[] = [
  {
    title: 'Recordarme bajar a mi mascota',
    day: 'Lunes',
    hour: '00',
    minutes: '00',
    zoneTime: 'AM',
    onceADay: false,
    twiceADay: false,
    everyDay: false
  },
  {
    title: 'Recordarme alimentar a mi mascota',
    day: 'Lunes',
    hour: '00',
    minutes: '00',
    zoneTime: 'AM',
    onceADay: false,
    twiceADay: false,
    everyDay: false
  },
  {
    title: 'Recordarme darle atencion a mi mascota',
    day: 'Lunes',
    hour: '00',
    minutes: '00',
    zoneTime: 'AM',
    onceADay: false,
    twiceADay: false,
    everyDay: false
  },

]

export default function AlarmsComponent() {
  const navigate = useNavigate();
  return (
    <Transitions>
      <Page
        title='Alarmas | Patitas'
        description='Alarmas de patitas'
        sx={{
          height: '100vh',
          background: 'linear-gradient(0deg, rgba(255,246,185,1) 0%, rgba(227,198,235,1) 100%)',
          padding: '0px .5rem',
        }}
      >
        <>
          <Box p={2}>
            <IconButton onClick={() => navigate(-1)}>
              <ArrowBackIosIcon fontSize='large' sx={{ color: '#fff' }}/>
            </IconButton>
          </Box>
          <Box display='flex' justifyContent='center' mb={5}>
            <box>
              <Box component='img' src={logo} sx={{ width: '100%', maxWidth: '500px' }} />
              <Typography align='center' style={{ color: '#FFF', marginTop: '-3rem' }} fontSize='54px'>Alarmas</Typography>
            </box>
          </Box>
          <Box display='flex' flexDirection='column' alignItems='center'>
            {
              sampleData.map((alarm: SampleData, index: number) => (
                <Box key={index * 159} mb={2} sx={{ maxWidth: '600px', width: '100%' }}>
                  <Box display='flex' justifyContent='center' >
                    <Box
                      sx={{
                        backgroundColor: 'primary.main',
                        color: '#fff',
                        width: '280px',
                        textAlign: 'center',
                        padding: '.5rem',
                        borderTopLeftRadius: 15,
                        borderTopRightRadius: 15,
                      }}
                    >
                      <p>{alarm.title}</p>
                    </Box>
                  </Box>
                  <Paper
                    elevation={2}
                    sx={{
                      borderRadius: 2,
                      padding: '1rem',
                    }}
                  >
                    <Grid container>
                      <Grid item xs={3} sx={{ padding: '.1  rem' }} alignSelf='flex-end'>
                        <Typography variant='h4' align='right' color='primary.main'>{alarm.day.toUpperCase().substring(0, 3)}</Typography>
                        <Typography fontSize='9px' align='right' color='primary.main'>UNA VEZ AL DIA</Typography>
                      </Grid>
                      <Grid item xs={6} sx={{ padding: '.1  rem' }} alignSelf='flex-end'>
                        <Typography fontSize='34px' fontWeight='bold' color='primary.main' align='center'>{alarm.hour}:{alarm.minutes}</Typography>
                        <Typography fontSize='9px' color='primary.main'  align='center'>DOS VECES AL DIA</Typography>
                      </Grid>
                      <Grid item xs={3} sx={{ padding: '.1  rem' }} alignSelf='flex-end'>
                        <Typography variant='h4' align='left' color='primary.main'>{alarm.zoneTime}</Typography>
                        <Typography fontSize='9px' align='left' color='primary.main'>TOODS LOS DIAS</Typography>
                      </Grid>
                    </Grid>
                  </Paper>
                </Box>
              ))
            }
          </Box>

        </>
      </Page>
    </Transitions>
  )
}
