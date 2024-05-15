<p align="center">
  <img src="https://cdn-icons-png.flaticon.com/512/6295/6295417.png" width="100" />
</p>
<p align="center">
    <h1 align="center">CRUD_IONIC_EXPRESS</h1>
</p>
<p align="center">
 <img src="https://img.shields.io/github/license/OsmanJimenez/crud_ionic_express?style=flat&color=0080ff" alt="license">
 <img src="https://img.shields.io/github/last-commit/OsmanJimenez/crud_ionic_express?style=flat&logo=git&logoColor=white&color=0080ff" alt="last-commit">
 <img src="https://img.shields.io/github/languages/top/OsmanJimenez/crud_ionic_express?style=flat&color=0080ff" alt="repo-top-language">
 <img src="https://img.shields.io/github/languages/count/OsmanJimenez/crud_ionic_express?style=flat&color=0080ff" alt="repo-language-count">
<p>
<p align="center">
  <em>Developed with the software and tools below.</em>
</p>
<p align="center">
 <img src="https://img.shields.io/badge/EditorConfig-FEFEFE.svg?style=flat&logo=EditorConfig&logoColor=black" alt="EditorConfig">
 <img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black" alt="JavaScript">
 <img src="https://img.shields.io/badge/HTML5-E34F26.svg?style=flat&logo=HTML5&logoColor=white" alt="HTML5">
 <img src="https://img.shields.io/badge/Nodemon-76D04B.svg?style=flat&logo=Nodemon&logoColor=white" alt="Nodemon">
 <img src="https://img.shields.io/badge/ESLint-4B32C3.svg?style=flat&logo=ESLint&logoColor=white" alt="ESLint">
 <br>
 <img src="https://img.shields.io/badge/MySQL-4479A1.svg?style=flat&logo=MySQL&logoColor=white" alt="MySQL">
 <img src="https://img.shields.io/badge/tsnode-3178C6.svg?style=flat&logo=ts-node&logoColor=white" alt="tsnode">
 <img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=flat&logo=TypeScript&logoColor=white" alt="TypeScript">
 <img src="https://img.shields.io/badge/Express-000000.svg?style=flat&logo=Express&logoColor=white" alt="Express">
 <img src="https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white" alt="JSON">
</p>
<hr>

## 🔗 Quick Links

> - [📍 Overview](#-overview)
> - [📦 Features](#-features)
> - [📂 Repository Structure](#-repository-structure)
> - [🧩 Modules](#-modules)
> - [🚀 Getting Started](#-getting-started)
>   - [⚙️ Installation](#️-installation)
>   - [🤖 Running crud_ionic_express](#-running-crud_ionic_express)
>   - [🧪 Tests](#-tests)
> - [🛠 Project Roadmap](#-project-roadmap)
> - [🤝 Contributing](#-contributing)
> - [📄 License](#-license)
> - [👏 Acknowledgments](#-acknowledgments)

---

## 📍 Overview

 `overview`

---

## 📦 Features

 `features`

---

## 📂 Repository Structure

```sh
└── crud_ionic_express/
    ├── README.md
    ├── backend
    │   ├── api
    │   │   ├── connection
    │   │   │   └── connection.js
    │   │   └── routes
    │   │       └── user.js
    │   ├── app.js
    │   ├── collection
    │   │   └── Crud_Express.postman_collection.json
    │   ├── package-lock.json
    │   ├── package.json
    │   ├── scripts
    │   │   ├── 01_create_bd.sql
    │   │   └── 02_create_table.sql
    │   └── server.js
    └── frontend
        ├── .browserslistrc
        ├── .editorconfig
        ├── .eslintrc.json
        ├── .gitignore
        ├── angular.json
        ├── capacitor.config.ts
        ├── ionic.config.json
        ├── karma.conf.js
        ├── package-lock.json
        ├── package.json
        ├── src
        │   ├── app
        │   │   ├── app-routing.module.ts
        │   │   ├── app.component.html
        │   │   ├── app.component.scss
        │   │   ├── app.component.spec.ts
        │   │   ├── app.component.ts
        │   │   ├── app.module.ts
        │   │   ├── components
        │   │   │   ├── components.module.ts
        │   │   │   └── error-messages
        │   │   ├── data
        │   │   │   └── services
        │   │   ├── guards
        │   │   │   └── auth
        │   │   ├── modals
        │   │   │   ├── create
        │   │   │   └── update
        │   │   ├── pages
        │   │   │   ├── home
        │   │   │   └── login
        │   │   └── services
        │   │       ├── api
        │   │       ├── features
        │   │       ├── index.ts
        │   │       └── utils
        │   ├── assets
        │   │   ├── icon
        │   │   │   └── favicon.png
        │   │   └── shapes.svg
        │   ├── environments
        │   │   ├── environment.dev.ts
        │   │   ├── environment.prod.ts
        │   │   ├── environment.ts
        │   │   └── version.ts
        │   ├── global.scss
        │   ├── index.html
        │   ├── main.ts
        │   ├── polyfills.ts
        │   ├── test.ts
        │   ├── theme
        │   │   └── variables.scss
        │   └── zone-flags.ts
        ├── tsconfig.app.json
        ├── tsconfig.base.json
        ├── tsconfig.doc.json
        ├── tsconfig.json
        └── tsconfig.spec.json
```

---

## 🧩 Modules

<details closed><summary>backend</summary>

| File                                                                                                          | Summary                                               |
| ---                                                                                                           | ---                                                   |
| [server.js](https://github.com/OsmanJimenez/crud_ionic_express/blob/master/backend/server.js)                 |  `backend/server.js`         |
| [package.json](https://github.com/OsmanJimenez/crud_ionic_express/blob/master/backend/package.json)           |  `backend/package.json`      |
| [app.js](https://github.com/OsmanJimenez/crud_ionic_express/blob/master/backend/app.js)                       |  `backend/app.js`            |
| [package-lock.json](https://github.com/OsmanJimenez/crud_ionic_express/blob/master/backend/package-lock.json) |  `backend/package-lock.json` |

</details>

<details closed><summary>backend.api.connection</summary>

| File                                                                                                                 | Summary                                                          |
| ---                                                                                                                  | ---                                                              |
| [connection.js](https://github.com/OsmanJimenez/crud_ionic_express/blob/master/backend/api/connection/connection.js) |  `backend/api/connection/connection.js` |

</details>

<details closed><summary>backend.api.routes</summary>

| File                                                                                                 | Summary                                                |
| ---                                                                                                  | ---                                                    |
| [user.js](https://github.com/OsmanJimenez/crud_ionic_express/blob/master/backend/api/routes/user.js) |  `backend/api/routes/user.js` |

</details>

<details closed><summary>backend.collection</summary>

| File                                                                                                                                                           | Summary                                                                             |
| ---                                                                                                                                                            | ---                                                                                 |
| [Crud_Express.postman_collection.json](https://github.com/OsmanJimenez/crud_ionic_express/blob/master/backend/collection/Crud_Express.postman_collection.json) |  `backend/collection/Crud_Express.postman_collection.json` |

</details>

<details closed><summary>backend.scripts</summary>

| File                                                                                                                      | Summary                                                         |
| ---                                                                                                                       | ---                                                             |
| [02_create_table.sql](https://github.com/OsmanJimenez/crud_ionic_express/blob/master/backend/scripts/02_create_table.sql) |  `backend/scripts/02_create_table.sql` |
| [01_create_bd.sql](https://github.com/OsmanJimenez/crud_ionic_express/blob/master/backend/scripts/01_create_bd.sql)       |  `backend/scripts/01_create_bd.sql`    |

</details>

<details closed><summary>frontend</summary>

| File                                                                                                               | Summary                                                  |
| ---                                                                                                                | ---                                                      |
| [.eslintrc.json](https://github.com/OsmanJimenez/crud_ionic_express/blob/master/frontend/.eslintrc.json)           |  `frontend/.eslintrc.json`      |
| [tsconfig.json](https://github.com/OsmanJimenez/crud_ionic_express/blob/master/frontend/tsconfig.json)             |  `frontend/tsconfig.json`       |
| [tsconfig.app.json](https://github.com/OsmanJimenez/crud_ionic_express/blob/master/frontend/tsconfig.app.json)     |  `frontend/tsconfig.app.json`   |
| [ionic.config.json](https://github.com/OsmanJimenez/crud_ionic_express/blob/master/frontend/ionic.config.json)     |  `frontend/ionic.config.json`   |
| [.editorconfig](https://github.com/OsmanJimenez/crud_ionic_express/blob/master/frontend/.editorconfig)             |  `frontend/.editorconfig`       |
| [tsconfig.spec.json](https://github.com/OsmanJimenez/crud_ionic_express/blob/master/frontend/tsconfig.spec.json)   |  `frontend/tsconfig.spec.json`  |
| [angular.json](https://github.com/OsmanJimenez/crud_ionic_express/blob/master/frontend/angular.json)               |  `frontend/angular.json`        |
| [package.json](https://github.com/OsmanJimenez/crud_ionic_express/blob/master/frontend/package.json)               |  `frontend/package.json`        |
| [karma.conf.js](https://github.com/OsmanJimenez/crud_ionic_express/blob/master/frontend/karma.conf.js)             |  `frontend/karma.conf.js`       |
| [tsconfig.base.json](https://github.com/OsmanJimenez/crud_ionic_express/blob/master/frontend/tsconfig.base.json)   |  `frontend/tsconfig.base.json`  |
| [tsconfig.doc.json](https://github.com/OsmanJimenez/crud_ionic_express/blob/master/frontend/tsconfig.doc.json)     |  `frontend/tsconfig.doc.json`   |
| [capacitor.config.ts](https://github.com/OsmanJimenez/crud_ionic_express/blob/master/frontend/capacitor.config.ts) |  `frontend/capacitor.config.ts` |
| [package-lock.json](https://github.com/OsmanJimenez/crud_ionic_express/blob/master/frontend/package-lock.json)     |  `frontend/package-lock.json`   |
| [.browserslistrc](https://github.com/OsmanJimenez/crud_ionic_express/blob/master/frontend/.browserslistrc)         |  `frontend/.browserslistrc`     |

</details>

<details closed><summary>frontend.src</summary>

| File                                                                                                       | Summary                                                |
| ---                                                                                                        | ---                                                    |
| [polyfills.ts](https://github.com/OsmanJimenez/crud_ionic_express/blob/master/frontend/src/polyfills.ts)   |  `frontend/src/polyfills.ts`  |
| [index.html](https://github.com/OsmanJimenez/crud_ionic_express/blob/master/frontend/src/index.html)       |  `frontend/src/index.html`    |
| [zone-flags.ts](https://github.com/OsmanJimenez/crud_ionic_express/blob/master/frontend/src/zone-flags.ts) |  `frontend/src/zone-flags.ts` |
| [test.ts](https://github.com/OsmanJimenez/crud_ionic_express/blob/master/frontend/src/test.ts)             |  `frontend/src/test.ts`       |
| [main.ts](https://github.com/OsmanJimenez/crud_ionic_express/blob/master/frontend/src/main.ts)             |  `frontend/src/main.ts`       |
| [global.scss](https://github.com/OsmanJimenez/crud_ionic_express/blob/master/frontend/src/global.scss)     |  `frontend/src/global.scss`   |

</details>

<details closed><summary>frontend.src.environments</summary>

| File                                                                                                                                | Summary                                                                   |
| ---                                                                                                                                 | ---                                                                       |
| [environment.ts](https://github.com/OsmanJimenez/crud_ionic_express/blob/master/frontend/src/environments/environment.ts)           |  `frontend/src/environments/environment.ts`      |
| [environment.prod.ts](https://github.com/OsmanJimenez/crud_ionic_express/blob/master/frontend/src/environments/environment.prod.ts) |  `frontend/src/environments/environment.prod.ts` |
| [version.ts](https://github.com/OsmanJimenez/crud_ionic_express/blob/master/frontend/src/environments/version.ts)                   |  `frontend/src/environments/version.ts`          |
| [environment.dev.ts](https://github.com/OsmanJimenez/crud_ionic_express/blob/master/frontend/src/environments/environment.dev.ts)   |  `frontend/src/environments/environment.dev.ts`  |

</details>

<details closed><summary>frontend.src.theme</summary>

| File                                                                                                               | Summary                                                       |
| ---                                                                                                                | ---                                                           |
| [variables.scss](https://github.com/OsmanJimenez/crud_ionic_express/blob/master/frontend/src/theme/variables.scss) |  `frontend/src/theme/variables.scss` |

</details>

<details closed><summary>frontend.src.app</summary>

| File                                                                                                                           | Summary                                                            |
| ---                                                                                                                            | ---                                                                |
| [app-routing.module.ts](https://github.com/OsmanJimenez/crud_ionic_express/blob/master/frontend/src/app/app-routing.module.ts) |  `frontend/src/app/app-routing.module.ts` |
| [app.component.ts](https://github.com/OsmanJimenez/crud_ionic_express/blob/master/frontend/src/app/app.component.ts)           |  `frontend/src/app/app.component.ts`      |
| [app.component.scss](https://github.com/OsmanJimenez/crud_ionic_express/blob/master/frontend/src/app/app.component.scss)       |  `frontend/src/app/app.component.scss`    |
| [app.component.spec.ts](https://github.com/OsmanJimenez/crud_ionic_express/blob/master/frontend/src/app/app.component.spec.ts) |  `frontend/src/app/app.component.spec.ts` |
| [app.component.html](https://github.com/OsmanJimenez/crud_ionic_express/blob/master/frontend/src/app/app.component.html)       |  `frontend/src/app/app.component.html`    |
| [app.module.ts](https://github.com/OsmanJimenez/crud_ionic_express/blob/master/frontend/src/app/app.module.ts)                 |  `frontend/src/app/app.module.ts`         |

</details>

<details closed><summary>frontend.src.app.guards.auth</summary>

| File                                                                                                                       | Summary                                                                |
| ---                                                                                                                        | ---                                                                    |
| [auth.guard.ts](https://github.com/OsmanJimenez/crud_ionic_express/blob/master/frontend/src/app/guards/auth/auth.guard.ts) |  `frontend/src/app/guards/auth/auth.guard.ts` |

</details>

<details closed><summary>frontend.src.app.services</summary>

| File                                                                                                          | Summary                                                        |
| ---                                                                                                           | ---                                                            |
| [index.ts](https://github.com/OsmanJimenez/crud_ionic_express/blob/master/frontend/src/app/services/index.ts) |  `frontend/src/app/services/index.ts` |

</details>

<details closed><summary>frontend.src.app.services.utils.alerts</summary>

| File                                                                                                                                       | Summary                                                                             |
| ---                                                                                                                                        | ---                                                                                 |
| [alert.service.ts](https://github.com/OsmanJimenez/crud_ionic_express/blob/master/frontend/src/app/services/utils/alerts/alert.service.ts) |  `frontend/src/app/services/utils/alerts/alert.service.ts` |

</details>

<details closed><summary>frontend.src.app.services.utils.validations</summary>

| File                                                                                                                                                                        | Summary                                                                                                |
| ---                                                                                                                                                                         | ---                                                                                                    |
| [validation.service.ts](https://github.com/OsmanJimenez/crud_ionic_express/blob/master/frontend/src/app/services/utils/validations/validation.service.ts)                   |  `frontend/src/app/services/utils/validations/validation.service.ts`          |
| [validation-messages.service.ts](https://github.com/OsmanJimenez/crud_ionic_express/blob/master/frontend/src/app/services/utils/validations/validation-messages.service.ts) |  `frontend/src/app/services/utils/validations/validation-messages.service.ts` |

</details>

<details closed><summary>frontend.src.app.services.api</summary>

| File                                                                                                                                      | Summary                                                                        |
| ---                                                                                                                                       | ---                                                                            |
| [translate.service.ts](https://github.com/OsmanJimenez/crud_ionic_express/blob/master/frontend/src/app/services/api/translate.service.ts) |  `frontend/src/app/services/api/translate.service.ts` |
| [api.service.ts](https://github.com/OsmanJimenez/crud_ionic_express/blob/master/frontend/src/app/services/api/api.service.ts)             |  `frontend/src/app/services/api/api.service.ts`       |
| [endpoints.service.ts](https://github.com/OsmanJimenez/crud_ionic_express/blob/master/frontend/src/app/services/api/endpoints.service.ts) |  `frontend/src/app/services/api/endpoints.service.ts` |

</details>

<details closed><summary>frontend.src.app.services.features.version</summary>

| File                                                                                                                                               | Summary                                                                                   |
| ---                                                                                                                                                | ---                                                                                       |
| [version.service.ts](https://github.com/OsmanJimenez/crud_ionic_express/blob/master/frontend/src/app/services/features/version/version.service.ts) |  `frontend/src/app/services/features/version/version.service.ts` |

</details>

<details closed><summary>frontend.src.app.services.features.invalid-fields</summary>

| File                                                                                                                                                                    | Summary                                                                                                 |
| ---                                                                                                                                                                     | ---                                                                                                     |
| [invalid-fields.service.ts](https://github.com/OsmanJimenez/crud_ionic_express/blob/master/frontend/src/app/services/features/invalid-fields/invalid-fields.service.ts) |  `frontend/src/app/services/features/invalid-fields/invalid-fields.service.ts` |

</details>

<details closed><summary>frontend.src.app.modals.create</summary>

| File                                                                                                                                               | Summary                                                                             |
| ---                                                                                                                                                | ---                                                                                 |
| [create.page.spec.ts](https://github.com/OsmanJimenez/crud_ionic_express/blob/master/frontend/src/app/modals/create/create.page.spec.ts)           |  `frontend/src/app/modals/create/create.page.spec.ts`      |
| [create.page.scss](https://github.com/OsmanJimenez/crud_ionic_express/blob/master/frontend/src/app/modals/create/create.page.scss)                 |  `frontend/src/app/modals/create/create.page.scss`         |
| [create.page.ts](https://github.com/OsmanJimenez/crud_ionic_express/blob/master/frontend/src/app/modals/create/create.page.ts)                     |  `frontend/src/app/modals/create/create.page.ts`           |
| [create.page.html](https://github.com/OsmanJimenez/crud_ionic_express/blob/master/frontend/src/app/modals/create/create.page.html)                 |  `frontend/src/app/modals/create/create.page.html`         |
| [create-routing.module.ts](https://github.com/OsmanJimenez/crud_ionic_express/blob/master/frontend/src/app/modals/create/create-routing.module.ts) |  `frontend/src/app/modals/create/create-routing.module.ts` |
| [create.module.ts](https://github.com/OsmanJimenez/crud_ionic_express/blob/master/frontend/src/app/modals/create/create.module.ts)                 |  `frontend/src/app/modals/create/create.module.ts`         |

</details>

<details closed><summary>frontend.src.app.modals.update</summary>

| File                                                                                                                                               | Summary                                                                             |
| ---                                                                                                                                                | ---                                                                                 |
| [update.module.ts](https://github.com/OsmanJimenez/crud_ionic_express/blob/master/frontend/src/app/modals/update/update.module.ts)                 |  `frontend/src/app/modals/update/update.module.ts`         |
| [update.page.scss](https://github.com/OsmanJimenez/crud_ionic_express/blob/master/frontend/src/app/modals/update/update.page.scss)                 |  `frontend/src/app/modals/update/update.page.scss`         |
| [update-routing.module.ts](https://github.com/OsmanJimenez/crud_ionic_express/blob/master/frontend/src/app/modals/update/update-routing.module.ts) |  `frontend/src/app/modals/update/update-routing.module.ts` |
| [update.page.spec.ts](https://github.com/OsmanJimenez/crud_ionic_express/blob/master/frontend/src/app/modals/update/update.page.spec.ts)           |  `frontend/src/app/modals/update/update.page.spec.ts`      |
| [update.page.html](https://github.com/OsmanJimenez/crud_ionic_express/blob/master/frontend/src/app/modals/update/update.page.html)                 |  `frontend/src/app/modals/update/update.page.html`         |
| [update.page.ts](https://github.com/OsmanJimenez/crud_ionic_express/blob/master/frontend/src/app/modals/update/update.page.ts)                     |  `frontend/src/app/modals/update/update.page.ts`           |

</details>

<details closed><summary>frontend.src.app.pages.home</summary>

| File                                                                                                                                        | Summary                                                                        |
| ---                                                                                                                                         | ---                                                                            |
| [home.page.spec.ts](https://github.com/OsmanJimenez/crud_ionic_express/blob/master/frontend/src/app/pages/home/home.page.spec.ts)           |  `frontend/src/app/pages/home/home.page.spec.ts`      |
| [home.page.ts](https://github.com/OsmanJimenez/crud_ionic_express/blob/master/frontend/src/app/pages/home/home.page.ts)                     |  `frontend/src/app/pages/home/home.page.ts`           |
| [home-routing.module.ts](https://github.com/OsmanJimenez/crud_ionic_express/blob/master/frontend/src/app/pages/home/home-routing.module.ts) |  `frontend/src/app/pages/home/home-routing.module.ts` |
| [home.page.scss](https://github.com/OsmanJimenez/crud_ionic_express/blob/master/frontend/src/app/pages/home/home.page.scss)                 |  `frontend/src/app/pages/home/home.page.scss`         |
| [home.module.ts](https://github.com/OsmanJimenez/crud_ionic_express/blob/master/frontend/src/app/pages/home/home.module.ts)                 |  `frontend/src/app/pages/home/home.module.ts`         |
| [home.page.html](https://github.com/OsmanJimenez/crud_ionic_express/blob/master/frontend/src/app/pages/home/home.page.html)                 |  `frontend/src/app/pages/home/home.page.html`         |

</details>

<details closed><summary>frontend.src.app.pages.login</summary>

| File                                                                                                                                           | Summary                                                                          |
| ---                                                                                                                                            | ---                                                                              |
| [login.module.ts](https://github.com/OsmanJimenez/crud_ionic_express/blob/master/frontend/src/app/pages/login/login.module.ts)                 |  `frontend/src/app/pages/login/login.module.ts`         |
| [login.page.ts](https://github.com/OsmanJimenez/crud_ionic_express/blob/master/frontend/src/app/pages/login/login.page.ts)                     |  `frontend/src/app/pages/login/login.page.ts`           |
| [login.page.html](https://github.com/OsmanJimenez/crud_ionic_express/blob/master/frontend/src/app/pages/login/login.page.html)                 |  `frontend/src/app/pages/login/login.page.html`         |
| [login.page.spec.ts](https://github.com/OsmanJimenez/crud_ionic_express/blob/master/frontend/src/app/pages/login/login.page.spec.ts)           |  `frontend/src/app/pages/login/login.page.spec.ts`      |
| [login.page.scss](https://github.com/OsmanJimenez/crud_ionic_express/blob/master/frontend/src/app/pages/login/login.page.scss)                 |  `frontend/src/app/pages/login/login.page.scss`         |
| [login-routing.module.ts](https://github.com/OsmanJimenez/crud_ionic_express/blob/master/frontend/src/app/pages/login/login-routing.module.ts) |  `frontend/src/app/pages/login/login-routing.module.ts` |

</details>

<details closed><summary>frontend.src.app.components</summary>

| File                                                                                                                                    | Summary                                                                      |
| ---                                                                                                                                     | ---                                                                          |
| [components.module.ts](https://github.com/OsmanJimenez/crud_ionic_express/blob/master/frontend/src/app/components/components.module.ts) |  `frontend/src/app/components/components.module.ts` |

</details>

<details closed><summary>frontend.src.app.components.error-messages</summary>

| File                                                                                                                                                                           | Summary                                                                                                 |
| ---                                                                                                                                                                            | ---                                                                                                     |
| [error-messages.component.html](https://github.com/OsmanJimenez/crud_ionic_express/blob/master/frontend/src/app/components/error-messages/error-messages.component.html)       |  `frontend/src/app/components/error-messages/error-messages.component.html`    |
| [error-messages.component.spec.ts](https://github.com/OsmanJimenez/crud_ionic_express/blob/master/frontend/src/app/components/error-messages/error-messages.component.spec.ts) |  `frontend/src/app/components/error-messages/error-messages.component.spec.ts` |
| [error-messages.component.scss](https://github.com/OsmanJimenez/crud_ionic_express/blob/master/frontend/src/app/components/error-messages/error-messages.component.scss)       |  `frontend/src/app/components/error-messages/error-messages.component.scss`    |
| [error-messages.component.ts](https://github.com/OsmanJimenez/crud_ionic_express/blob/master/frontend/src/app/components/error-messages/error-messages.component.ts)           |  `frontend/src/app/components/error-messages/error-messages.component.ts`      |

</details>

---

## 🚀 Getting Started

***Requirements***

Ensure you have the following dependencies installed on your system:

- **TypeScript**: `version x.y.z`

### ⚙️ Installation

1. Clone the crud_ionic_express repository:

```sh
git clone https://github.com/OsmanJimenez/crud_ionic_express
```

2. Change to the project directory:

```sh
cd crud_ionic_express
```

3. Install the dependencies:

```sh
npm install
```

### 🤖 Running crud_ionic_express

Use the following command to run crud_ionic_express:

```sh
npm run build && node dist/main.js
```

### 🧪 Tests

To execute tests, run:

```sh
npm test
```

---

## 🛠 Project Roadmap

- [X] `► INSERT-TASK-1`
- [ ] `► INSERT-TASK-2`
- [ ] `► ...`

---

## 🤝 Contributing

Contributions are welcome! Here are several ways you can contribute:

- **[Submit Pull Requests](https://github.com/OsmanJimenez/crud_ionic_express/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.
- **[Join the Discussions](https://github.com/OsmanJimenez/crud_ionic_express/discussions)**: Share your insights, provide feedback, or ask questions.
- **[Report Issues](https://github.com/OsmanJimenez/crud_ionic_express/issues)**: Submit bugs found or log feature requests for Crud_ionic_express.

<details closed>
    <summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your GitHub account.
2. **Clone Locally**: Clone the forked repository to your local machine using a Git client.

   ```sh
   git clone https://github.com/OsmanJimenez/crud_ionic_express
   ```

3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.

   ```sh
   git checkout -b new-feature-x
   ```

4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.

   ```sh
   git commit -m 'Implemented new feature x.'
   ```

6. **Push to GitHub**: Push the changes to your forked repository.

   ```sh
   git push origin new-feature-x
   ```

7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.

Once your PR is reviewed and approved, it will be merged into the main branch.

</details>

---

## 📄 License

This project is protected under the [SELECT-A-LICENSE](https://choosealicense.com/licenses) License. For more details, refer to the [LICENSE](https://choosealicense.com/licenses/) file.

---

## 👏 Acknowledgments

- List any resources, contributors, inspiration, etc. here.

[**Return**](#-quick-links)

---
