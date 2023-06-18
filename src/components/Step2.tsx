import { useFormik } from "formik";
import * as Yup from "yup";
import { Form, Button, ButtonToolbar, ButtonGroup  } from "react-bootstrap";

const Step2 = ({next, prev, data}: any) => {
  const validationStep2 = Yup.object({
    institution: Yup.string().required("La institucion es requerida"),
    career: Yup.string().required("La carrera es requerida"),
    startDate: Yup.date()
      .required("La fecha de inicio es requerida")
      .nullable(),
    finalDate: Yup.date()
      .required("La fecha final es requerida")
      .nullable()
      .min(
        Yup.ref("startDate"),
        "la fecha final debe ser posterior o igual a la fecha inicial"
      ),
  });
  const formik = useFormik({
    initialValues: {
      institution: data.institution,
      career: data.career,
      startDate: data.startDate,
      finalDate: data.finalDate,
    },
    validationSchema: validationStep2,
    onSubmit: (values) => {      
      next(values)
    },
  });
  return (
    <div>
      <h2>Paso 2. Formacion Academica</h2>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group controlId="institution" className="mb-3">
          <Form.Label>Institución</Form.Label>
          <Form.Control
            name="institution"
            type="text"
            value={formik.values.institution}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Ingrese La Institucion"
            isInvalid={
              !!formik.errors.institution
            }
          />
          <Form.Control.Feedback type="invalid">
            {(formik.errors.institution as string) || ''}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="career" className="mb-3">
          <Form.Label>Carrera</Form.Label>
          <Form.Control
            name="career"
            type="text"
            value={formik.values.career}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Ingrese La Carrera"
            isInvalid={!!formik.errors.career}
          />
          <Form.Control.Feedback type="invalid">
            {(formik.errors.career) as string || ''}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="startDate" className="mb-3">
          <Form.Label>Fecha de inicio</Form.Label>
          <Form.Control
            name="startDate"
            type="date"
            value={formik.values.startDate}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Ingrese La Fecha de inicio"
            isInvalid={!!formik.errors.startDate}
          />
          <Form.Control.Feedback type="invalid">
            {(formik.errors.startDate)as string}
          </Form.Control.Feedback>
        </Form.Group>
        
        <Form.Group controlId="finalDate" className="mb-3">
          <Form.Label>Fecha final</Form.Label>
          <Form.Control
            name="finalDate"
            type="date"
            value={formik.values.finalDate}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Ingrese La Fecha de inicio"
            isInvalid={!!formik.errors.finalDate}
          />
          <Form.Control.Feedback type="invalid">
            {(formik.errors.finalDate) as string}
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

export default Step2;
