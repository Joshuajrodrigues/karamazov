import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ChapterSelection = () => {
  return (
    <Select>
      <SelectTrigger className="w-[140px] mr-2 text-primary ">
        <SelectValue placeholder="Select Chapter" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="light">Chapter 1</SelectItem>
        <SelectItem value="dark">Chapter 2</SelectItem>
        <SelectItem value="system">Chapter 3</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default ChapterSelection;
