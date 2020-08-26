import React from 'react'
import './Card.css'
export default props =>{
    return(<div className="Card">
        <div>Conteudo</div>
        <div>{props.titulo}</div>
    </div>)
}