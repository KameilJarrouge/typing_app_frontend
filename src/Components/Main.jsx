import React from 'react'
import OldTries from './OldTries'
import NewTexts from './NewTexts'

const Main = () => {
    return (
        <div className=' flex flex-col bg-cyan-600 h-[570px] m-5'>
            <div className=' flex justify-between items-center h-20 p-5 bg-cyan-400'>
                <div>Username</div>
                <button>Logo</button>
                <button>LogOut</button>
            </div>
            <div className=' flex'>
                <div className=' w-[900px] h-[503px] bg-cyan-700 f'>
                    <div className=' flex justify-center pt-5'>
                        <div className=' border-solid border-2 border-indigo-700 mr-5 p-2'>Recent Tries</div>
                        <button className='border-solid border-2 border-indigo-700 ml-5 p-2 '>All</button>
                    </div>
                    <OldTries />
                    <OldTries />
                    <OldTries />
                    <OldTries />
                    <OldTries />
                </div>
                <div className=' bg-cyan-100 w-3'></div>
                <div className=' bg-cyan-300 w-[350px]'>
                    <div className=' text-center'>
                        <div className='mr-10 ml-10 mt-4 border-solid border-2 border-indigo-600'>New Texts</div>
                        <div>
                            <button className=' mr-2 mt-4 border-solid border-2 w-32 p-2 border-indigo-600'>ALL</button>
                            <button className='ml-2 mt-4 border-solid border-2 w-32 p-2 border-indigo-600'>New</button>
                        </div>
                    </div>
                    <NewTexts />
                    <NewTexts />
                    <NewTexts />
                    <NewTexts />
                    <NewTexts />
                </div>
            </div>
        </div>
    )
}

export default Main
