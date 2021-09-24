import React, { useState, FormEvent } from 'react';
import { useQuotation } from '../../hooks/useQuotation';

const Form = () => {
  const { createUser, quotation } = useQuotation()
  console.log(quotation);

  const [cpf, setCpf] = useState('');
  const [uf, setUf] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [emprestimo, setEmprestimo] = useState('');
  const [nome, setNome] = useState('');
  const [parcelas, setParcelas] = useState(0);

  const handleCreateNewUser = async(event: FormEvent) => {
    event.preventDefault();

    await createUser({
      cpf,
      data_nascimento: dataNascimento,
      emprestimo,
      nome,
      uf,
      parcelas,
    })
  }

  return (
    <form onSubmit={ handleCreateNewUser }>

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
        onChange={event => setDataNascimento(event.target.value)}
      />

      <input
        placeholder="QUAL O VALOR DO EMPRÉSTIMO"
        onChange={event => setEmprestimo(event.target.value)}
      />

      <input
        placeholder="QUAL O VALOR DESEJA PAGAR POR MÊS"
        onChange={event => setParcelas(+event.target.value)}
      />
      
      <button type="submit">
        Simular
      </button>
    </form>
  )
}

export { Form }