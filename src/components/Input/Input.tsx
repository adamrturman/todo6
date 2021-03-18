import React, {ChangeEvent, useState} from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

interface InputProps {
    addToList: (task: string) => void;
}

export default function Input(props: InputProps) {
    const [task, setTask] = useState('');

    const { addToList } = props;

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTask(event.target.value);
    };

    const handleAddition = () => {
        addToList(task);
        setTask('');
    };

    return (
        <>
            <div>
                <label htmlFor="new-todo">What do you need to do?</label>
            </div>
            <TextField id="new-todo" label="ToDo" variant="outlined" value={task} onChange={handleChange}/>
            <Button variant="contained" onClick={handleAddition}>Add</Button>
        </>
    );
}