import axios from 'axios';
import jwtDecode from 'jwt-decode';

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

// export const createOrGetUser = async (response: any) => {
//   const { credential } = response;
  
//   const decoded:{ name: string, picture: string,sub:string } = jwtDecode(credential)

//   console.log(decoded);


};