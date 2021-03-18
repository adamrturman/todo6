import React from "react";
import ToDo from "../../interfaces/ToDo";
import styles from "./Item.module.css";
import Typography from "@material-ui/core/Typography";
import Checkbox from '@material-ui/core/Checkbox';
import ListItem from '@material-ui/core/ListItem';
import DeleteForever from '@material-ui/icons/DeleteForever';

interface ItemProps {
    toDo: ToDo;
    index: number;
    deleteFromList: (index: number) => void;
    handleComplete: (index: number) => void;
}

export default function Item(props: ItemProps) {

    const { toDo, index, deleteFromList, handleComplete } = props;
    const { completed, listItem, task } = styles;

    const handleDelete = () => deleteFromList(index);

    const toggleComplete = () => handleComplete(index);

    const itemClasses = toDo.isCompleted ? `${completed}` : ``;

    return (
        <ListItem className={`${listItem} ${task}`}>
            <Checkbox onClick={toggleComplete}></Checkbox>
            <Typography variant="h6" className={itemClasses}>{toDo.text}</Typography>
            <DeleteForever onClick={handleDelete}>Delete</DeleteForever>
        </ListItem>
    );
}