export default function PrimitiveInputField({
  placeholder,
  name,
}: {
  placeholder: string;
  name: string;
}) {
  return (
    <input
      className="h-10 w-full rounded-md border bg-black px-3 text-sm placeholder:text-white/70 focus-visible:outline-none focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
      placeholder={placeholder}
      name={name}
    />
  );
}

// flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50
