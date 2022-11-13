import React from 'react';
import Page from "@/shared/components/Page";
import {Box, Typography} from "@mui/material";

export default function LifeCycleComponent() {
  return (
    <Page title='Ciclo de vida | Patitas' description='Ciclo de vida, patitas'>
     <>
       <Box display='flex' justifyContent='center'>
         <Box>
           <Typography align='center' variant='h1'>Patitas</Typography>
           <Typography align='center' fontSize='64px'>Ciclo de vida</Typography>
         </Box>
       </Box>
       <Box display='flex' flexDirection='column' alignItems='center' mt={5}>
         <Typography align='center' variant='h4' sx={{ mb: 2 }}>Perro</Typography>
         <Box width={300} height={300} sx={{ backgroundColor: 'black', borderRadius: 100 }} />
       </Box>
       <Box display='flex' flexDirection='column' alignItems='center' mt={5}>
         <Typography align='center' variant='h4' sx={{ mb: 2 }}>Conejo</Typography>
         <Box width={300} height={300} sx={{ backgroundColor: 'black', borderRadius: 100 }} />
       </Box>
     </>
    </Page>
  )
}
