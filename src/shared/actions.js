export const ACTIONS = [
  {
    id: 0,
    action:
      "Velit incididunt esse Lorem deserunt nulla ea enim est amet do ex voluptate.",
    by: "Alvis",
    to: "Desmond",
    confirm: false,
    department: "Product",
    priority: 1,
    progress: null,
  },
  {
    id: 1,
    action:
      "Officia aliqua in nisi duis consequat ipsum veniam cupidatat do nostrud duis ut.",
    by: "Rubye",
    to: "Bernice",
    confirm: true,
    department: "HR",
    priority: 2,
    progress: 3,
  },
  {
    id: 2,
    action:
      "Lorem tempor dolor culpa ut officia est aliqua nostrud aliquip elit id cillum voluptate.",
    by: "Arlo",
    to: "Lorenz",
    confirm: false,
    department: "Marketing",
    priority: 2,
    progress: 2,
  },
  {
    id: 3,
    action:
      "Ad ea occaecat ut ullamco nulla tempor duis fugiat voluptate amet id ut ut.",
    by: "Dock",
    to: "Abe",
    confirm: true,
    department: "Product",
    priority: 3,
    progress: 1,
  },
  {
    id: 4,
    action: "Ea in aute veniam anim.",
    by: "Elenora",
    to: "Clemmie",
    confirm: false,
    department: "Support",
    priority: 1,
    progress: null,
  },
];

export const modifyActions = (id) => {
    ACTIONS = ACTIONS.map(a => {
      if (id.includes(a.id)) {
        a.confirm = !a.confirm
      }
    })
}
