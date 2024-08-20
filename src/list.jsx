import PropTypes from 'prop-types';
function list (props)
{
   
    (
        <h1> hello my app </h1>
           
            // <ol>{fruitListt}</ol>
    
    );
    const fruits =['apple ', 'banana ', 'mango ', 'orange ', 'grapes '];

    const fruitsObjectList = [
        { id :1 ,  name: 'apple', price: 100 },
        { id :2 , name: 'banana', price: 200 },
        { id :3 , name: 'mango', price: 300 },
        { id :4 , name: 'orange', price: 400 },
        { id :5 , name: 'grapes', price: 500 },
    ];

    fruitsObjectList.sort((a, b) => a.name.localeCompare(b.name));
    fruitsObjectList.sort((a, b) => a.price - b.price); //  sort numeric 
    fruitsObjectList.sort((a, b) => a.price - b.price); // reverse numeric 
    const filterFruits = fruitsObjectList.filter(fruit => fruit.price > 200); //  filter fruits price greator than 200 
    const fruitList = filterFruits.map((filterFruits) => <li key ={filterFruits.name} >{filterFruits.name}:&nbsp;  <b>{filterFruits.price}</b>  </li>);
    
    const category = props.category;
    const fruit = props.items;
    const fruitListtt = fruit.map((fruit) => <li key ={fruit.name} >{fruit.name}:&nbsp;  <b>{fruit.price}</b>  </li>);
 
    
    const fruitListt = fruitsObjectList.map((fruitsObjectList) => <li key ={fruitsObjectList.id} >{fruitsObjectList.name}:&nbsp;  <b>{fruitsObjectList.price}</b>  </li>);

    return (
        <>  <h1 className="list-category"> {category} </h1>
            <ol className="list-item" >{fruitListtt} </ol>
        
        </>
       
        ); 
    
    

}
list.propTypes={
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape( {
                                                id: PropTypes.number,
                                                name: PropTypes.string,
                                                price: PropTypes.number
                                            }

    )),

}
list.defaultProps = {
    category :"deafult tatu",
    items :[{id : 1 , name :"hwll" , price : 20000 }],
}

export default list ;