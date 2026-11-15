<div align="center">

<img src="public/logo-_yWQDxWv.svg" alt="HairDay" width="160" />

# HairDay

**Agenda de atendimentos para barbearias e salões.**
Escolha a data, o horário e o cliente, e veja tudo organizado por período do dia.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)

</div>

---

## Sobre o projeto

O HairDay resolve um problema simples: organizar a agenda do dia de um profissional que atende com horário marcado. O atendente escolhe a data, seleciona um horário livre, informa o nome do cliente e o agendamento aparece na agenda, separado em **manhã**, **tarde** e **noite**.

Os dados ficam salvos no próprio navegador, então a agenda continua lá depois de recarregar a página.

## Funcionalidades

- Criar agendamentos escolhendo data, horário e nome do cliente
- Grade de horários com indicação de disponibilidade
- Agenda do dia dividida por período (manhã, tarde e noite)
- Cancelar agendamentos
- Persistência local, sem precisar de back-end
- Validação para impedir agendamento incompleto

## Tecnologias

| Área | Ferramentas |
| --- | --- |
| Interface | React 19, TypeScript |
| Estilo | Tailwind CSS 4, componentes Radix UI (padrão shadcn/ui) |
| Estado | Zustand, com `persist` para salvar no `localStorage` |
| Datas | date-fns |
| Ícones | Lucide e Phosphor Icons |
| Build | Vite |

## Como rodar localmente

Pré-requisitos: [Node.js](https://nodejs.org/) 20+ e [pnpm](https://pnpm.io/).

```bash
# clonar o repositório
git clone https://github.com/ThiagoFelix22/HairDay.git
cd HairDay

# instalar dependências
pnpm install

# iniciar em modo de desenvolvimento
pnpm dev
```

Depois abra o endereço que o Vite mostrar no terminal (normalmente `http://localhost:5173`).

Outros comandos:

```bash
pnpm build     # gera a versão de produção
pnpm preview   # testa a build localmente
pnpm lint      # roda o ESLint
```

## Estrutura

```
src/
├── components/
│   ├── AgendaView/     # lista de agendamentos por período
│   ├── BookingForm/    # formulário e grade de horários
│   ├── layout/         # estrutura da página
│   └── ui/             # componentes base (button, input, select, label)
├── hooks/              # store de agendamentos (Zustand)
├── lib/                # funções utilitárias
└── types/              # tipos TypeScript
```

## Próximos passos

- [ ] Impedir dois agendamentos no mesmo horário
- [ ] Editar um agendamento existente
- [ ] Filtro por data na agenda
- [ ] Publicar o projeto online

## Autor

**Thiago Felix**

[GitHub](https://github.com/ThiagoFelix22)
