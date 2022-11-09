import { Link } from 'react-router-dom'
const errorPage = () => {
  return(
    <section className="container">
      <h2>404 Page</h2>
      <p>Page not found-</p>
      <Link to="/" className='btn'>Back Home</Link>
    </section>
  );
}

export default errorPage;