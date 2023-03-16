# Installation

Install this package in your existing or freshly installed vue 3 framework 
using vite

```shell
npm install @silahkosgei/sfrontend
```

In main.js or the entry file for vue js, import and use ``ShFrontend``

```javascript
import {ShFrontend} from '@silahkosgei/sfrontend'
```

Then use it this way, in the options ```sessionTimeout``` is the number of minutes that you wish the session
| to be allowed to remain idle before it expires.

```javascript
app.use(ShFrontend,{
  sessionTimeout: 120
})
```


