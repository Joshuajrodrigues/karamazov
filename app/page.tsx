import Header from "@/components/Header/Header";
import Flow from "../components/ReactFlowExample";
import Search from "@/components/Search";
import BookCard from "@/components/BookCard/BookCard";

export default function Home() {
  return (
    <main >
      <Header />
      <section className="flex justify-center items-center">
        <h2 className="gradient-text text-center text-3xl font-extrabold mt-5">NEVER FORGET A CHARACTER AGAIN</h2>
      </section>
      <section className="flex justify-center items-center flex-col mt-5">
        <Search/>
      </section>
      <section className="flex justify-center items-center flex-wrap m-5">
        <BookCard title="The Brothers Karamazov" author="Dostoevesky" img="test.jpg"/>
        <BookCard title="The Brothers Karamazov" author="Dostoevesky" img="test.jpg"/>
        <BookCard title="The Brothers Karamazov" author="Dostoevesky" img="test.jpg"/>
        <BookCard title="The Brothers Karamazov" author="Dostoevesky" img="test.jpg"/>
        <BookCard title="The Brothers Karamazov" author="Dostoevesky" img="test.jpg"/>
        <BookCard title="The Brothers Karamazov" author="Dostoevesky" img="test.jpg"/>
        <BookCard title="The Brothers Karamazov" author="Dostoevesky" img="test.jpg"/>
        <BookCard title="The Brothers Karamazov" author="Dostoevesky" img="test.jpg"/>
      </section>
    </main>
  );
}
