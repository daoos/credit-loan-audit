import Vue from 'vue';
import VeeValidate,{Validator} from 'vee-validate';
// import VeeValidate,{Validator}  from 'vee-validate/dist/vee-validate.esm.js'
import zh from 'vee-validate/dist/locale/zh_CN'
import messages from '../assets/js/zh_CN';


Validator.updateDictionary({
    zh_CN: {
        messages
    }
});


const config = {
  locale: 'zh_CN', 
  strict: true,
  // events: 'input|blur',
  delay: 1000, 

};


Vue.use(VeeValidate, config);
