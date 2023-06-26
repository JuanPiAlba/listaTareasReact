import { Button, Form } from "react-bootstrap";
import ListaTareas from "./ListaTareas";
import { useState,useEffect } from "react";

const FormularioTarea = () => {
    const tareasDelLocalStorage = JSON.parse(localStorage.getItem('listaTareas')) || [];
    const [tarea, setTarea] = useState('');
    const [tareas, setTareas] = useState(tareasDelLocalStorage);

    //cicleo de vida
    useEffect(()=>{
        localStorage.setItem('listaTareas', JSON.stringify(tareas))
    }, [tareas])

    const handleSubmit = (e) => {
        e.preventDefault()
        setTareas([...tareas, tarea])
        //limpiar el imput
        setTarea('')
    };

    const borrarTarea = (nombreTarea) => {
        let copiaTarea = tareas.filter((ItemTarea)=> ItemTarea !== nombreTarea);
        setTareas(copiaTarea)
    }

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3 d-flex" controlId="tarea">
                    <Form.Control type="text" placeholder="ingrese una Tarea" onChange={(e) => setTarea(e.target.value)} value={tarea} />
                    <Button variant="primary" type="submit">Agregar</Button>
                </Form.Group>
            </Form>
            <ListaTareas propstareas={tareas} borrarTarea={borrarTarea}></ListaTareas>
        </>
    );
};

export default FormularioTarea;