import { CHON_GHE, HUY_GHE } from "../types/BaiTapDatVeType"

const stateDefault = {
   DSGheDangChon: [
      // { "soGhe": "A1", "gia": 75000, "daDat": false },
   ]
}

export const BaiTapDatVe = (state = stateDefault, action) => {
   switch (action.type) {
      case CHON_GHE: {
         let DSGheDangChonUpDate = [...state.DSGheDangChon]
         let index = DSGheDangChonUpDate.findIndex(gheChon => gheChon.soGhe === action.ghe.soGhe)
         if (index === -1) {
            DSGheDangChonUpDate.push(action.ghe)
         } else {
            DSGheDangChonUpDate.splice(index, 1)
         }
         state.DSGheDangChon = DSGheDangChonUpDate
         return {...state}
      }
      case HUY_GHE:{
         let DSGheDangChonUpDate = [...state.DSGheDangChon].filter(gheChon => gheChon.soGhe !== action.ghe.soGhe)
         state.DSGheDangChon = DSGheDangChonUpDate
         return { ...state }
      }
      default: return { ...state }
   }
}