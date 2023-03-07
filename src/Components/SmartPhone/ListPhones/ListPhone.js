import React, { Component } from 'react';
import ItemPhone from './ItemPhone/ItemPhone';


export default class ListPhone extends Component {

    renderItemPhone = (dataPhones) => {

        return dataPhones && dataPhones.length &&
            dataPhones.map((data) => {
                return (
                    <div className='col col-4' key={data.maSP}>
                        <ItemPhone
                            data={data}
                            handleOnSelectDetail={this.props.selectDetail}
                            handleOnClickAddPhone={this.props.addPhone}
                        />
                    </div>

                )
            })
    }

    render() {
        const { data } = this.props

        return (
            <div className='container'>
                <div className='row'>
                    {this.renderItemPhone(data)}
                </div>
            </div>
        )
    }
}
