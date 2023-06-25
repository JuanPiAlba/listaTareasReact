import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const ListaTareas = ({ propstareas, borrarTarea }) => {
    return (
        <ListGroup>
            {
                propstareas.map((tarea, indicetarea) => <ItemTarea proptarea={tarea} key={indicetarea} borrarTarea={borrarTarea}></ItemTarea>)
            }
        </ListGroup>
    );
};

export default ListaTareas;