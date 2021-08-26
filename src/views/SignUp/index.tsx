import React, { useState } from "react";
import { useHistory } from "react-router";
import { Input } from "../../components/ui";
import Button from "../../components/ui/Button";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const history = useHistory();
  const submit = () => {
    history.replace("/sign_in");
  };
  return (
    <div>
      <Input value={username} onChange={setUsername} placeholder="Please enter username" />
      <Input value={password} onChange={setPassword} placeholder="Please enter password" />
      <Input value={repeatPassword} onChange={setRepeatPassword} placeholder="Please repeat enter password" />
      <Button onChange={submit}>Sign up</Button>
    </div>
  );
};

export default SignUp;
