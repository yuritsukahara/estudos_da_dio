# Notas de aula

## Instalar Type Script

```sh
npm i typescript # instala npm
npm i -g typescript # instala globalmente
npx -p typescript tsc --init # inicia o projeto usando typescript
```

 obs: npm instala os pacotes localmente no node-modules, enquanto npx é um executor, isso quer dizer que ele procura o pacote no registro local e global e em seguida, executa o pacote. Quando não estiver em nenhum dos dois, armazena os pacotes em cache envez de salvar.

[Mais Informações](https://pt.stackoverflow.com/questions/433378/qual-a-diferen%C3%A7a-entre-npm-e-npx)

```sh
npx -p typescript tsc # transcode ts into js
```

localStorage trabalha apenas com strings. Parsear Json para leitura e stringfy para escrita.

---
