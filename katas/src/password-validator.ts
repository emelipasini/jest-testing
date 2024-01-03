export default function passwordValidator(password: string) {
    const errors: string[] = [];

    if (!hasAtLeast8Characters(password)) saveError("8 characters", errors);
    if (!hasUppercaseLetter(password)) saveError("1 uppercase letter", errors);
    if (!hasLowercaseLetter(password)) saveError("1 lowercase letter", errors);
    if (!hasNumber(password)) saveError("1 number", errors);
    if (!hasSpecialCharacter(password)) saveError("1 special character", errors);

    return errors.length === 0 ? true : errors;
}

function hasAtLeast8Characters(password: string) {
    return password.length >= 8;
}

function hasUppercaseLetter(password: string) {
    return /.*[A-Z].*/.test(password);
}

function hasLowercaseLetter(password: string) {
    return /.*[a-z].*/.test(password);
}

function hasNumber(password: string) {
    return /.*[0-9].*/.test(password);
}

function hasSpecialCharacter(password: string) {
    return /.*[!-\/:-@[-`{-~].*/.test(password);
}

function saveError(condition: string, errors: string[]) {
    errors.push(`The password must have at least ${condition}`);
}
