import React from 'react';
import ProfileInput from "@/components/ui/profile ui/profile-input/ProfileInput";

import ButtonSignOut from "@/components/ui/buttons/button-sign-out"; // Import signOut from next-auth
function Page() {
    return (
        <>
            <h1 className={'text-center my-10 text-4xl text-gray-700'}>پروفایل شما</h1>
            <div className={'w-3/4 bg-white flex flex-col  mx-auto my-10 rounded-2xl p-8 '}>
                <div className={'h-12 flex justify-end'}>
                 <ButtonSignOut/>
                </div>
                 <ProfileInput />
            </div>
        </>
    );
}

export default Page;