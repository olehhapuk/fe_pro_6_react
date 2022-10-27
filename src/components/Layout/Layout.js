import Navbar from '../Navbar';
import Container from '../Container/Container';

function Layout({ children }) {
  return (
    <div>
      <Navbar title="Todo App" />
      <Container>{children}</Container>
    </div>
  );
}

export default Layout;
