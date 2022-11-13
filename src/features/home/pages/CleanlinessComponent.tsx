import React from 'react';
import Page from "@/shared/components/Page";
import {Box, Typography} from "@mui/material";

export default function CleanlinessComponent() {
  return (
    <Page title='Aseo | Patitas' description='Aseo, patitas'>
     <>
       <Box display='flex' justifyContent='center'>
         <Box>
           <Typography align='center' variant='h1'>Patitas</Typography>
           <Typography align='center' fontSize='64px'>Aseo</Typography>
         </Box>
       </Box>
       <Box display='flex' flexDirection='column' alignItems='center' mt={5}>
         <Typography align='center' variant='h4' sx={{ mb: 2 }}>Sitios para bañar a tu <br/> mascota</Typography>
         <Box width={300} height={200} sx={{ backgroundColor: 'black', borderRadius: 10 }} />
       </Box>
       <Box display='flex' flexDirection='column' alignItems='center' mt={5}>
         <Typography align='center' variant='h4' sx={{ mb: 2 }}>Como Bañarla</Typography>
         <Box width={300} height={200} sx={{ backgroundColor: 'black', borderRadius: 10 }} />
       </Box>
     </>
    </Page>
  )
}
