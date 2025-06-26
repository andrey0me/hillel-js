import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  task: Yup.string()
    .min(5, 'Мінімум 5 символів')
    .required('Обовʼязкове поле'),
});

export default function TodoForm() {
  const [tasks, setTasks] = useState([]);

  const handleSubmit = (values, { resetForm }) => {
    setTasks([...tasks, { text: values.task, completed: false }]);
    resetForm();
  };

  const toggle = (index) => {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    setTasks(updated);
  };

  const deleteTodo = (index) => {
    const updated = [...tasks];
    updated.splice(index, 1);
    setTasks(updated);
  };

  return (
    <>
      <Formik
        initialValues={{ task: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="mb-3">
          <div className="input-group">
            <Field
              name="task"
              className="form-control"
              placeholder="Введіть завдання"
            />
            <button type="submit" className="btn btn-success">
              Додати
            </button>
          </div>
          <ErrorMessage
            name="task"
            component="div"
            className="text-danger mt-1"
          />
        </Form>
      </Formik>

      <ul className="list-group">
        {tasks.map((task, i) => (
          <li
            key={i}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <span
              onClick={() => toggle(i)}
              style={{ cursor: 'pointer' }}
              className={task.completed ? 'text-decoration-line-through' : ''}
            >
              {task.text}
            </span>
            <button
              className="btn btn-sm btn-danger"
              onClick={() => deleteTodo(i)}
            >
              Видалити
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
