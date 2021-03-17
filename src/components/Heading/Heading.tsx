import React from "react";
import Typography from "@material-ui/core/Typography";

interface HeadingProps {
    countRemainingTodos: () => number;
}

export default function Heading(props: HeadingProps) {

    const { countRemainingTodos } = props;

    return (
        <>
            <Typography variant="h1">To Do Application #6</Typography>
            <Typography variant="h4">There {countRemainingTodos() === 1 ? `is` : `are`} {countRemainingTodos()} {countRemainingTodos() === 1 ? `task` : `tasks`} remaining.</Typography>
        </>
    );
}