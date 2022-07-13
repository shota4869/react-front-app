import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './router/Router';
import theme from "./theme/theme";
import { LoginUserProvider } from './providers/LoginUserProvider'
import { IncomeCategoryListProvider } from './providers/IncomeCategoryListProvider';
import { ExpenditureCategoryListProvider } from './providers/ExpenditureCategoryListProvider';

function App() {
  return (

    <LoginUserProvider>
      <IncomeCategoryListProvider>
        <ExpenditureCategoryListProvider>
          <ChakraProvider theme={theme}>
            <BrowserRouter>
              <Router />
            </BrowserRouter>
          </ChakraProvider>
        </ExpenditureCategoryListProvider>
      </IncomeCategoryListProvider>
    </LoginUserProvider>

  );
}

export default App;
