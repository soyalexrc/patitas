import {motion} from "framer-motion";
import {Link as RouterLink} from "react-router-dom";
// material
import {styled} from "@mui/material/styles";
import {Box, Button, Typography, Container} from "@mui/material";
// mantenedorAdmin
import Page from "@/shared/components/Page";
import Logo from '@/assets/images/logo-patitas.png';

// ----------------------------------------------------------------------


const RootStyle = styled(Page)(({theme}) => ({
  display: 'grid',
  placeItems: 'center',
  height: '100vh',
  minHeight: "100%",
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(10),
}));

// ----------------------------------------------------------------------

export default function SplashScreen() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1
      }}
      transition={{duration: 1}}
      exit={{
        opacity: 0
      }}
    >
      <Page
        title="Patitas"
        description='cargando...'
        sx={{
          display: 'grid',
          placeItems: 'center',
          height: '100vh',
          background: 'linear-gradient(0deg, rgba(255,246,185,1) 0%, rgba(227,198,235,1) 100%)',
        }}
      >
        <Box component='img' sx={{maxWidth: '500px', width: '100%'}} src={Logo}/>
      </Page>
    </motion.div>

  );
}
