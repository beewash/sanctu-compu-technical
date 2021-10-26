import React from 'react'

function Button({button, filter}) {
    return (
        <div id="filter" className="buttons w-full flex flex-wrap flex-row space-x-4 space-y-4 mb-8 items-end">
            {
                button.map((cat, i)=>{
                    return <button type="button" key={cat} onClick={()=> filter(cat)} className="btn h-8 w-max py-1 px-4 font-medium capitalize text-black text-sm border-black border-2 rounded-full hover:bg-black focus:bg-black hover:text-white focus:text-white">{cat}</button>
                })
            }
        </div>
    )
}

export default Button