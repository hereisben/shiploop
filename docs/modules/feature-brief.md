# Feature Brief Module Spec

## Overview

The **Feature Brief Builder** is the planning module of ShipLoop AI.

Its job is to help a solo developer turn a rough feature idea into a clear, structured feature plan before writing code.

A feature brief should answer:

```txt
What are we building?
Who is it for?
What problem does it solve?
Why does it matter?
What is in scope?
What is out of scope?
What does success look like?
What risks or unknowns exist?
How will we test it?
```

The Feature Brief module is the starting point for the rest of the ShipLoop AI workflow.

```txt
Feature Brief
→ Tasks
→ Test Plan
→ Bugs
→ Release Notes
```

---

## Purpose

The purpose of this module is to help users avoid jumping into code with vague ideas.

Many junior developers start with notes like:

```txt
Add AI for bugs
Improve dashboard
Make task page better
Add release notes
```

These ideas are too vague to build, test, or explain.

The Feature Brief Builder turns vague ideas into structured engineering notes that can guide implementation.

A strong feature brief should make the user clear on:

- The problem
- The target user
- The user outcome
- The proposed solution
- The success criteria
- The acceptance criteria
- The scope
- The risks
- The dependencies
- The open questions
- The testing direction

---

## Core Principle

The Feature Brief module should follow one main rule:

```txt
Start with the problem, not the solution.
```

The module should guide the user to explain the real problem before jumping to implementation details.

Example:

```txt
Weak idea:
Add AI to bug reports.

Better feature brief:
Solo developers often write messy bug notes that are hard to reproduce later. This feature helps them turn rough notes into structured bug reports with steps to reproduce, expected result, actual result, environment, severity, and missing information questions.
```

---

## Target User

The first target user is a solo developer or junior software engineer building personal projects.

Example users:

- Junior developers building portfolio projects
- Students building class or capstone projects
- Solo developers managing side projects
- Developers who want better planning habits
- Builders who want clean documentation before coding

---

## Main User Flow

The main Feature Brief flow is:

```txt
1. User selects a project
2. User creates a new feature brief
3. User enters a rough idea
4. User fills key planning fields
5. User can ask AI to improve the brief
6. AI returns a structured draft
7. User reviews and edits the draft
8. User answers missing questions
9. User approves the feature brief
10. Approved feature brief can create tasks and test plans
```

---

## Feature Brief Lifecycle

A feature brief should move through a clear lifecycle.

```txt
Draft
→ Needs Review
→ Approved
→ In Progress
→ Shipped
→ Archived
```

### Draft

The brief is still being written.

User can freely edit all fields.

### Needs Review

AI has generated or improved the brief, but the user has not approved it yet.

The brief may still contain missing questions or incomplete fields.

### Approved

The user has reviewed the brief and confirmed it is ready to guide implementation.

Only approved feature briefs can generate official tasks and test plans.

### In Progress

The feature is being built.

Tasks may be in progress, and bugs may be linked to this feature.

### Shipped

The feature has been completed and included in a release note.

### Archived

The brief is no longer active.

This may happen when a feature is canceled, replaced, or no longer relevant.

---

## Status Rules

The module should enforce these rules:

```txt
Draft briefs can be edited freely.
Needs Review briefs need user approval before downstream generation.
Approved briefs can generate tasks and test plans.
In Progress briefs can still receive bug links and notes.
Shipped briefs can be included in release notes.
Archived briefs should not generate new tasks or test plans.
```

Important rule:

```txt
AI output should never automatically mark a feature brief as Approved.
```

The user must review and approve.

---

## Required Fields

The MVP should require these fields before a feature brief can be approved:

```txt
Title
Problem Statement
Target User
User Outcome
Proposed Solution
Success Criteria
Acceptance Criteria
In Scope
Out of Scope
```

These fields are required because they answer the minimum questions needed before coding.

---

## Optional Fields

These fields are useful but not required for every feature brief:

```txt
Summary
Why It Matters
Current Pain
Goals
User Stories
Assumptions
Risks
Dependencies
Open Questions
Technical Notes
Design Notes
Testing Notes
Priority
Target Release
```

Optional fields can still improve the quality score of the brief.

---

## Field Definitions

### Title

A short and specific name for the feature.

Good examples:

```txt
AI Bug Report Cleaner
Feature Brief Approval Flow
Generate Test Plan from Approved Brief
Release Notes Markdown Export
```

Bad examples:

```txt
AI thing
Dashboard update
Improve bugs
New feature
```

A good title should make the feature easy to recognize in lists, tasks, bugs, and release notes.

---

### Summary

A short one or two sentence overview of the feature.

Example:

```txt
This feature helps users turn a rough feature idea into a structured feature brief with problem, user outcome, scope, risks, and acceptance criteria.
```

---

### Problem Statement

The problem statement explains who has the problem, what the problem is, when it happens, and why it matters.

Template:

```txt
[User group] is experiencing [problem] when [context], which causes [impact].
```

Example:

```txt
Solo developers often start coding from vague feature ideas, which causes unclear scope, missed edge cases, weak test plans, and confusing release notes later.
```

A problem statement should not start with the solution.

Weak:

```txt
We need an AI button to generate tasks.
```

Better:

```txt
Solo developers need a clear way to break approved feature plans into smaller tasks because large feature ideas are hard to build and track without structure.
```

---

### Target User

The specific user this feature is for.

Example:

```txt
Solo developers and junior developers who are building personal software projects.
```

The target user should be more specific than “everyone.”

---

### User Outcome

The result the user should get from the feature.

Template:

```txt
The user can [do something useful] so that [benefit].
```

Example:

```txt
The user can turn a rough idea into an approved feature brief so that they can start coding with clear scope and testable criteria.
```

---

### Why It Matters

This explains why the feature is worth building.

Example:

```txt
This matters because unclear feature planning leads to wasted coding time, missed edge cases, and weak portfolio demos.
```

---

### Current Pain

This describes what is painful about the current workflow.

Example:

```txt
The user currently writes feature ideas in notes or chat. These notes are not connected to tasks, bugs, test plans, or release notes.
```

---

### Proposed Solution

This explains how the feature solves the problem.

Template:

```txt
The feature will allow users to [main action] so they can [user outcome].
```

Example:

```txt
The feature will allow users to enter a rough feature idea and receive a structured feature brief with problem statement, target user, scope, success criteria, risks, and open questions.
```

---

### Goals

Goals describe what the feature should achieve.

Examples:

```txt
- Help users clarify feature ideas before coding
- Make feature scope visible
- Make acceptance criteria testable
- Connect feature planning to tasks and test plans
```

---

### Success Criteria

Success criteria describe how we know the feature is successful.

Success criteria should be measurable or pass/fail.

Good examples:

```txt
- User can create and save a feature brief.
- User can approve a feature brief only when required fields are complete.
- User can generate tasks from an approved feature brief.
- User can generate a test plan from an approved feature brief.
```

Weak examples:

```txt
- The feature works well.
- The user likes it.
- The experience is smooth.
```

---

### User Stories

User stories describe the feature from the user's perspective.

Format:

```txt
As a [user],
I want [goal],
so that [benefit].
```

Examples:

```txt
As a solo developer,
I want to turn a rough idea into a structured feature brief,
so that I can understand the scope before coding.

As a solo developer,
I want AI to ask missing requirement questions,
so that I can catch unclear parts before implementation.

As a solo developer,
I want to approve a feature brief,
so that only reviewed briefs can generate tasks and test plans.
```

---

### Acceptance Criteria

Acceptance criteria define what must be true for the feature to be considered done.

They should be testable.

Format:

```txt
Given [context],
When [action],
Then [expected result].
```

Examples:

```txt
Given I have entered a rough feature idea,
When I ask AI to improve it,
Then the system returns a structured feature brief draft.

Given a feature brief is missing a problem statement,
When I try to approve it,
Then the system blocks approval and shows a required field message.

Given a feature brief is approved,
When I open the action menu,
Then I can generate tasks or a test plan from it.
```

---

### In Scope

Things included in the feature.

Example:

```txt
- Create feature brief
- Edit feature brief
- Save draft
- AI improve brief
- Show missing questions
- Approve brief
- Generate tasks from approved brief
- Generate test plan from approved brief
```

---

### Out of Scope

Things intentionally excluded.

Example:

```txt
- Team review comments
- Multi-user approval
- GitHub issue sync
- Public sharing
- Version history
- Real-time collaboration
```

Out-of-scope items are important because they prevent scope creep.

---

### Assumptions

Things believed to be true but not fully proven yet.

Format:

```txt
Assumption:
[Statement]

How to validate:
[Validation plan]
```

Example:

```txt
Assumption:
Solo developers want a lightweight feature brief, not a long PRD.

How to validate:
Use the feature in my own project and ask a few junior developers to try it.
```

---

### Risks

Possible problems that could affect the feature.

Format:

```txt
Risk:
[Problem]

Impact:
[Low / Medium / High]

Mitigation:
[Plan]
```

Example:

```txt
Risk:
AI output may be too generic.

Impact:
High

Mitigation:
Use structured JSON output, required fields, and human review before approval.
```

---

### Dependencies

Things this feature needs before it can work.

Examples:

```txt
- Project model must exist
- Auth must exist
- AI service must support structured JSON
- Task generation flow must read approved feature briefs
- Test plan generation flow must read acceptance criteria
```

---

### Open Questions

Questions that still need answers.

Examples:

```txt
- Should AI-generated feature briefs be saved automatically or only after user approval?
- Should tasks be generated by AI in the MVP?
- Should users be allowed to approve a brief with open questions?
- Should a shipped feature brief become read-only?
```

Open questions should have a status:

```txt
Open
Answered
Deferred
No Longer Relevant
```

---

### Technical Notes

Light technical notes for implementation.

Examples:

```txt
- Use Zod validation for required fields.
- Store AI draft separately from approved content.
- Only approved feature briefs can generate tasks and test plans.
- Track approvedAt timestamp.
- Keep original user input for AI traceability.
```

---

### Design Notes

UI or UX notes.

Examples:

```txt
- Use a step-by-step form for the creation flow.
- Show required sections clearly.
- Use a review page before approval.
- Show AI draft and user-approved content separately if needed.
- Hide advanced fields by default.
```

---

### Testing Notes

Notes that help generate test plans later.

Examples:

```txt
- Test creating a draft feature brief.
- Test approval with all required fields.
- Test approval with missing required fields.
- Test AI improvement success.
- Test AI failure state.
- Test generating tasks only from approved briefs.
```

---

## MVP Form Sections

The MVP form should be organized into sections.

```txt
1. Basic Info
2. Problem
3. User and Outcome
4. Solution and Scope
5. Requirements
6. Risks and Unknowns
7. Technical Notes
8. Review and Approval
```

---

## Section 1: Basic Info

Fields:

```txt
Project
Title
Summary
Priority
Status
Target Release
```

MVP required:

```txt
Project
Title
```

---

## Section 2: Problem

Fields:

```txt
Problem Statement
Current Pain
Why It Matters
```

MVP required:

```txt
Problem Statement
```

---

## Section 3: User and Outcome

Fields:

```txt
Target User
User Outcome
```

MVP required:

```txt
Target User
User Outcome
```

---

## Section 4: Solution and Scope

Fields:

```txt
Proposed Solution
In Scope
Out of Scope
```

MVP required:

```txt
Proposed Solution
In Scope
Out of Scope
```

---

## Section 5: Requirements

Fields:

```txt
Goals
User Stories
Success Criteria
Acceptance Criteria
```

MVP required:

```txt
Success Criteria
Acceptance Criteria
```

---

## Section 6: Risks and Unknowns

Fields:

```txt
Assumptions
Risks
Dependencies
Open Questions
```

MVP required:

```txt
None
```

These improve the brief quality score but should not block approval in the first MVP.

---

## Section 7: Technical Notes

Fields:

```txt
Technical Notes
Design Notes
Testing Notes
```

MVP required:

```txt
None
```

---

## Section 8: Review and Approval

The review screen should show:

```txt
Required fields completed
Missing fields
AI suggestions
Open questions
Quality checklist
Approve button
```

The user should be able to approve only when required fields are complete.

---

## Quality Checklist

Each feature brief should have a quality checklist.

```txt
[ ] Title is specific
[ ] Problem statement is clear
[ ] Target user is defined
[ ] User outcome is defined
[ ] Proposed solution is described
[ ] Success criteria are measurable
[ ] Acceptance criteria are testable
[ ] In-scope items are listed
[ ] Out-of-scope items are listed
[ ] Risks are listed
[ ] Assumptions are listed
[ ] Dependencies are listed
[ ] Open questions are captured
[ ] Technical notes are included
```

---

## Quality Levels

The app can show quality levels based on completed fields.

### Weak

The brief is missing the problem, user, or success criteria.

### Good

The brief has a clear problem, target user, proposed solution, scope, and acceptance criteria.

### Strong

The brief also includes risks, assumptions, dependencies, and open questions.

### Ready to Build

All required fields are complete, and acceptance criteria are testable.

---

## AI Features

The MVP should include AI support for feature briefs, but AI should not replace user judgment.

AI can help with:

```txt
Improve rough feature idea
Generate problem statement
Generate target user suggestion
Generate user outcome
Generate success criteria
Generate acceptance criteria
Suggest in-scope items
Suggest out-of-scope items
Suggest risks
Suggest open questions
Ask missing information questions
```

---

## AI Feature Brief Improver

### Input

The user writes a rough idea.

Example:

```txt
I want AI to help write bug reports.
```

### Output

AI returns a structured draft.

Example:

```json
{
  "title": "AI Bug Report Cleaner",
  "problemStatement": "Solo developers often write messy bug notes that are hard to reproduce later.",
  "targetUser": "Solo developers and junior developers",
  "userOutcome": "The user can turn rough bug notes into a structured bug report.",
  "proposedSolution": "The feature will let users paste messy bug notes and receive a structured bug report draft with steps to reproduce, expected result, actual result, environment, and missing questions.",
  "successCriteria": [
    "User can paste rough bug notes.",
    "AI returns a structured bug report draft.",
    "User can edit the draft before saving."
  ],
  "acceptanceCriteria": [
    "Given the user enters rough bug notes, when they request AI cleanup, then the system returns a structured draft.",
    "Given the AI draft is shown, when the user edits it, then the edited version can be saved as the final bug report."
  ],
  "inScope": [
    "Rough note input",
    "AI cleanup",
    "Editable draft",
    "Missing questions"
  ],
  "outOfScope": [
    "Automatic bug fixing",
    "GitHub issue sync",
    "Team assignment"
  ],
  "risks": ["AI may invent details that the user did not provide."],
  "openQuestions": ["Should the AI suggest severity and priority?"]
}
```

---

## AI Missing Questions

AI should ask missing questions when the brief is vague.

Examples:

```txt
Who is the target user?
What problem are they facing?
What does success look like?
What is out of scope?
What edge cases should be considered?
What technical dependencies exist?
How will this feature be tested?
```

The app should display these as suggestions, not blockers.

---

## AI Scope Guard

AI can warn when a feature is too broad.

Example:

```txt
This feature may be too large for one MVP task. It includes:
- Feature brief generation
- Task generation
- Test plan generation
- Release note generation
- GitHub sync

Suggestion:
Keep GitHub sync out of scope for the MVP.
```

---

## Human Review Rule

Every AI-generated feature brief must follow this rule:

```txt
AI generates a draft.
User reviews the draft.
User edits the content.
User approves the final brief.
Only the approved brief becomes the source of truth.
```

---

## Validation Rules

### Create Draft

Minimum fields:

```txt
Project
Title
```

The user should be able to save a draft with minimal information.

### Approve Brief

Required fields:

```txt
Title
Problem Statement
Target User
User Outcome
Proposed Solution
Success Criteria
Acceptance Criteria
In Scope
Out of Scope
```

If any required field is missing, approval should be blocked.

### Generate Tasks

Allowed only when:

```txt
FeatureBrief.status = Approved
```

### Generate Test Plan

Allowed only when:

```txt
FeatureBrief.status = Approved
```

### Mark as Shipped

Allowed when:

```txt
At least one related task is Done
or user manually confirms feature has shipped
```

---

## Data Model Draft

```ts
FeatureBrief {
  id: string
  projectId: string

  title: string
  summary?: string

  status: FeatureBriefStatus
  priority: FeaturePriority

  problemStatement: string
  targetUser: string
  userOutcome: string
  whyItMatters?: string
  currentPain?: string

  proposedSolution: string
  goals?: string[]

  successCriteria: string[]
  userStories?: string[]
  acceptanceCriteria: string[]

  inScope: string[]
  outOfScope: string[]
  futureScope?: string[]

  assumptions?: Json
  risks?: Json
  dependencies?: Json
  openQuestions?: Json

  technicalNotes?: string
  designNotes?: string
  testingNotes?: string

  originalInput?: string
  aiDraft?: Json
  approvedAt?: Date
  shippedAt?: Date
  archivedAt?: Date

  createdAt: Date
  updatedAt: Date
}
```

---

## Enums

```ts
enum FeatureBriefStatus {
  DRAFT
  NEEDS_REVIEW
  APPROVED
  IN_PROGRESS
  SHIPPED
  ARCHIVED
}

enum FeaturePriority {
  P1
  P2
  P3
  P4
}
```

---

## API Draft

### Create Feature Brief

```http
POST /api/projects/:projectId/feature-briefs
```

Purpose:

```txt
Create a draft feature brief.
```

Required body:

```json
{
  "title": "AI Bug Report Cleaner"
}
```

---

### Get Feature Briefs

```http
GET /api/projects/:projectId/feature-briefs
```

Purpose:

```txt
Get all feature briefs for a project.
```

---

### Get Feature Brief Detail

```http
GET /api/feature-briefs/:featureBriefId
```

Purpose:

```txt
Get one feature brief with related tasks, bugs, and test plans.
```

---

### Update Feature Brief

```http
PATCH /api/feature-briefs/:featureBriefId
```

Purpose:

```txt
Update feature brief fields.
```

---

### Approve Feature Brief

```http
POST /api/feature-briefs/:featureBriefId/approve
```

Purpose:

```txt
Validate required fields and mark feature brief as Approved.
```

---

### Archive Feature Brief

```http
POST /api/feature-briefs/:featureBriefId/archive
```

Purpose:

```txt
Mark feature brief as Archived.
```

---

### Improve Feature Brief with AI

```http
POST /api/ai/feature-briefs/improve
```

Purpose:

```txt
Generate an improved feature brief draft from rough input.
```

Example body:

```json
{
  "projectId": "project_123",
  "roughIdea": "I want AI to help write bug reports."
}
```

---

### Generate Tasks from Feature Brief

```http
POST /api/feature-briefs/:featureBriefId/generate-tasks
```

Purpose:

```txt
Generate tasks from an approved feature brief.
```

Allowed only when:

```txt
FeatureBrief.status = APPROVED
```

---

### Generate Test Plan from Feature Brief

```http
POST /api/feature-briefs/:featureBriefId/generate-test-plan
```

Purpose:

```txt
Generate a test plan from an approved feature brief.
```

Allowed only when:

```txt
FeatureBrief.status = APPROVED
```

---

## UI Pages

The MVP should include these pages.

```txt
/projects/:projectId/feature-briefs
/projects/:projectId/feature-briefs/new
/feature-briefs/:featureBriefId
/feature-briefs/:featureBriefId/edit
```

---

## Feature Brief List Page

The list page should show:

```txt
Title
Status
Priority
Project
Updated date
Approved status
Actions
```

Useful filters:

```txt
Status
Priority
Project
Search by title
```

---

## New Feature Brief Page

The new page should support:

```txt
Manual creation
Rough idea input
AI improve action
Save draft
```

Recommended sections:

```txt
Rough Idea
Basic Info
Problem
User and Outcome
Solution and Scope
Review
```

---

## Feature Brief Detail Page

The detail page should show:

```txt
Title
Status
Priority
Summary
Problem statement
Target user
User outcome
Proposed solution
Success criteria
Acceptance criteria
In scope
Out of scope
Risks
Open questions
Technical notes
Related tasks
Related bugs
Related test plans
Actions
```

Actions:

```txt
Edit
Approve
Generate Tasks
Generate Test Plan
Mark In Progress
Mark Shipped
Archive
```

---

## Feature Brief Edit Page

The edit page should allow the user to update all fields.

It should show:

```txt
Required fields
Optional fields
AI suggestions
Quality checklist
Approval readiness
```

---

## State Handling

The UI should handle:

```txt
Loading state
Empty state
Validation error
AI generation loading
AI generation failed
AI generation completed
Approval blocked
Approval successful
```

---

## Empty States

Feature brief empty state:

```txt
No feature briefs yet.
Create your first feature brief to turn a rough idea into a buildable plan.
```

AI empty state:

```txt
Write a rough idea and let AI help structure it into a clearer feature brief.
```

---

## Error States

Approval error:

```txt
This feature brief is missing required fields. Complete the problem statement, target user, user outcome, success criteria, acceptance criteria, in-scope items, and out-of-scope items before approval.
```

AI error:

```txt
AI could not generate a feature brief draft. Try again or continue writing manually.
```

---

## Out of Scope for MVP

The Feature Brief MVP does not include:

```txt
Team comments
Multi-user approval
Version history
Public sharing
GitHub issue sync
AI architecture diagram generation
Real-time collaboration
Advanced analytics
```

These may be added later.

---

## Testing Requirements

The MVP should test these flows.

### Unit Tests

```txt
Feature brief validation
Approval readiness logic
Quality checklist logic
AI response parsing
Status transition rules
```

### API Tests

```txt
Create feature brief
Update feature brief
Approve valid feature brief
Reject approval with missing required fields
Archive feature brief
Get feature briefs by project
```

### E2E Tests

```txt
User creates project
User creates feature brief
User fills required fields
User approves feature brief
User generates tasks from approved brief
User generates test plan from approved brief
```

### Manual Tests

```txt
AI improves rough idea
AI asks missing questions
User edits AI draft
Approval button is disabled or blocked when fields are missing
Long text does not break layout
```

---

## Success Criteria

This module is successful when:

```txt
User can create a draft feature brief.
User can improve a rough idea with AI.
User can edit the AI draft.
User can approve a complete feature brief.
User cannot approve an incomplete feature brief.
Approved feature briefs can generate tasks.
Approved feature briefs can generate test plans.
Feature briefs connect clearly to downstream workflow.
```

---

## Example Feature Brief

```md
# Feature Brief: AI Bug Report Cleaner

## Summary

This feature helps users turn messy bug notes into structured bug reports that are easier to reproduce, debug, and verify.

## Problem Statement

Solo developers often write vague bug notes during development, which makes bugs hard to reproduce and fix later.

## Target User

Solo developers and junior developers building personal software projects.

## User Outcome

The user can turn rough bug notes into a clear bug report with steps to reproduce, expected result, actual result, environment, and missing information questions.

## Proposed Solution

The feature will let users paste rough bug notes into ShipLoop AI. AI will return a structured bug report draft. The user can review, edit, and save the final report.

## Success Criteria

- User can paste rough bug notes.
- AI returns a structured bug report draft.
- User can edit the draft before saving.
- Saved bug report includes steps to reproduce, expected result, actual result, and environment.

## Acceptance Criteria

- Given the user enters rough bug notes, when they request AI cleanup, then the system returns a structured bug report draft.
- Given the AI draft is displayed, when the user edits the content, then the edited version can be saved.
- Given the user tries to save without required fields, when they submit the form, then the system shows validation errors.

## In Scope

- Rough note input
- AI cleanup
- Editable AI draft
- Missing information questions
- Save as bug report

## Out of Scope

- Automatic bug fixing
- GitHub issue sync
- Team assignment
- Screenshot analysis

## Risks

- AI may invent details that the user did not provide.
- The user may accept a bad AI draft without reviewing it.

## Open Questions

- Should AI suggest severity and priority?
- Should missing questions block saving?
- Should AI output be stored separately from user-approved content?

## Technical Notes

- Use structured JSON output.
- Validate AI output before displaying it.
- Store original input and AI draft.
- Require user review before saving the final bug report.
```

---

## Final Notes

The Feature Brief module is the source of truth for planned work.

A good feature brief should be:

```txt
Clear
Scoped
Testable
Connected
Editable
Approved by the user
```

The module should help the user think like an engineer before writing code.
