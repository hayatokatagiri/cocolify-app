import React from "react";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

// Googleボタンでサインイン
const AuthButton = () => {
  const [user] = useAuthState(auth);

  return (
    <>
      {user ? (
        <>
          <UserInfo />
          <SignOutButton />
        </>
      ) : (
        <SignInButton />
      )}
    </>
  );
};

// グーグルボタンでサインイン
const SignInButton = () => {
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider);
  };

  return (
    <a onClick={signInWithGoogle} href="#">
      <AccountCircleIcon />
      ログイン
    </a>
  );
};

const SignOutButton = () => {
  return (
    <a onClick={() => signOut(auth)} href="#">
      ログアウト
    </a>
  );
};

const UserInfo = () => {
  const user = auth.currentUser;

  if (user) {
    return <div className="userInfo">{user.displayName}</div>;
  }

  return null;
};

export default AuthButton;
