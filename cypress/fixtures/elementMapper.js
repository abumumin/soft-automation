class ElementMapper{
      /* All variables requires to apply on each test case
    will be added and parsed into each file from here*/


       // Create User locators and details
    registerButton = 'Register'
    firstNameField = '#exampleInputEmail1'
    firstNameText = 'Mumin'
    lastNameField = '#exampleInputEmail2'
    lastNameText = 'Abubakar'
    emailField = 'input#exampleInputEmail4[placeholder="Enter email"]'
    emailText = 'abumumin14@gmail.com'
    phoneNumberField = 'input#exampleInputEmail4[placeholder="Enter phone number"]'
    phoneNumberText = '08036557223'
    passwordField = 'input[name="password"]'
    passwordText = '@Abumumin14'
    submitButton = 'span[ng-hide="registerVm.logging"]'

     // Real Time Error locators

    firstNameErrorDisplay = 'span[data-ng-show="form.fname.$invalid&&form.$submitted"] small'
    firstNameErrorText = 'Please enter first name'
    lastNameErrorDisplay = 'span[data-ng-show="form.lname.$invalid&&form.$submitted"] small'
    lastNameErrorText = 'Please enter last name'
    emailErrorDisplay ='span[data-ng-show="form.email.$error.required&&form.$submitted"] small'
    emailErrorText = 'Please enter email address'
    phoneNumberErrorDisplay = 'span[data-ng-show="form.phone.$error.required&&form.$submitted"] small'
    phoneNumberErrorText = 'Please enter phone number'
    passwordErrorDisplay = 'span[data-ng-show="form.password.$invalid&&form.$submitted"] small'
    passwordErrorText = 'Please enter password'

    //  Success Alert Locators and DetailsButtonText
    successAlert = ''
    successAlertText = ''
    recordContainer = 'body[class="ng-scope login"]'

    //Login in Locators and details button

    loginEmailFiled = '#inputEmail'
    loginPasswordField = '#inputPassword'
    loginPasswordText = '@Sapphire1'
    signInButton = 'button[type="submit"]'
    
}
export default ElementMapper;