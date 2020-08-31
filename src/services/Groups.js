import {
  api,
  getToken,
} from './api';

getToken();

export async function storeGroup( name, subject ) {
  try {
    const { data } = await api.post('/groups', {
      name,
      subject,
    });

    return { success: data.success, message: data.message, group: data.group };
  } catch {
    return { success: false, message: 'Falha ao se comunicar com o servidor!'};
  }
};

export async function index() {
  try {
    const { data } = await api.get('/groups');

    return { success: data.success, message: data.message, groupsNotInteracting: data.groupsNotInteracting, interactingGroups: data.interactingGroups };
  } catch {
    return { success: false, message: 'Falha ao se comunicar com o servidor!'};
  }
};

export async function joinToGroup( group_id ) {
  try {
    const { data } = await api.get(`/groups/join/${ group_id }`);

    return { success: data.success, message: data.message };
  } catch {
    return { success: false, message: 'Falha ao se comunicar com o servidor!'};
  }
};

export async function exitOfGroup( group_id ) {
  try {
    const { data } = await api.get(`/groups/exit/${ group_id }`);

    return { success: data.success, message: data.message };
  } catch {
    return { success: false, message: 'Falha ao se comunicar com o servidor!'};
  }
};

export async function deleteGroup( group_id ) {
  try {
    const { data } = await api.delete(`/groups/${ group_id }`);

    return { success: data.success, message: data.message };
  } catch {
    return { success: false, message: 'Falha ao se comunicar com o servidor!'};
  }
};

export async function updateGroup( group_id, name, subject ) {
  try {
    const { data } = await api.put(`/groups/${ group_id }`, {
      name,
      subject,
    });

    return { success: data.success, message: data.message };
  } catch {
    return { success: false, message: 'Falha ao se comunicar com o servidor!'};
  }
};
