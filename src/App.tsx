import Sidebar from "./components/Sidebar";
import Header from "./components/Header";


export default function App() {
    return (
      <div className="flex h-screen overflow-hidden bg-background-light">
        <Sidebar />
        <main className="flex-1 flex flex-col overflow-y-auto">
          <Header />
        </main>
      </div>
    );
}
