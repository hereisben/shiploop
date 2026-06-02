# Release Notes Module Spec

## Overview

The Release Notes module helps users turn completed work into clear release notes.

This module connects feature briefs, tasks, bug reports, and test plans into one final summary that explains what changed in a release.

Release notes should be easy for humans to read.

They should not be a raw commit log.

---

## Purpose

The purpose of this module is to help solo developers explain a release in a clear and useful way.

A release note should answer these questions:

```txt
What changed?
Why does it matter?
Who is affected?
Are there any known issues?
Is there anything users or developers need to do?
```

The module should help users create both:

- user-facing release notes
- developer-facing release notes

---

## Core Principle

```txt
Release notes are for humans, not machines.
```

A release note should explain the impact of the work, not only list technical changes.

Bad release note:

```txt
Fixed bug in auth route.
```

Better release note:

```txt
Fixed a login issue that prevented some users from signing in after their session expired.
```

---

## Target User

The target user is a solo developer or junior engineer who wants to document a release before shipping it.

The user may have:

- completed feature briefs
- completed tasks
- verified bug reports
- completed test plans
- manual notes about what changed

The module should help the user turn that work into a clean release summary.

---

## Main User Flow

The main flow is:

```txt
User selects a project
→ User creates a release note
→ User selects completed work
→ App groups changes by category
→ AI generates a draft release note
→ User reviews and edits the draft
→ User approves the final release note
→ Release note becomes ready to ship
```

---

## Release Notes Lifecycle

A release note can move through these statuses:

```txt
Draft
→ Needs Review
→ Approved
→ Published
→ Archived
```

---

## Status Definitions

### Draft

The release note is still being written.

It may be incomplete.

### Needs Review

The release note has enough content, but the user still needs to review it.

This status is useful after AI generates a draft.

### Approved

The user has reviewed the release note and confirmed it is ready.

### Published

The release note has been shared outside the app or marked as shipped.

For MVP, publishing can mean the user manually marks it as published.

### Archived

The release note is no longer active, but it is kept for history.

---

## Status Rules

The user can move a release note from:

```txt
Draft → Needs Review
Needs Review → Approved
Approved → Published
Published → Archived
```

The user can also move a release note back to Draft if edits are needed.

```txt
Needs Review → Draft
Approved → Draft
```

A release note should not be Published unless it is Approved first.

---

## Required Fields

A release note should require these fields before approval:

- Title
- Project
- Release Version
- Release Date
- Summary
- At least one change item

---

## Optional Fields

A release note may also include:

- Release Type
- Audience
- New Features
- Improvements
- Bug Fixes
- Known Issues
- Breaking Changes
- Migration Notes
- Testing Summary
- Related Feature Briefs
- Related Bugs
- Related Test Plans
- Internal Notes

---

## Field Definitions

### Title

A short name for the release note.

Example:

```txt
ShipLoop AI v0.1.0 Release Notes
```

### Project

The project connected to the release note.

Example:

```txt
ShipLoop AI
```

### Release Version

The version number for the release.

Example:

```txt
v0.1.0
```

For MVP, this can be a text field.

Later, the app may support semantic versioning rules.

### Release Date

The date the release is planned or completed.

Example:

```txt
2026-06-02
```

### Release Type

The type of release.

Possible values:

```txt
Major
Minor
Patch
Hotfix
Internal
Beta
MVP
```

### Audience

The target reader of the release note.

Possible values:

```txt
User
Developer
Internal
Mixed
```

### Summary

A short paragraph explaining the release.

The summary should explain the main value of the release.

Example:

```txt
This release adds the first version of the Feature Brief Builder. Users can now turn rough feature ideas into structured plans with problem statements, scope, success criteria, and acceptance criteria.
```

### New Features

A list of new user-facing features.

Example:

```txt
- Added a Feature Brief Builder for creating structured feature plans.
- Added feature brief status tracking from Draft to Approved.
```

### Improvements

A list of changes that improve existing behavior.

Example:

```txt
- Improved the project dashboard layout so users can find active work faster.
```

### Bug Fixes

A list of fixed bugs.

Example:

```txt
- Fixed an issue where empty acceptance criteria could be saved by mistake.
```

### Known Issues

A list of issues that still exist in the release.

Example:

```txt
- AI-generated release notes may still need manual editing before publishing.
```

### Breaking Changes

A list of changes that may break existing behavior.

Example:

```txt
- Updated the feature brief status enum. Older draft data may need migration.
```

If there are no breaking changes, the app can show:

```txt
No breaking changes.
```

### Migration Notes

Steps the user or developer must follow after the release.

Example:

```txt
Run the latest database migration before starting the server.
```

### Testing Summary

A short summary of how the release was tested.

Example:

```txt
The release was tested with happy path, negative, and regression test cases for the Feature Brief module.
```

### Related Feature Briefs

Feature briefs included in the release.

### Related Bugs

Bug reports fixed in the release.

### Related Test Plans

Test plans used to verify the release.

### Internal Notes

Private notes for the developer.

These notes should not be included in public release notes by default.

---

## Release Note Sections

The MVP release note form should include these sections:

```txt
Basic Info
Summary
Changes
Testing
Known Issues
Publishing
Internal Notes
```

---

## MVP Form Layout

### Section 1: Basic Info

Fields:

- Title
- Project
- Release Version
- Release Date
- Release Type
- Audience
- Status

### Section 2: Summary

Fields:

- Summary

### Section 3: Changes

Fields:

- New Features
- Improvements
- Bug Fixes
- Breaking Changes
- Migration Notes

### Section 4: Testing

Fields:

- Testing Summary
- Related Test Plans

### Section 5: Known Issues

Fields:

- Known Issues

### Section 6: Publishing

Fields:

- Published At
- Published By
- Public Notes Format
- Developer Notes Format

### Section 7: Internal Notes

Fields:

- Internal Notes

---

## Change Item Types

Each change item should have a type.

Possible types:

```txt
Feature
Improvement
Bug Fix
Known Issue
Breaking Change
Migration
Security
Performance
Documentation
Internal
```

---

## Change Item Fields

Each change item should include:

- Type
- Title
- Description
- User Impact
- Related Item
- Visibility

---

## Change Item Field Definitions

### Type

The category of the change.

Example:

```txt
Bug Fix
```

### Title

A short title for the change.

Example:

```txt
Fixed login session expiration bug
```

### Description

A clear explanation of what changed.

Example:

```txt
The app now redirects users to the login page when their session expires instead of showing a blank dashboard.
```

### User Impact

Explains why the change matters.

Example:

```txt
Users can recover from expired sessions without refreshing the page manually.
```

### Related Item

The feature brief, bug report, task, or test plan connected to the change.

### Visibility

Controls where the change appears.

Possible values:

```txt
Public
Developer
Internal
```

---

## Release Note Formats

The module should support two formats in MVP.

### User-Facing Format

This format focuses on clear product changes.

Example:

```md
# ShipLoop AI v0.1.0

## Summary

This release adds the first version of the Feature Brief Builder.

## New Features

- Added a structured Feature Brief Builder.
- Added status tracking for feature briefs.

## Bug Fixes

- Fixed form validation for required fields.

## Known Issues

- AI-generated drafts still need manual review.
```

### Developer-Facing Format

This format includes more technical details.

Example:

```md
# ShipLoop AI v0.1.0 Developer Release Notes

## Summary

This release adds the first Feature Brief module and supporting validation rules.

## Changes

### Features

- Added feature brief creation flow.
- Added feature brief lifecycle statuses.
- Added required approval fields.

### Bug Fixes

- Fixed validation for empty acceptance criteria.

## Testing

- Tested feature brief creation.
- Tested approval validation.
- Tested draft editing flow.

## Migration Notes

No migration required.

## Known Issues

AI output still needs user review.
```

---

## AI Release Notes Support

AI can help with:

- generating a release note draft
- grouping changes by type
- rewriting technical notes for users
- rewriting user-facing notes for developers
- summarizing completed work
- identifying missing release note sections
- turning bug fixes into user impact statements
- creating known issue summaries
- creating testing summaries

---

## AI Input Sources

AI can use these sources:

- approved feature briefs
- completed tasks
- verified bug reports
- completed test plans
- manual user notes

AI should not invent work that does not exist in the selected sources.

---

## AI Output Rule

AI output must be treated as a draft.

```txt
AI generates the draft.
User reviews the draft.
User edits the content.
User approves the final release note.
Only the approved release note becomes publishable.
```

---

## AI Missing Questions

If the release note does not have enough information, AI should ask questions such as:

```txt
What version number should this release use?
Who is the target audience for this release note?
Were there any known issues left unresolved?
Were there any breaking changes?
How was this release tested?
Should this release note be user-facing, developer-facing, or both?
```

---

## AI Scope Guard

AI should not:

- invent completed work
- claim a bug is fixed if it is not verified
- hide known issues
- create fake test coverage
- create fake version numbers without user approval
- publish release notes without user review

---

## Validation Rules

A release note cannot be Approved unless:

- Title is filled
- Project is selected
- Release Version is filled
- Release Date is filled
- Summary is filled
- At least one change item exists

A release note cannot be Published unless:

- Status is Approved
- Release Date is filled
- User confirms publishing

A change item should not be empty.

A bug fix change item should be connected to a verified or closed bug when possible.

A test summary should be connected to a completed test plan when possible.

---

## Data Model Draft

```ts
type ReleaseNoteStatus =
  | "draft"
  | "needs_review"
  | "approved"
  | "published"
  | "archived";

type ReleaseType =
  | "major"
  | "minor"
  | "patch"
  | "hotfix"
  | "internal"
  | "beta"
  | "mvp";

type ReleaseAudience = "user" | "developer" | "internal" | "mixed";

type ChangeItemType =
  | "feature"
  | "improvement"
  | "bug_fix"
  | "known_issue"
  | "breaking_change"
  | "migration"
  | "security"
  | "performance"
  | "documentation"
  | "internal";

type ChangeItemVisibility = "public" | "developer" | "internal";

type ReleaseNote = {
  id: string;
  projectId: string;

  title: string;
  version: string;
  releaseDate: string;

  status: ReleaseNoteStatus;
  releaseType: ReleaseType;
  audience: ReleaseAudience;

  summary: string;

  testingSummary?: string;
  migrationNotes?: string;
  internalNotes?: string;

  relatedFeatureBriefIds: string[];
  relatedBugReportIds: string[];
  relatedTestPlanIds: string[];
  relatedTaskIds: string[];

  changeItems: ChangeItem[];

  createdAt: string;
  updatedAt: string;
  approvedAt?: string;
  publishedAt?: string;
};

type ChangeItem = {
  id: string;
  releaseNoteId: string;

  type: ChangeItemType;
  title: string;
  description: string;
  userImpact?: string;

  visibility: ChangeItemVisibility;

  relatedType?: "feature_brief" | "bug_report" | "test_plan" | "task";
  relatedId?: string;

  createdAt: string;
  updatedAt: string;
};
```

---

## API Draft

### Create Release Note

```txt
POST /api/projects/:projectId/release-notes
```

Creates a new release note.

### Get Release Notes

```txt
GET /api/projects/:projectId/release-notes
```

Returns all release notes for a project.

### Get Single Release Note

```txt
GET /api/release-notes/:releaseNoteId
```

Returns one release note.

### Update Release Note

```txt
PATCH /api/release-notes/:releaseNoteId
```

Updates release note fields.

### Delete Release Note

```txt
DELETE /api/release-notes/:releaseNoteId
```

Deletes or archives a release note.

For MVP, prefer archive over hard delete.

### Generate AI Release Note Draft

```txt
POST /api/release-notes/:releaseNoteId/ai-generate
```

Generates a draft release note from selected project work.

### Approve Release Note

```txt
POST /api/release-notes/:releaseNoteId/approve
```

Marks a release note as Approved.

### Publish Release Note

```txt
POST /api/release-notes/:releaseNoteId/publish
```

Marks a release note as Published.

### Add Change Item

```txt
POST /api/release-notes/:releaseNoteId/change-items
```

Adds a change item.

### Update Change Item

```txt
PATCH /api/change-items/:changeItemId
```

Updates a change item.

### Delete Change Item

```txt
DELETE /api/change-items/:changeItemId
```

Deletes a change item.

---

## UI Page Draft

### Release Notes List Page

Route:

```txt
/projects/:projectId/release-notes
```

Shows:

- release version
- title
- release date
- status
- release type
- audience
- number of change items
- published state

Actions:

- create release note
- view release note
- edit release note
- archive release note

---

### Release Note Detail Page

Route:

```txt
/projects/:projectId/release-notes/:releaseNoteId
```

Shows:

- release note title
- release version
- status
- release date
- summary
- grouped change items
- testing summary
- known issues
- migration notes
- related work
- AI draft button
- approve button
- publish button

---

### Release Note Editor Page

The editor should include:

- basic info form
- summary editor
- grouped change item editor
- related work selector
- testing summary field
- known issues field
- internal notes field
- preview panel

---

## Preview Panel

The release note editor should include a preview panel.

The preview panel should show the final release note in Markdown format.

The user should be able to switch between:

```txt
User-Facing Preview
Developer-Facing Preview
```

---

## Testing Requirements

The Release Notes module should be tested with:

- release note creation
- release note editing
- release note approval validation
- publish validation
- change item creation
- change item grouping
- user-facing preview generation
- developer-facing preview generation
- AI draft generation
- missing required fields
- archive behavior

---

## Example Release Note

```md
# ShipLoop AI v0.1.0

## Summary

This release adds the first planning modules for ShipLoop AI. Users can now define MVP scope, create feature briefs, report bugs, and generate test plans.

## New Features

- Added MVP scope documentation.
- Added Feature Brief module specification.
- Added Bug Report module specification.
- Added Test Plan module specification.

## Improvements

- Improved the project workflow by connecting planning, testing, debugging, and release preparation.

## Bug Fixes

- No user-facing bug fixes in this release.

## Testing

- Documentation was reviewed for workflow consistency.
- Module specs were checked against the core ShipLoop AI loop.

## Known Issues

- Task Planning is not specified yet.
- Data model architecture is not specified yet.
- API design is not specified yet.

## Breaking Changes

No breaking changes.

## Migration Notes

No migration required.
```

---

## MVP Boundary

For MVP, the Release Notes module should support:

- manual release note creation
- manual change item editing
- AI-generated draft release notes
- user-facing Markdown preview
- developer-facing Markdown preview
- approval status
- published status
- related feature briefs
- related bug reports
- related test plans

MVP should not include:

- public changelog page
- automatic GitHub release publishing
- automatic commit parsing
- team approval workflow
- email notifications
- version automation
- customer segmentation

---

## Final Rule

```txt
A release note is ready only when it explains the release clearly enough for another person to understand what changed, why it matters, and what risks remain.
```
