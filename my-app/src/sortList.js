import React from 'react';

export default function SortList({ task }) {
  // Check if task is undefined, and provide a default value of an empty array
  const taskList = task || [];

  return (
    <>
      <ul>
        {taskList.map((item) => (
          <li key={item.id}>
            {item.text}
            guarav
          </li>
        ))}
      </ul>
    </>
  );
}
