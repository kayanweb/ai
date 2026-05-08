import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-6">Welcome to AI App</h1>
        <p className="text-xl text-gray-600 mb-8">Your AI-powered application</p>
        <Button>Get Started</Button>
      </div>
    </main>
  );
}
