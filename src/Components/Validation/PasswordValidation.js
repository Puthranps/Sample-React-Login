'use strict'

/**
* @param password
* @return boolean: Password has atleast one number
*/
const numberCount = password => {
    return new RegExp(/[0-9]/).test(password);
}

/**
* @param password(string)
* @return boolean:
*/
const isMixed = password => {
    return new RegExp(/[a-z]/).test(password) &&
      new RegExp(/[A-Z]/).test(password);
}

/**
* @param password(string)
* @return boolean: Whether the password has at least one number in it
*/
const hasSpecial = password => {
    return new RegExp(/[!#@$%^&*)(+=._-]/).test(password);
}

/**
* @param: strength(number)
* @return color: color will indicate the strength of the password for the user
*/
export const strengthColor = strength => {

    if (strength < 2)
        return 'red';

    if (strength < 3)
        return 'yellow';

    if (strength < 4)
        return 'orange';

    if (strength < 5)
        return 'lightgreen';

    if (strength < 6)
        return 'green';
}

/**
* @param: password(string)
* @return number: overall number grade for password strength
*/
export const strengthIndicator = password => {
    let strength = 0;

    if (password.length > 5)
        strength++;

    if (password.length > 7)
        strength++;

    if (hasNumber(password))
        strength++;

    if (hasSpecial(password))
        strength++;

    if (hasMixed(password))
        strength++;

    return strength;
}
