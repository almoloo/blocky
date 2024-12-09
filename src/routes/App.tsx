import Footer from "../components/layout/footer";
import Header from "../components/layout/header";
import LogicBoard from "../components/layout/logic-board";
import SideBar from "../components/layout/side-bar";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="grow grid lg:grid-cols-3">
        <main className="lg:col-span-2">
          <LogicBoard />
        </main>
        <aside className="lg:col-span-1">
          <SideBar />
        </aside>
      </div>
      <Footer />
    </div>
  );
}

export default App;
