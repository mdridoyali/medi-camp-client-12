import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { Card, Typography } from "@material-tailwind/react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
// import SocialLogin from "../Components/SocialLogin";
import useAuth from "../Hooks/useAuth";

const Login = () => {
  const { logInUser } = useAuth()
  const captchaRef = useRef(null);
  const [disabled, setDisabled] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/'
  // console.log(location.state)
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const toastId = toast.loading('logging in ...')
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    logInUser(email, password)
      .then((result) => {
        console.log(result.user);
        // navigate(location?.state ? location?.state : "/");
        toast.success('Logged in', { id: toastId, duration: 3000 })
        return navigate(from, { replace: true })
      })
      .catch((error) => {
        console.log(error)
       toast.error('Invalid email or password', { id: toastId, duration: 3000 })
      });
  };



  const handleValidateCaptcha = () => {
    const user_captcha_value = captchaRef.current.querySelector("input").value;
    console.log(user_captcha_value);
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  return (
    <div className="mx-auto flex w-11/12 items-center justify-between my-20">
      <Helmet>
        <title>Daily Dine | Login</title>
      </Helmet>
      <div className=" mx-auto flex ">
        <Card className="mx-auto " color="transparent" shadow={false}>
          <Typography className="text-center " variant="h4" color="blue-gray">
            Login
          </Typography>
          <form
            onSubmit={handleLogin}
            className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          >
            <div className="mb-1 flex flex-col gap-5">
              <input name="email" className="border p-1" placeholder="Email" type="email" />
              <input name="password" className="border p-1" placeholder="Password" type="password" />
              <LoadCanvasTemplate />
              <div className="relative flex w-full max-w-[24rem]">
                <input
                  ref={captchaRef}
                  name="captcha"
                  type="text"
                  placeholder="Captcha Code"
                  className="border w-full rounded p-1"
                />
                <button
                  onClick={handleValidateCaptcha}
                  size="sm"
                  //   color={email ? "gray" : "blue-gray"}
                    disabled={disabled}
                  className="!absolute right-0 top-0 bg-black text-white  btn-sm btn rounded"
                >
                  Invite
                </button>
              </div>
            </div>
            <button
              // disabled={disabled}
              type="submit"
              className="mt-5 btn w-full btn-sm bg-blue-700 text-white"
            >
              Login
            </button>

            {/* <SocialLogin></SocialLogin> */}
            <p color="gray" className="mt-4 text-center font-normal">
              New Here?{" "}
              <Link
                to={"/register"}
                href="#"
                className="font-bold text-blue-600"
              >
                Register
              </Link>
            </p>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Login;
