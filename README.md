# Mensal TIA
Grupo:
Daniel Savala Lhoretti; Mario Andrade Netto; Henrique Correia Zacari.

# Cadastro de Usuário (signUp.jsx)
O fluxo de cadastro começa quando o usuário preenche o formulário com seu nome completo, data de nascimento, e-mail, senha e confirmação de senha. Após o preenchimento, ao clicar no botão de "Criar", o processo de criação de usuário é iniciado com a seguinte sequência:

  - Validação da Senha:
O aplicativo verifica se as senhas inseridas coincidem. Se as senhas não forem iguais, o cadastro não prossegue e um erro é exibido.

  - Criação de Usuário no Firebase Auth:
A função createUserWithEmailAndPassword do Firebase Authentication é utilizada para registrar o usuário no sistema com o e-mail e senha fornecidos. Se o registro for bem-sucedido, o Firebase gera um UID (identificador único do usuário), que será usado para armazenar os dados adicionais no Firestore.

  - Armazenamento de Dados no Firestore:
Após a criação do usuário, os dados adicionais (nome completo e data de nascimento) são armazenados em um documento na coleção "Users" do Firestore. A função setDoc é usada para criar um documento associado ao UID do usuário com os campos FullName, BirthDate e Email.

  - Navegação para a Tela Principal:
Após o sucesso no registro e armazenamento de dados, o usuário é redirecionado para a tela principal da aplicação.

# Login de Usuário (signIn.jsx)
O fluxo de login permite que um usuário previamente cadastrado autentique-se no sistema inserindo seu e-mail e senha. O processo é descrito abaixo:

  - Entrada de Dados: O usuário insere seu e-mail e senha no formulário de login.

  - Autenticação com Firebase Auth:
A função signInWithEmailAndPassword do Firebase Authentication é chamada para verificar as credenciais do usuário. Se as credenciais estiverem corretas, o Firebase autentica o usuário e o redireciona para a tela principal da aplicação.
  - Tratamento de Erros:
Caso o e-mail ou senha estejam incorretos, o Firebase retornará uma mensagem de erro, que será exibida no console e poderá ser tratada para ser mostrada ao usuário.
