import { connect } from 'react-redux';
import DigitsView from '../../components/Digits';
import { digitClick } from '../../actions/digit';
import store from '../../store';
import { updateHistory } from '../../actions/history';

export const digitClickHandler = dispatch => (numberClicked) => {
    dispatch(digitClick(numberClicked));
    dispatch(updateHistory(store.getState().curExpression));
}

const mapDispatchToProps = (dispatch) => ({
    digitClickHandler: digitClickHandler(dispatch)
});

export default connect(null, mapDispatchToProps)(DigitsView);