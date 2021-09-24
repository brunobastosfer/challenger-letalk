import React from 'react';
import {Container} from './style';
import { useQuotation } from '../../hooks/useQuotation';

const CardProjection = () => {
  const { quotation } = useQuotation()
  console.log(quotation);
  return (
    <Container>
      <div>
        <div>
          <span>VALOR REQUERIDO: </span>
          <span>R$ </span>
        </div>
        <div>
          <span>TAXA DE JUROS: </span>
          <span>R$ </span>
        </div>
        <div>
          <span>VALOR DA PARCELA: </span>
          <span>R$ </span>
        </div>
        <div>
          <span>TOTAL DE MESES PARA QUITAR: </span>
          <span>R$ </span>
        </div>
        <div>
          <span>TOTAL DE JUROS: </span>
          <span>R$ </span>
        </div>
        <div>
          <span>TOTAL A PAGAR: </span>
          <span>R$ </span>
        </div>
      </div>
    </Container>
  )
}

export {CardProjection}