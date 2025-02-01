'use client';
import * as React from 'react';

import { createTheme } from '@mui/material/styles';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';  // Importação correta

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




export default function DashboardLayoutSidebarHidden({ children }: { children: React.ReactNode }) {

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
      <DashboardLayout hideNavigation>
      {children}
      </DashboardLayout>
    </AppProvider>
  );
}