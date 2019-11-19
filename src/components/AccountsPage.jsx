import React from 'react';
import AccountsService from '../services/AccountsService';
import AccountColumn from './AccountColumn';

class AccountsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeAccounts: [],
      overdueAccounts: [],
      inactiveAccounts: [],
      errorMessage: undefined,
    }
  }

  componentDidMount() {
    this.getAccounts();
  }

  getAccounts = () => {
    AccountsService.fetchAccounts()
      .then(res => {
        if (res.length === 0) this.setState({ errorMessage: 'No accounts available at this time.' });
        return this.organizeAccounts(res);
      }).catch(err => {
        // TODO: better error handling for this call
        this.setState({ errorMessage: err })
      })
  }

  organizeAccounts = (accounts) => {
    const active = accounts.filter(acct => acct.AccountStatusId === 0);
    const overdue = accounts.filter(acct => acct.AccountStatusId === 1);
    const inactive = accounts.filter(acct => acct.AccountStatusId === 2);

    this.setState(() => ({
      activeAccounts: active,
      overdueAccounts: overdue,
      inactiveAccounts: inactive,
    }))
  }

  render() {
    return (
      <main className='content grid' id='home-content'>
        <div className='content-title-container'>
          <h2>Accounts</h2>
        </div>
        <section className='grid' id='account-grid'>
          <AccountColumn
            accounts={this.state.activeAccounts}
            classProp={'active'}
            headerText={'Active'}
          />
          <AccountColumn
            accounts={this.state.overdueAccounts}
            classProp={'overdue'}
            headerText={'Overdue'}
          />
          <AccountColumn
            accounts={this.state.inactiveAccounts}
            classProp={'inactive'}
            headerText={'Inactive'}
          />
        </section>
      </main>
    )
  }
}

export default AccountsPage;