import React from 'react';
import Moment from 'react-moment';
import { currencyFormatter, phoneNumberFormatter } from '../utils/formatters';

// AccountDataList is a separate component because I imagine it could have more functionality in the future, i.e. links to more account info
class AccountDataList extends React.Component {
  render() {
    const { account } = this.props;
    return (
      <ul className='account-data-list'>
        <li><label>Name:</label>{account.LastName}, {account.FirstName}</li>
        <li><label>Email:</label>{account.Email}</li>
        <li><label>Phone Number:</label>{phoneNumberFormatter(account.PhoneNumber)}</li>
        <li><label>Amount Due:</label>{currencyFormatter(account.AmountDue)}</li>
        {account.PaymentDueDate ?
          <li>
            <label>Due Date:</label>
            <Moment format="MM/DD/YYYY"> 
              {account.PaymentDueDate}
            </Moment>
          </li>
          : null}
      </ul>
    )
  }
}

export default AccountDataList;