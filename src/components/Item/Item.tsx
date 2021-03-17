import React, {MouseEvent} from "react";
import ToDo from "../../interfaces/ToDo";
import styles from "./Item.module.css"

interface ItemProps {
    toDo: ToDo;
    index: number;
    deleteFromList: (index: number) => void;
    handleComplete: (index: number) => void;
}

export default function Item(props: ItemProps) {

    const deleteFromList = (event: MouseEvent<HTMLButtonElement>) => {
        props.deleteFromList(props.index);
    };

    const toggleComplete = (event: MouseEvent<HTMLButtonElement>) => {
        props.handleComplete(props.index);
    };

    const itemClasses = props.toDo.isCompleted ? `${styles.completed}` : ``;

    return (
        <li>
            <span className={itemClasses}>{props.toDo.text}</span>
            <button onClick={deleteFromList}>Delete</button>
            <button onClick={toggleComplete}>{props.toDo.isCompleted ? `Unmark` : `Mark`}</button>
        </li>
    );
}