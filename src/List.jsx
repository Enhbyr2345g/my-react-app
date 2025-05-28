
function List(fruits)
{
    const ListCate = {
        fontSize:"2.5em",
        frontWeight:"bold",
        color:"hsl(0,0%,20%)",
        marginBottom:"10px",
        textAlign:"center",
        border:"3px solid",
        borderRadius:"5px",
        backgroundColor :"hsl(185, 100%, 50%)",
    };


    const itemList = fruits.items;
    const cate = fruits.category ;
    const listItems = itemList.map(fruit => <li key={fruit.id}>
        {fruit.name} : &nbsp;  <b>{fruit.calor}</b>

        </li>);

    return (
        <>
            <h3 style={ListCate}>{cate}</h3>
            <ol className="list-item">{listItems}</ol>
        </>
    );
}

List.defaultProps = {
    items: [],
    category: "Category"
};
List.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            calor: PropTypes.number.isRequired
        })
    ),
    category: PropTypes.string
};

export default List