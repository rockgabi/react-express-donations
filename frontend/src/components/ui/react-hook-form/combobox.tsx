import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '../button';
import { Check, ChevronsUpDown } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface Data {
  label: string;
  value: string;
}

interface Props {
  data: Data[];
  placeholder?: string;
  value: string | undefined;
  onChange: (value: string) => void;
}

export default function Combobox(props: Props) {
  const [open, setOpen] = useState(false);
  // const [value, setValue] = useState("");
  const placeholder = props.placeholder || 'Select an option';

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild className="space-y-0">
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between font-normal space-y-0"
        >
          {props.value ? props.data.find((element: Data) => element.value === props.value)?.label : placeholder}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0" align="start">
        <Command>
          <CommandInput placeholder={placeholder} />
          {props.placeholder && <CommandEmpty>{placeholder}</CommandEmpty>}
          <CommandGroup>
            {props.data.map((element) => (
              <CommandItem
                key={element.value}
                value={element.value}
                onSelect={(currentValue) => {
                  props.onChange(currentValue === props.value ? '' : currentValue);
                  setOpen(false);
                }}
              >
                <Check className={cn('mr-2 h-4 w-4', props.value === element.value ? 'opacity-100' : 'opacity-0')} />
                {element.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
