# Ajuste do cabeçalho e menu móvel

## Alterações
- Tornar o cabeçalho fixo, com fundo branco translúcido no topo e mais opaco após a rolagem.
- Preservar a identidade visual da Vittara com borda e sombra discretas.
- Substituir o menu móvel atual por um painel controlado, com botão de abrir/fechar, fundo de proteção e fechamento após escolher um item.
- Garantir alvos de toque confortáveis, leitura clara e bloqueio da rolagem enquanto o menu estiver aberto.
- Ajustar as âncoras para que os títulos não fiquem escondidos sob o cabeçalho.
- Validar navegação e aparência em desktop e celular.

## Detalhes técnicos
- O estado de rolagem e do menu será controlado no navegador, com eventos limpos corretamente.
- O menu terá atributos de acessibilidade, foco visível e suporte à tecla Escape.
