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

export default function VeterinariansComponent() {
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
                        sx={{color: '#fff', marginTop: '-2rem'}}>Veterinarios</Typography>


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
                        Nuria Nieto Rius
                      </Typography>
                    </Box>
                    {
                      largeScreen &&
                      <>
                        <Typography sx={{px: 2}}>
                          Veterinaria colegiada y especializada en anestesiolog??a. Tengo m??s de 8 a??os de experiencia
                          trabajando con caninos y felinos de peque??o tama??o para diagnosticar, tratar y asegurar la
                          salud del animal. Me esmero en educar a los propietarios sobre el cuidado adecuado y estilos
                          de vida saludables para sus mascotas. Trabajo en colaboraci??n dentro de un equipo para
                          garantizar el m??s alto nivel de atenci??n para las mascotas.
                        </Typography>
                        <br/>

                        <Grid container spacing={2} sx={{mt: 3}}>
                          <Grid item xs={7}>
                            <Typography>
                              Desarrollo personal en la toma de decisiones, hip??tesis y determinar diagn??sticos a partir
                              de suposiciones iniciales
                              Experiencia en la direcci??n y supervisi??n de personal en cl??nicas de esterilizaci??n
                              Excelentes habilidades de diagn??stico
                              Habilidad para generar planes de tratamiento efectivos para recuperaciones r??pidas y
                              econ??micas
                            </Typography>
                          </Grid>
                          <Grid item xs={5}>
                            <Box display='flex' alignItems='center' justifyContent='center'>
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
                          </Grid>
                        </Grid>
                      </>
                    }
                  </Box>
                </Box>
                {
                  !largeScreen &&
                  <>
                    <Typography sx={{px: 2, mt: 2}}>
                      Veterinaria colegiada y especializada en anestesiolog??a. Tengo m??s de 8 a??os de experiencia
                      trabajando con caninos y felinos de peque??o tama??o para diagnosticar, tratar y asegurar la salud
                      del animal. Me esmero en educar a los propietarios sobre el cuidado adecuado y estilos de vida
                      saludables para sus mascotas. Trabajo en colaboraci??n dentro de un equipo para garantizar el m??s
                      alto nivel de atenci??n para las mascotas.
                    </Typography>
                    <br/>

                    <Box mt={3}>
                      <Typography sx={{px: 2}}>
                        Desarrollo personal en la toma de decisiones, hip??tesis y determinar diagn??sticos a partir de
                        suposiciones iniciales
                        Experiencia en la direcci??n y supervisi??n de personal en cl??nicas de esterilizaci??n
                        Excelentes habilidades de diagn??stico
                        Habilidad para generar planes de tratamiento efectivos para recuperaciones r??pidas y econ??micas
                      </Typography>
                      <Box mt={!largeScreen && 4}>
                        <Typography align='center'>ESTRELLAS</Typography>
                        <Box display='flex' justifyContent='center'>
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
              </Grid>
              <Grid item xs={12} md={2} alignSelf='center'>
                {
                  largeScreen &&
                  <Box
                    sx={{
                      backgroundColor: 'primary.main',
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
                      backgroundColor: 'primary.main',
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
                        Antonio G??mez Delgado
                      </Typography>
                    </Box>
                    {
                      largeScreen &&
                      <>
                        <Typography sx={{px: 2}}>
                          Licenciado en medicina veterinaria, colegiado en Barcelona y especializado en urgencias de
                          animales de compa????a. Poseo experiencia en curaciones de emergencia, gesti??n de dosis diarias
                          de medicamentos, control de s??ntomas y trato con propietarios. Mi objetivo es trabajar en una
                          cl??nica veterinaria especializada en animales de compa????a y nutrirme de mis mentores con miras
                          a convertirme en un excelente profesional de la salud animal.
                        </Typography>
                        <br/>

                        <Grid container spacing={2} sx={{mt: 3}}>
                          <Grid item xs={7}>
                            <Typography>
                              Experiencia en tratamientos de urgencia
                              Conocimientos de anestesiolog??a
                              Investigaci??n y pensamiento estrat??gico
                              Excelentes habilidades interpersonales
                            </Typography>
                          </Grid>
                          <Grid item xs={5}>
                            <Box display='flex' alignItems='center' justifyContent='center'>
                              <Box>
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
                          </Grid>
                        </Grid>
                      </>
                    }
                  </Box>
                </Box>
                {
                  !largeScreen &&
                  <>
                    <Typography sx={{px: 2, mt: 2}}>
                      Licenciado en medicina veterinaria, colegiado en Barcelona y especializado en urgencias de
                      animales de compa????a. Poseo experiencia en curaciones de emergencia, gesti??n de dosis diarias de
                      medicamentos, control de s??ntomas y trato con propietarios. Mi objetivo es trabajar en una cl??nica
                      veterinaria especializada en animales de compa????a y nutrirme de mis mentores con miras a
                      convertirme en un excelente profesional de la salud animal.
                    </Typography>
                    <br/>

                    <Box mt={3}>
                      <Typography sx={{px: 2}}>
                        Experiencia en tratamientos de urgencia
                        Conocimientos de anestesiolog??a
                        Investigaci??n y pensamiento estrat??gico
                        Excelentes habilidades interpersonales
                      </Typography>
                      <Box mt={4}>
                        <Typography align='center'>ESTRELLAS</Typography>
                        <Box display='flex' justifyContent='center'>
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
              </Grid>
              <Grid item xs={12} md={2} alignSelf='center'>
                {
                  largeScreen &&
                  <Box
                    sx={{
                      backgroundColor: 'primary.main',
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
                      backgroundColor: 'primary.main',
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
                        Laura Mart??nez
                      </Typography>
                    </Box>
                    {
                      largeScreen &&
                      <>
                        <Typography sx={{px: 2}}>
                          Veterinaria especializada en animales dom??sticos (perros, gatos y p??jaros). Esterilizaci??n de
                          gatos y perros, vacunaci??n, tratamiento de enfermedades, atenci??n en urgencias, cirug??a menor.
                          Tenci??n en urgencias, cirug??a gastrointestinal, vacunaci??n, atenci??n telef??nica a familias.
                        </Typography>
                        <br/>

                        <Grid container spacing={2} sx={{mt: 3}}>
                          <Grid item xs={7}>
                            <Typography>
                              Me considero una profesional emp??tica y con pasi??n por lo que hace. Me entusiasma mi
                              trabajo y por ello contin??o form??ndome para ofrecer la mejor atenci??n a gatos, perros y
                              otros animales dom??sticos. Me he especializado en vacunaci??n, tratamiento de enfermedades
                              v??ricas y esterilizaci??n.
                            </Typography>
                          </Grid>
                          <Grid item xs={5}>
                            <Box display='flex' alignItems='center' justifyContent='center'>
                              <Box>
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
                          </Grid>
                        </Grid>
                      </>
                    }
                  </Box>
                </Box>
                {
                  !largeScreen &&
                  <>
                    <Typography sx={{px: 2, mt: 2}}>
                      Veterinaria especializada en animales dom??sticos (perros, gatos y p??jaros). Esterilizaci??n de
                      gatos y perros, vacunaci??n, tratamiento de enfermedades, atenci??n en urgencias, cirug??a menor.
                      Tenci??n en urgencias, cirug??a gastrointestinal, vacunaci??n, atenci??n telef??nica a familias.
                    </Typography>
                    <br/>

                    <Box mt={3}>
                      <Typography sx={{px: 2}}>
                        Me considero una profesional emp??tica y con pasi??n por lo que hace. Me entusiasma mi trabajo y
                        por ello contin??o form??ndome para ofrecer la mejor atenci??n a gatos, perros y otros animales
                        dom??sticos. Me he especializado en vacunaci??n, tratamiento de enfermedades v??ricas y
                        esterilizaci??n.
                      </Typography>
                      <Box mt={4}>
                        <Typography align='center'>ESTRELLAS</Typography>
                        <Box display='flex' justifyContent='center'>
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
              </Grid>
              <Grid item xs={12} md={2} alignSelf='center'>
                {
                  largeScreen &&
                  <Box
                    sx={{
                      backgroundColor: 'primary.main',
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
                      backgroundColor: 'primary.main',
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
                        Mar??a Ch??vez
                      </Typography>
                    </Box>
                    {
                      largeScreen &&
                      <>
                        <Typography sx={{px: 2}}>
                          ??Hola! Me llamo Mar??a, soy una persona joven que se declara amante de los animales. Dedicar
                          mis conocimientos, experiencia, habilidades y energ??a al tratamiento y bienestar de los
                          animales y trabajar para una instituci??n reputada por su excelencia en el fomento del cuidado
                          de los animales.
                        </Typography>
                        <br/>

                        <Grid container spacing={2} sx={{mt: 3}}>
                          <Grid item xs={7}>
                            <Typography>
                              Amplia experiencia en el tratamiento y diagn??stico de diversas enfermedades y lesiones en
                              animales
                              Excelentes habilidades de relaciones p??blicas, habilidades de comunicaci??n y habilidades
                              interpersonales
                              Experiencia en la direcci??n y supervisi??n de personal en cl??nicas de esterilizaci??n y
                              castraci??n
                            </Typography>
                          </Grid>
                          <Grid item xs={5}>
                            <Box display='flex' alignItems='center' justifyContent='center'>
                              <Box>
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
                          </Grid>
                        </Grid>
                      </>
                    }
                  </Box>
                </Box>
                {
                  !largeScreen &&
                  <>
                    <Typography sx={{px: 2, mt: 2}}>
                      Veterinaria especializada en animales dom??sticos (perros, gatos y p??jaros). Esterilizaci??n de
                      gatos y perros, vacunaci??n, tratamiento de enfermedades, atenci??n en urgencias, cirug??a menor.
                      Tenci??n en urgencias, cirug??a gastrointestinal, vacunaci??n, atenci??n telef??nica a familias.
                    </Typography>
                    <br/>

                    <Box mt={3}>
                      <Typography sx={{px: 2}}>
                        Me considero una profesional emp??tica y con pasi??n por lo que hace. Me entusiasma mi trabajo y
                        por ello contin??o form??ndome para ofrecer la mejor atenci??n a gatos, perros y otros animales
                        dom??sticos. Me he especializado en vacunaci??n, tratamiento de enfermedades v??ricas y
                        esterilizaci??n.
                      </Typography>
                      <Box mt={4}>
                        <Typography align='center'>ESTRELLAS</Typography>
                        <Box display='flex' justifyContent='center'>
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
              </Grid>
              <Grid item xs={12} md={2} alignSelf='center'>
                {
                  largeScreen &&
                  <Box
                    sx={{
                      backgroundColor: 'primary.main',
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
                      backgroundColor: 'primary.main',
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


          <Box display='flex' justifyContent='center' my={3}>
            <Box p={2}
                 sx={{
                   backgroundColor: '#fff',
                   p: 5,
                   width: 'fit-content',
                   height: 'fit-content',
                   borderRadius: 50
                 }}
            >
              <Typography
                align='center'
                variant='h1'
                fontSize='34px'>
                SI hay algun tipo de maltrato hacia la mascota. <br/>
                <span style={{color: '#AC272D'}}>??denunciar!</span>
              </Typography>
            </Box>
          </Box>
        </>
      </Page>
    </Transitions>
  )
}
