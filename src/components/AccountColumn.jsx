import React from 'react';

class AccountColumn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const {
      accounts,
      classProp,
      headerText,
    } = this.props;

    return (
      <section className='account-column grid' id={`${classProp}-account-column`}>
        <div className='account-container-title' id={`${classProp}-account-container-title`}>
          <h3>{headerText}</h3>
        </div>
        <div className={`account-container ${classProp}-account`}>
          <ul className='account-data-list'>
            {/* <li><label>Name:</label>{accounts[0].LastName}, {accounts[0].FirstName}</li>
            <li><label>Email:</label>{accounts[0].Email}</li>
            <li><label>Phone Number:</label>{accounts[0].PhoneNumber}</li>
            <li><label>Amount Due:</label>{accounts[0].AmountDue}</li>
            <li><label>Due Date:</label>{accounts[0].DueDate}</li> */}
          </ul>
        </div>
      </section>
    )
  }
}

export default AccountColumn;