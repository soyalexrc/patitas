import {Suspense, lazy} from "react";
import {Navigate, useRoutes} from "react-router-dom";
// layouts
import UserLayout from "@/shared/layouts/UserLayout";
import NotFoundLayout from "@/shared/layouts/NotFoundLayout";
// components
import LoadingScreen from "@/shared/components/LoadingScreen";
import UserProtectedRoute from "@/routes/guards/UserProtectedRoute";

const Loadable = (Component: any) => (props: any) => {
  return (
    <Suspense
      fallback={
        <LoadingScreen
          sx={{
            top: 0,
            left: 0,
            width: 1,
            zIndex: 9999,
            position: "fixed",
          }}
        />
      }
    >
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: "*",
      element: <NotFoundLayout/>,
      children: [
        {path: "404", element: <NotFoundComponent/>},
        {path: "*", element: <Navigate to="/404" replace/>},
      ],
    },
    {
      path: '/menu',
      element: <UserProtectedRoute>
                  <UserLayout/>
                </UserProtectedRoute>,
      children: [
        {path: '', element: <HomeComponent/>},
        {path: 'alarmas', element: <AlarmsComponent/>},
        {path: 'ciclo-de-vida', element: <LifeCycleComponent/>},
        {path: 'alimentacion', element: <FeedingComponent/>},
        {path: 'alimentacion/perrarina', element: <DogFoodComponent/>},
        {path: 'alimentacion/gatarina', element: <CatFoodComponent/>},
        {path: 'aseo', element: <CleanlinessComponent/>},
        {path: 'aseo/peluquerias', element: <FashionComponent/>},
        {path: 'juegos', element: <GamesComponent/>},
        {path: 'juegos/jugueteria-canina', element: <DogToysComponent/>},
        {path: 'juegos/jugueteria-felina', element: <CatToysComponent/>},
        {path: 'salud', element: <HealthComponent/>},
        {path: 'salud/veterinarios', element: <VeterinariansComponent/>},
        {path: 'cuidado', element: <CareComponent/>},
      ]
    },
    {
      path: '/registro',
      element: <UserLayout/>,
      children: [
        {path: '', element: <RegisterComponent/>},
      ]
    },
    {
      path: '/',
      element: <UserLayout/>,
      children: [
        {path: '', element: <InitialComponent/>},
      ]
    },
  ])
}


const NotFoundComponent = Loadable(lazy(() => import('../shared/components/NotFoundComponent')));

// home
const InitialComponent = Loadable(lazy(() => import('../features/home/pages/InitialComponent')));
const HomeComponent = Loadable(lazy(() => import('../features/home/pages/HomeComponent')));
const AlarmsComponent = Loadable(lazy(() => import('../features/home/pages/AlarmsComponent')));
const FeedingComponent = Loadable(lazy(() => import('../features/home/pages/FeedingComponent')));
const LifeCycleComponent = Loadable(lazy(() => import('../features/home/pages/LifeCycleComponent')));
const GamesComponent = Loadable(lazy(() => import('../features/home/pages/GamesComponent')));
const CleanlinessComponent = Loadable(lazy(() => import('../features/home/pages/CleanlinessComponent')));
const CareComponent = Loadable(lazy(() => import('../features/home/pages/CareComponent')));
const HealthComponent = Loadable(lazy(() => import('../features/home/pages/HealthComponent')));
const VeterinariansComponent = Loadable(lazy(() => import('../features/home/pages/VeterinariansComponent')));
const DogToysComponent = Loadable(lazy(() => import('../features/home/pages/DogToysComponent')));
const CatToysComponent = Loadable(lazy(() => import('../features/home/pages/CatToysComponent')));
const FashionComponent = Loadable(lazy(() => import('../features/home/pages/FashionComponent')));
const CatFoodComponent = Loadable(lazy(() => import('../features/home/pages/CatFoodComponent')));
const DogFoodComponent = Loadable(lazy(() => import('../features/home/pages/DogFoodComponent')));

const RegisterComponent = Loadable(lazy(() => import('../features/auth/pages/RegisterComponent')));
