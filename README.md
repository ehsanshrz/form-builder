# Form Builder

A dynamic, JSON-driven form builder built with **Angular** and **Angular Material**. Pass a simple configuration array to the `<app-form-builder>` component and it renders a fully functional reactive form — no manual template work needed.

---

## Features

- 🗂 **JSON-driven** — define your entire form with a plain JavaScript/JSON array
- ✅ **Reactive Forms** — powered by Angular's `FormGroup` / `FormControl`
- 🙈 **Hidden fields** — fields with `hidden: true` are excluded from the rendered UI but still present in the form value
- 📋 **Field types** — `text` (Material input) and `check` (Material checkbox) supported out of the box
- ⚡ **Easy to extend** — add new field types with a single `*ngSwitchCase` block

---

## Prerequisites

| Tool | Version |
|------|---------|
| Node.js | ≥ 18 |
| Angular CLI | ≥ 22 |

Install the Angular CLI globally if you haven't already:

```bash
npm install -g @angular/cli
```

---

## Getting Started

```bash
# 1. Clone the repository
git clone https://github.com/ehsanshrz/form-builder.git
cd form-builder

# 2. Install dependencies
npm install

# 3. Start the development server
npm start
```

Navigate to `http://localhost:4200/`. The app hot-reloads on every file change.

---

## Usage

Import `FormBuilderComponent` (via `AppModule`) and drop the component anywhere in your template:

```html
<app-form-builder
  [formObject]="myFormConfig"
  (onSubmit)="handleSubmit($event)">
</app-form-builder>
```

Define the form configuration in your component class:

```ts
myFormConfig = [
  { field: 'name',  label: 'Full Name', type: 'text',  hidden: false, mandatory: true  },
  { field: 'email', label: 'Email',     type: 'text',  hidden: false, mandatory: true  },
  { field: 'agree', label: 'I agree',   type: 'check', hidden: false, mandatory: true  },
  { field: 'ref',   label: '',          type: 'text',  hidden: true,  mandatory: false }, // hidden tracking field
];

handleSubmit(value: Record<string, any>) {
  console.log('Form value:', value);
}
```

When the user clicks **Submit**, `onSubmit` emits an object keyed by each field's `field` property, including hidden fields.

---

## Component API

### `<app-form-builder>`

| Input / Output | Type | Description |
|---|---|---|
| `[formObject]` | `FormField[]` | Array of field descriptors (see below) |
| `(onSubmit)` | `EventEmitter<any>` | Emits the raw `FormGroup.value` on submit |

### `FormField` schema

| Property | Type | Required | Description |
|---|---|---|---|
| `field` | `string` | ✅ | Unique key used as the `FormControl` name |
| `label` | `string` | ✅ | Label text shown in the UI |
| `type` | `'text' \| 'check'` | ✅ | Field type |
| `hidden` | `boolean` | ✅ | When `true` the field is not rendered |
| `mandatory` | `boolean` | ✅ | Adds the `required` attribute to the control |

---

## Available Scripts

| Command | Description |
|---|---|
| `npm start` | Start the dev server at `http://localhost:4200` |
| `npm run build` | Production build — output in `dist/` |
| `npm run watch` | Build in watch mode (development config) |
| `npm test` | Run unit tests via [Karma](https://karma-runner.github.io) |

---

## Project Structure

```
src/
└── app/
    ├── components/
    │   └── form-builder/        # The reusable form-builder component
    ├── app.component.*          # Demo host component
    ├── app.module.ts
    └── app-routing.module.ts
```

---

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/my-feature`
3. Commit your changes: `git commit -m "feat: add my feature"`
4. Push to the branch: `git push origin feature/my-feature`
5. Open a Pull Request

---

## License

This project is open-source. See [LICENSE](LICENSE) for details.
