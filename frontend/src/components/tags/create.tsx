import Form from './form';
import formSchema from './validation';
import * as z from 'zod';

export default function Create() {
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <section>
      <Form onSubmit={onSubmit} />
    </section>
  );
}
