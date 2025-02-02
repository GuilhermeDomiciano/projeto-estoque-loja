'use client';
import * as React from 'react';
import { createTheme } from '@mui/material/styles';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { AppProvider, Navigation } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core/PageContainer';
import { useSession, signOut } from 'next-auth/react';
import { useDemoRouter } from '@toolpad/core/internal';

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
    title: 'Entrada e Saída',
  },
  {
    kind: 'divider',
  },
  {
    kind: 'header',
    title: 'Cadastros',
  },
  {
    segment: './catalogo',
    title: 'Catálogo',
  },
  {
    segment: './clientes',
    title: 'Clientes',
  },
];

const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data-toolpad-color-scheme',
  },
  colorSchemes: { light: true, dark: true },
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
  const { data: us } = useSession();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const session = {
    user: {
      name: useSession().data?.user?.nome,
      email: useSession().data?.user?.login,
      image: '/avatar.jpg',
    },
  };

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
  }, [us]);

  const appRouter = {
    pathname,
    searchParams,
    navigate: (path: string | URL) => {
      router.push(path instanceof URL ? path.toString() : path);
    },
    demoRouterValue: useDemoRouter(pathname),
  };

  return (
    <AppProvider
      session={session}
      authentication={authentication}
      router={appRouter}
      navigation={NAVIGATION}
      theme={demoTheme}
      branding={{
        logo: <img src="https://mui.com/static/logo.png" alt="Logo" />,
        title: 'My Shop',
        homeUrl: '/home',
      }}
    >
      <DashboardLayout>
        <PageContainer>{children}</PageContainer>
      </DashboardLayout>
    </AppProvider>
  );
}
