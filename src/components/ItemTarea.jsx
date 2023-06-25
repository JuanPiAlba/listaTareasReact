import { Button, ListGroup } from "react-bootstrap";

const ItemTarea = ({ proptarea }) => {
    return (
        <ListGroup.Item className="d-flex justify-content-between">
            {proptarea}
            <Button variant='danger' >Borrar</Button>
        </ListGroup.Item>
    );
};

export default ItemTarea;