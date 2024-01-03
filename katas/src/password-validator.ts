export default function passwordValidator(password: string) {
    if (password.length < 8) return "Error: The password must have at least 8 characters";
    if (!hasUppercaseLetter(password)) return "Error: The password must have at least 1 uppercase letter";
    if (!hasLowercaseLetter(password)) return "Error: The password must have at least 1 lowercase letter";
    if (!hasNumber(password)) return "Error: The password must have at least 1 number";
    return true;
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
