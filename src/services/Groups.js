import {
  api,
  getToken,
} from './api';

getToken();

export async function store( name, subject ) {
  try {

  } catch {

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
