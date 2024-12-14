// components/atoms/Input.tsx
export default function Input({
    type,
    placeholder,
  }: {
    type: string;
    placeholder: string;
  }) {
    return (
      <input
        type={type}
        placeholder={placeholder}
        className="border p-2 rounded"
      />
    );
  }
  