import React, { useState } from 'react';

export default function page() {
    const Cadastro = () => {
        const [formData, setFormData] = useState({
          nome: '',
          email: '',
          senha: '',
        });
       
        const handleChange = (e) => {
          const { name, value } = e.target;
          setFormData({
            ...formData,
            [name]: value,
          });
        };
       
        const handleSubmit = (e) => {
          e.preventDefault();
          // Lógica para enviar os dados do formulário (pode ser uma chamada de API, etc.)
          console.log('Dados do formulário:', formData);
        };

  return (
    <div>
      <Cabecalho />
      <h1>Bem-vindo à página!</h1>
      {/* Outro conteúdo da página */}
 
      <div>
        <h1>Monitoramento Remoto: Uma Revolução na Medicina e Tecnologia</h1>
 
        <p>
          O monitoramento remoto desempenha um papel crucial na interseção da medicina e tecnologia.
          Permite a coleta de dados em tempo real, melhorando a eficiência e a qualidade dos cuidados de saúde.
        </p>
        <div>
          <Image src="/images/relogio.jpg" alt="Relógio" width="250" height="250" />
          <p>Imagem ilustrativa sobre medicina</p>
        </div>
 
        <p>
          A tecnologia de monitoramento remoto possibilita o acompanhamento contínuo de pacientes, permitindo
          diagnósticos mais rápidos e intervenções mais precisas. Isso é particularmente crucial em situações
          onde a resposta rápida pode fazer a diferença na vida do paciente.
        </p>
        <div>
          <Image src="/images/tecnologia.jpg" alt="Tecnologia" width="250" height="250" />
          <p>Imagem ilustrativa sobre tecnologia</p>
        </div>
 
        <p>
          Ao integrar dispositivos médicos avançados com sistemas de TI, podemos coletar e analisar dados
          de forma eficiente, proporcionando uma compreensão mais profunda das condições dos pacientes.
          Isso abre portas para tratamentos personalizados e uma abordagem mais proativa à saúde.
        </p>
        <p>
          Em resumo, o monitoramento remoto é uma ferramenta poderosa que impulsiona a inovação na medicina
          e na tecnologia, melhorando a vida dos pacientes e facilitando avanços significativos na prestação
          de cuidados de saúde.
        </p>
        <footer>
      <p>&copy; 2023 MEDCONNECT. Todos os direitos reservados.</p>
      {/* Adicione mais informações ou links conforme necessário */}
    </footer>
      </div>
    </div>
  )
  }};
