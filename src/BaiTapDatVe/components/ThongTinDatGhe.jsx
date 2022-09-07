import React, { Component } from 'react'
import { connect } from 'react-redux'
import { huyGheAction } from '../../store/actions/BaiTapDatVeAction'

class ThongTinDatGhe extends Component {
   render() {
      const { DSGheDangChon, huyGhe } = this.props
      return (
         <div>
            <h2 className='text-center mb-5'>DANH SÁCH GHẾ BẠN CHỌN</h2>
            <button className='gheDuocChon'></button> <span style={{ fontSize: '20px' }}>Ghế đã đặt</span> <br />
            <button className='gheDangChon'></button> <span style={{ fontSize: '20px' }}>Ghế đang chọn</span> <br />
            <button className='ghe m-0'></button> <span style={{ fontSize: '20px' }}>Ghế chưa đặt</span>
            <table className='table text-light mt-3' border={1}>
               <thead>
                  <tr>
                     <th className='py-1'>Số ghế</th>
                     <th className='py-1'>Giá (VNĐ)</th>
                     <th className='py-1'>Huỷ</th>
                  </tr>
               </thead>
               <tbody className='text-warning'>
                  {DSGheDangChon.map((ghe, index) => {
                     return <tr key={index}>
                        <th className='py-1'>{ghe.soGhe}</th>
                        <th className='py-1'>{ghe.gia.toLocaleString()}</th>
                        <th className='py-1'>
                           <button className='text-danger' style={{ background: 'none', border: 'none' }} onClick={() => huyGhe(ghe)}>X</button>
                        </th>
                     </tr>
                  })}
               </tbody>
               <tfoot>
                  <tr>
                     <th className='py-1'>Tổng tiền</th>
                     <th className='py-1 text-warning'>{DSGheDangChon.reduce((tongTien, ghe) => {
                        return tongTien += ghe.gia
                     }, 0).toLocaleString()}</th>
                     <th></th>
                  </tr>
               </tfoot>
            </table>

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
      huyGhe: (ghe) => dispatch(huyGheAction(ghe))
   }
}


export default connect(mapStateToProps, mapDispatchToProps)(ThongTinDatGhe)