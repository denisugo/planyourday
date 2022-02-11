import { useRef, useState } from "react";
import { INewElement } from "./NewElementDesktop";

function useNewElement({ onAdd }: INewElement) {
  const titleRef = useRef<HTMLSpanElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const dateRef = useRef<HTMLSpanElement>(null);
  const imgRef = useRef<HTMLInputElement>(null);
  const [imageUri, setImageUri] = useState<string | null>(null);

  const handleAdd = () => {
    onAdd({
      id: Date.now(),
      text: String(textRef.current!.textContent),
      title: String(titleRef.current!.textContent),
      date: String(dateRef.current!.textContent),
      imageUri,
    });

    // ? Reset all values to default
    titleRef.current!.textContent = "Title";
    textRef.current!.textContent = "Just a random text";
    dateRef.current!.textContent = "13 Oct 2010";
    imgRef.current!.value = "";
    setImageUri(null);
  };
  return {
    handleAdd,
    titleRef,
    textRef,
    dateRef,
    imgRef,
    imageUri,
    setImageUri,
  };
}

export default useNewElement;
