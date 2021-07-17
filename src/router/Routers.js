import React from "react";

import "../App.css";
import { HashRouter as Routers, Route, Switch, useRouteMatch } from "react-router-dom";
import Home from "../page/home";
import history from "../component/history";
import AboutUs from "../page/aboutus";
import SignUpScreen from "../page/Authorizen/signup";
import SuccessSignUpScreen from "../page/Authorizen/signupsuccess";
import OtpScreen from "../page/Authorizen/otp";
import EditProfilScreen1 from "../page/profile/EditProfilScreen1";
import Authorize from "../page/Authorizen/authorize";
import PermissionScene from "../page/Authorizen/permission";
import LoginScreen from "../page/Authorizen/login";
import { FloatingMenu } from "../component/FloatingMenu";
import AppNavigation from "../component/Nav";
import BottomNav from "../component/BottomNav";
import Notification from "../page/notification";
import JourneyHome from "../page/journey/Journey_firstpatientvisit";
import JourneyDiagnosis from "../page/journey/Journey_diagnosis";
import JourneyTreatmentDecision from "../page/journey/Journey_treatmentdecision";
import JourneyOngoingTreatment from "../page/journey/Journey_ongoingtreatment";

class AppRouter extends React.Component {
  componentDidMount() {
    // const { match } = this.props;
    // window.addEventListener("popstate", () => {
    //   console.log(match);
    // });
  }
  render() {
    return (
      <Routers basename={"/"} history={history}>
        <Route exact path={"/"} component={Authorize} />
        <Route path={"/permission"} component={PermissionScene} />
        <Route path={"/login"} component={StackLogin} />
        <Route path={"/home"} component={StackHome} />
        <Route path={"/notification"} component={StackNotification} />
        <Route
          path={"/journey/0/:title"}
          component={(props) => (
            <div>
              <JourneyHome {...props} />
              <BottomNav />
              <FloatingMenu />
            </div>
          )}
        />
        <Route
          path={"/journey/1/:title"}
          component={(props) => (
            <div>
              <JourneyDiagnosis {...props} />
              <BottomNav />
              <FloatingMenu />
            </div>
          )}
        />
        <Route
          path={"/journey/2/:title"}
          component={(props) => (
            <div>
              <JourneyTreatmentDecision {...props} />
              <BottomNav />
              <FloatingMenu />
            </div>
          )}
        />
        <Route
          path={"/journey/3/:title"}
          component={(props) => (
            <div>
              <JourneyOngoingTreatment {...props} />
              <BottomNav />
              <FloatingMenu />
            </div>
          )}
        />
      </Routers>
    );
  }
}
function App() {
  return (
    <div>
      <Routers history={history}></Routers>
    </div>
  );
}
function StackLogin() {
  let { path, url } = useRouteMatch();
  return (
    <Switch history={history}>
      <Route path={`${url}/signup`} component={SignUpScreen} />
      <Route path={`${url}/success`} component={SuccessSignUpScreen} />
      <Route path={`${url}/otp`} component={OtpScreen} />
      <Route path={`${url}/profil`} component={EditProfilScreen1} />
      <Route exact path={path} component={LoginScreen} />
    </Switch>
  );
}
function StackHome() {
  let { path, url } = useRouteMatch();
  return (
    <div>
      <Switch basename={`${url}`} history={history}>
        <Route exact path={path} component={Home} />
        <Route path={"/journey/:id"} component={JourneyHome} />
      </Switch>
      <BottomNav />
      <FloatingMenu />
    </div>
  );
}
function StackNotification() {
  let { path, url } = useRouteMatch();
  return (
    <div>
      <Switch basename={`${url}`} history={history}>
        <Route exact path={path} component={Notification} />
      </Switch>
      <BottomNav />
      <FloatingMenu />
    </div>
  );
}
export default AppRouter;
