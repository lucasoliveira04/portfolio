

import { HeaderComponent } from "../components/_header";
import {Profile} from "../components/profile.jsx";

export const HomePage = () => {
  return (
    <div className="App">
        <HeaderComponent/>
        <Profile/>
    </div>
  )
};
