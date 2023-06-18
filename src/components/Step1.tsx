import { useFormik } from "formik";
import * as Yup from "yup";
import { Form, Button } from "react-bootstrap";

const Step1 = ({next, data}: any) => {
  const validationStep1 = Yup.object({
    name: Yup.string().required("El Nombre es requerido"),
    lastName: Yup.string().required("El apellido es requerido"),
    email: Yup.string()
      .email("El email no es valido")
      .required("El email es requerido"),
    phone: Yup.number().required("El numero de telefono es requerido").min(1000000,"telefono debe tener minimo 7 digitos"),
  });

  const formik = useFormik({
    initialValues:{
      name:data.name,
      lastName:data.lastName,
      email:data.email,
      phone:data.phone,
    },    
    validationSchema: validationStep1,

    onSubmit: (values) => {     
      next(values)
    },
  });
  return (
    <div>
      <h1>Paso 1. Datos Basicos</h1>
      <Form onSubmit={formik.handleSubmit}>

        <Form.Group controlId="name" className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            onBlur={formik.handleBlur}
            isInvalid={!!formik.errors.name}
            onChange={formik.handleChange}
            value={formik.values.name}
            name="name"
            type="text"
            placeholder="Enter Name"
          />
          <Form.Control.Feedback type="invalid">
            {(formik.errors.name)as string}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="lastName" className="mb-3">
          <Form.Label>Apellido</Form.Label>
          <Form.Control
            onBlur={formik.handleBlur}
            isInvalid={!!formik.errors.lastName}
            onChange={formik.handleChange}
            value={formik.values.lastName}
            name="lastName"
            type="text"
            placeholder="Enter Last Name"
          />
          <Form.Control.Feedback type="invalid">
            {(formik.errors.lastName)as string}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="email" className="mb-3">
          <Form.Label>Correo</Form.Label>
          <Form.Control
            onBlur={formik.handleBlur}
            isInvalid={!!formik.errors.email}
            onChange={formik.handleChange}
            value={formik.values.email}
            name="email"
            type="email"
            placeholder="Enter Email"
          />
          <Form.Control.Feedback type="invalid">
            {(formik.errors.email) as string}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="phone" className="mb-3">
          <Form.Label>Telefono</Form.Label>
          <Form.Control
            onBlur={formik.handleBlur}
            isInvalid={!!formik.errors.phone}
            onChange={formik.handleChange}
            value={formik.values.phone}
            name="phone"
            type="number"
            placeholder="Enter Phone"
          />
          <Form.Control.Feedback type="invalid">
            {(formik.errors.phone) as string}
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit">
          Siguiente
        </Button>

      </Form>
    </div>
  );
};

export default Step1;
