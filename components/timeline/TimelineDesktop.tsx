import { useRef, useState } from "react";
import { toPng } from "html-to-image";

import AppTimeline from "../timeline-container/ContainerDesktop";
import { IItem } from "../timeline-element/ElementDesktop";
import Button from "../button/Button";

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
  return items.sort((a, b) => {
    return Number(new Date(a.date)) - Number(new Date(b.date));
  });
};

function TimelineDesktop() {
  const [items, setItems] = useState<IItem[]>([
    {
      id: 4,
      title: "Example title #4",
      text: "text text text",
      date: "14 May 1998",
    },
    {
      id: 1,
      title: "Example title #1",
      text: "Here could be some text",
      date: "13 May 1997",
    },
    {
      id: 2,
      title: "Example title #2",
      text: "text text text",
      date: "1 Oct 2000",
    },
    {
      id: 3,
      title: "Example title #3",
      text: "text text text text text text text text texttext text text text text texttext text text text text texttext text text text text texttext text text text text texttext text text text text texttext text text text text texttext text text text text texttext text text text text texttext text texttext text texttext text texttext text texttext text texttext text texttext text texttext text texttext text texttext text texttext text texttext text texttext text texttext text texttext text texttext text texttext text texttext text text",
      date: "11:30 13 May 1997",
    },
  ]);

  const timelineRef = useRef<HTMLDivElement>(null);

  const handleDownload = () =>
    takeScreenshot(timelineRef.current).then(download);

  const handleEdit = (item: IItem) => {
    const oldItems = items.filter(({ id }) => item.id !== id);
    oldItems.push(item);
    const newItems = sortItems(oldItems);
    setItems(newItems);
  };
  const handleAdd = (item: IItem) => {};
  const handleRemove = (id: number) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };

  return (
    <>
      <div
        ref={timelineRef}
        style={{
          width: "100%",
          height: "auto",
          padding: "10px 0",
        }}
      >
        <AppTimeline
          items={items}
          onRemove={handleRemove}
          onEdit={handleEdit}
        />
      </div>
      <Button title="Download" callback={handleDownload} />
    </>
  );
}

export default TimelineDesktop;
