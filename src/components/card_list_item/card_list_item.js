

import './card_list_item.scss';

const CardListItem = ({title, price, description, traffic, color}) => {
    return (
        <div className="card .card_increase">
            <div className='card__title' style={{backgroundColor: `${color}`}}>
                    <div className="card__title_overlay">
                        <span className='card__title_font'>{title}</span>
                    </div>      
            </div>
            <div className='card__prace' style={{backgroundColor: `${color}`}}>
                <span>руб </span>
                <span className='card__prace_bold'>{price}</span>
                <span>/</span>
                <span>мес</span>
            </div>
            <div className='card__description'> 
                До <span>{description}</span> Мбит/с
            </div>
            <div className='card__traffic'>
                <span>{traffic}</span>
            </div>
        </div>
    );

}
export default CardListItem;