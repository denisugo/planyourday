import React, { useRef } from "react";
import { INewElement } from "./NewElementDesktop";

function useNewElement({ onAdd }: INewElement) {
  const titleRef = useRef<HTMLSpanElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const dateRef = useRef<HTMLSpanElement>(null);

  const handleAdd = () => {
    onAdd({
      id: Date.now(),
      text: String(textRef.current!.textContent),
      title: String(titleRef.current!.textContent),
      date: String(dateRef.current!.textContent),
    });

    // ? Reset all values to default
    titleRef.current!.textContent = "Title";
    textRef.current!.textContent = "Just a random text";
    dateRef.current!.textContent = "13 Oct 2010";
  };
  return {
    handleAdd,
    titleRef,
    textRef,
    dateRef,
  };
}

export default useNewElement;
