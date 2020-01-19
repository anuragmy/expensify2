import React from "react";
import { connect } from "react-redux";
import { setTextFilter } from "../actions/filters";

const ExpenseListFilter = props => {
  return (
    <div>
      {console.log(props)}
      <input
        type="text"
        value={props.filters.text}
        onChange={e => props.dispatch(setTextFilter(e.target.value))}
      />
    </div>
  );
};

const mapStateToProps = state => ({
  filters: state.filter
});

export default connect(mapStateToProps)(ExpenseListFilter);
