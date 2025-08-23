import fs from 'fs';
import { Logger } from './logger';

const filePath = 'data/task.json';

interface TaskData {
  id: string;
  title: string;
}

/**
 * Saves a task object by appending it to the existing list in the JSON file.
 * @param {object} task - The task data to be saved (e.g., id, title).
 */
export function saveTask(task: object): void {
  let tasks: object[] = [];

  if (fs.existsSync(filePath)) {
    const raw = fs.readFileSync(filePath, 'utf-8');

    try {
      const parsed = JSON.parse(raw);
      tasks = Array.isArray(parsed) ? parsed : [];
    } catch (e) {
      tasks = [];
    }
  }

  tasks.push(task);
  fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));
}

/**
 * Loads the last (most recently saved) task from the JSON file.
 * @returns {any} The last task object.
 */
export function loadLastTask(): any {
  if (!fs.existsSync(filePath)) {
    throw new Error('Task file not found.');
  }

  const raw = fs.readFileSync(filePath, 'utf-8');
  const tasks = JSON.parse(raw);

  if (!Array.isArray(tasks) || tasks.length === 0) {
    throw new Error('No tasks found.');
  }

  return tasks[tasks.length - 1];
}


/**
 * Generates a unique task title using the current timestamp.
 * @param {string} base - The base string for the title (e.g., "Edit task").
 * @returns {{ id: string, fullTitle: string }} A unique task title like "Edit task [5432]".
 */
export function generateUniqueTitle(base: string): { id: string, fullTitle: string } {
  const id = Math.floor(1000 + Math.random() * 9000).toString();
  const fullTitle = `${base} [${id}]`;
  return { id, fullTitle };
}