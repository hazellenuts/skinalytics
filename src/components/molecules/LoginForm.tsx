// components/molecules/LoginForm.tsx
import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input"; // Mengimpor komponen Input

export default function LoginForm() {
  return (
    <form className="flex flex-col space-y-4">
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Password" />
      <Button onClick={() => alert("Login clicked")}>Login</Button>
    </form>
  );
}
