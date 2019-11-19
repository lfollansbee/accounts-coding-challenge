// I could have had this single API call in the component, but I put it into a separate service to allow for expansion for additional
// API calls to be stored here in the future
import axios from 'axios';

export default {
  async fetchAccounts() {
    const response = await axios.get('https://frontiercodingtests.azurewebsites.net/api/accounts/getall')
    return response.data;
  }
}