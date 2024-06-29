'use client'
import {
    TransparentButton,
    WhiteButton,
} from "@/components/buttons";
import { ASSETS } from "@/public/path";


import Image from "next/image";
import { SlCloudUpload } from "react-icons/sl";
import { BiSolidFileFind } from "react-icons/bi";
import { useState } from "react";
import { MdDelete } from "react-icons/md";
import { useRouter } from "next/navigation";

export default function UploadPlat() {
    const router = useRouter()
    const [dragging, setDragging] = useState(false);
    const [file, setFile] = useState(null);
    const [detectingArea, setDetectingArea] = useState(false)
    const [areaDetected, setAreaDetected] = useState(false)

    const handleDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragging(true);
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragging(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragging(false);
        const uploadedFile = e.dataTransfer.files[0];
        if (uploadedFile && uploadedFile.type.startsWith('image/')) {
            setFile(uploadedFile);
        } else {
            alert('Please upload an image file.');
        }
    };

    const handleFileChange = (e) => {
        const uploadedFile = e.target.files[0];
        if (uploadedFile && uploadedFile.type.startsWith('image/')) {
            setFile(uploadedFile);
        } else {
            alert('Please upload an image file.');
        }
    };

    const handleButtonClick = () => {
        document.getElementById('fileInput').click();
    };

    const handleDeleteFile = () => {
        setFile(null);
    };

    const onDetectBuildableArea = () => {
        setAreaDetected(false)
        setDetectingArea(true)

        setTimeout(() => {
            console.log('area detected')

            setAreaDetected(true)
            setTimeout(() => {
                setDetectingArea(false)
                setAreaDetected(false)
                router.push('/create-pool')
            },3000);
        }, 10 * 1000);
    }

    
    return (
        <div className="max-w-[1440px] mx-auto relative overflow-hidden">
            <main
                className={`
                relative
                w-full   
                mx-auto flex min-h-screen  max-h-screen  py-4 sm:py-0 sm:px-12 md:px-14 lg:px-20`}
            >
                <div className="absolute bg-red left-0 w-full h-full lg:h-auto  2xl:h-full">
                    <Image
                        src={ASSETS.BACKGROUND.bgUPLOAD_PLAT_SCREEN.src}
                        alt=""
                        layout="fill"
                        objectFit="cover"
                        priority={true}
                        className=" min-h-screen  h-full  w-full object-cover"
                    />
                </div>
                {
                    !detectingArea ?
                        <div className="flex items-center justify-center text-center w-full z-10 p-3
                        inset-0 bg-white md:m-4 lg:m-14 rounded-md bg-opacity-50 bg-blend-overlay
                        ">
                            <div className="w-full mx-auto space-y-4 py-10">
                                <img
                                    src={ASSETS.LOGO.LOGO_WHITE.src}
                                    alt=""
                                    className="w-20 h-20 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:h-32 lg:w-32 mx-auto"
                                />
                                <div
                                    onDragOver={handleDragOver}
                                    onDragLeave={handleDragLeave}
                                    onDrop={handleDrop}
                                    className="border border-dashed space-y-4 border-black text-black md:w-9/12 lg:w-8/12 rounded-md p-10 mx-auto flex flex-col items-center justify-center"
                                >
                                    <SlCloudUpload className="text-5xl" />
                                    <div className="font-medium">Drag & Drop file here</div>
                                    <div>or</div>
                                    <TransparentButton
                                        onHandleClick={handleButtonClick}
                                        title="Browse File"
                                        textColor="text-black"
                                        borderColor="border-black"
                                    />
                                    <input
                                        id="fileInput"
                                        type="file"
                                        accept="image/png, image/jpeg, image/webp"
                                        onChange={handleFileChange}
                                        style={{ display: 'none' }}
                                    />
                                </div>
                                {file && (
                                    <div className="md:w-10/12 lg:w-9/12 mx-auto flex items-center justify-between bg-white p-3 rounded-2xl">
                                        <img src={URL.createObjectURL(file)} alt={file.name} className="h-10 w-10 md:h-20 md:w-20 rounded-2xl object-cover" />
                                        <div className="flex text-left items-center space-x-8 ">
                                            <div>
                                                <div className="font-medium text-[0.65rem] sm:text-xs md:text-sm lg:text-base">File Name:</div>
                                                <div className="text-[0.65rem] sm:text-xs text-gray-text">{file.name.length > 5 ? file.name.substr(0, 5).concat('...') : file.name}</div>
                                            </div>
                                            <div>
                                                <div className="font-medium text-[0.65rem] sm:text-xs md:text-sm lg:text-base">File Size:</div>
                                                <div className="text-[0.65rem] sm:text-xs text-gray-text">{(file.size / 1024 / 1024).toFixed(2)} MB</div>
                                            </div>
                                            <div>
                                                <div className="font-medium text-[0.65rem] sm:text-xs md:text-sm lg:text-base">File Type:</div>
                                                <div className="text-[0.65rem] sm:text-xs text-gray-text">{file.type}</div>
                                            </div>
                                        </div>
                                        <div onClick={handleDeleteFile} className="h-6 w-6 md:h-8 md:w-8 lg:h-12 lg:w-12 flex items-center justify-center text-sm sm:text-base md:text-lg lg:text-xl text-white cursor-pointer rounded-full bg-red">
                                            <MdDelete />
                                        </div>
                                    </div>
                                )}
                                <div>

                                    {
                                        file && <WhiteButton
                                            onHandleClick={onDetectBuildableArea}
                                            title={"Detect Buildable Area"} textColor="text-aqua" />
                                    }

                                </div>
                            </div>
                        </div> :
                        <div className="flex flex-col items-center justify-center text-center w-full z-10 p-3
                        inset-0 bg-white md:m-4 lg:m-14 rounded-md bg-opacity-50 bg-blend-overlay space-y-4
                        ">
                            {
                                areaDetected ? <div className="flex flex-col items-center justify-center space-y-8">
                                    <div className="text-xl md:text-2xl lg:text-3xl">Succssfully Detected Buildable Area</div>
                                    <div className="">
                                        <img src={ASSETS.MIX.COMPLETE_TICK.src} className="h-36 w-36" alt="" />
                                    </div>
                                </div> :
                                    <div className="space-y-8 flex flex-col items-center justify-center">
                                        <div className="text-xl md:text-2xl lg:text-3xl">Detecting Buildable Area</div>
                                        <div className="flex items-center justify-center">
                                            <BiSolidFileFind className="text-6xl duration-2000 delay-3000 animate-ping" />
                                        </div>
                                        <div>Detecting Area...</div>
                                    </div>
                            }
                        </div>
                }
            </main>
        </div>
    );
}
