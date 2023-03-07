import React, { Component } from 'react'
import { connect } from 'react-redux'

class XiNgau extends Component {
    render() {
        const { xiNgaus } = this.props
        return (
            <div>
                {xiNgaus && xiNgaus.length && xiNgaus.map((item, idx) => {
                    return (
                        <img key={idx} className='p-2' style={{
                            width: "50px",
                            height: '50px'
                        }} src={item.img} />
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        xiNgaus: state.stateTaiXiu.xiNgaus,
    }
}

export default connect(mapStateToProps)(XiNgau)