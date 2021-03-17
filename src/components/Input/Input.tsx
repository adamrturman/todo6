import React, {ChangeEvent, useState} from "react";

interface InputProps {
    addToList: (task: string) => void;
}

export default function Input(props: InputProps) {
    const [task, setTask] = useState('');

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTask(event.target.value);
    };

    const handleAddition = () => {
        props.addToList(task);
        setTask('');
    };

    return (
        <>
            <input value={task} onChange={handleChange}/>
            <button onClick={handleAddition}>Add</button>
        </>
    );
}