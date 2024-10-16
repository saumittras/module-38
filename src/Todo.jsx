// export default function Todo({ task, isDone }) {
//   return <li>Task: {task} </li>;
// }
// Conditopnal rendering option 1:
// export default function Todo({ task, isDone }) {
//   if (isDone === true) {
//     return <li>Finished: {task}</li>;
//   } else {
//     return <li>Work On: {task}</li>;
//   }
// }

// Conditional Rendering option 2:
// export default function Todo({ task, isDone }) {
//   if (isDone) {
//     return <li>Finish: {task}</li>;
//   }
//   return <li>Work On: {task}</li>;
// }

// Conditional Rendering option 3: Ternery

// export default function Todo({ task, isDone }) {
//   return (
//     <li>
//       {isDone ? "Finished" : "Work On"}: {task}
//     </li>
//   );
// }

// Conditional rendering option 4: &&

// export default function Todo({ task, isDone }) {
//   return (
//     <li>
//       {task} {isDone && ": Done"}
//     </li>
//   );
// }

// Conditional rendering option 5: ||
// export default function Todo({ task, isDone }) {
//   return (
//     <li>
//       {task} {isDone || ": Do It"}
//     </li>
//   );
// }

// Conditional rendering option 6
export default function Todo({ task, isDone }) {
  let listItem;

  if (isDone) {
    listItem = <li>Finish: {task}</li>;
  } else {
    listItem = <li>Work on: {task}</li>;
  }

  return listItem;
}
