import React, { Component } from 'react'

import { connect } from 'react-redux'

class Thongtin extends Component {
    render() {
        const { option, win, totalPlay, playGame } = this.props
        return (
            <>
                <div className='mt-4 thongtin-style'>
                    <div className=''>bạn chọn: <span className='text-success'>{option ? 'Tài' : 'Xỉu'}</span></div>
                    <div className=''>bàn thắng: <span className='text-success'>{win}</span></div>
                    <div className=''>Số lần chơi <span className='text-success'>{totalPlay}</span></div>
                </div>
                <button className='btn btn-success mt-3'
                    onClick={() => playGame()}
                >
                    Play Game</button>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        option: state.stateTaiXiu.option,
        win: state.stateTaiXiu.win,
        totalPlay: state.stateTaiXiu.totalPlay,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        playGame: () => {
            const action = {
                type: "PLAY_GAME"
            }
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Thongtin)
