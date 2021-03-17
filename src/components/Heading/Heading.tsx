import React from "react";

interface HeadingProps {
    countRemainingTodos: () => number;
}

export default function Heading(props: HeadingProps) {
    return (
        <>
            <h1>To Do Application #6</h1>
            <p>There {props.countRemainingTodos() === 1 ? `is` : `are`} {props.countRemainingTodos()} {props.countRemainingTodos() === 1 ? `task` : `tasks`} remaining.</p>
        </>
    );
}