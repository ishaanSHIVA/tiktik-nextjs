import Image from "next/image";
import Link from "next/link";
import React, {  Dispatch, SetStateAction } from "react";
import { GoVerified } from "react-icons/go";
import useAuthStore from "../store/authStore";
import { IUser } from "../types";
import NoResults from "./NoResults";


interface IProps {
  comment: string;
  isPostingComment: boolean;
  addComment: (e:React.FormEvent) => void;
  setComment:Dispatch<SetStateAction<string>>;
  comments: IComment[];
}

interface IComment {
  comment: string;
  length?: number;
  _key: string;
  postedBy: { _ref?: string; _id?: string };
}




const Comments = ({isPostingComment,addComment,setComment,comments,comment}:IProps) => {
  const { userProfile,allUsers } = useAuthStore();
  console.log(comments);
 return (
    <div className="">
      <div className="px-10 pt-4 border-t-2 border-gray-200 bg-[#f8f8f8] border-b-2 lg:pb-0 pb-[100px] ">
        <div className="overflow-scroll lg:h-[475px]">
          {comments?.length ? (
            comments.map((item,id) => (
              <>
                {allUsers.map((user:IUser) => (user._id === item.postedBy._id || item.postedBy._ref) && (
                  <div className="items-center p-2 " key={id}>
                    <Link href={`/profile/${user._id}`}>
                          <div className="flex gap-3 p-2 font-semibold rounded cursor-pointer hover:bg-primary">
                    <div className="w-8 h-8 ">
                      <Image className="rounded-full" layout="responsive" src={user.image} width={34} height={34} />
                    </div>

                    <div className="hidden xl:block">
                        <p className="flex items-center gap-1 text-md text-primary lower">
                          {user.userName.replaceAll(" ", "").toLowerCase()}
                          <GoVerified className="text-blue-400"></GoVerified>
                        </p>
                        <p className="text-gray-400 capitalize">
                          {user.userName}
                        </p>
                    </div>
                  </div>
                    </Link>
                    <div className="flex ml-10">
                    <p>{item.comment}</p>
                    </div>
                  </div>
                ))}
              </>
            ))
          ) : (
            <NoResults text="No comments yet!" />
          )}
        </div>
      </div>
      {userProfile && (
        // <div className="absolute bottom-0 left-0 px-2 pb-6 md:px-10">
          <form onSubmit={addComment} className="flex gap-4 p-10">
            <input
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Add comment"
              className="px-6 py-4 font-medium border-2 bg-primary text-md w-[250px] md:w-[750px] border-gray-100 focus:outline-none focus:border-2 focus:border-gray-300" 
            />
            <button className="text-gray-400 text-md ">
              {isPostingComment ? 'Commenting...' : 'Comment'}
            </button>
          </form>
        // </div>
      )}
    </div>

  );
};

export default Comments;
