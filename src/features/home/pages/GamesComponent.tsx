import React from 'react';
import {useNavigate} from 'react-router-dom';
import Page from "@/shared/components/Page";
import {Box, IconButton, Typography, Grid, Button, useMediaQuery} from "@mui/material";
import Transitions from "@/shared/components/Transitions";
import logo from "@/assets/images/logo-patitas.png";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import feedImage from '@/assets/images/random-dog-feeding.jpg';

function DogFeeding({largeScreen}) {
  return (
    <Box
      sx={{
        backgroundColor: '#fff',
        p: 4
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box
            sx={{
              backgroundColor: '#662D80',
              width: 'fit-content',
              padding: '.5rem 1rem .5rem 2rem',
              borderTopRightRadius: '12px',
              borderBottomRightRadius: '12px',
              marginLeft: '-2rem',
            }}
          >
            <Typography variant='h1' fontSize='22px' sx={{color: '#fff'}}>
              <Box component='span' sx={{mr: 2}}>1.</Box>
              Cuerda con bola en el extremo
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} sx={{mb: !largeScreen && 3}}>
          <Box>
            <Typography>
              Con una simple cuerda de las que venden en cualquier ferretería o centro de bricolaje, puedes crear un
              juguete dinámico y sencillo. Realiza algunos nudos a lo largo de la cuerda. Anuda uno de los extremos
              hasta formar una pequeña bola. Así, podrás lanzar mejor el juguete para que tu perro te lo traiga.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} sx={{mb: !largeScreen && 3}}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end'
            }}
          >
            <Box
              sx={{
                backgroundColor: '#ED73AA',
                width: 'fit-content',
                padding: '.5rem 1rem .5rem 2rem',
                borderTopLeftRadius: '12px',
                borderBottomLeftRadius: '12px',
                marginRight: '-2rem',
              }}
            >
              <Typography variant='h1' fontSize='22px' sx={{color: '#fff'}}>
                <Box component='span' sx={{mr: 2}}>2.</Box>
                Cuerdas de trapillo
              </Typography>
            </Box>
          </Box>
          <Typography sx={{mt: 2}}>
            El trapillo resulta genial para elaborar coloridas y originales cuerdas con las que tu perro jugará
            encantado. Utiliza camisetas o toallas viejas para crear tu propio trapillo y así reutilizarás materiales
            reciclados.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Box
            sx={{
              backgroundColor: '#6F78B8',
              width: 'fit-content',
              padding: '.5rem 1rem .5rem 2rem',
              borderTopRightRadius: '12px',
              borderBottomRightRadius: '12px',
              marginLeft: '-2rem',
            }}
          >
            <Typography variant='h1' fontSize='22px' sx={{color: '#fff'}}>
              <Box component='span' sx={{mr: 2}}>3.</Box>
              Rampa de agility
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} sx={{mb: !largeScreen && 3}}>
          <Box>
            <Typography>
              Para construir esta rampa necesitarás ser un poco maños@ y, por supuesto, tener un pequeño jardín. Pero tu
              perro se lo pasará genial subiendo y bajando por ella. Y puedes correr con él. Así, tú también harás
              ejercicio. Venga, fuera la pereza.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} sx={{mb: !largeScreen && 3}}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end'
            }}
          >
            <Box
              sx={{
                backgroundColor: '#AD9BBB',
                width: 'fit-content',
                padding: '.5rem 1rem .5rem 2rem',
                borderTopLeftRadius: '12px',
                borderBottomLeftRadius: '12px',
                marginRight: '-2rem',
              }}
            >
              <Typography variant='h1' fontSize='22px' sx={{color: '#fff'}}>
                <Box component='span' sx={{mr: 2}}>4.</Box>
                Aro para saltar
              </Typography>
            </Box>
          </Box>
          <Typography sx={{mt: 2}}>
            ¡El agility da mucho juego! Y en este caso, no hace falta mucha preparación. Con un par de conos para
            sujetar el aro, tendrás listo un fantástico juguete para que tu perro salte y corre. Además, te lo puedes
            llevar al parque. ¡A jugar!
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Box
            sx={{
              backgroundColor: '#662D80',
              width: 'fit-content',
              padding: '.5rem 1rem .5rem 2rem',
              borderTopRightRadius: '12px',
              borderBottomRightRadius: '12px',
              marginLeft: '-2rem',
            }}
          >
            <Typography variant='h1' fontSize='22px' sx={{color: '#fff'}}>
              <Box component='span' sx={{mr: 2}}>5.</Box>
              Cuerda para estirar
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box>
            <Typography>
              Con un palo algo flexible y una cuerda (puede ser de trapillo), tu perro jugará a estirar y dar vueltas.
              Una idea más para tu colección de juguetes caseros para perros.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} sx={{mb: !largeScreen && 3}}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end'
            }}
          >
            <Box
              sx={{
                backgroundColor: '#6C66AC',
                width: 'fit-content',
                padding: '.5rem 1rem .5rem 2rem',
                borderTopLeftRadius: '12px',
                borderBottomLeftRadius: '12px',
                marginRight: '-2rem',
              }}
            >
              <Typography variant='h1' fontSize='22px' sx={{color: '#fff'}}>
                <Box component='span' sx={{mr: 2}}>6.</Box>
                Pelota con sorpresa
              </Typography>
            </Box>
          </Box>
          <Typography sx={{mt: 2}}>
            Con una estructura de goma blanda hueca y de forma esférica, puedes crear un interesante juguete si lo
            rellenas de trapillo o calcetines viejos. Si, además, añades de vez en cuando la golosina preferida de tu
            perro, seguro que no suelta la pelota.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Box
            sx={{
              backgroundColor: '#E285B5',
              width: 'fit-content',
              padding: '.5rem 1rem .5rem 2rem',
              borderTopRightRadius: '12px',
              borderBottomRightRadius: '12px',
              marginLeft: '-2rem',
            }}
          >
            <Typography variant='h1' fontSize='22px' sx={{color: '#fff'}}>
              <Box component='span' sx={{mr: 2}}>7.</Box>
              Felpudo de golosinas
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} sx={{mb: !largeScreen && 3}}>
          <Box>
            <Typography>
              Un felpudo de plástico con agujeros te permite esconder algunas golosinas para que tu perro se entretenga
              intentando conseguirlas.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} sx={{mb: !largeScreen && 3}}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end'
            }}
          >
            <Box
              sx={{
                backgroundColor: '#AD9BBB',
                width: 'fit-content',
                padding: '.5rem 1rem .5rem 2rem',
                borderTopLeftRadius: '12px',
                borderBottomLeftRadius: '12px',
                marginRight: '-2rem',
              }}
            >
              <Typography variant='h1' fontSize='22px' sx={{color: '#fff'}}>
                <Box component='span' sx={{mr: 2}}>8.</Box>
                Calcetín especial
              </Typography>
            </Box>
          </Box>
          <Typography sx={{mt: 2}}>
            Busca un calcetín viejo o desparejado e introduce en él una pelota de tenis. Anuda los extremos y ya tienes
            un juguete divertido y fácil de hacer para tu perro.
          </Typography>
        </Grid>

      </Grid>
    </Box>
  )
}


function CatFeeding({largeScreen}) {


  return (
    <Box
      sx={{
        backgroundColor: '#fff',
        p: 4
      }}
    >
      <Box>
        <Box
          sx={{
            backgroundColor: '#6C66AC',
            width: 'fit-content',
            padding: '.5rem 1rem .5rem 2rem',
            borderTopRightRadius: '12px',
            borderBottomRightRadius: '12px',
            marginLeft: '-2rem',
            my: 3
          }}
        >
          <Typography variant='h1' fontSize='22px' sx={{color: '#fff'}}>
            <Box component='span' sx={{mr: 2}}>1.</Box>
            Rollo del papel higiénico
          </Typography>
        </Box>
        <Typography>
          Un rollo de papel higiénico y unas tijeras son suficientes para crear esta primera propuesta de juguete casero
          para gatos y, además, de una forma gratuita. El sitio web Squidoo explica cómo transformar este cartón
          cilíndrico en un atractivo accesorio para el felino antes de que acabe en la papelera.
        </Typography>
        <br/>
        <Typography>
          El procedimiento es muy sencillo.
        </Typography>
        <br/>
        <Typography>
          Hay que recortar flecos de unos cinco centímetros de ancho a cada lado del rollo del papel higiénico. <br/>
          Se doblan los flecos hacia fuera. <br/>
          Y… ¡listo para jugar con el gato!
        </Typography>

      </Box>
      <Box>
        <Box
          sx={{
            backgroundColor: '#AD9BBB',
            width: 'fit-content',
            padding: '.5rem 1rem .5rem 2rem',
            borderTopRightRadius: '12px',
            borderBottomRightRadius: '12px',
            marginLeft: '-2rem',
            my: 3
          }}
        >
          <Typography variant='h1' fontSize='22px' sx={{color: '#fff'}}>
            <Box component='span' sx={{mr: 2}}>2.</Box>
            Fabricar ratones para gatos
          </Typography>
        </Box>
        <Typography>
          Una alternativa para fabricar juguetes felinos es construir ratones en el hogar. Esta propuesta es un poco más
          elaborada que la anterior, y permite crear muñecos con los que nuestro peludo compañero pasará largas horas de
          diversión.
        </Typography>
        <br/>
        <Typography>
          Las ideas para fabricar ratones caseros para gatos son variadas: van desde emplear ropa o calcetines en
          desuso, hasta reutilizarbobinas de hilo gastado para construir los juguetes del felino y colgarlas después del
          techo, como sugiere el blog de Martha Steward.
        </Typography>
        <br/>

      </Box>
      <Box>
        <Box
          sx={{
            backgroundColor: '#B7619B',
            width: 'fit-content',
            padding: '.5rem 1rem .5rem 2rem',
            borderTopRightRadius: '12px',
            borderBottomRightRadius: '12px',
            marginLeft: '-2rem',
            my: 3
          }}
        >
          <Typography variant='h1' fontSize='22px' sx={{color: '#fff'}}>
            <Box component='span' sx={{mr: 2}}>3.</Box>
            Puzzle de cartón
          </Typography>
        </Box>
        <Typography>
          Los puzles y rompecabezas para gatos pueden resultar costosos de adquirir. Sin embargo, fabricarlos en el
          hogar es muy sencillo y, sobre todo, muy barato. Para lograrlo basta con hacerse con una caja de cartón
          rectangular, un vaso de boca redonda para marcar círculos, un lápiz, un cúter y una pelota del animal que
          tengamos por casa.
        </Typography>
        <br/>
        <Typography>
          El modo de construir este puzle casero para gatos tan divertido e ingenioso, como propone el portal Cat siam
          channel, es el siguiente:
        </Typography>
        <br/>
        <Typography>
          El primer paso es marcar círculos con un lapicero sobre la caja de cartón. <br/>
          Se recortan las circunferencias con ayuda de un cúter o tijera. <br/>
          Se introduce la pelota en la caja por los agujeros.
        </Typography>
        <br/>
        <Typography>
          El felino tratará de capturar la bola a través de los orificios, que aparecerá y desaparerá por entre los
          distintos huecos creados, tapada por el resto de la caja que sí permanece. De esta manera, la caja de cartón
          se habrá convertido en un muy divertido (y muy barato) juguete para gatos casero.
        </Typography>

      </Box>
      <Box>
        <Box
          sx={{
            backgroundColor: '#E285B5',
            width: 'fit-content',
            padding: '.5rem 1rem .5rem 2rem',
            borderTopRightRadius: '12px',
            borderBottomRightRadius: '12px',
            marginLeft: '-2rem',
            my: 3
          }}
        >
          <Typography variant='h1' fontSize='22px' sx={{color: '#fff'}}>
            <Box component='span' sx={{mr: 2}}>4.</Box>
            Calcetines viejos
          </Typography>
        </Box>
        <Typography>
          Un par de calcetines viejos o desemparejados es suficiente para estimular la mente felina y, de paso, ayudarle
          a ejercitarse. El procedimiento para fabricar juguetes caseros para gatos con calcetines es el siguiente.
        </Typography>
        <br/>
        <Typography>
          Hay que encontrar un par de calcetines viejos o que ya no se tenga la intención de usar (limpios). <br/>
          Cruzar las dos medias y anudarlas. <br/>
          Recortar tiras en los extremos de los calcetines que han quedado libres. <br/>
          ¡Ya está hecho para jugar con el gato!
        </Typography>

      </Box>
    </Box>
  )
}

export default function GamesComponent() {
  const userData = JSON.parse(localStorage.getItem('patitas-token'));
  const navigate = useNavigate();
  const largeScreen = useMediaQuery((theme: any) => theme.breakpoints.up('md'))


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
                        sx={{color: '#fff', marginTop: '-2rem'}}>Juegos</Typography>
            <Box
              sx={{border: '2px solid #000000', padding: '.3rem 2rem', borderRadius: 5, mb: 2}}
            >
              <Typography align='center' variant='h1' sx={{color: '#fff'}}>
                {userData.petType.includes('erro') ? 'Perro' : 'Gato'}
              </Typography>
            </Box>

          </Box>
          <Typography align='right' fontWeight='bold' variant='h1' fontSize='32px' sx={{color: '#fff', px: 2}}>
            Juegos caseros
          </Typography>
          {
            userData.petType.includes('erro') ? <DogFeeding largeScreen={largeScreen}/> :
              <CatFeeding largeScreen={largeScreen}/>
          }
          <Box p={2}>
            <Box display='flex' justifyContent='center' my={5}>
            </Box>
            <Typography align='center' variant='h1' fontSize='34px'
                        sx={{color: '#fff', mb: 2}}>Compra online</Typography>
            <Button
              variant='contained'
              size='large'
              fullWidth
              onClick={() => userData.petType.includes('erro') ? navigate('jugueteria-canina') : navigate('jugueteria-felina')}
              sx={{color: 'primary.main', backgroundColor: '#fff', height: '4rem', fontSize: '2rem'}}>Ver</Button>
          </Box>
        </>
      </Page>
    </Transitions>
  )
}
