import logo from './logo.svg';
import './App.css';
import { Faq } from './components/Faq';

function App() {
  return (
    <div className="pp">
      <div className='section'>
        <h1 className='h1'>Freaquently Asked Questions</h1>
        
        <Faq
          title={'How to become software developer?'}
          desc={'Yes, you can always become software developer if you wish to.'}
           />

        <Faq
          title={'Can I start job in 3 months?'}
          desc={'Yes.'}
         />

<Faq
          title={'Who is the best football team in the world?'}
          desc={'Liverpool'}
         />
      </div>


    </div>
  );
}

export default App;
