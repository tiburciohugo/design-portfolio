import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "./Button";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between p-4">
      <Link href={"/"}>
        <Image src={"/assets/logo.svg"} alt="logo" width={48} height={48} />
      </Link>

      {/* <Link href={'#'}> */}
        <Button bg={"bg-black"} hover={"bg-purple"} />
      {/* </Link> */}
    </div>
  );
}
