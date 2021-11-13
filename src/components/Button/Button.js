import s from './Button.module.css'

export default function Button({name}){
    return (
        <button className={s.button} name={name}>{name}</button>
    )
}