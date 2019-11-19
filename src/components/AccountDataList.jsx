import React from 'react';

class AccountDataList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { account } = this.props;
    return (
      <ul className='account-data-list'>
        <li><label>Name:</label>{account.LastName}, {account.FirstName}</li>
        <li><label>Email:</label>{account.Email}</li>
        <li><label>Phone Number:</label>{account.PhoneNumber}</li>
        <li><label>Amount Due:</label>{account.AmountDue}</li>
        <li><label>Due Date:</label>{account.DueDate}</li>
      </ul>
    )
  }
}

export default AccountDataList;