# Tabela de Pontuação FIFA - GitHub + GitHub Pages

## Objetivo

Este projeto exibe uma tabela de pontuação para seu grupo de FIFA (ou EA FC) com os times personalizados.  
Você pode editar a tabela via uma página admin com login por token GitHub, e o arquivo `data.json` é atualizado direto no seu repositório.

---

## Como configurar

1. **Crie um repositório no GitHub** (público ou privado).  
   Exemplo: `https://github.com/SEU_USUARIO/SEU_REPOSITORIO`

2. **Adicione os arquivos do projeto ao repositório:**  
   - index.html  
   - admin.html  
   - script.js  
   - admin.js  
   - style.css  
   - data.json  
   - pasta `escudos/` com as imagens dos escudos  
   - pasta `img/` com seu logo (ex: `logoo-removebg-preview.png`)

3. **Edite o arquivo `admin.js`:**  
   - Substitua `SEU_USUARIO_GITHUB` pelo seu usuário GitHub  
   - Substitua `SEU_REPOSITORIO` pelo nome do seu repositório

4. **Crie um Personal Access Token no GitHub:**  
   - Vá em: https://github.com/settings/tokens  
   - Clique em "Generate new token (classic)"  
   - Dê um nome, e marque pelo menos as permissões `repo` (para acesso ao repositório)  
   - Gere o token e copie para usar no admin.html

5. **Configure GitHub Pages:**  
   - Vá no seu repositório > Settings > Pages  
   - Escolha a branch `main` (ou `master`) e `/root` como pasta  
   - Salve e aguarde o deploy

6. **Acesse a tabela:**  
   - Abra `https://SEU_USUARIO.github.io/SEU_REPOSITORIO/index.html`

7. **Editar dados:**  
   - Abra `admin.html`  
   - Cole seu token GitHub para autenticar  
   - Edite os dados da tabela e clique em salvar  
   - A tabela `data.json` será atualizada no seu repo e refletida na página principal

---

## Notas importantes

- Não compartilhe seu token com ninguém! Ele permite acesso ao seu repositório.  
- Os dados são carregados direto do arquivo `data.json` no GitHub Pages, por isso pode demorar um pouco para refletir após salvar.  
- O token tem validade conforme sua criação, se não funcionar, crie um novo.  
- Você pode personalizar a tabela, adicionar mais times, mudar imagens e estilos.

---

Se precisar, posso ajudar a ajustar o código para outras funcionalidades!  
