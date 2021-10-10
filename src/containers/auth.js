import Axios from "axios";

// https://social-media-uit.herokuapp.com/posts -> Method: post -> for creating post
// title
// description
// image
// username

// https://social-media-uit.herokuapp.com/posts -> Method: get -> to fetch the posts

// https://social-media-uit.herokuapp.com/like -> Method: post
// userLiking
// postId
const useAuthCounteiner = () => {
  const signup = async (name, email, password) => {
    try {
      const res = await Axios.post(
        "https://social-media-uit.herokuapp.com/user/register",
        {
          username: name,
          email,
          password,
        }
      );
      if (res?.status === 200 && res?.data?.userId) {
        return {
          isSuccess: true,
          message: "User registered successfully!",
        };
      }
      throw new Error("");
    } catch (error) {
      console.log({ error });
      if (error?.response?.status === 409) {
        return {
          isSuccess: false,
          message: error?.response?.data?.message,
        };
      }
      return {
        isSuccess: false,
        message: "Failed",
      };
    }
  };

  const login = async (name, password) => {
    try {
      const res = await Axios.post(
        "https://social-media-uit.herokuapp.com/user/login",
        {
          username: name,
          password,
        }
      );
      if (res?.status === 200 && res?.data?.token) {
        return {
          isSuccess: true,
          data: {
            token: res.data.token,
            user: res.data.user,
          },
        };
      }
      throw new Error("");
    } catch (error) {
      console.log({ error });
      return {
        isSuccess: false,
        message: error?.data?.message || "Failed",
      };
    }
  };

  return {
    createUser: signup,
    loginUser: login,
  };
};

export default useAuthCounteiner;
