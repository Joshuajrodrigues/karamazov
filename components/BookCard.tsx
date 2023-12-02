import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const BookCard = ({title,author,img}:{
  title:string,
  author:string,
  img:string
}) => {
  return (
    <Card className="w-62 m-1">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{author}</CardDescription>
      </CardHeader>
      <CardContent className=" flex items-center justify-center">
        <img src={img} width={132} height={164} alt={title}/>
      </CardContent>
    </Card>
  );
};

export default BookCard;
