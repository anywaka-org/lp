import { Link, Route, Routes, useNavigate } from "react-router-dom";
import Help from "../../assets/svg/help";
import Message from "../../assets/svg/message";
import Negotiation from "../../assets/svg/negotiaton";
import Notification from "../../assets/svg/Notfication";
import Profile from "../../assets/svg/Profile";
import Home from "../../pages/Home";
import { useLocation } from "react-router-dom";
import NewErrand from "../../assets/svg/newErrand";
import EmptyState from "../EmptyState";
import Empty1 from "../../assets/png/Empty1.png";
import Empty2 from "../../assets/png/Empty2.png";
import GetHelp from "../../pages/GetHelp";
import Messages from "../../pages/message";
import Negotiations from "../../pages/Negotiations";
import NotificationPage from "../../pages/Notification";
import UserProfile from "../../pages/Profile";
import { useEffect, useMemo, useState } from "react";
import useAxios from "../../config/useAxios";
import axios from "../../config/protected";
import { useDispatch } from "react-redux";
import { enterUser } from "../../utils/features/user";
import { upDateErrands } from "../../utils/features/errands";
import Protected from "../../config/protected";
import io from "socket.io-client";
import { Base_url } from "../../config/axiosInstance";
import { useSelector } from "react-redux";
import {
  setActiveChats,
  setChatsLoading,
  setOtherPartyChats,
  setUnseen,
} from "../../utils/messages/message";
import { getToken, getMessaging, onMessage } from "firebase/messaging";
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { setActiveBids, setNewBid } from "../../utils/messages/bid";
import { changeCenter } from "../../utils/features/mapCenter";
import ErrandMap from "../../pages/Home/ErrandMap";
import Utility from "../../utils/messages/utils";
import Button from "../Button";

const socket = io.connect(
  `${Base_url}?token=${sessionStorage.getItem("token")}`,
  { transports: ["websocket"] }
);
export default function MainApp() {
  const { pathname } = useLocation();
  const [newMessage, setNewMessage] = useState(false);
  const message = useSelector((state) => state.message);
  const biddings = useSelector((state) => state.bid);

  //      console.log(pathname);
  const type = [
    {
      name: "Notification",
      img: Empty1,
      instruction: "Transactions you have started are stored here",
      note: "We noticed that you have not started any transaction for an errand. Click the button below to view errands and start a transaction",
    },
    {
      name: "Messages",
      img: Empty2,
      instruction: "Chat with helpers and helpees :)",
      note: "We noticed that you have not started any chat. Click the button below to view errands and start a chat",
    },
  ];
  const active = [
    pathname === "/home",
    pathname === "/messages",
    pathname === "/negotiations",
    pathname === "/notification",
    pathname === "/profile",
  ];
  let token = sessionStorage.getItem("token");
  const dispatch = useDispatch();

  //       console.log(token);
  
  const [response, error, fetchData, loading] = useAxios();
  const [count, setCount] = useState(0);
  //    const {geolocation}=Navigator()

  const { getBid, getCuurentMessageData, getMessages } = Utility();

  const getData = () => {
    // console.log('getting');
    navigator.geolocation.getCurrentPosition(async (location) => {
      const { longitude, latitude } = location.coords;
      dispatch(changeCenter([longitude, latitude]));
      // console.log('input',latitude);
      await fetchData({
        method: "PATCH",
        url: "user",
        axiosInstance: Protected(sessionStorage.getItem("token")),
        requestConfig: {
          location: {
            type: "Point",
            coordinates: [longitude, latitude],
          },
        },
      });
    });
  };

  useEffect(() => {
    // console.log('hi');

    if (token) {
      // console.log('works');
      getData();
    }
  }, [token, message]);

  console.log(response);
  const update = () => {
    dispatch(enterUser(response));
  };
  useEffect(() => (response ? update() : ""), [response]);

  useEffect(() => getMessages(), []);

  useEffect(() => {
    socket.on("new-message", (data) => {
      console.log(data, message);
      getCuurentMessageData();
    });

    socket.on("new-bid", (data) => {
      getBid(biddings.activeBids.type);
    });
    socket.on("bid-accepted", (data) => {
      getBid(biddings.activeBids.type);
    });
    socket.on("errand-accepted", (data) => {
      getBid(biddings.activeBids.type);
    });
    socket.on("errand-cancelled", (data) => {
      getBid(biddings.activeBids.type);
    });
    socket.on("completed-errand", (data) => {
      getBid(biddings.activeBids.type);
    });
    socket.on("errand-completion-confirmed", (data) => {
      getBid(biddings.activeBids.type);
      getData();
    });
  }, [socket]);

  const [nots, setNots] = useState();

  const [fbtoken, setToken] = useState();

  const firebaseConfig = {
    apiKey: "AIzaSyDURM0Rqh0Pd1Nt_njao2vr6kUOy-zb5WE",
    authDomain: "anywork-37e04.firebaseapp.com",
    projectId: "anywork-37e04",
    storageBucket: "anywork-37e04.appspot.com",
    messagingSenderId: "648317131290",
    appId: "1:648317131290:web:cde8b0eaee2c550e7dcfa3",
    measurementId: "G-HW2MMHM1ZZ",
  };
  const user = useSelector((state) => state.user);

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  useEffect(() => {
    getToken(getMessaging(), {
      vapidKey:
        "BNWYgwhbaYL4vcAodFKnFFe1naZst1SsR31ercRz9mxtW3_gYTwrpoC0UUof5eqrQ9HYHrZlMTiiZ6w_jZ0rhJg",
    })
      .then((token) => {
        console.log(token);
        setToken(token);
        onMessage(console.log.bind());
      })
      .catch(console.log.bind());
  }, []);
  const [notification, noterror, pushNot, notloading] = useAxios();
  useEffect(() => {
    if (fbtoken) {
      pushNot({
        method: "post",
        url: "notification/fb-registration",
        axiosInstance: Protected(sessionStorage.getItem("token")),
        requestConfig: {
          token: fbtoken,
        },
      });
    }
  }, [fbtoken]);
  const navigate = useNavigate();
  const width = window.innerWidth;
  return width < 600 ? (
    <div className="mainApp">
      <main class="content">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route
            path="notification"
            element={
              nots ? <NotificationPage /> : <EmptyState type={type[0]} />
            }
          />
          <Route path="negotiations/*" element={<Negotiations />} />
          <Route path="get_help/*" element={<GetHelp />} />
          <Route
            path="messages/*"
            element={
              message?.activeChats?.chats ? (
                <Messages />
              ) : (
                <EmptyState type={type[1]} />
              )
            }
          />
          <Route path="map/:errandId" element={<ErrandMap />} />
          <Route path="profile/*" element={<UserProfile />} />
        </Routes>
      </main>
      {pathname !== "/get_help" && (
        <Link to="get_help" className="post_errand">
          <NewErrand />
        </Link>
      )}
      <nav>
        <Link onClick={() => getMessages()} to="/home">
          <Help fill={active[0] ? " rgb(93, 95, 239)" : "none"} />
        </Link>
        <Link to="messages">
          <Message fill={active[1] ? " rgb(93, 95, 239)" : "none"} />
        </Link>
        <Link to="negotiations">
          <Negotiation fill={active[2] ? " rgb(93, 95, 239)" : "none"} />
        </Link>
        <Link to="notification">
          <Notification fill={active[3] ? " rgb(93, 95, 239)" : "none"} />
        </Link>
        <Link to="profile">
          <Profile fill={active[4] ? " rgb(93, 95, 239)" : "none"} />
        </Link>
      </nav>
    </div>
  ) : (
    <div class="desktop">
      <div className="dash_board">
        <div className="top">
          <div className="avatar">
            <img src={user.value.avatar} alt="" />
          </div>
          <div className="name_username">
            <h4>{user.value.fullName}</h4>
            <span>{user.value.username}</span>
          </div>
        </div>

        <div className="navs">
          <p>Menu</p>
          <nav>
            <Link onClick={() => getMessages()} to="/home">
              <Help fill={active[0] ? " rgb(93, 95, 239)" : "none"} />{" "}
              <p style={{ color: `${active[0] ? " rgb(93, 95, 239)" : ""}` }}>
                {" "}
                Errands
              </p>
            </Link>
            <Link to="messages">
              <Message fill={active[1] ? " rgb(93, 95, 239)" : "none"} />{" "}
              <p style={{ color: `${active[1] ? " rgb(93, 95, 239)" : ""}` }}>
                {" "}
                Message
              </p>
            </Link>
            <Link to="negotiations">
              <Negotiation fill={active[2] ? " rgb(93, 95, 239)" : "none"} />{" "}
              <p style={{ color: `${active[2] ? " rgb(93, 95, 239)" : ""}` }}>
                Negotaitions
              </p>
            </Link>

            <hr />

            <Link to="profile">
              <Profile fill={active[4] ? " rgb(93, 95, 239)" : "none"} />
              <p style={{ color: `${active[4] ? " rgb(93, 95, 239)" : ""}` }}>
                Profile
              </p>
            </Link>
            <Link onClick={() => sessionStorage.clear()} to="/auth">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.4"
                  d="M15.0165 7.38948V6.45648C15.0165 4.42148 13.3665 2.77148 11.3315 2.77148H6.45646C4.42246 2.77148 2.77246 4.42148 2.77246 6.45648V17.5865C2.77246 19.6215 4.42246 21.2715 6.45646 21.2715H11.3415C13.3705 21.2715 15.0165 19.6265 15.0165 17.5975V16.6545"
                  stroke="#AEAEB9"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M21.8096 12.0214H9.76855"
                  stroke="#AEAEB9"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M18.8818 9.10626L21.8098 12.0213L18.8818 14.9373"
                  stroke="#AEAEB9"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p>Logout</p>
            </Link>
          </nav>
        </div>
      </div>
      <div className="content">
        <div className="notification_upload">
          <Link to={"notification"}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.0206 2.91003C8.71058 2.91003 6.02058 5.60003 6.02058 8.91003V11.8C6.02058 12.41 5.76058 13.34 5.45058 13.86L4.30058 15.77C3.59058 16.95 4.08058 18.26 5.38058 18.7C9.69058 20.14 14.3406 20.14 18.6506 18.7C19.8606 18.3 20.3906 16.87 19.7306 15.77L18.5806 13.86C18.2806 13.34 18.0206 12.41 18.0206 11.8V8.91003C18.0206 5.61003 15.3206 2.91003 12.0206 2.91003Z"
                stroke="#020317"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
              />
              <path
                d="M13.8699 3.19994C13.5599 3.10994 13.2399 3.03994 12.9099 2.99994C11.9499 2.87994 11.0299 2.94994 10.1699 3.19994C10.4599 2.45994 11.1799 1.93994 12.0199 1.93994C12.8599 1.93994 13.5799 2.45994 13.8699 3.19994Z"
                stroke="#020317"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15.0195 19.0601C15.0195 20.7101 13.6695 22.0601 12.0195 22.0601C11.1995 22.0601 10.4395 21.7201 9.89953 21.1801C9.35953 20.6401 9.01953 19.8801 9.01953 19.0601"
                stroke="#020317"
                stroke-width="1.5"
                stroke-miterlimit="10"
              />
            </svg>
          </Link>
          <Button
            onClick={() => navigate("/get_help")}
            content={"upload errand"}
          />
        </div>
        <div className="routes">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route
              path="notification"
              element={
                nots ? <NotificationPage /> : <EmptyState type={type[0]} />
              }
            />
            <Route path="negotiations/*" element={<Negotiations />} />
            <Route path="get_help/*" element={<GetHelp />} />
            <Route
              path="messages/*"
              element={
                message?.activeChats?.chats ? (
                  <Messages />
                ) : (
                  <EmptyState type={type[1]} />
                )
              }
            />
            <Route path="map/:errandId" element={<ErrandMap />} />
            <Route path="profile/*" element={<UserProfile />} />
          </Routes>
        </div>
      </div>
      <div className="notifcation_post"></div>
    </div>
  );
}
