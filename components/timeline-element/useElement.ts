import { IElementInternal } from "./ElementDesktop";
import React, { useEffect, useRef, useState } from "react";

function useElement({
  title,
  text,
  date,
  id,
  onRemove,
  onEdit,
}: IElementInternal) {
  const [visible, setVisible] = useState(false);
  const [visibleButtons, setVisibleButtons] = useState(false);
  const titleRef = useRef<HTMLSpanElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const dateRef = useRef<HTMLSpanElement>(null);

  const handleEditBlocksVisible = () => {
    setVisible(true);
  };

  const handleLConfirm = () => {
    setVisibleButtons(false);
    setVisible(false);
    onEdit({
      id,
      text: String(textRef.current!.textContent),
      title: String(titleRef.current!.textContent),
      date: String(dateRef.current!.textContent),
    });
  };
  return {
    handleLConfirm,
    handleEditBlocksVisible,
    onRemove,
    visible,
    setVisible,
    visibleButtons,
    setVisibleButtons,
    titleRef,
    textRef,
    dateRef,
    date,
    text,
    title,
    id,
  };
}

export default useElement;
