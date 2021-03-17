import React from "react";
import ToDo from "../../interfaces/ToDo";
import Item from "../Item/Item";
import List from "@material-ui/core/List";

interface ListProps {
    list: ToDo[];
    deleteFromList: (index: number) => void;
    handleComplete: (index: number) => void;
}

export default function ToDoList(props: ListProps) {

    const { list, deleteFromList, handleComplete } = props;

    const displayedList = list.map((toDo: ToDo, index: number) => (

        <Item
            toDo={toDo}
            index={index}
            key={index}
            deleteFromList={deleteFromList}
            handleComplete={handleComplete}
        />
    ));

    return (
        <List>
            {displayedList}
        </List>
    )
}