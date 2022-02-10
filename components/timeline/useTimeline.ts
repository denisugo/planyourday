import { useRef, useState } from "react";
import { toPng } from "html-to-image";

import { IItem } from "../timeline-element/ElementDesktop";
import { desktopDemensions } from "../../config/demensions";

// ? This function will create a download link and click it
const download = (image: string) => {
  const a = document.createElement("a");
  a.href = image;
  a.download = "img.png";
  a.click();
};

// ? This function creates a screenshot with external library
const takeScreenshot = async (objectReference: HTMLElement | null) => {
  if (objectReference) {
    const dataUrl = await toPng(objectReference);
    const img = new Image();
    img.src = dataUrl;
    return dataUrl;
  }
  throw new Error();
};

// ? This function will sort all items according to their date
const sortItems = (items: IItem[]): IItem[] => {
  return items.sort(function (a, b): number {
    return Number(new Date(a.date)) - Number(new Date(b.date));
  });
};

function useTimeline(isMobile = false) {
  const [items, setItems] = useState<IItem[]>([
    {
      id: 1,
      title: "Example title #1",
      text: "Here could be some text",
      date: "13 May 1997",
    },
    {
      id: 3,
      title: "Example title #2",
      text: "Text maecenas consectetur dolor a lectus commodo egestas. Quisque nec dolor ex. Nunc posuere posuere justo ut auctor. Nam consequat erat id augue tristique hendrerit. Donec non tortor vitae turpis posuere eleifend. Sed rutrum sodales sem sed elementum. Nulla molestie suscipit turpis eu finibus. In tincidunt non risus ac tempus.",
      date: "13 May 1997 11:30",
    },
    {
      id: 4,
      title: "Example title #3",
      text: "Praesent consequat, elit vitae accumsan commodo, nisi neque congue orci, text",
      date: "14 May 1998",
    },
    {
      id: 2,
      title: "Example title #4",
      text: "Etiam sed odio quis tortor fermentum pharetratext.",
      date: "1 Oct 2000",
    },
  ]);

  const timelineRef = useRef<HTMLDivElement>(null);

  // ? This function will also set and reset captured object width
  // ? It is needed when a screen is too slim.
  const handleDownload = async () => {
    timelineRef.current!.style.width = "500px";

    const image = await takeScreenshot(timelineRef.current);
    download(image);

    timelineRef.current!.style.width = isMobile
      ? "100vw"
      : desktopDemensions.minScreenWidth;
  };

  const handleEdit = (item: IItem) => {
    const oldItems = items.filter(({ id }) => item.id !== id);
    oldItems.push(item);
    const newItems = sortItems(oldItems);
    setItems(newItems);
  };
  const handleAdd = (item: IItem) => {
    const oldItems = [...items, item];
    const newItems = sortItems(oldItems);
    setItems(newItems);
  };
  const handleRemove = (id: number) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };

  return {
    items,
    timelineRef,
    handleDownload,
    handleEdit,
    handleAdd,
    handleRemove,
  };
}

export default useTimeline;
