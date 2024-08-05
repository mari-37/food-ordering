import React from "react";

class AboutClass extends React.Component {
    constructor(props) {
        super(props);

        // create state

        this.state = {
         userInfo: { 
            avatar_url:"photo" ,
            name: "XXX",
            login:"YYY" ,
            location:"Earth" }
        }
    }
    
    // api call
    async componentDidMount () {
        const data = await fetch("https://api.github.com/users/mari-37") ;
        const json = await data.json () ;
        this.setState({
           userInfo:json 
        }) ;
     } 
    
componentDidUpdate () {
    console.log("componentDidUpdate") ;
} ;

componentWillUnmount() {
    console.log("componentWillUnmount") ;
} ;

     render(){

       const {avatar_url,name,login,location} = this.state.userInfo ;
        return (
            <div className="about">
              <img src={avatar_url}/>
              <h2>{name}</h2>
              <h2>{login}</h2>
              <h3>{location}</h3>

            </div>
        ) ;
     } ;

} ;

export default AboutClass ;