import React, {components} from "react";

class Example extends React.Components {
constructor(props){
    super(props);
    this.state = {count: 0};
}
render(){
    return (
        <div>
      <p>you clicked {this.state.count}times</p>
       <button onClick={() => this.setState({count:this.state.count+1})}>click here</button>
        </div>
    )
}

}
export default Example