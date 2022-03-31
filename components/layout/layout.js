import { Fragment } from "react";
import Header from "./header";

function Layout(props) {
  return (
    <Fragment>
      <Header></Header>
      <main>
        {props.children}
      </main>
    </Fragment>
  )
};

export default Layout;