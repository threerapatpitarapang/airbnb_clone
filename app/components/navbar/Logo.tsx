"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useCallback } from "react";

const Logo = () => {
    const router = useRouter();

  const handleClick = useCallback(() => {
    router.push("/");
  }, [router]);
  
  return (
    <div className="mr-5">
      <Image
        onClick={handleClick}
        className="hidden md:block cursor-pointer"
        src="/images/logo.png"
        height="100"
        width="100"
        alt="Logo"
      />
    </div>
  );
};

export default Logo;
