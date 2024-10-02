import { FC , ReactNode}  from "react";

interface MobileContainerProps {
    children: ReactNode;
  }

const MobileContainer:FC<MobileContainerProps> = ({children})=>{
    return (
        <div className="mx-0 max-w-[375px] min-h-screen border gray-200 bg-white">
            {children}
        </div>
    );
};

export default MobileContainer;