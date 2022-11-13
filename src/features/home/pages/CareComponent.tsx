import React from 'react';
import Page from "@/shared/components/Page";
import {Box, Typography} from "@mui/material";

export default function CareComponent() {
  return (
    <Page title='Cuidado | Patitas' description='Cuidado, patitas'>
     <>
       <Box display='flex' justifyContent='center'>
         <Box>
           <Typography align='center' variant='h1'>Patitas</Typography>
           <Typography align='center' fontSize='64px'>Cuidado</Typography>
         </Box>
       </Box>
       <Box display='flex' flexDirection='column' alignItems='center' mt={5}>
         <Typography align='center' variant='h4' sx={{ mb: 2 }}>Contrata para que <br/>quiden a tu mascota</Typography>
         <Box width={300} height={200} sx={{ backgroundColor: 'black', borderRadius: 10 }} />
       </Box>
     </>

    </Page>
  )
}
