import React from 'react';
import {useNavigate} from 'react-router-dom';
import Page from "@/shared/components/Page";
import {Box, IconButton, Typography, Grid, useMediaQuery} from "@mui/material";
import Transitions from "@/shared/components/Transitions";
import logo from "@/assets/images/logo-patitas.png";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import estefania from '@/assets/images/estefania-garcia.png';
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

export default function CatFoodComponent() {
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
                        sx={{color: '#fff', marginTop: '-2rem'}}>Gatarina</Typography>


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
                        Gatarina Mirringo X 8kg
                      </Typography>
                    </Box>
                    {
                      largeScreen &&
                      <>
                        <Typography sx={{px: 2}}>
                          Mirringo Alimento para Gatos 8 kg Ayuda en la nutrición, Crecimiento, desarrollo Mantenimiento
                          y Lactancia para todo tipo De raza
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
                          <Typography fontSize='40px' sx={{color: '#662D80', mx: 5}}>15.99$</Typography>
                        </Box>
                      </>
                    }
                  </Box>
                </Box>
                {!largeScreen &&
                  <Box mt={5}>
                    <Typography>
                      Mirringo Alimento para Gatos 8 kg Ayuda en la nutrición, Crecimiento, desarrollo Mantenimiento
                      y Lactancia para todo tipo De raza
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
                      <Typography fontSize='40px' sx={{color: '#662D80', mx: 5}}>15.99$</Typography>
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
                        Gatarina Gatsy 17 Kg
                      </Typography>
                    </Box>
                    {
                      largeScreen &&
                      <>
                        <Typography sx={{px: 2}}>
                          Sabores Caseros es un rico alimento completo y balanceado, que a tu gato le encantará y le
                          dará la nutrición que necesita, ya que contiene el sabor y los nutrientes de la carne o el
                          pescado, mezclados con cereales y vegetales, lo que crea una rica combinación de sabores
                          caseros que lo mantendrán feliz y con una nutrición adecuada.
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
                          <Typography fontSize='40px' sx={{color: '#662D80', mx: 5}}>10.39$</Typography>
                        </Box>
                      </>
                    }
                  </Box>
                </Box>
                {!largeScreen &&
                  <Box mt={5}>
                    <Typography>
                      Sabores Caseros es un rico alimento completo y balanceado, que a tu gato le encantará y le dará la
                      nutrición que necesita, ya que contiene el sabor y los nutrientes de la carne o el pescado,
                      mezclados con cereales y vegetales, lo que crea una rica combinación de sabores caseros que lo
                      mantendrán feliz y con una nutrición adecuada.
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
                      <Typography fontSize='40px' sx={{color: '#662D80', mx: 5}}>10.39$</Typography>
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
                        Happy One Gato Salmon 10kg - Alimento Para Gatos Adultos
                      </Typography>
                    </Box>
                    {
                      largeScreen &&
                      <>
                        <Typography sx={{px: 2}}>
                          Alimento a base de salmón, fuente natural de ácidos grasos omega 3, y con fibras naturales que
                          ayudan a prevenir las bolas de pelo.
                        </Typography>
                        <br/>
                        <Typography sx={{px: 2}}>
                          Contiene un complejo vitamínico que favorece la salud del tracto urinario y el pH óptimo de la
                          orina, así como el buen funcionamiento del sistema cardiovascular. <br/>
                          Elaborado con materias primas de calidad, sin OMG, soja ni trigo, apto para animales
                          sensibles.
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
                      Alimento a base de salmón, fuente natural de ácidos grasos omega 3, y con fibras naturales que
                      ayudan a prevenir las bolas de pelo.
                    </Typography>
                    <br/>
                    <Typography>
                      Contiene un complejo vitamínico que favorece la salud del tracto urinario y el pH óptimo de la
                      orina, así como el buen funcionamiento del sistema cardiovascular. <br/>
                      Elaborado con materias primas de calidad, sin OMG, soja ni trigo, apto para animales
                      sensibles.
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
                        Gatarina Mirringo Gaticos 1kg
                      </Typography>
                    </Box>
                    {
                      largeScreen &&
                      <>
                        <Typography sx={{px: 2}}>
                          Los más pequeños de la casa merecen lo mejor! Mirringo Gaticos 360 Defense es un alimento
                          completo y balanceado que ayuda al sistema inmune de
                          tu gatico y a fortalecer su desarrollo óseo y muscular. Entre sus ingredientes, contamos con
                          un 32% de proteína de pollo, carne o pescado, que son una gran fuente de alimento para tu
                          mirringo, manteniéndolo con vita <br/>
                          calidad y energía. Además para favorecer su desarrollo y aprendizaje incluimos Aceite de
                          hígado de bacalao, prebióticos, vitaminas C y E.
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
                          <Typography fontSize='40px' sx={{color: '#662D80', mx: 5}}>4.28$</Typography>
                        </Box>
                      </>
                    }
                  </Box>
                </Box>
                {!largeScreen &&
                  <Box mt={5}>
                    <Typography>
                      Los más pequeños de la casa merecen lo mejor! Mirringo Gaticos 360 Defense es un alimento
                      completo y balanceado que ayuda al sistema inmune de
                      tu gatico y a fortalecer su desarrollo óseo y muscular. Entre sus ingredientes, contamos con
                      un 32% de proteína de pollo, carne o pescado, que son una gran fuente de alimento para tu
                      mirringo, manteniéndolo con vita <br/>
                      calidad y energía. Además para favorecer su desarrollo y aprendizaje incluimos Aceite de
                      hígado de bacalao, prebióticos, vitaminas C y E.
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
                      <Typography fontSize='40px' sx={{color: '#662D80', mx: 5}}>4.28$</Typography>
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
                        Gatarina Pronature Cat Kitten Chiken Gatitos 2.27 Kg
                      </Typography>
                    </Box>
                    {
                      largeScreen &&
                      <>
                        <Typography sx={{px: 2}}>
                          Inspirada en la dieta natural de los gatos y su preferencia por la carne. La receta instinct
                          contiene el mayor contenido de proteínas de toda la gama Pronature Life. Ya sea que el gato
                          sea un gran cazador o un pasha de salón. Nuestra receta instinct satisfará todas sus
                          necesidades nutricionales y los hará ronronear de felicidad. Es la comida perfecta para los
                          amantes de la carne.
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
                          <Typography fontSize='40px' sx={{color: '#662D80', mx: 5}}>25.45$</Typography>
                        </Box>
                      </>
                    }
                  </Box>
                </Box>
                {!largeScreen &&
                  <Box mt={5}>
                    <Typography>
                      Inspirada en la dieta natural de los gatos y su preferencia por la carne. La receta instinct
                      contiene el mayor contenido de proteínas de toda la gama Pronature Life. Ya sea que el gato sea un
                      gran cazador o un pasha de salón. Nuestra receta instinct satisfará todas sus necesidades
                      nutricionales y los hará ronronear de felicidad. Es la comida perfecta para los amantes de la
                      carne.
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
                      <Typography fontSize='40px' sx={{color: '#662D80', mx: 5}}>25.45$</Typography>
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
