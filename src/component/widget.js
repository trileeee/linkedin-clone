import { FiberManualRecord, Info } from '@mui/icons-material';
import React from 'react';

const Widget=()=>{
    const newsArticle=(heading,subtitle)=>(
        <div className='flex  hover:bg-[whitesmoke] p-3 pt-0'>
            <div className='text-[#0177b7] mr-5'>
                <FiberManualRecord className='!text-sm'/>
            </div>
            <div className='flex-1'>
                <h4 className='text-sm font-bold'>{heading}</h4>
                <p className='font-light text-gray-600'>{subtitle}</p>
            </div>
        </div>
    )

    return(
        <div className='flex flex-[0.2] position sticky top-20 bg-white rounded-xl border pb-5 flex-col h-fit   '>
            <div className='flex items-center justify-between p-3'>
                <h2 className='!text-base font-normal'>Linkedin News</h2>
                <Info></Info>
            </div>
            {newsArticle('Open Source Projects','Topic - 2100 readers')}
            {newsArticle('Job Recruiment','Share - 9040 readers')}
            {newsArticle('Skill for interview','Share - 12000 readers')}
        
        </div>
    )
}
export default Widget;