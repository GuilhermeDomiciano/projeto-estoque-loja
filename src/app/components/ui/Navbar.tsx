'use client';
import * as React from 'react';
import { extendTheme } from '@mui/material/styles';
import { useRouter } from 'next/navigation';  // Importação correta
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BarChartIcon from '@mui/icons-material/BarChart';
import DescriptionIcon from '@mui/icons-material/Description';
import LayersIcon from '@mui/icons-material/Layers';
import { AppProvider, Navigation } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core/PageContainer';
import { useSession, signOut } from 'next-auth/react';
// import PropTypes from 'prop-types';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import { createTheme } from '@mui/material/styles';

// import { useDemoRouter } from '@toolpad/core/internal';

const NAVIGATION: Navigation = [
  {
    kind: 'header',
    title: 'Menu',
  },
  {
    segment: '/dashboard',  // Caminho atualizado
    title: 'Dashboard',
    icon: <DashboardIcon />,
  },
  {
    segment: './dashboard/produtos',  // Caminho atualizado
    title: 'Produtos',
    icon: <ShoppingCartIcon />,
  },
  {
    kind: 'divider',
  },
  {
    kind: 'header',
    title: 'Analytics',
  },
  {
    segment: '/reports',
    title: 'Reports',
    icon: <BarChartIcon />,
    children: [
      {
        segment: '/reports/sales',
        title: 'Sales',
        icon: <DescriptionIcon />,
      },
      {
        segment: '/reports/traffic',
        title: 'Traffic',
        icon: <DescriptionIcon />,
      },
    ],
  },
  {
    segment: '/integrations',
    title: 'Integrations',
    icon: <LayersIcon />,
  },
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
  const router = useRouter(); // Agora usa o roteamento do Next.js
  const { data: us } = useSession();
 
  const session = {
    user: {
      name: useSession().data?.user?.nome,
      email: useSession().data?.user?.login,
      image: 'https://avatars.githubusercontent.com/u/19550456',
    },
  }



  const authentication = React.useMemo(() => {
    return {
      signIn: () => {
        session.user.name = us?.user?.nome;
        session.user.email = us?.user?.login;
        session.user.image = 'https://avatars.githubusercontent.com/u/19550456';
      },
      signOut: () => {
        signOut();
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
        homeUrl: '/dashboard',  // Caminho atualizado
      }}
      router={{
        pathname: '/',
        searchParams: new URLSearchParams(),
        navigate: (path: string | URL) => router.push(String(path)), // Agora usa router.push()
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
