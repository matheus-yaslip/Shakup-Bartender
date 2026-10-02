# Notas de implementação

## Base analisada

O projeto oficial recebido utiliza Next.js 15.5.9, React 19.1.0, App Router, TypeScript, Sass, componentes reutilizáveis e route handlers para formulário/e-mail.

## Conteúdo migrado

O site PHP antigo foi usado como fonte de verdade para:

- posicionamento institucional da ShakeUp Bartenders;
- trajetória e informações do CEO Edmilson;
- missão, valores e objetivo;
- cardápios Soft, Bronze, Prata, Ouro e Diamante;
- telefone, WhatsApp e e-mail;
- galeria e imagens;
- vídeo do banner;
- páginas contratadas/SEO.

Foram migradas 82 páginas contratadas para a rota dinâmica do App Router. O conteúdo PHP interpolado foi convertido para HTML estático indexável e os links `.php` internos foram adaptados para URLs limpas.

## Direção de arte

O redesign busca uma linguagem premium de hospitality/mixology: grandes blocos tipográficos, fotografia dominante, assimetria, alto contraste, espaço negativo, navegação overlay e transições discretas em vez de cards genéricos.

## Validação executada neste ambiente

- parsing de 50 arquivos TS/TSX com TypeScript: 0 erros de sintaxe;
- verificação das referências literais em `/fashion`: 0 assets ausentes;
- verificação de restos de PHP no dataset migrado: nenhuma tag PHP/interpolação restante.

O build completo não pôde ser executado neste sandbox porque o ambiente não possui as dependências Node instaladas e não consegue resolver `registry.npmjs.org` para executar `npm ci`. O `package.json` e o `package-lock.json` originais foram preservados para instalação reproduzível em ambiente com acesso ao registry.
