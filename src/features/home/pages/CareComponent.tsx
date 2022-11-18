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

function DogFeeding({largeScreen}) {
  return (
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
              sx={{
                zIndex: 1,
                width: !largeScreen ? '150px' : 'auto',
                height: !largeScreen ? '150px' : 'auto',
              }}
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
                  Sofia Rodriguez
                </Typography>
              </Box>
              {
                largeScreen &&
                <>
                  <Typography sx={{px: 2}}>
                    Tengo 20 años, vivo con mis padres y soy estudiante, amo mucho los animales, tengo 3 perros y un
                    gato y son lo mejor de mi vida. Tengo poca experiencia cuidadndo animales, pero soy muy cariñosa y
                    muy cuidadosa con ellos.
                  </Typography>
                  <br/>

                  <Box display='flex' flexWrap='wrap' alignItems='center' justifyContent='space-between' mt={3}>
                    <Typography sx={{px: 2}}>
                      3 horas de cuidados: entre 5 -15$ <br/>
                      Un día completo o una noche: entre 10-20$ <br/>
                      Cuidados diarios/ precio mensual: hasta 150$
                    </Typography>
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
          {
            !largeScreen &&
            <>
              <Typography sx={{px: 2, mt: 2}}>
                Tengo 20 años, vivo con mis padres y soy estudiante, amo mucho los animales, tengo 3 perros y un gato y
                son lo mejor de mi vida. Tengo poca experiencia cuidadndo animales, pero soy muy cariñosa y muy
                cuidadosa con ellos.
              </Typography>
              <br/>

              <Box mt={3}>
                <Typography sx={{px: 2}}>
                  3 horas de cuidados: entre 5 -15$ <br/>
                  Un día completo o una noche: entre 10-20$ <br/>
                  Cuidados diarios/ precio mensual: hasta 150$
                </Typography>
                <Box mt={!largeScreen && 4}>
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
              component='img'
              src={pamela}
              sx={{
                zIndex: 1,
                width: !largeScreen ? '150px' : 'auto',
                height: !largeScreen ? '150px' : 'auto',
              }}
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
                  Daniel Sanchez
                </Typography>
              </Box>
              {
                largeScreen &&
                <>
                  <Typography sx={{px: 2}}>
                    Mi nombre es Daniel Sanchez, tengo 28 años y soy Paseador de perros apasionado y con conocimientos,
                    con un historial probado de excelente satisfacción de los clientes. Hábil para proporcionar compañía
                    y paseos a las mascotas, manejar varios perros al mismo tiempo y entrenar a los perros.
                  </Typography>
                  <br/>
                  <Typography sx={{px: 2}}>
                    Entrenador de perros certificado con amplio conocimiento de las técnicas de entrenamiento, técnicas
                    de aseo adecuadas, y la anatomía canina. Amante de los animales con gran capacidad de comunicación y
                    habilidades de gestión del tiempo bien desarrolladas.
                  </Typography>

                  <Box display='flex' flexWrap='wrap' alignItems='center' justifyContent='space-between' mt={3}>
                    <Typography sx={{px: 2}}>
                      4-5 horas de cuidados: entre 20-30$ <br/>
                      Un día completo o una noche: entre 25-50$ <br/>
                      Cuidados diarios/ precio mensual: hasta 600$
                    </Typography>
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
          {
            !largeScreen &&
            <>
              <Typography sx={{px: 2, mt: 2}}>
                Mi nombre es Daniel Sanchez, tengo 28 años y soy Paseador de perros apasionado y con conocimientos, con
                un historial probado de excelente satisfacción de los clientes. Hábil para proporcionar compañía y
                paseos a las mascotas, manejar varios perros al mismo tiempo y entrenar a los perros.
              </Typography>
              <br/>
              <Typography sx={{px: 2}}>
                Entrenador de perros certificado con amplio conocimiento de las técnicas de entrenamiento, técnicas
                de aseo adecuadas, y la anatomía canina. Amante de los animales con gran capacidad de comunicación y
                habilidades de gestión del tiempo bien desarrolladas.
              </Typography>

              <Box mt={3}>
                <Typography sx={{px: 2}}>
                  4-5 horas de cuidados: entre 20-30$ <br/>
                  Un día completo o una noche: entre 25-50$ <br/>
                  Cuidados diarios/ precio mensual: hasta 600$
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
              component='img'
              src={estefania}
              sx={{
                zIndex: 1,
                width: !largeScreen ? '150px' : 'auto',
                height: !largeScreen ? '150px' : 'auto',
              }}
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
                  Isabel Encabo
                </Typography>
              </Box>
              {
                largeScreen &&
                <>
                  <Typography sx={{px: 2}}>
                    Soy Isabel Encabo, Tengo 32 años y me considero una persona entusiasta de los animales, en especial
                    los perros, y creo que me desenvuelvo con soltura con ellos. Soy una persona responsable,
                    trabajadora, organizada y con iniciativa.
                  </Typography>
                  <br/>
                  <Typography sx={{px: 2}}>
                    Dada mi experiencia como limpiadora en entornos de zoológico tal y como especifico en el currículum
                    adjunto, me encuentro muy bien informada en características de una amplia variedad de animales y sus
                    comportamientos. Experta en el manejo de animales difíciles y potencialmente peligrosos, con
                    sensibilidad y eficacia.
                  </Typography>
                  <br/>

                  <Box display='flex' flexWrap='wrap' alignItems='center' justifyContent='space-between' mt={3}>
                    <Typography sx={{px: 2}}>
                      2-5 horas de cuidados: entre 40-70$ <br/>
                      Un día completo o una noche: entre 40-70$ <br/>
                      Cuidados diarios/ precio mensual: hasta 700$
                    </Typography>
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
          {
            !largeScreen &&
            <>
              <Typography sx={{px: 2, mt: 2}}>
                Soy Isabel Encabo, Tengo 32 años y me considero una persona entusiasta de los animales, en especial los
                perros, y creo que me desenvuelvo con soltura con ellos. Soy una persona responsable, trabajadora,
                organizada y con iniciativa.
              </Typography>
              <br/>
              <Typography sx={{px: 2}}>
                Dada mi experiencia como limpiadora en entornos de zoológico tal y como especifico en el currículum
                adjunto, me encuentro muy bien informada en características de una amplia variedad de animales y sus
                comportamientos. Experta en el manejo de animales difíciles y potencialmente peligrosos, con
                sensibilidad y eficacia.
              </Typography>

              <Box mt={3}>
                <Typography sx={{px: 2}}>
                  2-5 horas de cuidados: entre 40-70$ <br/>
                  Un día completo o una noche: entre 40-70$ <br/>
                  Cuidados diarios/ precio mensual: hasta 700$
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
              component='img'
              src={estefania}
              sx={{
                zIndex: 1,
                width: !largeScreen ? '150px' : 'auto',
                height: !largeScreen ? '150px' : 'auto',
              }}
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
                  Samuel Serrano
                </Typography>
              </Box>
              {
                largeScreen &&
                <>
                  <Typography sx={{px: 2}}>
                    ¡Hola! Me llamo Samuel, soy una persona joven que se declara amante de los animales. He tenido desde
                    pequeño mascotas en casa, y mi familia ha sabido transmitirme los valores hacia ellos. Cuidar
                    animales es mi principal ocupación, así que puedes estar tranquil@ de que tendrán supervision 24/7
                  </Typography>
                  <br/>
                  <Typography sx={{px: 2}}>
                    Me gusta dar largos paseos (4 normalmente), y me beneficio de muchas zonas verdes y senderos a dos pasos
                    de mi casa. A veces, si el tiempo lo permite, incluso salgo a practicar deporte con ellos..
                  </Typography>

                  <Box display='flex' flexWrap='wrap' alignItems='center' justifyContent='space-between' mt={3}>
                    <Typography sx={{px: 2}}>
                      1-5 horas de cuidados: entre 10 -25$ <br/>
                      Un día completo o una noche: entre 25 - 35$ <br/>
                      Cuidados diarios/ precio mensual: hasta 200$
                    </Typography>
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
          {
            !largeScreen &&
            <>
              <Typography sx={{px: 2, mt: 2}}>
                ¡Hola! Me llamo Samuel, soy una persona joven que se declara amante de los animales. He tenido desde
                pequeño mascotas en casa, y mi familia ha sabido transmitirme los valores hacia ellos. Cuidar animales
                es mi principal ocupación, así que puedes estar tranquil@ de que tendrán supervision 24/7
              </Typography>
              <br/>
              <Typography sx={{px: 2}}>
                Me gusta dar largos paseos (4 normalmente), y me beneficio de muchas zonas verdes y senderos a dos pasos
                de mi casa. A veces, si el tiempo lo permite, incluso salgo a practicar deporte con ellos..
              </Typography>

              <Box mt={3}>
                <Typography sx={{px: 2}}>
                  1-5 horas de cuidados: entre 10 -25$ <br/>
                  Un día completo o una noche: entre 25 - 35$ <br/>
                  Cuidados diarios/ precio mensual: hasta 200$
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
                  Estefania Garcia
                </Typography>
              </Box>
              {
                largeScreen &&
                <>
                  <Typography sx={{px: 2}}>
                    Soy Estefania y tengo 29 años, soy programadora y hago teletrabajo por lo que me puedo organizar
                    bien el
                    tiempo. Soy voluntaria de una protectora de gatos y a veces he ido a ayudar en la protectora de
                    perros
                    con
                    los paseos. Tengo un perro de alta demanda por lo que sabría lidiar con un terremoto y también tengo
                    un
                    gato
                    que se vino de acogida y no pudimos decirle adiós. Aparte de cuidar los animales del refugio y los
                    propios,
                    he cuidado de algunos amigos. Si deseas que te hecha un cable con el peludo, avísame.
                  </Typography>
                  <br/>

                  <Box display='flex' flexWrap='wrap' alignItems='center' justifyContent='space-between' mt={3}>
                    <Typography sx={{px: 2}}>
                      3 -5 horas de cuidados: entre 10 -15$ <br/>
                      Un día completo o una noche: entre 10- 20$ <br/>
                      Cuidados diarios/ precio mensual: hasta 100$
                    </Typography>
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
          {
            !largeScreen &&
            <>
              <Typography sx={{px: 2, mt: 2}}>
                Soy Estefania y tengo 29 años, soy programadora y hago teletrabajo por lo que me puedo organizar bien el
                tiempo. Soy voluntaria de una protectora de gatos y a veces he ido a ayudar en la protectora de perros
                con
                los paseos. Tengo un perro de alta demanda por lo que sabría lidiar con un terremoto y también tengo un
                gato
                que se vino de acogida y no pudimos decirle adiós. Aparte de cuidar los animales del refugio y los
                propios,
                he cuidado de algunos amigos. Si deseas que te hecha un cable con el peludo, avísame.
              </Typography>
              <br/>

              <Box mt={3}>
                <Typography sx={{px: 2}}>
                  3 -5 horas de cuidados: entre 10 -15$ <br/>
                  Un día completo o una noche: entre 10- 20$ <br/>
                  Cuidados diarios/ precio mensual: hasta 100$
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
              component='img'
              src={pamela}
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
                  Pamela Hernandez
                </Typography>
              </Box>
              {
                largeScreen &&
                <>
                  <Typography sx={{px: 2}}>
                    Hola soy Pamela, puedo apoyarte con el cuidado de tu mascota, he tenido perros, loro, gatos y
                    hámsters durante toda mi vida. Tengo mucha paciencia y amor por todo tipo de mascotas. Si necesitas
                    ayuda de paseo o cuidado. Escríbeme. Muchas gracias
                  </Typography>
                  <br/>

                  <Box display='flex' flexWrap='wrap' alignItems='center' justifyContent='space-between' mt={3}>
                    <Typography sx={{px: 2}}>
                      1 - 5 horas de cuidados: entre 10-30$ <br/>
                      Un día completo o una noche: entre 25-40$ <br/>
                      Cuidados diarios/ precio mensual: hasta 80$
                    </Typography>
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
          {
            !largeScreen &&
            <>
              <Typography sx={{px: 2, mt: 2}}>
                Hola soy Pamela, puedo apoyarte con el cuidado de tu mascota, he tenido perros, loro, gatos y hámsters
                durante toda mi vida. Tengo mucha paciencia y amor por todo tipo de mascotas. Si necesitas ayuda de
                paseo o cuidado. Escríbeme. Muchas gracias
              </Typography>
              <br/>

              <Box mt={3}>
                <Typography sx={{px: 2}}>
                  1 - 5 horas de cuidados: entre 10-30$ <br/>
                  Un día completo o una noche: entre 25-40$ <br/>
                  Cuidados diarios/ precio mensual: hasta 80$
                </Typography>
                <Box mt={!largeScreen && 4}>
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
              component='img'
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
                  Fabiola Castillo
                </Typography>
              </Box>
              {
                largeScreen &&
                <>
                  <Typography sx={{px: 2}}>
                    Hola! Mi nombre es Fabiola. Ofrezco servicio de visita y cuidado para tu felino dentro de Barcelona.
                    Realizo visitas de 1 hora o según se requiera, podemos coordinarlo. Soy amante de los felinos y
                    tengo 15 años de experiencia con ellos.
                  </Typography>
                  <br/>
                  <Typography sx={{px: 2}}>
                    Dentro de mis servicios esta el cuidado, dar medicación, cepillado, juegos, limpiar arenas y ayudar
                    a que tu felino este feliz y se sienta muy querido. Soy una persona responsable y respetuosa de la
                    vida animal, tengo 3 gatitos adoptados. Además tuve estudios de veterinaria y he participado de
                    jornadas de adopción en albergues. Si deseas más información puedes contactarme!
                  </Typography>
                  <br/>

                  <Box display='flex' flexWrap='wrap' alignItems='center' justifyContent='space-between' mt={3}>
                    <Typography sx={{px: 2}}>
                      2 - 5 horas de cuidados: entre 30-50$ <br/>
                      Un día completo o una noche: entre 25-30$ <br/>
                      Cuidados diarios/ precio mensual: hasta 200$
                    </Typography>
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
          {
            !largeScreen &&
            <>
              <Typography sx={{px: 2, mt: 2}}>
                Hola! Mi nombre es Fabiola. Ofrezco servicio de visita y cuidado para tu felino dentro de Barcelona.
                Realizo visitas de 1 hora o según se requiera, podemos coordinarlo. Soy amante de los felinos y tengo 15
                años de experiencia con ellos.
              </Typography>
              <br/>
              <Typography sx={{px: 2}}>
                Dentro de mis servicios esta el cuidado, dar medicación, cepillado, juegos, limpiar arenas y ayudar
                a que tu felino este feliz y se sienta muy querido. Soy una persona responsable y respetuosa de la
                vida animal, tengo 3 gatitos adoptados. Además tuve estudios de veterinaria y he participado de
                jornadas de adopción en albergues. Si deseas más información puedes contactarme!
              </Typography>

              <Box mt={3}>
                <Typography sx={{px: 2}}>
                  2 - 5 horas de cuidados: entre 30-50$ <br/>
                  Un día completo o una noche: entre 25-30$ <br/>
                  Cuidados diarios/ precio mensual: hasta 200$
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
              component='img'
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
                  Edu Díaz
                </Typography>
              </Box>
              {
                largeScreen &&
                <>
                  <Typography sx={{px: 2}}>
                    Hola, Me llamo Edu y ya he cuidado de las mascotas de mis amigos. Uno de ellos tiene 3 gatos y el
                    otro tiene 1 perro. En cuánto a los gatos me paso un rato en casa de mi amigo para estar con ellos,
                    a veces me quedo a trabajar. Me gusta sacar a pasear al perro de mi amigo y pasar un rato en algún
                    parque o montaña si estamos cerca por un buen rato. Siéntete libre de escribirme y preguntarme lo
                    que quieras.
                  </Typography>

                  <Box display='flex' flexWrap='wrap' alignItems='center' justifyContent='space-between' mt={3}>
                    <Typography sx={{px: 2}}>
                      1 - 6 horas de cuidados: entre 10 -15$ <br/>
                      Un día completo o una noche: entre 10 - 30$ <br/>
                      Cuidados diarios/ precio mensual: hasta 100$
                    </Typography>
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
          {
            !largeScreen &&
            <>
              <Typography sx={{px: 2, mt: 2}}>
                Hola, Me llamo Edu y ya he cuidado de las mascotas de mis amigos. Uno de ellos tiene 3 gatos y el otro
                tiene 1 perro. En cuánto a los gatos me paso un rato en casa de mi amigo para estar con ellos, a veces
                me quedo a trabajar. Me gusta sacar a pasear al perro de mi amigo y pasar un rato en algún parque o
                montaña si estamos cerca por un buen rato. Siéntete libre de escribirme y preguntarme lo que quieras.
              </Typography>
              <br/>

              <Box mt={3}>
                <Typography sx={{px: 2}}>
                  1 - 6 horas de cuidados: entre 10 -15$ <br/>
                  Un día completo o una noche: entre 10 - 30$ <br/>
                  Cuidados diarios/ precio mensual: hasta 100$
                </Typography>
                <Box mt={!largeScreen && 4}>
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

    </Box>
  )
}

export default function CareComponent() {
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
                        sx={{color: '#fff', marginTop: '-2rem'}}>Cuidados</Typography>
            <Box
              sx={{border: '2px solid #000000', padding: '.3rem 2rem', borderRadius: 5, mb: 2}}
            >
              <Typography align='center' variant='h1' sx={{color: '#fff'}}>
                {userData.petType.includes('erro') ? 'Perro' : 'Gato'}
              </Typography>
            </Box>

          </Box>
          <Typography align='right' fontWeight='bold' variant='h1' fontSize='32px' sx={{color: '#fff', px: 2}}>
            {userData.petType.includes('erro') ? 'Dogsitter' : 'Catsitter'}
          </Typography>
          {
            userData.petType.includes('erro') ? <DogFeeding largeScreen={largeScreen}/> :
              <CatFeeding largeScreen={largeScreen}/>
          }
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
              <span style={{ color: '#AC272D' }}>¡denunciar!</span>
            </Typography>
          </Box>
        </Box>
        </>
      </Page>
    </Transitions>
  )
}
