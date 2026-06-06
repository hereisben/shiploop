# Test Plan Module Spec

## Overview

The **Test Plan** module is the testing workflow module of ShipLoop AI.

Its job is to help a solo developer turn an approved feature brief or a fixed bug into a structured testing plan.

A good test plan should answer:

```txt
What are we testing?
Why are we testing it?
What is in scope?
What is out of scope?
What environment are we testing in?
What test data do we need?
What happy paths should pass?
What negative cases should fail safely?
What edge cases should be checked?
What regression checks are needed?
When is testing considered complete?
```

The Test Plan module connects planning, bug tracking, and release readiness.

```txt
Feature Brief
→ Acceptance Criteria
→ Test Plan
→ Test Cases
→ Test Results
→ Bugs
→ Release Notes
```

For bug fixes, the flow is:

```txt
Bug Report
→ Fix Notes
→ Retest Plan
→ Regression Checks
→ Verified or Reopened
```

---

## Purpose

The purpose of this module is to help users avoid shipping features without testing.

Many junior developers test only the happy path or skip testing completely.

Common weak testing notes look like:

```txt
Test login
Check dashboard
Make sure bug works
Try mobile
```

These notes are too vague.

The Test Plan module turns feature briefs and bug fixes into structured test plans with clear test cases, expected results, and pass/fail tracking.

A strong test plan should make clear:

- The objective of testing
- The scope of testing
- The out-of-scope areas
- The test strategy
- The test environment
- The test data
- The test scenarios
- The test cases
- The regression checks
- The risks
- The success criteria
- The final test summary

---

## Core Principle

The Test Plan module should follow one main rule:

```txt
Happy path alone is not enough.
```

A useful test plan should include:

```txt
Happy path tests
Negative tests
Edge cases
Boundary tests
Error states
Regression checks
API tests when relevant
Security smoke tests when relevant
Accessibility checks when relevant
```

Weak test note:

```txt
Test feature brief.
```

Better test objective:

```txt
Verify that users can create, edit, and approve a feature brief, and that the system blocks approval when required fields are missing.
```

---

## Target User

The first target user is a solo developer or junior software engineer building personal projects.

Example users:

- Junior developers building portfolio projects
- Students testing class or capstone projects
- Solo developers preparing a release
- Developers who want better QA habits
- Builders who want to connect feature planning to test coverage

---

## Main User Flow

The main Test Plan flow is:

```txt
1. User opens an approved feature brief
2. User clicks Generate Test Plan
3. App creates an AI test plan draft
4. User reviews the generated test plan
5. User edits scope, strategy, and test cases
6. User approves the test plan
7. User runs test cases manually
8. User marks test cases as Passed, Failed, Blocked, Skipped, or Needs Update
9. Failed test cases can create bug reports
10. Completed test plans can be included in release notes
```

Bug fix retest flow:

```txt
1. User opens a fixed bug
2. User creates or generates a retest plan
3. User runs retest steps
4. User adds actual result
5. User marks test cases as Passed or Failed
6. If passed, bug can move to Verified
7. If failed, bug can move to Reopened
```

---

## Test Plan Lifecycle

A test plan should move through a clear lifecycle.

```txt
Draft
→ Ready
→ In Progress
→ Completed
```

Additional statuses:

```txt
Blocked
Archived
```

---

## Status Definitions

### Draft

The test plan is still being written or AI has generated an unreviewed draft.

The user can edit all fields.

### Ready

The user has reviewed the plan and approved it for execution.

Test cases can be run.

### In Progress

The user is running test cases and updating test results.

### Completed

All required test cases have been run or intentionally skipped with notes.

The test plan can be included in release notes.

### Blocked

The test plan cannot continue because something is missing.

Possible reasons:

```txt
Missing environment
Missing test data
Feature not deployed
API unavailable
AI service unavailable
Bug blocks testing
```

### Archived

The test plan is no longer active.

This may happen when the related feature is canceled, replaced, or shipped long ago.

---

## Status Rules

The module should enforce these rules:

```txt
Draft test plans can be edited freely.
Ready test plans can be executed.
In Progress test plans can update test case statuses.
Completed test plans should have a test summary.
Blocked test plans should have a blocker reason.
Archived test plans should not accept new execution results.
```

Important rule:

```txt
AI output should never automatically mark a test plan as Ready.
```

The user must review and approve.

---

## Required Fields

The MVP should require these fields before a test plan can be marked as Ready:

```txt
Title
Project
Objective
Scope
Out of Scope
Test Strategy
Test Environment
Success Criteria
At least one Test Case
```

These fields are required because they provide the minimum structure needed before testing.

---

## Optional Fields

These fields are useful but not required for every test plan:

```txt
Related Feature Brief
Related Bug Report
Test Data
Risks
Regression Checks
Security Notes
Accessibility Notes
Performance Notes
Owner
Target Release
Final Test Summary
```

---

## Field Definitions

### Title

A short and specific name for the test plan.

Good examples:

```txt
Test Plan: Feature Brief Approval Flow
Test Plan: AI Bug Report Cleaner
Retest Plan: Dashboard Bug Count Fix
Regression Plan: Release Notes Generator
```

Bad examples:

```txt
Test feature
Testing
Check app
QA
```

---

### Objective

The objective explains what this testing effort is trying to verify.

Template:

```txt
Verify that [feature or fix] works correctly for [target user] across [main flows], including [risk areas].
```

Example:

```txt
Verify that the Feature Brief Builder allows a solo developer to create, improve, edit, and approve a feature brief, and that incomplete briefs cannot be approved.
```

---

### Related Feature Brief

The approved feature brief that the test plan is based on.

Example:

```txt
Feature Brief: Feature Brief Approval Flow
```

A test plan generated from a feature brief should use:

```txt
Problem statement
User outcome
Success criteria
Acceptance criteria
In-scope items
Out-of-scope items
Risks
Technical notes
```

---

### Related Bug Report

The bug report that the retest plan is based on.

Example:

```txt
Bug Report: Dashboard - Open bug count does not update after closing a bug
```

A retest plan generated from a bug report should use:

```txt
Steps to reproduce
Expected result
Actual result
Fix notes
Verification notes
Regression risk
```

---

### Scope

Scope describes what will be tested.

Example:

```txt
- Create a feature brief
- Edit a feature brief
- Approve a complete feature brief
- Block approval when required fields are missing
- Generate tasks from an approved feature brief
- Generate a test plan from an approved feature brief
```

---

### Out of Scope

Out of scope describes what will not be tested in this plan.

Example:

```txt
- Team review comments
- GitHub issue sync
- Mobile companion app
- Public sharing
- Real-time collaboration
```

Out-of-scope items prevent the test plan from growing too large.

---

### Test Strategy

The strategy describes how the feature will be tested.

Possible test types:

```txt
Functional Testing
UI Testing
API Testing
Validation Testing
Negative Testing
Edge Case Testing
Boundary Testing
Regression Testing
Accessibility Testing
Performance Smoke Testing
Security Smoke Testing
Mobile Testing
File Upload Testing
AI Output Validation
```

Example:

```txt
Testing will cover the main create/edit/approve flow, required field validation, AI draft review, task generation access rules, and regression checks for project dashboard counts.
```

---

### Test Environment

The environment explains where testing will happen.

MVP environment fields:

```txt
Environment Name
Frontend URL
API URL
AI Service URL
Database
Browser
Device
Network
Build Version
```

Example:

```txt
Environment Name: Local
Frontend URL: http://localhost:3000
API URL: http://localhost:5000
AI Service URL: http://localhost:8000
Database: Local PostgreSQL
Browser: Chrome
Device: Desktop
Network: WiFi
Build Version: local branch docs/test-plan-spec
```

---

### Test Data

Test data describes the data needed to run the test cases.

Examples:

```txt
Project:
ShipLoop AI

Feature Brief:
AI Bug Report Cleaner

Invalid title:
Empty string

Long title:
121-character title

Invalid AI response:
{ "wrong": true }
```

Test data categories:

```txt
Valid data
Invalid data
Boundary data
Empty data
Large data
Duplicate data
Unauthorized data
```

---

### Test Scenarios

A test scenario is a high-level behavior to test.

Examples:

```txt
User can create a feature brief draft.
User cannot approve an incomplete feature brief.
User can approve a complete feature brief.
AI service failure shows a fallback error.
Approved feature brief can generate a test plan.
```

A scenario is not the same as a test case.

```txt
Scenario = what to test
Test case = exact steps to run
```

---

### Test Cases

A test case is a step-by-step test.

A test case should include:

```txt
Title
Type
Priority
Preconditions
Steps
Expected Result
Actual Result
Status
Linked Acceptance Criteria
Notes
```

Test case rule:

```txt
One test case should test one main behavior.
```

---

### Regression Checks

Regression checks confirm that old working behavior still works after a new change.

Example:

```txt
- Creating a project still works.
- Creating a bug report still works.
- Dashboard counts still update.
- Auth-protected routes still require login.
- AI job status still displays correctly.
```

---

### Risks

Risks describe what could make testing fail or miss issues.

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
AI may generate vague test cases when acceptance criteria are unclear.

Impact:
High

Mitigation:
Require human review and show missing information questions before approval.
```

---

### Success Criteria

Success criteria define when testing is complete.

Good examples:

```txt
- All Critical and High test cases pass.
- No open Critical or High bugs remain for the release.
- Every acceptance criteria has at least one linked test case.
- Failed test cases have linked bug reports.
- User approves the final test summary.
```

Bad examples:

```txt
- Testing looks good.
- Everything seems fine.
```

---

### Final Test Summary

A summary written after test execution.

Example:

```txt
Total test cases: 12
Passed: 10
Failed: 1
Blocked: 1
Bugs created: 1
Final decision: Not ready for release until BUG-104 is fixed and retested.
```

---

## Test Case Types

The MVP should support these test case types.

```txt
Happy Path
Alternative Path
Negative
Edge Case
Boundary
Error State
Regression
API
UI
Accessibility
Performance
Security
File Upload
AI Output
Mobile
```

---

## Test Case Statuses

Test case statuses:

```txt
Not Run
Passed
Failed
Blocked
Skipped
Needs Update
```

### Not Run

The test case has not been executed yet.

### Passed

The actual result matches the expected result.

### Failed

The actual result does not match the expected result.

A failed test case can create a bug report.

### Blocked

The test case cannot be executed because something is missing or broken.

### Skipped

The user intentionally skipped the test case.

The user should add a reason.

### Needs Update

The test case is outdated because requirements or behavior changed.

---

## Test Case Priority

Test case priority options:

```txt
Critical
High
Medium
Low
```

### Critical

Core release-blocking behavior.

Example:

```txt
User cannot approve incomplete feature brief.
```

### High

Important behavior that should pass before release.

Example:

```txt
User can generate a test plan from an approved feature brief.
```

### Medium

Useful behavior but not release-blocking.

Example:

```txt
User can filter test cases by status.
```

### Low

Minor UI or polish test.

Example:

```txt
Test case badge spacing is consistent.
```

---

## Happy Path Tests

Happy path tests check the main successful flow.

Example:

```txt
User creates a complete feature brief and approves it successfully.
```

Feature Brief happy path example:

```txt
1. Create a project.
2. Create a feature brief with all required fields.
3. Click Approve.
4. Confirm the status changes to Approved.
```

Expected result:

```txt
The feature brief is approved and can generate tasks or a test plan.
```

---

## Negative Tests

Negative tests check invalid or missing input.

Examples:

```txt
User tries to approve a feature brief without a problem statement.
User submits a bug report without steps to reproduce.
User tries to generate a test plan from a draft feature brief.
User sends invalid request body to the API.
```

Expected result:

```txt
The system blocks the action and shows a clear error.
```

---

## Edge Case Tests

Edge cases check uncommon but possible situations.

Examples:

```txt
Feature brief has very long text fields.
Feature brief has many acceptance criteria.
AI service returns a partial response.
User refreshes the page while AI generation is loading.
User has no projects yet.
```

---

## Boundary Tests

Boundary tests check values near limits.

Example:

```txt
Title max length is 120 characters.

Test:
- Empty title
- 1-character title
- 120-character title
- 121-character title
```

Expected result:

```txt
Valid values are accepted. Invalid values show validation errors.
```

---

## Error State Tests

Error state tests check failures.

Examples:

```txt
AI service times out.
API returns 500.
Network request fails.
Database write fails.
File upload fails.
User session expires.
```

Expected result:

```txt
The app shows a clear error and does not lose user input.
```

---

## API Tests

API tests check backend behavior.

API test checklist:

```txt
Correct endpoint exists
Correct HTTP method works
Valid request returns expected response
Missing required fields return 400
Unauthorized request returns 401
Forbidden request returns 403
Not found resource returns 404
Server errors do not leak sensitive details
Response body matches schema
Data is saved correctly
```

Example:

```txt
POST /api/feature-briefs/:featureBriefId/generate-test-plan

Valid:
Approved feature brief exists and belongs to the user → 202 Accepted or 201 Created

Invalid:
Feature brief is Draft → 400
Feature brief not found → 404
Feature brief belongs to another user → 403
User is not logged in → 401
```

---

## Security Smoke Tests

The MVP should include basic security checks when relevant.

Examples:

```txt
User cannot access another user's test plan.
User cannot generate a test plan from another user's feature brief.
API routes require authentication.
Input validation blocks invalid data.
Server errors do not expose stack traces.
```

---

## Accessibility Checks

The MVP should include simple accessibility checks.

Examples:

```txt
Form fields have labels.
Error messages are clear.
Keyboard navigation works.
Focus state is visible.
Buttons have accessible names.
Status badges are not color-only.
```

---

## Performance Smoke Tests

The MVP should include light performance checks.

Examples:

```txt
Test plan detail page loads with 100 test cases.
Status updates do not freeze the UI.
AI generation shows loading state instead of blocking the page.
```

---

## MVP Form Sections

The MVP test plan form should be organized into sections.

```txt
1. Basic Info
2. Scope
3. Strategy
4. Environment and Data
5. Test Scenarios
6. Test Cases
7. Regression
8. Risks
9. Success Criteria
10. Results
```

---

## Section 1: Basic Info

Fields:

```txt
Project
Title
Status
Related Feature Brief
Related Bug Report
Owner
Target Release
```

MVP required:

```txt
Project
Title
Status
```

---

## Section 2: Scope

Fields:

```txt
Scope
Out of Scope
```

MVP required:

```txt
Scope
Out of Scope
```

---

## Section 3: Strategy

Fields:

```txt
Objective
Test Strategy
Test Types
```

MVP required:

```txt
Objective
Test Strategy
```

---

## Section 4: Environment and Data

Fields:

```txt
Environment
Test Data
```

MVP required:

```txt
Environment
```

---

## Section 5: Test Scenarios

Fields:

```txt
Happy Path Scenarios
Negative Scenarios
Edge Case Scenarios
API Scenarios
Regression Scenarios
```

MVP required:

```txt
None
```

These help structure generated test cases but should not block the first draft.

---

## Section 6: Test Cases

Fields:

```txt
Test Case Title
Type
Priority
Status
Preconditions
Steps
Expected Result
Actual Result
Linked Acceptance Criteria
Notes
```

MVP required:

```txt
At least one test case
```

---

## Section 7: Regression

Fields:

```txt
Regression Checks
Affected Existing Flows
```

MVP required:

```txt
None
```

---

## Section 8: Risks

Fields:

```txt
Risks
Mitigation
```

MVP required:

```txt
None
```

---

## Section 9: Success Criteria

Fields:

```txt
Success Criteria
```

MVP required:

```txt
Success Criteria
```

---

## Section 10: Results

Fields:

```txt
Total Test Cases
Passed
Failed
Blocked
Skipped
Bugs Created
Final Decision
Final Test Summary
```

MVP required:

```txt
None until execution
```

---

## Quality Checklist

Each test plan should have a quality checklist.

```txt
[ ] Objective is clear
[ ] In-scope items are listed
[ ] Out-of-scope items are listed
[ ] Test strategy is defined
[ ] Environment is defined
[ ] Test data is defined if needed
[ ] Happy path tests are included
[ ] Negative tests are included
[ ] Edge cases are included
[ ] Regression checks are included
[ ] API tests are included if backend is involved
[ ] Security smoke tests are included if auth or private data is involved
[ ] Accessibility checks are included if UI is involved
[ ] Risks are listed
[ ] Success criteria are measurable
[ ] Each acceptance criteria has at least one linked test case
```

---

## Quality Levels

The app can show test plan quality levels based on completed sections.

### Weak

Only happy path tests are included.

### Good

The plan includes objective, scope, environment, happy path tests, negative tests, and success criteria.

### Strong

The plan also includes edge cases, regression checks, API tests, risks, and linked acceptance criteria.

### Ready to Execute

The plan has been reviewed, required fields are complete, and at least one test case exists.

### Ready for Release

All Critical and High test cases have passed, and no release-blocking bugs remain open.

---

## AI Features

The MVP should include AI support for test plans, but AI should not replace user judgment.

AI can help with:

```txt
Generate test plan draft
Generate happy path tests
Generate negative tests
Generate edge cases
Generate boundary tests
Generate API tests
Generate regression checks
Suggest test data
Suggest risks
Suggest missing information questions
Map test cases to acceptance criteria
```

AI should not:

```txt
Automatically approve a test plan
Automatically mark test cases as passed
Invent unsupported requirements
Replace manual verification
Hide missing information
```

---

## AI Test Plan Generator

### Input

AI should generate a test plan from:

```txt
Project
Feature Brief
Acceptance Criteria
Success Criteria
Technical Notes
Related Bugs
Validation Rules
Test Environment
```

Example input:

```txt
Feature:
Feature Brief Approval Flow

Acceptance Criteria:
- Given a feature brief is missing a problem statement, when the user clicks Approve, then the system blocks approval.
- Given a feature brief has all required fields, when the user clicks Approve, then the system marks it as Approved.

Technical Notes:
- Only approved feature briefs can generate tasks or test plans.
```

### Output

AI returns a structured draft.

Example:

```json
{
  "title": "Test Plan: Feature Brief Approval Flow",
  "objective": "Verify that users can approve complete feature briefs and are blocked from approving incomplete feature briefs.",
  "scope": [
    "Create feature brief",
    "Edit feature brief",
    "Approve complete feature brief",
    "Block approval for incomplete feature brief",
    "Generate tasks from approved feature brief",
    "Generate test plan from approved feature brief"
  ],
  "outOfScope": ["Team review comments", "GitHub sync", "Mobile app"],
  "testStrategy": "Run functional, validation, negative, API, and regression tests for the approval flow.",
  "testCases": [
    {
      "title": "Approve complete feature brief",
      "type": "HAPPY_PATH",
      "priority": "CRITICAL",
      "preconditions": [
        "User is logged in",
        "User has a project",
        "Feature brief has all required fields"
      ],
      "steps": [
        "Open the feature brief detail page",
        "Click Approve",
        "Confirm the approval action"
      ],
      "expectedResult": "The feature brief status changes to Approved.",
      "linkedAcceptanceCriteria": "Given a feature brief has all required fields, when the user clicks Approve, then the system marks it as Approved."
    },
    {
      "title": "Block approval when problem statement is missing",
      "type": "NEGATIVE",
      "priority": "CRITICAL",
      "preconditions": [
        "User is logged in",
        "User has a draft feature brief without a problem statement"
      ],
      "steps": ["Open the feature brief detail page", "Click Approve"],
      "expectedResult": "The system blocks approval and shows a required field error for problem statement.",
      "linkedAcceptanceCriteria": "Given a feature brief is missing a problem statement, when the user clicks Approve, then the system blocks approval."
    }
  ],
  "regressionChecks": [
    "Creating a project still works",
    "Creating a feature brief draft still works",
    "Dashboard counts update after approval"
  ],
  "risks": [
    {
      "risk": "Approval validation may differ between frontend and backend.",
      "impact": "High",
      "mitigation": "Test both UI validation and API validation."
    }
  ],
  "successCriteria": [
    "All Critical test cases pass.",
    "Incomplete feature briefs cannot be approved.",
    "Approved feature briefs can generate tasks and test plans."
  ],
  "missingQuestions": [
    "What browsers should be tested?",
    "What is the maximum length for feature brief text fields?"
  ]
}
```

---

## AI Missing Questions

AI should ask missing questions when the source material is vague.

Examples:

```txt
What environment should this be tested in?
Which browsers or devices matter?
Are there validation limits for input fields?
Should this include API tests?
Are there existing flows that may regress?
What is the pass/fail release criteria?
Should accessibility checks be included?
Does this feature involve file uploads?
Does this feature involve private user data?
```

The app should display these as suggestions, not blockers.

---

## Human Review Rule

Every AI-generated test plan must follow this rule:

```txt
AI generates a draft.
User reviews the draft.
User edits the plan and test cases.
User approves the final test plan.
Only the approved test plan becomes Ready.
```

AI-generated test cases should start as:

```txt
Not Run
```

---

## Validation Rules

### Create Test Plan Draft

Minimum fields:

```txt
Project
Title
```

The user should be able to save a draft with minimal information.

### Mark Test Plan as Ready

Required fields:

```txt
Title
Project
Objective
Scope
Out of Scope
Test Strategy
Test Environment
Success Criteria
At least one Test Case
```

If any required field is missing, Ready status should be blocked.

### Start Test Execution

Allowed only when:

```txt
TestPlan.status = Ready
```

When the user starts execution:

```txt
TestPlan.status = In Progress
```

### Mark Test Plan as Completed

Allowed when:

```txt
All Critical and High test cases are Passed, Skipped with reason, or intentionally accepted by user.
```

If there are failed Critical or High test cases, the app should warn the user before completion.

### Create Bug from Failed Test Case

Allowed when:

```txt
TestCase.status = Failed
```

The created bug should copy:

```txt
Test case title
Preconditions
Steps
Expected result
Actual result
Environment
Linked feature brief
Linked test plan
Linked test case
```

---

## Data Model Draft

```ts
TestPlan {
  id: string
  projectId: string
  featureBriefId?: string
  bugReportId?: string

  title: string
  objective: string
  status: TestPlanStatus

  scope: string[]
  outOfScope: string[]

  testStrategy: string
  testTypes: TestType[]

  environment: Json
  testData?: Json

  scenarios?: Json
  regressionChecks?: string[]

  risks?: Json
  successCriteria: string[]

  finalSummary?: string
  finalDecision?: TestPlanFinalDecision

  originalInput?: string
  aiDraft?: Json
  aiSuggestions?: Json
  approvedAt?: Date
  completedAt?: Date
  archivedAt?: Date

  createdAt: Date
  updatedAt: Date
}
```

---

## Test Case Data Model Draft

```ts
TestCase {
  id: string
  testPlanId: string
  bugReportId?: string

  title: string
  type: TestCaseType
  priority: TestCasePriority
  status: TestCaseStatus

  linkedAcceptanceCriteria?: string

  preconditions?: string[]
  steps: string[]
  expectedResult: string
  actualResult?: string

  testData?: Json
  environment?: Json
  notes?: string
  skippedReason?: string
  blockedReason?: string

  executedAt?: Date
  createdAt: Date
  updatedAt: Date
}
```

---

## Enums

```ts
enum TestPlanStatus {
  DRAFT
  READY
  IN_PROGRESS
  COMPLETED
  BLOCKED
  ARCHIVED
}

enum TestPlanFinalDecision {
  READY_FOR_RELEASE
  NOT_READY_FOR_RELEASE
  RELEASE_WITH_KNOWN_ISSUES
}

enum TestType {
  FUNCTIONAL
  UI
  API
  VALIDATION
  NEGATIVE
  EDGE_CASE
  BOUNDARY
  ERROR_STATE
  REGRESSION
  ACCESSIBILITY
  PERFORMANCE
  SECURITY
  FILE_UPLOAD
  AI_OUTPUT
  MOBILE
}

enum TestCaseStatus {
  NOT_RUN
  PASSED
  FAILED
  BLOCKED
  SKIPPED
  NEEDS_UPDATE
}

enum TestCaseType {
  HAPPY_PATH
  ALTERNATIVE_PATH
  NEGATIVE
  EDGE_CASE
  BOUNDARY
  ERROR_STATE
  REGRESSION
  API
  UI
  ACCESSIBILITY
  PERFORMANCE
  SECURITY
  FILE_UPLOAD
  AI_OUTPUT
  MOBILE
}

enum TestCasePriority {
  CRITICAL
  HIGH
  MEDIUM
  LOW
}
```

---

## API Draft

### Create Test Plan

```http
POST /api/projects/:projectId/test-plans
```

Purpose:

```txt
Create a test plan draft.
```

Example body:

```json
{
  "title": "Test Plan: Feature Brief Approval Flow",
  "featureBriefId": "feature_123"
}
```

---

### Get Test Plans

```http
GET /api/projects/:projectId/test-plans
```

Purpose:

```txt
Get all test plans for a project.
```

Possible query params:

```txt
status
featureBriefId
bugReportId
search
```

---

### Get Test Plan Detail

```http
GET /api/test-plans/:testPlanId
```

Purpose:

```txt
Get one test plan with test cases, related feature, related bug, and created bugs.
```

---

### Update Test Plan

```http
PATCH /api/test-plans/:testPlanId
```

Purpose:

```txt
Update test plan fields.
```

---

### Mark Test Plan as Ready

```http
POST /api/test-plans/:testPlanId/ready
```

Purpose:

```txt
Validate required fields and mark test plan as Ready.
```

---

### Start Test Plan

```http
POST /api/test-plans/:testPlanId/start
```

Purpose:

```txt
Mark test plan as In Progress.
```

---

### Complete Test Plan

```http
POST /api/test-plans/:testPlanId/complete
```

Purpose:

```txt
Complete a test plan and save final summary.
```

Example body:

```json
{
  "finalDecision": "READY_FOR_RELEASE",
  "finalSummary": "All Critical and High test cases passed. No release-blocking bugs remain open."
}
```

---

### Archive Test Plan

```http
POST /api/test-plans/:testPlanId/archive
```

Purpose:

```txt
Archive a test plan.
```

---

### Create Test Case

```http
POST /api/test-plans/:testPlanId/test-cases
```

Purpose:

```txt
Create a manual test case.
```

---

### Update Test Case

```http
PATCH /api/test-cases/:testCaseId
```

Purpose:

```txt
Update a test case.
```

---

### Update Test Case Status

```http
PATCH /api/test-cases/:testCaseId/status
```

Purpose:

```txt
Update test case execution status.
```

Example body:

```json
{
  "status": "FAILED",
  "actualResult": "The system approved the feature brief even though the problem statement was missing."
}
```

---

### Create Bug from Failed Test Case

```http
POST /api/test-cases/:testCaseId/create-bug
```

Purpose:

```txt
Create a bug report from a failed test case.
```

Allowed only when:

```txt
TestCase.status = FAILED
```

---

### Generate Test Plan with AI

```http
POST /api/ai/test-plans/generate
```

Purpose:

```txt
Generate a structured test plan draft from an approved feature brief or fixed bug.
```

Example body:

```json
{
  "projectId": "project_123",
  "featureBriefId": "feature_123"
}
```

---

### Generate Retest Plan with AI

```http
POST /api/ai/test-plans/retest
```

Purpose:

```txt
Generate a retest plan from a fixed bug report.
```

Example body:

```json
{
  "projectId": "project_123",
  "bugReportId": "bug_123"
}
```

---

## UI Pages

The MVP should include these pages.

```txt
/projects/:projectId/test-plans
/projects/:projectId/test-plans/new
/test-plans/:testPlanId
/test-plans/:testPlanId/edit
/test-cases/:testCaseId
```

---

## Test Plan List Page

The list page should show:

```txt
Title
Status
Related Feature
Related Bug
Total Test Cases
Passed
Failed
Blocked
Updated Date
Actions
```

Useful filters:

```txt
Status
Related Feature
Related Bug
Search by title
```

Useful sorting:

```txt
Updated date
Created date
Status
Failed count
```

---

## New Test Plan Page

The new page should support:

```txt
Manual test plan creation
Generate from approved feature brief
Generate from fixed bug report
Save draft
```

Recommended sections:

```txt
Source Work
Basic Info
Scope
Strategy
Environment
AI Generation
Review
```

---

## Test Plan Detail Page

The detail page should show:

```txt
Title
Status
Objective
Related feature brief
Related bug report
Scope
Out of scope
Test strategy
Environment
Test data
Test scenarios
Test cases
Regression checks
Risks
Success criteria
Final test summary
Actions
```

Actions:

```txt
Edit
Mark Ready
Start Testing
Complete Test Plan
Archive
Generate Missing Test Cases
Create Bug from Failed Test Case
```

---

## Test Cases Table

The test cases table should show:

```txt
ID
Title
Type
Priority
Status
Linked Acceptance Criteria
Actions
```

Useful filters:

```txt
Status
Type
Priority
Search by title
```

Test case actions:

```txt
Mark Passed
Mark Failed
Mark Blocked
Mark Skipped
Edit
Create Bug
```

---

## Test Case Detail Page

The detail page should show:

```txt
Title
Type
Priority
Status
Preconditions
Steps
Expected Result
Actual Result
Test Data
Environment
Linked Acceptance Criteria
Related Bug
Notes
```

---

## Results Summary

The Test Plan detail page should show a results summary.

```txt
Total test cases
Passed
Failed
Blocked
Skipped
Not Run
Open bugs created from failed tests
Final decision
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
Status update success
Status update blocked
Test case failed
Create bug success
Create bug failed
```

---

## Empty States

Test plan empty state:

```txt
No test plans yet.
Generate a test plan from an approved feature brief to prepare your feature for release.
```

Test case empty state:

```txt
No test cases yet.
Add test cases manually or generate them from the test plan.
```

AI generation empty state:

```txt
Select an approved feature brief and let AI create a structured test plan draft.
```

---

## Error States

Ready error:

```txt
This test plan cannot be marked as Ready until objective, scope, out-of-scope items, test strategy, environment, success criteria, and at least one test case are complete.
```

Start error:

```txt
This test plan must be Ready before testing can start.
```

Complete warning:

```txt
This test plan has failed Critical or High test cases. Complete anyway only if you accept the release risk.
```

AI error:

```txt
AI could not generate a test plan. Try again or continue writing manually.
```

Create bug error:

```txt
A bug can only be created from a failed test case.
```

---

## Out of Scope for MVP

The Test Plan MVP does not include:

```txt
Automated browser test execution
Automated Playwright generation
Automated API test execution
CI/CD test runner integration
Coverage reports
Team QA assignment
Test run history by multiple testers
Advanced analytics
AI automatic pass/fail judgment
```

These may be added later.

---

## Testing Requirements

The MVP should test these flows.

### Unit Tests

```txt
Test plan validation
Test case validation
Status transition rules
Ready-to-execute logic
Complete test plan logic
Quality checklist logic
AI response parsing
Create bug from failed test case mapping
```

### API Tests

```txt
Create test plan
Update test plan
Get test plans by project
Mark test plan as Ready
Block Ready when required fields are missing
Start Ready test plan
Block Start when test plan is Draft
Update test case status
Create bug from failed test case
Block bug creation from non-failed test case
Complete test plan
```

### E2E Tests

```txt
User creates project
User creates approved feature brief
User generates test plan from feature brief
User reviews and marks test plan Ready
User starts test plan
User marks one test case Passed
User marks one test case Failed
User creates bug from failed test case
User completes test plan after resolving failed case
```

### Manual Tests

```txt
AI generates happy path tests
AI generates negative tests
AI generates edge cases
AI generates regression checks
AI asks missing questions
Long test case steps do not break layout
Results summary updates after status changes
Failed test case maps correctly into bug report
```

---

## Success Criteria

This module is successful when:

```txt
User can create a test plan draft.
User can generate a test plan from an approved feature brief.
User can review and approve an AI-generated test plan.
User can run test cases manually.
User can update test case statuses.
User can create a bug from a failed test case.
User can complete a test plan with a final summary.
Completed test plans can be included in release notes.
```

---

## Example Test Plan

```md
# Test Plan: Feature Brief Approval Flow

## Objective

Verify that users can approve complete feature briefs and are blocked from approving incomplete feature briefs.

## Related Work

Project: ShipLoop AI  
Feature Brief: Feature Brief Approval Flow

## Scope

- Create feature brief
- Edit feature brief
- Approve complete feature brief
- Block approval when required fields are missing
- Generate tasks from approved feature brief
- Generate test plan from approved feature brief

## Out of Scope

- Team comments
- GitHub sync
- Public sharing
- Mobile app

## Test Strategy

Testing will cover functional behavior, validation rules, negative cases, API behavior, and regression checks for dashboard counts.

## Environment

- Environment: Local
- Frontend URL: http://localhost:3000
- API URL: http://localhost:5000
- Database: Local PostgreSQL
- Browser: Chrome
- Device: Desktop

## Test Data

- Project: ShipLoop AI
- Feature Brief: AI Bug Report Cleaner
- Missing field case: Feature brief without problem statement

## Test Cases

### TC-001: Approve complete feature brief

Priority: Critical  
Type: Happy Path

Preconditions:

- User is logged in.
- User has a project.
- Feature brief has all required fields.

Steps:

1. Open the feature brief detail page.
2. Click Approve.
3. Confirm the approval action.

Expected Result:

The feature brief status changes to Approved.

Status:

Not Run

---

### TC-002: Block approval when problem statement is missing

Priority: Critical  
Type: Negative

Preconditions:

- User is logged in.
- User has a draft feature brief without a problem statement.

Steps:

1. Open the feature brief detail page.
2. Click Approve.

Expected Result:

The system blocks approval and shows a required field error for problem statement.

Status:

Not Run

---

### TC-003: Generate test plan from approved feature brief

Priority: High  
Type: Functional

Preconditions:

- User is logged in.
- Feature brief status is Approved.

Steps:

1. Open the approved feature brief.
2. Click Generate Test Plan.
3. Wait for AI generation to complete.
4. Open the generated test plan.

Expected Result:

A test plan draft is created and linked to the approved feature brief.

Status:

Not Run

## Regression Checks

- Creating a project still works.
- Creating a feature brief draft still works.
- Creating a bug report still works.
- Dashboard counts still update correctly.

## Risks

Risk:
Frontend and backend validation may not match.

Impact:
High

Mitigation:
Test both UI validation and API validation.

## Success Criteria

- All Critical test cases pass.
- Incomplete feature briefs cannot be approved.
- Approved feature briefs can generate tasks and test plans.
- Failed test cases can create bug reports.

## Final Test Summary

To be completed after execution.
```

---

## Final Notes

The Test Plan module should help the user think like a tester before shipping.

A good test plan should be:

```txt
Scoped
Structured
Executable
Traceable
Risk-aware
Connected to bugs and release notes
```

The module should make testing part of the normal software delivery loop, not an afterthought.
