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

export default function CatToysComponent() {
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
                        Juguete Laser Para Mascotas Juego
                      </Typography>
                    </Box>
                    {
                      largeScreen &&
                      <>
                        <Typography sx={{px: 2}}>
                          Marca: TIENDA DE MASCOTAS <br/>
                          Materiales: N/A <br/>
                          ID Producto: 3016177 <br/>
                          Piezas por artículo:1 <br/>
                          Peso: 0.58 Lb. <br/>
                          Dimensión embalaje: 4.60 x 0.90 x 6.70 IN
                        </Typography>
                        <br/>

                        <Typography sx={{px: 2}}>
                          Incluye un puntero láser, tres baterías LR44.
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
                          <Typography fontSize='40px' sx={{color: '#662D80', mx: 5}}>10.99$</Typography>
                        </Box>
                      </>
                    }
                  </Box>
                </Box>
                {!largeScreen &&
                  <Box mt={5}>
                    <Typography>
                      Marca: TIENDA DE MASCOTAS <br/>
                      Materiales: N/A <br/>
                      ID Producto: 3016177 <br/>
                      Piezas por artículo:1 <br/>
                      Peso: 0.58 Lb. <br/>
                      Dimensión embalaje: 4.60 x 0.90 x 6.70 IN
                    </Typography>
                    <br/>

                    <Typography>
                      Incluye un puntero láser, tres baterías LR44.
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
                        Rascador interactivo
                      </Typography>
                    </Box>
                    {
                      largeScreen &&
                      <>
                        <Typography sx={{px: 2}}>
                          Papel corrugado <br/>
                          Peso bruto único: <br/>
                          0,36 kg <br/>
                          Color: <br/>
                          Marrón claro <br/>
                          Tamaño Plegable: <br/>
                          96*108mm <br/>
                          Abrir la talla: <br/>
                          108*220mm <br/>
                          Características del producto: <br/>
                          1. Engrosado encriptado y papel corrugado, duradero, hueco estrecho, resistente al desgaste y
                          a los arañazos 2. Malla de panal. <br/>
                          Diseño, Unión de alta presión, no es fácil de deformar.
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
                          <Typography fontSize='40px' sx={{color: '#662D80', mx: 5}}>55.60$</Typography>
                        </Box>
                      </>
                    }
                  </Box>
                </Box>
                {!largeScreen &&
                  <Box mt={5}>
                    <Typography>
                      Papel corrugado <br/>
                      Peso bruto único: <br/>
                      0,36 kg <br/>
                      Color: <br/>
                      Marrón claro <br/>
                      Tamaño Plegable: <br/>
                      96*108mm <br/>
                      Abrir la talla: <br/>
                      108*220mm <br/>
                      Características del producto: <br/>
                      1. Engrosado encriptado y papel corrugado, duradero, hueco estrecho, resistente al desgaste y
                      a los arañazos 2. Malla de panal. <br/>
                      Diseño, Unión de alta presión, no es fácil de deformar.
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
                      <Typography fontSize='40px' sx={{color: '#662D80', mx: 5}}>55.60$</Typography>
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
                        Rascador de madera para gatos
                      </Typography>
                    </Box>
                    {
                      largeScreen &&
                      <>
                        <Typography sx={{px: 2}}>
                          Rascador de madera para gatos, cuerda de sisal, Bola de rascado tridimensional, amoladora de
                          garras, marco de escalada, juguete
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
                          <Typography fontSize='40px' sx={{color: '#662D80', mx: 5}}>15.00$</Typography>
                        </Box>
                      </>
                    }
                  </Box>
                </Box>
                {!largeScreen &&
                  <Box mt={5}>
                    <Typography>
                      Rascador de madera para gatos, cuerda de sisal, Bola de rascado tridimensional, amoladora de
                      garras, marco de escalada, juguete
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
                      <Typography fontSize='40px' sx={{color: '#662D80', mx: 5}}>15.00$</Typography>
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
                        Molino de viento juguete de gato
                      </Typography>
                    </Box>
                    {
                      largeScreen &&
                      <>
                        <Typography sx={{ px: 2 }}>
                          Juguetes Para Mascotas de nuevo diseño, fabricantes creativos, limpieza Oral, molino de viento
                          interactivo, juguete para gatos
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
                          <Typography fontSize='40px' sx={{color: '#662D80', mx: 5}}>17.58$</Typography>
                        </Box>
                      </>
                    }
                  </Box>
                </Box>
                {!largeScreen &&
                  <Box mt={5}>
                    <Typography>
                      Juguetes Para Mascotas de nuevo diseño, fabricantes creativos, limpieza Oral, molino de viento
                      interactivo, juguete para gatos
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
                      <Typography fontSize='40px' sx={{color: '#662D80', mx: 5}}>17.58$</Typography>
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
                        Rascador de Cartón
                      </Typography>
                    </Box>
                    {
                      largeScreen &&
                      <>
                        <Typography sx={{ px: 2 }}>
                          Nido de gato rascador de Sisal de buena calidad, juguete para casa de juego, percha, gatos, 2022
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
                          <Typography fontSize='40px' sx={{color: '#662D80', mx: 5}}>11.23$</Typography>
                        </Box>
                      </>
                    }
                  </Box>
                </Box>
                {!largeScreen &&
                  <Box mt={5}>
                    <Typography>
                      Nido de gato rascador de Sisal de buena calidad, juguete para casa de juego, percha, gatos, 2022
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
                      <Typography fontSize='40px' sx={{color: '#662D80', mx: 5}}>11.23$</Typography>
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
