import { useRef, useState } from "react";

export interface IItem {
  id: number;
  title: string;
  text: string;
  date: string;
  imageUri: string | null;
}
export interface IElementInternal extends IItem {
  onRemove: (id: number) => void;
  onEdit: (item: IItem) => void;
}

function useElement({
  title,
  text,
  date,
  imageUri,
  id,
  onRemove,
  onEdit,
}: IElementInternal) {
  const [visible, setVisible] = useState(false);
  const [visibleButtons, setVisibleButtons] = useState(false);
  const titleRef = useRef<HTMLSpanElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const dateRef = useRef<HTMLSpanElement>(null);
  const imgRef = useRef<HTMLInputElement>(null);
  const [_imageUri, setImageUri] = useState<string | null>(imageUri);

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
      imageUri: _imageUri,
    });

    imgRef.current!.value = "";
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
    imgRef,
    setImageUri,
    date,
    text,
    title,
    imageUri: _imageUri,
    id,
  };
}

export default useElement;
