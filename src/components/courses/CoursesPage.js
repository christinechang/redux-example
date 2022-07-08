import React from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import PropTypes from 'prop-types';

import { bindActionCreators } from "redux";

class CoursesPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            course: {
                title: ""
            }
        }
    }

    handleChange = (event) => {
        const course = { ...this.state.course, title: event.target.value };
        this.setState({ course }); // this.setState({course:course});
    }

    handleSubmit = (event) => {
        event.preventDefault(); // prevents from reloading
        this.props.actions.createCourse(this.state.course);
    }

    render() {
        // for accessibility and usability reasons, better to put onSubmit into <form> rather than <input type="submit">
        //  will allow hitting enter to submit form too.
        console.log('props:::', this.props.courses);
        return (
            <form onSubmit={this.handleSubmit}>
                <h2>Courses</h2>
                <h3>Add Course</h3>
                <input
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.course.title}
                />
                <input type="submit" value="Save" />
                {this.props.courses.map(course => (
                    <div key={course.title}>{course.title}</div>
                ))}
            </form>
        );
    }
}

CoursesPage.propTypes = { // clarified that expect dispatch to be passed into component.
    // connect automatically passed in if omit 2nd arg mapDispatchToProps (line59)
    courses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        courses: state.courses
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CoursesPage);
