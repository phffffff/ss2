import React, { Component } from 'react'

import { connect } from 'react-redux';

class DetailPhone extends Component {
    render() {
        const { hinhAnh, tenSP, manHinh, heDieuHanh, cameraSau, cameraTruoc, ram, rom } = this.props.phoneSelect;
        return (
            <div className='container mt-5'>
                <div className='row align-items-center'>
                    <div className='col col-4'>
                        <h3 className='text-center'>{tenSP}</h3>
                        <img src={hinhAnh} style={{
                            width: '100%',
                        }} />
                    </div>
                    <div className='col col-8'>
                        <table className="table">
                            <tbody>
                                <tr>
                                    <td scope="row">Màn hình</td>
                                    <td>{manHinh}</td>
                                </tr>
                                <tr>
                                    <td scope="row">Hệ điều hành</td>
                                    <td>{heDieuHanh}</td>
                                </tr>
                                <tr>
                                    <td scope="row">Camera trước</td>
                                    <td>{cameraTruoc}</td>
                                </tr>
                                <tr>
                                    <td scope="row">Camera sau</td>
                                    <td>{cameraSau}</td>
                                </tr>
                                <tr>
                                    <td scope="row">Ram</td>
                                    <td>{ram}</td>
                                </tr>
                                <tr>
                                    <td scope="row">Rom</td>
                                    <td>{rom}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div >
        )
    }
}

const mapStateToProps = (state) => {
    return {
        phoneSelect: state.stateCartPhone.phone
    }
}

export default connect(mapStateToProps)(DetailPhone)





