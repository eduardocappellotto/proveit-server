 
# Prove.it - Sistema Avaliativo - Back-end

O back-end do projeto Prove.it foi desenvolvido utilizando o framework Nest.js juntamente com TypeScript. O projeto segue os princípios de DDD (Domain-Driven Design) e está estruturado em três domínios principais: exams, resolutions e users. 

## 🚀 Tecnologias e ferramentas utilizadas

- **Nest.js**: Framework para construção de aplicações Node.js escaláveis e eficientes.
- **TypeScript**: Superconjunto de JavaScript que adiciona tipagem estática.
- **MongoDB Atlas**: Serviço de banco de dados MongoDB hospedado na nuvem.
- **JWT**: Para autenticação e emissão de tokens.

## 🛠️ Instalação e Uso

### Pré-requisitos

- Node.js
- npm/Yarn

### Configuração

1. Clone este repositório.

2. Na raiz do projeto, crie um arquivo chamado `.env` e insira as seguintes variáveis de ambiente:
   ```
   JWT_SECRET=your_jwt_secret_key
   MONGODB_CONNECTION_STRING=your_mongodb_connection_string
   ```
   
   Substitua `your_jwt_secret_key` e `your_mongodb_connection_string` pelos valores adequados.

3. Instale as dependências:
   ```
   npm install
   ```

4. Execute o projeto:
   ```
   npm start
   ```

## 📁 Estrutura do Projeto

O projeto é dividido em três domínios:

- **Exams**: Relacionado a tudo sobre exames.
- **Resolutions**: Lidando com resoluções de exames.
- **Users**: Gerenciamento e autenticação de usuários.

Além dos domínios, o projeto conta com um sistema robusto de autenticação utilizando JWT. Mesmo que o foco não tenha sido a implementação completa de todos os recursos de autenticação (como role guards), o sistema é completamente funcional e serve como uma boa base para projetos mais complexos.

## 📄 Postman Collection

Incluído no projeto há um arquivo JSON exportável para Postman contendo exemplos de todas as requisições. Isso pode ser útil para testar rapidamente todas as funcionalidades do back-end.

## 📝 Observações

- O projeto possui testes automáticos gerados pelo Nest.js, mas testes adicionais não foram implementados devido à natureza do projeto.
- O MongoDB Atlas utilizado é uma instância gratuita e é compartilhado com outros projetos. Por favor, seja cuidadoso ao realizar operações que possam afetar outros dados.
 