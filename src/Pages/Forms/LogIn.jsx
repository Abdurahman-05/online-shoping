import Form from "./Form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  const navigate = useNavigate();

  const handleLogin = (email, password) => {
    axios
      .post(
        "http://localhost:8080/Oline_Shopping_Platform_war_exploded/LogIn",
        {
          email: email,
          password: password,
        }
      )
      .then((response) => {
        console.log(response);
        if (response.data.success) {
          console.log(response.data.success);
          navigate("/Products");
        } else {
          alert("Invalid email or password");
        }
      })
      .catch((error) => {
        console.log(error);
        alert("Invalid email or password");
      });

    return true;
  };

  return <Form signup={true} Port={"/signUp"} handleSubmit={handleLogin} />;
};

export default LogIn;
