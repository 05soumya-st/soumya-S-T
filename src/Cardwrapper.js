import Card1 from "./Card1";
import Card3 from "./Card3";
import Card4 from "./Card4";
import './Cardwrapper.css';
function Cardwrapper(){
    return(
        <div className="card-wrapper">
            <Card1/>
            <Card3/>
            <Card4/>
        </div>
    )
}
export default Cardwrapper;