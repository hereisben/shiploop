# ADR 005 — AI Draft Review Flow

## Status

Accepted

## Date

2026-06-04

## Context

ShipLoop AI uses AI to help solo developers manage the software delivery loop:

```txt
Plan → Build → Test → Fix → Ship → Learn
```

The app can use AI to help generate or improve:

- feature briefs
- development tasks
- bug reports
- debugging checklists
- test plans
- test cases
- release notes

However, AI output can be incomplete, inaccurate, too broad, or not aligned with the real project goal.

ShipLoop AI should not treat AI output as final truth.

The user must stay in control of the workflow.

## Decision

ShipLoop AI will use an AI draft review flow.

AI can generate draft content, but the user must review, edit, and approve the content before it becomes final.

Main rule:

```txt
AI creates drafts.
The user owns the final decision.
```

A generated AI result should not automatically become the source of truth.

## Main Principle

```txt
AI assists the workflow.
AI does not own the workflow.
```

## Reason

ShipLoop AI is built for real software engineering practice.

The goal is not to let AI blindly create product decisions.

The goal is to help the user think better, write clearer, test better, and ship with more structure.

This keeps the product useful, safer, and easier to trust.

## AI Draft Flow

The standard AI flow is:

```txt
User provides rough input
→ Backend creates AI job
→ AI generates draft output
→ User reviews draft
→ User edits draft
→ User approves final content
→ Approved content becomes source of truth
```

## Source of Truth Rule

Only user-approved content is source of truth.

Examples:

```txt
Approved Feature Brief = source of truth for tasks
Confirmed Tasks = source of truth for build work
Ready Test Plan = source of truth for testing
Published Release Note = source of truth for release summary
```

AI output alone is not source of truth.

## AI Job Model Impact

AI generation should be tracked as a job.

Possible `AIJob` fields:

```txt
id
userId
projectId
jobType
status
sourceType
sourceId
input
output
errorMessage
createdAt
updatedAt
completedAt
```

## AI Job Statuses

AI jobs should have clear statuses:

```txt
Queued
Running
Completed
Failed
Canceled
```

## AI Job Types

Possible AI job types:

```txt
Generate Feature Brief
Generate Tasks
Clean Bug Report
Generate Debugging Checklist
Generate Test Plan
Generate Test Cases
Generate Release Notes
Summarize Activity
```

## Feature Brief AI Flow

AI can help turn rough ideas into a structured feature brief.

Flow:

```txt
Rough Idea
→ AI Draft Feature Brief
→ User Review
→ User Edit
→ User Approve
→ Approved Feature Brief
```

AI can suggest:

- problem statement
- target user
- user outcome
- proposed solution
- success criteria
- acceptance criteria
- in scope
- out of scope
- risks
- open questions

Approval rule:

```txt
Only an approved feature brief can guide final task planning.
```

## Task Planning AI Flow

AI can help break approved work into tasks.

Flow:

```txt
Approved Feature Brief
→ AI Draft Tasks
→ User Review
→ User Edit
→ User Confirm
→ Ready Tasks
```

AI can suggest:

- frontend tasks
- backend tasks
- database tasks
- testing tasks
- documentation tasks
- dependencies
- done criteria

Confirmation rule:

```txt
Only confirmed tasks should become Ready.
```

## Bug Report AI Flow

AI can help clean messy bug notes.

Flow:

```txt
Messy Bug Notes
→ AI Cleaned Bug Draft
→ User Review
→ User Edit
→ User Save Bug Report
```

AI can suggest:

- clearer title
- steps to reproduce
- expected result
- actual result
- severity
- priority
- retest steps
- debugging checklist

Important rule:

```txt
AI may suggest severity and priority, but the user decides.
```

## Test Plan AI Flow

AI can help generate test plans from approved feature briefs or fixed bugs.

Flow:

```txt
Approved Feature Brief or Fixed Bug
→ AI Draft Test Plan
→ User Review
→ User Edit
→ User Mark Ready
→ Ready Test Plan
```

AI can suggest:

- happy path tests
- negative tests
- edge cases
- boundary tests
- regression checks
- API tests
- accessibility checks
- test data
- risks

Ready rule:

```txt
Only reviewed test plans can become Ready.
```

## Release Notes AI Flow

AI can help summarize completed work.

Flow:

```txt
Completed Tasks + Fixed Bugs + Completed Test Plans
→ AI Draft Release Notes
→ User Review
→ User Edit
→ User Approve
→ Published Release Notes
```

AI can suggest:

- user-facing summary
- developer-facing summary
- new features
- improvements
- bug fixes
- known issues
- testing notes

Publish rule:

```txt
Only approved release notes can be published.
```

## UI Impact

AI-generated content should appear as draft content first.

The UI should make this clear with labels like:

```txt
AI Draft
Needs Review
Generated Content
Review Required
```

The user should have clear actions:

```txt
Accept Draft
Edit Draft
Regenerate
Discard
Approve
```

## Backend Impact

The backend should not automatically approve AI output.

The backend should store AI output separately from approved module content when needed.

Example:

```txt
AIJob.output = generated draft
FeatureBrief = user-approved content
```

For simple flows, the backend may copy AI output into a draft record, but the record must still stay in a draft or needs-review status.

## Data Safety Rule

AI input should be limited to the needed project data.

The app should avoid sending unnecessary private data to the AI provider.

Examples:

Good:

```txt
Send selected feature brief fields to generate tasks.
```

Avoid:

```txt
Send all user projects and activity logs when only one feature brief is needed.
```

## Prompt Logging Rule

The app may store AI job input and output for debugging.

However, avoid storing sensitive data unless needed.

For MVP, this is acceptable:

```txt
Store AI input and output linked to the user and project.
```

Future versions may add:

```txt
AI data retention settings
Delete AI job history
Do not store prompt option
```

## Error Handling Rule

If AI generation fails, the user should see a clear error.

Example:

```txt
AI draft could not be generated. Please try again or write the content manually.
```

The app should not block manual work when AI fails.

Main rule:

```txt
Manual workflow must still work without AI.
```

## Regeneration Rule

Users can regenerate AI drafts.

But regeneration should not overwrite approved content without confirmation.

Good:

```txt
Generate a new draft version.
User compares or chooses it.
```

Bad:

```txt
Overwrite approved content automatically.
```

## Versioning Rule

For MVP, full AI draft version history is optional.

Simple MVP rule:

```txt
Keep the latest AI output in the AI job record.
```

Future improvement:

```txt
AI draft versions
Compare drafts
Restore previous draft
```

## Validation Rule

AI output must still pass backend validation before becoming saved module content.

Examples:

- required fields must exist
- enum values must be valid
- text length must be within limits
- source records must belong to the user
- project ownership must be checked

## Security Rule

AI routes must require authentication.

The backend must check ownership before using project data as AI input.

Example:

```txt
User requests AI task generation for feature brief.
Backend checks feature brief exists.
Backend checks feature brief belongs to the user's project.
Backend sends only allowed data to AI service.
```

## Why Not Fully Automatic AI

ShipLoop AI will not automatically make final product decisions.

Fully automatic AI could create:

- wrong acceptance criteria
- unclear tasks
- weak tests
- misleading bug summaries
- incorrect release notes
- over-scoped features

The MVP should support learning and control, not replace judgment.

## Why Not No AI

ShipLoop AI is designed around AI-assisted engineering workflows.

Without AI, the app would still be useful as a structured project tracker, but it would lose its main learning and productivity angle.

The right balance is:

```txt
Structured workflow + AI drafts + human approval
```

## Testing Impact

AI draft review flow should be tested.

Test cases should cover:

- creating an AI job
- AI job success
- AI job failure
- saving AI output as draft
- preventing automatic approval
- approving user-reviewed content
- rejecting or discarding AI output
- ownership checks before AI generation
- validation before saving AI output

## MVP Boundary

For MVP, AI support should stay focused on draft generation.

MVP includes:

- generate feature brief draft
- generate task draft
- clean bug report draft
- generate test plan draft
- generate release note draft
- track AI job status

MVP does not need:

- autonomous coding agent
- automatic code changes
- automatic deployment
- automatic GitHub pull requests
- long-term memory
- RAG search
- team AI review
- multi-agent workflows

## Future Direction

Future AI features may include:

```txt
GitHub issue generation
Pull request summary
Code review checklist
Risk analysis
Regression test suggestion
Release readiness score
RAG project memory
AI history compare view
```

These should still follow the same rule:

```txt
AI suggests.
User decides.
```

## Consequences

ShipLoop AI will keep the user in control.

AI output will be useful but not trusted blindly.

The product will support realistic software engineering habits.

The app will be safer, clearer, and easier to explain as a portfolio project.

## Final Decision

ShipLoop AI will use an AI draft review flow.

AI-generated content will stay as draft content until the user reviews, edits, and approves it.

This decision is accepted for the MVP.
