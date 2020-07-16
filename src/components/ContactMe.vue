<template>
    <div id="Contact">
        <b-container>
            <b-row align-h="center" align-v="center">
                <b-col>
                    <h1>Contact me</h1>
                    <h5> {{contact_message}}</h5>
                </b-col>
            </b-row>
            <b-row align-h="center" align-v="center">
                <b-col lg="6">
                    <b-form @submit="onSubmit" v-if="show" id="contactForm">
                        <b-form-group id="input-group-1">                    
                            <b-form-input 
                                id="input-1" 
                                v-model="$v.form.name.$model"
                                :state="validateState('name')"
                                required 
                                placeholder=" " 
                                @input="$v.form.name.$touch()" 
                                @blur="$v.form.name.$touch()" 
                                type="text"
                                :error-messages="nameErrors">
                            </b-form-input>
                            <label class="input-label" for="input-1"> <span class="label-text">Your Name</span> </label>
                        </b-form-group>
                        <b-form-group id="input-group-2">  
                            <b-form-input 
                                id="input-2" 
                                v-model="$v.form.email.$model" 
                                :state="validateState('email')"
                                type="email" 
                                required 
                                placeholder=" "
                                @input="$v.form.email.$touch()" 
                                @blur="$v.form.email.$touch()" 
                                :error-messages="emailErrors"
                            ></b-form-input>
                            <label class="input-label" for="input-2"> <span class="label-text">Email address</span> </label>
                        </b-form-group>
                        <b-form-group id="input-group-3">
                            
                            <b-form-textarea 
                                id="textarea" 
                                v-model="$v.form.message.$model" 
                                rows="3" 
                                max-rows="6" 
                                required 
                                placeholder=" "
                                @input="$v.form.message.$touch()" 
                                @blur="$v.form.message.$touch()" 
                                :error-messages="messageErrors"
                            ></b-form-textarea>
                             <label class="input-label" for="textarea"> <span class="label-text">Your message</span> </label>
                        </b-form-group>
                        <b-button class="contact_submit" >Submit</b-button>
                    </b-form>
                </b-col>

            </b-row>
        </b-container>
    </div>
</template>

<script>

import { required, minLength, email } from 'vuelidate/lib/validators'
import axios from 'axios'
export default {
    name: "ContactMe",
    props:['contact_message'],
    data() {
      return {
        form: {
          email: '',
          name: '',
          message: ''
          },
        submitStatus: null,
        show: true
       }
    },
    validations: {
        form: {
            name: {
                required,
                minLength: minLength(4)
            },
            email:{
                required,
                email
            },
            message: {
                required
            }
        }
    },
    computed: {
        nameErrors() {
            const errors = [];
            if (!this.$v.form.name.$dirty) return errors;
            !this.$v.form.name.minLength && errors.push('name must contain a minimum of 4 characters');
            !this.$v.form.name.required && errors.push('A name is required');
            return errors;
        },
        emailErrors() {
            const errors = [];
            if (!this.$v.form.email.$dirty) return errors;
            //!this.$v.form.email.minLength && errors.push('email must contain a minimum of 4 characters');
            !this.$v.form.email.required && errors.push('A email is required');
            return errors;
        },
        messageErrors() {
            const errors = [];
            if (!this.$v.form.message.$dirty) return errors;
            //!this.$v.form.message.minLength && errors.push('message must contain a minimum of 4 characters');
            !this.$v.form.message.required && errors.push('A message is required');
            return errors;
        }

    },
    methods: {
        validateState(name) {
            const { $dirty, $error } = this.$v.form[name];
            return $dirty ? !$error : null;
        },
      onSubmit(evt) {
        evt.preventDefault()
        console.log('submit!')
        this.$v.$touch()
        if (this.$v.$invalid) {
            this.submitStatus = 'ERROR'
        } else {
            axios.post('http://127.0.0.1:8000/api/contact/', {
                name: this.$v.form.name.$model,
                email: this.$v.form.email.$model,
                message: this.$v.form.message.$model
            })
            .then( (response) => {
                console.log(response);
            })
            .catch( (error) => {
                console.log(error);
            });
                    }

        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.text = ''
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>

<style scoped>
*:focus {
    outline: none;
}
.form-control:focus {
    box-shadow: none;
}
#Contact{
   padding: 1rem;
    color: #000;
    min-height: 500px;
    justify-content: center;
    align-items: center;
    display: flex;
    height: auto;
}
#contactForm {
    margin-top: 1rem;
    position: relative;
}

#contactForm .form-group {
    position: relative;
    margin-bottom: 1.5rem;

}


#contactForm .form-group input:focus,
#contactForm .form-group textarea {
    outline: none;
    border: none;
}
input:focus {
    outline:none;
}


#contactForm .form-group input {
    padding: 15px 0 0 0;
    border: 1px solid #ccc;
    border: none;
}

#contactForm .form-group textarea {
    margin: 15px 0 0 0;
    border: 1px solid #ccc;
    border: none;
}

#contactForm .form-group label {
    position: absolute;
    left: 0;
    top: 0px;
    pointer-events: none;
    border-bottom: 2px solid rgb(133, 133, 133);
    width: 100%;
    height: 100%;
    text-align: left;
    margin: 0;
}

#contactForm .form-group label::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -2px;
    height: 100%;
    width: 0%;
    border-bottom: 3px solid #0077b6;
    transition: width 0.3s ease-in;
}

#contactForm .form-group .label-text {
    position: absolute;
    top: 15px;
    left: 0;
    transition: all 0.3s ease;
    font-size: 18px;
}

#contactForm input:focus + .input-label .label-text,
#contactForm textarea:focus + .input-label .label-text,
#contactForm input:not(:placeholder-shown) + .input-label .label-text,
#contactForm textarea:not(:placeholder-shown) + .input-label .label-text  {
    transform: translateY(-100%) scaleX(0.9) ;
    color: #0077b6;
}

#contactForm input:focus + label::after,
#contactForm textarea:focus + label::after,
#contactForm input:not(:placeholder-shown) + label::after,
#contactForm textarea:not(:placeholder-shown) + label::after  {
    width:100% ;
}

.contact_submit,
.contact_submit:active {
    color: #fff;
    background: #0096c7 ;
    border: 1px solid #0096c7 ;
}

.contact_submit:hover {
    color: #fff;
    background: #00b4d8;
    border: 1px solid #00b4d8;
}

.contact_submit:focus {
    color: #fff;
    box-shadow: 0 0 0 0.2rem #00b4d8;
}
</style>