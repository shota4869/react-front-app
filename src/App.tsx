import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './router/Router';
import theme from "./theme/theme";
import { LoginUserProvider } from './providers/LoginUserProvider'

function App() {
  return (

    <LoginUserProvider>
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ChakraProvider>
    </LoginUserProvider>

  );
}

export default App;
