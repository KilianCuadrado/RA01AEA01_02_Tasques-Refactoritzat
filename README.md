# Gestor de tasques

Aplicació Vue per gestionar tasques amb una arquitectura basada en components.

## Jerarquia de components

```text
App.vue
├── TaskForm.vue
└── TaskList.vue
    └── TaskItem.vue
```

`App.vue` manté l’estat de les tasques i passa la llista a `TaskList` i
`TaskForm` mitjançant props. Els components fills comuniquen les accions al
pare amb events:

- `TaskForm` emet `enviarTaskCreate` quan es crea una tasca.
- `TaskItem` emet `toggle-task` i `delete-task`.
- `TaskList` reemet les accions de cada `TaskItem` cap a `App.vue`.

La interfície permet afegir, completar, eliminar i filtrar tasques. També
mostra notificacions d’acció i els comptadors total, pendents i completades.

## Desenvolupament

```bash
npm install
npm run dev
```

Per generar la versió de producció:

```bash
npm run build
```