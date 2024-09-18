NOMES DOS INTEGRANTES DO GRUPO:

 - Guilherme Carvalho

 - Matheus Carvalho

 - Rodrigo Mourão
--------------------------------------------------------------------------

LINKS PARA OS REPOSITÓRIOS INDIVIDUAIS DOS INTEGRANTES:

 https://github.com/Guilhermeo4


 https://github.com/matheus1749

 https://github.com/RodrigoMourao17
 
-----------------------------------------------------------------------------------------------------------
Propósito do sistema solicitado:

 O propósito do sistema é uma ferramenta para armazenar portfólio; Sendo possível através desse sistema 
visualizar todo os projetos que aquele profissional ja participou, assim como as experiências daquele profissional!

-----------------------------------------------------------------------------------------------------------
5W2H em relação ao sistema:

 - What: Desenvolvimento do sistema de portfólio

 - Where: Uma página web

 - When: Será usado durante o processo de entrevista

 - Who: Profissionais que buscam uma ferramenta para armazenar seu portfólio e empresários ou empresas que buscam contratar

 - Why: Mostrar os projetos já realizados pelos profissionais da IBMEC, assim como todas as experiências já adquiradas

 - How much: Tempo de trabalho!

 - How: Usado pelas empresas ou interessados para fazerem pesquisas a respeito de um profisional!
---------------------------------------------------------------------------------------------------------------
Requisitos Funcionais
1. Registro e Login de Usuários
   - Registro: Formulário com nome de usuário, senha e e-mail. Backend verifica e salva.
   - Login: Formulário com nome de usuário e senha. Backend valida e retorna um token.
2. Exibição de Imagens
   - Upload: Formulário para enviar imagens. Backend salva as imagens.
   - Exibição: Mostra as imagens enviadas em uma galeria.
3. Opção de "Carregar Mais"
   - Funcionalidade: Botão que, ao ser clicado, carrega mais itens (por exemplo, projetos ou imagens). Backend fornece mais itens conforme solicitado.
4. Mostrar Tecnologias e Ferramentas Usadas
   - Exibição: Seção na página que lista tecnologias e ferramentas usadas no projeto.
5. Autenticação do Administrador
   - Admin Login: Formulário de login separado para administradores. Permissões para acessar áreas administrativas.
6. Página de Listagem de Projetos
   - Listagem: Página que exibe todos os projetos disponíveis em formato de lista.
7. Adicionar Novos Projetos ao Portfólio
   - Adicionar Projeto: Formulário para inserir nome, descrição, datas e links do projeto. Backend salva as informações.

Requisitos não funcionais

1. Compatibilidade com Navegadores e Sistemas Operacionais
Descrição: O sistema deve funcionar bem em Chrome, Firefox, Safari e Edge, e em Windows, macOS e Linux.
Critérios: O sistema deve ser testado em diferentes navegadores e sistemas operacionais para garantir funcionalidade e design consistentes.
2. Suporte a Múltiplos Idiomas (Inglês e Português)
Descrição: O sistema deve estar disponível em inglês e português.
Critérios: Deve ser possível alternar entre os dois idiomas, e todos os textos devem ser traduzidos corretamente.
3. Compatibilidade com Celulares e Computadores
Descrição: O sistema deve funcionar bem em dispositivos móveis e computadores.
Critérios: O design deve ser responsivo, ajustando-se a diferentes tamanhos de tela, e a funcionalidade deve ser mantida em ambos os tipos de dispositivos.
4. Desenvolvimento em React
Descrição: O sistema será desenvolvido usando React.
Critérios: O front-end deve ser construído com componentes React, e a performance deve ser otimizada.
5. Aplicação da Identidade Visual da IBMEC
Descrição: O sistema deve seguir a identidade visual da IBMEC.
Critérios: O design deve usar as cores, logotipos e fontes da IBMEC de forma consistente.
6. Controle de Acesso para Administradores Autenticados
Descrição: Somente administradores autenticados poderão editar informações e adicionar projetos.
Critérios: Apenas usuários autenticados como administradores terão acesso às áreas administrativas, e a autenticação deve ser segura.
