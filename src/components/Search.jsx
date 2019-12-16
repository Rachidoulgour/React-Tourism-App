import React from 'react';
import {DatePicker} from 'antd'

export default function Search(){
    return(
        <div>
            <div>
                Aeropuerto de salida
            </div>
            <div>
                Aeropuerto de llegada
            </div>
            <div>
                Fecha de salida: <DatePicker/>
            </div>
        </div>
    )
}