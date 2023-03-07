import React, { Component } from 'react'
import { connect } from 'react-redux'

import CartPhone from './CartPhone/CartPhone'
import DetailPhone from './DetailPhone/DetailPhone'
import ListPhone from './ListPhones/ListPhone'

class SmartPhoneRedux extends Component {
    render() {
        return (
            <div>
                <h2 className='text-center mb-5'>CỬA HÀNG ĐT</h2>
                <div>({this.props.totalCount.length})<i className="fa fa-cart-plus" aria-hidden="true"></i></div>
                <CartPhone />
                <ListPhone />
                <DetailPhone />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        totalCount: state.stateCartPhone.cartPhones
    }
}

export default connect(mapStateToProps)(SmartPhoneRedux);
