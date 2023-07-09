import './App.css';
//Banner
import { Banner } from './components/Banner';
//About
import { About } from './components/About';
//Cards
import { Cards } from './components/Cards';
//Footer
import { Footer } from './components/Footer';



function App() {
  return (
    <section className='bg-[#161616]'>
      <Banner/>
      <About/>
      <Cards/>
      <Footer/>
    </section>
  );
}

export default App;
