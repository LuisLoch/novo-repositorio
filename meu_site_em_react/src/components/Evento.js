import Button from "./events/Button"

function Evento() {
    function meuEvento(){
        console.log("Ativando primeiro evento!")
    }

    function segundoEvento(){
        console.log("Ativando segundo evento!")
    }

    return (
        <>
            <p>Clique para diparar um evento.</p>
            <Button event={meuEvento} text="Primeiro evento" />
            <Button event={segundoEvento} text="Segundo evento" />
        </>
    )
}



export default Evento