import PropTypes from 'prop-types';
import PropType from 'prop-types';

function List(props){

    // const fruits = [{id: 1, name: "apple", calories: 95},
    //                 {id: 2, name: "orange", calories: 45},
    //                 {id: 3, name: "banana", calories: 105},
    //                 {id: 4, name: "coconat", calories: 159},
    //                 {id: 5, name: "pineapple", calories: 35},];


                                        
    // fruits.sort((a,b) => a.name.localeCompare(b.name)); //ALPHABETICAL
    // fruits.sort((a,b) => b.name.localeCompare(a.name)); //REVERSE ALPHABETICAL
    // fruits.sort((a,b) => a.calories - b.calories); // NUMERIC
    // fruits.sort((a,b) => b.calories - a.calories); // REVERSR NUMERIC
                 

    // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
    // const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);


    const category = props.category;
    const itemList = props.items;

    const listItems = itemList.map(item =>   <li key={item.id}>
                                            {item.name}: &nbsp;
                                            <b>{item.calories}</b></li>);

    return( <>
            
            <h3 className="list-category">{category}</h3>
            <ol className="list-items">{listItems}</ol>
            
            </>);
}
List.PropType = {
    category: PropType.string,
    items: PropType.arrayOf(PropType.shape({    id: PropTypes.number,
                                                name: PropType.string, 
                                                calories: PropTypes.number}))
}
List.defaultProps = {
    category: "Category",
    item: [],
}
export default List