"use client";

import Button from "@/components/atoms/Button";
import { useRouter } from "next/navigation";

export default function BaumannPage() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/quiz");
  };

  return (
    <div>
      <h2>Baumann Skin Types</h2>
      <Button onClick={handleClick}>Check my skin type</Button>
    </div>
  );
}
