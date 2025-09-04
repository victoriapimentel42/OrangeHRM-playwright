const {test: base, expect} = require('@playwright/test')

import { Login } from './pages/Login';
import { Home } from './pages/Home';
import { Span } from './components/Span';
const test = base.extend({
    page: async({page}, use) => {

        const context = page

        context['login'] = new Login(page)
        context['home'] = new Home(page)
        context['span'] = new Span(page)

        await use(context)
    }
})

export{test,expect}