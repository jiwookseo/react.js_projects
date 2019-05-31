import { connect } from 'react-redux';
import BingoList from '../components/BingoList';
import * as actions from '../store/modules';

// store 안의 state 값을 props 로 연결해줍니다.
const mapStateToProps = (state) => ({
    player1: state.get('player1'),
    player2: state.get('player2'),
    selected: state.get('selected'),
});

const mapDispatchToProps = (dispatch) => ({
    onSelect: ({number, index}) => dispatch(actions.select({number, index})),
})

// 데이터와 함수들이 props 로 붙은 컴포넌트 생성
const BingoListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(BingoList);

export default BingoListContainer;