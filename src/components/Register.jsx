import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase.init";
import Swal from "sweetalert2";


const Register = () => {
     const navigate = useNavigate()
  const { setuser, CreateNewUser,updateUserProfile} = useContext(AuthContext)
   const [imageBase64, setImageBase64] = useState(null);
  
   const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
    
        reader.onloadend = () => {
          setImageBase64(reader.result); // base64 string
        };
    
        if (file) {
          reader.readAsDataURL(file);
        }
      };

  const handleSubmit = (e) => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
    const name = e.target.name.value
    const photoUrl =e.target.photo.value
    
    const data ={name,email,photoUrl}
    fetch('https://chillgamer-server.onrender.com/user',{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
           })
           .then(res=>res.json())
           .then(data=>{
      
            
               Swal.fire({
                 title:'Success',
                 text:"Register Successfully",
                 icon:'success',
                 confirmButtonText:'Cool'
               })
             
               
            
           })
           .catch(errors=>{
              Swal.fire({
                 title:'Error',
                 text:`${errors.message}`,
                 icon:'error',
                 confirmButtonText:'Cool'
               })
           })
        CreateNewUser(email, password)
        .then((result) => {
            const user = result.user;
            setuser(user);
            toast.success("Successfully Registered", {
                position: "top-center",
                autoClose: 2000,
            });

            updateUserProfile(name, photoUrl)
            .then(() => {
               
                navigate("/");
                toast.success("Profile updated successfully")
            })
    });
  }
  
   const auth = getAuth(app)
  const provider = new GoogleAuthProvider()
  const handelLoginWithGoogle = () => {
    
    signInWithPopup(auth, provider)
      .then(res => {
        setuser(res.user)
         res.user && navigate('/')
      })
      .catch(error => {
       
      })
     
     
  }

    return (
       <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          REGISTER
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              User name
            </label>
            <input
              type="text"
              id="text"

              name='name'
              className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter User Name"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              User Email
            </label>
            <input
              type="email"
              id="text"

              name='email'
              className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your Email"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="photo Url"
              className="block text-sm font-medium text-gray-700"
            >
              Photo Url
            </label>
            <input
              type="text"
              id="text"

              name='photo'
              className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter Photo url"
              required
            />
          </div>
          {/* <div className="mb-6">
             <label >Select Your Image</label>
                        <input
                            type="file"
                            name="image_url"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="w-full border p-2 rounded"
                            required
                        />
          </div> */}
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"

              name='password'
              className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Register
          </button>
          <div className="text-center mt-2"><span>Already an acount? </span> <Link to='/login'><span className="text-green-600 hover:underline">loging now</span></Link></div>
           <div className="text-center mt-2 mb-2">--------------- or ---------------</div>
          <button onClick={handelLoginWithGoogle} className="btn w-full bg-white flex justify-center items-center gap-2   text-black border p-2 rounded-xl ">
            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
            <div>Login with Google</div>
          </button>
       
        </form>
      </div>
    </div>
    );
};

export default Register;