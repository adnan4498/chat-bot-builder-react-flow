import React from 'react'
import TextNode from '../components/nodeComponents/TextNode'
import ImageNode from '../components/nodeComponents/ImageNode'
import ResultNode from '../components/nodeComponents/ResultNode'
import { DoubleRightOutlined, InfoCircleOutlined, MoreOutlined } from '@ant-design/icons'
import DelayNode from '../components/nodeComponents/DelayNode'

const Dailogs = () => {
    return (
        // <div className="w-[21%] bg-[#fafafa] px-8 border-left-class  h-[100vh]">
        // 
        <div className=" w-[20%] h-[100vh] bg-[#fafafa] px-8 border-left-class pt-[125px] flex flex-col justify-between">
            <div>
                <div className='mt-6 flex justify-between items-center'>
                    <div className='text-xl font-semibold flex items-center gap-2'>
                        <div>
                            <h1 className=''>Dailogs</h1>
                        </div>
                        <div className=''>
                            <InfoCircleOutlined style={{ color: "#545452", fontSize: "17px " }} />
                        </div>
                    </div>

                    <div className='flex gap-2'>
                        <div class="_1l9lmtx_2271_l"><svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="bepo-icon-svg _1ixx0vi0"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.75 3.75C9.75 3.33579 10.0858 3 10.5 3H13.5C13.9142 3 14.25 3.33579 14.25 3.75C14.25 4.16421 13.9142 4.5 13.5 4.5H10.5C10.0858 4.5 9.75 4.16421 9.75 3.75Z" fill="var(--theme-color-icon, #545452)"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M9.75 20.25C9.75 19.8358 10.0858 19.5 10.5 19.5H13.5C13.9142 19.5 14.25 19.8358 14.25 20.25C14.25 20.6642 13.9142 21 13.5 21H10.5C10.0858 21 9.75 20.6642 9.75 20.25Z" fill="var(--theme-color-icon, #545452)"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M16.5 3.75C16.5 3.33579 16.8358 3 17.25 3H19.5C19.8978 3 20.2794 3.15804 20.5607 3.43934C20.842 3.72065 21 4.10218 21 4.5V6.75C21 7.16421 20.6642 7.5 20.25 7.5C19.8358 7.5 19.5 7.16421 19.5 6.75V4.5L17.25 4.5C16.8358 4.5 16.5 4.16421 16.5 3.75Z" fill="var(--theme-color-icon, #545452)"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M20.25 9.75C20.6642 9.75 21 10.0858 21 10.5V13.5C21 13.9142 20.6642 14.25 20.25 14.25C19.8358 14.25 19.5 13.9142 19.5 13.5V10.5C19.5 10.0858 19.8358 9.75 20.25 9.75Z" fill="var(--theme-color-icon, #545452)"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M20.25 16.5C20.6642 16.5 21 16.8358 21 17.25V19.5C21 19.8978 20.842 20.2794 20.5607 20.5607C20.2794 20.842 19.8978 21 19.5 21H17.25C16.8358 21 16.5 20.6642 16.5 20.25C16.5 19.8358 16.8358 19.5 17.25 19.5H19.5V17.25C19.5 16.8358 19.8358 16.5 20.25 16.5Z" fill="var(--theme-color-icon, #545452)"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M3.75 9.75C4.16421 9.75 4.5 10.0858 4.5 10.5V13.5C4.5 13.9142 4.16421 14.25 3.75 14.25C3.33579 14.25 3 13.9142 3 13.5V10.5C3 10.0858 3.33579 9.75 3.75 9.75Z" fill="var(--theme-color-icon, #545452)"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M3.75 16.5C4.16421 16.5 4.5 16.8358 4.5 17.25V19.5H6.75C7.16421 19.5 7.5 19.8358 7.5 20.25C7.5 20.6642 7.16421 21 6.75 21H4.5C4.10218 21 3.72065 20.842 3.43934 20.5607C3.15804 20.2794 3 19.8978 3 19.5V17.25C3 16.8358 3.33579 16.5 3.75 16.5Z" fill="var(--theme-color-icon, #545452)"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M3.43934 3.43934C3.72064 3.15804 4.10217 3 4.5 3H6.75C7.16421 3 7.5 3.33579 7.5 3.75C7.5 4.16421 7.16421 4.5 6.75 4.5L4.5 4.5L4.5 6.75C4.5 7.16421 4.16421 7.5 3.75 7.5C3.33579 7.5 3 7.16421 3 6.75V4.5C3 4.10217 3.15804 3.72064 3.43934 3.43934Z" fill="var(--theme-color-icon, #545452)"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 9C7.5 8.58579 7.83579 8.25 8.25 8.25H15.75C16.1642 8.25 16.5 8.58579 16.5 9C16.5 9.41421 16.1642 9.75 15.75 9.75H8.25C7.83579 9.75 7.5 9.41421 7.5 9ZM7.5 12C7.5 11.5858 7.83579 11.25 8.25 11.25H15.75C16.1642 11.25 16.5 11.5858 16.5 12C16.5 12.4142 16.1642 12.75 15.75 12.75H8.25C7.83579 12.75 7.5 12.4142 7.5 12ZM7.5 15C7.5 14.5858 7.83579 14.25 8.25 14.25H12C12.4142 14.25 12.75 14.5858 12.75 15C12.75 15.4142 12.4142 15.75 12 15.75H8.25C7.83579 15.75 7.5 15.4142 7.5 15Z" fill="var(--theme-color-icon, #545452)"></path></svg></div>
                        <div class="_1l9lmtx_2271_l"><svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="bepo-icon-svg _1ixx0vi0"><path d="M20.7973 19.8188L16.469 15.4914C17.7236 13.9852 18.3491 12.0534 18.2156 10.0978C18.0821 8.14224 17.1998 6.31339 15.7522 4.99175C14.3046 3.67011 12.4032 2.95743 10.4436 3.00197C8.48394 3.0465 6.6169 3.84483 5.23087 5.23087C3.84483 6.6169 3.0465 8.48394 3.00197 10.4436C2.95743 12.4032 3.67011 14.3046 4.99175 15.7522C6.31339 17.1998 8.14224 18.0821 10.0978 18.2156C12.0534 18.3491 13.9852 17.7236 15.4914 16.469L19.8188 20.7973C19.883 20.8616 19.9593 20.9126 20.0433 20.9473C20.1272 20.9821 20.2172 21 20.3081 21C20.3989 21 20.4889 20.9821 20.5729 20.9473C20.6568 20.9126 20.7331 20.8616 20.7973 20.7973C20.8616 20.7331 20.9126 20.6568 20.9473 20.5729C20.9821 20.4889 21 20.3989 21 20.3081C21 20.2172 20.9821 20.1272 20.9473 20.0433C20.9126 19.9593 20.8616 19.883 20.7973 19.8188ZM4.40222 10.6262C4.40222 9.39525 4.76726 8.1919 5.45116 7.16836C6.13506 6.14483 7.10712 5.34708 8.24441 4.876C9.38171 4.40492 10.6331 4.28166 11.8405 4.52182C13.0478 4.76197 14.1568 5.35475 15.0273 6.2252C15.8977 7.09564 16.4905 8.20466 16.7307 9.412C16.9708 10.6193 16.8476 11.8708 16.3765 13.0081C15.9054 14.1454 15.1077 15.1174 14.0841 15.8013C13.0606 16.4852 11.8572 16.8503 10.6262 16.8503C8.97609 16.8484 7.39405 16.1921 6.22722 15.0253C5.06038 13.8584 4.40405 12.2764 4.40222 10.6262Z" fill="var(--theme-color-icon, #545452)"></path></svg></div>
                        <div class="_1l9lmtx_2271_l"><svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="bepo-icon-svg _1ixx0vi0"><path d="M12.5143 5.24153C12.7983 4.95751 12.7983 4.49703 12.5143 4.21301C12.2302 3.929 11.7698 3.929 11.4857 4.21301L4.21301 11.4857C3.929 11.7698 3.929 12.2302 4.21301 12.5143L11.4857 19.787C11.7698 20.071 12.2302 20.071 12.5143 19.787C12.7983 19.503 12.7983 19.0425 12.5143 18.7585L5.75579 12L12.5143 5.24153Z" fill="var(--theme-color-icon, #545452)"></path><path d="M19.787 5.24153C20.071 4.95751 20.071 4.49703 19.787 4.21301C19.503 3.929 19.0425 3.929 18.7585 4.21301L11.4857 11.4857C11.2017 11.7698 11.2017 12.2302 11.4857 12.5143L18.7585 19.787C19.0425 20.071 19.503 20.071 19.787 19.787C20.071 19.503 20.071 19.0425 19.787 18.7585L13.0285 12L19.787 5.24153Z" fill="var(--theme-color-icon, #545452)"></path></svg></div>
                    </div>

                </div>

                <div className='flex items-center justify-between mt-10'>
                    <div className='text-[#545452] text-sm font-medium'>
                        Default
                    </div>

                    <div className='flex gap-4 items-center'>
                        <div>
                            <MoreOutlined style={{ fontSize: "20px" }} />
                        </div>

                        <div>
                            <div class="_1l9lmtx_2271_l"><svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="bepo-icon-svg _1ixx0vi0"><path fill-rule="evenodd" clip-rule="evenodd" d="M5 8.88889C5 9.12963 5.08659 9.33796 5.25977 9.51389L11.3848 15.7361C11.5579 15.912 11.763 16 12 16C12.237 16 12.4421 15.912 12.6152 15.7361L18.7402 9.51389C18.9134 9.33796 19 9.12963 19 8.88889C19 8.64815 18.9134 8.43982 18.7402 8.26389C18.5671 8.08796 18.362 8 18.125 8H5.875C5.63802 8 5.43294 8.08796 5.25977 8.26389C5.08659 8.43982 5 8.64815 5 8.88889Z" fill="var(--theme-color-icon, #545452)"></path></svg></div>
                        </div>
                    </div>
                </div>

                <div className='flex items-center justify-between mt-5 cursor-pointer hover:bg-[#e6f0f8] '>
                    <div className='text-[#545452] text-sm font-medium pl-4'>
                        Default
                    </div>

                    <div className=''>
                        <InfoCircleOutlined style={{ color: "#545452", fontSize: "17px " }} />
                    </div>
                </div>
            </div>

            <div>


                {/* <div className='h-full flex flex-col justify-center '> */}
                <div className='text-[#2d7595] text-[11px] text-center py-2 flex flex-col gap-4 font-semibold '>
                    <hr className='full-horizontal-line'></hr>
                    <div className=''>
                        + ADD AUTHENTICATION DIALOG
                    </div>
                    <hr className='full-horizontal-line'></hr>
                    <div>
                        + ADD SESSION EXPIRE DIALOG
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Dailogs