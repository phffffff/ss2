import React, { Component } from 'react'

import { connect } from 'react-redux'

class ItemPhone extends Component {
    render() {
        const { maSP, tenSP, hinhAnh } = this.props.data;
        const phone = this.props.data

        // console.log(this.props)

        return (
            <div className="card">
                <img className="card-img-top" src={hinhAnh} alt=""
                    style={{
                        objectFit: 'cover',
                        objectPosition: 'center',
                        minHeight: '100%',
                    }} />
                <div className="card-body">
                    <h4 className="card-title">{tenSP}</h4>
                    <div className='d-flex justify-content-around'>
                        <button className='btn btn-success'
                            onClick={() => this.props.handleOnClickSelectPhone(maSP)}
                        >
                            Xem chi tiết
                        </button>
                        <button className='btn btn-success'
                            data-toggle="modal" data-target="#modelId"
                            onClick={() => this.props.handleOnClickAddPhone(phone)}
                        >
                            Thêm vào giỏ
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleOnClickSelectPhone: (payload) => {
            const action = {
                type: "SELECT_PHONE",
                payload,
            }
            dispatch(action)
        },
        handleOnClickAddPhone: (payload) => {
            const phone = {
                maSP: payload.maSP,
                tenSP: payload.tenSP,
                hinhAnh: payload.hinhAnh,
                giaBan: payload.giaBan,
                count: 1
            }

            const action = {
                type: "ADD_PHONE",
                phone,
            }
            dispatch(action)
        }
    }
}



export default connect(null, mapDispatchToProps)(ItemPhone)


