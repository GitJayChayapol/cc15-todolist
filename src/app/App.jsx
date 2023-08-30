import "./App.scss";
import "../components/Header.scss";
import Listitem from "../components/Listitem";
import Header from "../components/Header";
import { FaInbox, FaCalendar, FaCalendarAlt, FaChevronDown } from 'react-icons/fa';
function App() {
  return (
    <div className="todo">
      <div className="todo__header">
        <Header />
      </div>
      <div className="todo__sidebar">
        <aside className="sidebar">
          <section className="sidebar__category">
            <ul className="list">
              <Listitem text="Inbox" icon={<FaInbox className="list__item__icon"/>}/>
              <Listitem text="Today" icon={<FaCalendar className="list__item__icon"/>}/>
              <Listitem text="Next 7 day" icon={<FaCalendarAlt className="list__item__icon"/>}/>
            </ul>
          </section>
          <section className="sidebar__category">2</section>

        </aside>
      </div>
      <div className="todo__content">TodoContent</div>
    </div>
  );
}

export default App;
