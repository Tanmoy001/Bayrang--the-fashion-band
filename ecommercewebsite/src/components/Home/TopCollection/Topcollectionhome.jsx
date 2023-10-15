import React from 'react'
import Collection from '../../../contextapi/topcollection/Collection';
import'./topcollection.css'
function Topcollectionhome() {
    return (
        <div className='topcollectionhome'>
            <div className='title'>
                <h3>कllections</h3>
            </div>
            <div className='collectiononhome'>
            <Collection/>
            </div>
        </div>
    )
}

export default Topcollectionhome
