import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

import { cn } from '@/lib/utils';
import { BellRing, Check, CircleDashed, ZoomIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function GalleryItem() {
  return (
    <Card className={cn('flex-1 min-w-[320px]')}>
      <CardHeader>
        <CardTitle>Organization ABC</CardTitle>
        <CardDescription>We want to end global warming</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="flex gap-2">
          <Badge>Featured</Badge>
          <Badge>Nature</Badge>
          <Badge>Worldwide</Badge>
        </div>
        <div className=" flex items-center space-x-4 rounded-md border p-4">
          <CircleDashed />
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">Campaign XYZ</p>
            <p className="text-sm text-muted-foreground">Raising funds for the new building</p>
          </div>
        </div>
        <div>
          <div className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
            <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
            <div className="space-y-1">
              <p className="text-sm font-medium leading-none">Last donation</p>
              <p className="text-sm text-muted-foreground">1 hour ago</p>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">
          <ZoomIn className="mr-2 h-4 w-4" /> View Details
        </Button>
      </CardFooter>
    </Card>
  );
}
