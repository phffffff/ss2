import React, { Component } from 'react'
import { connect } from 'react-redux'

import './TaiXiu.scss'
import Thongtin from './Thongtin'
import XiNgau from './XiNgau'

class TaiXiu extends Component {
    renderOptions = (option, flag) => {
        return (
            <button className='btn btn-primary options-style'
                onClick={() => this.props.changeOption(flag)}
            >{option}</button>
        )
    }

    render() {
        return (
            <div className='bg-taixiu'>
                <h1 className='text-center heading-style'>GAME ĐỔ XÚC XẮC</h1>
                <div className='container mt-5'>
                    <div className='row text-center'>
                        <div className='col col-4'>
                            {this.renderOptions("TÀI", true)}
                        </div>
                        <div className='col col-4'>
                            <XiNgau />
                            <Thongtin />
                        </div>
                        <div className='col col-4'>
                            {this.renderOptions("XỈU", false)}
                        </div>

                    </div>
                </div>
            </div >
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeOption: (flag) => {
            const action = {
                type: "CHANGE_OPTION",
                flag
            }

            dispatch(action)
        }
    }
}

export default connect(null, mapDispatchToProps)(TaiXiu)
