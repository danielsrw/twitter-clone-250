import dynamic from "next/dynamic";
import { Picker } from "emoji-mart";
import { useRef, useState } from "react";
import { db, storage } from "../firebase";
import { signOut, useSession } from "next-auth/react";
import { getDownloadURL, ref, uploadString } from "@firebase/storage";
import { addDoc, collection, doc, serverTimestamp, updateDoc, } from "@firebase/firestore";
import { CalendarIcon, ChartBarIcon, EmojiHappyIcon, PhotographIcon, XIcon, } from "@heroicons/react/outline";

function Input() {
	return (
		<div className='border-b border-gray-700 p-3 flex space-x-3 overflow-y-scroll scrollbar-hide'>
			<img src='https://www.w3schools.com/howto/img_avatar.png' alt="" className="h-11 w-11 rounded-full cursor-pointer" />
			
			<div className="divide-y divide-gray-700 w-full">
				<div className="pb-7 space-y-2.5">
					<textarea placeholder="What's happening?" style={{ fontSize: '20px' }} rows="2" className="bg-transparent outline-none text-[#d9d9d9] text-lg placeholder-gray-500 tracking-wide w-full min-h-[50px]" />
				</div>
			</div>
		</div>
	)
}

export default Input