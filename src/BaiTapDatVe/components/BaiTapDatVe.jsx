import React, { Component } from 'react'
import '../css/BaiTapBookingTicket.css'
import DanhSachGhe from './DanhSachGhe'
import ThongTinDatGhe from './ThongTinDatGhe'

export default class BaiTapDatVe extends Component {
   render() {
      return (
         <div className='container-fluid bookingMovie text-light'>
            <div className="row">
               <div className="col-8 text-center">
                  <h1>ĐẶT VÉ XEM PHIM CYBERLEARN.VN</h1>
                  <h3>Màn hình</h3>
                  <div className='screen mb-3'></div>
                  <DanhSachGhe />
               </div>
               <div className="col-4">
                  <ThongTinDatGhe />
               </div>
            </div>
         </div>
      )
   }
}
