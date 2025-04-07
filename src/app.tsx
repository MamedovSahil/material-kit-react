import 'src/global.css';
import { Router } from 'src/routes/routes';
import { ThemeProvider } from 'src/theme/theme-provider';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ToastContainer } from 'react-toastify';
import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
export default function App() {
  const queryClient = new QueryClient();

  return (
    <BrowserRouter>
      <ThemeProvider>
        <QueryClientProvider client={queryClient}>
          <HelmetProvider>
            <Suspense>
              <Router />
              <ToastContainer autoClose={3000} />
            </Suspense>
          </HelmetProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}
