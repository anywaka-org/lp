import { useNavigate } from "react-router-dom";

export default function LeftArrow(onClick){
   const navigate=useNavigate()
    
    return(
        <svg onClick={()=>navigate(-1)} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.57 5.92999L3.5 12L9.57 18.07" stroke="#020317" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.4999 12H3.66992" stroke="#020317" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
}