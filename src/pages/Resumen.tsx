import { useLocation, Link } from "react-router-dom";
import { Card, ListGroup } from "react-bootstrap";

const Resumen = () => {
  const location = useLocation();
  const {
    name,
    email,
    lastName,
    phone,
    institution,
    career,
    startDate,
    finalDate,
    company,
    job,
    startDateJob,
    finalDateJob,
    biography,
    nameRef1,
    emailRef1,
    nameRef2,
    emailRef2,
    phoneRef1,
    phoneRef2,
  } = location.state;
  return (   
    <Card className="mt-3 mb-3">
      <Card.Header as="h5">Resumen</Card.Header>
      <Card.Body>
        <ListGroup className="list-group-flush">          
          <Card.Header>Información Basica</Card.Header>
          <ListGroup.Item>
            <strong>Nombre: </strong>
            {name}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Apellido: </strong>
            {lastName}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Correo: </strong>
            {email}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Telefono: </strong>
            {phone}
          </ListGroup.Item>          
          <Card.Header>Formacion Academica</Card.Header> 
           
          <ListGroup.Item>
            <strong>Institución: </strong>
            {institution}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Carrera: </strong>
            {career}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Fecha de inicio: </strong>
            {startDate}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Fecha de final: </strong>
            {finalDate}
          </ListGroup.Item>

          <Card.Header>Experiencia Laboral</Card.Header> 
          <ListGroup.Item>
            <strong>Empresa: </strong>
            {company}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Puesto: </strong>
            {job}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Fecha de inicio: </strong>
            {startDateJob}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Fecha de final: </strong>
            {finalDateJob}
          </ListGroup.Item>

          <Card.Header>Biografia</Card.Header> 
          <ListGroup.Item>
            <strong>Biografia: </strong>
            {biography}
          </ListGroup.Item>

          <Card.Header>Referencias Personales</Card.Header> 
          <ListGroup.Item>
            <strong>Referencia personal 1: </strong>
            {nameRef1}{" "}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Correo: </strong>
            {emailRef1}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Telefono: </strong>
            {phoneRef1}{" "}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Referencia personal 2: </strong>
            {nameRef2}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Correo: </strong>
            {emailRef2}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Telefono: </strong>
            {phoneRef2}
          </ListGroup.Item>
        </ListGroup>
        <Link to="/">Volver</Link>
      </Card.Body>
    </Card>      
  );
};

export default Resumen;
