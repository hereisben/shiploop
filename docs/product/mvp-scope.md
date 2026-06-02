# MVP Scope

## Overview

This document defines the first MVP scope for **ShipLoop AI**.

ShipLoop AI is a single-user SaaS-style web and mobile product that helps solo developers manage the full software development loop:

```txt
Plan → Build → Test → Fix → Ship → Learn
```

The MVP focuses on the core web application and backend workflow first. The goal is to build a usable software engineering workflow before adding advanced features such as mobile, GitHub sync, team workspaces, or public changelog pages.

---

## MVP Goal

The goal of the MVP is to help a solo developer move from a rough feature idea to a clear release note.

The MVP should support this main workflow:

```txt
Create Project
→ Create Feature Brief
→ Approve Feature Brief
→ Create Tasks
→ Report Bugs
→ Generate Test Plan
→ Run Test Cases Manually
→ Fix and Verify Bugs
→ Generate Release Notes
```

The MVP should prove that ShipLoop AI can help users practice better engineering habits, not just store random notes.

The MVP should show:

- Clear feature planning
- Structured bug reporting
- Test planning discipline
- Release communication
- AI-assisted drafting with human review
- A realistic full-stack SaaS architecture

---

## Target User

The first target user is a solo developer or junior software engineer who is building personal projects and wants a better way to manage the development process.

Example users:

- Junior developers building portfolio projects
- Students working on software projects
- Solo developers managing side projects
- Developers who want better planning and testing habits
- Builders who want to document features, bugs, tests, and releases

---

## Core Problem

Many junior developers build projects by jumping directly into code.

This often causes problems:

- Feature goals are unclear
- Tasks are not organized
- Bugs are tracked loosely in notes or chat
- Test plans are skipped
- Release notes are written late or not written at all
- Lessons learned are lost after the project is finished

ShipLoop AI solves this by giving the user a structured workflow for planning, testing, fixing, and shipping software.

---

## MVP Product Principle

The MVP should be small enough to build, but strong enough to demo.

The MVP should prioritize:

- Clear workflow over many features
- Useful forms over decorative UI
- Human review over fully automatic AI
- Good data structure over quick hacks
- Connected modules over isolated CRUD pages

The MVP should avoid:

- Team collaboration
- Billing
- Multi-tenant complexity
- Too many AI features at once
- Mobile app before the web app is stable
- GitHub sync before the internal workflow works

---

## Core User Flow

### 1. Create a Project

The user creates a project to organize related feature briefs, tasks, bugs, test plans, and release notes.

Example:

```txt
Project: Portfolio Website
Description: My personal developer portfolio
Tech Stack: Next.js, React, Tailwind CSS
Repo URL: https://github.com/username/portfolio
```

### 2. Create a Feature Brief

The user creates a feature brief before coding.

A feature brief helps the user clarify:

- What feature they want to build
- Who the feature is for
- What problem it solves
- What success looks like
- What is in scope
- What is out of scope
- What risks or unknowns exist

### 3. Approve the Feature Brief

A feature brief starts as a draft.

The user must review and approve the feature brief before it can be used to generate tasks or test plans.

This keeps the workflow clean.

```txt
Draft → Needs Review → Approved → In Progress → Shipped
```

### 4. Create Tasks

The user creates tasks from the approved feature brief.

Tasks help break a feature into smaller work items.

Task statuses:

```txt
Backlog
Planned
In Progress
Blocked
Done
```

### 5. Report Bugs

The user can report bugs during development or testing.

A bug report should include:

- Steps to reproduce
- Expected result
- Actual result
- Environment
- Severity
- Priority
- Status
- Fix notes
- Verification notes

### 6. Generate a Test Plan

The user can generate a test plan from an approved feature brief.

A test plan should include:

- Objective
- Scope
- Out-of-scope items
- Test environment
- Test data
- Happy path tests
- Negative tests
- Edge cases
- Regression checks
- API tests when relevant
- Risks
- Success criteria

The generated test plan is a draft. The user must review and approve it.

### 7. Run Test Cases Manually

The user manually runs test cases and updates their status.

Test case statuses:

```txt
Not Run
Passed
Failed
Blocked
Skipped
Needs Update
```

If a test case fails, the user can create a bug report from that failed test case.

### 8. Fix and Verify Bugs

The user tracks a bug through the bug lifecycle.

Bug statuses:

```txt
New
Triaged
In Progress
Fixed
Ready for Retest
Verified
Closed
Reopened
Deferred
Duplicate
Need More Info
```

A bug should not be considered complete until it is verified and closed.

### 9. Generate Release Notes

The user generates release notes from:

- Shipped feature briefs
- Done tasks
- Verified or closed bugs
- Completed test plans
- Known issues
- Breaking changes
- Upgrade steps

The release notes are AI-generated drafts. The user must review and approve them before publishing or exporting.

---

## Included Features

The MVP includes the following features.

### Authentication

The user can:

- Sign up
- Log in
- Log out
- Access only their own data

Authentication should be simple for MVP.

Planned auth approach:

- Email and password
- Password hashing
- JWT or secure session-based auth
- Protected API routes

---

### Project Management

The user can:

- Create a project
- View all projects
- View project details
- Edit a project
- Archive or delete a project

A project includes:

- Title
- Description
- Status
- Tech stack
- Repository URL
- Created date
- Updated date

---

### Dashboard

The dashboard gives a quick overview of the user's work.

The dashboard should show:

- Total projects
- Active projects
- Open feature briefs
- Open tasks
- Open bugs
- Completed tasks
- Recent release notes
- Items that need review

MVP dashboard should be simple and useful. It does not need advanced analytics.

---

### Feature Brief Builder

The user can:

- Create a feature brief
- Edit a feature brief
- View feature brief details
- Change feature brief status
- Approve a feature brief
- Link a feature brief to a project

A feature brief includes:

- Title
- Summary
- Problem statement
- Target user
- User outcome
- Proposed solution
- Goals
- Success criteria
- User stories
- Acceptance criteria
- In-scope items
- Out-of-scope items
- Assumptions
- Risks
- Dependencies
- Open questions
- Technical notes
- Status
- Priority

MVP AI support:

- Improve rough feature idea
- Suggest missing questions
- Generate acceptance criteria
- Suggest risks and out-of-scope items

---

### Task Planning

The user can:

- Create tasks
- Edit tasks
- Change task status
- Link tasks to projects
- Link tasks to feature briefs
- Filter tasks by status

A task includes:

- Title
- Description
- Status
- Priority
- Related project
- Related feature brief
- Due date
- Notes

MVP task board can be simple. It does not need drag-and-drop in the first version.

---

### Bug Tracker

The user can:

- Create a bug report
- Edit a bug report
- View bug details
- Change bug status
- Set severity
- Set priority
- Add fix notes
- Add verification notes
- Link bug to project
- Link bug to feature brief
- Link bug to failed test case when relevant

A bug report includes:

- Title
- Summary
- Project
- Related feature
- Status
- Category
- Severity
- Priority
- Environment
- Preconditions
- Steps to reproduce
- Expected result
- Actual result
- Reproduction rate
- Screenshot or attachment
- Console logs
- Network logs
- Root cause notes
- Fix notes
- Verification notes

MVP AI support:

- Clean up messy bug notes
- Suggest missing fields
- Suggest severity
- Suggest priority
- Generate debugging checklist

---

### Test Plan Generator

The user can:

- Generate a test plan from an approved feature brief
- Review the generated test plan
- Edit the test plan
- Approve the test plan
- Add test cases manually
- Update test case status
- Create a bug from a failed test case

A test plan includes:

- Title
- Objective
- Scope
- Out-of-scope items
- Test strategy
- Test environment
- Test data
- Test scenarios
- Test cases
- Regression checks
- Risks
- Success criteria
- Status

A test case includes:

- Title
- Type
- Priority
- Preconditions
- Steps
- Expected result
- Actual result
- Status
- Linked acceptance criteria

MVP AI support:

- Generate test plan draft
- Generate test cases
- Include happy path tests
- Include negative tests
- Include edge cases
- Include regression checks
- Include API tests when relevant
- Suggest missing testing information

---

### Release Notes Generator

The user can:

- Create a release note
- Select related shipped work
- Generate release notes using AI
- Edit the release note
- Approve the release note
- Export release note as Markdown

A release note includes:

- Version number
- Release date
- Title
- Summary
- Audience
- Release type
- Platform
- New features
- Improvements
- Bug fixes
- Known issues
- Breaking changes
- Upgrade steps
- Security notes
- Related work
- Markdown output
- Status

MVP AI support:

- Generate user-facing release notes
- Generate developer-facing release notes
- Group changes by type
- Rewrite technical notes into plain language
- Highlight known issues
- Highlight breaking changes
- Generate Markdown output

---

### File Uploads

The MVP should support basic screenshot upload for bug reports.

MVP file support:

- Upload screenshot for bug report
- Store file metadata
- Link file to bug report
- Display uploaded screenshot in bug detail page

File storage can use local storage during early development and AWS S3 later.

---

### AI Job Status

AI features may take time, so the MVP should support basic job status.

AI job statuses:

```txt
Queued
Processing
Completed
Failed
Canceled
```

The app should show loading, success, and failure states for AI-generated content.

---

## Excluded Features

The following features are not included in the MVP.

### Team Workspaces

Not included:

- Multiple users in one workspace
- Role-based access control
- Team comments
- Assigning work to teammates
- Team activity feed

Reason:

The first version is single-user only.

---

### Billing and Subscription

Not included:

- Stripe integration
- Subscription plans
- Usage limits by plan
- Trial system
- Invoices

Reason:

The first version is for learning and portfolio use.

---

### GitHub Sync

Not included:

- Import GitHub issues
- Sync GitHub pull requests
- Generate release notes from PRs
- Create GitHub releases
- GitHub OAuth

Reason:

ShipLoop AI should prove its internal workflow before integrating with GitHub.

---

### Full Mobile App

Not included in the first web MVP:

- Full Expo app
- iOS release
- Push notifications
- Mobile auth flow
- Mobile screenshot capture

Reason:

The web app and backend should be stable first.

Mobile will be added after the core workflow works.

---

### Public Changelog Page

Not included:

- Public release notes page
- Shareable changelog URL
- SEO pages
- Public project updates

Reason:

The MVP only needs private release notes and Markdown export.

---

### RAG Knowledge Search

Not included:

- Project knowledge base
- Semantic search
- Vector database
- Retrieval augmented generation
- Long-term AI memory over project docs

Reason:

This is useful later, but not needed for the first working version.

---

### Calendar Integration

Not included:

- Google Calendar sync
- Due date reminders
- Release calendar
- Sprint calendar

Reason:

This is not required for the core software delivery loop.

---

### Advanced Analytics

Not included:

- Productivity charts
- Velocity reports
- Bug trend analytics
- Test coverage charts
- AI usage analytics

Reason:

The first version should focus on workflow, not reporting.

---

## MVP Success Criteria

The MVP is successful when the user can complete this full flow:

```txt
1. Create a project
2. Create a feature brief
3. Approve the feature brief
4. Create tasks from the brief
5. Create a bug report
6. Generate a test plan
7. Update test case statuses
8. Create a bug from a failed test case
9. Mark a bug as fixed and verified
10. Generate release notes from completed work
11. Export release notes as Markdown
```

Functional success criteria:

- User can create and manage projects
- User can create and approve feature briefs
- User can create and manage tasks
- User can create and manage bug reports
- User can generate and approve test plans
- User can track test case results
- User can generate release notes
- User can export release notes as Markdown
- AI output is saved as draft first
- User can edit AI-generated content before approval

Engineering success criteria:

- Frontend uses TypeScript
- Backend uses typed DTOs and validation
- Database schema supports the full workflow
- API routes are protected
- User input is validated
- Loading and error states are handled
- Basic tests exist for key logic
- AI responses are parsed and validated
- Background job states are tracked
- Project can be deployed and demoed

Portfolio success criteria:

- The demo shows a complete software delivery loop
- README explains the project clearly
- Docs explain MVP scope and module design
- Demo video shows the main workflow
- Resume bullets can describe real engineering work
- The project looks like more than a basic CRUD app

---

## MVP Demo Flow

The MVP demo should follow this sequence:

```txt
1. Log in
2. Create a project
3. Create a feature brief from a rough idea
4. Use AI to improve the feature brief
5. Approve the feature brief
6. Create tasks from the feature brief
7. Add a bug report
8. Use AI to clean up the bug report
9. Generate a test plan
10. Run test cases manually
11. Create a bug from a failed test case
12. Mark the bug as fixed
13. Verify and close the bug
14. Generate release notes
15. Export release notes as Markdown
```

This demo should make the project easy to explain in interviews.

---

## MVP Data Models

The MVP should include these main models:

```txt
User
Project
FeatureBrief
Task
BugReport
TestPlan
TestCase
ReleaseNote
ReleaseItem
FileAsset
AIJob
```

Detailed schema will be defined in:

```txt
docs/architecture/data-model.md
```

---

## MVP API Areas

The MVP backend should include these API areas:

```txt
Auth
Projects
Feature Briefs
Tasks
Bug Reports
Test Plans
Test Cases
Release Notes
Files
AI Jobs
```

Detailed API design will be defined in:

```txt
docs/architecture/api-design.md
```

---

## MVP AI Features

The MVP includes AI support, but AI should stay focused.

Included AI features:

- Improve feature brief draft
- Generate missing feature brief questions
- Clean up bug report
- Suggest bug debugging checklist
- Generate test plan draft
- Generate release notes draft

Excluded AI features:

- Full project chatbot
- RAG search
- Autonomous coding
- AI code generation
- AI architecture diagram generation
- AI automatic publishing
- AI automatic bug fixing

Important rule:

```txt
AI can draft, suggest, and organize.
The user must review, edit, and approve.
```

---

## Phase 1 Deliverables

Phase 1 should deliver the foundation of the product.

Included:

- Monorepo setup
- Next.js web app setup
- NestJS API setup
- PostgreSQL and Prisma setup
- Basic auth
- Project CRUD
- Basic dashboard
- Shared TypeScript config
- Basic linting and formatting

Phase 1 does not include AI yet.

---

## Phase 2 Deliverables

Phase 2 should deliver feature planning.

Included:

- Feature brief CRUD
- Feature brief status workflow
- Feature brief approval flow
- Task CRUD
- Task status workflow
- Link tasks to feature briefs

---

## Phase 3 Deliverables

Phase 3 should deliver bug tracking.

Included:

- Bug report CRUD
- Bug status workflow
- Severity and priority fields
- Environment fields
- Fix notes
- Verification notes
- Screenshot upload

---

## Phase 4 Deliverables

Phase 4 should deliver AI-assisted workflows.

Included:

- Python FastAPI AI service
- AI feature brief improvement
- AI bug report cleanup
- AI test plan generation
- AI release notes generation
- Structured JSON validation
- AI draft review flow

---

## Phase 5 Deliverables

Phase 5 should deliver background job support.

Included:

- Redis
- BullMQ
- AI job queue
- AI job status tracking
- Retry logic
- Failed job handling

---

## Phase 6 Deliverables

Phase 6 should deliver testing and deployment.

Included:

- Unit tests
- API tests
- E2E tests
- GitHub Actions
- Web deployment
- API deployment
- AI service deployment
- Demo video

---

## Phase 7 Deliverables

Phase 7 should deliver the mobile companion app.

Included:

- Expo app setup
- Mobile authentication
- Project list
- Today’s tasks
- Quick feature capture
- Quick bug capture
- Screenshot upload
- View recent release notes

---

## Open Questions

These questions should be answered before or during implementation.

### Product Questions

- Should feature briefs require approval before tasks can be created?
- Should tasks be generated by AI in MVP or created manually first?
- Should release notes be generated from tasks, feature briefs, bugs, or all of them?
- Should user-facing and developer-facing release notes be stored separately?
- Should test plans be generated only from feature briefs, or also from bug reports?

### Technical Questions

- Should web auth use JWT or HTTP-only cookies?
- Should the API live in `apps/api` or `services/api`?
- Should Prisma live inside the API app or a shared database package?
- Should file upload use S3 from the start or local storage first?
- Should AI jobs be synchronous first, then move to BullMQ later?
- Should shared DTOs live in `packages/shared`?

### UX Questions

- Should Feature Brief Builder use a step-by-step form or a single long form?
- Should Bug Report form hide advanced fields by default?
- Should Test Plan use tabs for overview, scenarios, test cases, and results?
- Should Release Notes have live Markdown preview?
- Should the dashboard focus on counts or next actions?

---

## Risks

### Scope Risk

ShipLoop AI has many modules. The MVP may become too large if mobile, GitHub sync, RAG, or analytics are added too early.

Mitigation:

- Keep MVP web-first
- Build one module at a time
- Avoid advanced integrations until core workflow works

### AI Risk

AI output may be vague, incorrect, or too generic.

Mitigation:

- Use structured JSON responses
- Validate AI output
- Show AI output as draft
- Require user review and approval

### Architecture Risk

The system may become too complex too early.

Mitigation:

- Start with clean module boundaries
- Add Redis/BullMQ only when needed
- Keep mobile app for later
- Build simple REST APIs first

### Time Risk

The project may take too long if every feature is built deeply.

Mitigation:

- Focus on demo-ready workflow
- Build simple versions first
- Save advanced UX for later
- Ship small phases

---

## Final MVP Boundary

The MVP is not a full project management platform.

The MVP is not Jira, Linear, Notion, or GitHub.

The MVP is a focused software delivery assistant for solo developers.

The first version should prove this core idea:

```txt
A solo developer can move from rough idea to release note using one structured workflow.
```
