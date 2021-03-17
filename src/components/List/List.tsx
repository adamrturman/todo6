import React from "react";
import ToDo from "../../interfaces/ToDo";
import Item from "../Item/Item";

interface ListProps {
    list: ToDo[];
    deleteFromList: (index: number) => void;
    handleComplete: (index: number) => void;
}

export default function List(props: ListProps) {

    const displayedList = props.list.map((toDo: ToDo, index: number) => (

        <Item
            toDo={toDo}
            index={index}
            key={index}
            deleteFromList={props.deleteFromList}
            handleComplete={props.handleComplete}
        />
    ));

    return (
        <>
            {displayedList}
        </>
    )
}