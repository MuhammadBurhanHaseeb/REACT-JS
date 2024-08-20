import PropTypes from "prop-types";
function student(props) {
  return (
    <div className="student">
      <h1>Student Name : {props.name}</h1>
      <h1>Student Age : {props.age}</h1>
        <h1>IsStudent : {props.isStudent ? "Yes" : "No"}</h1>
    </div>
  );
}
student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool,
};
student.defaultProps = {
  name: "defaultBurhan",
  age: 10,
  isStudent: true,
};
export default student;
