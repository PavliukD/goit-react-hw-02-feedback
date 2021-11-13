import { Component } from "react"
import Button from '../Button/Button'


export default class Statistic extends Component{
state = {
    "good": 0,
    "neutral": 0,
    "bad": 0
}



    render(){
        return(
            <div>
            <Button name={'good'}></Button>
            <Button name={'neutral'}></Button>
            <Button name={'bad'}></Button>
            </div>
        )
    }
}