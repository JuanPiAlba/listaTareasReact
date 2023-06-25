import { Button, ListGroup } from "react-bootstrap";

const ItemTarea = ({ proptarea, borrarTarea }) => {
    return (
        <ListGroup.Item className="d-flex justify-content-between">
            {proptarea}
            <Button variant='danger' onClick={()=> borrarTarea(proptarea)} >Borrar</Button>
        </ListGroup.Item>
    );
};

export default ItemTarea;