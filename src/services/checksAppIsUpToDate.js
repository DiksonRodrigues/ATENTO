import api from './api';
import { VERSION_NAME } from '../../env.local';

export default async function checksAppIsUpToDate() {
  try {
    const response = await api(false).get(
      '/ControleVersao/ultimaVersao/APP-ATENTO',
    );
    const isAppUpToDate = VERSION_NAME === response.data.versaoID;

    return isAppUpToDate;
  } catch (error) {
    return true;
  }
}
