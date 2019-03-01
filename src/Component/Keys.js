import React from 'react';

export default class Keys extends React.Component{

    constructor(props){
        super(props);
        this.state={
            btn  : "",
        }
    }
    renderCalcButton() {
        this.setState({
            btn : this.props.items.map((item,index)=>(
                this.button(item,index)
            ))
        })

    }
    button = (item,index)=>{
        return<button
            onClick={()=>this.props.handlerClick(item)}
            className="btn"
            key={index}
        >
            {item}
        </button>
    };

    componentDidMount() {
        this.renderCalcButton();
    }

    render(){
        return(
            <div>
                <div className="row">
                    {this.state.btn}
                </div>
            </div>
        )
    }

}