import React from 'react';
import {useNavigate} from 'react-router-dom';
import Page from "@/shared/components/Page";
import {Box, IconButton, Typography, Grid, Button, useMediaQuery} from "@mui/material";
import Transitions from "@/shared/components/Transitions";
import logo from "@/assets/images/logo-patitas.png";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import estefania from '@/assets/images/estefania-garcia.png';
import pamela from '@/assets/images/pamela-hernandez.png';
import {styled} from "@mui/material/styles";
import disabledPatita from '@/assets/icons/patita-disabled.png';
import pinkPatita from '@/assets/icons/patita-pink.png';

const ResponsiveImg = styled(Box)(({theme}) => ({
  zIndex: 1,
  maxWidth: '200px',
  maxHeight: '200px',
  [theme.breakpoints.down("md")]: {
    width: '150px',
    height: '150px'
  },
  [theme.breakpoints.down("sm")]: {
    width: '100px',
    height: '100px'
  },
}));

export default function DogToysComponent() {
  const navigate = useNavigate();
  const largeScreen = useMediaQuery((theme: any) => theme.breakpoints.up('md'))


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
                        sx={{color: '#fff', marginTop: '-2rem'}}>Juguetería</Typography>


          </Box>


          <Box
            sx={{
              backgroundColor: '#fff',
              p: 4
            }}
          >
            <Grid container spacing={largeScreen && 2} sx={{my: 5}}>
              <Grid item xs={12} md={10}>
                <Box display='flex'>
                  <ResponsiveImg
                    component='img'
                    src={estefania}
                  />
                  <Box>
                    <Box
                      sx={{
                        backgroundColor: '#6F78B8',
                        width: 'fit-content',
                        height: 'fit-content',
                        padding: '.5rem 2rem .5rem 4rem',
                        borderTopRightRadius: '12px',
                        borderBottomRightRadius: '12px',
                        marginLeft: '-3rem',
                        my: 3,
                      }}
                    >
                      <Typography variant='h1' fontSize='22px' sx={{color: '#fff'}}>
                        Juego Perro Limpia Dientes
                      </Typography>
                    </Box>
                    {
                      largeScreen &&
                      <>
                        <Typography>
                          esistente a las mordedura, es seguro para las encías del perro, perfecto para ayudar a su
                          perro a limpiar sus dientes y protegerlos de enfermedades orales.
                          Limpieza de 360 grados ayuda a la eliminación de placa y sarro, una base estable le permite a
                          su perro sostenerlo más fácilmente cuando se trata de cepillarse los dientes.
                        </Typography>
                        <br/>

                        <Typography>
                          Indicaciones de uso: <br/>
                          Puede usarse o no con crema dental para perros.
                          Usar bajo supervisión ya que puede destrozarlo , dáselo solamente cuando puedas supervisar.
                        </Typography>
                        <Box display='flex' alignItems='flex-end' flexWrap='wrap' justifyContent='center' mt={5}>
                          <Box mt={!largeScreen && 4}>
                            <Typography align='center'>ESTRELLAS</Typography>
                            <Box display='flex'>
                              {
                                [true, true, true, true, true].map(value => {
                                  if (value) {
                                    return <Box component='img' src={pinkPatita}/>
                                  } else {
                                    return <Box component='img' src={disabledPatita}/>
                                  }
                                })
                              }
                            </Box>
                          </Box>
                          <Typography fontSize='40px' sx={{color: '#662D80', mx: 5}}>19.99$</Typography>
                        </Box>
                      </>
                    }
                  </Box>
                </Box>
                {!largeScreen &&
                  <Box mt={5}>
                    <Typography>
                      esistente a las mordedura, es seguro para las encías del perro, perfecto para ayudar a su
                      perro a limpiar sus dientes y protegerlos de enfermedades orales.
                      Limpieza de 360 grados ayuda a la eliminación de placa y sarro, una base estable le permite a
                      su perro sostenerlo más fácilmente cuando se trata de cepillarse los dientes.
                    </Typography>
                    <br/>

                    <Typography>
                      Indicaciones de uso: <br/>
                      Puede usarse o no con crema dental para perros.
                      Usar bajo supervisión ya que puede destrozarlo , dáselo solamente cuando puedas supervisar.
                    </Typography>
                    <Box display='flex' alignItems='flex-end' flexWrap='wrap' justifyContent='center' mt={5}>
                      <Box mt={!largeScreen && 4}>
                        <Typography align='center'>ESTRELLAS</Typography>
                        <Box display='flex'>
                          {
                            [true, true, true, true, true].map(value => {
                              if (value) {
                                return <Box component='img' src={pinkPatita}/>
                              } else {
                                return <Box component='img' src={disabledPatita}/>
                              }
                            })
                          }
                        </Box>
                      </Box>
                      <Typography fontSize='40px' sx={{color: '#662D80', mx: 5}}>19.99$</Typography>
                    </Box>
                  </Box>
                }
              </Grid>
              <Grid item xs={12} md={2} alignSelf='center'>
                {
                  largeScreen &&
                  <Box
                    sx={{
                      backgroundColor: '#6F78B8',
                      marginRight: '-2rem',
                      padding: '2rem',
                      borderTopLeftRadius: 50,
                      borderBottomLeftRadius: 50
                    }}
                  >
                    <Typography fontSize='22px' sx={{color: '#fff'}}>Contactar</Typography>
                  </Box>
                }
                {
                  !largeScreen &&
                  <Box
                    sx={{
                      backgroundColor: '#6F78B8',
                      padding: '1rem',
                      borderRadius: 50,
                      mt: 5
                    }}
                  >
                    <Typography fontSize='22px' sx={{color: '#fff'}} align='center'>Contactar</Typography>
                  </Box>
                }
              </Grid>
            </Grid>
            <Grid container spacing={largeScreen && 2} sx={{my: 5}}>
              <Grid item xs={12} md={10}>
                <Box display='flex'>
                  <ResponsiveImg
                    component='img'
                    src={estefania}
                  />
                  <Box>
                    <Box
                      sx={{
                        backgroundColor: '#6F78B8',
                        width: 'fit-content',
                        height: 'fit-content',
                        padding: '.5rem 2rem .5rem 4rem',
                        borderTopRightRadius: '12px',
                        borderBottomRightRadius: '12px',
                        marginLeft: '-3rem',
                        my: 3,
                      }}
                    >
                      <Typography variant='h1' fontSize='22px' sx={{color: '#fff'}}>
                        Pelotas Kit X 3 En Goma Super Durables Para Juego Intenso
                      </Typography>
                    </Box>
                    {
                      largeScreen &&
                      <>
                        <Typography>
                          3 Pelotas para jugar con tu amig@ hasta el cansancio. <br/>
                          Son macizas (no tienes huecos ni espacio en su interior) y rebotan muchísimo.
                        </Typography>
                        <br/>

                        <Typography>
                          NO USAMOS PVC NI POLIURETANO solo usamos goma para juguetes, por esto no son las mas
                          económicas pero seguro no le causaran ningún daño a tu amig@.
                        </Typography>
                        <br/>
                        <Typography>
                          1 Pelota loca : Diámetro 9,2cm <br/>
                          1 Pelota limpia dientes : Diámetro 7cm <br/>
                          1 Pelota antiestrés : Largo 9,8 x Ancho 6,8 cm
                        </Typography>
                        <br/>
                        <Typography>
                          Especial para razas mediana o grandes.
                        </Typography>
                        <Box display='flex' alignItems='flex-end' flexWrap='wrap' justifyContent='center' mt={5}>
                          <Box mt={!largeScreen && 4}>
                            <Typography align='center'>ESTRELLAS</Typography>
                            <Box display='flex'>
                              {
                                [true, true, true, true, true].map(value => {
                                  if (value) {
                                    return <Box component='img' src={pinkPatita}/>
                                  } else {
                                    return <Box component='img' src={disabledPatita}/>
                                  }
                                })
                              }
                            </Box>
                          </Box>
                          <Typography fontSize='40px' sx={{color: '#662D80', mx: 5}}>40.00$</Typography>
                        </Box>
                      </>
                    }
                  </Box>
                </Box>
                {!largeScreen &&
                  <Box mt={5}>
                    <Typography>
                      3 Pelotas para jugar con tu amig@ hasta el cansancio. <br/>
                      Son macizas (no tienes huecos ni espacio en su interior) y rebotan muchísimo.
                    </Typography>
                    <br/>

                    <Typography>
                      NO USAMOS PVC NI POLIURETANO solo usamos goma para juguetes, por esto no son las mas
                      económicas pero seguro no le causaran ningún daño a tu amig@.
                    </Typography>
                    <br/>
                    <Typography>
                      1 Pelota loca : Diámetro 9,2cm <br/>
                      1 Pelota limpia dientes : Diámetro 7cm <br/>
                      1 Pelota antiestrés : Largo 9,8 x Ancho 6,8 cm
                    </Typography>
                    <br/>
                    <Typography>
                      Especial para razas mediana o grandes.
                    </Typography>

                    <Box display='flex' alignItems='flex-end' flexWrap='wrap' justifyContent='center' mt={5}>
                      <Box mt={!largeScreen && 4}>
                        <Typography align='center'>ESTRELLAS</Typography>
                        <Box display='flex'>
                          {
                            [true, true, true, true, true].map(value => {
                              if (value) {
                                return <Box component='img' src={pinkPatita}/>
                              } else {
                                return <Box component='img' src={disabledPatita}/>
                              }
                            })
                          }
                        </Box>
                      </Box>
                      <Typography fontSize='40px' sx={{color: '#662D80', mx: 5}}>40.00$</Typography>
                    </Box>
                  </Box>
                }
              </Grid>
              <Grid item xs={12} md={2} alignSelf='center'>
                {
                  largeScreen &&
                  <Box
                    sx={{
                      backgroundColor: '#6F78B8',
                      marginRight: '-2rem',
                      padding: '2rem',
                      borderTopLeftRadius: 50,
                      borderBottomLeftRadius: 50
                    }}
                  >
                    <Typography fontSize='22px' sx={{color: '#fff'}}>Contactar</Typography>
                  </Box>
                }
                {
                  !largeScreen &&
                  <Box
                    sx={{
                      backgroundColor: '#6F78B8',
                      padding: '1rem',
                      borderRadius: 50,
                      mt: 5
                    }}
                  >
                    <Typography fontSize='22px' sx={{color: '#fff'}} align='center'>Contactar</Typography>
                  </Box>
                }
              </Grid>
            </Grid>
            <Grid container spacing={largeScreen && 2} sx={{my: 5}}>
              <Grid item xs={12} md={10}>
                <Box display='flex'>
                  <ResponsiveImg
                    component='img'
                    src={estefania}
                  />
                  <Box>
                    <Box
                      sx={{
                        backgroundColor: '#6F78B8',
                        width: 'fit-content',
                        height: 'fit-content',
                        padding: '.5rem 2rem .5rem 4rem',
                        borderTopRightRadius: '12px',
                        borderBottomRightRadius: '12px',
                        marginLeft: '-3rem',
                        my: 3,
                      }}
                    >
                      <Typography variant='h1' fontSize='22px' sx={{color: '#fff'}}>
                        Bola De Juego Para Perros Snack Ball
                      </Typography>
                    </Box>
                    {
                      largeScreen &&
                      <>
                        <Typography>
                          Juguete Bongo Snack Ball
                        </Typography>
                        <br/>

                        <Typography>
                          Pelota Para Juego Diseñada Para Poner Dentro De Ella Una Galleta. No Apta Para Perros Gigantes
                        </Typography>

                        <Box display='flex' alignItems='flex-end' flexWrap='wrap' justifyContent='center' mt={5}>
                          <Box mt={!largeScreen && 4}>
                            <Typography align='center'>ESTRELLAS</Typography>
                            <Box display='flex'>
                              {
                                [true, true, true, true, true].map(value => {
                                  if (value) {
                                    return <Box component='img' src={pinkPatita}/>
                                  } else {
                                    return <Box component='img' src={disabledPatita}/>
                                  }
                                })
                              }
                            </Box>
                          </Box>
                          <Typography fontSize='40px' sx={{color: '#662D80', mx: 5}}>10.00$</Typography>
                        </Box>
                      </>
                    }
                  </Box>
                </Box>
                {!largeScreen &&
                  <Box mt={5}>
                    <Typography>
                      Juguete Bongo Snack Ball
                    </Typography>
                    <br/>

                    <Typography>
                      Pelota Para Juego Diseñada Para Poner Dentro De Ella Una Galleta. No Apta Para Perros Gigantes
                    </Typography>

                    <Box display='flex' alignItems='flex-end' flexWrap='wrap' justifyContent='center' mt={5}>
                      <Box mt={!largeScreen && 4}>
                        <Typography align='center'>ESTRELLAS</Typography>
                        <Box display='flex'>
                          {
                            [true, true, true, true, true].map(value => {
                              if (value) {
                                return <Box component='img' src={pinkPatita}/>
                              } else {
                                return <Box component='img' src={disabledPatita}/>
                              }
                            })
                          }
                        </Box>
                      </Box>
                      <Typography fontSize='40px' sx={{color: '#662D80', mx: 5}}>10.00$</Typography>
                    </Box>
                  </Box>
                }
              </Grid>
              <Grid item xs={12} md={2} alignSelf='center'>
                {
                  largeScreen &&
                  <Box
                    sx={{
                      backgroundColor: '#6F78B8',
                      marginRight: '-2rem',
                      padding: '2rem',
                      borderTopLeftRadius: 50,
                      borderBottomLeftRadius: 50
                    }}
                  >
                    <Typography fontSize='22px' sx={{color: '#fff'}}>Contactar</Typography>
                  </Box>
                }
                {
                  !largeScreen &&
                  <Box
                    sx={{
                      backgroundColor: '#6F78B8',
                      padding: '1rem',
                      borderRadius: 50,
                      mt: 5
                    }}
                  >
                    <Typography fontSize='22px' sx={{color: '#fff'}} align='center'>Contactar</Typography>
                  </Box>
                }
              </Grid>
            </Grid>
            <Grid container spacing={largeScreen && 2} sx={{my: 5}}>
              <Grid item xs={12} md={10}>
                <Box display='flex'>
                  <ResponsiveImg
                    component='img'
                    src={estefania}
                  />
                  <Box>
                    <Box
                      sx={{
                        backgroundColor: '#6F78B8',
                        width: 'fit-content',
                        height: 'fit-content',
                        padding: '.5rem 2rem .5rem 4rem',
                        borderTopRightRadius: '12px',
                        borderBottomRightRadius: '12px',
                        marginLeft: '-3rem',
                        my: 3,
                      }}
                    >
                      <Typography variant='h1' fontSize='22px' sx={{color: '#fff'}}>
                        Tomahauk Snuffle Mat Para Perros Juego De Alimentación Int
                      </Typography>
                    </Box>
                    {
                      largeScreen &&
                      <>
                        <Typography>
                          Mejora las habilidades de búsqueda de tu perro; el juguete rompecabezas para perro hecho de la
                          tela de fieltro está diseñado para ocultar los alimentos de manera eficiente, por lo tanto,
                          mejorando las habilidades de búsqueda de tu perro
                        </Typography>
                        <br/>

                        <Typography>
                          La alimentación lenta conduce a una buena salud intestinal; uno de los juguetes
                          imprescindibles para mascotas o rompecabezas de comida para perros, la alfombrilla para dormir
                          para perro alimenta a tu perro lentamente mientras lo busca, dando un amplio tiempo para su
                          intestino para preparar
                        </Typography>
                        <br/>
                        <Typography>
                          Tiempos de comida sin desorden; ayuda a tu mascota a liberar su energía en nuestros juguetes
                          estimulantes del cerebro del perro con un diseño antideslizante para que las comidas estén
                          siempre limpias
                        </Typography>
                        <br/>
                        <Typography>
                          Lavable a máquina; nuestros juguetes para cachorros o juegos para perros no pierden su calidad
                          después de un lavado a máquina, así que lava estos rompecabezas de alimentos para perros todo
                          lo que quieras
                        </Typography>

                        <Box display='flex' alignItems='flex-end' flexWrap='wrap' justifyContent='center' mt={5}>
                          <Box mt={!largeScreen && 4}>
                            <Typography align='center'>ESTRELLAS</Typography>
                            <Box display='flex'>
                              {
                                [true, true, true, true, true].map(value => {
                                  if (value) {
                                    return <Box component='img' src={pinkPatita}/>
                                  } else {
                                    return <Box component='img' src={disabledPatita}/>
                                  }
                                })
                              }
                            </Box>
                          </Box>
                          <Typography fontSize='40px' sx={{color: '#662D80', mx: 5}}>67.98$</Typography>
                        </Box>
                      </>
                    }
                  </Box>
                </Box>
                {!largeScreen &&
                  <Box mt={5}>
                    <Typography>
                      Mejora las habilidades de búsqueda de tu perro; el juguete rompecabezas para perro hecho de la
                      tela de fieltro está diseñado para ocultar los alimentos de manera eficiente, por lo tanto,
                      mejorando las habilidades de búsqueda de tu perro
                    </Typography>
                    <br/>

                    <Typography>
                      La alimentación lenta conduce a una buena salud intestinal; uno de los juguetes
                      imprescindibles para mascotas o rompecabezas de comida para perros, la alfombrilla para dormir
                      para perro alimenta a tu perro lentamente mientras lo busca, dando un amplio tiempo para su
                      intestino para preparar
                    </Typography>
                    <br/>
                    <Typography>
                      Tiempos de comida sin desorden; ayuda a tu mascota a liberar su energía en nuestros juguetes
                      estimulantes del cerebro del perro con un diseño antideslizante para que las comidas estén
                      siempre limpias
                    </Typography>
                    <br/>
                    <Typography>
                      Lavable a máquina; nuestros juguetes para cachorros o juegos para perros no pierden su calidad
                      después de un lavado a máquina, así que lava estos rompecabezas de alimentos para perros todo
                      lo que quieras
                    </Typography>

                    <Box display='flex' alignItems='flex-end' flexWrap='wrap' justifyContent='center' mt={5}>
                      <Box mt={!largeScreen && 4}>
                        <Typography align='center'>ESTRELLAS</Typography>
                        <Box display='flex'>
                          {
                            [true, true, true, true, true].map(value => {
                              if (value) {
                                return <Box component='img' src={pinkPatita}/>
                              } else {
                                return <Box component='img' src={disabledPatita}/>
                              }
                            })
                          }
                        </Box>
                      </Box>
                      <Typography fontSize='40px' sx={{color: '#662D80', mx: 5}}>67.98$</Typography>
                    </Box>
                  </Box>
                }
              </Grid>
              <Grid item xs={12} md={2} alignSelf='center'>
                {
                  largeScreen &&
                  <Box
                    sx={{
                      backgroundColor: '#6F78B8',
                      marginRight: '-2rem',
                      padding: '2rem',
                      borderTopLeftRadius: 50,
                      borderBottomLeftRadius: 50
                    }}
                  >
                    <Typography fontSize='22px' sx={{color: '#fff'}}>Contactar</Typography>
                  </Box>
                }
                {
                  !largeScreen &&
                  <Box
                    sx={{
                      backgroundColor: '#6F78B8',
                      padding: '1rem',
                      borderRadius: 50,
                      mt: 5
                    }}
                  >
                    <Typography fontSize='22px' sx={{color: '#fff'}} align='center'>Contactar</Typography>
                  </Box>
                }
              </Grid>
            </Grid>
          </Box>

        </>
      </Page>
    </Transitions>
  )
}
