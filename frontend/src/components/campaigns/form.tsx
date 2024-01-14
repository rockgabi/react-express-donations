import formSchema from './validation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form as UIForm,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '../ui/text-area';
import ComboboxFormField from '../ui/react-hook-form/combobox';

interface Props {
  onSubmit: (values: z.infer<typeof formSchema>) => void;
}

export default function Form(props: Props) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      description: '',
      goal: 0,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    props.onSubmit(values);
  }

  return (
    <UIForm {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 max-w-2xl">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Organization ABC" {...field} />
              </FormControl>
              <FormDescription>The name of the organization</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="organizationId"
          render={({ field }) => (
            <div className="space-y-2">
              <FormLabel>Organization</FormLabel>
              <ComboboxFormField
                data={[
                  { label: 'Organization 1', value: '1' },
                  { label: 'Organization 2', value: '2' },
                  { label: 'Organization 3', value: '3' },
                ]}
                placeholder="Select Organization"
                {...field}
                value={field.value?.toString()}
                onChange={(v) => field.onChange(parseInt(v))}
              />
              <FormDescription>The organization this campaign is attached</FormDescription>
              <FormMessage />
            </div>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea placeholder="We are an organization dedicated to..." {...field} />
              </FormControl>
              <FormDescription>The description of the organization</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="goal"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Raising Goal</FormLabel>
              <FormControl>
                <Input
                  placeholder="9999.99"
                  onChange={(v) => field.onChange(parseFloat(v.currentTarget.value))}
                  type="number"
                />
              </FormControl>
              <FormDescription>The raising goal for this campaign</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Submit</Button>
      </form>
    </UIForm>
  );
}
