import { useFormik } from "formik";
import * as Yup from "yup";
import { Form, Button, ButtonToolbar, ButtonGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Step5 = ({ prev, data }:any) => {
  const validationStep5 = Yup.object({
    nameRef1: Yup.string().required("El Nombre es requerido"),
    emailRef1: Yup.string()
      .email("El email no es valido")
      .required("El email es requerido"),
    nameRef2: Yup.string().required("El Nombre es requerido"),
    emailRef2: Yup.string()
      .email("El email no es valido")
      .required("El email es requerido"),
    phoneRef1: Yup.number().min(1000000,"telefono debe tener minimo 7 digitos").required("El numero de telefono es requerido"),
    phoneRef2: Yup.number().min(1000000,"telefono debe tener minimo 7 digitos").required("El numero de telefono es requerido"),
  });

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      nameRef1: data.nameRef1,
      emailRef1: data.emailRef1,
      nameRef2: data.nameRef2,
      emailRef2: data.emailRef2,
      phoneRef1: data.phoneRef1,
      phoneRef2: data.phoneRef2,
    },
    validationSchema: validationStep5,
    onSubmit: (values) => {
      const summaryData = { ...data, ...values };      
      navigate("/resumen", { state: summaryData });
    },
  });
  return (
    <div>
      <h1>Paso 5. Referencias Personales</h1>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group controlId="nameRef1" className="mb-3">
          <Form.Label>Referencia personal 1</Form.Label>
          <Form.Control
            onBlur={formik.handleBlur}
            isInvalid={!!formik.errors.nameRef1}
            onChange={formik.handleChange}
            value={formik.values.nameRef1}
            name="nameRef1"
            type="text"
            placeholder="Ingrese referencia 1"
          />
          <Form.Control.Feedback type="invalid">
            {(formik.errors.nameRef1) as string}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="emailRef1" className="mb-3">
          <Form.Label>Correo</Form.Label>
          <Form.Control
            onBlur={formik.handleBlur}
            isInvalid={!!formik.errors.emailRef1}
            onChange={formik.handleChange}
            value={formik.values.emailRef1}
            name="emailRef1"
            type="email"
            placeholder="Ingrese correo referencia 1"
          />
          <Form.Control.Feedback type="invalid">
            {(formik.errors.emailRef1) as string}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="phoneRef1" className="mb-3">
          <Form.Label>Telefono</Form.Label>
          <Form.Control
            onBlur={formik.handleBlur}
            isInvalid={!!formik.errors.phoneRef1}
            onChange={formik.handleChange}
            value={formik.values.phoneRef1}
            name="phoneRef1"
            type="number"
            placeholder="Ingrese numreo de telefono"
          />
          <Form.Control.Feedback type="invalid">
            {(formik.errors.phoneRef1)as string}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="nameRef2" className="mb-3">
          <Form.Label>Referencia personal 2</Form.Label>
          <Form.Control
            onBlur={formik.handleBlur}
            isInvalid={!!formik.errors.nameRef2}
            onChange={formik.handleChange}
            value={formik.values.nameRef2}
            name="nameRef2"
            type="text"
            placeholder="Ingrese referencia 2"
          />
          <Form.Control.Feedback type="invalid">
            {(formik.errors.nameRef2)as string}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="emailRef2" className="mb-3">
          <Form.Label>Correo</Form.Label>
          <Form.Control
            onBlur={formik.handleBlur}
            isInvalid={!!formik.errors.emailRef2}
            onChange={formik.handleChange}
            value={formik.values.emailRef2}
            name="emailRef2"
            type="email"
            placeholder="Ingrese correo referencia 2"
          />
          <Form.Control.Feedback type="invalid">
            {(formik.errors.emailRef2)as string}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="phoneRef2" className="mb-3">
          <Form.Label>Telefono</Form.Label>
          <Form.Control
            onBlur={formik.handleBlur}
            isInvalid={!!formik.errors.phoneRef2}
            onChange={formik.handleChange}
            value={formik.values.phoneRef2}
            name="phoneRef2"
            type="number"
            placeholder="Ingrese numreo de telefono"
          />
          <Form.Control.Feedback type="invalid">
            {(formik.errors.phoneRef2)as string}
          </Form.Control.Feedback>
        </Form.Group>
        <ButtonToolbar aria-label="Toolbar with button groups" className="d-flex justify-content-between">
          <ButtonGroup className="me-2" aria-label="First group">
            <Button variant="primary" type="button" onClick={prev}>
              Anterior
            </Button>{' '}            
          </ButtonGroup> 
          <ButtonGroup className="me-2" aria-label="Second group">
            <Button variant="primary" type="submit">
              Siguiente
            </Button>
          </ButtonGroup>     
        </ButtonToolbar>
      </Form>
    </div>
  );
};

export default Step5;
