import React from "react";

function Background(props) {
  return (
    <>
      <main role="main" class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
        <h1 className="code-line" data-line-start={3} data-line-end={4}>
          <a id="1_Background_3" />
          1. Background
        </h1>
        <hr />
        <p className="has-line-data" data-line-start={6} data-line-end={7}>
          A company would like to develop a feature to ensure that team members
          “perform an action” (Confirm I’ve read a new policy, Confirm I’ve
          changed the expired password for security, etc.). An idea is
          suggested: Build an app to require the selected team
          members/departments/whole company to confirm perform an action (I did
          it):
        </p>
        <ul>
          <li className="has-line-data" data-line-start={8} data-line-end={9}>
            There should be a place for creating the “Action” and select the
            team members/departments/whole company to perform it.
          </li>
          <li className="has-line-data" data-line-start={9} data-line-end={10}>
            There should be a place for member to confirm he/she performed the
            required Action.
          </li>
          <li className="has-line-data" data-line-start={10} data-line-end={12}>
            In the Report Dashboard, show the status of how the “Action” has
            been performed? Who did or did not? etc. (Need more insights from
            you)
          </li>
        </ul>
        <h1 className="code-line" data-line-start={12} data-line-end={13}>
          <a id="2_Goals_12" />
          2. Goals
        </h1>
        <hr />
        <p className="has-line-data" data-line-start={14} data-line-end={16}>
          Allow managers to create, assign and track actions.
          <br />
          Allow team members to receive and confirm status of actions.
        </p>
        <h1 className="code-line" data-line-start={17} data-line-end={18}>
          <a id="3_User_Journey_17" />
          3. User Journey
        </h1>
        <hr />
        <ol>
          <li className="has-line-data" data-line-start={19} data-line-end={21}>
            <strong>Manager</strong>
          </li>
        </ol>
        <ul>
          <li className="has-line-data" data-line-start={21} data-line-end={22}>
            Signs into their profile if existing; otherwise creates one
          </li>
          <li className="has-line-data" data-line-start={22} data-line-end={26}>
            Landing page is Dashboard
            <ul>
              <li
                className="has-line-data"
                data-line-start={23}
                data-line-end={26}
              >
                Table of Actions:
                <ul>
                  <li
                    className="has-line-data"
                    data-line-start={24}
                    data-line-end={25}
                  >
                    Action, Created By, Assigned To, Status
                  </li>
                  <li
                    className="has-line-data"
                    data-line-start={25}
                    data-line-end={26}
                  >
                    Timestamps: Created On, Accepted On, Completed On
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="has-line-data" data-line-start={26} data-line-end={28}>
            “Create Action” page
          </li>
        </ul>
        <ol start={2}>
          <li className="has-line-data" data-line-start={28} data-line-end={30}>
            <strong>Team Member</strong>
          </li>
        </ol>
        <ul>
          <li className="has-line-data" data-line-start={30} data-line-end={31}>
            Signs into their profile if existing; otherwise creates one
          </li>
          <li className="has-line-data" data-line-start={31} data-line-end={37}>
            Landing page is Dashboard
            <ul>
              <li
                className="has-line-data"
                data-line-start={32}
                data-line-end={37}
              >
                Table of Actions:
                <ul>
                  <li
                    className="has-line-data"
                    data-line-start={33}
                    data-line-end={34}
                  >
                    Action, Created By, Status (Yes/No)
                  </li>
                  <li
                    className="has-line-data"
                    data-line-start={34}
                    data-line-end={35}
                  >
                    Timestamps: Created On, Accepted On, Completed On
                  </li>
                  <li
                    className="has-line-data"
                    data-line-start={35}
                    data-line-end={37}
                  >
                    Submit confirmations as checkboxes
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
        <h1 className="code-line" data-line-start={37} data-line-end={38}>
          <a id="4_Sitemap_37" />
          4. Sitemap
        </h1>
        <hr />
        <p className="has-line-data" data-line-start={39} data-line-end={40}>
          Single Page Application
        </p>
        <ul>
          <li className="has-line-data" data-line-start={41} data-line-end={42}>
            Sign-in Dialog
          </li>
          <li className="has-line-data" data-line-start={42} data-line-end={45}>
            Dashboard
            <ul>
              <li
                className="has-line-data"
                data-line-start={43}
                data-line-end={45}
              >
                Create Action (for managers)
              </li>
            </ul>
          </li>
        </ul>
        <h1 className="code-line" data-line-start={45} data-line-end={46}>
          <a id="5_Main_Features_45" />
          5. Main Features
        </h1>
        <hr />
        <h2 className="code-line" data-line-start={47} data-line-end={48}>
          <a id="51_Action_47" />
          5.1. Action
        </h2>
        <p className="has-line-data" data-line-start={49} data-line-end={50}>
          Feature specifications and special use cases of feature “Create an
          Action”
        </p>
        <p className="has-line-data" data-line-start={51} data-line-end={52}>
          Create An Action
        </p>
        <ul>
          <li className="has-line-data" data-line-start={52} data-line-end={53}>
            Title
          </li>
          <li className="has-line-data" data-line-start={53} data-line-end={54}>
            Content
          </li>
          <li className="has-line-data" data-line-start={54} data-line-end={58}>
            Select Team Member
            <ul>
              <li
                className="has-line-data"
                data-line-start={55}
                data-line-end={56}
              >
                Enter Name
              </li>
              <li
                className="has-line-data"
                data-line-start={56}
                data-line-end={58}
              >
                [Name / Dept]
              </li>
            </ul>
          </li>
        </ul>
        <h2 className="code-line" data-line-start={58} data-line-end={59}>
          <a id="52_Confirm_Action_58" />
          5.2. Confirm Action
        </h2>
        <p className="has-line-data" data-line-start={60} data-line-end={61}>
          Performed on Dashboard
        </p>
        <h2 className="code-line" data-line-start={62} data-line-end={63}>
          <a id="53_Dashboard_62" />
          5.3. Dashboard
        </h2>
        <p className="has-line-data" data-line-start={64} data-line-end={65}>
          Managers:
        </p>
        <ul>
          <li className="has-line-data" data-line-start={65} data-line-end={66}>
            All actions assigned by that person and subordinates
          </li>
          <li className="has-line-data" data-line-start={66} data-line-end={67}>
            Team members assigned
          </li>
          <li className="has-line-data" data-line-start={67} data-line-end={69}>
            Status
          </li>
        </ul>
        <p className="has-line-data" data-line-start={69} data-line-end={70}>
          Team Members:
        </p>
        <ul>
          <li className="has-line-data" data-line-start={70} data-line-end={71}>
            All actions assigned by managers
          </li>
          <li className="has-line-data" data-line-start={71} data-line-end={72}>
            Managers that assigned actions
          </li>
          <li className="has-line-data" data-line-start={72} data-line-end={73}>
            Status
          </li>
          <li className="has-line-data" data-line-start={73} data-line-end={75}>
            Confirm Action
          </li>
        </ul>
        <h1 className="code-line" data-line-start={75} data-line-end={76}>
          <a id="6_Potential_Feature_Expansion_75" />
          6. Potential Feature Expansion
        </h1>
        <hr />
        <ul>
          <li className="has-line-data" data-line-start={77} data-line-end={78}>
            Assignment Notification
          </li>
          <li className="has-line-data" data-line-start={78} data-line-end={79}>
            Assignment Reminder
          </li>
          <li className="has-line-data" data-line-start={79} data-line-end={80}>
            Different types of Assignment (as of now it is a one-liner)
          </li>
          <li className="has-line-data" data-line-start={80} data-line-end={82}>
            Track deadlines
          </li>
        </ul>
        <h1 className="code-line" data-line-start={82} data-line-end={83}>
          <a id="7_References_82" />
          7. References
        </h1>
        <hr />
        <p className="has-line-data" data-line-start={84} data-line-end={85}>
          Dashboard Design Inspiration:{" "}
          <a href="https://getbootstrap.com/docs/4.5/examples/dashboard/">
            https://getbootstrap.com/docs/4.5/examples/dashboard/
          </a>
        </p>
      </main>
      ;
    </>
  );
}

export default Background;
