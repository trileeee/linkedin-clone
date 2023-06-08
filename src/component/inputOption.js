
import React from 'react';

const inputOption = ({Icon,title,color}) =>{
    const colorVariant={
        blue:'text-blue-400',
        red:'text-red-400',
        yellow:'text-yellow-400',
        purple:'text-purple-400',
        gray:'text-gray-400',
    }
    return(
        <div className='flex flex-row font-medium text-[0.9rem]  p-2 hover:bg-[whitesmoke] hover:rounded-[4px] cursor-pointer'>
            <Icon className={colorVariant[color]}/>
            <h4 className='ml-3'>{title}</h4>
        </div>
    )
}
export default inputOption;