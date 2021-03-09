import React from 'react'
import {
    
    FacebookShareButton,
    FacebookIcon,
    RedditShareButton,
    RedditIcon,
    TwitterShareButton,
    TwitterIcon,
    EmailShareButton,
    EmailIcon,
    
  } from 'react-share';



export const ShareModule=(props)=>{


return<>
<div className='flex justify-around '>
    <FacebookShareButton
            url={'https://www.facebook.com/'}
            quote={`Hi there! Check out this property: ${props.link}`}
            className="  m-1 "
          >
            <FacebookIcon size={32} round className='border border-transparent rounded-xl hover:border-gray-400' />
          </FacebookShareButton>


          <TwitterShareButton
            url={'https://twitter.com/'}
            quote={'titleThe thing you will share'}
            className=" m-1"
          >
            <TwitterIcon size={32} round  className='border border-transparent rounded-xl hover:border-gray-400'/>
          </TwitterShareButton>

          < RedditShareButton
            url={'https://twitter.com/'}
            quote={'titleThe thing you will share'}
            className=" m-1"
          >
            <RedditIcon size={32} round  className='border border-transparent rounded-xl hover:border-gray-400'/>
          </RedditShareButton>

          < EmailShareButton
            url={'https://twitter.com/'}
            quote={'titleThe thing you will share'}
            className=" m-1"
          >
            <EmailIcon size={32} round  className='border border-transparent rounded-xl hover:border-gray-400'/>
          </EmailShareButton>


    </div>
    
</>


}