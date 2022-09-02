import jwt from "jwt-decode";

const fetchToken = (token: string) => {
  const payloadToken: {
    id: string;
    userName: string;
    iat: number;
  } = jwt(token);

  const user = {
    token: token,
    id: payloadToken.id,
    userName: payloadToken.userName,
  };
  return user;
};

export default fetchToken;
