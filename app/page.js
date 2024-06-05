// app/page.tsx
import { Button } from "@nextui-org/button";
import HomePage from "./(components)/showcase/HomePage";

export default function Page() {
  return (
    <div className="min-h-screen bg-black">
      <HomePage />
    </div>
  );
}
