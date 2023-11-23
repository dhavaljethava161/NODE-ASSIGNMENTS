/*
FIRST ----> npm i yarns

to add a task:      node app.js add --task "Complete homework"
to list all tasks:  node app.js list
to remove a task:   node app.js remove --task "Complete homework"
*/

const fs = require("fs");
const yargs = require("yargs");

// Set up yargs to handle command-line arguments
const argv = yargs
  .command("add", "Add a new task", {
    task: {
      describe: "The task to be added",
      demandOption: true,
      type: "string",
    },
  })
  .command("list", "List all tasks")
  .command("remove", "Remove a task", {
    task: {
      describe: "The task to be removed",
      demandOption: true,
      type: "string",
    },
  })
  .help().argv;

// Define the file path for storing tasks
const filePath = "tasks.json";

// Helper function to read tasks from file
const readTasks = () => {
  try {
    const tasksData = fs.readFileSync(filePath, "utf8");
    return JSON.parse(tasksData);
  } catch (error) {
    return [];
  }
};

// Helper function to write tasks to file
const writeTasks = (tasks) => {
  fs.writeFileSync(filePath, JSON.stringify(tasks));
};

// Command: Add a new task
if (argv._[0] === "add") {
  const tasks = readTasks();
  tasks.push({ task: argv.task });
  writeTasks(tasks);
  console.log("Task added successfully.");
}

// Command: List all tasks
else if (argv._[0] === "list") {
  const tasks = readTasks();
  console.log("Tasks:");
  tasks.forEach((task, index) => {
    console.log(`${index + 1}. ${task.task}`);
  });
}

// Command: Remove a task
else if (argv._[0] === "remove") {
  const tasks = readTasks();
  const taskIndex = tasks.findIndex((task) => task.task === argv.task);

  if (taskIndex !== -1) {
    tasks.splice(taskIndex, 1);
    writeTasks(tasks);
    console.log("Task removed successfully.");
  } else {
    console.log("Task not found.");
  }
}

// for invalid command
else {
  console.log("Invalid command. Use --help for usage information.");
}
