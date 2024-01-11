import React from "react";

function ShockAndShake() {
  const [pwd, setPwd] = React.useState("");
  const [c,setCount]=React.useState(0);
  const refp=React.useRef();
  const pid=React.useId();
  const sid=React.useId();
  React.useEffect(()=>{
    setCount(c+1);
        refp.current.style.color="red";

  },[pwd])
  return (
    <>
      <p>
        Enter Password:
        <input
          type="text"
          ref={refp}
          id={pid+"ggn"}
          value={pwd}
          onChange={(e) => {
            setPwd(e.target.value);
          }}
        />
      </p>
      <p id={sid}>Length of password :{c}</p>
    </>
  );
}

export default ShockAndShake;
