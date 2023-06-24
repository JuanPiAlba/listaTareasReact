import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const ListaTareas = ({ propstareas }) => {
    return (
        <ListGroup>
            {
                propstareas.map((tarea, indicetarea) => <ItemTarea proptarea={tarea} key={indicetarea}></ItemTarea>)
            }
        </ListGroup>
    );
};

export default ListaTareas;