import { connect } from 'react-redux';
import Column from './Column';
import { getCardsForColumns, createAction_addCard } from '../../redux/cardRedux';

const mapStateToProps = (state, props) => ({
  cards: getCardsForColumns(state, props.id),
});

const mapDispatchToProps = (dispatch, props) => ({
  addCard: title => dispatch(createAction_addCard({
    columnId: props.id,
    title,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Column);
