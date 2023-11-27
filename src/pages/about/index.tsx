import { usePathname } from "next/navigation";
import { useState } from "react";

const index = () => {

  const [previous, setPreviousSwiper] = useState<any>(null);

  const pathname = usePathname();
  console.log(pathname);
  if( pathname === "/about"){
    console.log("about page");
  }


  return (
    <div>
      <h2 className={pathname === "/about" ? "show" : "hide"}>about</h2>
      <button disabled={pathname ? false : false}>Click</button>
      <h2>about</h2>
    </div>
  );
};

export default index;
