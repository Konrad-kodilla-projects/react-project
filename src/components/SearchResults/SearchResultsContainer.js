import { connect } from 'react-redux';
import SearchResults from './SearchResults';
import { getCardsForSearch, getDataForSearchCards } from '../../redux/cardRedux';
import { createAction_changeSearchString } from '../../redux/searchStringRedux';

const mapStateToProps = (state, props) => {
  const { searchString } = props.match.params;
  const cards = getCardsForSearch(state, searchString);

  return {
    cards: getDataForSearchCards(state, cards),
  };
};

const mapDispatchToProps = (dispatch, props) => ({
  changeSearchString: () =>
    dispatch(createAction_changeSearchString(props.match.params.searchString)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
