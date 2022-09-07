import React, { Component } from 'react'
import { connect } from 'react-redux'
import { chonGheAction } from '../../store/actions/BaiTapDatVeAction'
import dataGhe from '../data/danhSachGhe.json'

class DanhSachGhe extends Component {
   render() {
      const { DSGheDangChon, chonGhe } = this.props
      return (
         <div style={{ marginRight: '80px' }}>
            {dataGhe.map((hangGhe, index) => {
               if (index === 0) {
                  return <div key={index} className='mb-2'>
                     <h3 style={{ display: 'inline-block', width: '50px' }}> {hangGhe.hang}</h3>
                     {hangGhe.danhSachGhe.map((ghe, index) => {
                        return <h3 key={index} className='rowNumber' style={{ display: 'inline-block' }}>{ghe.soGhe}</h3>
                     })}
                  </div>
               } else {
                  return <div key={index} className='d-flex justify-content-center'>
                     <h3 style={{ display: 'inline-block', width: '50px', color: 'yellow' }}> {hangGhe.hang}</h3>
                     {hangGhe.danhSachGhe.map((ghe, index) => {
                        // xử lý ghế đã đặt
                        let gheDaDat = ''
                        let disabled = false
                        if (ghe.daDat) {
                           gheDaDat = 'gheDuocChon'
                           disabled = true
                        }
                        // xử lý ghế đang chọn
                        let gheDangChon = ''
                        let indexGhe = DSGheDangChon.findIndex(gheChon => gheChon.soGhe === ghe.soGhe)
                        if (indexGhe !== -1) {
                           gheDangChon = 'gheDangChon'
                        }

                        return <button key={index} disabled={disabled} className={`ghe ${gheDaDat} ${gheDangChon}`} onClick={() => chonGhe(ghe)}>{ghe.soGhe}</button>
                     })}
                  </div>
               }
            })}
         </div>
      )
   }
}

const mapStateToProps = (rootReducer) => {
   return {
      DSGheDangChon: rootReducer.BaiTapDatVe.DSGheDangChon
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      chonGhe: (ghe) => dispatch(chonGheAction(ghe))
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(DanhSachGhe)