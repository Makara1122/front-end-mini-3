import React from "react";
import {Image} from "@nextui-org/react";

export default function ImageFalbackComponent() {
  return (
    <Image
     isZoomed
    
     isBlurred
      width={300}
      height={200}
      alt="NextUI hero Image with delay"
      src="https://i.pinimg.com/564x/5b/7f/a7/5b7fa751f2511fcbc3ac532ab10ffd31.jpg"
    />
  );
}
