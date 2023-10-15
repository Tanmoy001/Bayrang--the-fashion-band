import React from 'react'
import Collection from '../../../contextapi/topcollection/Collection'
import './spectacles.css'

function Spectacles() {
    return (
        <div className='Spectacles'>
            <div className='title'>
                <h3>Spectacles</h3>
            </div>
            <div className='continer Spectacles_collection'>
            <Collection/>
            </div>
            
        </div>
    )
}

export default Spectacles
