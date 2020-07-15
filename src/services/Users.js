import {
  api,
  setToken,
} from './api';

export async function store( email, username ) {
  try {
    const { data } = await api.post('/users', {
      email,
      username,
    });

    if( data.success ) {
      localStorage.setItem('ChatDev@user_id', data.user_id );
    }

    return { success: data.success, message: data.message };
  } catch {
    return { success: false, message: 'Falha ao se comunicar com o servidor!'};
  }
};

export async function verifyCode( code, password, confirmPassword ) {
  try {
    const user_id = localStorage.getItem('ChatDev@user_id');

    const { data } = await api.post(`/users/code/${ user_id }`, {
      code,
      password,
      confirmPassword,
    });

    return { success: data.success, message: data.message };
  } catch {
    return { success: false, message: 'Falha ao se comunicar com o servidor!'};
  }
};

export async function login( username, password ) {
  try {
    const { data } = await api.post('/users/login', {
      username,
      password,
    });

    if( data.success ) {
      setToken( data.token );
    }

    return { success: data.success, message: data.message };
  } catch {
    return { success: false, message: 'Falha ao se comunicar com o servidor!'};
  }
};
