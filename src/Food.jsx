function food() {
    const food1 = "orange";
    const food2 = "apple";
  return (
    <div>
      <h1><b>Food</b></h1>
      <p>Food is good</p>
      <ul>
        <li>
            {food1}
        </li>
        <li>
            {food2}
        </li>
        <li>
            {food2.toUpperCase()}
        </li>
        <li>
            {food2.concat(food1)}
        </li>
      </ul>
      <hr />
    </div>
  );
}
export default food;