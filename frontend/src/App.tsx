import React from 'react';
import { Home } from './components/Home/Home';
import { QuotationProvider } from './hooks/useQuotation';
import { GlobalStyle } from './styles/global';

function App(){
  return (
    <QuotationProvider>

      <Home />

      <GlobalStyle />
      
    </QuotationProvider>
  );
}

export default App;
