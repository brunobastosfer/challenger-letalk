import React, { useState, FormEvent } from 'react';
import { useQuotation } from '../../hooks/useQuotation';
import { Container, CardContainer } from './style';

const Form = () => {
  const { createUser } = useQuotation()

  const [cpf, setCpf] = useState('');
  const [uf, setUf] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [emprestimo, setEmprestimo] = useState('');
  const [nome, setNome] = useState('');
  const [parcelas, setParcelas] = useState(0);

  const handleCreateNewUser = async(event: FormEvent) => {
    event.preventDefault();

    await createUser({
      cpf: cpf.toString(),
      data_nascimento: dataNascimento.toString(),
      emprestimo: emprestimo.toString(),
      nome,
      uf,
      parcelas,
    })
    setCpf('');
    setUf('');
    setDataNascimento('');
    setEmprestimo('');
    setNome('');
    setParcelas(0);
  }

  return (
    <CardContainer>
      <Container onSubmit={ handleCreateNewUser }>

        <input
          type="text"
          placeholder="NOME"
          onChange={event => setNome(event.target.value)}
        />

        <input
          type="text"
          placeholder="CPF"
          onChange={event => setCpf(event.target.value)}
        />

        <input
          type="text"
          placeholder="UF"
          onChange={event => setUf(event.target.value)}
        />

        <input
          placeholder="DATA DE NASCIMENTO"
          type="date"
          onChange={event => setDataNascimento(event.target.value)}
        />

        <input
          placeholder="QUAL O VALOR DO EMPRÉSTIMO"
          type="number"
          onChange={event => setEmprestimo(event.target.value)}
        />

        <input
          placeholder="QUAL O VALOR DESEJA PAGAR POR MÊS"
          type="number"
          onChange={event => setParcelas(+event.target.value)}
        />
        
        <button type="submit">
          SIMULAR
        </button>
      </Container>
    </CardContainer>
  )
}

export { Form }