import CallToAction from "./CallToAction";
import comics from "../../data/comics.js";
import ComicsDisplay from "./CurrentComics";

function AppMain() {
  return (
    <>
      <main>
        <section className="content">
          <ComicsDisplay />
        </section>
        <CallToAction />
      </main>
    </>
  );
}

export default AppMain;
