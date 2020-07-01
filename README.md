# Action App

**App deployed at: https://hidden-mesa-35540.herokuapp.com/**

The prototype is meant to serve as a mock-up. No back-end functions were implemented.

# 1. Background

A company would like to develop a feature to ensure that team members "perform an action" (Confirm I've read a new policy, Confirm I've changed the expired password for security, etc.). An idea is suggested: Build an app to require the selected team members/departments/whole company to confirm perform an action (I did it):

- There should be a place for creating the "Action" and select the team members/departments/whole company to perform it.
- There should be a place for member to confirm he/she performed the required Action.
- In the Report Dashboard, show the status of how the "Action" has been performed? Who did or did not? etc. (Need more insights from you)
  
# 2. Goals

Allow managers to create, assign and track actions. <br/>
Allow team members to receive and confirm status of actions.

# 3. User Journey

**Manager**

- Signs into their profile if existing; otherwise creates one
- Landing page is Dashboard
- Has access to "Create Action"

**Team Member**

- Signs into their profile if existing; otherwise creates one
- Landing and only page is Dashboard
  
# 4. Sitemap

Single Page Application

- Sign-in Dialog
- Dashboard 
  - Create Action (for managers)

# 5. Main Features

## Dashboard

**Managers**
- All actions assigned by that person and subordinates
- Team members assigned
- Status
- Actions priorities shown and sorted

**Team Members**
- All actions assigned by managers
- Managers that assigned actions
- Actions sorted by priority
- Status: two versions:
  - Ver. 1: boolean (confirmed / not confirmed)
  - Ver. 2: categorical (confirmed / in progress / completed)
  
## Create Action

Create Form
  - Action
  - Assign to multiple assignees
    - Team Members
    - Departments ("Product", "HR", etc.)
    - Whole company is "All"
  - Additional Notes

Form Validation
- Action is required
- Assignee is required
- Default priority value is null

Bulk Creation
  - Allow for imports to populate database (which then will update dashboard). Accepted file types: .csv.
  
# 6. Potential Feature Expansion

1. Assignment Notification:
   - Managers: new completions
   - Members: new assigned actions
2. Assignment Reminder to Members
3. Different types of Assignment (as of now it is a one-liner)
4. Deadline Tracking

# 7. References

Dashboard Design Inspiration: https://getbootstrap.com/docs/4.5/examples/dashboard/