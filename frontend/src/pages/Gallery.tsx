import GalleryItem from '@/components/gallery-item';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';

export default function Gallery() {
  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel className="" defaultSize={25}>
        Filters
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel className="flex flex-row flex-wrap gap-2" defaultSize={75}>
        <GalleryItem />
        <GalleryItem />
        <GalleryItem />
        <GalleryItem />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
