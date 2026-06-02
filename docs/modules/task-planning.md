# Task Planning Module Spec

## Overview

The Task Planning module helps users turn an approved feature brief into clear, trackable development tasks.

This module connects planning to building.

It helps the user break a feature into smaller pieces before writing code.

The goal is to make the work easier to understand, build, test, and ship.

---

## Purpose

The purpose of this module is to help solo developers plan implementation work in a structured way.

A task should answer these questions:

```txt
What needs to be done?
Why does it need to be done?
Which feature or bug is it connected to?
What does done mean?
What is the current status?
```

The Task Planning module should help the user move from a large feature idea into smaller engineering tasks.

---

## Core Principle

```txt
A task should be small enough to build, test, and review.
```

A bad task is too vague.

Bad example:

```txt
Build authentication.
```

A better task is specific.

Better example:

```txt
Create login API endpoint with email and password validation.
```

---

## Target User

The target user is a solo developer or junior engineer who wants to organize implementation work.

The user may be working from:

- an approved feature brief
- a bug report
- a test plan
- a manual idea
- a release goal

The module should help the user avoid jumping straight into code without a clear plan.

---

## Main User Flow

The main flow is:

```txt
User selects a project
→ User selects an approved feature brief
→ User creates a task plan
→ App suggests tasks
→ User reviews and edits tasks
→ User starts work
→ User updates task statuses
→ Completed tasks feed into testing and release notes
```

---

## Task Planning Lifecycle

A task can move through these statuses:

```txt
Backlog
→ Ready
→ In Progress
→ In Review
→ Done
```

Additional statuses:

```txt
Blocked
Canceled
Deferred
```

---

## Status Definitions

### Backlog

The task exists, but it is not ready to work on yet.

It may still need more details.

### Ready

The task is clear enough to start.

It has a title, description, linked work, and done criteria.

### In Progress

The user is actively working on the task.

### In Review

The task is implemented, but it still needs review or testing.

For a solo developer, this can mean self-review.

### Done

The task is complete.

It meets the done criteria and does not need more work.

### Blocked

The task cannot move forward because something is missing.

Examples:

- missing design decision
- missing API dependency
- unclear requirement
- broken environment
- waiting on another task

### Canceled

The task is no longer needed.

### Deferred

The task is valid, but it is moved to a later version.

---

## Status Rules

The normal flow is:

```txt
Backlog → Ready
Ready → In Progress
In Progress → In Review
In Review → Done
```

A task can become blocked from:

```txt
Ready
In Progress
In Review
```

A blocked task can return to:

```txt
Ready
In Progress
```

A task can be deferred or canceled if the user decides it is outside the current release.

---

## Required Fields

A task should require these fields before it can move to Ready:

- Title
- Project
- Task Type
- Status
- Description
- Linked Source
- Done Criteria
- Priority

---

## Optional Fields

A task may also include:

- Estimate
- Complexity
- Risk Level
- Dependencies
- Related Feature Brief
- Related Bug Report
- Related Test Plan
- Related Release Note
- Notes
- Implementation Notes
- Test Notes
- Git Branch
- Pull Request Link
- Commit Hash

---

## Field Definitions

### Title

A short and clear task name.

Example:

```txt
Create feature brief form validation
```

### Project

The project connected to the task.

Example:

```txt
ShipLoop AI
```

### Task Type

The kind of work being done.

Possible values:

```txt
Frontend
Backend
Database
API
UI
UX
Testing
Bug Fix
Documentation
DevOps
Refactor
Research
AI Prompt
```

### Status

The current state of the task.

Possible values:

```txt
Backlog
Ready
In Progress
In Review
Done
Blocked
Canceled
Deferred
```

### Description

A short explanation of the task.

Example:

```txt
Add validation to prevent users from approving a feature brief when required fields are empty.
```

### Linked Source

The work item that created this task.

A task may be linked to:

```txt
Feature Brief
Bug Report
Test Plan
Release Note
Manual
```

### Done Criteria

A clear checklist that defines when the task is complete.

Example:

```txt
- Required fields are checked before approval.
- Empty fields show clear error messages.
- User cannot approve an incomplete feature brief.
- Validation is tested with at least one negative case.
```

### Priority

How soon the task should be done.

Possible values:

```txt
Low
Medium
High
Critical
```

### Estimate

A rough size estimate.

Possible values:

```txt
XS
S
M
L
XL
```

For MVP, this should stay simple.

### Complexity

How hard the task is.

Possible values:

```txt
Low
Medium
High
```

### Risk Level

How risky the task is.

Possible values:

```txt
Low
Medium
High
```

### Dependencies

Other tasks or decisions needed before this task can be completed.

Example:

```txt
Database schema for feature briefs must exist before API validation can be implemented.
```

### Implementation Notes

Developer notes about how the task was built.

### Test Notes

Notes about how the task was tested.

### Git Branch

The branch used for the task.

Example:

```txt
feature/brief-validation
```

### Pull Request Link

A link to the pull request if the project uses GitHub.

For MVP, this can be a plain text field.

### Commit Hash

The commit connected to the task.

For MVP, this can be a plain text field.

---

## Task Types

The MVP should support these task types:

```txt
Frontend
Backend
Database
API
UI
Testing
Bug Fix
Documentation
Refactor
Research
AI Prompt
```

---

## Task Priority Levels

### Low

Nice to have.

Not urgent.

### Medium

Useful for the current feature, but not blocking.

### High

Important for the current feature or release.

### Critical

Blocks the release or breaks the main workflow.

---

## Task Estimate Levels

### XS

Very small task.

Usually less than one hour.

### S

Small task.

Can be done in one focused work session.

### M

Medium task.

May need several steps.

### L

Large task.

Should be checked to see if it can be split.

### XL

Too large for a normal task.

The app should suggest breaking it into smaller tasks.

---

## Task Quality Checklist

A good task should have:

- clear title
- clear purpose
- linked source
- small scope
- done criteria
- priority
- status
- no vague words
- enough detail to start work
- test or review notes when completed

---

## Task Quality Levels

### Weak Task

A weak task is vague.

Example:

```txt
Work on dashboard.
```

Problems:

- unclear scope
- no done criteria
- no linked source
- no test plan

### Good Task

A good task is specific.

Example:

```txt
Create dashboard card for active feature briefs.
```

It explains:

- what to build
- where it belongs
- what done means

### Strong Task

A strong task is specific, linked, and testable.

Example:

```txt
Create dashboard card for active feature briefs.

Done criteria:
- Card shows number of active feature briefs.
- Card links to feature brief list page.
- Empty state appears when no feature briefs exist.
- Loading state appears while data is loading.
- API error shows a clear message.
```

---

## AI Task Planning Support

AI can help with:

- breaking a feature brief into tasks
- suggesting frontend tasks
- suggesting backend tasks
- suggesting database tasks
- suggesting test tasks
- suggesting documentation tasks
- finding missing implementation steps
- rewriting vague tasks
- splitting large tasks
- creating done criteria
- identifying dependencies
- identifying risks

---

## AI Input Sources

AI can use these sources:

- approved feature briefs
- bug reports
- test plans
- release goals
- manual user notes

AI should not create tasks that are outside the selected scope unless it labels them as suggestions.

---

## AI Output Rule

AI output must be treated as a draft.

```txt
AI suggests tasks.
User reviews the tasks.
User edits the tasks.
User confirms the final task plan.
Only confirmed tasks become Ready.
```

---

## AI Task Generation Example

Input:

```txt
Build a Feature Brief Builder that lets users create, edit, and approve feature briefs.
```

AI output:

```txt
Frontend:
- Create feature brief list page.
- Create feature brief editor form.
- Add status badge for each feature brief.
- Add approval button with validation.

Backend:
- Create feature brief database model.
- Create feature brief CRUD API routes.
- Add approval validation rules.

Testing:
- Test creating a feature brief.
- Test editing a feature brief.
- Test approval with missing required fields.
- Test approval with all required fields completed.

Documentation:
- Update README with Feature Brief Builder workflow.
```

---

## AI Missing Questions

If the task plan does not have enough information, AI should ask questions such as:

```txt
Which feature brief should these tasks come from?
Is this task for MVP or a later version?
Should this task include frontend, backend, or both?
What does done mean for this task?
Does this task need database changes?
Does this task need API changes?
Does this task need tests?
Is this task blocked by another task?
```

---

## AI Scope Guard

AI should not:

- create tasks outside the approved feature scope without warning
- mark tasks as Done
- invent completed work
- invent Git branches or commit hashes
- remove user-created tasks without confirmation
- change priority without user review
- move blocked tasks forward without a reason

---

## Task Splitting Rules

The app should suggest splitting a task when:

- the task has more than one major goal
- the task includes frontend, backend, and database work at the same time
- the task has an XL estimate
- the task has unclear done criteria
- the task cannot be tested in one clear way

Example of a task that is too large:

```txt
Build the whole bug tracker.
```

Better split:

```txt
- Create bug report database model.
- Create bug report API routes.
- Create bug report list page.
- Create bug report detail page.
- Add bug status update action.
- Add bug report validation.
- Add tests for bug report creation.
```

---

## Task Dependencies

Tasks can depend on other tasks.

Example:

```txt
Create feature brief API routes
```

depends on:

```txt
Create feature brief database model
```

A task with incomplete dependencies should not move to Ready unless the user confirms it.

---

## Task Completion Rules

A task can be marked Done when:

- done criteria are complete
- required implementation notes are added if needed
- test notes are added if needed
- blockers are resolved
- related bug or feature status is updated if needed

For MVP, the app can allow manual completion.

Later, GitHub integration may automate some checks.

---

## MVP Form Sections

The MVP task form should include these sections:

```txt
Basic Info
Planning Details
Done Criteria
Related Work
Implementation Notes
Testing Notes
Status History
```

---

## MVP Form Layout

### Section 1: Basic Info

Fields:

- Title
- Project
- Task Type
- Status
- Priority
- Estimate
- Complexity
- Risk Level

### Section 2: Planning Details

Fields:

- Description
- Dependencies
- Notes

### Section 3: Done Criteria

Fields:

- Done Criteria Checklist

### Section 4: Related Work

Fields:

- Related Feature Brief
- Related Bug Report
- Related Test Plan
- Related Release Note

### Section 5: Implementation Notes

Fields:

- Git Branch
- Pull Request Link
- Commit Hash
- Implementation Notes

### Section 6: Testing Notes

Fields:

- Test Notes
- Related Test Cases

### Section 7: Status History

Fields:

- Created At
- Updated At
- Started At
- Completed At

---

## Data Model Draft

```ts
type TaskStatus =
  | "backlog"
  | "ready"
  | "in_progress"
  | "in_review"
  | "done"
  | "blocked"
  | "canceled"
  | "deferred";

type TaskType =
  | "frontend"
  | "backend"
  | "database"
  | "api"
  | "ui"
  | "ux"
  | "testing"
  | "bug_fix"
  | "documentation"
  | "devops"
  | "refactor"
  | "research"
  | "ai_prompt";

type TaskPriority = "low" | "medium" | "high" | "critical";

type TaskEstimate = "xs" | "s" | "m" | "l" | "xl";

type TaskComplexity = "low" | "medium" | "high";

type TaskRiskLevel = "low" | "medium" | "high";

type LinkedSourceType =
  | "feature_brief"
  | "bug_report"
  | "test_plan"
  | "release_note"
  | "manual";

type Task = {
  id: string;
  projectId: string;

  title: string;
  description: string;

  status: TaskStatus;
  type: TaskType;
  priority: TaskPriority;

  estimate?: TaskEstimate;
  complexity?: TaskComplexity;
  riskLevel?: TaskRiskLevel;

  linkedSourceType: LinkedSourceType;
  linkedSourceId?: string;

  relatedFeatureBriefId?: string;
  relatedBugReportId?: string;
  relatedTestPlanId?: string;
  relatedReleaseNoteId?: string;

  doneCriteria: TaskDoneCriterion[];

  dependencies: TaskDependency[];

  notes?: string;
  implementationNotes?: string;
  testNotes?: string;

  gitBranch?: string;
  pullRequestUrl?: string;
  commitHash?: string;

  createdAt: string;
  updatedAt: string;
  startedAt?: string;
  completedAt?: string;
};

type TaskDoneCriterion = {
  id: string;
  taskId: string;

  text: string;
  isComplete: boolean;

  createdAt: string;
  updatedAt: string;
};

type TaskDependency = {
  id: string;
  taskId: string;
  dependsOnTaskId: string;

  createdAt: string;
};
```

---

## API Draft

### Create Task

```txt
POST /api/projects/:projectId/tasks
```

Creates a new task.

### Get Project Tasks

```txt
GET /api/projects/:projectId/tasks
```

Returns all tasks for a project.

### Get Single Task

```txt
GET /api/tasks/:taskId
```

Returns one task.

### Update Task

```txt
PATCH /api/tasks/:taskId
```

Updates task fields.

### Delete Task

```txt
DELETE /api/tasks/:taskId
```

Deletes or archives a task.

For MVP, prefer archive over hard delete.

### Generate Tasks From Feature Brief

```txt
POST /api/feature-briefs/:featureBriefId/generate-tasks
```

Generates draft tasks from an approved feature brief.

### Generate Tasks From Bug Report

```txt
POST /api/bug-reports/:bugReportId/generate-tasks
```

Generates draft tasks from a bug report.

### Update Task Status

```txt
PATCH /api/tasks/:taskId/status
```

Updates the task status.

### Add Done Criterion

```txt
POST /api/tasks/:taskId/done-criteria
```

Adds one done criterion.

### Update Done Criterion

```txt
PATCH /api/task-done-criteria/:criterionId
```

Updates one done criterion.

### Delete Done Criterion

```txt
DELETE /api/task-done-criteria/:criterionId
```

Deletes one done criterion.

### Add Task Dependency

```txt
POST /api/tasks/:taskId/dependencies
```

Adds a dependency to a task.

### Remove Task Dependency

```txt
DELETE /api/task-dependencies/:dependencyId
```

Removes a dependency.

---

## UI Page Draft

### Task List Page

Route:

```txt
/projects/:projectId/tasks
```

Shows:

- task title
- status
- type
- priority
- estimate
- linked source
- updated date

Actions:

- create task
- view task
- edit task
- update status
- archive task

---

### Task Board Page

Route:

```txt
/projects/:projectId/tasks/board
```

Shows tasks grouped by status:

```txt
Backlog
Ready
In Progress
In Review
Done
Blocked
```

For MVP, drag and drop is optional.

A simple status update menu is enough.

---

### Task Detail Page

Route:

```txt
/projects/:projectId/tasks/:taskId
```

Shows:

- title
- description
- status
- priority
- task type
- estimate
- linked source
- done criteria
- dependencies
- related work
- implementation notes
- test notes
- Git branch
- commit hash

---

### Generate Tasks Page

Route:

```txt
/projects/:projectId/tasks/generate
```

Allows the user to:

- select a feature brief
- select a bug report
- add manual notes
- generate draft tasks
- review suggested tasks
- approve selected tasks

---

## Testing Requirements

The Task Planning module should be tested with:

- task creation
- task editing
- task status updates
- task completion validation
- done criteria creation
- done criteria checking
- task dependency creation
- blocked task behavior
- task generation from feature brief
- task generation from bug report
- empty required fields
- task filtering by status
- task filtering by priority
- task filtering by type

---

## Example Task Plan

Feature Brief:

```txt
Feature Brief Builder
```

Generated tasks:

```txt
Frontend:
- Create feature brief list page.
- Create feature brief editor page.
- Add required field validation messages.
- Add approval button with disabled state.

Backend:
- Create feature brief database schema.
- Create feature brief CRUD API routes.
- Add approval validation endpoint.
- Add status update logic.

Testing:
- Test creating a feature brief.
- Test editing a feature brief.
- Test approval with missing required fields.
- Test approval with all required fields completed.

Documentation:
- Update README with Feature Brief Builder workflow.
```

---

## MVP Boundary

For MVP, the Task Planning module should support:

- manual task creation
- task list page
- task detail page
- basic task board
- task status updates
- priority
- estimate
- task type
- done criteria checklist
- task dependencies
- AI task generation from feature briefs
- AI task generation from bug reports
- links to related feature briefs, bugs, test plans, and release notes

MVP should not include:

- team assignment
- sprint planning
- time tracking
- GitHub sync
- automatic pull request detection
- automatic commit parsing
- calendar scheduling
- team workload analytics
- drag and drop requirement
- notifications

---

## Final Rule

```txt
A task is ready only when another developer could understand what to build, why it matters, and how to know when it is done.
```
