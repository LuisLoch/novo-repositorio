import PropTypes from 'prop-types';

function Item({produto, ano_lancamento}){
    return(
        <>
            <li>{produto} - {ano_lancamento}</li>
        </>
    )
}

Item.propTypes = {//pode dar erro-------------------------------------------------------------------------------------------------------------------------------------
    produto: PropTypes.string.isRequired(),
    ano_lancamento: PropTypes.number,
}

Item.defaultProps = {//pode dar erro-------------------------------------------------------------------------------------------------------------------------------------
    marca: 'Faltou a marca',
    ano_lancamento: 0,
}

export default Item;