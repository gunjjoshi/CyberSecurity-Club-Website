import Navbar from './components/navbar';
import Footer from './components/footer';
import Events from '../../pages/events';
import './page.module.css';
export default function Home() {
  return (
    <>
    <Navbar />
    <Events />
    <Footer />
    </>
  );
}
