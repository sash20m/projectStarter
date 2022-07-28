import {axios} from '../axios';

const logUser = async (): Promise<any> => {
  const {data} = await axios.get('');
  return data;
};

export {logUser};
