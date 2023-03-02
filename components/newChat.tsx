import { PlusIcon } from "@heroicons/react/24/solid";

const NewChat = () => {
  return (
    // chatRow is custom class (components layer)
    <div className="border-gray-700 border chatRow">
      <PlusIcon className="h-4 w-4" />
      <p>New Chat</p>
    </div>
  );
};

export default NewChat;
