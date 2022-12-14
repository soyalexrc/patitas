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
import orangePatita from '@/assets/icons/patita-orange.png';

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

export default function DogToysComponent() {
  const navigate = useNavigate();
  const largeScreen = useMediaQuery((theme: any) => theme.breakpoints.up('md'))


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
            <Typography align='center' variant='h1' fontSize='54px'
                        sx={{color: '#fff', marginTop: '-2rem'}}>Peluquerias</Typography>


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
                        backgroundColor: 'primary.main',
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
                        La Maskoter??a
                      </Typography>
                    </Box>
                    {
                      largeScreen &&
                      <>
                        <Typography sx={{px: 2}}>
                          Descripci??n: Peluquer??as Caninas, Tiendas de Mascotas, Tiendas de Animales, Venta de
                          Perrarina, Productos para Pulgas, Perros, Spa Canino, Peluquer??as de Perros, Peluquer??as para
                          Mascotas, Alimentos para Perros
                        </Typography>
                        <br/>

                        <Typography sx={{px: 2}}>
                          Calle 195, con Av. 93, C.C. Las Chimeneas, Local 307 (Frente a Zoom), Las Chimeneas, Valencia
                        </Typography>
                        <Box display='flex' justifyContent='center' mt={5}>
                          <Box mt={!largeScreen && 4}>
                            <Typography align='center'>ESTRELLAS</Typography>
                            <Box display='flex'>
                              {
                                [true, true, true, false, false].map(value => {
                                  if (value) {
                                    return <Box component='img' src={orangePatita}/>
                                  } else {
                                    return <Box component='img' src={disabledPatita}/>
                                  }
                                })
                              }
                            </Box>
                          </Box>
                        </Box>
                      </>
                    }
                  </Box>
                </Box>
                {!largeScreen &&
                  <Box mt={5}>
                    <Typography>
                      Descripci??n: Peluquer??as Caninas, Tiendas de Mascotas, Tiendas de Animales, Venta de
                      Perrarina, Productos para Pulgas, Perros, Spa Canino, Peluquer??as de Perros, Peluquer??as para
                      Mascotas, Alimentos para Perros
                    </Typography>
                    <br/>

                    <Typography>
                      Calle 195, con Av. 93, C.C. Las Chimeneas, Local 307 (Frente a Zoom), Las Chimeneas, Valencia
                    </Typography>
                    <Box display='flex' justifyContent='center' mt={5}>
                      <Box mt={!largeScreen && 4}>
                        <Typography align='center'>ESTRELLAS</Typography>
                        <Box display='flex'>
                          {
                            [true, true, true, false, false].map(value => {
                              if (value) {
                                return <Box component='img' src={orangePatita}/>
                              } else {
                                return <Box component='img' src={disabledPatita}/>
                              }
                            })
                          }
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                }
              </Grid>
              <Grid item xs={12} md={2} alignSelf='center'>
                {
                  largeScreen &&
                  <Box
                    sx={{
                      backgroundColor: '#F7EE80',
                      marginRight: '-2rem',
                      padding: '2rem',
                      borderTopLeftRadius: 50,
                      borderBottomLeftRadius: 50
                    }}
                  >
                    <Typography fontSize='22px' color='primary.main'>Contactar</Typography>
                  </Box>
                }
                {
                  !largeScreen &&
                  <Box
                    sx={{
                      backgroundColor: '#F7EE80',
                      padding: '1rem',
                      borderRadius: 50,
                      mt: 5
                    }}
                  >
                    <Typography fontSize='22px' color='primary.main' align='center'>Contactar</Typography>
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
                        backgroundColor: 'primary.main',
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
                        Patas y Colas Shop
                      </Typography>
                    </Box>
                    {
                      largeScreen &&
                      <>
                        <Typography sx={{px: 2}}>
                          Descripci??n: Peluquer??as Caninas, Corte de U??as, Peluquer??as de Perros, Comida Canina,
                          Alimentos para Mascotas Asistencia Primaria Canina, Peluquer??a para Mascotas, Petshop,
                          Limpieza de O??dos, Ba??os
                        </Typography>
                        <br/>

                        <Typography sx={{px: 2}}>
                          Av. Andr??s Eloy Blanco, C.C. Shoping Center, Nivel 1, Local 257, Prebo, Valencia
                        </Typography>
                        <Box display='flex' justifyContent='center' mt={5}>
                          <Box mt={!largeScreen && 4}>
                            <Typography align='center'>ESTRELLAS</Typography>
                            <Box display='flex'>
                              {
                                [true, true, true, true, true].map(value => {
                                  if (value) {
                                    return <Box component='img' src={orangePatita}/>
                                  } else {
                                    return <Box component='img' src={disabledPatita}/>
                                  }
                                })
                              }
                            </Box>
                          </Box>
                        </Box>
                      </>
                    }
                  </Box>
                </Box>
                {!largeScreen &&
                  <Box mt={5}>
                    <Typography>
                      Descripci??n: Peluquer??as Caninas, Corte de U??as, Peluquer??as de Perros, Comida Canina, Alimentos
                      para Mascotas Asistencia Primaria Canina, Peluquer??a para Mascotas, Petshop, Limpieza de O??dos,
                      Ba??os

                    </Typography>
                    <br/>

                    <Typography>
                      Av. Andr??s Eloy Blanco, C.C. Shoping Center, Nivel 1, Local 257, Prebo, Valencia
                    </Typography>
                    <Box display='flex' justifyContent='center' mt={5}>
                      <Box mt={!largeScreen && 4}>
                        <Typography align='center'>ESTRELLAS</Typography>
                        <Box display='flex'>
                          {
                            [true, true, true, true, true].map(value => {
                              if (value) {
                                return <Box component='img' src={orangePatita}/>
                              } else {
                                return <Box component='img' src={disabledPatita}/>
                              }
                            })
                          }
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                }
              </Grid>
              <Grid item xs={12} md={2} alignSelf='center'>
                {
                  largeScreen &&
                  <Box
                    sx={{
                      backgroundColor: '#F7EE80',
                      marginRight: '-2rem',
                      padding: '2rem',
                      borderTopLeftRadius: 50,
                      borderBottomLeftRadius: 50
                    }}
                  >
                    <Typography fontSize='22px' color='primary.main'>Contactar</Typography>
                  </Box>
                }
                {
                  !largeScreen &&
                  <Box
                    sx={{
                      backgroundColor: '#F7EE80',
                      padding: '1rem',
                      borderRadius: 50,
                      mt: 5
                    }}
                  >
                    <Typography fontSize='22px' color='primary.main' align='center'>Contactar</Typography>
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
                        backgroundColor: 'primary.main',
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
                        Animalias Pets Shopt
                      </Typography>
                    </Box>
                    {
                      largeScreen &&
                      <>
                        <Typography sx={{px: 2}}>
                          Descripci??n: Peluquer??a Canina, Ba??os para Perros, Gatos, Corte Est??tico, Alimentos para
                          Animales, Peluquer??as Caninas, Peluquer??as para Mascotas, Peluquer??as de Perros, Comida para
                          Animales, Servicio a Domicilio
                        </Typography>
                        <br/>

                        <Typography sx={{px: 2}}>
                          Jose G. Hernandez, Valencia
                        </Typography>
                        <Box display='flex' justifyContent='center' mt={5}>
                          <Box mt={!largeScreen && 4}>
                            <Typography align='center'>ESTRELLAS</Typography>
                            <Box display='flex'>
                              {
                                [true, true, true, true, false].map(value => {
                                  if (value) {
                                    return <Box component='img' src={orangePatita}/>
                                  } else {
                                    return <Box component='img' src={disabledPatita}/>
                                  }
                                })
                              }
                            </Box>
                          </Box>
                        </Box>
                      </>
                    }
                  </Box>
                </Box>
                {!largeScreen &&
                  <Box mt={5}>
                    <Typography>
                      Descripci??n: Peluquer??a Canina, Ba??os para Perros, Gatos, Corte Est??tico, Alimentos para Animales,
                      Peluquer??as Caninas, Peluquer??as para Mascotas, Peluquer??as de Perros, Comida para Animales,
                      Servicio a Domicilio
                    </Typography>
                    <br/>

                    <Typography>
                      Jose G. Hernandez, Valencia
                    </Typography>
                    <Box display='flex' justifyContent='center' mt={5}>
                      <Box mt={!largeScreen && 4}>
                        <Typography align='center'>ESTRELLAS</Typography>
                        <Box display='flex'>
                          {
                            [true, true, true, true, false].map(value => {
                              if (value) {
                                return <Box component='img' src={orangePatita}/>
                              } else {
                                return <Box component='img' src={disabledPatita}/>
                              }
                            })
                          }
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                }
              </Grid>
              <Grid item xs={12} md={2} alignSelf='center'>
                {
                  largeScreen &&
                  <Box
                    sx={{
                      backgroundColor: '#F7EE80',
                      marginRight: '-2rem',
                      padding: '2rem',
                      borderTopLeftRadius: 50,
                      borderBottomLeftRadius: 50
                    }}
                  >
                    <Typography fontSize='22px' color='primary.main'>Contactar</Typography>
                  </Box>
                }
                {
                  !largeScreen &&
                  <Box
                    sx={{
                      backgroundColor: '#F7EE80',
                      padding: '1rem',
                      borderRadius: 50,
                      mt: 5
                    }}
                  >
                    <Typography fontSize='22px' color='primary.main' align='center'>Contactar</Typography>
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
                        backgroundColor: 'primary.main',
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
                        Central Pet
                      </Typography>
                    </Box>
                    {
                      largeScreen &&
                      <>
                        <Typography sx={{px: 2}}>
                          Descripci??n: Venta de alimentos nacionales e importados, accesorios para las mascotas,
                          peluquer??a canina atenci??n personalizada.
                        </Typography>
                        <br/>

                        <Typography sx={{px: 2}}>
                          Av. Carlos Sanda, El Vi??edo, Valencia (Otras Direcciones)
                        </Typography>
                        <Box display='flex' justifyContent='center' mt={5}>
                          <Box mt={!largeScreen && 4}>
                            <Typography align='center'>ESTRELLAS</Typography>
                            <Box display='flex'>
                              {
                                [true, true, true, true, true].map(value => {
                                  if (value) {
                                    return <Box component='img' src={orangePatita}/>
                                  } else {
                                    return <Box component='img' src={disabledPatita}/>
                                  }
                                })
                              }
                            </Box>
                          </Box>
                        </Box>
                      </>
                    }
                  </Box>
                </Box>
                {!largeScreen &&
                  <Box mt={5}>
                    <Typography>
                      Descripci??n: Venta de alimentos nacionales e importados, accesorios para las mascotas, peluquer??a
                      canina atenci??n personalizada.
                    </Typography>
                    <br/>

                    <Typography>
                      Av. Carlos Sanda, El Vi??edo, Valencia (Otras Direcciones)
                    </Typography>
                    <Box display='flex' justifyContent='center' mt={5}>
                      <Box mt={!largeScreen && 4}>
                        <Typography align='center'>ESTRELLAS</Typography>
                        <Box display='flex'>
                          {
                            [true, true, true, true, true].map(value => {
                              if (value) {
                                return <Box component='img' src={orangePatita}/>
                              } else {
                                return <Box component='img' src={disabledPatita}/>
                              }
                            })
                          }
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                }
              </Grid>
              <Grid item xs={12} md={2} alignSelf='center'>
                {
                  largeScreen &&
                  <Box
                    sx={{
                      backgroundColor: '#F7EE80',
                      marginRight: '-2rem',
                      padding: '2rem',
                      borderTopLeftRadius: 50,
                      borderBottomLeftRadius: 50
                    }}
                  >
                    <Typography fontSize='22px' color='primary.main'>Contactar</Typography>
                  </Box>
                }
                {
                  !largeScreen &&
                  <Box
                    sx={{
                      backgroundColor: '#F7EE80',
                      padding: '1rem',
                      borderRadius: 50,
                      mt: 5
                    }}
                  >
                    <Typography fontSize='22px' color='primary.main' align='center'>Contactar</Typography>
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
                        backgroundColor: 'primary.main',
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
                        Fashion Pets
                      </Typography>
                    </Box>
                    {
                      largeScreen &&
                      <>
                        <Typography sx={{px: 2}}>
                          Descripci??n: Peluquer??as Caninas, Venta de Productos para Animales, Perrarina, Vitaminas,
                          Desparasitantes, Vacunas, Peluquer??as para Mascotas, Venta de Juguetes para Animales,
                          Accesorios, Peluquer??as de Perros
                        </Typography>
                        <br/>

                        <Typography sx={{px: 2}}>
                          Av. Principal de Montes de Oca, Edif. El Tri??ngulo, PB, Local A (a 500 Mts. del CNE), Montes
                          de Oca, Valencia </Typography>
                        <Box display='flex' justifyContent='center' mt={5}>
                          <Box mt={!largeScreen && 4}>
                            <Typography align='center'>ESTRELLAS</Typography>
                            <Box display='flex'>
                              {
                                [true, true, true, true, true].map(value => {
                                  if (value) {
                                    return <Box component='img' src={orangePatita}/>
                                  } else {
                                    return <Box component='img' src={disabledPatita}/>
                                  }
                                })
                              }
                            </Box>
                          </Box>
                        </Box>
                      </>
                    }
                  </Box>
                </Box>
                {!largeScreen &&
                  <Box mt={5}>
                    <Typography>
                      Descripci??n: Peluquer??as Caninas, Venta de Productos para Animales, Perrarina, Vitaminas,
                      Desparasitantes, Vacunas, Peluquer??as para Mascotas, Venta de Juguetes para Animales, Accesorios,
                      Peluquer??as de Perros
                    </Typography>
                    <br/>

                    <Typography>
                      Av. Principal de Montes de Oca, Edif. El Tri??ngulo, PB, Local A (a 500 Mts. del CNE), Montes de
                      Oca, Valencia </Typography>
                    <Box display='flex' justifyContent='center' mt={5}>
                      <Box mt={!largeScreen && 4}>
                        <Typography align='center'>ESTRELLAS</Typography>
                        <Box display='flex'>
                          {
                            [true, true, true, true, true].map(value => {
                              if (value) {
                                return <Box component='img' src={orangePatita}/>
                              } else {
                                return <Box component='img' src={disabledPatita}/>
                              }
                            })
                          }
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                }
              </Grid>
              <Grid item xs={12} md={2} alignSelf='center'>
                {
                  largeScreen &&
                  <Box
                    sx={{
                      backgroundColor: '#F7EE80',
                      marginRight: '-2rem',
                      padding: '2rem',
                      borderTopLeftRadius: 50,
                      borderBottomLeftRadius: 50
                    }}
                  >
                    <Typography fontSize='22px' color='primary.main'>Contactar</Typography>
                  </Box>
                }
                {
                  !largeScreen &&
                  <Box
                    sx={{
                      backgroundColor: '#F7EE80',
                      padding: '1rem',
                      borderRadius: 50,
                      mt: 5
                    }}
                  >
                    <Typography fontSize='22px' color='primary.main' align='center'>Contactar</Typography>
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
