
const Event = () => {
    const handleMyEvent = (e)=> {
        console.log(e)
        console.log("Ativou meu evento!")
    }

    const renderSomething = (e)=> {
        if(e){
            return <h1>Renderizando isto</h1>
        }else{
            return <h1>Renderizando este outro</h1>
        }
    }

    return (
        <>
            <div>
                <button onClick={handleMyEvent}>Clique aqui</button>
            </div>
            <div>
                <button onClick={()=>{ console.log("Clicou!") }}>Clique aqui também</button>
            </div>
            <div>
                <button onClick={()=>{
                    if(true)
                        console.log("Isso não deveria existir! >:C")
                }}>Clica aqui, por favor :D</button>
            </div>
            <div>
                {renderSomething(true)}
                {renderSomething(false)}
            </div>
        </>
    )
}

export default Event