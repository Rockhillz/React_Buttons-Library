import React from 'react'
import SubText from '../shared/SubText'

function Header() {
    const styles = {
        width: '100px',
        height: '100px'
    }

  return (
    <>
        <div className='flex '>
            <div>
                <img src="https://thumbs.dreamstime.com/b/remove-round-button-icon-vector-isolated-white-background-your-web-mobile-app-design-remove-round-button-logo-concept-134071087.jpg" alt="" style={styles} />
            </div>

            <div className='mt-5 ml-10'>
                <h1 className='font-bold text-3xl'>Button Library</h1>
                <SubText />

            </div>
        </div>

        <div className='border border-gray-200 mt-10 mb-10'></div>
    
    </>
  )
}

export default Header