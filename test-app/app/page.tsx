'use client'

import { useState } from 'react';
import React from 'react';

const MemoizedTodoList = React.memo(function TodoList({ todos }) {
    console.log("TodoList rendered"); 
    return (
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>{todo.title}</li>
            ))}
        </ul>
    );
});

export default function Home() {
    console.log("Home rendered"); 
    const [name, setName] = useState("");

    const [todos] = useState([
        { id: 1, title: "Learn React" },
        { id: 2, title: "Build a project" },
    ]);

    return (
        <div>
            <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Typing here causes rerenders"
            />

            <MemoizedTodoList todos={todos} />
        </div>
    );
}

