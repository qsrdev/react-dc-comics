import CallToAction from "./CallToAction";
import ComicsDisplay from "./CurrentComics";
import Jumbo from "./Cover.jsx";

function AppMain() {
  return (
    <>
      <main>
        <Jumbo />
        <section className="content">
          <ComicsDisplay />
        </section>
        <CallToAction />
      </main>
    </>
  );
}

export default AppMain;
