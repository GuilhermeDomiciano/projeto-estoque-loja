'use client';
import * as React from 'react';
import { extendTheme } from '@mui/material/styles';
import { useRouter } from 'next/navigation';  // Importação correta
import DashboardIcon from '@mui/icons-material/Dashboard';
// import BarChartIcon from '@mui/icons-material/BarChart';
// import DescriptionIcon from '@mui/icons-material/Description';
//import LayersIcon from '@mui/icons-material/Layers';
import { AppProvider, Navigation } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core/PageContainer';
import { useSession, signOut } from 'next-auth/react';
// import { Account } from '@toolpad/core/Account';
// import CustomMenu from './CustomMenu';


const NAVIGATION: Navigation = [
  {
    kind: 'header',
    title: 'Menu',
  },
  {
    segment: './home',
    title: 'Página Inicial',
    icon: <DashboardIcon />,
  },
  {
    kind: 'divider',
  },
  {
    kind: 'header',
    title: 'Gerenciamento',
  },
  {
    segment: './entradasaida', 
    title: 'Entrada e Saída'
  },
  

  {
    kind: 'divider',
  },
  {
    kind: 'header',
    title: 'Cadastros',
  },
  {
    segment: './produtos', 
    title: 'Catálogo'
  },
  {
    segment: './clientes', 
    title: 'Clientes'
  },
  // {
  //   segment: '/reports',
  //   title: 'Reports',
  //   icon: <BarChartIcon />,
  //   children: [
  //     {
  //       segment: '/reports/sales',
  //       title: 'Sales',
  //       icon: <DescriptionIcon />,
  //     },
  //     {
  //       segment: '/reports/traffic',
  //       title: 'Traffic',
  //       icon: <DescriptionIcon />,
  //     },
  //   ],
  // },
  
];

const demoTheme = extendTheme({
  colorSchemes: { light: true, dark: true },
  colorSchemeSelector: 'class',
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default function DashboardLayoutBasic({ children }: { children: React.ReactNode }) {
  const router = useRouter(); 
  const { data: us } = useSession();
 
  const session = {
    user: {
      name: useSession().data?.user?.nome,
      email: useSession().data?.user?.login,
      image: '/avatar.jpg',
    },
  }

  



  const authentication = React.useMemo(() => {
    return {
      signIn: () => {
        session.user.name = us?.user?.nome;
        session.user.email = us?.user?.login;
        session.user.image = '/avatar.jpg';
      },
      signOut: () => {
        signOut();
        router.push('/entrar');
      },
    };
  }, []);



  return (
    <AppProvider
    session={session}
    authentication={authentication}
      navigation={NAVIGATION}
      theme={demoTheme}
      branding={{
        logo: <img src="https://mui.com/static/logo.png" alt="MUI logo" />,
        title: 'My Shop',
        homeUrl: '/home', 
      }}
      router={{
        pathname: '/',
        searchParams: new URLSearchParams(),
        navigate: (path: string | URL) => router.push(String(path)), 
      }}
    >
      <DashboardLayout
      >
        <PageContainer>
         {children}
        </PageContainer>
      </DashboardLayout>
    </AppProvider>
  );
}
