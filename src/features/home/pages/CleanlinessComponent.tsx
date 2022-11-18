import React from 'react';
import {useNavigate} from 'react-router-dom';
import Page from "@/shared/components/Page";
import {Box, IconButton, Typography, Grid, Button} from "@mui/material";
import Transitions from "@/shared/components/Transitions";
import logo from "@/assets/images/logo-patitas.png";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

function DogCleanLiness() {
  const catCleanliness = {
    advices: [
      {
        text: `Si tienes a ti gato desde pequeño, entonces velo acostumbrando al agua, que no sea algo extraño para él,
      prepara un recipiente y déjale que se acerque, que se familiarice`
      },
      {
        text: `Hay una idea generalizada de que los felinos odian el agua, la realidad es que esto depende. Hay gatos que si y
      gatos que no, lo cierto, es que nosotros como dueños solo podemos hacer que el baño sea lo más cómodo y rápido posible
      para evitarle exceso de tensiones`
      },
      {
        text: `Si lo vas a bañar en una bañera usa una alfombra antideslizante, de este modo el animal no se resbalará. Si no
      entonces usa un envase de plástico grande que sea espacioso y te permita realizar esta tarea`
      },
      {
        text: `Antes de bañarlo, cepilla su pelo para eliminar nudos y para darle un cariño al gato calmándolo. Es muy importante
      que tu estes tranquilo, pues si ambos están nerviosos podría ocurrir un accidente`
      },
      {
        text : `Ten a mano todo lo que necesitas, debes usar champú especial para gato (nunca uses productos para perros o humanos)
      y una esponja para frotarlo. Prepara el agua a una temperatura tibia que le resulte agradable al animal`
      },
      {
        text: `Pon algodón dentro de sus orejas, de este modo impedirás que el agua pase a sus oídos, lo que podría \
      causarle inflamaciones y complicaciones posteriores`
      },
      {
        text: `Nunca lances al gato a la bañera o envase, debes ir poco a poco, tómalo por la nuca con una mano y por su 
      cuerpo con la otra e introdúcelo lentamente en el agua. Deja que el animal se vaya habituando y mantente firme, 
      no hay necesidad de ponerse nervioso`
      },
      {
        text: `Moda al gato siempre comenzando por su cuerpo. La cabeza será lo último que deberás humedecer y lavar. 
      Aplica el champú y frota suavemente, como masajeando, pero de modo que permitas también que la suciedad salga
      de su pelo`
      },
      {
        text: `Deja actuar el champú el tiempo que indique en el envase, siempre acariciando a tu gato y haciéndolo sentir
      seguro. Aprovecha este momento para mojar poco a poco su cabeza, luego retira el champú vertiendo agua desde el 
      lomo hacia atras, asegurate de que quede libre de residuos que mas adelante podrian causarle alergias y molestias.`
      },
      {
        text: `Pon algodón dentro de sus orejas, de este modo impedirás que el agua pase a sus oídos, lo que podría 
      causarle inflamaciones y complicaciones posteriores`
      }
    ],
    extraAdvices: [
      {
        text: `Bañar a un gato es mucho más simple que hacerlo con un perro, pues su tamaño hace que sea más rápido
        y simple, por eso mantén la calma`
      },
      {
        text: `Si lo has intentado y el animal se pone muy nervioso o agresivo, entonces lo mejor es que dejes que 
        este trabajo quede en manos de los profesionales`
      }
    ]
  }
  return (
    <Box
      sx={{
        backgroundColor: '#fff',
        p: 4
      }}
    >
      {
        catCleanliness.advices.map((advice, index) => (
          <Box mb={3}>
            <Typography>
              <Box component='span' sx={{ color: 'primary.main', fontSize: '34px', mr: 2 }}>{index + 1}.</Box>
              {advice.text}
            </Typography>
          </Box>
        ))
      }

      <Typography color='primary' variant='h1' fontSize='30px' fontWeight='bold' sx={{ m: 2 }}>Consejo</Typography>
      {
        catCleanliness.extraAdvices.map((advice, index) => (
          <Box mb={3}>
            <Typography>
              <Box component='span' sx={{ fontSize: '14px', mr: 2 }}>-</Box>
              {advice.text}
            </Typography>
          </Box>
        ))
      }
    </Box>
  )
}


function CatCleanLiness() {
  const catCleanliness = {
    advices: [
      {
        text: `Si tienes a ti gato desde pequeño, entonces velo acostumbrando al agua, que no sea algo extraño para él,
      prepara un recipiente y déjale que se acerque, que se familiarice`
      },
      {
        text: `Hay una idea generalizada de que los felinos odian el agua, la realidad es que esto depende. Hay gatos que si y
      gatos que no, lo cierto, es que nosotros como dueños solo podemos hacer que el baño sea lo más cómodo y rápido posible
      para evitarle exceso de tensiones`
      },
      {
        text: `Si lo vas a bañar en una bañera usa una alfombra antideslizante, de este modo el animal no se resbalará. Si no
      entonces usa un envase de plástico grande que sea espacioso y te permita realizar esta tarea`
      },
      {
        text: `Antes de bañarlo, cepilla su pelo para eliminar nudos y para darle un cariño al gato calmándolo. Es muy importante
      que tu estes tranquilo, pues si ambos están nerviosos podría ocurrir un accidente`
      },
      {
        text : `Ten a mano todo lo que necesitas, debes usar champú especial para gato (nunca uses productos para perros o humanos)
      y una esponja para frotarlo. Prepara el agua a una temperatura tibia que le resulte agradable al animal`
      },
      {
        text: `Pon algodón dentro de sus orejas, de este modo impedirás que el agua pase a sus oídos, lo que podría \
      causarle inflamaciones y complicaciones posteriores`
      },
      {
        text: `Nunca lances al gato a la bañera o envase, debes ir poco a poco, tómalo por la nuca con una mano y por su 
      cuerpo con la otra e introdúcelo lentamente en el agua. Deja que el animal se vaya habituando y mantente firme, 
      no hay necesidad de ponerse nervioso`
      },
      {
        text: `Moda al gato siempre comenzando por su cuerpo. La cabeza será lo último que deberás humedecer y lavar. 
      Aplica el champú y frota suavemente, como masajeando, pero de modo que permitas también que la suciedad salga
      de su pelo`
      },
      {
        text: `Deja actuar el champú el tiempo que indique en el envase, siempre acariciando a tu gato y haciéndolo sentir
      seguro. Aprovecha este momento para mojar poco a poco su cabeza, luego retira el champú vertiendo agua desde el 
      lomo hacia atras, asegurate de que quede libre de residuos que mas adelante podrian causarle alergias y molestias.`
      },
      {
        text: `Pon algodón dentro de sus orejas, de este modo impedirás que el agua pase a sus oídos, lo que podría 
      causarle inflamaciones y complicaciones posteriores`
      }
    ],
    extraAdvices: [
      {
        text: `Bañar a un gato es mucho más simple que hacerlo con un perro, pues su tamaño hace que sea más rápido
        y simple, por eso mantén la calma`
      },
      {
        text: `Si lo has intentado y el animal se pone muy nervioso o agresivo, entonces lo mejor es que dejes que 
        este trabajo quede en manos de los profesionales`
      }
    ]
  }
  return (
    <Box
      sx={{
        backgroundColor: '#fff',
        p: 4
      }}
    >
      {
        catCleanliness.advices.map((advice, index) => (
          <Box mb={3}>
            <Typography>
              <Box component='span' sx={{ color: 'primary.main', fontSize: '34px', mr: 2 }}>{index + 1}.</Box>
              {advice.text}
            </Typography>
          </Box>
        ))
      }

      <Typography color='primary' variant='h1' fontSize='30px' fontWeight='bold' sx={{ m: 2 }}>Consejo</Typography>
      {
        catCleanliness.extraAdvices.map((advice, index) => (
          <Box mb={3}>
            <Typography>
              <Box component='span' sx={{ fontSize: '14px', mr: 2 }}>-</Box>
              {advice.text}
            </Typography>
          </Box>
        ))
      }
    </Box>
  )
}

export default function CleanlinessComponent() {
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
            <Typography align='center' variant='h1' fontSize='54px' sx={{color: '#fff', marginTop: '-2rem'}}>Aseo</Typography>
            <Box
              sx={{border: '2px solid #000000', padding: '.3rem 2rem', borderRadius: 5, mb: 2}}
            >
              <Typography align='center' variant='h1' sx={{color: '#fff'}}>
                {userData.petType.includes('erro') ? 'Perro' : 'Gato'}
              </Typography>
            </Box>
            <Box>
              <Typography align='center' fontWeight='bold' variant='h1' sx={{color: '#fff'}}>
                Como bañar a tu mascota
              </Typography>
            </Box>
          </Box>
          {
            userData.petType.includes('erro') ? <DogCleanLiness/> : <CatCleanLiness/>
          }
          <Box p={2}>
            <Typography align='center' variant='h1' fontSize='34px' sx={{color: '#fff', mb: 2}}>Peluquerias</Typography>
            <Button
              variant='contained'
              size='large'
              fullWidth
              onClick={() => navigate('peluquerias')}
              sx={{color: 'primary.main', backgroundColor: '#fff', height: '4rem', fontSize: '2rem'}}>Reservar cita</Button>
          </Box>

        </>
      </Page>
    </Transitions>
  )
}
