### Tarefa 003: Git Exercícios - 03/06/2021.

Responda as questões abaixo (exercite os comandos do git correspondentes). Lembre-se de que o “interessante” não é exatamente o conjunto de respostas, mas o processo de obtê-las e a experiência obtida com a execução dos comandos.

1. Qual o comando para obter a versão instalada do Git?
Resposta: git --version

2. Qual o efeito da execução de cada um dos comandos abaixo?
  a. git help
	Resposta: Mostra todos os comandos Git e um resumo do que esse comando faz.
	
  b. git help checkout
Reposta: Abre a documentação do comando git checkout. Essa é uma doc em HTML.

  c. git help merge
Reposta: Abre a documentação/manual do comando git merge. Essa é uma doc em HTML.

  d. git init
Resposta: Inicia ou reinicia um repositório Git localmente.

  e. git add --all
Resposta: Adiciona todos os arquivos atuais/com alteracao no stash/index.

  f. git add -u
Resposta: Atualiza o index/stash só nos arquivos que já estão lá. Sem adicionar novos.

  g. git config -l
Resposta: Lista todas as variáveis que estão no arquivo de configurações, junto com os seus valores.

  h. git mv a.txt b.txt
Resposta: Muda o nome do arquivo de a para b. Também pode ser utilizado pra mover arquivos se passar o path correto. E tb renomear pastas e mover.

  i. git reset --hard
Resposta: Reseta o index/stash da branch atual. Tudo é apagado.

  j. git log -27
Resposta: Lista os últimos commits.

3. O fluxo “clássico” de interação com o Git é algo como “alterar um ou mais arquivos”, “acrescentar essas mudanças para serem contemplados no próximo commit” e, finalmente, executar um “commit”. Quais os comandos necessários para realizar os dois últimos “passos” desse fluxo?
Resposta: 
git add .
git commit -m "mensagem do commit"
git push

4. Qual o comando deve ser executado para identificar o que foi alterado desde o último “commit”?

5. Em um dado repositório, arquivos simplesmente copiados para lá, ou seja, _untracked_, podem ser exibidos/identificados com que comando?

6. Qual o comando para efetuar um _commit_?
Respota: git commit -m "msg do commit"

7. Qual o comando que devemos empregar para descartar mudanças ocorridas no arquivo teste.txt, por exemplo?

8. O que deve ser feito para que um determinado diretório do seu repositório seja ignorado pelo Git? Faça uma busca por **.gitignore**.
Resposta: basta colocar no arquivo .gitignore o nome da pasta ou arquivo que deseja que o git ignore.

9. O que acontece se o seu repositório local for acidentalmente removido?

10. Como clonar um repositório remoto?
Resposta: git clone url_do_repositorio

11. Em alguns cenários **git log** pode produzir extensos resultados. Se houver interesse em visualizar o histórico de um repositório, onde cada mudança é fornecida exatamente em uma única linha, qual o comando que deve ser empregado?

12. Em qual arquivo o Git armazena informações de configuração empregadas por usuário?

13. Qual o comando para criar um repositório local?
Resposta: git init

14. Qual o nome do diretório criado pelo Git quando se executa o comando **git init**?

15. Qual o comando para adicionar todos os arquivos modificados? (Aqueles para os quais **git status** identificam como **modified**?)
Resposta: git add --all ou se for da pasta atual basta utilizar git add .

16. O Git faz uso do valor de hash conhecido por SHA1. O que isto significa? Qual o propósito? O que é SHA1?

17. Qual a palavra para indicar o último _commit_ em vez do valor de hash SHA1 correspondente?

18. Quando se cria dois arquivos usando um editor de texto qualquer e, na sequência, executamos o comando **git add -u**, os dois arquivos criados passam de _untracked_ para _new file_?
19. Qual o efeito da execução dos dois comandos abaixo, nesta ordem, em um dado repositório?
**git reset --soft HEAD~1**
**git reset --hard**
20. Após o emprego de um ambiente integrado de desenvolvimento (IDE), é comum a criação de arquivos e diretórios. Qual o comando que podemos empregar para remover arquivos e diretórios _untracked_?
21. Qual o nome do arquivo no qual podemos inserir a indicação para o Git de arquivos e diretórios a serem ignorados?
22. Quando se cria o arquivo _MinhaClasse.class_ em um dado diretório e desejamos que arquivos com a extensão .class, como neste caso, sejam ignorados por todos os membros de uma equipe que estão contribuindo com um dado projeto, como devemos proceder?
23. jQuery é uma famosa biblioteca em JavaScript. Consulte detalhes em [jQuery](http://jquery.com). O repositório correspondente encontra-se em [gitRep](https://github.com/jquery/jquery.git). Faça o clone deste repositório.
24. No repositório **jqueryrepo**, criado no passo anterior, qual o efeito do comando
**git shortlog -sne**?
25. No repositório **jqueryrepo**, qual o efeito de **git remote -v**?
26. Um repositório Git pode ser etiquetado ao longo do tempo. Ou seja, _commits_ específicos podem ser “marcados” ou “etiquetados” para facilitar referências posteriores. Para listar todas as “etiquetas” (_tags_) estabelecidas para um dado repositório, qual comando deve ser executado?
27. Caso um dato repositório retorne muitas “marcas” ou “etiquetas” para o comando **git tag**, como retornar apenas aquelas que atendem a determinado padrão, por exemplo, iniciadas por 2.0?
28. Qual o efeito do comando **git tag -a 3.4-gold -m “minha versão ouro”**?
29. Após executado o comando acima, qual o efeito de **git show 3.4-gold**?
30. O que o comando **git push origin 3.4-gold** teria como efeito?
31. Após executar um commit, qual o efeito de **git commit --amend**?
32. Após executar **git add x.txt**, qual o efeito de **git reset HEAD x.txt**?
33. Após alterar o conteúdo de um arquivo committed em passo anterior, qual o efeito do comando **git checkout -- a.txt**?
34. Qual a diferença entre os comandos **git reset HEAD a.txt** e **git checkout -- a.txt**?
35. Veja como interpretar o resultado de git diff [aqui](https://medium.com/therobinkim/how-to-read-a-git-diff-6c87a9dc47c5). Execute, em um dos seus projetos, o comando **git diff HEAD~1 HEAD** e certifique-se de que entende o resultado apresentado.



INSTRUÇÕES:

1. No seu repositório pessoal, criar a pasta aula04.
2. Commitar este arquivo respondido nesta pasta.
3. A data limite para concluir esta tarefa é dia 07/06/2021, as 23h59min.











</DIV/>
