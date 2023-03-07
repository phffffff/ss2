import React, { Component } from 'react';
import ItemPhone from './ItemPhone/ItemPhone';

import { connect } from 'react-redux'

class ListPhone extends Component {

    renderItemPhone = (dataPhones) => {

        return dataPhones && dataPhones.length &&
            dataPhones.map((data) => {
                return (
                    <div className='col col-4' key={data.maSP}>
                        <ItemPhone
                            data={data}
                        />
                    </div>

                )
            })
    }

    render() {
        const { cartPhone } = this.props;

        return (
            <div className='container'>
                <div className='row'>
                    {this.renderItemPhone(cartPhone)}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cartPhone: state.stateCartPhone.listPhone
    }
}

export default connect(mapStateToProps)(ListPhone)



