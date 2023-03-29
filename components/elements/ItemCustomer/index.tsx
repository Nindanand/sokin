import Image from "next/image";
import React, { useState } from "react";
import Button from "../Button";

const ItemCustomer: React.FC<{
  title: string;
  price: number;
  description: string;
  image?: string;
  className?: string;
  onAddMenu?: () => void;
}> = ({
  title,
  price,
  image,
  className,
  description,
  onAddMenu = () => {},
}): JSX.Element => {
  const [count, setCount] = useState(0);
  return (
    <div
      className={`${className} flex flex-col items-center rounded-2xl p-2 h-64 shadow-[-2px_1px_4px_2px_rgb(300,75,0,0.13)]`}
    >
      <Image
        src={image || `https://cdn-icons-png.flaticon.com/512/1205/1205761.png`}
        width={147}
        height={147}
        alt={""}
        className="rounded-xl"
      />
      <div className="mt-3">
        <h3 className="font-bold">{title}</h3>
        <p className="text-sm font-semibold">Rp{price}</p>
        <Button text="Tambah" size="very small" className="mt-3" onClickHandler={() => onAddMenu(title, price, image, description)}/>
      </div>
    </div>
  );
};

export default ItemCustomer;
