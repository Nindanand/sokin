import Image from "next/image";
import { useState } from "react";
import MapContainer from "components/elements/MapContainer";
import Draggable from "react-draggable";
import { motion, AnimatePresence } from "framer-motion";
import Button from "components/elements/Button";

const Order = () => {
  const [statusOrder, setStatusOrder] = useState("Sedang menuju ke Restoran");

  return (
    <div>
      <div className="h-25 w-full my-5 px-5">
        <div className="flex items-center">
          <Image
            src={"/images/icons/left-arrow.svg"}
            alt="plus-icon"
            width={26}
            height={26}
          />
          <h2 className="text-3xl font-semibold text-gray-600 ml-5">
            {statusOrder}
          </h2>
        </div>
        <div className="flex my-5 mx-1 justify-between">
          <Image
            src={"/images/icons/Location.svg"}
            width={23}
            height={35}
            alt={""}
          />
          <div>
            <p className="text-base font-semibold text-gray-700">Tempat</p>
            <h3 className="text-lg font-bold">McDonalds cabang Kaliurang</h3>
          </div>
          <div>
            <p className="text-base font-semibold">Estimasi</p>
            <h3 className="text-lg text-gray-500 font-semibold">20 mnt</h3>
          </div>
        </div>
      </div>
      <div className="h-[400px]">
        <MapContainer />
      </div>
      <Drag />
    </div>
  );
};

export default Order;

const Drag = () => {
  const [isDragged, setIsDragged] = useState(true);
  const [dragPosition, setDragPosition] = useState({ x: 0, y: 0 });

  const handleDrag = (e: any, ui: any) => {
    if (ui.y >= -400 && ui.y <= 30) {
      setIsDragged(true);
      setDragPosition({ x: 0, y: ui.y });
    } else {
      setIsDragged(false);
    }
  };

  const handleLoremDrag = (e: any, ui: any) => {
    if (ui.y >= 0 && ui.y <= 0) {
      setIsDragged(true);
    } else {
      setIsDragged(false);
    }
  };

  return (
    <div className="relative">
      <Draggable
        axis="y"
        onDrag={handleDrag}
        position={dragPosition}
        bounds={{ top: -400, bottom: 0 }}
      >
        <div className="bg-white rounded-t-3xl flex flex-col justify-center z-30 items-center absolute bottom-30 left-0 right-0 cursor-pointer">
          <div className="w-24 h-3 bg-c-orange-400 rounded-full my-2 z-40"></div>

          {/* The content */}
          <AnimatePresence>
            {isDragged && (
              <motion.div
                className="w-full"
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                exit={{ height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Draggable
                  axis="y"
                  onDrag={handleLoremDrag}
                  bounds={{ top: 0, bottom: 0 }}
                >
                  <div>
                    <div className="p-4">
                      <div className="flex items-center justify-center">
                        <Image
                          src={"/images/driver/order/status1.svg"}
                          width={283}
                          height={32}
                          alt={""}
                        />
                      </div>
                      <div className="flex justify-center gap-12 text-sm pr-4 font-semibold mt-1">
                        <p className="text-c-orange-800">Ambil Makanan</p>
                        <p className="text-c-orange-400">Antar Makanan</p>
                        <p className="text-c-orange-400">Selesai</p>
                      </div>
                    </div>
                    <div className="w-full h-[1px] bg-c-orange-800"></div>
                    <div className="flex h-full w-full items-center justify-between px-6 my-3">
                      <div className="">
                        <p className="font-bold">Pemesan</p>
                        <p>Muhammad Irfan</p>
                      </div>
                      <div className="flex rounded-full bg-[#FFF0E0] w-16 px-1 h-7 drop-shadow-lg items-center justify-center gap-2 drop-shadow-[#FE8304]/20">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.29096 1.51217C8.5488 0.829277 9.52137 0.829277 9.77921 1.51217L11.4426 6.15141C11.5589 6.45948 11.8554 6.66358 12.1867 6.66358H16.2739C17.0286 6.66358 17.3583 7.61045 16.7649 8.07356L13.8561 10.709C13.5883 10.918 13.4844 11.2733 13.5977 11.5923L14.6596 16.1259C14.9182 16.8534 14.0804 17.4793 13.4484 17.0308L9.49702 14.5073C9.22069 14.3113 8.84947 14.3113 8.57315 14.5073L4.62186 17.0308C3.98976 17.4793 3.152 16.8534 3.41053 16.1259L4.47245 11.5923C4.58582 11.2733 4.48188 10.918 4.21403 10.709L1.30529 8.07356C0.711831 7.61045 1.04156 6.66358 1.79628 6.66358H5.88346C6.21474 6.66358 6.51126 6.45948 6.62758 6.15141L8.29096 1.51217Z"
                            fill="#FE8304"
                            stroke="#FE8304"
                            stroke-width="0.803675"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>

                        <h2>
                          <span className="font-black">98</span>
                        </h2>
                      </div>
                    </div>
                  </div>
                  {/* <div className="w-full h-[1px] bg-c-orange-800"></div> */}
                </Draggable>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Draggable>
      <div className="absolute bottom-0">
        <Button text={"Pesanan Diambil"} />
      </div>
    </div>
  );
};