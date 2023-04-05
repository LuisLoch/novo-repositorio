import Item from "./Item";

function List(){
    return(
        <>
            <h1>Minha lista:</h1>
            <ul>
                <Item produto="Asus RTX 3080 ROG STRIX" ano_lancamento={2020}/>
                <Item produto="Asus Z390H gaming" ano_lancamento={2019}/>
                <Item produto="Gigabyte B350M" ano_lancamento={2019}/>
                <Item produto="EVGA RTX2080" ano_lancamento={2018}/>
                <Item produto="Razer DeathAdder Elite" ano_lancamento={2018}/>
            </ul>
        </>
    )
}

export default List;