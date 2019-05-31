import { connect } from 'react-redux';
import Completed from '../components/Completed';

// store 안의 state 값을 props 로 연결해줍니다.
const mapStateToProps = (state) => ({
    player1: state.get('player1'),
    player2: state.get('player2'),
});

// 데이터와 함수들이 props 로 붙은 컴포넌트 생성
const CompletedContainer = connect(
    mapStateToProps)(Completed);

export default CompletedContainer;