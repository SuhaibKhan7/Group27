import { useRef, useState } from "react";
import "./App.css";
//usestate will re-render
//useref will not re-render
//regular expression: kisi bdi si string se ek pattern find out krna
function App() {
  /*const [username,setusername]=useState('') //we use square brackets because it returns an array of variable and a function
  
  function getusername(e)
  {
    e.preventDefault();
    console.log(e.target.value)
  }
  */
  const username = useRef();
  const oldusername = useRef();
  const newusername = useRef();
  const password = useRef();
  const [loginerr, setloginerr] = useState("");
  const [message, setmessage] = useState("");
  const [userList, setUserList] = useState([]);

  async function validation(e) {
    e.preventDefault();
    console.log(username.current.value);
    console.log(password.current.value);
    const user = username.current.value;
    //const password=password.current.value;

    const data = {
      username: username.current.value,
      password: password.current.value,
    };
    const regexp = /^[A-Za-z]{7,}$/; //starting match ^ and ending match $
    //test will return true if it finds pattern else false
    //execute will return a string
    //7, means it will take 7 or more than 7 but 7 means exact 7
    if (!regexp.test(user)) {
      //console.log('not valid')
      setloginerr("Not valid username");
    } else {
      /*
        else
        {
          setloginerr('Valid Username');
        }*/
      try {
        const response = await fetch("http://127.0.0.1:4000/SignUp", {
          //1.method 2.type of content 3.Data jayega string format mai
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify(data),
        });

        if (response.status == 200) {
          console.log(response);
          const datareceived = await response.json();
         console.log(datareceived.users);
          setUserList(datareceived.users || []);
          setmessage(datareceived.message);
        }

        if (response.status == 400) {
          setmessage("Username or password missing");
        }
      } catch (error) {
        console.log(error);
      }
    }
  }



  async function updateUser(e) {
    e.preventDefault();
    const data =
    {
      oldusername: oldusername.current.value,
      newusername: newusername.current.value
    }

    const response = await fetch('http://127.0.0.1:4000/Update', {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
    if (response.status == 200) {
      console.log(response);
      const datareceived = await response.json();
      setUserList(datareceived.arrayofusers || []);
      setmessage("Update Successfull");
    }
  }



  return (
    <>
      <form action="" onSubmit={validation}>
        <input type="text" placeholder="username" ref={username} />
        <input
          type="password"
          name=""
          id=""
          placeholder="password"
          ref={password}
        />
        <input type="submit" name="" id="" value="Sign Up" />
        {/*  
        <button onClick={submit}>
            Login
        </button> */}
      </form>

      <h2>Http Methods Operations</h2>
      <form action="">
        <input type="text" placeholder="Enter Old username" ref={oldusername} />
        <input type="text" placeholder="Enter New username" ref={newusername} />
        {/* {/<input type="submit" name="" id="" value="Update" />/} */}
        <button onClick={updateUser}>
          Update
        </button>
      </form>
      <p
        style={{
          color: loginerr.includes("Not valid username") ? "red" : "green",
        }}
      >
        {loginerr}
      </p>
      <h3>{message}</h3>
      <ol>
        {userList.map((user, index) => {
          //If we write anything in more than one line in an arror function it requires the return statement .
          return <li key={index}>{user.username}</li>
        })}
      </ol>
    </>
  );
}

export default App;