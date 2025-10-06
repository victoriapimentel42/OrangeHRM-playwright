const {test: base, expect} = require('@playwright/test')

import { Login } from './pages/Login';
import { Home } from './pages/Home';
import { Span } from './components/Span';
import { EmployeesBd } from './fixtures/EmployeesBd';
import { UsersBd } from './fixtures/UsersBd';
import { Dashboard } from './pages/Dashboard';
import { User } from './pages/User';

const test = base.extend({
    page: async({page}, use) => {

        const context = page

        context['login'] = new Login(page);
        context['home'] = new Home(page);
        context['span'] = new Span(page);
        context['employeesBd'] = new EmployeesBd(page);
        context['usersBd'] = new UsersBd(page);
        context['dashboard'] = new Dashboard(page);
        context['user'] = new User(page);


        await use(context);
    }
})

export{test,expect}