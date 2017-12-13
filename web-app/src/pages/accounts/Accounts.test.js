import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import { inRouter } from 'test-helpers/router'
import { Accounts } from './Accounts'
import { withWeb3 } from 'services/web3'

jest.mock('services/web3/withWeb3')

it('renders without crashing', async () => {
  const div = document.createElement('div')
  await ReactDOM.render(inRouter(withWeb3(Accounts), '/accounts'), div)
})

it('renders correctly', async () => {
  const accounts = await renderer
    .create(inRouter(withWeb3(Accounts), '/accounts'))
  expect(accounts.toJSON()).toMatchSnapshot()
})
