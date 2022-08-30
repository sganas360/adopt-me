import { useParams } from "react-router-dom"
import { Component } from "react"
import Carousel from "./Carousel"

class Details extends Component {
    // constructor(props){
    //     super(props);
    //     //"this" is the instance of detail
    //     this.state = { loading: true }
    // }

    state = { loading: true }

    async componentDidMount() {
        const res = await fetch (
            `http://pets-v2.dev-apis.com/pets?id=${this.props.params.id}`
        )
        const json = await res.json();
        
        this.setState(Object.assign({loading: false}, json.pets[0]))
        
        // this does the same thing as above
        // this.setState({
        //     loading: false
        // })
        // this.setState(json.pets[0]);
    }

    render(){
        if(this.state.loading){
            return<h2>loading ...</h2>
        }

        const {animal, breed, city, state, description, name, images} = this.state;

        return (
            <div className="details">
                <Carousel images = {images}/>
                <h1>{name}</h1>
                <h2>{animal} - {breed} - {city}, {state}</h2>
                <button>Adopt {name}</button>
                <p>{description}</p>
            </div>
        )
    }
}
 
// const Details = () => {
//     const { id } = useParams();
//     return <h2>Hello World {id}</h2>;
// }

const WrappedDetails = () => {
    const params = useParams();
    return <Details params={params}/>
}

export default WrappedDetails;