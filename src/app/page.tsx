import ButtonsSection from "./second/ButtonsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section>
        <h1 className="font-bold text-xl">app router !</h1>
      </section>
      <section>index(/)</section>
      <ButtonsSection first second />
    </main>
  );
}
