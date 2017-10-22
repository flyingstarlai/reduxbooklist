import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from "../actions/index";
import { bindActionCreators } from "redux";

class BookList extends Component {

    renderList() {
        return this.props.books.map((book) => {
            return (
                <li
                    key={book.title}
                    onClick={() => this.props.selectBook(book)}
                    className="list-group-item">
                    { book.title }
                </li>
            );
        });
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                { this.renderList() }
            </ul>
        )
    }
}

function mapStateToProps(state) {
    // will show up as this.props.'key'
    return {
        books:state.books
    };
}

// will return as props on the BookList container
function mapDispatchToProps(dispatch) {
    // pass result to all reducers when selectBook is called
    return bindActionCreators({ selectBook: selectBook }, dispatch)
}

// promote BookList from component to container
export default connect(mapStateToProps, mapDispatchToProps)(BookList)