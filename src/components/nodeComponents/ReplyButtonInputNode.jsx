import React from 'react'
import EditDeleteMove from '../../shared/EditDeleteMove';

const ReplyButtonInputNode = ({ id, data, selected }) => {

    let headerText = data.label[0]?.headerTextLabel
    let bodyText = data.label[0]?.bodyTextLabel 
    let footerText = data.label[0]?.footerTextLabel
    let listBtnText = data.label[0]?.listBtnTextLabel
    let listSectionTitle = data.label[0]?.listSection[0].listSectiontitle 

    return (
        <div className='flex gap-[2px] '>
            <div className='p-3 !border-[1px] bg-white w-full rounded-sm min-w-[150px]'
                style={{ border: (!bodyText || !listBtnText || !listSectionTitle) && selected == false ? "1px solid red" : "1px solid #333" }}
            >
                <div class="bot-action-preview__header flex items-center w-60 gap-2 h-14">
                    <div>
                        <div class="bepo-2-tooltip__container _15b205j_2271_1 _15b205j_2271_2"><svg width="32px" height="32px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="bepo-pictogram-svg _2bvj2j0 preview-action-icon" z="1"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.2 16.002C18.3518 16.002 17.5384 16.3389 16.9386 16.9386C16.3389 17.5384 16.002 18.3518 16.002 19.2C16.002 20.0481 16.3389 20.8615 16.9386 21.4613C17.5384 22.061 18.3518 22.398 19.2 22.398H38.4C39.2481 22.398 40.0615 22.061 40.6613 21.4613C41.261 20.8615 41.598 20.0481 41.598 19.2C41.598 18.3518 41.261 17.5384 40.6613 16.9386C40.0615 16.3389 39.2481 16.002 38.4 16.002H19.2ZM18.0672 18.0672C18.3676 17.7667 18.7751 17.598 19.2 17.598H38.4C38.8248 17.598 39.2323 17.7667 39.5327 18.0672C39.8332 18.3676 40.002 18.7751 40.002 19.2C40.002 19.6248 39.8332 20.0323 39.5327 20.3327C39.2323 20.6332 38.8248 20.802 38.4 20.802H19.2C18.7751 20.802 18.3676 20.6332 18.0672 20.3327C17.7667 20.0323 17.598 19.6248 17.598 19.2C17.598 18.7751 17.7667 18.3676 18.0672 18.0672Z" fill="#FC6423" class="bepo-2-pictogram--color-secondary" data-darkreader-inline-fill=""></path><path d="M10.2239 16.0634C9.6035 15.94 8.96049 16.0033 8.37613 16.2454C7.79177 16.4874 7.29232 16.8973 6.94092 17.4232C6.58951 17.9491 6.40195 18.5675 6.40195 19.2C6.40195 20.0481 6.73889 20.8615 7.33863 21.4613C7.93837 22.061 8.75179 22.398 9.59995 22.398C10.2325 22.398 10.8508 22.2104 11.3767 21.859C11.9026 21.5076 12.3125 21.0081 12.5545 20.4238C12.7966 19.8394 12.8599 19.1964 12.7365 18.5761C12.6131 17.9557 12.3085 17.3859 11.8613 16.9386C11.414 16.4914 10.8442 16.1868 10.2239 16.0634Z" fill="#FC6423" class="bepo-2-pictogram--color-secondary" data-darkreader-inline-fill=""></path><path fill-rule="evenodd" clip-rule="evenodd" d="M19.2 6.40186C18.3518 6.40186 17.5384 6.73879 16.9386 7.33853C16.3389 7.93827 16.002 8.75169 16.002 9.59986C16.002 10.448 16.3389 11.2614 16.9386 11.8612C17.5384 12.4609 18.3518 12.7979 19.2 12.7979H38.4C39.2481 12.7979 40.0615 12.4609 40.6613 11.8612C41.261 11.2614 41.598 10.448 41.598 9.59986C41.598 8.75169 41.261 7.93827 40.6613 7.33853C40.0615 6.73879 39.2481 6.40186 38.4 6.40186H19.2ZM18.0672 8.46707C18.3676 8.16664 18.7751 7.99786 19.2 7.99786H38.4C38.8248 7.99786 39.2323 8.16664 39.5327 8.46707C39.8332 8.7675 40.002 9.17498 40.002 9.59986C40.002 10.0247 39.8332 10.4322 39.5327 10.7326C39.2323 11.0331 38.8248 11.2019 38.4 11.2019H19.2C18.7751 11.2019 18.3676 11.0331 18.0672 10.7326C17.7667 10.4322 17.598 10.0247 17.598 9.59986C17.598 9.17498 17.7667 8.7675 18.0672 8.46707Z" fill="#1B1B1A" class="bepo-2-pictogram--color-primary" data-darkreader-inline-fill=""></path><path fill-rule="evenodd" clip-rule="evenodd" d="M19.2 25.6019C18.3518 25.6019 17.5384 25.9388 16.9386 26.5385C16.3389 27.1383 16.002 27.9517 16.002 28.7999C16.002 29.648 16.3389 30.4614 16.9386 31.0612C17.5384 31.6609 18.3518 31.9979 19.2 31.9979H38.4C39.2481 31.9979 40.0615 31.6609 40.6613 31.0612C41.261 30.4614 41.598 29.648 41.598 28.7999C41.598 27.9517 41.261 27.1383 40.6613 26.5385C40.0615 25.9388 39.2481 25.6019 38.4 25.6019H19.2ZM18.0672 27.6671C18.3676 27.3666 18.7751 27.1979 19.2 27.1979H38.4C38.8248 27.1979 39.2323 27.3666 39.5327 27.6671C39.8332 27.9675 40.002 28.375 40.002 28.7999C40.002 29.2247 39.8332 29.6322 39.5327 29.9326C39.2323 30.2331 38.8248 30.4019 38.4 30.4019H19.2C18.7751 30.4019 18.3676 30.2331 18.0672 29.9326C17.7667 29.6322 17.598 29.2247 17.598 28.7999C17.598 28.375 17.7667 27.9675 18.0672 27.6671Z" fill="#1B1B1A" class="bepo-2-pictogram--color-primary" data-darkreader-inline-fill=""></path><path fill-rule="evenodd" clip-rule="evenodd" d="M8.37613 6.64529C8.96049 6.40324 9.6035 6.33991 10.2239 6.46331C10.8442 6.5867 11.414 6.89128 11.8613 7.33853C12.3085 7.78578 12.6131 8.35561 12.7365 8.97596C12.8599 9.59631 12.7966 10.2393 12.5545 10.8237C12.3125 11.408 11.9026 11.9075 11.3767 12.2589C10.8508 12.6103 10.2325 12.7979 9.59995 12.7979C8.75179 12.7979 7.93837 12.4609 7.33863 11.8612C6.73889 11.2614 6.40195 10.448 6.40195 9.59986C6.40195 8.96735 6.58951 8.34905 6.94092 7.82314C7.29232 7.29724 7.79177 6.88734 8.37613 6.64529ZM9.91249 8.02864C9.60173 7.96683 9.27962 7.99855 8.9869 8.1198C8.69417 8.24105 8.44397 8.44639 8.26794 8.70983C8.09191 8.97328 7.99795 9.28301 7.99795 9.59986C7.99795 10.0247 8.16674 10.4322 8.46717 10.7326C8.7676 11.0331 9.17508 11.2019 9.59995 11.2019C9.9168 11.2019 10.2265 11.1079 10.49 10.9319C10.7534 10.7558 10.9588 10.5056 11.08 10.2129C11.2013 9.92019 11.233 9.59808 11.1712 9.28732C11.1094 8.97657 10.9568 8.69112 10.7327 8.46707C10.5087 8.24303 10.2232 8.09045 9.91249 8.02864Z" fill="#1B1B1A" class="bepo-2-pictogram--color-primary" data-darkreader-inline-fill=""></path><path fill-rule="evenodd" clip-rule="evenodd" d="M10.2239 25.6633C9.6035 25.5399 8.96049 25.6032 8.37613 25.8453C7.79178 26.0873 7.29232 26.4972 6.94092 27.0231C6.58951 27.5491 6.40195 28.1674 6.40195 28.7999C6.40195 29.648 6.73889 30.4614 7.33863 31.0612C7.93837 31.6609 8.75179 31.9979 9.59995 31.9979C10.2325 31.9979 10.8508 31.8103 11.3767 31.4589C11.9026 31.1075 12.3125 30.608 12.5545 30.0237C12.7966 29.4393 12.8599 28.7963 12.7365 28.176C12.6131 27.5556 12.3085 26.9858 11.8613 26.5385C11.414 26.0913 10.8442 25.7867 10.2239 25.6633ZM8.9869 27.3198C9.27962 27.1986 9.60173 27.1668 9.91249 27.2286C10.2232 27.2905 10.5087 27.443 10.7327 27.6671C10.9568 27.8911 11.1094 28.1766 11.1712 28.4873C11.233 28.7981 11.2013 29.1202 11.08 29.4129C10.9588 29.7056 10.7534 29.9558 10.49 30.1319C10.2265 30.3079 9.9168 30.4019 9.59995 30.4019C9.17508 30.4019 8.7676 30.2331 8.46717 29.9326C8.16674 29.6322 7.99795 29.2247 7.99795 28.7999C7.99795 28.483 8.09191 28.1733 8.26794 27.9098C8.44397 27.6464 8.69417 27.4411 8.9869 27.3198Z" fill="#1B1B1A" class="bepo-2-pictogram--color-primary" data-darkreader-inline-fill="" ></path><path fill-rule="evenodd" clip-rule="evenodd" d="M16.9386 36.1385C17.5384 35.5388 18.3518 35.2019 19.2 35.2019H38.4C39.2481 35.2019 40.0615 35.5388 40.6613 36.1385C41.261 36.7383 41.598 37.5517 41.598 38.3999C41.598 39.248 41.261 40.0614 40.6613 40.6612C40.0615 41.2609 39.2481 41.5979 38.4 41.5979H19.2C18.3518 41.5979 17.5384 41.2609 16.9386 40.6612C16.3389 40.0614 16.002 39.248 16.002 38.3999C16.002 37.5517 16.3389 36.7383 16.9386 36.1385ZM19.2 36.7979C18.7751 36.7979 18.3676 36.9666 18.0672 37.2671C17.7667 37.5675 17.598 37.975 17.598 38.3999C17.598 38.8247 17.7667 39.2322 18.0672 39.5326C18.3676 39.8331 18.7751 40.0019 19.2 40.0019H38.4C38.8248 40.0019 39.2323 39.8331 39.5327 39.5326C39.8332 39.2322 40.002 38.8247 40.002 38.3999C40.002 37.975 39.8332 37.5675 39.5327 37.2671C39.2323 36.9666 38.8248 36.7979 38.4 36.7979H19.2Z" fill="#1B1B1A" class="bepo-2-pictogram--color-primary" data-darkreader-inline-fill="" ></path><path fill-rule="evenodd" clip-rule="evenodd" d="M10.2239 35.2633C9.6035 35.1399 8.96049 35.2032 8.37613 35.4453C7.79178 35.6873 7.29232 36.0972 6.94092 36.6231C6.58951 37.1491 6.40195 37.7674 6.40195 38.3999C6.40195 39.248 6.73889 40.0614 7.33863 40.6612C7.93837 41.2609 8.75179 41.5979 9.59995 41.5979C10.2325 41.5979 10.8508 41.4103 11.3767 41.0589C11.9026 40.7075 12.3125 40.208 12.5545 39.6237C12.7966 39.0393 12.8599 38.3963 12.7365 37.776C12.6131 37.1556 12.3085 36.5858 11.8613 36.1385C11.414 35.6913 10.8442 35.3867 10.2239 35.2633ZM8.9869 36.9198C9.27962 36.7986 9.60173 36.7668 9.91249 36.8286C10.2232 36.8905 10.5087 37.043 10.7327 37.2671C10.9568 37.4911 11.1094 37.7766 11.1712 38.0873C11.233 38.3981 11.2013 38.7202 11.08 39.0129C10.9588 39.3056 10.7534 39.5558 10.49 39.7319C10.2265 39.9079 9.9168 40.0019 9.59995 40.0019C9.17508 40.0019 8.7676 39.8331 8.46717 39.5326C8.16674 39.2322 7.99795 38.8247 7.99795 38.3999C7.99795 38.083 8.09191 37.7733 8.26794 37.5098C8.44397 37.2464 8.69417 37.0411 8.9869 36.9198Z" fill="#1B1B1A" class="bepo-2-pictogram--color-primary" data-darkreader-inline-fill=""></path></svg></div>
                    </div>
                    <div className='font-semibold'>Reply Buttons</div>

                </div>
            </div>

            {selected &&
                <EditDeleteMove id={id} />
            }

        </div>

    )
}

export default ReplyButtonInputNode