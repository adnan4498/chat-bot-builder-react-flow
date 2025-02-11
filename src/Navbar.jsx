import { EditOutlined, MoreOutlined, WhatsAppOutlined } from '@ant-design/icons'
import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full px-10 pt-5 pb-[10px] navbar-shadow'>
      <div className='flex items-center justify-between'>
        <div>
          <div className='flex items-center gap-3'>
            <div className='pt-[2px]'>
              <WhatsAppOutlined style={{ color: "lightgreen", fontSize: "22px" }} />
            </div>
            <div className='font-semibold text-xl'>
              Testing Chatbot
            </div>

            <div>
              <EditOutlined style={{ color: "gray", fontSize: "13px" }} />
            </div>
          </div>

          <div className='flex text-xs gap-2 mt-2'>
            <div className='text-[#787876]'>
              O
            </div>
            <div className='text-[#a6a5a2]'>
              Inactive
            </div>
            <div>
              .
            </div>
            <div className='text-[#919191]'>
              Auto-saved yesterday
            </div>
          </div>
        </div>

        <div className='flex gap-2 items-center'>
          <div className='border-[1px] w-32 h-8 border-[#2d7595] text-[#2d7595] text-[10px] font-bold flex items-center justify-center'>
            <p> CLOSE</p>
          </div>
          <div className='border-[1px] w-32 h-8 border-[#2d7595] text-white bg-[#2d7595] text-xs font-semibold flex items-center justify-center'>
            <p> ACTIVATE</p>
          </div>
          <div>
            <MoreOutlined />
          </div>
        </div>
      </div>

      <hr className='full-horizontal-line my-2'></hr>

      <div className='flex justify-between items-center'>
        <div className='flex items-center gap-4 text-xs text-[#545452]'>
          <div className="relative font-semibold text-black">
            Dialogs
            <span className="absolute left-[-5px] bottom-[-10px] w-[140%]  h-[2px] bg-red-500"></span>
          </div>
          <div>
            Intents
          </div>
          <div>
            Attributes
          </div>
          <div>
            Keywords
          </div>
          <div>
            Settings
          </div>
          <div>
            Test
          </div>
        </div>

        <div className='text-[9px] text-[#2d7595] font-bold'>
          CHECK FOR ERRORS
        </div>
      </div>

    </div>
  )
}

export default Navbar
