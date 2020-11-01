import request from '../../api/agent';

export const getUserAsync = async(name) => {
  const data = request
    .get(`/users/${name}`)
    .catch(error => {
      throw error;
    })
    return data;
}