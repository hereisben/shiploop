# Bug Report Module Spec

## Overview

The **Bug Report** module is the defect tracking module of ShipLoop AI.

Its job is to help a solo developer capture, organize, debug, fix, retest, and close bugs in a structured way.

A good bug report should answer:

```txt
What is broken?
Where did it happen?
How can I reproduce it?
What did I expect?
What actually happened?
What environment was used?
How serious is the issue?
How urgent is the fix?
How was it fixed?
How was it verified?
```

The Bug Report module connects development, testing, and release communication.

```txt
Feature Brief
→ Tasks
→ Test Plan
→ Failed Test Case
→ Bug Report
→ Fix
→ Verification
→ Release Notes
```

---

## Purpose

The purpose of this module is to help users avoid vague bug tracking.

Many junior developers write bug notes like:

```txt
Login broken
Button not working
Mobile layout weird
AI failed
Dashboard bug
```

These notes are hard to reproduce, debug, and verify.

The Bug Report module turns loose bug notes into structured reports that can guide debugging and testing.

A strong bug report should make clear:

- The exact issue
- The steps to reproduce
- The expected result
- The actual result
- The environment
- The severity
- The priority
- The current status
- The root cause if known
- The fix notes
- The verification result

---

## Core Principle

The Bug Report module should follow one main rule:

```txt
A bug report is for reproduction, not complaining.
```

A good bug report should help the developer recreate the issue.

Weak bug note:

```txt
Navbar is broken on mobile.
```

Better bug report:

```txt
On iPhone Safari, the mobile navbar overlaps the hero text after the user scrolls back to the top. The navbar should stay above the hero section without covering important content.
```

---

## Target User

The first target user is a solo developer or junior software engineer building personal projects.

Example users:

- Junior developers building portfolio projects
- Students working on software projects
- Solo developers debugging side projects
- Developers who want better QA habits
- Builders who want to track bugs from report to verification

---

## Main User Flow

The main Bug Report flow is:

```txt
1. User selects a project
2. User creates a bug report
3. User enters rough bug notes or structured bug details
4. User can ask AI to clean up the bug report
5. AI returns a structured bug report draft
6. User reviews and edits the draft
7. User submits the bug
8. User triages the bug with severity, priority, and category
9. User investigates and fixes the bug
10. User adds root cause notes and fix notes
11. User retests the bug
12. User marks the bug as verified or reopened
13. Closed bugs can be included in release notes
```

---

## Bug Lifecycle

A bug should move through a clear lifecycle.

```txt
New
→ Triaged
→ In Progress
→ Fixed
→ Ready for Retest
→ Verified
→ Closed
```

Additional statuses:

```txt
Reopened
Deferred
Rejected
Duplicate
Need More Info
```

---

## Status Definitions

### New

The bug has been reported but not reviewed yet.

### Triaged

The bug has been reviewed and has category, severity, and priority.

### In Progress

The developer is investigating or fixing the bug.

### Fixed

The developer believes the bug has been fixed.

### Ready for Retest

The bug is waiting to be tested again.

### Verified

The fix has been tested and the bug no longer happens.

### Closed

The bug is complete and needs no further action.

### Reopened

The bug still happens after it was marked fixed or closed.

### Deferred

The bug is real, but it will be fixed later.

### Rejected

The issue is not considered a bug.

Possible reasons:

```txt
Expected behavior
Cannot reproduce
Not enough information
Out of scope
Invalid report
```

### Duplicate

The bug is the same as another existing bug.

### Need More Info

The report is missing important information needed to reproduce or debug the bug.

---

## Status Rules

The module should enforce these rules:

```txt
New bugs can be edited freely.
Triaged bugs should have severity, priority, and category.
In Progress bugs can receive root cause notes.
Fixed bugs should have fix notes.
Ready for Retest bugs should be tested again.
Verified bugs should have verification notes.
Closed bugs can be included in release notes.
Reopened bugs should return to In Progress or Triaged.
Duplicate bugs should link to the original bug.
Need More Info bugs should show missing fields.
```

Important rule:

```txt
A bug is not done until it is verified and closed.
```

---

## Required Fields

The MVP should require these fields before a bug report can be submitted:

```txt
Title
Project
Status
Severity
Priority
Environment
Steps to Reproduce
Expected Result
Actual Result
```

These fields are required because they provide the minimum information needed to understand and reproduce the bug.

---

## Optional Fields

These fields are useful but not required for every bug report:

```txt
Summary
Related Feature Brief
Related Test Case
Category
Preconditions
Reproduction Rate
Browser
Operating System
Device
Screen Size
App Version
Network
Language
Feature Flags
Screenshot
Video
Console Logs
Network Logs
Test Data
Workaround
Root Cause Notes
Fix Notes
Verification Notes
Duplicate Of
Related Issue URL
```

---

## Field Definitions

### Title

A short and specific name for the bug.

Good title format:

```txt
[Area] - [Action] - [Unexpected Result] ([Environment])
```

Good examples:

```txt
Dashboard - Closing a bug does not update open bug count
Mobile Navbar - Menu overlaps hero text on iPhone Safari
Feature Brief - Approve button stays disabled after required fields are filled
AI Test Plan - Generation fails when acceptance criteria are empty
```

Bad examples:

```txt
Bug
Broken
Not working
Dashboard issue
AI problem
```

A good title should answer:

```txt
What area is affected?
What action caused the issue?
What unexpected result happened?
Where did it happen?
```

---

### Summary

A short overview of the bug.

Example:

```txt
The dashboard open bug count does not update after a bug is moved to Closed. The count only updates after refreshing the page.
```

---

### Project

The project where the bug happened.

Example:

```txt
ShipLoop AI
```

---

### Related Feature Brief

The feature brief connected to this bug.

Example:

```txt
Feature Brief: Bug Tracker Status Workflow
```

This field helps connect bugs back to planned work.

---

### Related Test Case

The test case that found this bug.

Example:

```txt
TC-004: Close bug and confirm dashboard count updates
```

This field helps connect failed testing to bug tracking.

---

### Category

The type of bug.

MVP categories:

```txt
Functional
UI
Performance
Security
Regression
Compatibility
Data
API
Mobile
Accessibility
Other
```

Category helps the user understand what kind of issue it is.

---

### Severity

Severity describes how serious the bug is from a product or technical impact view.

Severity options:

```txt
Critical
High
Medium
Low
```

#### Critical

Use when:

```txt
App crashes
Data loss
Security issue
Core flow blocked
No workaround exists
Production is unusable
```

Example:

```txt
Users cannot log in.
```

#### High

Use when:

```txt
Major feature is broken
Important workflow is blocked
Workaround is weak or painful
Many users are affected
```

Example:

```txt
Users cannot generate test plans from approved feature briefs.
```

#### Medium

Use when:

```txt
Feature is degraded
User can still complete the main flow
Workaround exists
Impact is limited
```

Example:

```txt
AI output does not include risks, but the user can add them manually.
```

#### Low

Use when:

```txt
Cosmetic issue
Small UX friction
Typo
Minor alignment issue
Low user impact
```

Example:

```txt
Button spacing is slightly inconsistent on the settings page.
```

---

### Priority

Priority describes how soon the bug should be fixed.

Priority options:

```txt
P1
P2
P3
P4
```

#### P1

Fix now or in the current sprint.

Use when:

```txt
Blocks release
Blocks core workflow
Affects auth, data, security, payment, or production use
```

#### P2

Fix soon.

Use when:

```txt
Important bug
Does not block the whole product
Should be fixed in the next sprint or next planned work block
```

#### P3

Fix later.

Use when:

```txt
Valid issue
Not urgent
Can be planned into backlog
```

#### P4

Defer.

Use when:

```txt
Low impact
Nice to fix
May not be worth fixing now
```

---

## Severity vs Priority

Severity and priority are different.

```txt
Severity = How bad is the bug?
Priority = How soon should we fix it?
```

Example:

```txt
A typo on the pricing page:
Severity: Low
Priority: P1 or P2
Reason: The bug is small, but the page is important.

A rare crash in an admin-only debug screen:
Severity: High
Priority: P3
Reason: The bug is serious, but it affects a low-use area.
```

The app should keep severity and priority as separate fields.

---

## Environment

Environment explains where the bug happened.

The MVP should support a simple environment field first, but the full design should allow structured environment details.

### MVP Environment Field

```txt
Environment
```

Example:

```txt
Production, Chrome 126, Windows 11
```

### Structured Environment Fields

Future or advanced fields:

```txt
Environment Name
App Version
Browser
Operating System
Device
Screen Size
Network
Language
Feature Flags
```

Examples:

```txt
Environment Name: Staging
App Version: v0.3.1
Browser: Chrome 126
Operating System: Windows 11
Device: Desktop
Screen Size: 1440x900
Network: WiFi
Language: English
Feature Flags: ai_test_plan_enabled
```

### Mobile Environment Fields

For mobile bugs:

```txt
Device Model
Operating System Version
App Version
Orientation
Network Type
Battery State
```

Example:

```txt
Device Model: iPhone 14
Operating System Version: iOS 17
App Version: v0.1.0
Orientation: Portrait
Network Type: WiFi
Battery State: Normal
```

---

## Preconditions

The state required before reproducing the bug.

Example:

```txt
User is logged in.
User has one project.
Project has at least one open bug.
```

---

## Steps to Reproduce

Steps to reproduce should be clear and numbered.

Good format:

```txt
1. Log in as a normal user.
2. Open the project dashboard.
3. Create a bug report.
4. Change the bug status to Closed.
5. Return to the dashboard.
6. Observe the open bug count.
```

Bad format:

```txt
I closed a bug and count wrong.
```

Good steps should:

```txt
Start from a known state
Use numbered steps
Mention exact page or screen
Mention exact button or field
Mention exact input when needed
End with the observed bug
```

---

## Expected Result

The correct behavior.

Example:

```txt
The dashboard open bug count should decrease by one after the bug is closed.
```

Do not write:

```txt
It should work.
```

---

## Actual Result

What actually happened.

Example:

```txt
The dashboard open bug count stays the same until the page is refreshed.
```

Do not write:

```txt
It does not work.
```

---

## Reproduction Rate

How often the bug happens.

Options:

```txt
Always
Often
Sometimes
Rarely
Unable to Reproduce
```

Example:

```txt
Always
```

---

## Evidence

Evidence helps the developer understand the bug faster.

Possible evidence:

```txt
Screenshot
Video
Console logs
Network logs
API response
Request payload
Test data
```

MVP should support screenshot upload for bug reports.

---

## Console Logs

Console logs from the browser or app.

Example:

```txt
TypeError: Cannot read properties of undefined reading 'status'
```

---

## Network Logs

Important network request or response details.

Example:

```txt
PATCH /api/bugs/bug_123/status
Status: 200
Response: { "status": "CLOSED" }
```

---

## Test Data

Data used when the bug happened.

Example:

```txt
Project title: Portfolio Website
Bug status changed from Verified to Closed
User role: Owner
```

---

## Workaround

A temporary way to avoid or reduce the issue.

Example:

```txt
Refresh the dashboard after closing the bug.
```

---

## Root Cause Notes

What caused the bug.

Example:

```txt
The dashboard query cache was not invalidated after the bug status update mutation completed.
```

Root cause notes may be empty until investigation.

---

## Fix Notes

What was changed to fix the bug.

Example:

```txt
Added query invalidation for dashboard stats after bug status updates.
```

Fix notes should be added before moving the bug to Fixed.

---

## Verification Notes

How the fix was tested.

Example:

```txt
Retested the close bug flow on Chrome and Safari. The dashboard count updated immediately after closing the bug.
```

Verification notes should be added before moving the bug to Verified or Closed.

---

## Duplicate Of

If the bug is a duplicate, it should link to the original bug.

Example:

```txt
Duplicate of BUG-102
```

---

## Related Issue URL

Optional external issue link.

Example:

```txt
https://github.com/username/repo/issues/12
```

This is useful later when GitHub sync is added.

---

## MVP Form Sections

The MVP bug form should be organized into sections.

```txt
1. Basic Info
2. Impact
3. Environment
4. Reproduction
5. Behavior
6. Evidence
7. Resolution
```

---

## Section 1: Basic Info

Fields:

```txt
Project
Related Feature Brief
Related Test Case
Title
Summary
Category
Status
```

MVP required:

```txt
Project
Title
Status
```

---

## Section 2: Impact

Fields:

```txt
Severity
Priority
Release Blocker
```

MVP required:

```txt
Severity
Priority
```

---

## Section 3: Environment

Fields:

```txt
Environment
App Version
Browser
Operating System
Device
Screen Size
Network
Language
Feature Flags
```

MVP required:

```txt
Environment
```

---

## Section 4: Reproduction

Fields:

```txt
Preconditions
Steps to Reproduce
Reproduction Rate
Test Data
```

MVP required:

```txt
Steps to Reproduce
```

---

## Section 5: Behavior

Fields:

```txt
Expected Result
Actual Result
```

MVP required:

```txt
Expected Result
Actual Result
```

---

## Section 6: Evidence

Fields:

```txt
Screenshot
Video
Console Logs
Network Logs
Attachment
```

MVP required:

```txt
None
```

Screenshot upload should be supported if possible.

---

## Section 7: Resolution

Fields:

```txt
Root Cause Notes
Fix Notes
Verification Notes
Workaround
Duplicate Of
Related Issue URL
```

MVP required:

```txt
None
```

Resolution fields should appear clearly on the bug detail page and may be hidden during initial bug creation.

---

## Quality Checklist

Each bug report should have a quality checklist.

```txt
[ ] Title is specific
[ ] Project is selected
[ ] Severity is selected
[ ] Priority is selected
[ ] Environment is included
[ ] Steps are numbered
[ ] Steps start from a known state
[ ] Expected result is clear
[ ] Actual result is clear
[ ] Reproduction rate is included
[ ] Screenshot or evidence is attached if useful
[ ] Console or network logs are included if relevant
[ ] Root cause notes are added after investigation
[ ] Fix notes are added after fixing
[ ] Verification notes are added before closing
```

---

## Quality Levels

The app can show bug report quality levels based on completed fields.

### Weak

The report is missing steps to reproduce, expected result, actual result, or environment.

### Good

The report has clear steps, expected result, actual result, environment, severity, and priority.

### Strong

The report also includes reproduction rate, evidence, logs, and related feature or test case.

### Ready to Fix

The report is reproducible and has enough context to start investigation.

### Ready to Close

The report has fix notes and verification notes.

---

## AI Features

The MVP should include AI support for bug reports, but AI should not replace user judgment.

AI can help with:

```txt
Clean up messy bug notes
Generate a clearer title
Extract steps to reproduce
Separate expected result and actual result
Suggest missing fields
Suggest severity
Suggest priority
Suggest category
Generate a debugging checklist
Suggest retest steps
```

AI should not:

```txt
Automatically mark bugs as fixed
Automatically close bugs
Invent missing facts
Replace verification
Guarantee root cause
```

---

## AI Bug Report Cleaner

### Input

The user writes rough bug notes.

Example:

```txt
dashboard count wrong after close bug, only fix after refresh, chrome local
```

### Output

AI returns a structured draft.

Example:

```json
{
  "title": "Dashboard - Open bug count does not update after closing a bug",
  "summary": "The dashboard open bug count stays the same after a bug is closed and only updates after the page is refreshed.",
  "category": "Functional",
  "suggestedSeverity": "Medium",
  "suggestedPriority": "P2",
  "environment": "Local, Chrome",
  "stepsToReproduce": [
    "Log in as a normal user.",
    "Open the project dashboard.",
    "Open an existing bug report.",
    "Change the bug status to Closed.",
    "Return to the dashboard.",
    "Observe the open bug count."
  ],
  "expectedResult": "The dashboard open bug count decreases after the bug is closed.",
  "actualResult": "The dashboard open bug count stays the same until the page is refreshed.",
  "missingQuestions": [
    "Does this happen in staging or production?",
    "Does it happen in other browsers?",
    "Does the API return the updated bug status?"
  ],
  "debuggingChecklist": [
    "Check if the status update API returns the new status.",
    "Check if the dashboard query is invalidated after the mutation.",
    "Check if the dashboard count is calculated from stale client state.",
    "Check if the bug status enum maps correctly to Closed."
  ]
}
```

---

## AI Missing Info Questions

AI should ask missing questions when the report is vague.

Examples:

```txt
What browser or device did this happen on?
Can you reproduce the bug every time?
What did you expect to happen?
What actually happened?
What page or screen were you on?
Is there a screenshot or console error?
Does this happen in local, staging, or production?
What data did you use when the bug happened?
```

The app should display these as suggestions, not blockers.

---

## AI Debugging Checklist

AI can generate a debugging checklist based on bug category.

### Frontend Bug Checklist

```txt
Check browser console errors
Check component state
Check form validation
Check API request payload
Check API response
Check query cache invalidation
Check loading and error states
Check responsive layout
```

### Backend Bug Checklist

```txt
Check request DTO validation
Check auth guard
Check database query
Check service method logic
Check error handling
Check response schema
Check logs
Check related migration
```

### API Bug Checklist

```txt
Check endpoint path and HTTP method
Check request body
Check response status code
Check validation errors
Check auth token
Check permission checks
Check database side effects
Check API error response
```

### File Upload Bug Checklist

```txt
Check file size
Check file type
Check upload URL
Check storage permissions
Check database file metadata
Check preview rendering
Check failed upload handling
```

### AI Workflow Bug Checklist

```txt
Check AI job status
Check prompt input
Check AI service response
Check JSON parsing
Check schema validation
Check fallback behavior
Check failed job handling
Check retry logic
```

---

## Human Review Rule

Every AI-generated bug report must follow this rule:

```txt
AI generates a draft.
User reviews the draft.
User edits the content.
User submits the final bug report.
Only the user-approved report becomes the source of truth.
```

AI suggestions should be clearly labeled as suggestions.

---

## Validation Rules

### Create Bug Report

Required fields:

```txt
Project
Title
Status
Severity
Priority
Environment
Steps to Reproduce
Expected Result
Actual Result
```

### Triage Bug

To move from New to Triaged, the bug should have:

```txt
Category
Severity
Priority
Environment
Steps to Reproduce
Expected Result
Actual Result
```

### Move to Fixed

To move to Fixed, the bug should have:

```txt
Fix Notes
```

### Move to Verified

To move to Verified, the bug should have:

```txt
Verification Notes
```

### Move to Closed

To move to Closed, the bug should be:

```txt
Verified
```

or the user must confirm manual close with a reason.

### Move to Duplicate

To move to Duplicate, the bug should have:

```txt
Duplicate Of
```

### Move to Need More Info

Allowed when:

```txt
Required reproduction details are missing
```

---

## Data Model Draft

```ts
BugReport {
  id: string
  projectId: string
  featureBriefId?: string
  testCaseId?: string

  title: string
  summary?: string

  status: BugStatus
  category?: BugCategory
  severity: BugSeverity
  priority: BugPriority

  environment: string
  environmentName?: string
  appVersion?: string
  browser?: string
  os?: string
  device?: string
  screenSize?: string
  network?: string
  language?: string
  featureFlags?: string[]

  preconditions?: string
  stepsToReproduce: string[]
  expectedResult: string
  actualResult: string
  reproductionRate?: ReproductionRate

  consoleLogs?: string
  networkLogs?: string
  testData?: string
  workaround?: string

  rootCauseNotes?: string
  fixNotes?: string
  verificationNotes?: string

  duplicateOfId?: string
  relatedIssueUrl?: string

  originalInput?: string
  aiDraft?: Json
  aiSuggestions?: Json

  createdAt: Date
  updatedAt: Date
  triagedAt?: Date
  fixedAt?: Date
  verifiedAt?: Date
  closedAt?: Date
  reopenedAt?: Date
}
```

---

## Enums

```ts
enum BugStatus {
  NEW
  TRIAGED
  IN_PROGRESS
  FIXED
  READY_FOR_RETEST
  VERIFIED
  CLOSED
  REOPENED
  DEFERRED
  REJECTED
  DUPLICATE
  NEED_MORE_INFO
}

enum BugCategory {
  FUNCTIONAL
  UI
  PERFORMANCE
  SECURITY
  REGRESSION
  COMPATIBILITY
  DATA
  API
  MOBILE
  ACCESSIBILITY
  OTHER
}

enum BugSeverity {
  CRITICAL
  HIGH
  MEDIUM
  LOW
}

enum BugPriority {
  P1
  P2
  P3
  P4
}

enum ReproductionRate {
  ALWAYS
  OFTEN
  SOMETIMES
  RARELY
  UNABLE_TO_REPRODUCE
}
```

---

## API Draft

### Create Bug Report

```http
POST /api/projects/:projectId/bugs
```

Purpose:

```txt
Create a bug report for a project.
```

Example body:

```json
{
  "title": "Dashboard - Open bug count does not update after closing a bug",
  "severity": "MEDIUM",
  "priority": "P2",
  "environment": "Local, Chrome",
  "stepsToReproduce": [
    "Log in as a normal user.",
    "Open the project dashboard.",
    "Close an open bug.",
    "Return to the dashboard."
  ],
  "expectedResult": "The open bug count decreases by one.",
  "actualResult": "The open bug count stays the same until refresh."
}
```

---

### Get Bug Reports

```http
GET /api/projects/:projectId/bugs
```

Purpose:

```txt
Get all bug reports for a project.
```

Possible query params:

```txt
status
severity
priority
category
featureBriefId
search
```

---

### Get Bug Report Detail

```http
GET /api/bugs/:bugId
```

Purpose:

```txt
Get one bug report with related feature, test case, files, and notes.
```

---

### Update Bug Report

```http
PATCH /api/bugs/:bugId
```

Purpose:

```txt
Update bug report fields.
```

---

### Change Bug Status

```http
PATCH /api/bugs/:bugId/status
```

Purpose:

```txt
Change bug lifecycle status.
```

Example body:

```json
{
  "status": "FIXED",
  "fixNotes": "Invalidated dashboard stats query after bug status mutation."
}
```

---

### Mark Bug as Verified

```http
POST /api/bugs/:bugId/verify
```

Purpose:

```txt
Add verification notes and mark bug as Verified.
```

Example body:

```json
{
  "verificationNotes": "Retested on Chrome and Safari. Dashboard count updates immediately after closing a bug."
}
```

---

### Close Bug

```http
POST /api/bugs/:bugId/close
```

Purpose:

```txt
Close a verified bug.
```

---

### Reopen Bug

```http
POST /api/bugs/:bugId/reopen
```

Purpose:

```txt
Reopen a bug that still happens.
```

Example body:

```json
{
  "reason": "Bug still happens on Safari after the fix."
}
```

---

### Mark Bug as Duplicate

```http
POST /api/bugs/:bugId/duplicate
```

Purpose:

```txt
Mark a bug as duplicate and link to the original bug.
```

Example body:

```json
{
  "duplicateOfId": "bug_123"
}
```

---

### Clean Up Bug Report with AI

```http
POST /api/ai/bugs/cleanup
```

Purpose:

```txt
Generate a structured bug report draft from rough bug notes.
```

Example body:

```json
{
  "projectId": "project_123",
  "roughBugNotes": "dashboard count wrong after close bug, only fix after refresh, chrome local"
}
```

---

### Generate Debugging Checklist with AI

```http
POST /api/ai/bugs/debugging-checklist
```

Purpose:

```txt
Generate a debugging checklist for a bug report.
```

Example body:

```json
{
  "bugId": "bug_123"
}
```

---

## UI Pages

The MVP should include these pages.

```txt
/projects/:projectId/bugs
/projects/:projectId/bugs/new
/bugs/:bugId
/bugs/:bugId/edit
```

---

## Bug List Page

The list page should show:

```txt
Title
Status
Severity
Priority
Category
Project
Related Feature
Updated date
Actions
```

Useful filters:

```txt
Status
Severity
Priority
Category
Related Feature
Search by title
```

Useful sorting:

```txt
Priority
Severity
Updated date
Created date
Status
```

---

## New Bug Report Page

The new page should support:

```txt
Manual bug report creation
Rough bug notes input
AI cleanup action
Screenshot upload
Save bug report
```

Recommended sections:

```txt
Rough Notes
Basic Info
Impact
Environment
Reproduction
Behavior
Evidence
Review
```

---

## Bug Detail Page

The detail page should show:

```txt
Title
Status
Severity
Priority
Category
Summary
Environment
Steps to reproduce
Expected result
Actual result
Reproduction rate
Evidence
Console logs
Network logs
Root cause notes
Fix notes
Verification notes
Related feature
Related test case
Related release notes
Actions
```

Actions:

```txt
Edit
Set as Triaged
Start Investigation
Mark as Fixed
Ready for Retest
Verify
Close
Reopen
Mark Duplicate
Defer
Reject
Generate Debugging Checklist
```

---

## Bug Edit Page

The edit page should allow the user to update all fields.

It should show:

```txt
Required fields
Optional fields
AI suggestions
Quality checklist
Status transition actions
```

---

## State Handling

The UI should handle:

```txt
Loading state
Empty state
Validation error
AI cleanup loading
AI cleanup failed
AI cleanup completed
Screenshot upload loading
Screenshot upload failed
Status update success
Status update blocked
```

---

## Empty States

Bug list empty state:

```txt
No bugs yet.
Create your first bug report to track issues from reproduction to verification.
```

AI cleanup empty state:

```txt
Write rough bug notes and let AI help structure them into a clear bug report.
```

---

## Error States

Required field error:

```txt
This bug report is missing required fields. Add steps to reproduce, expected result, actual result, environment, severity, and priority before submitting.
```

Status transition error:

```txt
This bug cannot be marked as Fixed until fix notes are added.
```

Verification error:

```txt
This bug cannot be marked as Verified until verification notes are added.
```

AI error:

```txt
AI could not clean up this bug report. Try again or continue writing manually.
```

Upload error:

```txt
Screenshot upload failed. Try again or attach a smaller file.
```

---

## File Upload Support

MVP should support basic screenshot upload.

A file asset linked to a bug report should store:

```txt
File name
File URL
File type
File size
Related project
Related bug report
Created date
```

MVP supported file types:

```txt
PNG
JPG
JPEG
WEBP
```

Future support:

```txt
MP4
PDF
HAR files
Log files
```

---

## Out of Scope for MVP

The Bug Report MVP does not include:

```txt
Team assignment
Team comments
GitHub issue sync
Automatic bug fixing
AI screenshot analysis
Video recording
HAR file parsing
Advanced duplicate detection
Public bug reports
Customer-facing bug portal
```

These may be added later.

---

## Testing Requirements

The MVP should test these flows.

### Unit Tests

```txt
Bug validation
Severity and priority enum validation
Status transition rules
Quality checklist logic
AI response parsing
Bug dashboard count logic
```

### API Tests

```txt
Create bug report
Update bug report
Get bugs by project
Filter bugs by status
Change bug status
Block invalid status transition
Mark bug as fixed with fix notes
Block verified status without verification notes
Close verified bug
Reopen closed bug
```

### E2E Tests

```txt
User creates project
User creates bug report
User fills required fields
User changes bug to Triaged
User marks bug as In Progress
User marks bug as Fixed with fix notes
User verifies bug with verification notes
User closes bug
```

### Manual Tests

```txt
AI cleans up rough bug notes
AI suggests missing questions
AI generates debugging checklist
Screenshot upload works
Long steps to reproduce do not break layout
Status badges display correctly
Filters work correctly
Dashboard bug counts update correctly
```

---

## Success Criteria

This module is successful when:

```txt
User can create a structured bug report.
User can clean up rough bug notes with AI.
User can track a bug through the full lifecycle.
User can separate severity and priority.
User can add fix notes.
User can add verification notes.
User cannot close serious bugs without review.
User can attach screenshots.
User can create bugs from failed test cases.
Verified or closed bugs can be included in release notes.
```

---

## Example Bug Report

```md
# Bug Report: Dashboard - Open bug count does not update after closing a bug

## Summary

The dashboard open bug count does not update after a bug is closed. The count only updates after refreshing the page.

## Project

ShipLoop AI

## Related Feature

Bug Tracker Status Workflow

## Status

Triaged

## Category

Functional

## Severity

Medium

## Priority

P2

## Environment

Local, Chrome 126, Windows 11

## Preconditions

- User is logged in.
- User has one project.
- Project has at least one open bug.

## Steps to Reproduce

1. Open the project dashboard.
2. Open an existing bug report.
3. Change the bug status to Closed.
4. Return to the dashboard.
5. Observe the open bug count.

## Expected Result

The dashboard open bug count should decrease by one after the bug is closed.

## Actual Result

The dashboard open bug count stays the same until the page is refreshed.

## Reproduction Rate

Always

## Root Cause Notes

The dashboard stats query is not invalidated after the bug status update mutation.

## Fix Notes

Added dashboard stats query invalidation after successful bug status mutation.

## Verification Notes

Retested on Chrome and Safari. The dashboard count now updates immediately after closing a bug.

## Related Test Case

TC-004: Close bug and confirm dashboard count updates
```

---

## Final Notes

The Bug Report module should help the user think like a developer and tester.

A good bug report should be:

```txt
Specific
Reproducible
Evidence-based
Prioritized
Trackable
Verified before closing
```

The module should make bugs easier to fix and easier to explain in release notes.
