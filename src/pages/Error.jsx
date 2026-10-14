import { useNavigate } from 'react-router'
import mark from '../assets/exclamation.svg'


export default function Error(){

    const navigate = useNavigate()

    function handleNav(){
      navigate('/')
    }
    return(
      <section className='error-section'>
       <div className='error-layout'>
        <img src={mark} />
        <h2>Something went wrong</h2>
        <p>
            We couldn't load this page. Check your 
            internet connection and try again
        </p>
        <div className='navigation-buttons'>
            <button className='try-button'>Try again</button>
            <button 
            onClick={handleNav}
            className='home-button'>Go home</button>
        </div>
       </div>
      </section>
    )
}