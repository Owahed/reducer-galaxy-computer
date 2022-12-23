import React, { useReducer } from "react";
import { initialValue, reducer } from "../state/formReducer";

const Form = () => {
  const [state, dispatch] = useReducer(reducer, initialValue);

  const submit = (event) => {
    event.preventDefault();

    console.log(state);
  };
  return (
    <div>
      <form action={submit}>
        <div style={{ marginTop: "70px" }}>
          <div style={{ margin: "20px" }}>
            <label>First Name: </label>
            <input
              type="text"
              name="firstName"
              onBlur={(e) =>
                dispatch({
                  type: "IMP",
                  payload: { name: e.target.name, value: e.target.value },
                })
              }
            />
          </div>
          <div style={{ margin: "20px" }}>
            <label>Last Name: </label>
            <input
              type="text"
              name="lastName"
              onBlur={(e) =>
                dispatch({
                  type: "IMP",
                  payload: { name: e.target.name, value: e.target.value },
                })
              }
            />
          </div>
          <div style={{ margin: "20px" }}>
            <label> Email: </label>
            <input
              type="email"
              name="email"
              onBlur={(e) =>
                dispatch({
                  type: "IMP",
                  payload: { name: e.target.name, value: e.target.value },
                })
              }
            />
          </div>
          <div style={{ margin: "20px" }}>
            <label> Male: </label>
            <input
              type="radio"
              name="gender"
              value="male"
              onChange={(e) =>
                dispatch({
                  type: "IMP",
                  payload: { name: e.target.name, value: e.target.value },
                })
              }
            />
          </div>
          <div style={{ margin: "20px" }}>
            <label> Female: </label>
            <input
              type="radio"
              name="gender"
              value="female"
              onChange={(e) =>
                dispatch({
                  type: "IMP",
                  payload: { name: e.target.name, value: e.target.value },
                })
              }
            />
          </div>
          <div style={{ margin: "20px" }}>
            <label> Other: </label>
            <input
              type="radio"
              name="gender"
              value="other"
              onChange={(e) =>
                dispatch({
                  type: "IMP",
                  payload: { name: e.target.name, value: e.target.value },
                })
              }
            />
          </div>
          <div style={{ margin: "20px" }}>
            <label> Message: </label>
            <textarea
              name="message"
              onBlur={(e) =>
                dispatch({
                  type: "IMP",
                  payload: { name: e.target.name, value: e.target.value },
                })
              }
            ></textarea>
          </div>
        </div>
        <input
          type="checkbox"
          id="term"
          name="term"
          onClick={() => dispatch({ type: "TOGGLE" })}
        />
        <label for="term"> OK</label>
        <br></br>
        <button type="submit" disabled={state.term} onClick={submit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
