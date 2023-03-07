import { type } from '@testing-library/user-event/dist/type'
import React, { Component } from 'react'

import { connect } from 'react-redux'

class CartPhone extends Component {

    renderDetailCarts = () => {
        const { cartPhone, handleOnClickDelPhone, handleOnClickChangeCount } = this.props
        return (
            cartPhone && cartPhone.length &&
            cartPhone.map((item, idx) => {
                const { tenSP, hinhAnh, giaBan, count, maSP } = item;
                return (
                    <tr key={idx}>
                        <td scope="row">{tenSP}</td>
                        <td>
                            <img
                                src={hinhAnh}
                                style={{
                                    width: '50px',
                                }} /></td>
                        <td>{giaBan.toLocaleString()}</td>
                        <td>
                            <button className='btn btn-primary'
                                onClick={() => handleOnClickChangeCount(maSP, 1)}
                            >+</button>
                            {count}
                            <button className='btn btn-primary'
                                onClick={() => handleOnClickChangeCount(maSP, -1)}
                            >-</button>
                        </td>
                        <td>{(giaBan * count).toLocaleString()}</td>
                        <td>
                            <button className='btn btn-danger'
                                onClick={() => { handleOnClickDelPhone(maSP) }}
                            >
                                xóa
                            </button>
                        </td>
                    </tr>
                )
            })
        )
    }
    render() {
        return (
            <div>
                <div className="modal fade" id="modelId" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Giỏ hàng</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Tên sản phẩm</th>
                                            <th>Hình ảnh</th>
                                            <th>Giá</th>
                                            <th>Số lượng</th>
                                            <th>Thành tiền</th>
                                            <th>Hành động</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.renderDetailCarts() || ''}
                                    </tbody>
                                </table>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        cartPhone: state.stateCartPhone.cartPhones
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleOnClickDelPhone: (payload) => {
            const action = {
                type: "DEL_PHONE",
                payload,
            }
            dispatch(action)
        },
        handleOnClickChangeCount: (id, payload) => {
            const phone = {
                id,
                count: payload,
            }
            const action = {
                type: "CHANGE_COUNT",
                phone,
            }
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartPhone)
