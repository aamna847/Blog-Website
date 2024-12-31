import React from "react";
import { Card, CardContent, CardTitle } from "../components/ui/card";
import Image from "next/image";
import Link from "next/link";

interface BlogCardprops {
  post: {
    id: string;
    title: string;
    description: string;
    date: string;
    imageUrl: string;
  };
  isDarkBackground: boolean;
}

export default function BlogCard({ post, isDarkBackground }: BlogCardprops) {
  return (
    <Card
      className={`p-4 ${
        isDarkBackground ? "bg-slate-800 text-white" : "text-slate-800"
      } rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300`}
    >
      <Image
        src={post.imageUrl}
        alt={post.title}
        className="w-full h-48 object-cover rounded-lg"
        width={300}
        height={200}
      />

      <CardTitle className="text-xl font-normal mt-4 text-center">
        {" "}
        {post.title}
      </CardTitle>
      <br />
      <CardContent className="text-center">
        <p> {post.description}</p>
      </CardContent>

      <div className="flex flex-col items-center mt-4">
        <p
          className={`text-sm mb-2 ${
            isDarkBackground ? "text-slate-400" : "text-slate-600"
          }`}
        >
          Published on: {new Date(post.date).toLocaleDateString()}
        </p>
       <Link href={`/posts/${post.id}`}>
       <button className="h-12 w-[100px] rounded-md bg-blue-200 text-black">Read More</button>
       </Link>
       
      </div>
    </Card>
  
  );
}
