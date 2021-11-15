import Button from '../Button/Button'
import s from './FeedbackOptions.module.css'

export default function FeedbackOptions({onClick}){
    return(
        <>
            <ul className = {s.list}>
                <li className = {s.item}>
                    <Button name={'good'} onClick = {onClick}></Button>
                </li>
                <li className = {s.item}>
                    <Button name={'neutral'} onClick = {onClick}></Button>
                </li>
                <li className = {s.item}>
                    <Button name={'bad'} onClick = {onClick}></Button>
                </li>
            </ul>         
        </>
    )
}