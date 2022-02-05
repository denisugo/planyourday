import { useRef, useState } from "react";
import { useScreenshot, createFileName } from "use-react-screenshot";

import AppTimeline from "../timeline-container/ContainerDesktop";
import { IElement } from "../timeline-element/ElementDesktop";

function TimelineDesktop() {
  const [items, setItems] = useState<IElement[]>([
    { id: 1, title: "Title", text: "text text text" },
    { id: 2, title: "Title", text: "text text text", date: "13 May" },
    {
      id: 3,
      title: "Title",
      text: "text text text text text text text text texttext text text text text texttext text text text text texttext text text text text texttext text text text text texttext text text text text texttext text text text text texttext text text text text texttext text text text text texttext text texttext text texttext text texttext text texttext text texttext text texttext text texttext text texttext text texttext text texttext text texttext text texttext text texttext text texttext text texttext text texttext text texttext text text",
    },
  ]);

  const timelineRef = useRef(null);
  const [image, takeScreenshot] = useScreenshot({
    type: "image/jpeg",
    quality: 1.0,
  });

  const handleDownload = undefined;
  const handleEdit = undefined;
  const handleAdd = undefined;

  // ? This function will create a download link and click it
  const download = (
    image: string,
    { name = "img", extension = "jpg" } = {}
  ) => {
    const a = document.createElement("a");
    a.href = image;
    a.download = createFileName(extension, name);
    a.click();
  };

  const downloadScreenshot = () =>
    takeScreenshot(timelineRef.current).then(download);

  return (
    <>
      <div ref={timelineRef} style={{ width: "100%", height: "auto" }}>
        <div></div>
        <AppTimeline items={items} />
      </div>
      <button onClick={downloadScreenshot}>Download</button>
    </>
  );
}

export default TimelineDesktop;
