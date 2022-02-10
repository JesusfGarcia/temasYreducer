import "./App.scss";
import React from "react";
import { Button } from "./components/Buttons";

import { actions, initialState, reducer } from "./reducer";

function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const postRegister = () => {
    try {
      dispatch({ type: actions.POST_MENTORIA });
      setTimeout(() => {
        dispatch({ type: actions.POST_MENTORIA_SUCCESS });
      }, 2000);
    } catch (error) {
      dispatch({ type: actions.POST_MENTORIA_ERROR });
    }
  };

  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: actions.LLENAR_MENTORIA, name, payload: value });
  };

  return (
    <div className="container">
      <div className="carta">
        <input
          value={state.mentoria.title}
          name="title"
          placeholder="Titulo del registro"
          onChange={handleRegisterChange}
        />
        <input
          value={state.mentoria.description}
          name="description"
          placeholder="descripción"
          onChange={handleRegisterChange}
        />
        <input
          value={state.mentoria.other}
          name="other"
          placeholder="other"
          onChange={handleRegisterChange}
        />
        <div className="buttons__row">
          <Button
            type="primary"
            text="Login"
            isLoading={state.isLoading}
            onClick={postRegister}
          />
          <Button
            type="danger"
            text="Cancelar"
            onClick={() => alert("log out")}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
