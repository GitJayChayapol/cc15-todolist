import "./App.scss";
import Listitem from "../components/Listitem";
import Header from "../components/Header";
import Lists from "../components/List";
import TodoHeader from "../components/Todo/TodoHeader";
import TodoCreate from "../components/Todo/TodoCreate";
import TodoLists from "../components/Todo/TodoLists";
import { FaInbox, FaCalendar, FaCalendarAlt, FaChevronDown } from 'react-icons/fa';
function App() {
  const genealLists = [
    {id:1,text:'Inbox',active:true,icon:<FaInbox/>},
    {id:2,text:'Today',active:false,icon:<FaCalendar/>},
    {id:3,text:'Next 7 day',active:false,icon:<FaCalendarAlt/>},]
  const projectLists = [
    {id:1,text:'Project-A',icon:<FaInbox/>, active:true},
    {id:2,text:'Project-B',icon:<FaInbox/>, active:false}]
  return (
    <div className="todo">
      <div className="todo__header">
        <Header />
      </div>
      <div className="todo__sidebar">
        <aside className="sidebar">
          <section className="sidebar__category">
            <Lists data={genealLists}/>
          </section>
          <section className="sidebar__category">
            <div className="accordion">
              <div className="accordion__toggle">
                <li className="accordion__item">
                  <FaChevronDown className="accordion__item__icon accordion__item__active"/>
                  <p className="accordion__item__text">Projects</p>
                </li>
              </div>
              <Lists data={projectLists}/>
            </div>
          </section>

        </aside>
      </div>
      <div className="todo__content">
        <main className="todo__container">
          <TodoHeader/>
          <TodoCreate/>
          <TodoLists/>
        </main>
      </div>
    </div>
  );
}

export default App;

/* Challenge
- ให้ 2 section render UI ที่...
  - Option A (2/5): render UI ต่างกัน <List/> กับ <Accordian/> : Difficult 2.5
  - Option B (4/5): render UI เดียวกัน เช่น <Lists/>
  - Option C (5/5): render UI <Lists/> ภายใต้ <Accordian> <Lists/> <Accordian>
  // ใช้ props.children
*/