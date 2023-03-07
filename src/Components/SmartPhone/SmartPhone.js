import React, { Component } from 'react'

import CartPhone from './CartPhone/CartPhone'
import DetailPhone from './DetailPhone/DetailPhone'
import ListPhone from './ListPhones/ListPhone'


const dataPhones = [
    { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg" },
    { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./img/meizuphone.jpg" },
    { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/applephone.jpg" }
]

export default class extends Component {
    state = {
        phone: { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg" },
        cartPhones: [
        ]
        ,
    }

    selectDetail = (id) => {
        const phoneSelect = dataPhones && dataPhones.length &&
            dataPhones.find((phone) => {
                return phone.maSP === id
            })

        this.setState({
            ...this.state,
            phone: {
                ...phoneSelect
            }
        })
    }
    addPhone = (phone) => {
        const { maSP, tenSP, hinhAnh, giaBan } = phone
        const newPhone = {
            maSP,
            tenSP,
            hinhAnh,
            giaBan,
            count: 1,
        }

        const idx = this.state.cartPhones.findIndex(item => item.maSP === newPhone.maSP)

        if (idx === -1) {
            this.setState({
                ...this.state,
                cartPhones: [
                    ...this.state.cartPhones,
                    newPhone,
                ]
            })
        } else {
            const newCartPhones = this.state.cartPhones;
            newCartPhones[idx].count += 1;

            console.log(newCartPhones);

            this.setState({
                ...this.state,
                cartPhones: [
                    ...newCartPhones
                ]
            }, () => {
                console.log(this.state.cartPhones)
            })
        }
    }

    delPhone = (id) => {
        const newCartPhones = this.state.cartPhones.filter(item => item.maSP !== id)

        this.setState({
            ...this.state,
            cartPhones: [
                ...newCartPhones,
            ]
        })
    }

    getTotalCart = () => {
        const { cartPhones } = this.state;
        return cartPhones && cartPhones.length && cartPhones.reduce((acc, cur) => {
            return acc + cur.count
        }, 0)
    }

    changeCount = (id, flag) => {

        const { cartPhones } = this.state;

        let newCartPhones = []

        cartPhones && cartPhones.length && cartPhones.forEach(item => {
            if (item.maSP === id) {
                if (flag) {
                    item.count += 1;
                } else {
                    item.count += -1;
                }
            }
            newCartPhones = [...newCartPhones, item]
        })

        this.setState({
            ...this.state,
            cartPhones: [
                ...newCartPhones
            ]
        })

    }

    render() {
        return (
            <div>
                <h2 className='text-center mb-5'>CỬA HÀNG ĐT</h2>
                <div>({this.getTotalCart()})<i className="fa fa-cart-plus" aria-hidden="true"></i></div>
                <CartPhone data={this.state.cartPhones} delPhone={this.delPhone} changeCount={this.changeCount} />
                <ListPhone data={dataPhones} selectDetail={this.selectDetail} addPhone={this.addPhone} />
                <DetailPhone data={this.state.phone} />
            </div>
        )
    }
}
