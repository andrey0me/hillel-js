import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../features/counter/counterSlice';

export default function Counter() {
  const value = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="text-center border p-4 w-25 mx-auto mt-5">
      <h1>
        <strong>Value: {value}</strong>
      </h1>
      <div className="d-flex justify-content-center gap-2 mt-3">
        <button className="btn btn-light" onClick={() => dispatch(increment())}>+</button>
        <button className="btn btn-light" onClick={() => dispatch(decrement())}>-</button>
      </div>
    </div>
  );
}
