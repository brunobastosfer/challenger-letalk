import React, { createContext, useState, ReactNode, useContext } from "react";
import { api } from '../services/api';

interface Quotation {
  id: number;
  nome: string;
  cpf: string;
  data_nascimento: string;
  uf: string;
  emprestimo: string;
  parcelas: number;
}

type QuotationInput = Omit<Quotation, 'id' | 'createdAt'>

interface QuotationProviderProps {
  children: ReactNode;
}

interface QuotationContextData {
  quotation: Quotation[];
  createUser: (Quotation: QuotationInput) => Promise<void>
}

export const QuotationContext = createContext<QuotationContextData>(
  {} as QuotationContextData);

export const QuotationProvider = ({ children } : QuotationProviderProps) => {
  const [quotation, setQuotation] = useState<Quotation[]>([]);

  const createUser = async (quotationInput: QuotationInput) => {
    const response = await api.post('users', {
      ...quotationInput,
    })
    const { value, parcelas, emprestimo } = response.data;
    if(value === 'BAD REQUEST') {
      setQuotation(value)
    }
    setQuotation([value, parcelas, emprestimo]);
  }

  return (
    <QuotationContext.Provider value={{ quotation, createUser }}>
      {children}
    </QuotationContext.Provider>
  )
}

export function useQuotation() {
  const context = useContext(QuotationContext)
  return context
}