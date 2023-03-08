import { db } from "@/firebase";
import { PlusIcon } from "@heroicons/react/24/solid";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const NewChat = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const createNewChat = async () => {
    const doc = await addDoc(
      collection(db, "user", session?.user?.email!, "chats"),
      {
        userID: session?.user?.email!,
        createdAT: serverTimestamp(),
      }
    );

    router.push(`chat/${doc.id}`);
  };

  return (
    // chatRow is custom class (components layer)
    <div onClick={createNewChat} className="border-gray-700 border chatRow">
      <PlusIcon className="h-4 w-4" />
      <p>New Chat</p>
    </div>
  );
};

export default NewChat;
