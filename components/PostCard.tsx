import Link from "next/link";
import Image from "next/image";

const regexStr = /(!\[.*\)\s)|(#\s)/g;

const PostCard = ({ post }) => {
  const parsedContent = post.content
    .replace(regexStr, "")
    .substr(0, 200)
    .replace(/^\n{1,}/, "");

  return (
    <div className="w-full mb-4 overflow-hidden bg-gray-200 rounded-t-2xl ">
      <Link href={`/post/${post.slug}`}>
        <a>
          <div className="flex flex-col items-center justify-center no-underline">
            <div className="w-full mb-2">
              {/* <div className="relative w-full h-32 overflow-hidden ">
                <Image
                  layout="fill"
                  objectFit="cover"
                  quality={95}
                  src={
                    post.thumbnail
                      ? process.env.NEXT_PUBLIC_URL + post.thumbnail
                      : "/thumbnail_default.jpg"
                  }
                  alt=""
                />
              </div> */}
              <img
                src={
                  post.thumbnail ? post.thumbnail : "/thumbnail_default.jpg"
                  // ? process.env.NEXT_PUBLIC_URL + post.thumbnail
                }
                className="relative w-full h-32 overflow-hidden "
              />
            </div>
            <div className="w-full px-2 text-gray-400 ">
              <div className="font-semibold text-gray-700 truncate">
                {post.title}
              </div>
              <div className="h-16 overflow-hidden leading-tight text-gray-400 break-words whitespace-pre-wrap ">
                {parsedContent}
              </div>
              <div className="pb-2 text-sm text-right text-gray-500">
                {post.createdAt}
              </div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default PostCard;
