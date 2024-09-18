Casos de Usos 

 Nome do caso de uso: Armazenar portfólios
 - Atores: Cliente
 - Objetivo: Cliente deseja armazenar portfólios.
 - Pré-condições: O cliente precisa estar logado.
 - Fluxo Principal:
   - O usuário deve fazer login no sistema
   - O usuário escolhe entre criar ou editar seus projetos
   - O usuário recebe a confirmação de que seu projeto foi salvo
 - Pós-condições: O sistema está alterado com novas informações. 
---------------------------------------------------------------------------------------------------------------------------------------------
Nome do caso de uso: Excluir pasta de portfólios.
 - Atores: Cliente
 - Objetivo: Cliente deseja excluir uma pasta de portfólios de sua conta.
 - Pré-condições: O usuário deve estar autenticado e a pasta deve existir na lista de tarefas.
 - Fluxo Principal:
   - O usuário faz login no aplicativo.
   - O usuário escolhe qual pasta ele deseja excluir
   - O usuário clica na opção de excluir
   - O sistema solicita uma confirmação de que o cliente deseja realmente excluir o conteúdo selecionado
   - O cliente confirma a exclusão
   - O sistema exclui a pasta e os arquivos selecionados
 - Pós-condições: A pasta é removida do sistema e não está mais disponível na lista de projetos do usuário. 
------------------------------------------------------------------------------------------------------------------------------------------
Nome do caso de uso: Visualizar portfólio

- Atores: Cliente
- Objetivo: Cliente deseja visualizar o portfólio e as experiências armazenadas.
- Pré-condições: O cliente precisa estar logado e ter portfólios armazenados.
- Fluxo Principal:
  - O usuário faz login no sistema.
  - O usuário seleciona a opção para visualizar seu portfólio.
  - O sistema exibe a lista de projetos e experiências do usuário.
  - O usuário seleciona um projeto ou experiência para ver detalhes.
  - O sistema exibe as informações detalhadas do projeto ou experiência selecionada.
- Pós-condições: O sistema mostra o portfólio e as experiências armazenadas ao cliente.

-----------------------------------------------------------------------------------------------------------------------------------------
Nome do caso de uso: Atualizar informações do portfólio
- Atores: Cliente
- Objetivo: Cliente deseja atualizar informações de um projeto ou experiência no portfólio.
- Pré-condições: O cliente precisa estar logado e ter um projeto ou experiência existente que deseja atualizar.
- Fluxo Principal:O usuário faz login no sistema.
                 O usuário seleciona a opção para editar um projeto ou experiência existente.
                 O sistema exibe o formulário de edição com as informações atuais.
                 O usuário altera as informações conforme desejado.
                 O usuário confirma as alterações.
                 O sistema salva as informações atualizadas e exibe uma confirmação.
- Pós-condições: As informações do projeto ou experiência são atualizadas no portfólio do usuário.

-----------------------------------------------------------------------------------------------------------------------------------------

Nome do caso de uso: Buscar projetos e experiências
- Atores: Cliente
- Objetivo: Cliente deseja buscar projetos e experiências específicas em seu portfólio.
- Pré-condições: O cliente precisa estar logado.
- Fluxo Principal:O usuário faz login no sistema.
                 O usuário acessa a função de busca.
                 O usuário insere termos de pesquisa (por exemplo, palavras-chave, datas, tipos de projetos).
                 O sistema processa a busca e exibe os resultados correspondentes.
                 O usuário seleciona um resultado para visualizar detalhes.
- Pós-condições: O sistema exibe os projetos e experiências que correspondem aos termos de busca fornecidos.

------------------------------------------------------------------------------------------------------------------------------------------

Nome do caso de uso: Adicionar nova experiência
- Atores: Cliente
- Objetivo: Cliente deseja adicionar uma nova experiência ao seu portfólio.
- Pré-condições: O cliente precisa estar logado.
- Fluxo Principal:O usuário faz login no sistema.
                 O usuário seleciona a opção para adicionar uma nova experiência.
                 O sistema exibe um formulário para preenchimento dos detalhes da nova experiência.
                 O usuário preenche os campos obrigatórios e opcionais.
                 O usuário confirma a adição da nova experiência.
                 O sistema salva a nova experiência e exibe uma confirmação.
- Pós-condições: A nova experiência é adicionada ao portfólio do usuário.

