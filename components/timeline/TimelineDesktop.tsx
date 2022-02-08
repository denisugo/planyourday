import { useRef, useState } from "react";
import { toPng } from "html-to-image";

import AppTimeline from "../timeline-container/ContainerDesktop";
import { IItem } from "../timeline-element/ElementDesktop";
import Button from "../button/Button";

function TimelineDesktop() {
  const [items, setItems] = useState<IItem[]>([
    {
      id: 1,
      title: "Example title #1",
      text: "Here could be some text",
      date: "13 May",
    },
    {
      id: 4,
      title: "Example title #4",
      text: "text text text",
      date: "13 May",
    },
    {
      id: 2,
      title: "Example title #2",
      text: "text text text",
      date: "13 May",
    },
    {
      id: 3,
      title: "Example title #3",
      text: "text text text text text text text text texttext text text text text texttext text text text text texttext text text text text texttext text text text text texttext text text text text texttext text text text text texttext text text text text texttext text text text text texttext text texttext text texttext text texttext text texttext text texttext text texttext text texttext text texttext text texttext text texttext text texttext text texttext text texttext text texttext text texttext text texttext text texttext text text",
      date: "13 May",
    },
  ]);

  const timelineRef = useRef<HTMLDivElement>(null);

  // ? This function will create a download link and click it
  const download = (image: string) => {
    const a = document.createElement("a");
    a.href = image;
    a.download = "img.png";
    a.click();
  };

  const takeScreenshot = async (objectReference: HTMLElement | null) => {
    if (objectReference) {
      const dataUrl = await toPng(objectReference);
      const img = new Image();
      img.src = dataUrl;
      return dataUrl;
    }
    throw new Error();
  };

  const handleDownload = () =>
    takeScreenshot(timelineRef.current).then(download);

  //TODO: add sorting
  const handleEdit = (item: IItem) => {
    const oldItems = items.filter(({ id }) => item.id !== id);
    oldItems.push(item);
    setItems(oldItems);
  };
  const handleAdd = (item: IItem) => {};
  const handleRemove = (id: number) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };

  return (
    <>
      <div ref={timelineRef} style={{ width: "100%", height: "auto" }}>
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
