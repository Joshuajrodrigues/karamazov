import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Image from "next/image";
import { ArrowRightCircle } from "lucide-react";
import Link from "next/link";
const BookCard = ({
  title,
  author,
  img,
  status = "Unvarified",
}: {
  title: string;
  author: string;
  img: string;
  status?: "Official" | "Unvarified";
}) => {
  return (
    <Card className="w-62 m-1">
      <CardHeader className="p-0 rounded-t-xl flex items-center justify-center h-32 w-64 overflow-hidden">
        <img className="w-full object-cover" src={img} alt={title} />
      </CardHeader>
      <CardContent>
        <CardDescription className="my-2">{author}</CardDescription>
        <CardTitle>{title}</CardTitle>
      </CardContent>
      <CardFooter className=" text-sm flex justify-between items-center">
        {status}
        <Link href={`/book/${title.split(" ").join("-")}`}>
          <ArrowRightCircle />
        </Link>
      </CardFooter>
    </Card>
  );
};

export default BookCard;
