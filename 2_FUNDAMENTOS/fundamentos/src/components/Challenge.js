const Challenge = ()=> {
    const x = 1, y = 2
    const soma = ()=>{
        console.log("Soma: %s", x+y)
    }

    return (
        <>
            <h1>{x} + {y} = ?</h1>
            <button onClick={soma}>CLique aqui para ver o resultado da soma no console</button>
        </>
    )
}

export default Challenge