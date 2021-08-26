import React, { useState } from "react";
import logo from "../../assets/icons/logo.svg";
import { Input } from "../../components/ui";
import Button from "../../components/ui/Button";

const slogan = "My chat";
const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const gotoSingUp = () => {};
  const submit = () => {};
  return (
    <div>
      <img style={{width: 60, height: 60, margin: '0 auto', display: 'block'}} src={logo} alt="logo" />
      <h1>{slogan}</h1>
      <Input value={username} onChange={(value) => setUsername(value)} placeholder="please enter your username" />
      <Input value={password} onChange={(value) => setPassword(value)} placeholder="Password" />
      <div>
        <Button onClick={gotoSingUp}>Sign up</Button>
        <Button onClick={submit}>Sign in</Button>
      </div>
      <div>
        <a href="/account/reset_password">lost password?</a>
      </div>
      <p>Power by XXXX</p>
    </div>
  );
};

export default SignIn;
