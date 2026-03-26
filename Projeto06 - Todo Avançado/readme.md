# To-Do List Avançado
Este é um gerenciador de tarefas desenvolvido com JavaScript puro (Vanilla JS), focado em manipulação dinâmica do DOM, persistência de dados e funcionalidades de filtragem. O projeto permite a criação, edição, remoção e organização de tarefas de forma intuitiva.

## 🚀 Funcionalidades
  - **Gerenciamento de Tarefas**: Adição, conclusão e exclusão de itens.
  - **Edição Dinâmica**: Alteração do texto de tarefas já existentes.
  - **Sistema de Busca**: Filtragem em tempo real conforme o usuário digita.
  - **Filtros de Status**: Visualização segmentada entre "Todas", "Feitas" e "A Fazer".
  - **Persistência Local (LocalStorage)**: As tarefas permanecem salvas mesmo após atualizar a página.
  - **Interface Responsiva**: Design adaptável para diferentes tamanhos de tela.

## 🛠️ Tecnologias Utilizadas
  - **HTML5**: Estruturação semântica da aplicação.
  - **CSS3**: Estilização moderna com foco em experiência do usuário (UX).
  - **JavaScript (ES6+)**:
      - Manipulação de eventos.
      - Funções de ordem superior (`filter`, `forEach`).
      - API de LocalStorage para armazenamento de dados.

## 📂 Estrutura de Arquivos
```text
Projeto06 - Todo Avançado/
├── css/
│   └── styles.css      # Estilização global e componentes
├── js/
│   └── scripts.js      # Lógica de manipulação do DOM e LocalStorage
└── index.html          # Estrutura principal da aplicação
```

## 🔧 Como Executar
1.  Clone este repositório:
    ```bash
    git clone https://github.com/Luis-Gustavo-MC/Javascript.git
    ```
2.  Navegue até a pasta do projeto:
    ```bash
    cd "Projeto06 - Todo Avançado"
    ```
3.  Abra o arquivo `index.html` em seu navegador de preferência.

## 🧠 Conceitos Aplicados
Durante o desenvolvimento deste projeto, foram explorados conceitos como:

  - **Event Delegation**: Gerenciamento eficiente de eventos em elementos criados dinamicamente.
  - **Refatoração de Código**: Organização da lógica em funções modulares para facilitar a manutenção.
  - **Persistência de Estado**: Sincronização de objetos JavaScript com o JSON do LocalStorage.
