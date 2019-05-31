import { connect } from 'react-redux';
import StartButton from '../components/StartButton';
import * as actions from '../store/modules';
import getRandomNumber from "../utils";

// store 안의 state 값을 props 로 연결해줍니다.
const mapStateToProps = (state) => ({
    gameStart: state.get('gameStart'),
});

const mapDispatchToProps = (dispatch) => ({
    onStart: () => {
        const numbers1 = getRandomNumber();
        const numbers2 = getRandomNumber();
        dispatch(actions.start({numbers1, numbers2}))
    },
})

// 데이터와 함수들이 props 로 붙은 컴포넌트 생성
const BingoListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(StartButton);

export default BingoListContainer;