// I broke out this single API call into a separate service to allow for more API calls to be stored here in the future
import axios from 'axios';

export default {
  async fetchAccounts() {
    const response = await axios.get('https://frontiercodingtests.azurewebsites.net/api/accounts/getall')
    return response.data;
  }
}