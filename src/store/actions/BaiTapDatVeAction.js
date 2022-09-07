import { CHON_GHE, HUY_GHE } from "../types/BaiTapDatVeType"

export const chonGheAction = (ghe) => {
   return {
      type: CHON_GHE,
      ghe
   }
}

export const huyGheAction = (ghe) =>{
   return {
      type: HUY_GHE,
      ghe
   }
}