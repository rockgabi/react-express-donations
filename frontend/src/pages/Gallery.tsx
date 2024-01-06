import GalleryItem from '@/components/gallery-item';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
import { Switch } from '@/components/ui/switch';
import { Cross1Icon } from '@radix-ui/react-icons';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { ScrollArea } from "@/components/ui/scroll-area"

export default function Gallery() {
  return (
    <div className="flex rounded-[0.5rem] border bg-background shadow-md md:shadow-xl h-full">
      <section className="flex flex-col gap-4 p-4">
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
      <Separator orientation="vertical" className="h-auto" />
      <ResizablePanelGroup direction="horizontal" className="h-full">
        <ResizablePanel className="h-full" defaultSize={75}>
          <div className="flex py-2 px-4">
            <Input type="search" placeholder="Search" className="w-full" />
          </div>
          <Separator orientation="horizontal" className="" />
          <ScrollArea className="h-full">
            <div className="flex flex-row flex-wrap gap-4 p-4">
              <GalleryItem />
              <GalleryItem />
              <GalleryItem />
              <GalleryItem />
              <GalleryItem />
              <GalleryItem />
              <GalleryItem />
              <GalleryItem />
            </div>
          </ScrollArea>
        </ResizablePanel>
        <ResizableHandle withHandle className="" />
        <ResizablePanel className="flex flex-col" defaultSize={25}>
          <div className="flex p-2 items-center">
            <p className="text-1xl font-semibold leading-none tracking-tight pl-4">Organization ABC</p>
            <Button variant="ghost" size="icon" className="ml-auto">
              <Cross1Icon className="h-4 w-4" />
            </Button>
          </div>
          <Separator orientation="horizontal" className="" />
          <div className="flex flex-col p-4 pt-6 space-y-1.5">
            <h3 className="text-2xl font-semibold leading-none tracking-tight">Campaign XYZ</h3>
            <p className="text-sm text-muted-foreground">
              Our mission is to end global warming, and we need your help. To accomplish this, we need to build a new
              building.
              <br /> <br /> Please donate to our campaign and be eligible to win a t-shirt and a sticker.
            </p>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
