import Container from './Container/Container';
import Button from './Button/Button';

export default function App() {
  return (
    <Container>
      <Button type="button">Default</Button>
      <Button type="button" variant="active">
        Active
      </Button>
      <Button type="button" variant="error">
        Error
      </Button>
    </Container>
  );
}
