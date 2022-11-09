import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <section className="container">
      <h2>Home Page</h2>
      <Link to="/ErrorPage" className='btn'>
      404 PAGE</Link>
    </section>

  );
};

export default Home;