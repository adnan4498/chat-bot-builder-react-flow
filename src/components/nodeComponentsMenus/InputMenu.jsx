import React, { useEffect, useState } from 'react'
import { CheckOutlined, CloseOutlined, DoubleRightOutlined } from '@ant-design/icons'
import { useReactFlow } from '@xyflow/react'
import { useSelectedNodeContext } from '../../ContextApi/DragDropContext'
import TextArea from 'antd/es/input/TextArea'
import { Space, Switch } from 'antd'

const InputMenu = () => {

    const { selectedNode } = useSelectedNodeContext();

    let startingInputText = selectedNode[0]?.data.label == "Text send to user..." ? "" : selectedNode[0]?.data.label
    
    const [inputVal, setInputVal] = useState(startingInputText)
    const [maximumWords, setMaximumWords] = useState(0)
    
    const { updateNodeData } = useReactFlow();

    // show node text/label in input
    useEffect(() => {

        let startingInputText = selectedNode[0]?.data.label == "Text send to user..." ? "" : selectedNode[0]?.data.label

        
        setInputVal(startingInputText)
    }, [selectedNode])
    
    const handleChange = (e) => {
        setInputVal(e.target.value);
        updateNodeData(selectedNode[0]?.id, { label: e.target.value })
        let inputWordsLen = e.target.value.length
        
        setMaximumWords(inputWordsLen)
    };
    
    return (
        <>
            <div className='mt-6'>
                <div className=''>
                    <DoubleRightOutlined style={{ color: '#575755', fontSize: "18px" }} />
                </div>
            </div>

            <div className='nodes-section  mt-6'>

                <div className='flex gap-2'>
                    <div>
                        <div class="bepo-2-card__icon _1k89jp9_2271_9"><svg width="28px" height="28px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="bepo-pictogram-svg _2bvj2j0"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.5794 14.1632C14.9463 13.5949 16.4511 13.4448 17.9034 13.732C19.3556 14.0192 20.69 14.7307 21.7377 15.7765C22.7855 16.8224 23.4994 18.1555 23.7892 19.6072C24.079 21.059 23.9316 22.564 23.3657 23.932C22.7998 25.2999 21.8408 26.4692 20.6101 27.292C20.527 27.3476 20.4428 27.4014 20.3577 27.4535C20.8245 27.5757 21.2835 27.7295 21.7315 27.9142C23.0452 28.4555 24.2388 29.2515 25.2435 30.2562C26.2483 31.261 27.0442 32.4546 27.5856 33.7683C28.1268 35.0814 28.4028 36.4886 28.3979 37.9088V43.1998C28.3979 43.6406 28.0407 43.9979 27.5999 43.9979H5.31594C4.87521 43.9979 4.51794 43.6406 4.51794 43.1998V37.9093C4.51299 36.4878 4.78948 35.0794 5.33147 33.7653C5.87366 32.4507 6.6708 31.2565 7.6769 30.2516C8.683 29.2467 9.87813 28.451 11.1933 27.9104C11.6339 27.7293 12.085 27.5781 12.5436 27.4572C12.0433 27.1513 11.5796 26.7869 11.1626 26.3707C10.4675 25.6769 9.91608 24.8528 9.53984 23.9456C9.16369 23.0386 8.97003 22.0664 8.96994 21.0846C8.96742 19.6044 9.40396 18.1568 10.2243 16.9248C11.0449 15.6927 12.2125 14.7316 13.5794 14.1632ZM17.5937 15.2977C16.4513 15.0717 15.2675 15.1898 14.1921 15.6369C13.1168 16.084 12.1983 16.8401 11.5528 17.8095C10.9073 18.7788 10.5638 19.9178 10.5659 21.0824L10.5659 21.0838C10.5659 21.8561 10.7182 22.6208 11.0141 23.3342C11.3099 24.0475 11.7436 24.6955 12.2901 25.2411C12.8367 25.7867 13.4855 26.2192 14.1994 26.5138C14.9133 26.8083 15.6782 26.9592 16.4505 26.9578L16.4519 26.9578C17.6165 26.9578 18.7549 26.6124 19.7231 25.9651C20.6913 25.3179 21.4457 24.398 21.8909 23.3219C22.3361 22.2457 22.452 21.0617 22.2241 19.9197C21.9961 18.7776 21.4344 17.7288 20.6102 16.9061C19.786 16.0833 18.7362 15.5236 17.5937 15.2977ZM15.3321 28.6978C14.1208 28.692 12.9204 28.9261 11.8001 29.3866C10.6798 29.8471 9.66177 30.5249 8.80476 31.3808C7.94776 32.2368 7.26874 33.254 6.80691 34.3738C6.34507 35.4936 6.10955 36.6937 6.11393 37.905L6.11394 37.9078L6.11394 42.4018H26.8019V37.9078L26.8019 37.905C26.8063 36.6946 26.5712 35.4954 26.11 34.3764C25.6489 33.2573 24.9708 32.2406 24.115 31.3848C23.2592 30.529 22.2424 29.8509 21.1234 29.3898C20.0044 28.9286 18.8051 28.6935 17.5948 28.6978L17.5919 28.6978L15.3321 28.6978Z" fill="#1B1B1A" class="bepo-2-pictogram--color-primary"></path><path d="M21.8119 5.59734C21.7305 5.59448 21.6493 5.60842 21.5734 5.63829C21.4976 5.66816 21.4287 5.71332 21.3711 5.77096C21.3134 5.8286 21.2683 5.89748 21.2384 5.97333C21.2085 6.04918 21.1946 6.13036 21.1974 6.21183C21.1978 6.22116 21.1979 6.2305 21.1979 6.23983V9.59983C21.1979 10.0406 20.8407 10.3978 20.3999 10.3978C19.9592 10.3978 19.6019 10.0406 19.6019 9.59983V6.25226C19.5937 5.95714 19.6452 5.66334 19.7534 5.38854C19.8635 5.10891 20.03 4.85493 20.2425 4.64241C20.455 4.4299 20.709 4.2634 20.9886 4.15328C21.2634 4.04507 21.5572 3.99357 21.8524 4.00183H41.2795C41.5746 3.99357 41.8684 4.04507 42.1432 4.15328C42.4229 4.2634 42.6768 4.4299 42.8894 4.64241C43.1019 4.85493 43.2684 5.10891 43.3785 5.38854C43.4867 5.66334 43.5382 5.95713 43.5299 6.25225V22.5474C43.5382 22.8425 43.4867 23.1363 43.3785 23.4111C43.2684 23.6908 43.1019 23.9447 42.8894 24.1573C42.6768 24.3698 42.4229 24.5363 42.1432 24.6464C41.8684 24.7546 41.5746 24.8061 41.2795 24.7978H30.1319C29.6912 24.7978 29.3339 24.4406 29.3339 23.9998C29.3339 23.5591 29.6912 23.2018 30.1319 23.2018H41.2919C41.3013 23.2018 41.3106 23.202 41.3199 23.2023C41.4014 23.2052 41.4826 23.1912 41.5584 23.1614C41.6343 23.1315 41.7032 23.0864 41.7608 23.0287C41.8185 22.9711 41.8636 22.9022 41.8935 22.8263C41.9234 22.7505 41.9373 22.6693 41.9344 22.5878C41.9341 22.5785 41.9339 22.5692 41.9339 22.5598V6.23983C41.9339 6.2305 41.9341 6.22116 41.9344 6.21183C41.9373 6.13036 41.9234 6.04918 41.8935 5.97333C41.8636 5.89748 41.8185 5.8286 41.7608 5.77096C41.7032 5.71332 41.6343 5.66816 41.5584 5.63829C41.4826 5.60842 41.4014 5.59448 41.3199 5.59734C41.3106 5.59767 41.3013 5.59783 41.2919 5.59783H21.8399C21.8306 5.59783 21.8213 5.59767 21.8119 5.59734Z" fill="#FC6423" class="bepo-2-pictogram--color-secondary"></path><path d="M26.802 10.7999C26.802 10.3591 27.1592 10.0019 27.6 10.0019H37.2C37.6407 10.0019 37.998 10.3591 37.998 10.7999C37.998 11.2406 37.6407 11.5979 37.2 11.5979H27.6C27.1592 11.5979 26.802 11.2406 26.802 10.7999Z" fill="#FC6423" class="bepo-2-pictogram--color-secondary"></path><path d="M27.6 16.0019C27.1592 16.0019 26.802 16.3591 26.802 16.7999C26.802 17.2406 27.1592 17.5979 27.6 17.5979H37.2C37.6407 17.5979 37.998 17.2406 37.998 16.7999C37.998 16.3591 37.6407 16.0019 37.2 16.0019H27.6Z" fill="#FC6423" class="bepo-2-pictogram--color-secondary"></path></svg>
                        </div>
                    </div>
                    <div className='text-xl font-semibold'>
                        <h2>Send Text</h2>
                    </div>
                </div>
            </div>

            <div className='text-xs text-gray-500 mt-6'>
                <p>
                    Chatbot sends a message to the user. You can insert a placeholder for an attribute by clicking on the attribute icon.
                </p>
            </div>

            <div className="relative font-medium text-xs text-black mt-8 flex justify-between">
                <div className='pl-2'>
                    1
                </div>
                <div className='text-[#2d7595]'>
                    + ADD VARIATION
                </div>
                <span className="absolute left-[-5px] z-50 bottom-[-10px] w-[10%] h-[1px] bg-[#22997f]"></span>
                <span className="absolute left-[-5px] z-10 bottom-[-10px] w-full h-[1px] bg-gray-600"></span>
            </div>

            <div className='nodes-section mt-6 '>
                <div className='text-xs my-[3px] flex justify-between'>
                    <div className=''>
                        Message 1
                    </div>
                    <div>
                        {maximumWords} / 4096
                    </div>
                </div>
                <div className='w-full'>
                    <div>
                        {/* <input
                            type="text"
                            onChange={handleChange}
                            value={inputVal}
                            className='w-full h-32 border-[1px] border-black'
                        /> */}

                        <TextArea rows={6} onChange={handleChange} value={inputVal} />
                    </div>

                    {/* <div>
                        <button className='text-white text-sm bg-green-800 border-2 border-black rounded-lg px-2 py-2' onClick={handleSubmit}>Submit</button>
                    </div> */}
                </div>

                <div className='flex items-center gap-4 my-2'>

                    <div>
                        <Space direction="vertical">
                            <Switch
                                checkedChildren={<CheckOutlined />}
                                unCheckedChildren={<CloseOutlined />}
                                defaultChecked
                                size='small'
                            />
                        </Space>
                    </div>
                    <div className='flex items-center gap-2 text-xs pt-[2px]'>
                        <div>
                            Link preview
                        </div>
                        <div>
                            <div class="bepo-2-tooltip__container _15b205j_2271_1 _15b205j_2271_2"><svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="bepo-icon-svg _1ixx0vi0" aria-disabled="false"><path d="M10.4615 11.2308C10.4615 10.8059 10.8059 10.4615 11.2308 10.4615H12C12.4248 10.4615 12.7692 10.8059 12.7692 11.2308V15.8462C13.1941 15.8462 13.5385 16.1906 13.5385 16.6154C13.5385 17.0402 13.1941 17.3846 12.7692 17.3846H12C11.5752 17.3846 11.2308 17.0402 11.2308 16.6154V12C10.8059 12 10.4615 11.6556 10.4615 11.2308Z" fill="var(--theme-color-icon, #545452)" data-darkreader-inline-fill="" ></path><path d="M12.9615 7.76923C12.9615 8.40648 12.4449 8.92308 11.8077 8.92308C11.1704 8.92308 10.6538 8.40648 10.6538 7.76923C10.6538 7.13198 11.1704 6.61539 11.8077 6.61539C12.4449 6.61539 12.9615 7.13198 12.9615 7.76923Z" fill="var(--theme-color-icon, #545452)" data-darkreader-inline-fill="" ></path><path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM12 3.53846C7.32682 3.53846 3.53846 7.32682 3.53846 12C3.53846 16.6732 7.32682 20.4615 12 20.4615C16.6732 20.4615 20.4615 16.6732 20.4615 12C20.4615 7.32682 16.6732 3.53846 12 3.53846Z" fill="var(--theme-color-icon, #545452)" data-darkreader-inline-fill="" ></path></svg></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InputMenu