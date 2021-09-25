import React, { useState } from 'react';
import { Container, Table } from './style';
import { useQuotation } from '../../hooks/useQuotation';
import {calculate} from '../helpers/Calculate'
import { useEffect } from 'react';

interface Cliente {
  juros: [];
  devedor: [];
  devedorAjustado: [];
  valorParcela: [];
  mes: [],
  totalJuros: 0;
}

const CardProjection = () => {
  const { quotation } = useQuotation();
  const [totalParcelas, setTotalParcelas] = useState<Cliente[]>([])
  const [cotacao, parcela, total] = quotation;
  const data = new Date().toLocaleDateString();

  useEffect(() => {
    const object = {
      cota: Number(cotacao),
      saldoDevedor: Number(total),
      valorParcela: Number(parcela)
    }
    if(parcela) {
      setTotalParcelas(calculate(object))
    }
  }, [quotation, cotacao, parcela, total])

  return (
    <Container>
      <div>
        <div>
          <span>VALOR REQUERIDO: </span>
          <span>
          {new Intl.NumberFormat('pt-br', {
              style: 'currency',
              currency: 'BRL'
            }).format(Number(total))}
          </span>
        </div>
        <div>
          <span>TAXA DE JUROS: </span>
          <span>{ cotacao }% ao mês</span>
        </div>
        <div>
          <span>VALOR DA PARCELA: </span>
          <span>
            {new Intl.NumberFormat('pt-br', {
              style: 'currency',
              currency: 'BRL'
            }).format(Number(parcela))}
          </span>
        </div>
        <div>
          <span>TOTAL DE MESES PARA QUITAR: </span>
          <span>
            {
              !totalParcelas[0]
              ? ''
              : totalParcelas[0].devedor.length
            } MESES
          </span>
        </div>
        <div>
          <span>TOTAL DE JUROS: </span>
          <span>
            { !totalParcelas[0]
            ? ''
            : new Intl.NumberFormat('pt-br', {
              style: 'currency',
              currency: 'BRL'
            }).format(totalParcelas[0].totalJuros)
            }
          </span>
        </div>
        <div>
          <span>TOTAL A PAGAR: </span>
          <span>
          { !totalParcelas[0]
            ? ''
            : new Intl.NumberFormat('pt-br', {
              style: 'currency',
              currency: 'BRL'
            }).format(totalParcelas[0].totalJuros + Number(total))
            }
          </span>
        </div>
        <span className="quotation_projection">PROJEÇÃO DAS PARCELAS:</span>
        <Table>
          <thead>
            <tr>
              <th>SALDO DEVEDOR</th>
              <th>JUROS</th>
              <th>SALDO DEVEDOR AJUSTADO</th>
              <th>VALOR DA PARCELA</th>
              <th>VENCIMENTO</th>
            </tr>
          </thead>

          <tbody>
            {
              totalParcelas
              .map((devedor) => devedor.devedor
              .map((value, index) => (
                <tr key={index}>
                  <td>{new Intl.NumberFormat('pt-br', {
                      style: 'currency',
                      currency: 'BRL'
                      }).format(value)}</td>
                  <td>
                    { !devedor.juros[index]
                    ? 'R$ 0,00'
                    : new Intl.NumberFormat('pt-br', {
                      style: 'currency',
                      currency: 'BRL'
                    }).format(totalParcelas[0].totalJuros + Number(total))
                    }
                  </td>
                  <td>{new Intl.NumberFormat('pt-br', {
                      style: 'currency',
                      currency: 'BRL'
                      }).format(devedor.devedorAjustado[index])}</td>
                  <td>{new Intl.NumberFormat('pt-br', {
                      style: 'currency',
                      currency: 'BRL'
                      }).format(+parcela)}</td>
                  <td>{ data }</td>
                </tr>
              )))
            }
          </tbody>
        </Table>
      </div>
    </Container>
  )
}

export {CardProjection}