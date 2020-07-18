import {
  api,
  getToken,
} from './api';

getToken();

export async function listMessage( group_id ) {
  try {
    const { data } = await api.get(`/messages/${ group_id }`);

    if( data.success ) {
      return { success: data.success, message: data.message, messages: data.messages };
    } else {
      return { success: data.success, message: data.message };
    }
  } catch {
    return { success: false, message: 'Falha ao se comunicar com o servidor!'};
  }
};
