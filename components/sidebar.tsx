/* eslint-disable @next/next/no-img-element */
"use client";

import { useSession } from "next-auth/react";
import NewChat from "./newChat";
import { signOut } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";
import { db } from "@/firebase";
import ChatRow from "./chatRow";

const SideBar = () => {
  const { data: session } = useSession();

  const [chats, loading, error] = useCollection(
    session && collection(db, "users", session.user?.email!, "chats")
  );

  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1">
        <div>
          {/* New Chat */}
          <NewChat />

          <div>{/* Model Selection */}</div>

          {/* Map through the chat rows */}
          {/* {chats?.docs.map((chat) => (
            <ChatRow key={chat.id} id={chat.id} />
          ))} */}
        </div>
      </div>

      {session && (
        <img
          onClick={() => {
            signOut();
          }}
          src={session.user?.image!}
          alt="userImage"
          className="h-12 w-12 rounded-full cursor-pointer mx-auto mb-2 hover:opacity-50"
        />
      )}
    </div>
  );
};

export default SideBar;
