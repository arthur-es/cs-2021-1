# Tarefa 004: Git Branching - 03/06/2021

#### 1. Qual o nome do branch padrão do Git?
Resposta: main ou master

#### 2. O que o comando **<code>git branch nome</code>** realiza?
Resposta: Cria uma branch chamada nome

#### 3. Como criar um branch a partir de um commit específico?
Resposta: git checkout -b BRANCH_NAME COMMIT_ID

#### 4. Em um repositório, qual o efeito do comando **<code>git checkout -b bugfix/234</code>**?
Resposta: Cria uma branch de nome bugfix/234 e já muda pra ela.

#### 5. Qual o comando para se alternar para um branch de nome **experimento2**?
Resposta: git checkout experimento2

#### 6. Em um repositório com dois branches, **b1** e **b2**, onde b1 é o corrente, qual o efeito do comando **<code>git branch</code>**?
Resposta: Lista essas duas branchs.

#### 7. O que o comando **<code>git checkout -b</code>** nome faz?
Resposta: Sozinho nada, mas se passar um nome ele muda pra branch e se não existir uma branch com o nome passado ele cria e depois muda.

#### 8. Qual a função do <code>**comando git branch -d teste</code>**?
Resposta: Muda para a branch teste, se ela não existir cria a branch teste depois muda pra ela.

#### 9. Durante o desenvolvimento de um software é comum, por exemplo, utilizar um novo recurso por meio de experimentação. Talvez uma nova tecnologia, uma nova biblioteca que pode ser útil ao que está em desenvolvimento, ou até mesmo uma nova versão de um produto já empregado. Para que o uso deste novo recurso não interfira com o que é considerado pronto, um branch pode ser criado para a experimentação. Código que for criado para a experimentação existirá apenas no branch criado. Se eventualmente o experimento demonstrar um resultado satisfatório, as alterações realizadas no branch poderão ser incorporadas no que é considerado pronto, ou seja, no branch principal (master). Esta última ação é conhecida por merge. Neste item, crie uma sequência de comandos que simula um caso simples de criação e uso seguido de merge empregando um branch para ilustrar uma experimentação conforme acima. A sequência deve incluir, obrigatoriamente: (a) criação de um ou mais branches; (b) chaveamento para pelo menos dois branches e (c) merge.
Resposta:<br/>
<code>git checkout -b nova_funcionalidade</code><br/>
<code>git add .</code><br/>
<code>git commit -m "nova funcionalidade linda"</code><br/>
<code>git checkout main</code><br/>
<code>git merge nova_funcionalidade</code>

