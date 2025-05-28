import PropTypes from 'prop-types'

function Student(prog)
{
    const student = {
        frontFamily: "Arial, sans-self",
        frontSize:"2em",
        padding:"10px",
        border:"1px solid hsla(0,0%,50%,0.8)"
    }
    return(
        <div style={student}>
            <p>Name: {prog.name}</p>
            <p>Age: {prog.age}</p>
            <p>Student: {prog.isStudent ? "Yes" : "No"}</p>
        </div>
    );
}
Student.propType = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool
}
Student.defaultProps= {
    name: "Guest",
    age: 0,
    isStudent: true
}
export default Student