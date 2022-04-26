

import CardListItem from "../card_list_item/card_list_item";

import './card_list.scss';

const CardList = ({rate}) => {

    const element = rate.map(item => {
        return (
            <CardListItem 
                key={item.id}
                title={item.title}
                price={item.price}
                description={item.description}
                traffic={item.traffic}
                color={item.color}
                onMouseover=""
            />
        )
    })
    return (
        <div className="card__wrapper">
            {element}
        </div>
        
    )
}
export default CardList;