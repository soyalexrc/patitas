import React from 'react';
import {useNavigate} from 'react-router-dom';
import Page from "@/shared/components/Page";
import {Box, IconButton, Typography, Grid, Button} from "@mui/material";
import Transitions from "@/shared/components/Transitions";
import logo from "@/assets/images/logo-patitas.png";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import feedImage from '@/assets/images/random-dog-feeding.jpg';

function DogFeeding() {
  const arrDogImages = [
    feedImage,
    feedImage,
    feedImage,
  ]
  const dogReceipts = [
    {
      title: 'Pollo con arroz: 14 minutos',
      text: `El proceso de elaboración es el siguiente. Se cocina el arroz, de la forma habitual o un poco más pasado, 
        si se desea, "para facilitar el acceso de las enzimas del aparato digestivo del perro al almidón de los granos, 
        apunta el veterinario". El tiempo de cocción ronda los 15 minutos.
        Mientras se hace el arroz, se puede preparar el pollo. "Lo idóneo es que sean partes nobles, magras del animal, 
        es decir, que no sean restos ni contengan huesos, añade el nutricionista". La opción más laudable es decantarse por 
        unas pechugas. Para cocinarlas hay varias posibilidades: bien cocerlas en agua hirviendo o a la plancha. Una vez 
        cocinadas se añaden al arroz y ya está listo el primer plato barato, rápido y saludable para el can`
    },
    {
      title: 'Bocaditos de atún: 12 minutos',
      text: `La elaboración es la siguiente: Se aplasta el contenido de un par de latas de atún (mejor, bajo en sal y
        sin aceite). Se añade un huevo batido y medio vaso de agua caliente, para hacer masa. Se mueve la mezcla con 
        ayuda de un tenedor. Una vez que tiene consistencia homogénea, se introducen los caprichos en el horno 
        (unos diez minutos) o en el microondas, se dejan enfriar ligeramente y voila! Están listos para hacer las
        delicias del peludo amigo.`
    },
    {
      title: 'Macarrones: 13 minutos',
      text: `La masa elegida debe ser corta: macarrones o similares (y no alargados, tipo espagueti), para que él la
        pueda masticar sin dificultad. Si se hierve el agua en un calentador específico (que acelera la ebullición), la
        pasta puede estar lista en unos 13 minutos. Unos huevos estrellados o cocinados en forma de tortilla 
        (con poco aceite) serán un complemento perfecto de estos macarrones. La elaboración del plato se puede 
        completar con un par de pechugas de pollo e, incluso, con una lata de sardinas, mejor si son naturales.`
    }
  ]

  return (
    <Box
      sx={{
        backgroundColor: '#fff',
        p: 4
      }}
    >
      {
        dogReceipts.map((receipt, index) => (
          <Box key={index + 1}>
            <Box
              sx={{
                backgroundColor: '#A58BB9',
                width: 'fit-content',
                padding: '.5rem 1rem .5rem 2rem',
                borderTopRightRadius: '12px',
                borderBottomRightRadius: '12px',
                marginLeft: '-2rem',
                my: 3
              }}
            >
              <Typography variant='h1' fontSize='22px' sx={{color: '#fff'}}>
                <Box component='span' sx={{mr: 2}}>{index + 1}.</Box>
                {receipt.title}
              </Typography> </Box>
            <Typography>{receipt.text}</Typography>

          </Box>
        ))
      }
      {arrDogImages.map(image => (
        <Grid item xs={12} sm={6} md={4}>
          <Box component='img' src={image}/>
        </Grid>
      ))}
    </Box>
  )
}


function CatFeeding() {
  const arrCatImages = [
    feedImage,
    feedImage,
    feedImage,
  ]

  const dogReceipts = [
    {
      title: 'Sardinas en aceite',
      text: `Se pueden hacer maravillas con una simple lata de sardinas en aceite, una receta húmeda de lo más sugerente
        para los gatos. Solo necesitamos una lata de sardinas (sin espinas), un poco de aceite y vinagre y una hoja de 
        laurel. Se vacía la lata sobre un plato de barro y se le añade el vinagre y el aceite hasta cubrir el pescado. 
        Se trocea la hoja de laurel y se esparce encima. Se calienta a fuego medio hasta que rompa a hervir y se deja 
        cocinar durante cinco minutos.`,
      ingredients: [
        '- 1 lata de sardinas (sin espinas)',
        '- Un poco de aceite y vinagre',
        '- 1 hoja de laurel'
      ],
      extra: `La mezcla se puede servir directamente o se puede conservar en frío. También se puede reconvertir en 
      una especie de puré de sardinas si se pasa por la batidora`
    },
    {
      title: 'Pastel de pollo',
      text: `Antes de nada se deshuesa el pollo si es necesario y, sin cocinar nada, se mezclan todos los ingredientes 
      en un mismo recipiente (pollo, queso, el vaso de caldo, los dos huevos y entre cuatro a seis cucharadas de harina).
      Se le añade un poco de aceite y se "revuelve" todo con la batidora.`,
      ingredients: [
        '- 1 muslo o contramuslo de pollo (también puede ser pechuga). 300 gramos son suficiente',
        '- 200 gramos de queso rallado (bajo en sal)',
        '- Harina',
        '- 2 huevos',
        '- 1 vaso de caldo de pollo',
        '- 1 cucharada de aceite',
      ],
      extra: `temperatura media de 180C, el resultado será un delicioso pastel de pollo que habrá que dejar que se
      enfríe para servir. Si se prefiere racionar, se puede dividir y conservar el resto en el frigorífico. Consumir 
      preferiblemente antes de tres días.`
    },
    {
      title: 'Delicia de atún',
      text: `Se baten los huevos con mimo y se le añade el queso (de ser posible bajo en sal). Esta combinación se 
      vuelca encima del atún y a la mezcla resultante se le añade harina de trigo (de ser posible integral). Todo 
      esto se vuelve a remover con celo y la masa resultante se traspasa a un recipiente que aguante el calor y se 
      hornea durante 15 minutos a una temperatura media de 200 grados. La masa resultante puede trocearse y
      disponerse al gusto del consumidor, ya sean en bolas, cuadrados o corazones, los cuales se pueden conservar
      en frío durante varios días.`,
      ingredients: [
        '- 400 gramos de atún en lata, melva o bonito',
        '- 1 o 2 huevos',
        '- Harina de pescado',
        '- Queso bajo en sal'
      ],
      extra: '',
    }
  ]

  return (
    <>
      <Box
        sx={{
          backgroundColor: '#fff',
          p: 4
        }}
      >
        {
          dogReceipts.map((receipt, index) => (
            <Box key={index + 1}>
              <Box
                sx={{
                  backgroundColor: '#A58BB9',
                  width: 'fit-content',
                  padding: '.5rem 1rem .5rem 2rem',
                  borderTopRightRadius: '12px',
                  borderBottomRightRadius: '12px',
                  marginLeft: '-2rem',
                  my: 3
                }}
              >
                <Typography variant='h1' fontSize='22px' sx={{color: '#fff'}}>
                  <Box component='span' sx={{mr: 2}}>{index + 1}.</Box>
                  {receipt.title}
                </Typography>
              </Box>
              <Grid container spacing={2}>
                <Grid item xs={12} md={7}>
                  <Typography>{receipt.text}</Typography>
                </Grid>
                <Grid item xs={12} md={5}>
                  <Box
                    sx={{
                      border: '7px solid #A58BB9',
                      borderTopLeftRadius: 50,
                      borderBottomLeftRadius: 50,
                      py: 1,
                      px: 3,
                      mb: 5
                    }}
                  >
                    {receipt.ingredients.map((ingredient) => (
                      <Typography key={ingredient}>{ingredient}</Typography>
                    ))}
                  </Box>
                  <Typography>{receipt.extra}</Typography>
                </Grid>
              </Grid>

            </Box>
          ))
        }

      </Box>
      <Grid container>
        {arrCatImages.map(image => (
          <Grid item xs={12} sm={6} md={4}>
            <Box component='img' src={image}/>
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default function FeedingComponent() {
  const userData = JSON.parse(localStorage.getItem('patitas-token'));
  const navigate = useNavigate();

  console.log(userData);
  return (
    <Transitions>
      <Page
        title='Ciclo de vida | Patitas'
        description='Ciclo de vida, patitas'
        sx={{
          background: 'linear-gradient(0deg, rgba(255,246,185,1) 0%, rgba(227,198,235,1) 100%)',
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
            <Typography align='center' variant='h1' fontSize='54px'
                        sx={{color: '#fff', marginTop: '-2rem'}}>Alimentación</Typography>
            <Box
              sx={{border: '2px solid #000000', padding: '.3rem 2rem', borderRadius: 5, mb: 2}}
            >
              <Typography align='center' variant='h1' sx={{color: '#fff'}}>
                {userData.petType.includes('erro') ? 'Perro' : 'Gato'}
              </Typography>
            </Box>

          </Box>
          <Typography align='right' fontWeight='bold' variant='h1' fontSize='42px' sx={{color: '#fff', px: 2}}>
            Recetas
          </Typography>
          {
            userData.petType.includes('erro') ? <DogFeeding/> : <CatFeeding/>
          }
          <Box p={2}>
            <Typography align='center' variant='h1' fontSize='34px' sx={{color: '#fff', mb: 2}}>Compra comida online</Typography>
            <Button
              variant='contained'
              size='large'
              fullWidth
              onClick={() => navigate(userData.petType.includes('erro') ? 'perrarina' : 'gatarina')}
              sx={{color: 'primary.main', backgroundColor: '#fff', height: '4rem', fontSize: '2rem'}}>Ver</Button>
          </Box>
        </>
      </Page>
    </Transitions>
  )
}
