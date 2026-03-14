<div align="center">

# Fintech

<img alt="Static Badge" src="https://img.shields.io/badge/React-19.2.0-blue?style=plastic&logo=react&logoColor=white">
<img alt="Static Badge" src="https://img.shields.io/badge/TypeScript-5.9.3-blue?style=plastic&logo=typescript&logoColor=white">
<img alt="Static Badge" src="https://img.shields.io/badge/Vite-7.3.1-purple?style=plastic&logo=vite&logoColor=white">
<img alt="Static Badge" src="https://img.shields.io/badge/Styled_Components-6.3.11-pink?style=plastic&logo=styled-components&logoColor=white">
<img alt="Static Badge" src="https://img.shields.io/badge/Recharts-3.8.0-orange?style=plastic&logo=recharts&logoColor=white">
<img alt="Static Badge" src="https://img.shields.io/badge/React_Router-7.13.1-blue?style=plastic&logo=react-router&logoColor=white">
<img alt="Static Badge" src="https://img.shields.io/badge/ESLint-9.39.1-purple?style=plastic&logo=eslint&logoColor=white">

</div>

<div align="center">

[Sobre](#sobre) •
[Arquitetura de Dados](#arquitetura-de-dados) •
[Tecnologias](#tecnologias) •
[Funcionalidades](#funcionalidades) •
[Estrutura do Projeto](#estrutura-do-projeto) •
[Configuração](#configuração) •
[Rotas](#rotas) •
[Contribuidores](#contribuidores) •
[Contato](#contato) •
[Licença](#licença)

</div>

<div align="center">
<img src="https://res.cloudinary.com/delo0gvyb/image/upload/v1773460452/Fintech_q0nwls.webp" alt="Banner" width="100%">
</div>

## Sobre

Fintech é uma aplicação web para gerenciamento financeiro, desenvolvida por Emmanuel Oliveira e baseada nos estudos da Origamid. O projeto permite aos usuários acompanhar as vendas, vindas de uma API, podendo analisar seus dados financeiros através de gráficos interativos.

## Tecnologias

As seguintes tecnologias foram utilizadas no desenvolvimento deste projeto:

- **React:** Uma biblioteca JavaScript para construir interfaces de usuário.
- **TypeScript:** Um superconjunto tipado de JavaScript que compila para JavaScript puro.
- **Vite:** Uma ferramenta de compilação que visa proporcionar uma experiência de desenvolvimento mais rápida e enxuta para projetos web modernos.
- **Styled-components:** Uma biblioteca para estilizar componentes React.
- **Recharts:** Uma biblioteca de gráficos para React.
- **React Router Dom:** Uma biblioteca de roteamento para React.
- **ESLint:** Uma ferramenta de análise de código estática para identificar padrões problemáticos.

## Funcionalidades

- **Dashboard Financeiro:** Visualização resumida das vendas em formato de gráficos interativos.
- **Lista de Vendas:** Exibição detalhada de todas as vendas com filtros por período.
- **Detalhes de Venda:** Página individual com informações completas de cada transação.
- **Filtro por Data:** Seleção de período personalizado ou botões de atalho (7, 15, 30 dias).
- **Estados de Pagamento:** Visualização do status de cada venda (pago, processando, falha).
- **Tipos de Pagamento:** Suporte para boleto, pix e cartão.
- **Sistema de Parcelas:** Exibição de parcelas quando aplicável.

## Arquitetura de Dados

Esta seção documenta como os dados são gerenciados na aplicação.

### Fonte de Dados

Os dados são recebidos de uma API externa: **`https://data.origamid.dev/vendas/`**

A API aceita parâmetros de consulta para filtrar por período:

- `inicio`: Data inicial do filtro
- `final`: Data final do filtro

Exemplo de requisição:

```
https://data.origamid.dev/vendas/?inicio=2026-01-01&final=2026-01-15
```

### Hooks Customizados

#### `useFetch<T>`

Um hook genérico para realizar requisições HTTP localizado em `src/hooks/use-fetch.tsx`.

**Funcionalidades:**

- Requisições fetch nativa do JavaScript
- Suporte a cancelamento de requisições (AbortController)
- Estados separados: `data`, `loading`, `error`
- Tipagem genérica para qualquer tipo de resposta

```typescript
const { data, loading, error } = useFetch<ISales[]>(url)
```

### Context API

O **`DataContext`** (`src/context/data-context.tsx`) gerencia o estado global de dados da aplicação.

**Estado fornecido:**

- `data`: Array de vendas (ISales[])
- `loading`: Status de carregamento
- `error`: Mensagem de erro (se houver)
- `start` / `end`: Datas do período selecionado
- `setStart` / `setEnd`: Funções para alterar o período

**Hook de acesso:** `useData()`

```typescript
const { data, loading, error, start, setStart, end, setEnd } = useData()
```

### Components que Utilizam

| Componente/Page                       | Hook Utilizado      | Propósito                        |
| ------------------------------------- | ------------------- | -------------------------------- |
| `src/main.tsx`                        | DataContextProvider | Provedor global                  |
| `src/pages/summary/index.tsx`         | useData             | Exibir resumo financeiro         |
| `src/pages/Sales/index.tsx`           | useData             | Listar todas as vendas           |
| `src/pages/Sale/index.tsx`            | useFetch            | Detalhes de uma venda            |
| `src/components/btn-months/index.tsx` | useData             | Alterar período rápido           |
| `src/containers/date-range/index.tsx` | useData             | Selecionar período personalizado |

## Estrutura do Projeto

```
src/
├── components/       # Componentes reutilizáveis
│   ├── btn-months/  # Botões de seleção rápida de período
│   ├── date-input/  # Input de data
│   ├── item-for-sales/    # Item de venda na lista
│   ├── loading/     # Componente de carregamento
│   └── sales-chart/ # Gráfico de vendas
├── containers/      # Componentes de layout
│   ├── date-range/  # Seletor de período
│   ├── header/      # Cabeçalho da aplicação
│   └── sidenav/     # Navegação lateral
├── context/         # Context API do React
│   └── data-context.tsx
├── hooks/           # Hooks customizados
│   └── use-fetch.tsx
├── pages/           # Páginas da aplicação
│   ├── Sale/        # Detalhes de uma venda
│   ├── Sales/       # Lista de vendas
│   └── summary/     # Dashboard/Resumo
├── router/          # Configuração de rotas
├── styles/          # Estilos globais e temas
└── utils/           # Funções utilitárias
```

## Configuração

Para executar este projeto localmente, siga estes passos:

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/fintech.git
   ```
2. Navegue até o diretório do projeto:
   ```bash
   cd fintech
   ```
3. Instale as dependências:
   ```bash
   pnpm install
   ```
4. Execute o servidor de desenvolvimento:
   ```bash
   pnpm dev
   ```
5. Abra seu navegador e visite `http://localhost:5173`.

### Scripts Disponíveis

| Script         | Descrição                                 |
| -------------- | ----------------------------------------- |
| `pnpm dev`     | Inicia o servidor de desenvolvimento      |
| `pnpm build`   | Compila o projeto para produção           |
| `pnpm lint`    | Executa a análise de código ESLint        |
| `pnpm preview` | Visualiza a versão de produção localmente |

## Rotas

A aplicação possui as seguintes rotas:

- **`/`**: Página inicial, exibe o resumo financeiro.
- **`/sales`**: Página que lista todas as vendas.
- **`/sales/:id`**: Página que exibe os detalhes de uma venda específica.

## Contribuidores ou proprietários

<img height="64px" src="https://res.cloudinary.com/delo0gvyb/image/upload/v1752287431/profile_mjvmdb.png"><br>
<small>Emmanuel Oliveira</small>

desenvolvido por 💖 [Emmanuel Oliveira](https://www.linkedin.com/feed/?trk=homepage-basic_sign-in-submit)<br>
© Todos os Direitos Reservados

### Contribua para os projetos

> - Clique na seta abaixo e veja como você pode contribuir para o projeto

<details close>
<summary>Como fazer uma contribuição ao Projeto ?</summary>
 - Familiarize-se com a documentação do projeto, que geralmente inclui guias de instalação.<br>
- Explore o código do projeto para entender sua estrutura e funcionamento.
<br>

**Faça um Fork**

Crie uma cópia (fork) do repositório original em sua conta do GitHub.<br>

<img alt="Static Badge" src="https://img.shields.io/badge/-path?style=social&logo=git&label=GitHub%20Docs&color=%23000">
<a href="https://docs.github.com/pt/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo"></a>

**Clone o Repositório**

Isso criará uma cópia local do projeto, onde você poderá fazer suas modificações.

<img alt="Static Badge" src="https://img.shields.io/badge/-path?style=social&logo=git&label=GitHub%20Docs&color=%23000">
<a href="https://docs.github.com/pt/repositories/creating-and-managing-repositories/cloning-a-repository"></a>

**Crie uma Nova Branch:**

Crie uma nova branch para isolar suas alterações.<br>
Isso facilita a organização do seu trabalho e a criação de pull requests.<br>

**Faça as Alterações:**

Crie funcionalidades, mude estilos ou resolva `bugs` que iram contribuir para a melhoria do Projeto.<br>

**Crie um Pull Request:**

Inclua uma descrição clara das suas alterações e explique como elas resolvem o problema ou melhoram o projeto.<br>
Solicitação: Envie um pull request para o repositório original, solicitando que suas alterações sejam incorporadas ao projeto.
<br>

**Revise e Responda a Feedback:**

Colabore: Os mantenedores do projeto podem solicitar alterações ou fornecer feedback sobre o seu código.

</details>

## Contato

[![Lindekin](https://img.shields.io/badge/--path?style=social&logo=Linkedin&logoColor=%230664C1&logoSize=auto&label=Linkedin&labelColor=%23fff&cacheSeconds=https%3A%2F%2Fwww.linkedin.com%2Fin%2Femmanuel-marcos-oliveira%2F)](https://www.linkedin.com/in/emmanuel-marcos-oliveira/)
[![WhatsApp](https://img.shields.io/badge/--path?style=social&logo=WhatsApp&logoColor=%231F3833&logoSize=auto&label=WhatsApp&color=%23fff&cacheSeconds=https%3A%2F%2Fwa.me%2F5511968336094)](https://wa.me/5511968336094)
<a href="mailto:ofs.dev.br@gmail.com"><img alt="Static Badge" src="https://img.shields.io/badge/--path?style=social&logo=Gmail&logoSize=auto&label=Gmail&cacheSeconds=--query&link=mailto%3Adev-oliveira%40outlook.com.br%22"> </a>

<sub>😁Obrigado por chegar até aqui!<sub>

## Licença

![Static Badge](https://img.shields.io/badge/--path?style=plastic&logo=mit&logoSize=auto&label=license%20MIT&labelColor=%23555555&color=%2397CA00)<br>
Lançado em 2026, este projeto está sob a **licença MIT**<br>
<br>

<div align="center">
<strong>⭐ Se este projeto foi útil para você, considere dar uma estrela!</strong>
</div>
