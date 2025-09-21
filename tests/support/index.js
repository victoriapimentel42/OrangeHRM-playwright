const {test: base, expect} = require('@playwright/test')

import { Login } from './pages/Login';
import { Home } from './pages/Home';
import { Span } from './components/Span';
import { EmployeesBD } from './fixtures/employees';
import { UsersBd } from './fixtures/users';

const test = base.extend({
    page: async({page}, use) => {

        const context = page

        context['login'] = new Login(page);
        context['home'] = new Home(page);
        context['span'] = new Span(page);
        context['employeesBd'] = new EmployeesBD(page);
        context['usersBd'] = new UsersBd(page);

        await use(context);
    }
})

export{test,expect}