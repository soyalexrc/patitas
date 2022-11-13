import React from 'react';
import Page from "@/shared/components/Page";
import {Box, Typography} from "@mui/material";

export default function HealthComponent() {
  return (
    <Page title='Salud | Patitas' description='Salud, patitas'>
     <>
       <Box display='flex' justifyContent='center'>
         <Box>
           <Typography align='center' variant='h1'>Patitas</Typography>
           <Typography align='center' fontSize='64px'>Salud</Typography>
         </Box>
       </Box>
       <Box display='flex' flexDirection='column' alignItems='center' mt={5}>
         <Typography align='center' variant='h4' sx={{ mb: 2 }}>Veterinario mas cercano</Typography>
         <Box width={300} height={200} sx={{ backgroundColor: 'black', borderRadius: 10 }} />
       </Box>
       <Box display='flex' flexDirection='column' alignItems='center' mt={5}>
         <Typography align='center' variant='h4' sx={{ mb: 2 }}>Tipos de enfermedades</Typography>
         <Box width={300} height={200} sx={{ backgroundColor: 'black', borderRadius: 10 }} />
       </Box>
     </>
    </Page>
  )
}
