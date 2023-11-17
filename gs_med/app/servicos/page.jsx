// pages/Servicos.js
import Cabecalho from '../components/cabecalho/cabecalho.jsx';
import Rodape from '../components/rodape/Rodape.jsx';
import React from 'react';

const Servicos = () => {
  return (
    <div>
      <Cabecalho />
      <h1>Nossos Serviços</h1>

      <div>
        <h2>Fornecimento do Sistema de Relógio Inteligente</h2>
        <p>
          Oferecemos relógios inteligentes equipados com sensores avançados para monitoramento contínuo de sinais vitais,
          proporcionando aos médicos uma visão em tempo real do estado de saúde de seus pacientes.
        </p>

        <h2>Desenvolvimento de Aplicativos Personalizados</h2>
        <p>
          Desenvolvemos aplicativos personalizados para dispositivos móveis, permitindo que os médicos acessem e analisem
          os dados dos pacientes de forma intuitiva e eficiente.
        </p>
        <h1>Alertas e Notificações Personalizados:</h1>
        
        <p>Configuração de alertas e notificações automáticas para informar os médicos sobre alterações significativas nos sinais vitais dos pacientes, possibilitando uma intervenção rápida quando necessário.</p>

        <h2>Segurança de Dados e Conformidade</h2>
        <p>
          Implementamos medidas rigorosas de segurança para garantir a privacidade dos dados do paciente e
          garantimos total conformidade com regulamentações de saúde e padrões de segurança de dados.
        </p>
      </div>

      <Rodape />
    </div>
  );
};

export default Servicos;
