import { BounceLoader } from "react-spinners"

export default function Loading(){
    return (
        <div className="loading-section">
          <BounceLoader color="#03976A"  size={180}/>
          <h2>Server is processing order...</h2>
          <p >😋We are getting everything ready for you</p>
        </div>
    )
}