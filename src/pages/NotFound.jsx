import { useNavigate } from 'react-router'
import question from '../assets/question.svg'


export default function NotFound(){

    const navigate = useNavigate()

    function handleNav(){
      navigate('/')
    }
    return(
      <section className='error-section'>
       <div className='error-layout'>
        <img src={question} />
        <h2>Page not found</h2>
        <p>
           The page you're looking for doesn't exist or was moved
        </p>
        <div className='navigation-buttons'>
            <button 
            onClick={handleNav}
            className='home-button'>Go home</button>
        </div>
       </div>
      </section>
    )
}