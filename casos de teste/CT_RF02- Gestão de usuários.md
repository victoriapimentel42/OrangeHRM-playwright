## Gestão de usuário
---
### Caso 01: Cadastro de usuário com sucesso

| ID       | Descrição                                                |
| :------- | :------------------------------------------------------- |
| RF02-C01 | Cadastro de usuário deve ser realizado com sucesso ao preencher os campos com dados válidos |

| **Pré-condições**                                             |
| :------------------------------------------------------------ |
| O funcionário deve estar cadastrado no sistema para ser adicionado como usuário |

| **Passos**                                                        |
| :---------------------------------------------------------------- |
| **DADO** que o usuário esteja na tela de cadastro de usuários             |
| **E** preencha os campos com  dados válidos|
| **QUANDO** clicar no botão "Save"                             |
| **ENTÃO** o usuário deve ser cadastrado e exibido na listagem de admin    |

---

### Caso 02: Cadastro inválido- campos obrigatórios em branco

| ID       | Descrição                                                |
| :------- | :------------------------------------------------------- |
| RF02-C02 | Cadastro deve falhar ao tentar enviar  os campos em branco|

| **Pré-condições**                                             |
| :------------------------------------------------------------ |
| Não há|

| **Passos**                                                        |
| :---------------------------------------------------------------- |
| **DADO** que o usuário esteja na tela de cadastro de usuários             |
| **E** não preencha os campos obrigatórios|
| **QUANDO** clicar no botão "Save"                             |
| **ENTÃO** será exibida a mensagem "Passwords do not match" para o campo confirm password e "Required" para os outros campos   |

---

### Caso 03: Cadastro inválido -  funcionário não existente

| ID       | Descrição                                                |
| :------- | :------------------------------------------------------- |
| RF02-C03 | Cadastro deve falhar ao tentar vincular um funcionário não existente

| **Pré-condições**                                             |
| :------------------------------------------------------------ |
| Funcionário vinculado não deve existir|

| **Passos**                                                        |
| :---------------------------------------------------------------- |
| **DADO** que o usuário esteja na tela de cadastro de usuários             |
| **E** vincule um funcionário que não exista|
| **ENTÃO** será exibida a mensagem "Invalid" para o campo    |

---

### Caso 04: Cadastro inválido – nome de usuário com número de caracteres abaixo do mínimo permitido

| ID       | Descrição                                                |
| :------- | :------------------------------------------------------- |
| RF02-C04 | O sistema deve impedir o cadastro quando o nome de usuário tiver menos de 5 caracteres.

| **Pré-condições**                                             |
| :------------------------------------------------------------ |
| O funcionário deve estar cadastrado no sistema e os campos devem estar preenchidos com dados válidos|

| **Passos**                                                        |
| :---------------------------------------------------------------- |
| **DADO** que o usuário esteja na tela de cadastro de usuários             |
| **E** preencha o campo username com menos de 5 caracteres|
| **ENTÃO** será exibida a mensagem "Should be at least 5 characters" para o campo  |

---

### Caso 05: Cadastro válido - nome de usuário com número de caracteres no minimo permitido

| ID       | Descrição                                                |
| :------- | :------------------------------------------------------- |
| RF02-C05 | O sistema deve aceitar o cadastro quando o nome de usuário tiver exatamente 5 caracteres.

| **Pré-condições**                                             |
| :------------------------------------------------------------ |
| O funcionário deve estar cadastrado no sistema e os campos devem estar preenchidos com dados válidos|

| **Passos**                                                        |
| :---------------------------------------------------------------- |
| **DADO** que o usuário esteja na tela de cadastro de usuários             |
| **E** preencha o campo username com 5 caracteres|
| **QUANDO** clicar no botão "Save"                             |
| **ENTÃO** o usuário deve ser cadastrado e exibido na listagem de admin

---

### Caso 06: Cadastro inválido - nome de usuário com número de caracteres acima do máximo permitido

| ID       | Descrição                                                |
| :------- | :------------------------------------------------------- |
| RF02-C06 | O sistema deve impedir o cadastro quando o nome de usuário tiver mais de 40 caracteres.

| **Pré-condições**                                             |
| :------------------------------------------------------------ |
| O funcionário deve estar cadastrado no sistema e os campos  devem estar preenchidos com dados válidos|

| **Passos**                                                        |
| :---------------------------------------------------------------- |
| **DADO** que o usuário esteja na tela de cadastro de usuários             |
| **E** preencha o campo username com mais de 40 caracteres|                          |
| **ENTÃO** a mensagem "Should not exceed 40 characters" deve ser exibida para o campo

---

### Caso 07: Cadastro válido - nome de usuário com número de caracteres no máximo permitido

| ID       | Descrição                                                |
| :------- | :------------------------------------------------------- |
| RF02-C07 | O sistema deve aceitar o cadastro quando o nome de usuário tiver exatamente 40 caracteres.

| **Pré-condições**                                             |
| :------------------------------------------------------------ |
| O funcionário deve estar cadastrado no sistema e os campos devem estar preenchidos com dados válidos|

| **Passos**                                                        |
| :---------------------------------------------------------------- |
| **DADO** que o usuário esteja na tela de cadastro de usuários             |
| **E** preencha o campo username com 40 caracteres|
| **QUANDO** clicar no botão "Save"                             |
| **ENTÃO** o usuário deve ser cadastrado e exibido na listagem de admin

---

### Caso 08: Cadastro inválido - nome de usuário já existente

| ID       | Descrição                                                |
| :------- | :------------------------------------------------------- |
| RF02-C08 | O sistema deve impedir o cadastro quando o nome de usuário já existir

| **Pré-condições**                                             |
| :------------------------------------------------------------ |
| Deve existir um usuário com o mesmo username cadastrado e os demais campos devem estar preenchidos com valores válidos|

| **Passos**                                                        |
| :---------------------------------------------------------------- |
| **DADO** que o usuário esteja na tela de cadastro de usuários             |
| **E** preencha o campo username com um valor que já exista|                           |
| **ENTÃO** a mensagem "Already exists" será exibida
---

### Caso 09: Cadastro inválido - campo password com número de caracteres abaixo do mínimo permitido

| ID       | Descrição                                                |
| :------- | :------------------------------------------------------- |
| RF02-C09 | O sistema deve impedir o cadastro quando o campo password tiver menos de 8 caracteres

| **Pré-condições**                                             |
| :------------------------------------------------------------ |
| O funcionário deve estar cadastrado no sistema e os demais campos devem estar preenchidos com valores válidos|

| **Passos**                                                        |
| :---------------------------------------------------------------- |
| **DADO** que o usuário esteja na tela de cadastro de usuários             |
| **E** preencha o campo password com menos de 8 caracteres|                           |
| **ENTÃO** a mensagem "Should have at least 8 characters" será exibida para o campo
---
### Caso 10: Cadastro inválido - campo password com número de caracteres acima do limite permitido

| ID       | Descrição                                                |
| :------- | :------------------------------------------------------- |
| RF02-C10 | O sistema deve impedir o cadastro quando o campo password tiver mais de 64 caracteres

| **Pré-condições**                                             |
| :------------------------------------------------------------ |
| O funcionário deve estar cadastrado no sistema e os demais campos devem estar preenchidos com valores válidos|

| **Passos**                                                        |
| :---------------------------------------------------------------- |
| **DADO** que o usuário esteja na tela de cadastro de usuários             |
| **E** preencha o campo password com mais de 64 caracteres                    |
| **ENTÃO** a mensagem "Should not exceed 64 characters" será exibida para o campo
---
### Caso 11: Cadastro inválido - campo password sem caractere especial

| ID       | Descrição                                                |
| :------- | :------------------------------------------------------- |
| RF02-C11 | O sistema deve impedir o cadastro quando o campo password não possui caractere especial

| **Pré-condições**                                             |
| :------------------------------------------------------------ |
| O funcionário deve estar cadastrado no sistema e os demais campos devem estar preenchidos com valores válidos|

| **Passos**                                                        |
| :---------------------------------------------------------------- |
| **DADO** que o usuário esteja na tela de cadastro de usuários             |
| **E** preencha o campo password sem um caractere especial                  |
| **ENTÃO** a mensagem "Your password must contain minimum 1 special character" será exibida para o campo
---

### Caso 12: Cadastro inválido - campo password sem números

| ID       | Descrição                                                |
| :------- | :------------------------------------------------------- |
| RF02-C12 | O sistema deve impedir o cadastro quando o campo password não possui números

| **Pré-condições**                                             |
| :------------------------------------------------------------ |
| O funcionário deve estar cadastrado no sistema e os demais campos devem estar preenchidos com valores válidos|

| **Passos**                                                        |
| :---------------------------------------------------------------- |
| **DADO** que o usuário esteja na tela de cadastro de usuários             |
| **E** preencha o campo password sem um número                 |
| **ENTÃO** a mensagem "Your password must contain minimum 1 number" será exibida para o campo
---

### Caso 13: Cadastro inválido - campo password sem letra maiúscula

| ID       | Descrição                                                |
| :------- | :------------------------------------------------------- |
| RF02-C13 | O sistema deve impedir o cadastro quando o campo password não possui letra maiúscula

| **Pré-condições**                                             |
| :------------------------------------------------------------ |
| O funcionário deve estar cadastrado no sistema e os demais campos devem estar preenchidos com valores válidos|

| **Passos**                                                        |
| :---------------------------------------------------------------- |
| **DADO** que o usuário esteja na tela de cadastro de usuários             |
| **E** preencha o campo password sem uma letra maiúscula                 |
| **ENTÃO** a mensagem "Your password must contain minimum 1 upper-case letter" será exibida para o campo
---
### Caso 14: Cadastro inválido - campo password com requisitos mínimos

| ID       | Descrição                                                |
| :------- | :------------------------------------------------------- |
| RF02-C14 | O sistema deve impedir o cadastro quando o campo password possui os requisitos mínimos para validação

| **Pré-condições**                                             |
| :------------------------------------------------------------ |
| O funcionário deve estar cadastrado no sistema e os demais campos devem estar preenchidos com valores válidos|

| **Passos**                                                        |
| :---------------------------------------------------------------- |
| **DADO** que o usuário esteja na tela de cadastro de usuários             |
| **E** preencha o campo password com os requisitos mínimos                |
| **ENTÃO** a mensagem "Your password meets the minimum requirements, but it could be guessable" será exibida para o campo
---

### Caso 15: Cadastro inválido - senhas diferentes

| ID       | Descrição                                                |
| :------- | :------------------------------------------------------- |
| RF02-C15 | O sistema deve impedir o cadastro quando as senhas digitadas são diferentes

| **Pré-condições**                                             |
| :------------------------------------------------------------ |
| O funcionário deve estar cadastrado no sistema e os demais campos devem estar preenchidos com valores válidos|

| **Passos**                                                        |
| :---------------------------------------------------------------- |
| **DADO** que o usuário esteja na tela de cadastro de usuários             |
| **E** preencha o campo password com valor válido             |
|**QUANDO** preencher o campo "confirm Password" com valor diferente|
| **ENTÃO** a mensagem "Passwords do not match" será exibida para o campo confirm password
---

### Caso 16: Exclusão de usuário

| ID       | Descrição                                                |
| :------- | :------------------------------------------------------- |
| RF02-C16 | Exclusão de um usuário deve ser realizada com sucesso

| **Pré-condições**                                             |
| :------------------------------------------------------------ |
| Usuário a ser excluído já está cadastrado no sistema|

| **Passos**                                                        |
| :---------------------------------------------------------------- |
| **DADO** que o usuário esteja na tela de gerenciar usuários             |
| **E** clique na opção de exclusão            |
|**QUANDO** confirmar a ação de exclusão|
| **ENTÃO** o usuário não deve aparecer na listagem de admin
---

### Caso 17: Edição de cargo do usuário

| ID       | Descrição                                                |
| :------- | :------------------------------------------------------- |
| RF02-C17 | Deve ser possível editar o cargo de um usuário

| **Pré-condições**                                             |
| :------------------------------------------------------------ |
| Usuário a ser editado deve estar cadastrado no sistema|

| **Passos**                                                        |
| :---------------------------------------------------------------- |
| **DADO** que o usuário esteja na tela de gerenciar usuários             |
| **E** clique na opção de edição            |
| **E** altere o valor do campo User Role para um novo cargo            |
|**QUANDO** clicar no botão "Save"|
| **ENTÃO** o novo cargo deve ser exibido na listagem de admin
---

### Caso 18: Edição de status do usuário

| ID       | Descrição                                                |
| :------- | :------------------------------------------------------- |
| RF02-C18 | Deve ser possível editar o status de um usuário

| **Pré-condições**                                             |
| :------------------------------------------------------------ |
| Usuário a ser editado deve estar cadastrado no sistema|

| **Passos**                                                        |
| :---------------------------------------------------------------- |
| **DADO** que o usuário esteja na tela de gerenciar usuários             |
| **E** clique na opção de edição            |
| **E** altere o status de cadastro           |
|**QUANDO** clicar no botão "Save"|
|**ENTÃO** o novo status deve ser exibido na listagem de admin
---

### Caso 19: Edição de username do usuário

| ID       | Descrição                                                |
| :------- | :------------------------------------------------------- |
| RF02-C19 | Deve ser possível editar o username de um usuário

| **Pré-condições**                                             |
| :------------------------------------------------------------ |
| Usuário a ser editado deve estar cadastrado no sistema|

| **Passos**                                                        |
| :---------------------------------------------------------------- |
| **DADO** que o usuário esteja na tela de gerenciar usuários             |
| **E** clique na opção de edição            |
| **E** altere o username do usuário com um valor válido          |
|**QUANDO** clicar no botão "Save"|
|**ENTÃO** o novo username deve ser exibido na listagem de admin
---

### Caso 20: Edição inválida do campo user name (uso de caracteres abaixo do permitido)

| ID       | Descrição                                                |
| :------- | :------------------------------------------------------- |
| RF02-C20 | Não deve ser possível editar o username de um usuário com menos de 5 caracteres

| **Pré-condições**                                             |
| :------------------------------------------------------------ |
| Usuário a ser editado deve estar cadastrado no sistema|

| **Passos**                                                        |
| :---------------------------------------------------------------- |
| **DADO** que o usuário esteja na tela de gerenciar usuários             |
| **E** clique na opção de edição            |
|**QUANDO** alterar o campo username do usuário para um valor com menos de 5 caracteres |
|**ENTÃO** será exibida a mensagem "Should be at least 5 characters" para o campo
---


### Caso 21: Edição inválida do campo user name (uso de caracteres acima do permitido)

| ID       | Descrição                                                |
| :------- | :------------------------------------------------------- |
| RF02-C21 | Não deve ser possível editar o username de um usuário com mais de 40 caracteres

| **Pré-condições**                                             |
| :------------------------------------------------------------ |
| Usuário a ser editado deve estar cadastrado no sistema|

| **Passos**                                                        |
| :---------------------------------------------------------------- |
| **DADO** que o usuário esteja na tela de gerenciar usuários             |
| **E** clique na opção de edição            |
|**QUANDO** alterar o campo username do usuário para um valor com mais de 40 caracteres |
|**ENTÃO** será exibida a mensagem "Should not exceed 40 characters" para o campo
---

### Caso 22: Edição de password do usuário

| ID       | Descrição                                                |
| :------- | :------------------------------------------------------- |
| RF02-C22 | Deve ser possível editar a senha de um usuário

| **Pré-condições**                                             |
| :------------------------------------------------------------ |
| Usuário a ser editado deve estar cadastrado no sistema|

| **Passos**                                                        |
| :---------------------------------------------------------------- |
| **DADO** que o usuário esteja na tela de gerenciar usuários             |
| **E** clique na opção de edição            |
| **E** habilite a opção "change password"            |
|**QUANDO** alterar a senha com valores válidos|
| **ENTÃO** usuario editado deve conseguir se logar com nova senha
---

### Caso 23: Edição inválida de password do usuário (uso de caracteres abaixo do minimo permitido)

| ID       | Descrição                                                |
| :------- | :------------------------------------------------------- |
| RF02-C23 | Não deve ser possível editar a senha de um usuário

| **Pré-condições**                                             |
| :------------------------------------------------------------ |
| Usuário a ser editado deve estar cadastrado no sistema|

| **Passos**                                                        |
| :---------------------------------------------------------------- |
| **DADO** que o usuário esteja na tela de gerenciar usuários             |
| **E** clique na opção de edição            |
|**QUANDO** preencher o campo password com menos de 8 caracteres|
| **ENTÃO** a mensagem "Should have at least 8 characters" será exibida para o campo
---

### Caso 24: Edição inválida de password do usuário (uso de caracteres acima do minimo permitido)

| ID       | Descrição                                                |
| :------- | :------------------------------------------------------- |
| RF02-C24 | Não deve ser possível editar a senha de um usuário

| **Pré-condições**                                             |
| :------------------------------------------------------------ |
| Usuário a ser editado deve estar cadastrado no sistema|

| **Passos**                                                        |
| :---------------------------------------------------------------- |
| **DADO** que o usuário esteja na tela de gerenciar usuários             |
| **E** clique na opção de edição            |
|**QUANDO** preencher o campo password com mais de 64 caracteres|
| **ENTÃO** a mensagem "Should not exceed 64 characters" será exibida para o campo
---

### Caso 25: Edição inválida de password do usuário - (campo password sem caractere especial)

| ID       | Descrição                                                |
| :------- | :------------------------------------------------------- |
| RF02-C25 | Não deve ser possível editar a senha de um usuário

| **Pré-condições**                                             |
| :------------------------------------------------------------ |
| Usuário a ser editado deve estar cadastrado no sistema|

| **Passos**                                                        |
| :---------------------------------------------------------------- |
| **DADO** que o usuário esteja na tela de gerenciar usuários             |
| **E** clique na opção de edição            |
|**QUANDO** preencher o campo password sem um caractere especial|
| **ENTÃO** a mensagem "Your password must contain minimum 1 special character" será exibida para o campo
---

### Caso 26: Edição inválida de password do usuário - (campo password sem números)

| ID       | Descrição                                                |
| :------- | :------------------------------------------------------- |
| RF02-C26 | Não deve ser possível editar a senha de um usuário

| **Pré-condições**                                             |
| :------------------------------------------------------------ |
| Usuário a ser editado deve estar cadastrado no sistema|

| **Passos**                                                        |
| :---------------------------------------------------------------- |
| **DADO** que o usuário esteja na tela de gerenciar usuários             |
| **E** clique na opção de edição            |
|**QUANDO** preencher o campo password sem um número|
| **ENTÃO** a mensagem "Your password must contain minimum 1 number" será exibida para o campo
---

### Caso 27: Edição inválida de password do usuário - (campo password sem letra maiúscula)

| ID       | Descrição                                                |
| :------- | :------------------------------------------------------- |
| RF02-C27 | Não deve ser possível editar a senha de um usuário

| **Pré-condições**                                             |
| :------------------------------------------------------------ |
| Usuário a ser editado deve estar cadastrado no sistema|

| **Passos**                                                        |
| :---------------------------------------------------------------- |
| **DADO** que o usuário esteja na tela de gerenciar usuários             |
| **E** clique na opção de edição            |
|**QUANDO** preencher o campo password sem uma letra maiúscula|
| **ENTÃO** a mensagem "Your password must contain minimum 1 upper-case letter" será exibida para o campo
---

### Caso 28: Edição inválida de password do usuário - (senhas diferentes)

| ID       | Descrição                                                |
| :------- | :------------------------------------------------------- |
| RF02-C28 | Não deve ser possível editar a senha de um usuário

| **Pré-condições**                                             |
| :------------------------------------------------------------ |
| Usuário a ser editado deve estar cadastrado no sistema|

| **Passos**                                                        |
| :---------------------------------------------------------------- |
| **DADO** que o usuário esteja na tela de gerenciar usuários             |
| **E** clique na opção de edição            |
|**QUANDO** preencher o campo "confirm Password" com valor diferente|
| **ENTÃO** a mensagem "Passwords do not match" será exibida para o campo confirm password
---

### Caso 29: Busca de usuário pelo username
| ID       | Descrição                                                |
| :------- | :------------------------------------------------------- |
| RF02-C29 | Deve ser possível pesquisar por um usuário pelo username

| **Pré-condições**                                             |
| :------------------------------------------------------------ |
| Usuário a ser pesquisado deve estar cadastrado no sistema|

| **Passos**                                                        |
| :---------------------------------------------------------------- |
| **DADO** que o usuário esteja na tela de gerenciar usuários             |
| **E** pesquise por um username cadastrado            |
|**QUANDO** clicar em "search"|
| **ENTÃO** o usuário pesquisado deve ser exibido na lista de resultados
---


### Caso 30: Busca de usuário pela função
| ID       | Descrição                                                |
| :------- | :------------------------------------------------------- |
| RF02-C30 | Deve ser possível pesquisar um usuário pela função

| **Pré-condições**                                             |
| :------------------------------------------------------------ |
| Usuário a ser pesquisado deve estar cadastrado no sistema|

| **Passos**                                                        |
| :---------------------------------------------------------------- |
| **DADO** que o usuário esteja na tela de gerenciar usuários             |
| **E** selecione uma das opções de funções disponíveis            |
|**QUANDO** clicar em "search"|
| **ENTÃO** todos os usuários exibidos na lista de resultados devem pertencer à função selecionada
---


### Caso 31 : Busca de usuário pelo status de cadastro
| ID       | Descrição                                                |
| :------- | :------------------------------------------------------- |
| RF02-C31 | Deve ser possível pesquisar um usuário pelo status de cadastro

| **Pré-condições**                                             |
| :------------------------------------------------------------ |
| Usuário a ser pesquisado deve estar cadastrado no sistema|

| **Passos**                                                        |
| :---------------------------------------------------------------- |
| **DADO** que o usuário esteja na tela de gerenciar usuários             |
| **E** selecione uma das opções de status disponíveis            |
|**QUANDO** clicar em "search"|
| **ENTÃO** todos os usuários exibidos na lista de resultados devem ter o status de cadastro selecionado
---

### Caso 32: Busca com sucesso- pesquisa pelo nome do funcionário
| ID       | Descrição                                                |
| :------- | :------------------------------------------------------- |
| RF02-C32 | Deve ser possível pesquisar um usuário pelo nome real

| **Pré-condições**                                             |
| :------------------------------------------------------------ |
| Usuário a ser pesquisado deve estar cadastrado no sistema|

| **Passos**                                                        |
| :---------------------------------------------------------------- |
| **DADO** que o usuário esteja na tela de gerenciar usuários             |
| **E** pesquise pelo nome real do funcionário           |
|**QUANDO** clicar em "search"|
| **ENTÃO** o usuário pesquisado deve aparecer na lista de resultados
---

### Caso 33: Busca inválida- nome de funcionário não cadastrado
| ID       | Descrição                                                |
| :------- | :------------------------------------------------------- |
| RF02-C33 | Não deve ser possível pesquisar pelo nome de um funcionário que não esteja cadastrado

| **Pré-condições**                                             |
| :------------------------------------------------------------ |
| Funcionário pesquisado não deve estar cadastrado no sistema|

| **Passos**                                                        |
| :---------------------------------------------------------------- |
| **DADO** que o usuário esteja na tela de gerenciar usuários             |
| **E** pesquise pelo nome de um usuário não cadastrado           |
|**QUANDO** clicar em "search"|
| **ENTÃO** a mensagem "Invalid" será exibida para o campo "Employee Name"
---

