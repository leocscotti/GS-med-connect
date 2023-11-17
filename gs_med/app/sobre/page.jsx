// pages/SobreNos.js
import Cabecalho from '../components/cabecalho/Cabecalho';
import Rodape from '../components/rodape/Rodape.jsx';
import React from 'react';

const SobreNos = () => {
  return (
    <div>
      <Cabecalho />
      <h1>Sobre Nós</h1>

      <div>
        <p>
          Somos uma empresa dedicada a fornecer soluções inovadoras na área da saúde.
          Nosso foco principal é o desenvolvimento e fornecimento de um sistema de relógio inteligente
          especialmente projetado para médicos, permitindo o monitoramento contínuo dos sinais vitais
          de seus pacientes.
        </p>

        <p>
          O nosso sistema de relógio é equipado com tecnologia avançada de monitoramento, permitindo
          que os médicos acessem em tempo real dados cruciais, como frequência cardíaca, pressão arterial,
          níveis de oxigênio no sangue e muito mais. Essas informações são essenciais para diagnósticos
          precisos e intervenções oportunas.
        </p>

        <p>
          Nossa missão é melhorar a qualidade dos cuidados de saúde, proporcionando aos profissionais
          da saúde ferramentas inovadoras que facilitam o acompanhamento próximo e eficiente dos pacientes.
        </p>

        <p>
          Além do monitoramento de sinais vitais, trabalhamos constantemente no aprimoramento de
          funcionalidades adicionais, como lembretes de medicação, integração com registros eletrônicos
          de saúde e comunicação fácil entre médicos e pacientes.
        </p>

        <p>
          Estamos comprometidos com a inovação, a excelência e a contribuição para a evolução contínua
          da área da saúde. Seja bem-vindo à nossa jornada em direção a um futuro mais saudável e conectado.
        </p>
      </div>

      <Rodape />
    </div>
  );
};

export default SobreNos;
