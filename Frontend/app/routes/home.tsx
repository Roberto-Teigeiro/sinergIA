import React from 'react';
import { useUser } from "@clerk/remix";
import SignOutButton from '../components/signOutButton';
import LoginButton from '~/components/loginButton';

const Example: React.FC = () => {
  const { isLoaded, isSignedIn, user } = useUser();
    if (!isSignedIn){
        return(
            <div>
            <div>You are not signed in!</div>
            <LoginButton/>
            </div>
        )
    }
  
  return (
    <div>
      Hello, {user?.firstName} welcome to Clerk
        <SignOutButton/>
      
    </div>
  );
};

export default Example;
