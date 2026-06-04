# ADR 002 — Monorepo Project Structure

## Status

Accepted

## Date

2026-06-04

## Context

ShipLoop AI is planned as a full-stack SaaS-style product.

The MVP will include:

- Next.js web app
- Node.js API
- PostgreSQL database
- Prisma ORM
- shared validation schemas
- AI service layer
- file upload support
- activity logs
- future mobile companion app

The project needs a structure that keeps frontend, backend, shared code, and documentation organized.

Since ShipLoop AI is a portfolio project, the repository should also be easy to read and easy to explain to interviewers.

## Decision

ShipLoop AI will use a monorepo structure.

The repository will keep the main apps, shared packages, and documentation in one place.

The planned structure is:

```txt
shiploop-ai/
├─ apps/
│  ├─ web/
│  └─ api/
│
├─ packages/
│  ├─ shared/
│  ├─ config/
│  └─ ui/
│
├─ docs/
│  ├─ product/
│  ├─ modules/
│  ├─ architecture/
│  └─ adr/
│
├─ prisma/
├─ progress.md
├─ README.md
└─ package.json
```

## Reason

A monorepo fits the project because the frontend and backend are closely connected.

ShipLoop AI has many shared concepts:

- project statuses
- feature brief statuses
- task statuses
- bug statuses
- test plan statuses
- release note statuses
- validation schemas
- API response types
- shared TypeScript types

Keeping these in one repository reduces duplication and makes the project easier to maintain.

## Main Rule

```txt
One product.
One repo.
Clear app boundaries.
```

## Benefits

### 1. Easier Full-Stack Development

The web app, API, database schema, and shared types stay together.

This makes it easier to change a feature across the full stack.

Example:

```txt
Update Task status enum
→ update shared type
→ update API validation
→ update frontend UI
```

### 2. Better Type Sharing

Shared TypeScript types can live in one package.

This helps keep frontend and backend data shapes aligned.

Example shared package:

```txt
packages/shared
```

Possible contents:

```txt
types
enums
schemas
constants
api response shapes
```

### 3. Better Portfolio Presentation

A monorepo shows that the project is designed like a real product.

Interviewers can see:

- product docs
- architecture docs
- backend API
- frontend app
- database design
- shared code

This makes the project easier to explain.

### 4. Easier Documentation Management

All documentation stays with the code.

This supports the project goal:

```txt
Plan → Build → Test → Fix → Ship → Learn
```

### 5. Easier Future Mobile Support

A future mobile app can be added later without creating a separate repository.

Possible future structure:

```txt
apps/
├─ web/
├─ api/
└─ mobile/
```

## Tradeoffs

### 1. More Setup Work

A monorepo needs more setup than a single app folder.

It may require workspace configuration.

Possible tools:

```txt
npm workspaces
pnpm workspaces
Turborepo
```

For MVP, simple workspaces are enough.

### 2. Larger Repository

All apps and packages live together, so the repository can grow.

This is acceptable because ShipLoop AI is one product.

### 3. Clear Boundaries Are Needed

The project must avoid messy imports.

The frontend should not directly access backend-only code.

The backend should not depend on frontend UI code.

Good boundaries are required.

## Package Boundary Rules

### apps/web

The web app owns:

- pages
- layouts
- components
- forms
- frontend routes
- client-side state
- API calls
- UI behavior

It can import from:

```txt
packages/shared
packages/ui
packages/config
```

It should not import backend server code from:

```txt
apps/api
```

### apps/api

The API app owns:

- Express server
- API routes
- controllers
- services
- middleware
- auth checks
- validation
- AI service wrapper
- file upload handling

It can import from:

```txt
packages/shared
packages/config
```

It should not import frontend UI code from:

```txt
apps/web
packages/ui
```

### packages/shared

The shared package owns:

- shared TypeScript types
- enums
- Zod schemas
- API response types
- common constants

It should not depend on app-specific code.

### packages/ui

The UI package may hold reusable UI components later.

For MVP, this package is optional.

If the project starts simple, UI components can stay inside:

```txt
apps/web
```

### packages/config

The config package may hold shared TypeScript, ESLint, Prettier, or build config.

For MVP, this package can stay simple.

## Database Location

Prisma schema can live at the root:

```txt
prisma/schema.prisma
```

Reason:

The database supports the whole product.

The API will use Prisma directly.

Future apps may share generated types through the backend or shared package.

## Documentation Location

All planning and architecture docs will stay in:

```txt
docs/
```

Current docs structure:

```txt
docs/
├─ product/
├─ modules/
├─ architecture/
└─ adr/
```

This keeps product decisions and code decisions close to the implementation.

## API and Web Relationship

The web app will communicate with the API through HTTP requests.

The web app should not directly query the database.

Correct flow:

```txt
Web App
→ API
→ Prisma
→ PostgreSQL
```

Incorrect flow:

```txt
Web App
→ Prisma
→ PostgreSQL
```

## AI Service Location

AI logic should live in the backend API.

The frontend should not call the AI provider directly.

Correct flow:

```txt
Web App
→ API AI Route
→ AI Service Wrapper
→ AI Provider
```

Reason:

This protects API keys and keeps AI rules on the server.

## File Upload Location

MVP file upload logic should live in the backend API.

For local development, files can be stored locally first.

Future storage can move to object storage.

Possible future options:

```txt
AWS S3
Cloudflare R2
Supabase Storage
UploadThing
```

## Workspace Tooling

The MVP can start with:

```txt
npm workspaces
```

Possible root `package.json` shape:

```json
{
  "name": "shiploop-ai",
  "private": true,
  "workspaces": ["apps/*", "packages/*"]
}
```

Future upgrade option:

```txt
Turborepo
```

Turborepo is useful later if the project needs faster builds, caching, or more apps.

## MVP Boundary

For MVP, the monorepo should stay simple.

Required:

```txt
apps/web
apps/api
docs
prisma
README.md
progress.md
```

Optional at first:

```txt
packages/shared
packages/config
packages/ui
```

The shared packages can be added when repeated types and schemas appear.

## Future Direction

The monorepo can support:

- mobile app
- shared UI package
- shared SDK package
- CLI tool
- background worker
- testing package
- design system package

Possible future structure:

```txt
apps/
├─ web/
├─ api/
├─ mobile/
└─ worker/

packages/
├─ shared/
├─ ui/
├─ config/
└─ sdk/
```

These are not part of the first MVP setup.

## Consequences

ShipLoop AI will have one main repository.

Frontend, backend, docs, and shared code will stay together.

This will make the project easier to build, test, explain, and maintain.

The project must keep clear boundaries between apps and packages.

## Final Decision

ShipLoop AI will use a monorepo structure for the MVP.

The first implementation should start simple, then add shared packages only when the codebase needs them.
