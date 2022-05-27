import { db } from "../firebase";
import Moment from "react-moment";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
// import { modalState, postIdState } from "../atoms/modalAtom";
import { collection, deleteDoc, doc, onSnapshot, orderBy, query, setDoc, } from "@firebase/firestore";
import { ChartBarIcon, ChatIcon, DotsHorizontalIcon, HeartIcon, ShareIcon, SwitchHorizontalIcon, TrashIcon, } from "@heroicons/react/outline";
import { HeartIcon as HeartIconFilled, ChatIcon as ChatIconFilled, } from "@heroicons/react/solid";

function Post() {
	return (
		<div className="p-3 flex cursor-pointer border-b border-gray-700">
			<img src='https://www.w3schools.com/howto/img_avatar.png' alt="" className="h-11 w-11 rounded-full mr-4" />
		
			Post here
		</div>
	)
}

export default Post