# ShipLoop AI - System Architecture

This document defines the first system architecture for **ShipLoop AI**.

The goal of this document is to explain how the frontend, backend, database, AI layer, file storage, authentication, and deployment pieces work together.

ShipLoop AI helps solo developers manage the full software development loop:

```txt
Plan → Build → Test → Fix → Ship → Learn
```

The system should support this main workflow:

```txt
Create Project
→ Create Feature Brief
→ Approve Feature Brief
→ Create Tasks
→ Report Bugs
→ Generate Test Plan
→ Run Test Cases
→ Fix and Verify Bugs
→ Generate Release Notes
```

---

# 1. Purpose

The purpose of this document is to define:

- system overview
- high-level architecture
- frontend architecture
- backend architecture
- database architecture
- AI service architecture
- authentication architecture
- file storage architecture
- deployment architecture
- request flow
- AI generation flow
- upload flow
- folder structure
- MVP boundary
- implementation order

This document is not final production infrastructure.

It is the architecture guide for the first working version of ShipLoop AI.

---

# 2. Architecture Goals

ShipLoop AI should be built as a realistic full-stack project.

The system should be:

- clear
- modular
- easy to test
- easy to deploy
- easy to explain in interviews
- realistic enough for a portfolio project
- simple enough for one developer to build

Main rule:

```txt
Build a real system, but do not over-engineer the MVP.
```

---

# 3. High-Level System Overview

## 3.1 Main Parts

ShipLoop AI has these main system parts:

```txt
Web App
Backend API
PostgreSQL Database
Prisma ORM
AI Service Layer
File Storage
Authentication Layer
Activity Log System
Deployment Platform
```

## 3.2 High-Level Diagram

```txt
User
 │
 ▼
Web App
Next.js + React
 │
 │ HTTP API Requests
 ▼
Backend API
Node.js + Express
 │
 ├── Auth Service
 ├── Project Service
 ├── Feature Brief Service
 ├── Task Service
 ├── Bug Report Service
 ├── Test Plan Service
 ├── Release Notes Service
 ├── AI Job Service
 ├── Upload Service
 └── Activity Log Service
 │
 │ Prisma ORM
 ▼
PostgreSQL Database
 │
 ├── users
 ├── projects
 ├── feature_briefs
 ├── tasks
 ├── bug_reports
 ├── test_plans
 ├── test_cases
 ├── release_notes
 ├── release_note_items
 ├── ai_jobs
 ├── attachments
 └── activity_logs

Backend API
 │
 ├── AI Provider
 │   └── Generates drafts
 │
 └── File Storage
     └── Stores screenshots, PDFs, and text files
```

---

# 4. Recommended Tech Stack

## 4.1 Frontend

Recommended frontend stack:

```txt
Next.js
React
TypeScript
Tailwind CSS
shadcn/ui
React Hook Form
Zod
TanStack Query
```

Purpose:

```txt
Build a clean, typed, modern web app UI.
```

## 4.2 Backend

Recommended backend stack:

```txt
Node.js
Express
TypeScript
Prisma
PostgreSQL
Zod
JWT or cookie-based auth
```

Purpose:

```txt
Build a REST API for the ShipLoop AI workflow.
```

## 4.3 Database

Recommended database:

```txt
PostgreSQL
```

Purpose:

```txt
Store users, projects, workflow records, AI jobs, attachments, and activity logs.
```

## 4.4 ORM

Recommended ORM:

```txt
Prisma
```

Purpose:

```txt
Define schema, run migrations, query database, and keep TypeScript types clean.
```

## 4.5 AI Layer

Recommended AI layer:

```txt
AI service wrapper inside backend
```

Purpose:

```txt
Keep AI prompts, AI input formatting, AI output parsing, and AI job tracking separate from route handlers.
```

## 4.6 File Storage

Recommended MVP file storage options:

```txt
Local storage for early development
S3-compatible object storage for production
```

Possible providers:

```txt
AWS S3
Cloudflare R2
Supabase Storage
UploadThing
```

MVP choice can start simple:

```txt
Use local storage first if needed.
Move to object storage when deployment is ready.
```

## 4.7 Deployment

Recommended deployment options:

```txt
Frontend: Vercel
Backend: Railway, Render, Fly.io, or Koyeb
Database: Supabase, Neon, Railway Postgres, or Render Postgres
File Storage: S3-compatible storage
```

---

# 5. Monorepo Architecture

ShipLoop AI should use a monorepo.

Reason:

```txt
The project has web app, API, shared types, docs, and future mobile app.
```

## 5.1 Planned Monorepo Structure

```txt
shiploop-ai/
├─ apps/
│  ├─ web/
│  │  ├─ app/
│  │  ├─ components/
│  │  ├─ features/
│  │  ├─ hooks/
│  │  ├─ lib/
│  │  └─ package.json
│  │
│  └─ api/
│     ├─ src/
│     │  ├─ config/
│     │  ├─ controllers/
│     │  ├─ middleware/
│     │  ├─ routes/
│     │  ├─ services/
│     │  ├─ validators/
│     │  ├─ utils/
│     │  ├─ app.ts
│     │  └─ server.ts
│     ├─ prisma/
│     │  ├─ schema.prisma
│     │  └─ migrations/
│     └─ package.json
│
├─ packages/
│  ├─ shared/
│  │  ├─ src/
│  │  │  ├─ types/
│  │  │  ├─ constants/
│  │  │  └─ schemas/
│  │  └─ package.json
│  │
│  └─ config/
│     ├─ eslint/
│     ├─ prettier/
│     └─ tsconfig/
│
├─ docs/
│  ├─ product/
│  ├─ modules/
│  ├─ architecture/
│  └─ adr/
│
├─ README.md
├─ progress.md
├─ package.json
└─ pnpm-workspace.yaml
```

## 5.2 Why Monorepo

A monorepo helps with:

- shared TypeScript types
- shared validation schemas
- easier local development
- cleaner full-stack workflow
- future mobile app support
- better portfolio structure

Main rule:

```txt
Keep shared code in packages/shared.
Keep app-specific code inside apps/web and apps/api.
```

---

# 6. Frontend Architecture

## 6.1 Frontend Role

The frontend is responsible for:

- rendering the user interface
- handling forms
- showing dashboards
- calling backend APIs
- showing AI draft previews
- showing validation messages
- managing client-side state
- routing between pages

The frontend should not be responsible for:

- database access
- final authorization decisions
- secret API keys
- AI provider calls
- file storage credentials

## 6.2 Frontend Main Areas

```txt
Auth
Dashboard
Projects
Feature Briefs
Tasks
Bug Reports
Test Plans
Test Cases
Release Notes
AI Jobs
Attachments
Activity Logs
Settings
```

## 6.3 Frontend Route Plan

Recommended Next.js routes:

```txt
/
 /login
 /register
 /dashboard
 /projects
 /projects/new
 /projects/[projectId]
 /projects/[projectId]/feature-briefs
 /projects/[projectId]/feature-briefs/[featureBriefId]
 /projects/[projectId]/tasks
 /projects/[projectId]/tasks/[taskId]
 /projects/[projectId]/bug-reports
 /projects/[projectId]/bug-reports/[bugReportId]
 /projects/[projectId]/test-plans
 /projects/[projectId]/test-plans/[testPlanId]
 /projects/[projectId]/release-notes
 /projects/[projectId]/release-notes/[releaseNoteId]
 /settings
```

## 6.4 Frontend Feature Folder Structure

Recommended frontend feature structure:

```txt
apps/web/features/
├─ auth/
├─ projects/
├─ dashboard/
├─ feature-briefs/
├─ tasks/
├─ bug-reports/
├─ test-plans/
├─ release-notes/
├─ ai-jobs/
├─ attachments/
└─ activity/
```

Each feature folder can contain:

```txt
components/
hooks/
api.ts
types.ts
schemas.ts
utils.ts
```

Example:

```txt
features/feature-briefs/
├─ components/
│  ├─ FeatureBriefForm.tsx
│  ├─ FeatureBriefCard.tsx
│  └─ FeatureBriefStatusBadge.tsx
├─ hooks/
│  ├─ useFeatureBriefs.ts
│  └─ useFeatureBrief.ts
├─ api.ts
├─ schemas.ts
└─ types.ts
```

## 6.5 Frontend State Management

Recommended frontend data approach:

```txt
TanStack Query for server state
React state for local UI state
React Hook Form for forms
Zod for validation
```

Use TanStack Query for:

- loading projects
- loading feature briefs
- loading tasks
- loading bug reports
- loading test plans
- loading release notes
- polling AI job status

Use local React state for:

- modals
- tabs
- selected filters
- temporary UI state

## 6.6 Frontend Form Rules

Forms should use:

```txt
React Hook Form
Zod schema validation
Clear error messages
Save draft support where useful
```

Important forms:

```txt
Project form
Feature brief form
Task form
Bug report form
Test plan form
Test case form
Release note form
AI prompt form
```

---

# 7. Backend Architecture

## 7.1 Backend Role

The backend is responsible for:

- authentication
- authorization
- request validation
- business rules
- database access
- AI job handling
- file upload handling
- activity log creation
- API response formatting
- error handling

The backend should protect all private data.

Main rule:

```txt
The frontend can ask.
The backend decides.
```

## 7.2 Backend Layer Structure

Recommended backend layers:

```txt
Routes
→ Controllers
→ Services
→ Repositories or Prisma Client
→ Database
```

## 7.3 Layer Responsibilities

### Routes

Routes define URL paths and attach middleware.

Example:

```txt
/api/projects
/api/projects/:projectId/tasks
```

Routes should stay thin.

### Controllers

Controllers handle:

- request data
- response formatting
- calling services

Controllers should not contain complex business logic.

### Services

Services contain business logic.

Examples:

```txt
approveFeatureBrief()
completeTask()
markBugFixed()
verifyBug()
generateTestPlanDraft()
publishReleaseNote()
```

Services should check business rules.

### Prisma Client

Prisma handles database queries.

Database access should happen through service functions or repository helpers.

## 7.4 Backend Folder Structure

```txt
apps/api/src/
├─ config/
│  ├─ env.ts
│  └─ cors.ts
│
├─ controllers/
│  ├─ auth.controller.ts
│  ├─ project.controller.ts
│  ├─ featureBrief.controller.ts
│  ├─ task.controller.ts
│  ├─ bugReport.controller.ts
│  ├─ testPlan.controller.ts
│  ├─ testCase.controller.ts
│  ├─ releaseNote.controller.ts
│  ├─ aiJob.controller.ts
│  ├─ attachment.controller.ts
│  └─ activity.controller.ts
│
├─ routes/
│  ├─ auth.routes.ts
│  ├─ project.routes.ts
│  ├─ featureBrief.routes.ts
│  ├─ task.routes.ts
│  ├─ bugReport.routes.ts
│  ├─ testPlan.routes.ts
│  ├─ testCase.routes.ts
│  ├─ releaseNote.routes.ts
│  ├─ aiJob.routes.ts
│  ├─ attachment.routes.ts
│  └─ activity.routes.ts
│
├─ services/
│  ├─ auth.service.ts
│  ├─ project.service.ts
│  ├─ featureBrief.service.ts
│  ├─ task.service.ts
│  ├─ bugReport.service.ts
│  ├─ testPlan.service.ts
│  ├─ testCase.service.ts
│  ├─ releaseNote.service.ts
│  ├─ aiJob.service.ts
│  ├─ aiProvider.service.ts
│  ├─ upload.service.ts
│  └─ activity.service.ts
│
├─ middleware/
│  ├─ requireAuth.ts
│  ├─ validateRequest.ts
│  ├─ errorHandler.ts
│  ├─ rateLimiter.ts
│  └─ uploadMiddleware.ts
│
├─ validators/
│  ├─ auth.schema.ts
│  ├─ project.schema.ts
│  ├─ featureBrief.schema.ts
│  ├─ task.schema.ts
│  ├─ bugReport.schema.ts
│  ├─ testPlan.schema.ts
│  ├─ releaseNote.schema.ts
│  ├─ aiJob.schema.ts
│  └─ attachment.schema.ts
│
├─ utils/
│  ├─ apiResponse.ts
│  ├─ apiError.ts
│  ├─ pagination.ts
│  ├─ slug.ts
│  └─ logger.ts
│
├─ prisma/
│  └─ client.ts
│
├─ app.ts
└─ server.ts
```

---

# 8. Database Architecture

## 8.1 Database Role

The database stores the source-of-truth records for the app.

Main database:

```txt
PostgreSQL
```

ORM:

```txt
Prisma
```

## 8.2 Main Tables

MVP tables:

```txt
users
projects
feature_briefs
tasks
bug_reports
test_plans
test_cases
release_notes
release_note_items
ai_jobs
attachments
activity_logs
```

## 8.3 Database Relationship Pattern

Main ownership pattern:

```txt
User
└─ Project
   ├─ FeatureBrief
   ├─ Task
   ├─ BugReport
   ├─ TestPlan
   │  └─ TestCase
   ├─ ReleaseNote
   │  └─ ReleaseNoteItem
   ├─ AIJob
   ├─ Attachment
   └─ ActivityLog
```

## 8.4 Database Access Rule

Every private record should include:

```txt
userId
projectId when project-related
```

This makes authorization simpler.

## 8.5 Soft Delete Rule

Most records should use soft delete:

```txt
deletedAt
archivedAt
```

Normal list routes should hide records where:

```txt
deletedAt is not null
```

Archived records can be shown only when the user asks for archived data.

## 8.6 JSON Field Rule

For MVP, some list-style fields can use JSON:

```txt
successCriteria
acceptanceCriteria
inScope
outOfScope
stepsToReproduce
testData
knownIssues
breakingChanges
```

Reason:

```txt
This keeps the first schema simple.
```

Future improvement:

```txt
Move JSON fields into child tables if advanced filtering is needed.
```

---

# 9. Authentication Architecture

## 9.1 Auth Goal

Authentication should answer:

```txt
Who is the current user?
```

Authorization should answer:

```txt
Can this user access this record?
```

## 9.2 MVP Auth Options

Recommended option:

```txt
JWT access token + HTTP-only refresh cookie
```

Simpler option:

```txt
Session cookie
```

Either option is fine for MVP if implemented securely.

## 9.3 Auth Flow

```txt
User submits email and password
→ Backend validates credentials
→ Backend creates token or session
→ Frontend stores auth state
→ Frontend sends authenticated requests
→ Backend verifies current user
→ Backend returns private data
```

## 9.4 Protected Route Flow

```txt
Request hits protected route
→ requireAuth middleware runs
→ token or session is verified
→ currentUser is attached to request
→ controller calls service
→ service checks record ownership
→ response is returned
```

## 9.5 Password Rule

Passwords must never be stored as plain text.

Recommended hashing:

```txt
bcrypt
argon2
```

Store only:

```txt
passwordHash
```

## 9.6 Authorization Rule

Main rule:

```txt
record.userId === currentUser.id
```

For child records:

```txt
record.project.userId === currentUser.id
```

---

# 10. AI Service Architecture

## 10.1 AI Layer Role

The AI layer helps generate draft content.

AI supports:

```txt
Feature brief draft
Task breakdown
Bug report cleanup
Debug checklist
Test plan draft
Test case generation
Release notes draft
Project summary
```

## 10.2 AI Should Be Backend-Only

The frontend should not call the AI provider directly.

Reason:

```txt
AI API keys must stay private.
AI prompts should be controlled by backend services.
AI output should be stored and reviewed.
```

## 10.3 AI Job Flow

```txt
User requests AI generation
→ Frontend calls POST /api/ai/jobs
→ Backend creates AIJob with QUEUED status
→ Backend prepares AI input
→ Backend calls AI provider
→ Backend validates/parses output
→ Backend saves output to AIJob
→ AIJob status becomes SUCCEEDED or FAILED
→ Frontend displays AI output preview
→ User accepts, edits, or rejects output
→ Backend applies accepted output to draft record
```

## 10.4 AI Job Status Flow

```txt
QUEUED
→ RUNNING
→ SUCCEEDED
```

or

```txt
QUEUED
→ RUNNING
→ FAILED
```

Extra statuses:

```txt
CANCELED
NEEDS_REVIEW
```

## 10.5 AI Review Rule

AI output should not automatically become final content.

Main rule:

```txt
AI creates draft data.
User-approved content is the source of truth.
```

## 10.6 AI Service Folder

Recommended backend files:

```txt
services/
├─ aiJob.service.ts
├─ aiProvider.service.ts
├─ prompts/
│  ├─ featureBrief.prompt.ts
│  ├─ taskPlanning.prompt.ts
│  ├─ bugReport.prompt.ts
│  ├─ testPlan.prompt.ts
│  └─ releaseNotes.prompt.ts
└─ parsers/
   ├─ featureBrief.parser.ts
   ├─ taskPlanning.parser.ts
   ├─ bugReport.parser.ts
   ├─ testPlan.parser.ts
   └─ releaseNotes.parser.ts
```

## 10.7 AI Safety Rules

Do not send secrets to AI.

Never send:

```txt
API keys
passwords
private tokens
environment variables
database URLs
user secrets
```

AI input should include only the minimum needed project context.

---

# 11. File Storage Architecture

## 11.1 File Storage Role

File storage supports attachments.

Main MVP use case:

```txt
Bug evidence screenshots
Test evidence screenshots
PDF notes
Text logs
```

## 11.2 File Upload Flow

```txt
User selects file
→ Frontend sends multipart/form-data request
→ Backend checks auth
→ Backend validates file type and size
→ Backend uploads file to storage
→ Backend saves Attachment metadata in database
→ Backend returns attachment record
```

## 11.3 Attachment Metadata

Store metadata in PostgreSQL:

```txt
fileName
fileKey
fileUrl
mimeType
fileSize
sourceType
sourceId
description
```

Store actual file in:

```txt
Local uploads folder for development
Object storage for production
```

## 11.4 Allowed File Types

Recommended MVP types:

```txt
image/png
image/jpeg
image/webp
application/pdf
text/plain
```

## 11.5 File Size Limit

Recommended MVP limit:

```txt
10 MB per file
```

## 11.6 File Access Rule

A user can only access a file if:

```txt
attachment.userId === currentUser.id
```

For private files, use signed URLs.

---

# 12. Activity Log Architecture

## 12.1 Activity Log Role

Activity logs help the user see what happened in a project.

Examples:

```txt
Project created
Feature brief approved
Tasks generated
Bug report created
Bug verified
Test plan completed
Release note published
AI job completed
Attachment uploaded
```

## 12.2 Activity Log Rule

The backend should create activity logs.

The frontend should not create activity logs directly.

Reason:

```txt
Activity logs should reflect trusted system events.
```

## 12.3 Activity Log Flow

```txt
User performs important action
→ Controller calls service
→ Service updates database
→ Service calls ActivityLog service
→ ActivityLog is saved
→ Frontend can show recent activity
```

## 12.4 Activity Log MVP Scope

Log meaningful workflow events only.

Do not log every small text edit.

Recommended MVP events:

```txt
CREATED
UPDATED
DELETED
ARCHIVED
RESTORED
APPROVED
PUBLISHED
STATUS_CHANGED
AI_GENERATED
FILE_UPLOADED
TEST_RUN
BUG_REOPENED
BUG_VERIFIED
TASK_COMPLETED
```

---

# 13. Request Flow Architecture

## 13.1 Normal CRUD Request Flow

Example:

```txt
Create Task
```

Flow:

```txt
Frontend form submit
→ POST /api/projects/:projectId/tasks
→ requireAuth middleware
→ validateRequest middleware
→ taskController.createTask
→ taskService.createTask
→ check project ownership
→ create task with Prisma
→ create activity log
→ return JSON response
→ frontend updates UI
```

## 13.2 Status Update Flow

Example:

```txt
Mark bug as verified
```

Flow:

```txt
User clicks Verify Bug
→ PATCH /api/projects/:projectId/bug-reports/:bugReportId/verify
→ requireAuth middleware
→ validate request body
→ bugReportService.verifyBug
→ check project ownership
→ check bug belongs to project
→ update bug status to VERIFIED
→ set verifiedAt
→ create activity log
→ return updated bug
```

## 13.3 AI Draft Flow

Example:

```txt
Generate Test Plan
```

Flow:

```txt
User clicks Generate Test Plan
→ POST /api/ai/jobs
→ backend creates AIJob
→ backend loads source FeatureBrief
→ backend builds AI prompt
→ backend calls AI provider
→ backend saves AI output
→ frontend polls AIJob
→ user previews output
→ user edits or accepts output
→ backend creates draft TestPlan
```

## 13.4 File Upload Flow

Example:

```txt
Upload bug screenshot
```

Flow:

```txt
User uploads image
→ POST /api/projects/:projectId/attachments
→ backend validates user
→ backend checks project ownership
→ backend checks file type and size
→ backend stores file
→ backend creates Attachment record
→ backend creates activity log
→ frontend shows uploaded file
```

---

# 14. Environment Variables

## 14.1 Backend Environment Variables

Recommended backend variables:

```txt
NODE_ENV
PORT
DATABASE_URL
JWT_ACCESS_SECRET
JWT_REFRESH_SECRET
CLIENT_URL
CORS_ORIGIN
AI_API_KEY
AI_MODEL
UPLOAD_PROVIDER
UPLOAD_MAX_FILE_SIZE
STORAGE_BUCKET
STORAGE_REGION
STORAGE_ACCESS_KEY
STORAGE_SECRET_KEY
```

## 14.2 Frontend Environment Variables

Recommended frontend variables:

```txt
NEXT_PUBLIC_API_URL
NEXT_PUBLIC_APP_NAME
NEXT_PUBLIC_APP_ENV
```

## 14.3 Environment Rules

Never commit real secret values.

Use:

```txt
.env.example
```

Do not commit:

```txt
.env
.env.local
.env.production
```

---

# 15. Deployment Architecture

## 15.1 MVP Deployment Plan

Recommended MVP deployment:

```txt
Frontend: Vercel
Backend API: Railway, Render, Fly.io, or Koyeb
Database: Neon, Supabase, Railway Postgres, or Render Postgres
File Storage: S3-compatible object storage
```

## 15.2 Deployment Diagram

```txt
User Browser
 │
 ▼
Vercel
Next.js Web App
 │
 ▼
Backend API Host
Node.js API
 │
 ├── PostgreSQL Host
 │
 ├── AI Provider
 │
 └── Object Storage
```

## 15.3 Frontend Deployment

Frontend needs:

```txt
NEXT_PUBLIC_API_URL
```

The frontend should call backend API through that URL.

## 15.4 Backend Deployment

Backend needs:

```txt
DATABASE_URL
JWT secrets
AI API key
CORS origin
Storage credentials
```

## 15.5 Database Deployment

Database should support:

```txt
PostgreSQL connection string
Prisma migrations
Backups if possible
```

## 15.6 CORS Rule

Backend should allow requests only from approved frontend origins.

Example:

```txt
http://localhost:3000
https://shiploop-ai.vercel.app
```

---

# 16. Error Handling Architecture

## 16.1 Standard Error Shape

All API errors should use this shape:

```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Title is required",
    "details": {}
  }
}
```

## 16.2 Error Middleware

Backend should use one central error handler:

```txt
errorHandler.ts
```

Purpose:

```txt
Catch errors
Format errors
Hide sensitive details
Return correct status codes
```

## 16.3 Common Error Codes

```txt
VALIDATION_ERROR
AUTH_REQUIRED
INVALID_CREDENTIALS
FORBIDDEN
NOT_FOUND
CONFLICT
RATE_LIMITED
AI_JOB_FAILED
UPLOAD_FAILED
INTERNAL_SERVER_ERROR
```

## 16.4 Logging Rule

Log useful backend errors.

Do not log secrets.

Do not return stack traces to users in production.

---

# 17. Testing Architecture

## 17.1 Frontend Tests

Frontend should test:

```txt
forms
validation
important UI states
API hooks
page rendering
```

Recommended tools:

```txt
Vitest
React Testing Library
Playwright later
```

## 17.2 Backend Tests

Backend should test:

```txt
auth routes
project CRUD
authorization rules
validation rules
business rules
AI job flow
file upload flow
```

Recommended tools:

```txt
Vitest or Jest
Supertest
Prisma test database
```

## 17.3 Important Backend Test Areas

```txt
User cannot access another user's project
Feature brief cannot be approved with missing fields
Task cannot become READY without done criteria
Bug cannot be closed before verification
Test plan cannot become READY without test cases
Release note cannot be approved without change items
AI output is draft-only
Unsupported file type is rejected
```

## 17.4 Manual Testing

Manual testing should cover the main demo flow:

```txt
Register
Create project
Create feature brief
Approve feature brief
Generate tasks
Create bug report
Generate test plan
Run test case
Verify bug
Generate release notes
Publish release notes
```

---

# 18. Security Architecture

## 18.1 Security Goals

The MVP should protect:

```txt
user accounts
project data
AI API keys
uploaded files
database connection
private environment variables
```

## 18.2 Main Security Rules

```txt
Hash passwords
Validate all input
Check ownership on every private record
Use safe CORS settings
Limit file uploads
Rate limit auth and AI routes
Do not expose secrets to frontend
Do not send secrets to AI provider
Use HTTPS in production
```

## 18.3 Authorization Rule

Never trust IDs from the frontend.

Example:

```txt
projectId from URL is not proof of access.
The backend must verify project.userId.
```

## 18.4 AI Security Rule

Do not send sensitive data into AI prompts.

AI prompts should include only needed project content.

## 18.5 Upload Security Rule

Uploads should be checked for:

```txt
file size
file type
ownership
storage path
```

---

# 19. Observability and Logging

## 19.1 MVP Logging

The backend should log:

```txt
server start
database connection issues
auth failures
API errors
AI job failures
upload failures
```

## 19.2 Do Not Log

Do not log:

```txt
passwords
tokens
API keys
database URLs
private user secrets
full AI prompts if they contain sensitive data
```

## 19.3 Future Observability

Future options:

```txt
Sentry
Logtail
Axiom
PostHog
OpenTelemetry
```

These are not required in MVP.

---

# 20. Performance Architecture

## 20.1 MVP Performance Goals

The MVP should be fast enough for one user.

Main goals:

```txt
Fast page load
Fast project dashboard queries
Reasonable API response times
Safe AI job handling
Simple pagination for list routes
```

## 20.2 Pagination Rule

List routes should use pagination.

Default:

```txt
page = 1
limit = 20
```

Max:

```txt
limit = 100
```

## 20.3 AI Performance Rule

AI jobs can take longer than normal CRUD requests.

Recommended behavior:

```txt
Use AIJob status tracking.
Show loading state.
Poll job status from frontend.
Do not block the whole UI.
```

## 20.4 Database Indexing

Add indexes for common filters:

```txt
userId
projectId
status
priority
createdAt
releaseVersion
```

---

# 21. MVP System Boundary

## 21.1 Included in MVP

The MVP system should include:

```txt
Web app
Backend API
PostgreSQL database
Prisma ORM
Authentication
Project CRUD
Feature Brief module
Task module
Bug Report module
Test Plan module
Test Case module
Release Notes module
AI Job tracking
Basic AI draft generation
Basic file upload
Activity logs
Dashboard summary
```

## 21.2 Excluded from MVP

The MVP system should not include:

```txt
Team workspaces
Billing
GitHub sync
Public changelog pages
Advanced analytics
Mobile app
Offline sync
Complex role permissions
Comments
Webhooks
RAG search
Calendar integration
```

---

# 22. Implementation Order

## 22.1 Phase 1 - Monorepo Setup

Create the base project structure:

```txt
apps/web
apps/api
packages/shared
docs
```

Add:

```txt
TypeScript
ESLint
Prettier
pnpm workspace
basic README scripts
```

## 22.2 Phase 2 - Backend Foundation

Build:

```txt
Express app
health route
error handler
env config
Prisma setup
database connection
```

## 22.3 Phase 3 - Authentication

Build:

```txt
register
login
logout
get current user
auth middleware
password hashing
protected route test
```

## 22.4 Phase 4 - Project Core

Build:

```txt
project CRUD
project dashboard summary
project authorization checks
activity log for project creation
```

## 22.5 Phase 5 - Feature Brief and Task Modules

Build:

```txt
feature brief CRUD
feature brief approval
task CRUD
task status updates
task completion
```

## 22.6 Phase 6 - Bug Report Module

Build:

```txt
bug report CRUD
bug status updates
mark fixed
verify bug
reopen bug
bug attachments
```

## 22.7 Phase 7 - Test Plan and Test Case Modules

Build:

```txt
test plan CRUD
test plan ready/start/complete
test case CRUD
test case result updates
create bug from failed test case
```

## 22.8 Phase 8 - Release Notes Module

Build:

```txt
release note CRUD
release note item CRUD
approve release note
publish release note
```

## 22.9 Phase 9 - AI Job System

Build:

```txt
AI job create
AI job status tracking
AI output storage
AI apply flow
AI reject flow
feature brief draft generation
task generation
test plan generation
release note generation
```

## 22.10 Phase 10 - Polish and Deployment

Build:

```txt
file upload polish
dashboard polish
activity log UI
API tests
frontend form polish
deployment setup
production environment variables
```

---

# 23. Architecture Decisions to Write Later

Create ADR files for important decisions.

Recommended ADRs:

```txt
docs/adr/single-user-saas.md
docs/adr/monorepo.md
docs/adr/rest-api.md
docs/adr/postgresql-prisma.md
docs/adr/ai-draft-review-flow.md
```

The next recommended ADR is:

```txt
docs/adr/single-user-saas.md
```

Reason:

The MVP is intentionally single-user first.

This decision affects data model, API design, auth, and product scope.

---

# 24. Risks

## 24.1 Scope Risk

Risk:

```txt
The project can become too large.
```

Mitigation:

```txt
Build one complete workflow first.
Avoid team, billing, GitHub sync, and mobile app in MVP.
```

## 24.2 AI Complexity Risk

Risk:

```txt
AI features may become hard to control.
```

Mitigation:

```txt
Use AIJob tracking.
Store AI output as draft.
Require user review before applying output.
```

## 24.3 Data Model Complexity Risk

Risk:

```txt
Too many relationships can slow down implementation.
```

Mitigation:

```txt
Use simple direct relations for common links.
Use JSON fields for list-style data in MVP.
```

## 24.4 Deployment Risk

Risk:

```txt
Frontend, backend, database, AI keys, and storage need correct environment setup.
```

Mitigation:

```txt
Start with local development.
Add deployment after core workflow works.
Keep .env.example updated.
```

---

# 25. Final System Architecture Summary

ShipLoop AI should use a simple full-stack architecture:

```txt
Next.js Web App
→ Node.js API
→ Prisma ORM
→ PostgreSQL Database
```

Support services:

```txt
AI Provider
File Storage
Activity Logs
Authentication
```

The app should be project-centered:

```txt
User
→ Project
→ Feature Brief
→ Task
→ Bug Report
→ Test Plan
→ Release Note
```

AI should support the workflow, but not control it:

```txt
AI generates drafts.
User reviews.
User approves.
Approved user content becomes the source of truth.
```

The next recommended document is:

```txt
docs/adr/single-user-saas.md
```

After the ADR, the project can move into real implementation:

```txt
Monorepo setup
→ Backend foundation
→ Prisma schema
→ Auth
→ Project CRUD
```
