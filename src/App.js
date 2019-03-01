import React , { Component } from 'react';
import Display from './Component/Display';
import './assets/App.css'
import Keys from './Component/Keys';

export default class App extends Component{

    constructor(props){
        super(props)
        this.state = {
            result : "",
            keys : ['(','CE',')','C',9,8,7,'+',6,5,4,'-',3,2,1,'*','.',0,'=','/']
        }
    }

    handlerClick = button => {

        if(button === "="){
            this.calculate()
        }

        else if(button === "C"){
            this.reset()
        }
        else if(button === "CE"){
            this.backspace()
        }

        else {
            if(this.validateNumber(button)){
                this.setState({
                    result: this.state.result + button
                })
            }
        }
    };

    validateNumber = number=>{
        return (number === 0 && this.state.result.length === 0 || parseInt(this.state.result) === 0  ) ? false : true
    }
    calculate = () => {
        var checkResult = ''
        if(this.state.result.includes('--')){
            checkResult = this.state.result.replace('--','+')
        }

        else {
            checkResult = this.state.result
        }

        try {
            this.setState({
                result: (eval(checkResult) || "" ) + ""
            })
        } catch (e) {
            this.setState({
                result: "error"
            })

        }
    };

    reset = () => {
        this.setState({
            result: ""
        })
    };

    backspace = () => {
        this.setState({
            result: this.state.result.slice(0, -1)
        })
    };

    render() {
        return (
            <div className="calculator-body">
                <Display result={this.state.result}/>
                <Keys items={this.state.keys} handlerClick={this.handlerClick}/>
            </div>
        )
    }
}
