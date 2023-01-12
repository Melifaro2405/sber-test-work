import {useContext} from "react";
import {TaskListContext} from "../../context";
import styles from './TaskList.module.css'

const getDate = (date) => date ? new Date(date).toLocaleDateString() : '';

const TaskList = () => {
  const {taskList, handleDeleteTask} = useContext(TaskListContext)

  const tableBody = taskList.map(({name, status, dateCreate, dateClose}, index) => (
    <tr key={index}>
      <td>{name}</td>
      <td>{status}</td>
      <td>{getDate(dateCreate)}</td>
      <td>{getDate(dateClose)}</td>
      <td className={styles.deleteTask} onClick={() => handleDeleteTask(name)}>&#10007;</td>
    </tr>
  ))

  return (
    <main>
      <table>
        <thead>
        <tr className={styles.thead}>
          <td>Задача</td>
          <td>Статус</td>
          <td>Дата создания</td>
          <td>Дата выполнения</td>
          <td>Удалить</td>

        </tr>
        </thead>
        <tbody>
        {tableBody.length ? tableBody : <p>Задачи отсутствуют</p>}
        </tbody>
      </table>
    </main>
  );
};

export default TaskList;