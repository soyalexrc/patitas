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
              backgroundColor: 'primary.main',
              width: 'fit-content',
              padding: '.5rem 1rem .5rem 2rem',
              borderTopRightRadius: '12px',
              borderBottomRightRadius: '12px',
              marginLeft: '-2rem',
            }}
          >
            <Typography variant='h1' fontSize='22px' sx={{color: '#fff'}}>
              <Box component='span' sx={{mr: 2}}>1.</Box>
              Parvovirosis
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} sx={{mb: !largeScreen && 3}}>
          <Box>
            <Typography>
              Una enfermedad con una gran tasa de contagio que ataca las células que se reproducen en el tracto
              intestinal. Se propaga mediante las heces y puede prevenirse con su correspondiente vacuna.
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
                backgroundColor: 'primary.main',
                width: 'fit-content',
                padding: '.5rem 1rem .5rem 2rem',
                borderTopLeftRadius: '12px',
                borderBottomLeftRadius: '12px',
                marginRight: '-2rem',
              }}
            >
              <Typography variant='h1' fontSize='22px' sx={{color: '#fff'}}>
                <Box component='span' sx={{mr: 2}}>2.</Box>
                Moquillo
              </Typography>
            </Box>
          </Box>
          <Typography sx={{mt: 2}}>
            Esta enfermedad es muy contagiosa en perros, generado por un virus similar al del sarampión. Se previene
            mediante vacunación y, en caso de infección, el tratamiento se basa en la administración de antibióticos y
            cuidar de que nuestro compañero se mantenga en todo momento hidratado.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Box
            sx={{
              backgroundColor: 'primary.main',
              width: 'fit-content',
              padding: '.5rem 1rem .5rem 2rem',
              borderTopRightRadius: '12px',
              borderBottomRightRadius: '12px',
              marginLeft: '-2rem',
            }}
          >
            <Typography variant='h1' fontSize='22px' sx={{color: '#fff'}}>
              <Box component='span' sx={{mr: 2}}>3.</Box>
              Leptospirosis
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} sx={{mb: !largeScreen && 3}}>
          <Box>
            <Typography>
              Causada por una bacteria llamada espiroqueta, se contagia a través del contacto con orina de un perro
              infectado o a través de la piel, por una herida. La mayoría de los casos no reviste gravedad y puede
              tratarse con antibióticos.
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
                backgroundColor: 'primary.main',
                width: 'fit-content',
                padding: '.5rem 1rem .5rem 2rem',
                borderTopLeftRadius: '12px',
                borderBottomLeftRadius: '12px',
                marginRight: '-2rem',
              }}
            >
              <Typography variant='h1' fontSize='22px' sx={{color: '#fff'}}>
                <Box component='span' sx={{mr: 2}}>4.</Box>
                Diarrea en perros
              </Typography>
            </Box>
          </Box>
          <Typography sx={{mt: 2}}>
            Las causas por las que un perro puede tener disposiciones líquidas pueden ser diferentes. Generalmente,
            puede deberse a un cambio de alimentación, una alergia alimentaria o incluso por infección de parásitos
            intestinales. La diarrea puede ser aguda, de corta o media duración y crónica, que necesitara de una
            visita al veterinario para determinar el origen.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Box
            sx={{
              backgroundColor: 'primary.main',
              width: 'fit-content',
              padding: '.5rem 1rem .5rem 2rem',
              borderTopRightRadius: '12px',
              borderBottomRightRadius: '12px',
              marginLeft: '-2rem',
            }}
          >
            <Typography variant='h1' fontSize='22px' sx={{color: '#fff'}}>
              <Box component='span' sx={{mr: 2}}>3.</Box>
              Alergias cutáneas
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box>
            <Typography>
              Las alergias son una enfermedad de las más comunes en perros y suelen ser de origen cutáneo. Deberemos
              realizar una visita al veterinario para determinar cuál es la causa y suministrarle antihistamínicos de
              ser necesario.
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Box my={4}>
        <Typography variant='h1' align='center' sx={{mb: 2}}>
          ¿Por qué es tan importante vacunar a tu perro?
        </Typography>
        <Typography>
          Con las vacunas al día de tu perro tendrás la seguridad de prevenir alguna de estas y otras enfermedades más
          comunes. Hemos hablado de algunas enfermedades, pero existen muchas más que pueden ser evitadas con la
          vacunación anual.
        </Typography>
      </Box>
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
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box
            sx={{
              backgroundColor: 'primary.main',
              width: 'fit-content',
              padding: '.5rem 1rem .5rem 2rem',
              borderTopRightRadius: '12px',
              borderBottomRightRadius: '12px',
              marginLeft: '-2rem',
            }}
          >
            <Typography variant='h1' fontSize='22px' sx={{color: '#fff'}}>
              <Box component='span' sx={{mr: 2}}>1.</Box>
              La insuficiencia renal crónica
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} sx={{mb: !largeScreen && 3}}>
          <Box>
            <Typography>
              Consiste en una alteración en la función del riñón. Se trata de la enfermedad más común entre los felinos,
              y puede producirse por diferentes causas. Algunos de los signos clínicos más frecuentes son que el gato
              beba más agua de lo normal, adelgace o pierda el apetito. Desgraciadamente, esta enfermedad no tiene cura
              y es progresiva. La mejor forma de detectarlo es con análisis de sangre. Y el mejor tratamiento es una
              buena prevención. Poder detectarlo en momentos tempranos de la enfermedad, nos permitirá intentar proteger
              la función renal restante y tratar las alteraciones que le restan calidad de vida a nuestro gato
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
                backgroundColor: 'primary.main',
                width: 'fit-content',
                padding: '.5rem 1rem .5rem 2rem',
                borderTopLeftRadius: '12px',
                borderBottomLeftRadius: '12px',
                marginRight: '-2rem',
              }}
            >
              <Typography variant='h1' fontSize='22px' sx={{color: '#fff'}}>
                <Box component='span' sx={{mr: 2}}>2.</Box>
                Hipertiroidismo
              </Typography>
            </Box>
          </Box>
          <Typography sx={{mt: 2}}>
            El hipertiroidismo felino se da por un exceso de producción de hormonas tiroideas. Se trata de una
            alteración muy común entre los gatos mayores. En los felinos que sufren hipertiroidismo es usual observar
            una perdida de peso a pesar de que suelen aumentar la ingesta de alimentos. Otros signos clínicos comunes
            son aumento de los maullidos, cambios en la mirada o hipertensión. Esta enfermedad se puede tratar bien con
            medicación oral y, en algunas ocasiones, si el paciente cumple ciertos requisitos tras haber sido tratado
            con medicación, se puede someter a un tratamiento cono ido radiactivo, que cure la enfermedad.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Box
            sx={{
              backgroundColor: 'primary.main',
              width: 'fit-content',
              padding: '.5rem 1rem .5rem 2rem',
              borderTopRightRadius: '12px',
              borderBottomRightRadius: '12px',
              marginLeft: '-2rem',
            }}
          >
            <Typography variant='h1' fontSize='22px' sx={{color: '#fff'}}>
              <Box component='span' sx={{mr: 2}}>3.</Box>
              Diabetes mellitus
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} sx={{mb: !largeScreen && 3}}>
          <Box>
            <Typography>
              Al igual que en humanos, los gatos también pueden sufrir diabetes. De hecho, es una afección habitual
              entre los felinos con sobrepeso de más de siete años y que llevan una vida sedentaria. Esta enfermedad
              solo puede ser diagnosticada por un veterinario mediante la realización de un análisis de sangre. Sin
              embargo, existen algunos signos clínicos que pueden evidenciar que el gato padece esta enfermedad. Los
              signos clínicos más frecuentes son la ingesta excesiva de agua, aumento del apetito y el aumento de las
              micciones. Un punto positivo es que esta enfermedad puede ser reversible si se sigue un tratamiento
              específico.
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
                backgroundColor: 'primary.main',
                width: 'fit-content',
                padding: '.5rem 1rem .5rem 2rem',
                borderTopLeftRadius: '12px',
                borderBottomLeftRadius: '12px',
                marginRight: '-2rem',
              }}
            >
              <Typography variant='h1' fontSize='22px' sx={{color: '#fff'}}>
                <Box component='span' sx={{mr: 2}}>4.</Box>
                Infección por retrovirus
              </Typography>
            </Box>
          </Box>
          <Typography sx={{mt: 2}}>
            Virus de la leucemia felina y Virus de la inmunodeficiencia felina. La inmunodeficiencia felina (FIV) es una
            infección equivalente al VIH en humanos y se suele trasmitir a través de arañazos o mordeduras. El virus de
            la leucemia (FelV) se transmite a través de la saliva, mordeduras, contacto con orina y heces que contengan
            el virus, etc. Estas enfermedades causan en el paciente un estado de inmunosupresión, por lo que tendrá más
            predisposición de padecer infecciones y neoplasias . Actualmente no existe tratamiento curativo para la
            infección por retrovirus.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Box
            sx={{
              backgroundColor: 'primary.main',
              width: 'fit-content',
              padding: '.5rem 1rem .5rem 2rem',
              borderTopRightRadius: '12px',
              borderBottomRightRadius: '12px',
              marginLeft: '-2rem',
            }}
          >
            <Typography variant='h1' fontSize='22px' sx={{color: '#fff'}}>
              <Box component='span' sx={{mr: 2}}>3.</Box>
              Cáncer en felinos
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box>
            <Typography>
              Afecta en especial a los pacientes de mayor edad y, debido a que la medicina ha conseguido alargar la vida
              de las mascotas, cada vez se dan más casos de cáncer en felinos. Uno de los tumores más frecuentes es el
              mamario y al igual que en humanos, la detección precoz es fundamental. Dependiendo de en qué momento se
              detecte y dónde se encuentre localizado el tumor, se aplicará un tipo de tratamiento u otro.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default function HealthComponent() {
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
                        sx={{color: '#fff', marginTop: '-2rem'}}>Salud</Typography>
            <Box
              sx={{border: '2px solid #000000', padding: '.3rem 2rem', borderRadius: 5, mb: 2}}
            >
              <Typography align='center' variant='h1' sx={{color: '#fff'}}>
                {userData.petType.includes('erro') ? 'Perro' : 'Gato'}
              </Typography>
            </Box>

          </Box>
          <Typography align='right' fontWeight='bold' variant='h1' fontSize='32px' sx={{color: '#fff', px: 2}}>
            Tipos de enfermedades
          </Typography>
          {
            userData.petType.includes('erro') ? <DogFeeding largeScreen={largeScreen}/> :
              <CatFeeding largeScreen={largeScreen}/>
          }
          <Box p={2}>
            <Box display='flex' justifyContent='center' my={5}>
              <Box
                sx={{
                  maxWidth: '500px',
                  width: '100%'
                }}
              >
                <Typography align='center' variant='h1' fontSize='24px' sx={{color: '#fff', mb: 2}}>
                  Si su mascota presenta fiebre o algún síntoma inusual, ¡Llevar al veterinario!
                </Typography>
              </Box>
            </Box>
            <Typography align='center' variant='h1' fontSize='34px'
                        sx={{color: '#fff', mb: 2}}>Veterinarios</Typography>
            <Button variant='contained' size='large' fullWidth onClick={() => navigate('veterinarios')}
                    sx={{color: 'primary.main', backgroundColor: '#fff', height: '4rem', fontSize: '2rem'}}>Ver</Button>
          </Box>
        </>
      </Page>
    </Transitions>
  )
}
