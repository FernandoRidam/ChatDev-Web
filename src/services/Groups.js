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

    return { success: data.success, message: data.message, groups: data.groups };
  } catch {
    return { success: false, message: 'Falha ao se comunicar com o servidor!'};
  }
};

export async function indexInteracting() {
  try {
    const { data } = await api.get('/groups/interacting');

    return { success: data.success, message: data.message, groups: data.groups };
  } catch {
    return { success: false, message: 'Falha ao se comunicar com o servidor!'};
  }
};
