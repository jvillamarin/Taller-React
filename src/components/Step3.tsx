import { useFormik } from "formik";
import * as Yup from "yup";
import { Form, Button, ButtonToolbar, ButtonGroup} from "react-bootstrap";

const Step3 = ({next, prev, data}:any) => {
  const validationStep3 = Yup.object({
    company: Yup.string().required("El nombre de la empresa es requerida"),
    job: Yup.string().required("El puesto requerida"),
    startDateJob: Yup.date()
      .required("La fecha de inicio es requerida")
      .nullable(),
    finalDateJob: Yup.date()
      .required("La fecha final es requerida")
      .nullable()
      .min(
        Yup.ref("startDateJob"),
        "la fecha final debe ser posterior o igual a la fecha inicial"
      ),
  });
  const formik = useFormik({
    initialValues: {
      company: data.company,
      job: data.job,
      startDateJob: data.startDateJob,
      finalDateJob: data.finalDateJob,
    },
    validationSchema: validationStep3,
    onSubmit: (values) => {     
      next(values);
    },
  });
  return (
    <div>
      <h2>Paso 3. Experiencia Laboral</h2>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group controlId="company" className="mb-3">
          <Form.Label>Empresa</Form.Label>
          <Form.Control
            name="company"
            type="text"
            value={formik.values.company}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Ingrese nombre de la empresa"
            isInvalid={!!formik.errors.company}
          />
          <Form.Control.Feedback type="invalid">
            {(formik.errors.company)as string}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="job" className="mb-3">
          <Form.Label>Cargo</Form.Label>
          <Form.Control
            name="job"
            type="text"
            value={formik.values.job}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Ingrese el puesto"
            isInvalid={!!formik.errors.job}
          />
          <Form.Control.Feedback type="invalid">
            {(formik.errors.job)as string}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="startDateJob" className="mb-3">
          <Form.Label>Fecha de inicio</Form.Label>
          <Form.Control
            name="startDateJob"
            type="date"
            value={formik.values.startDateJob}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Ingrese La Fecha de inicio"
            isInvalid={!!formik.errors.startDateJob}
          />
          <Form.Control.Feedback type="invalid">
            {(formik.errors.startDateJob)as string}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="finalDateJob" className="mb-3">
          <Form.Label>Fecha final</Form.Label>
          <Form.Control
            name="finalDateJob"
            type="date"
            value={formik.values.finalDateJob}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Ingrese La Fecha de inicio"
            isInvalid={!!formik.errors.finalDateJob}
          />
          <Form.Control.Feedback type="invalid">
            {(formik.errors.finalDateJob)as string}
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

export default Step3;
