import React from 'react'

const Management = () => {
  return (
    <div className='text-blue-900 bg-white py-20 space-y-10'>
        <div className='text-center text-2xl'>From Discovery to Remediation—One Unified Data Management Solution</div>
        <div className='flex justify-center space-x-2'>
            <div className='flex flex-col items-center space-y-2'> 
                <div>Discover</div>
                <div className='bg-slate-900 text-white h-18 w-52 flex justify-center items-center p-2 rounded-md shadow-md'>Data Discovery Tool</div>
            </div>
            <div className='flex flex-col items-center space-y-2'>
                <div>Analyze</div>
                <div className='bg-slate-900 text-white h-18 w-52 flex justify-center items-center p-2 rounded-md shadow-md'>File Analysis Tools</div>
            </div>
             <div className='flex flex-col items-center space-y-2'>
                <div>Classify</div>
                <div className='bg-slate-900 text-white h-18 w-52 flex justify-center items-center p-2 rounded-md shadow-md'>Classify360</div>
            </div>
             <div className='flex flex-col items-center space-y-2'>
                <div>Review</div>
                <div className='bg-slate-900 text-white h-18 w-52 flex justify-center items-center p-2 rounded-md shadow-md'>Manual Process</div>
            </div>
              <div className='flex flex-col items-center space-y-2'>
                <div>Remediate</div>
                <div className='bg-slate-900 text-white h-18 w-52 flex justify-center items-center p-2 rounded-md shadow-md'>Data Migration Software, <br/> Point DLP & AIP Solutions, <br/> Scripting, etc.</div>
            </div>
              <div className='flex flex-col items-center space-y-2'>
                <div>Automate</div>
                <div className='bg-slate-900 text-white h-18 w-52 flex justify-center items-center p-2 rounded-md shadow-md'>Classify360</div>
            </div>
            
        </div>
    </div>
  )
}

export default Management