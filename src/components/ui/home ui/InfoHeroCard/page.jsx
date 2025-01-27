import React from 'react';
import Image from "next/image";
import homeStaticTextEnums from "@/app/enums/static-text-enums";

function InfoHeroCard(props) {
    return (
        <div className={'w-full lg:w-11/12 mx-auto h-96 rounded-2xl bg-[#183d3d] my-10 flex flex-col md:flex-row relative overflow-hidden'}>
            <div className={'w-full lg:w-1/2 h-full flex items-center justify-center   '}>
                <div className={'w-3/4   flex flex-col gap-2 '}>
                    <span className={'flex items-center gap-2 text-[#80a1a2] text-xl'}><span
                        className={'flex w-1 h-1 rounded bg-[#ffa600]'}></span>{homeStaticTextEnums.weAcceptOrders} </span>
                    <h3 className={'text-white text-xl lg:text-3xl font-semibold'}>{homeStaticTextEnums.heroHeader}</h3>
                    <p className={'text-[#80a1a2] hidden lg:flex leading-7 px-2 border-[#0f4e50] border-r-2 text-md '}>{homeStaticTextEnums.heroText}</p>
                    <button className={'w-32 h-12 my-5 font-bold rounded-xl bg-[#a7d397] text-[#183d3d]'}>
                        {homeStaticTextEnums.restaurantInfo}
                    </button>
                </div>
                <Image src='/assets/images/leaf.svg' width={1000}
                       height={0} alt={'leaf'}
                       className={'w-20 absolute right-4 bottom-5 rotate-[200deg]'}
                />

            </div>
            <div className={'w-full lg:w-1/2 h-full  flex justify-center items-center relative  overflow-hidden'}>
                <Image src='/assets/images/pizza.webp' width={1000} height={0} alt={'heroPizza'}
                       className={' w-3/4'}
                />
                <Image src='/assets/images/leaf.svg' width={1000} height={0} alt={'sadf'}
                       className={'w-20 absolute left-0 top-5 rotate-12'}
                />

            </div>
        </div>
    );
}

export default InfoHeroCard;