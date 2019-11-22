import { connect } from 'react-redux';
import SearchResults from './SearchResults';
import { getCardsForSearch } from '../../redux/cardRedux';
import { createAction_changeSearchString } from '../../redux/searchStringRedux';

const mapStateToProps = (state, props) => {
  const { searchString } = props.match.params;

  return {
    cards: getCardsForSearch(state, searchString),
    searchString,
  };
};

const mapDispatchToProps = (dispatch, props) => ({
  changeSearchString: () =>
    dispatch(createAction_changeSearchString(props.match.params.searchString)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
