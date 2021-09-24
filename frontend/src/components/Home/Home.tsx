import React from 'react';
import { CardProjection } from '../CardProjection/CardProjection';
import { Form } from '../Form/Form';
import { Container } from './style';

 const Home = () => {
  return (
    <Container>
      <h1>Simule e solicite o seu empréstimo.</h1>
      <p>Preencha o formulário abaixo para simular</p>
      <Form />
      <p className="second-container">Veja a simulação para o seu empréstimo antes de efetivar</p>
      <CardProjection />
    </Container>
  )
}

export { Home }