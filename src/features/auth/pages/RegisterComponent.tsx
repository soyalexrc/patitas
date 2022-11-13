import React, {useState} from 'react';
import Page from '@/shared/components/Page';
import {useNavigate} from 'react-router-dom';
import {
  Box,
  Typography,
  TextField,
  Autocomplete,
  useMediaQuery,
  FormControl,
  Select,
  Grid,
  MenuItem,
  Button
} from "@mui/material";
import logo from '@/assets/images/logo-patitas.png'
import Transitions from "@/shared/components/Transitions";


interface Pet {
  name?: string,
  id?: number
}

const years = [
  '2022',
  '2021',
  '2020',
  '2019',
  '2018',
  '2017',
  '2016',
  '2015',
  '...'
]


const sampleOptions: Pet[] = [
  {name: 'Perros', id: 1},
  {name: 'Gatos', id: 2},
  {name: 'Conejos', id: 3},
  {name: 'Tortugas', id: 4},
]

export default function RegisterComponent() {
  const [selectedPet, setSelectedPet] = useState({name: '', id: 0} as Pet)
  const largeScreen = useMediaQuery((theme: any) => theme.breakpoints.up('md'))
  const navigate = useNavigate();

  return (
    <Transitions>
      <Page
        title='Registro | Patitas'
        description='Registro de mascotas patitas'
        sx={{
          background: 'linear-gradient(0deg, rgba(255,246,185,1) 0%, rgba(227,198,235,1) 100%)',
          height: '100vh',
        }}
      >
        <>
          <Box display='flex' alignItems='center' flexDirection='column'>
            <Box component='img' src={logo} sx={{width: '100%', maxWidth: '500px'}}/>
            <Box sx={{width: largeScreen ? 600 : '100%'}}>
              <Box my={2} display='flex' alignItems='center' flexDirection='column'>
                <Typography sx={{ mb: 1 }} variant='h6' align='center'>¿Qué Tipo de Mascota tienes?</Typography>
                <input type="text" className='global-input'/>
              </Box>
              <Box my={2} display='flex' alignItems='center' flexDirection='column'>
                <Typography sx={{ mb: 1 }} variant='h6' align='center'>Nombre y Apellido</Typography>
                <input type="text" className='global-input' style={{width: '280px'}}/>
              </Box>
              <Box my={2} display='flex' alignItems='center' flexDirection='column'>
                <Typography sx={{ mb: 1 }} variant='h6' align='center'>Raza</Typography>
                <input type="text" className='global-input' style={{width: '280px'}}/>
              </Box>
              <Box my={2} display='flex' alignItems='center' flexDirection='column'>
                <Typography sx={{ mb: 1 }} variant='h6' align='center'>Sexo</Typography>
                <input type="text" className='global-input'/>
              </Box>
              <Box my={2}>
                <Typography sx={{ mb: 2 }} variant='h6' align='center'>Cumpleaños</Typography>
                <Grid container spacing={2}>
                  <Grid item xs={4} sx={{ textAlign: 'center' }}>
                    <Typography align='center'>Dia</Typography>
                    <select className='global-input' style={{width: '100%', maxWidth: '90px'}}>
                      {
                        Array.from(Array(30).keys()).map((element, index) => (
                          <option key={index + 1} value={element}>{element + 1}</option>
                        ))
                      }
                    </select>
                  </Grid>
                  <Grid item xs={4} sx={{ textAlign: 'center' }}>
                    <Typography align='center' >Mes</Typography>
                    <select className='global-input' style={{width: '100%', maxWidth: '90px'}}>
                      {
                        Array.from(Array(12).keys()).map((element, index) => (
                          <option key={index + 1} value={element}>{element + 1}</option>
                        ))
                      }
                    </select>
                  </Grid>
                  <Grid item xs={4} sx={{ textAlign: 'center' }}>
                    <Typography align='center' >Ano</Typography>
                    <select className='global-input' style={{width: '100%', maxWidth: '90px'}}>
                      {
                        years.map((element, index) => (
                          <option key={element} value={element}>{element}</option>
                        ))
                      }
                    </select>
                  </Grid>
                </Grid>
              </Box>
              <Box my={2} display='flex' alignItems='center' flexDirection='column'>
                <Typography sx={{ mb: 1 }} variant='h6' align='center'>¿Cuantos Tienes?</Typography>
                <input type="text" className='global-input' style={{width: '150px'}}/>
              </Box>
            </Box>
          </Box>
          <Box display='flex' justifyContent='center' p={3} sx={{cursor: 'pointer'}}>
            <Typography variant='h4' color='primary' onClick={() => navigate('/menu')}>Siguiente</Typography>
          </Box>
        </>
      </Page>
    </Transitions>
  )
}
