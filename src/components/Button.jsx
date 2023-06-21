import './mainApp/index.scss'

export default function Button({onClick ,content,disabled}){
    return(
        <button class='button' disabled={disabled} onClick={onClick}>{content}</button>
    )
}