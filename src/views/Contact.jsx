import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';


const Contact = () => {
  return (
    <Container className='mt-4 text-center'>
      <h3>Cuentanos, ¿en que te podemos ayudar?</h3>
      <Form>
        <Form.Group className="mb-3 form-control-sm" controlId="exampleForm.ControlInput1">
          <Form.Label>Correo</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3 form-control-sm" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Descripcion</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Button type="submit" className='btn-danger'>Enviar</Button>
      </Form>
    </Container>
  )
}

export default Contact