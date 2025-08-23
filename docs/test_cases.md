# Test Cases Documentation

## TC-001: Add task with Today date
**Objective:** Verify user can create task with "Today" due date
**Steps:**
1. Login to Todoist
2. Get initial inbox tasks count
3. Create task with "Today" date via quick selection
4. Verify tasks count increased by 1
**Expected Result:** The task is successfully added with Today date

## TC-002: Add Task with Due Date from Calendar  
**Objective:** Verify user can create task with specific date from calendar
**Steps:**
1. Login to Todoist
2. Get initial inbox tasks count  
3. Create task with calendar date input
4. Verify tasks count increased by 1
**Expected Result:** The task is successfully added with selected date

## TC-005: Cancel Task Creation
**Objective:** Verify user can cancel task creation without changes
**Steps:**
1. Login to Todoist
2. Get initial inbox tasks count
3. Start task creation and cancel it
4. Verify tasks count remains unchanged
**Expected Result:** The task is not added

## TC-006: Create task with empty title
**Objective:** Verify system validates required task title field
**Steps:**
1. Login to Todoist
2. Get initial inbox tasks count
3. Attempt to create task with empty title
4. Verify submit button is disabled
5. Cancel creation and verify tasks count unchanged
**Expected Result:** The task is not added, validation works correctly