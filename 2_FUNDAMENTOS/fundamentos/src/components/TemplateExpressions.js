const TemplateExpressions = () => {
    const name = 'Luís'
    const data = {
        age: 20,
        employment: 'Programador'
    }

    return (
        <div>
            <h1>Olá, {name}, tudo bem?</h1>
            <p>Você atua como: {data.employment}</p>
            <p>4 + 4 = {4+4}</p>
            <p>{console.log("JSX React")}</p>
        </div>
    )
}

export default TemplateExpressions