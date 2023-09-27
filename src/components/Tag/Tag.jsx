import './Tag.css'

export default function Tag(props) {
    /*
    Conteúdo do componente
    */

    const text = props.text;

    /*
    Return -> Encerra a função
    No ReactJS, o return precisa devolver um componente JSX para ser
    exibido na tela
    */

    return <div className="tag">{text}</div>
}
