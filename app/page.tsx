import GameCarousel from "@/components/game-carousel";

export default function Home() {
  return (
    // changed "p-24" to "py-10" so the carousel can stretch wider
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-950">
      <GameCarousel />
    </main>
  );
}