## Autenticação de usuário
---
### Caso 01: Login com credenciais válidas

| ID       | Descrição                                                |
| :------- | :------------------------------------------------------- |
| RF01-C01 | Login deve ser realizado com sucesso ao logar com senha e nome válido |

| **Pré-condições**                                             |
| :------------------------------------------------------------ |
| As credenciais fornecidas (usuário e senha) devem ser válidas e usuário deve estar cadastrado no sistema |

| **Passos**                                                        |
| :---------------------------------------------------------------- |
| **DADO** que o usuário esteja na tela de login             |
| **E** preencha o campo nome e senha com dados válidos|
| **QUANDO** clicar no botão "Login"                             |
| **ENTÃO** será redirecionados para o Dashboard do sistema      |

---
### Caso 02: Login inválido- campos em branco

| ID       | Descrição                                                |
| :------- | :------------------------------------------------------- |
| RF01-C02 | Login deve falhar ao tentar enviar os campos em branco |

| **Pré-condições**                                             |
| :------------------------------------------------------------ |
| Não há pré condição |

| **Passos**                                                        |
| :---------------------------------------------------------------- |
| **DADO** que o usuário esteja na tela de login             |
| **E** não preencha os campos obrigatórios|
| **QUANDO** clicar no botão "Login"                             |
| **ENTÃO** será exibida a mensagem "required" para todos os campos      |
---

### Caso 03: Login inválido- campo username em branco

| ID       | Descrição                                                |
| :------- | :------------------------------------------------------- |
| RF01-C03 | Login deve falhar ao tentar enviar o campo username em branco |

| **Pré-condições**                                             |
| :------------------------------------------------------------ |
| Não há pré condição |

| **Passos**                                                        |
| :---------------------------------------------------------------- |
| **DADO** que o usuário esteja na tela de login             |
| **E** não preencha o campo username|
| **QUANDO** clicar no botão "Login"                             |
| **ENTÃO** será exibida a mensagem "required" para o campo username      |
---

### Caso 04: Login inválido - campo senha em branco

| ID       | Descrição                                                |
| :------- | :------------------------------------------------------- |
| RF01-C04 | Login deve falhar ao tentar enviar o campo senha em branco |

| **Pré-condições**                                             |
| :------------------------------------------------------------ |
| Não há pré condição |

| **Passos**                                                        |
| :---------------------------------------------------------------- |
| **DADO** que o usuário esteja na tela de login             |
| **E** não preencha o campo senha|
| **QUANDO** clicar no botão "Login"                             |
| **ENTÃO** será exibida a mensagem "required" para o campo senha      |

---
### Caso 05: Login inválido -  senha inválida

| ID       | Descrição                                                |
| :------- | :------------------------------------------------------- |
| RF01-C05 | Login deve falhar com senha inválida |

| **Pré-condições**                                             |
| :------------------------------------------------------------ |
| Usuário deve estar cadastrado no sistema |

| **Passos**                                                        |
| :---------------------------------------------------------------- |
| **DADO** que o usuário esteja na tela de login             |
| **E** preencha uma senha incorreta
| **QUANDO** clicar no botão "Login"                             |
| **ENTÃO** será exibida a mensagem "Invalid credentials" para o campo senha  |
---

### Caso 06: Login inválido - username inválido

| ID       | Descrição                                                |
| :------- | :------------------------------------------------------- |
| RF01-C06 | Login deve falhar com username inválido |

| **Pré-condições**                                             |
| :------------------------------------------------------------ |
| Usuário deve estar cadastrado no sistema |

| **Passos**                                                        |
| :---------------------------------------------------------------- |
| **DADO** que o usuário esteja na tela de login             |
| **E** preencha um username incorreto
| **QUANDO** clicar no botão "Login"                             |
| **ENTÃO** será exibida a mensagem "Invalid credentials" para o campo senha  |
---


### Caso 07: Login inválido - usuario desabilitado

| ID       | Descrição                                                |
| :------- | :------------------------------------------------------- |
| RF01-C07 | Login deve falhar com usuario cadastrado como desabilitado |

| **Pré-condições**                                             |
| :------------------------------------------------------------ |
| Usuário deve estar cadastrado no sistema e setado com status "disabled" |

| **Passos**                                                        |
| :---------------------------------------------------------------- |
| **DADO** que o usuário esteja na tela de login             |
| **E** preencha o campo nome e senha com dados válidos
| **QUANDO** clicar no botão "Login"                             |
| **ENTÃO** será exibida a mensagem "Account disabled"   |