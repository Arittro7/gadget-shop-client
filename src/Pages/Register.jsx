import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { useForm } from "react-hook-form";

const Register = () => {
  const auth = useAuth();
  console.log(auth);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register Now!</h1>
            <p className="py-6">
              Want`s to explore the trending gadget in the market? Register now
              and get the latest updates on the trending gadgets.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <p className="text-red-500">Email is required</p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                  })}
                />
                {errors.password && (
                  <p className="text-red-500">
                    {errors.password.type === "required"
                      ? "Password is required"
                      : errors.password.type === "minLength"
                      ? "Password must be at least 6 characters"
                      : "Invalid password"}
                  </p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  {...register('confirmPassword', {
                    required: true,
                    validate: (value) => {
                      if(watch('password') != value){
                        return " Passwords do not match "
                      }
                    }
                  })}
                />
                {errors.confirmPassword && 
                <p className="text-red-500">Both Password must match</p>
                }
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">Register</button>
              </div>
              <p className="mb-4 text-center text-sm ">
                Already Have an account! just{" "}
                <Link to="/login" className="text-blue-500 font-bold">
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
