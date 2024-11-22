import { Input, Spinner, Tooltip } from "@nextui-org/react";
import { Airplane, ArrowRight, PaperPlaneRight } from "@phosphor-icons/react";
import clsx from "clsx";
import Image from "next/image";
import micIcon from "../app/assets/mic.png";

// import { Mic } from "phosphor-react";

interface StreamingAvatarTextInputProps {
  label: string;
  placeholder: string;
  input: string;
  onSubmit: () => void;
  setInput: (value: string) => void;
  endContent?: React.ReactNode;
  disabled?: boolean;
  loading?: boolean;
}

export default function InteractiveAvatarTextInput({
  label,
  placeholder,
  input,
  // onSubmit,
  setInput,
  endContent,
  disabled = false,
  loading = false,
}: StreamingAvatarTextInputProps) {
  function handleSubmit() {
    if (input.trim() === "") {
      return;
    }
    onSubmit();
    setInput("");
  }

  return (
    //   <Input
    //     endContent={
    //       <div className="flex flex-row items-center h-full">
    //         {endContent}
    //         <Tooltip content="Send message">
    //           {loading ? (
    //             <Spinner
    //               className="text-indigo-300 hover:text-indigo-200"
    //               size="sm"
    //               color="default"
    //             />
    //           ) : (
    //             <button
    //               type="submit"
    //               className="focus:outline-none"
    //               onClick={handleSubmit}
    //             >
    //               {/* <PaperPlaneRight
    //                 className={clsx(
    //                   "text-indigo-300 hover:text-indigo-200",
    //                   disabled && "opacity-50"
    //                 )}
    //                 size={24}
    //               /> */}
    //               {/* <Mic
    //                 className={clsx(
    //                   "text-indigo-300 hover:text-indigo-200",
    //                   disabled && "opacity-50"
    //                 )}
    //                 size={24}
    //               /> */}
    //               <Image
    //                 src={micIcon}
    //                 alt="mic-icon"
    //                 width={150}
    //                 // height={200}
    //               />
    //             </button>
    //           )}
    //         </Tooltip>
    //       </div>
    //     }
    //     label={label}
    //     placeholder={placeholder}
    //     size="sm"
    //     value={input}
    //     onKeyDown={(e) => {
    //       if (e.key === "Enter") {
    //         handleSubmit();
    //       }
    //     }}
    //     onValueChange={setInput}
    //     isDisabled={disabled}
    //   />
    <div className="flex items-center align-middle justify-center">
      <button
        type="button"
        className="focus:outline-none rounded-full hover:bg-blue-600 flex items-center justify-center shadow-lg"
        onClick={handleSubmit}
      >
        {/* <Image
          src={micIcon}
          alt="mic-icon"
          width={150} // Adjust size as per requirement
          height={40}
        /> */}
        <PaperPlaneRight
          className={clsx(
            "text-indigo-300 hover:text-indigo-200",
            disabled && "opacity-50"
          )}
          size={45}
        />
      </button>
    </div>
  );
}
