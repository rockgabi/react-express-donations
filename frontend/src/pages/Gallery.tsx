import GalleryItem from '@/components/gallery-item';
import { Label } from "@/components/ui/label";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
import { Switch } from "@/components/ui/switch";
import { Separator } from "@radix-ui/react-separator";

export default function Gallery() {
  return (
    <div className="flex">
      <section className="flex flex-col gap-4">
        <div className="flex items-center space-x-2">
          <Switch id="featured" checked />
          <Label htmlFor="featured">Featured</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Switch id="nature" checked />
          <Label htmlFor="nature">Nature</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Switch id="worldwide" checked />
          <Label htmlFor="worldwide">Worldwide</Label>
        </div>
      </section>
      <Separator orientation="vertical" className="mx-4" />
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel className="flex flex-row flex-wrap gap-4" defaultSize={75}>
          <GalleryItem />
          <GalleryItem />
          <GalleryItem />
          <GalleryItem />
        </ResizablePanel>
        <ResizableHandle withHandle className="mx-4" />
        <ResizablePanel className="" defaultSize={25}>
          Content
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
