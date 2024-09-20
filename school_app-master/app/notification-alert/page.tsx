import ButtonComponent from '@/app/components/button'
import React from 'react'

const NotificationAlert = () => {
  return (
    <>
      <div className="rounded-[40px] p-[16px] bg-white">
        <div className="border border-[#000] rounded-[40px] px-[24px] py-[16px] text-[24px] leading-[24px] font-bold">
          Notifications And Alerts
        </div>
        <div className="block lg:flex items-center justify-center gap-4 mt-5">
          <div className="w-full">
            <div className="bg-[#0000000A] rounded-[40px] px-[8px] py-[16px]">
              <h3 className="text-[16px] font-medium leading-[24px] font-roboto text-[#000000]">
                12
              </h3>
            </div>
            <p className="text-[12px] ml-4 font-medium leading-[16px] font-roboto text-[#9998A4D9]">
              User Notification
            </p>
          </div>
          <div className="w-full">
            <div className="bg-[#0000000A] rounded-[40px] px-[8px] py-[16px]">
              <h3 className="text-[16px] font-medium leading-[24px] font-roboto text-[#000000]">
                34
              </h3>
            </div>
            <p className="text-[12px] ml-4 font-medium leading-[16px] font-roboto text-[#9998A4D9]">
              Admin Alert
            </p>
          </div>
          <div className="w-full">
            <div className="bg-[#0000000A] rounded-[40px] px-[8px] py-[16px]">
              <h3 className="text-[16px] font-medium leading-[24px] font-roboto text-[#000000]">
                5 pcs
              </h3>
            </div>
            <p className="text-[12px] ml-4 font-medium leading-[16px] font-roboto text-[#9998A4D9]">
              Customization Options
            </p>
          </div>
          <div className="w-full">
            <div className="bg-[#0000000A] rounded-[40px] px-[8px] py-[16px]">
              <h3 className="text-[16px] font-medium leading-[24px] font-roboto text-[#000000]">
                5 pcs
              </h3>
            </div>
            <p className="text-[12px] ml-4 font-medium leading-[16px] font-roboto text-[#9998A4D9]">
              Max Images Allowed
            </p>
          </div>
          <div className="w-full">
            <div className="bg-[#0000000A] rounded-[40px] px-[8px] py-[16px]">
              <h3 className="text-[16px] font-medium leading-[24px] font-roboto text-[#000000]">
                $100 - $200
              </h3>
            </div>
            <p className="text-[12px] ml-4 font-medium leading-[16px] font-roboto text-[#9998A4D9]">
              User Feedback
            </p>
          </div>
        </div>
        <div className="text-end mt-6">
          <ButtonComponent ButtonName="Save" className="w-[192px] h-[50px]" />
        </div>
      </div>
    </>
  );
}

export default NotificationAlert
