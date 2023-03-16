# Sh Dynamic Tabs
 An easy way to incorporate bootstrap 5 tabs

## importing

```javascript
import {ShDynamicTabs} from '@silahkosgei/sfrontend'
import TabOne from './tabs/TabOne.vue'
import TabTwo from './tabs/TabTwo.vue'
```

## Example Usage

```html
<sh-dynamic-tabs
        :tabs="[
      {
    label: 'Tab One',
    component: TabOne
    },
    {
    label: 'Tab Two',
    component: TabTwo
    }
  ]"
/>
```
