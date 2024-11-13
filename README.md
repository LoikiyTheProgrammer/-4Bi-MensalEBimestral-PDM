# 4Bi-MensalEBimestral-PDM
Grupo:
Daniel Savala Lhoretti; Eduardo Pereira Nunes de Oliveira; Mario Andrade Netto; Henrique Correia Zacari; Ricardo Gabriel Camargo Soares.

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

# Tela principal:
O usuário pode digitar texto no campo TextInput, onde o estado noteText é atualizado.

  - Adicionar Nota (handleAddNote): Quando o usuário pressiona "Adicionar nota", a função handleAddNote é chamada. A função salva a nova nota no AsyncStorage e limpa o campo de texto. Um alerta de sucesso é exibido após a nota ser adicionada.

  - Botão "Ver notas salvas": Navega o usuário para a tela de notas salvas quando pressionado.

  - Logout (handleSignOut): O usuário pode sair do Firebase Authentication, o que o redireciona para a tela de login.

# Tela de notas salvas:
Ela recupera as notas do AsyncStorage usando o hook useEffect e as exibe em uma lista. O usuário pode deletar notas, o que remove a nota tanto do estado local quanto do AsyncStorage. O componente é atualizado automaticamente quando uma nota é deletada.

  - useEffect: Carrega as notas do AsyncStorage quando a tela de notas é exibida.

  - Exclusão das notas (handleDeleteNote): Remove uma nota da lista, tanto no estado quanto no AsyncStorage.

# Bibliotecas:
  - firebase;
  - react-native-async-storage/async-storage;
  - react-native-paper;
  - react-native-vector-icons;
  - react-native-masked-text.
