import React, { Component } from 'react'

export default class ItemPhone extends Component {
    render() {
        const { maSP, tenSP, hinhAnh } = this.props.data;
        const { handleOnSelectDetail, handleOnClickAddPhone } = this.props;

        const phone = this.props.data

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
                        <button className='btn btn-success' onClick={() => handleOnSelectDetail(maSP)}>Xem chi tiết</button>
                        <button className='btn btn-success'
                            data-toggle="modal" data-target="#modelId"
                            onClick={() => handleOnClickAddPhone(phone)}
                        >
                            Thêm vào giỏ
                        </button>
                    </div>

                </div>
            </div>
        )
    }
}
