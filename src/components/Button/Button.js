import s from './Button.module.css'

export default function Button({name, onClick}){
    return (
        <button className={s.button} name={name} onClick = {onClick}>{name}</button>
    )
}