import CardList from "../card_list/card_list";


const App = () => {
    const data = [
        {
            title: 'Безлимитный 300',
            color: '#73c2d3',
            price: '300',
            description: '10',
            traffic: 'Объем включенного трафика не ограничен',
            isIncrease: false,
            id: 1,
        },
        {
            title: 'Безлимитный 450',
            color: '#68ac8d',
            price: '450',
            description: '50',
            traffic: 'Объем включенного трафика не ограничен',
            isIncrease: false,
            id: 2,
        },
        {
            title: 'Безлимитный 550',
            color: '#d6695e',
            price: '550',
            description: '100',
            traffic: 'Объем включенного трафика не ограничен',
            isIncrease: false,
            id: 3,
        },
        {
            title: 'Безлимитный 1000',
            color: '#383c45',
            price: '1000',
            description: '200',
            traffic: 'Объем включенного трафика не ограничен',
            isIncrease: false,
            id: 4
        },
    ];
    return(
        <div>
            <CardList rate ={data}/>
        </div>
    )
}
export default App;