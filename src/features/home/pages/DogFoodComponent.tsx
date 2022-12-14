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

const ResponsiveImg = styled('img')(({theme}) => ({
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

export default function DogFoodComponent() {
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
                        sx={{color: '#fff', marginTop: '-2rem'}}>Perrarina</Typography>


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
                    src={estefania}
                  />
                  <Box>
                    <Box
                      sx={{
                        backgroundColor: '#AD9BBB',
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
                        PURINA?? DOG CHOW?? para perros adultos con Pollo
                      </Typography>
                    </Box>
                    {
                      largeScreen &&
                      <>
                        <Typography sx={{px: 2}}>
                          NUTRICI??N ADAPTADA. Nutrici??n 100% completa y equilibrada adaptada para tu perro adulto. Con
                          ingredientes naturales seleccionados y sin colorantes, aromatizantes ni conservantes
                          artificiales a??adidos. <br/>
                          DIGESTI??N SALUDABLE apoyada por una combinaci??n espec??fica de fibras y achicoria, un
                          prebi??tico natural que se ha demostrado que ayuda a mejorar la salud digestiva.
                          M??SCULOS FUERTES. Con prote??na para apoyar unos m??sculos fuertes.
                        </Typography>
                        <br/>
                        <Typography sx={{px: 2}}>
                          zinc y ??cidos grasos omega 3 y 6 para ayudar a apoyar una piel saludable y un pelo bonito y
                          brillante. <br/>
                          DIENTES Y HUESOS SALUDABLES. Con minerales esenciales y vitaminas para ayudar a apoyar unos
                          dientes y huesos saludables.
                        </Typography>
                        <Box display='flex' alignItems='flex-end' flexWrap='wrap' justifyContent='center' mt={5}>
                          <Box mt={!largeScreen && 4}>
                            <Typography align='center'>ESTRELLAS</Typography>
                            <Box display='flex'>
                              {
                                [true, true, true, true, false].map(value => {
                                  if (value) {
                                    return <Box component='img' src={pinkPatita}/>
                                  } else {
                                    return <Box component='img' src={disabledPatita}/>
                                  }
                                })
                              }
                            </Box>
                          </Box>
                          <Typography fontSize='40px' sx={{color: '#662D80', mx: 5}}>10.99$</Typography>
                        </Box>
                      </>
                    }
                  </Box>
                </Box>
                {!largeScreen &&
                  <Box mt={5}>
                    <Typography>
                      NUTRICI??N ADAPTADA. Nutrici??n 100% completa y equilibrada adaptada para tu perro adulto. Con
                      ingredientes naturales seleccionados y sin colorantes, aromatizantes ni conservantes
                      artificiales a??adidos. <br/>
                      DIGESTI??N SALUDABLE apoyada por una combinaci??n espec??fica de fibras y achicoria, un
                      prebi??tico natural que se ha demostrado que ayuda a mejorar la salud digestiva.
                      M??SCULOS FUERTES. Con prote??na para apoyar unos m??sculos fuertes.
                    </Typography>
                    <br/>
                    <Typography>
                      zinc y ??cidos grasos omega 3 y 6 para ayudar a apoyar una piel saludable y un pelo bonito y
                      brillante. <br/>
                      DIENTES Y HUESOS SALUDABLES. Con minerales esenciales y vitaminas para ayudar a apoyar unos
                      dientes y huesos saludables.
                    </Typography>
                    <Box display='flex' alignItems='flex-end' flexWrap='wrap' justifyContent='center' mt={5}>
                      <Box mt={!largeScreen && 4}>
                        <Typography align='center'>ESTRELLAS</Typography>
                        <Box display='flex'>
                          {
                            [true, true, true, true, false].map(value => {
                              if (value) {
                                return <Box component='img' src={pinkPatita}/>
                              } else {
                                return <Box component='img' src={disabledPatita}/>
                              }
                            })
                          }
                        </Box>
                      </Box>
                      <Typography fontSize='40px' sx={{color: '#662D80', mx: 5}}>10.99$</Typography>
                    </Box>
                  </Box>
                }
              </Grid>
              <Grid item xs={12} md={2} alignSelf='center'>
                {
                  largeScreen &&
                  <Box
                    sx={{
                      backgroundColor: '#AD9BBB',
                      marginRight: '-2rem',
                      padding: '2rem',
                      borderTopLeftRadius: 50,
                      borderBottomLeftRadius: 50
                    }}
                  >
                    <Typography fontSize='22px' sx={{color: '#fff'}}>Comprar</Typography>
                  </Box>
                }
                {
                  !largeScreen &&
                  <Box
                    sx={{
                      backgroundColor: '#AD9BBB',
                      padding: '1rem',
                      borderRadius: 50,
                      mt: 5
                    }}
                  >
                    <Typography fontSize='22px' sx={{color: '#fff'}} align='center'>Comprar</Typography>
                  </Box>
                }
              </Grid>
            </Grid>
            <Grid container spacing={largeScreen && 2} sx={{my: 5}}>
              <Grid item xs={12} md={10}>
                <Box display='flex'>
                  <ResponsiveImg
                    src={estefania}
                  />
                  <Box>
                    <Box
                      sx={{
                        backgroundColor: '#AD9BBB',
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
                        PURINA?? ONE?? Mini Perro Adulto h??medo Pollo y Cordero en Salsa
                      </Typography>
                    </Box>
                    {
                      largeScreen &&
                      <>
                        <Typography sx={{px: 2}}>
                          Antioxidantes para una funci??n inmunitaria saludable. <br/>
                          F??cilmente digerible. <br/>
                          Tiernos trocitos para bocas m??s peque??as.
                        </Typography>
                        <Box display='flex' alignItems='flex-end' flexWrap='wrap' justifyContent='center' mt={5}>
                          <Box mt={!largeScreen && 4}>
                            <Typography align='center'>ESTRELLAS</Typography>
                            <Box display='flex'>
                              {
                                [true, true, true, true, false].map(value => {
                                  if (value) {
                                    return <Box component='img' src={pinkPatita}/>
                                  } else {
                                    return <Box component='img' src={disabledPatita}/>
                                  }
                                })
                              }
                            </Box>
                          </Box>
                          <Typography fontSize='40px' sx={{color: '#662D80', mx: 5}}>5.99$</Typography>
                        </Box>
                      </>
                    }
                  </Box>
                </Box>
                {!largeScreen &&
                  <Box mt={5}>
                    <Typography>
                      Antioxidantes para una funci??n inmunitaria saludable. <br/>
                      F??cilmente digerible. <br/>
                      Tiernos trocitos para bocas m??s peque??as.
                    </Typography>
                    <Box display='flex' alignItems='flex-end' flexWrap='wrap' justifyContent='center' mt={5}>
                      <Box mt={!largeScreen && 4}>
                        <Typography align='center'>ESTRELLAS</Typography>
                        <Box display='flex'>
                          {
                            [true, true, true, true, false].map(value => {
                              if (value) {
                                return <Box component='img' src={pinkPatita}/>
                              } else {
                                return <Box component='img' src={disabledPatita}/>
                              }
                            })
                          }
                        </Box>
                      </Box>
                      <Typography fontSize='40px' sx={{color: '#662D80', mx: 5}}>5.99$</Typography>
                    </Box>
                  </Box>
                }
              </Grid>
              <Grid item xs={12} md={2} alignSelf='center'>
                {
                  largeScreen &&
                  <Box
                    sx={{
                      backgroundColor: '#AD9BBB',
                      marginRight: '-2rem',
                      padding: '2rem',
                      borderTopLeftRadius: 50,
                      borderBottomLeftRadius: 50
                    }}
                  >
                    <Typography fontSize='22px' sx={{color: '#fff'}}>Comprar</Typography>
                  </Box>
                }
                {
                  !largeScreen &&
                  <Box
                    sx={{
                      backgroundColor: '#AD9BBB',
                      padding: '1rem',
                      borderRadius: 50,
                      mt: 5
                    }}
                  >
                    <Typography fontSize='22px' sx={{color: '#fff'}} align='center'>Comprar</Typography>
                  </Box>
                }
              </Grid>
            </Grid>
            <Grid container spacing={largeScreen && 2} sx={{my: 5}}>
              <Grid item xs={12} md={10}>
                <Box display='flex'>
                  <ResponsiveImg
                    src={estefania}
                  />
                  <Box>
                    <Box
                      sx={{
                        backgroundColor: '#AD9BBB',
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
                        PURINA?? PRO PLAN?? Perro Adulto Mediano con Digesti??n Sensible rico en Cordero
                      </Typography>
                    </Box>
                    {
                      largeScreen &&
                      <>
                        <Typography sx={{px: 2}}>
                          F??cilmente digerible para perros con una digesti??n sensible.
                          Contiene prebi??ticos demostrado cient??ficamente que incrementan las bifidobacterias para un
                          mejor equilibrio de la microflora intestinal. <br/>
                          Con ingredientes espec??ficos para ayudar a mantener la calidad de las heces y una funci??n
                          intestinal saludable. <br/>
                          Contiene prote??nas de alta calidad del cordero.
                        </Typography>
                        <Box display='flex' alignItems='flex-end' flexWrap='wrap' justifyContent='center' mt={5}>
                          <Box mt={!largeScreen && 4}>
                            <Typography align='center'>ESTRELLAS</Typography>
                            <Box display='flex'>
                              {
                                [true, true, true, true, false].map(value => {
                                  if (value) {
                                    return <Box component='img' src={pinkPatita}/>
                                  } else {
                                    return <Box component='img' src={disabledPatita}/>
                                  }
                                })
                              }
                            </Box>
                          </Box>
                          <Typography fontSize='40px' sx={{color: '#662D80', mx: 5}}>12.87$</Typography>
                        </Box>
                      </>
                    }
                  </Box>
                </Box>
                {!largeScreen &&
                  <Box mt={5}>
                    <Typography>
                      F??cilmente digerible para perros con una digesti??n sensible.
                      Contiene prebi??ticos demostrado cient??ficamente que incrementan las bifidobacterias para un
                      mejor equilibrio de la microflora intestinal. <br/>
                      Con ingredientes espec??ficos para ayudar a mantener la calidad de las heces y una funci??n
                      intestinal saludable. <br/>
                      Contiene prote??nas de alta calidad del cordero.
                    </Typography>
                    <Box display='flex' alignItems='flex-end' flexWrap='wrap' justifyContent='center' mt={5}>
                      <Box mt={!largeScreen && 4}>
                        <Typography align='center'>ESTRELLAS</Typography>
                        <Box display='flex'>
                          {
                            [true, true, true, true, false].map(value => {
                              if (value) {
                                return <Box component='img' src={pinkPatita}/>
                              } else {
                                return <Box component='img' src={disabledPatita}/>
                              }
                            })
                          }
                        </Box>
                      </Box>
                      <Typography fontSize='40px' sx={{color: '#662D80', mx: 5}}>12.87$</Typography>
                    </Box>
                  </Box>
                }
              </Grid>
              <Grid item xs={12} md={2} alignSelf='center'>
                {
                  largeScreen &&
                  <Box
                    sx={{
                      backgroundColor: '#AD9BBB',
                      marginRight: '-2rem',
                      padding: '2rem',
                      borderTopLeftRadius: 50,
                      borderBottomLeftRadius: 50
                    }}
                  >
                    <Typography fontSize='22px' sx={{color: '#fff'}}>Comprar</Typography>
                  </Box>
                }
                {
                  !largeScreen &&
                  <Box
                    sx={{
                      backgroundColor: '#AD9BBB',
                      padding: '1rem',
                      borderRadius: 50,
                      mt: 5
                    }}
                  >
                    <Typography fontSize='22px' sx={{color: '#fff'}} align='center'>Comprar</Typography>
                  </Box>
                }
              </Grid>
            </Grid>
            <Grid container spacing={largeScreen && 2} sx={{my: 5}}>
              <Grid item xs={12} md={10}>
                <Box display='flex'>
                  <ResponsiveImg
                    src={estefania}
                  />
                  <Box>
                    <Box
                      sx={{
                        backgroundColor: '#AD9BBB',
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
                        PURINA?? PRO PLAN?? DUO D??LICE Perro Adulto Peque??o rico en Buey
                      </Typography>
                    </Box>
                    {
                      largeScreen &&
                      <>
                        <Typography sx={{px: 2}}>
                          Formulado para un cuidado dental total. <br/>
                          Una combinaci??n de nutrientes clave que ayuda a mantener unas articulaciones saludables para
                          el estilo de vida activo de tu perro. <br/>
                          Sin colorantes a??adidos y contiene antioxidantes de origen natural. <br/>
                          Ayuda a mantener el pelaje de tu perro bonito y brillante, desde la ra??z hasta la punta.
                        </Typography>
                        <Box display='flex' alignItems='flex-end' flexWrap='wrap' justifyContent='center' mt={5}>
                          <Box mt={!largeScreen && 4}>
                            <Typography align='center'>ESTRELLAS</Typography>
                            <Box display='flex'>
                              {
                                [true, true, true, true, false].map(value => {
                                  if (value) {
                                    return <Box component='img' src={pinkPatita}/>
                                  } else {
                                    return <Box component='img' src={disabledPatita}/>
                                  }
                                })
                              }
                            </Box>
                          </Box>
                          <Typography fontSize='40px' sx={{color: '#662D80', mx: 5}}>10.22$</Typography>
                        </Box>
                      </>
                    }
                  </Box>
                </Box>
                {!largeScreen &&
                  <Box mt={5}>
                    <Typography>
                      Formulado para un cuidado dental total. <br/>
                      Una combinaci??n de nutrientes clave que ayuda a mantener unas articulaciones saludables para
                      el estilo de vida activo de tu perro. <br/>
                      Sin colorantes a??adidos y contiene antioxidantes de origen natural. <br/>
                      Ayuda a mantener el pelaje de tu perro bonito y brillante, desde la ra??z hasta la punta.
                    </Typography>
                    <Box display='flex' alignItems='flex-end' flexWrap='wrap' justifyContent='center' mt={5}>
                      <Box mt={!largeScreen && 4}>
                        <Typography align='center'>ESTRELLAS</Typography>
                        <Box display='flex'>
                          {
                            [true, true, true, true, false].map(value => {
                              if (value) {
                                return <Box component='img' src={pinkPatita}/>
                              } else {
                                return <Box component='img' src={disabledPatita}/>
                              }
                            })
                          }
                        </Box>
                      </Box>
                      <Typography fontSize='40px' sx={{color: '#662D80', mx: 5}}>10.22$</Typography>
                    </Box>
                  </Box>
                }
              </Grid>
              <Grid item xs={12} md={2} alignSelf='center'>
                {
                  largeScreen &&
                  <Box
                    sx={{
                      backgroundColor: '#AD9BBB',
                      marginRight: '-2rem',
                      padding: '2rem',
                      borderTopLeftRadius: 50,
                      borderBottomLeftRadius: 50
                    }}
                  >
                    <Typography fontSize='22px' sx={{color: '#fff'}}>Comprar</Typography>
                  </Box>
                }
                {
                  !largeScreen &&
                  <Box
                    sx={{
                      backgroundColor: '#AD9BBB',
                      padding: '1rem',
                      borderRadius: 50,
                      mt: 5
                    }}
                  >
                    <Typography fontSize='22px' sx={{color: '#fff'}} align='center'>Comprar</Typography>
                  </Box>
                }
              </Grid>
            </Grid>
            <Grid container spacing={largeScreen && 2} sx={{my: 5}}>
              <Grid item xs={12} md={10}>
                <Box display='flex'>
                  <ResponsiveImg
                    src={estefania}
                  />
                  <Box>
                    <Box
                      sx={{
                        backgroundColor: '#AD9BBB',
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
                        PURINA?? PRO PLAN?? EXPERT CARE NUTRITION PERRO Adulto 7+ Pollo
                      </Typography>
                    </Box>
                    {
                      largeScreen &&
                      <>
                        <Typography sx={{px: 2}}>
                          Ayuda a reforzar la respuesta inmunitaria. <br/>
                          Proporciona una fuente de energ??a alternativa para el cerebro para favorecer una buena funci??n
                          cognitiva, ayudando a incrementar los niveles de actividad, vivacidad e interacci??n durante el
                          juego en perros de edad avanzada. <br/>
                          Favorece un envejecimiento saludable gracias a niveles espec??ficos de prote??nas y grasas
                          adaptados a las necesidades de los perros s??nior. <br/>
                          Una combinaci??n de nutrientes clave tales como ??cidos grasos omega 3 y un contenido elevado de
                          prote??na que ayuda a mantener unas articulaciones saludables. <br/>
                        </Typography>
                        <Box display='flex' alignItems='flex-end' flexWrap='wrap' justifyContent='center' mt={5}>
                          <Box mt={!largeScreen && 4}>
                            <Typography align='center'>ESTRELLAS</Typography>
                            <Box display='flex'>
                              {
                                [true, true, true, true, false].map(value => {
                                  if (value) {
                                    return <Box component='img' src={pinkPatita}/>
                                  } else {
                                    return <Box component='img' src={disabledPatita}/>
                                  }
                                })
                              }
                            </Box>
                          </Box>
                          <Typography fontSize='40px' sx={{color: '#662D80', mx: 5}}>16.45$</Typography>
                        </Box>
                      </>
                    }
                  </Box>
                </Box>
                {!largeScreen &&
                  <Box mt={5}>
                    <Typography>
                      Ayuda a reforzar la respuesta inmunitaria. <br/>
                      Proporciona una fuente de energ??a alternativa para el cerebro para favorecer una buena funci??n
                      cognitiva, ayudando a incrementar los niveles de actividad, vivacidad e interacci??n durante el
                      juego en perros de edad avanzada. <br/>
                      Favorece un envejecimiento saludable gracias a niveles espec??ficos de prote??nas y grasas
                      adaptados a las necesidades de los perros s??nior. <br/>
                      Una combinaci??n de nutrientes clave tales como ??cidos grasos omega 3 y un contenido elevado de
                      prote??na que ayuda a mantener unas articulaciones saludables. <br/>
                    </Typography>
                    <Box display='flex' alignItems='flex-end' flexWrap='wrap' justifyContent='center' mt={5}>
                      <Box mt={!largeScreen && 4}>
                        <Typography align='center'>ESTRELLAS</Typography>
                        <Box display='flex'>
                          {
                            [true, true, true, true, false].map(value => {
                              if (value) {
                                return <Box component='img' src={pinkPatita}/>
                              } else {
                                return <Box component='img' src={disabledPatita}/>
                              }
                            })
                          }
                        </Box>
                      </Box>
                      <Typography fontSize='40px' sx={{color: '#662D80', mx: 5}}>16.45$</Typography>
                    </Box>
                  </Box>
                }
              </Grid>
              <Grid item xs={12} md={2} alignSelf='center'>
                {
                  largeScreen &&
                  <Box
                    sx={{
                      backgroundColor: '#AD9BBB',
                      marginRight: '-2rem',
                      padding: '2rem',
                      borderTopLeftRadius: 50,
                      borderBottomLeftRadius: 50
                    }}
                  >
                    <Typography fontSize='22px' sx={{color: '#fff'}}>Comprar</Typography>
                  </Box>
                }
                {
                  !largeScreen &&
                  <Box
                    sx={{
                      backgroundColor: '#AD9BBB',
                      padding: '1rem',
                      borderRadius: 50,
                      mt: 5
                    }}
                  >
                    <Typography fontSize='22px' sx={{color: '#fff'}} align='center'>Comprar</Typography>
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
