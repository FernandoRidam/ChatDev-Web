import {
  api,
  getToken,
} from './api';

getToken();

export async function storeMessage( group_id, text ) {
  try {
    const { data } = await api.post(`/messages/${ group_id }`, {
      text,
    });

    if( data.success ) {
      return { success: data.success, message: data.message, newMessage: data.messageData };
    }
  } catch {
    return { success: false, message: 'Falha ao se comunicar com o servidor!'};
  }
};

export async function listMessage( group_id, page ) {
  try {
    const { data } = await api.get(`/messages/${ group_id }`, {
      params: {
        page,
      }
    });

    if( data.success ) {
      return { success: data.success, message: data.message, messages: data.messages, totalCount: data.totalCount };
    } else {
      return { success: data.success, message: data.message };
    }
  } catch {
    return { success: false, message: 'Falha ao se comunicar com o servidor!'};
  }
};
