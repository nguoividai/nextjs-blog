import React from "react";

const Timeline = () => {
  return (
    <>
      <div className="wrapper">
        <ul className="sessions">
          <li>
            <div className="time">09:00 AM</div>
            <p>How is it already 9:00? Just how??? 🤯🤯</p>
          </li>
          <li>
            <div className="time">09:05 AM</div>
            <p>Few more minutes of sleep won&apos;t do anyone any harm 🤷..</p>
          </li>
          <li>
            <div className="time">09:30 AM</div>
            <p>Get up 🙄</p>
          </li>
          <li>
            <div className="time">1:00 PM</div>
            <p>How can I feel sleepy again?😵</p>
          </li>
          <li>
            <div className="time">01:30 PM</div>
            <p>
              Lunch time after which sleep just doesn&apos;t want to let go of
              me. 🤝
            </p>
          </li>
          <li>
            <div className="time">3:30 PM</div>
            <p>Drink the magical chai, it will ward off sleep they said. 🤷‍</p>
          </li>
          <li>
            <div className="time">4:30 PM </div>
            <p>
              The only time I don&apos;t feel sleepy cause it&apos;s work out
              time. I mean walking time. 😹
            </p>
          </li>
          <li>
            <div className="time">07:00 PM </div>
            <p>Food my tummy needs, sleep my body needs.👿</p>
          </li>
          <li>
            <div className="time">07:30 PM </div>
            <p>My tummy&apos;s happy time 🍝</p>
          </li>
          <li>
            <div className="time">10:00 PM </div>
            <p>
              uh oh!!! fuel low, get some snacks but wait should I just take a
              quick nap?🤓{" "}
            </p>
          </li>
          <li>
            <div className="time">2:30 PM </div>
            <p>All hail! The time to sleep has finally arrived.😴😴😴😴😴 </p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default React.memo(Timeline);
