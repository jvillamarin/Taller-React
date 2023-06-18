import { Form, Button, ButtonToolbar, ButtonGroup } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";

const Step4 = ({ next, prev, data }: any) => {
  const validationStep4 = Yup.object({
    biography: Yup.string().required("La biografia es requerida"),
  });
  const formik = useFormik({
    initialValues: {
      biography: data.biography,
    },
    validationSchema: validationStep4,
    onSubmit: (values) => {     
      next(values);
    },
  });
  return (
    <div>
      <h2>Paso 4. Biografia</h2>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group controlId="biography" className="mb-3">
          <Form.Label>Biografia</Form.Label>
          <Form.Control
            name="biography"
            as="textarea"
            value={formik.values.biography}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Ingrese La Institucion"
            isInvalid={!!formik.errors.biography}
          />
          <Form.Control.Feedback type="invalid">
            {(formik.errors.biography) as string}
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

export default Step4;
