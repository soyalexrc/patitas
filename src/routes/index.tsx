import {Suspense, lazy} from "react";
import {Navigate, useRoutes} from "react-router-dom";
// layouts
import UserLayout from "@/shared/layouts/UserLayout";
import NotFoundLayout from "@/shared/layouts/NotFoundLayout";
// components
import LoadingScreen from "@/shared/components/LoadingScreen";

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
      path: '/',
      element: <UserLayout/>,
      children: [
        {path: '', element: <InitialComponent/>},
        {path: 'registro', element: <RegisterComponent/>},
        {path: 'menu', element: <HomeComponent/>},
        {path: 'alarmas', element: <AlarmsComponent/>},
        {path: 'ciclo-de-vida', element: <LifeCycleComponent/>},
        {path: 'alimentacion', element: <FeedingComponent/>},
        {path: 'aseo', element: <CleanlinessComponent/>},
        {path: 'juegos', element: <GamesComponent/>},
        {path: 'salud', element: <HealthComponent/>},
        {path: 'cuidado', element: <CareComponent/>},
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

const RegisterComponent = Loadable(lazy(() => import('../features/auth/pages/RegisterComponent')));
